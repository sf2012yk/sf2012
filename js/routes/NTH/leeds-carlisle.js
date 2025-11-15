// 鉄道ルート
const Leeds_NTH = [53.7946841310327, -1.5475408292829431];
const Bingley = [53.84867598323501, -1.8373129664466459];

const Cononley = [53.91747294657412, -2.012010236321917];
//カーブ北東//
const Skipton_s = [53.95536105560979,-2.0202095927016597];
const Cn_Skipton = [
(53.95536105560979 + 53.958411467256056) / 2 + 0.0009, //東//
(-2.0202095927016597 + -2.0263963843994035) / 2 + 0.0014 //北//
];
const Skipton = [53.958411467256056,-2.0263963843994035]; 
const CP_Skipton = adaptiveBezierCurve(Skipton_s,Cn_Skipton,Skipton,1);
const CP_Skipton_Un = resamplePath(CP_Skipton, 5);
const Skipton_n = [53.958500418113196, -2.0290370100084716]; 
const Settle = [54.06688536084535, -2.2809156611312402]; //Settle駅
const Ribblehead = [54.20554493462866, -2.360514349954543]; //Ribblehead駅
const Dent = [54.28242732080147, -2.363559330158231];
const Garsdale = [54.32145844393467, -2.326242736630291];
const KirkbyStephen = [54.4552533088809, -2.3694000526779164];
const Appleby = [54.58042250402391, -2.4864566556569154];
const Langwathby = [54.694375701334906, -2.663607049908578];
const Lazonby = [54.75019332316334, -2.7027944773894776];
const Carlisle_ST = [54.89053256020592, -2.933184282739173];

// ルート
const NTH_LdCr = L.polyline([
Leeds_NTH,Bingley,Cononley,...CP_Skipton_Un,
Skipton_n,
Settle,
Ribblehead,
Dent,
Garsdale,KirkbyStephen,Appleby,Langwathby,Lazonby,
Carlisle_ST], { color: '#000000' }).addTo(map);

// Leeds → Carlisle へ滑らかに移動する関数
//イベント登録を無制限制限
map.on('popupopen', function (e) {
  const LeedsToCarlisleBtn = document.getElementById('LeedsToCarlisleCard');
  if (LeedsToCarlisleBtn) {
    const newBtn = LeedsToCarlisleBtn.cloneNode(true);
    LeedsToCarlisleBtn.parentNode.replaceChild(newBtn, LeedsToCarlisleBtn);

    newBtn.addEventListener('click', () => {
      if (!animationRunning) {
        LeedsToCarlisle();
      }
    });
  }
  })

function LeedsToCarlisle() {
  if (animationRunning) return; // ← すでに動いていたら何もしない
  animationRunning = true;

  markerLeeds.closePopup(); // ← 移動前にLeeds（始発）のポップアップを閉じる

  // 🚄 アイコン付きマーカーを表示（初期位置）
  const trainIcon = L.icon({
    iconUrl: "image/icon/train_test.png",// アイコン画像のURL
    iconRetinaUrl:"image/icon/train_test@2x.png",
    iconSize: [40, 40],
    iconAnchor: [25, 25],
    className: "icon-train"
  });

  const trainMarker = L.marker(Leeds_NTH, { icon: trainIcon }).addTo(map);

  const fullPath = interpolatePolyline(NTH_LdCr , 50);// ← 数字が少ないほどスピードアップ

  const LeedsToCarlisleIndex = fullPath.findIndex(p => 
    Math.abs(p[0] - Carlisle_ST[0]) < 0.0001 && 
    Math.abs(p[1] - Carlisle_ST[1]) < 0.0001
  );

  const pathToLeedsToCarlisle = fullPath.slice(0, LeedsToCarlisleIndex + 1);
  // ✅ ここに animatePath を定義
  const totalFrames = pathToLeedsToCarlisle.length;
  let frame = 0;

  function animate() {
   
   const index = frame;

    if (index < pathToLeedsToCarlisle.length) {
      trainMarker.setLatLng(pathToLeedsToCarlisle[index]); // ← マーカーを移動
      map.panTo(pathToLeedsToCarlisle[index], { animate: true, duration: 0.03 });
      frame++;
      setTimeout(animate, 20); // ← 速度調整（数字が少ないほどスピードアップ）50座標 × 30ms = 約1.5秒
    } else {
      setTimeout(() => {
        markerCarlisle.openPopup();
        map.removeLayer(trainMarker); // アイコンを削除
        animationRunning = false;
      }, 100);

    }
  }
  animate();
}

// Carlisle　→　Leedsへ滑らかに戻る関数
//イベント登録を無制限制限
map.on('popupopen', function (e) {
  const CarlisleToLeedsBtn = document.getElementById('CarlisleToLeedsCard');
  if (CarlisleToLeedsBtn) {
    const newBtn = CarlisleToLeedsBtn.cloneNode(true);
    CarlisleToLeedsBtn.parentNode.replaceChild(newBtn, CarlisleToLeedsBtn);

    newBtn.addEventListener('click', () => {
      if (!animationRunning) {
        CarlisleToLeeds();
      }
    });
  }
  })

function CarlisleToLeeds() {
  if (animationRunning) return; // ← すでに動いていたら何もしない
  animationRunning = true;

  markerCarlisle.closePopup(); // ← 移動前にCarlisleのポップアップを閉じる

  // 🚄 アイコン付きマーカーを表示（初期位置）
  const trainIcon = L.icon({
    iconUrl: "image/icon/train_test.png",// アイコン画像のURL
    iconRetinaUrl:"image/icon/train_test@2x.png",
    iconSize: [40, 40],
    iconAnchor: [25, 25],
    className: "icon-train"
  });

  const trainMarker = L.marker(Carlisle_ST, { icon: trainIcon }).addTo(map);

  const fullPath = [...interpolatePolyline(NTH_LdCr, 50)].reverse();// ← 数字が少ないほどスピードアップ

  const CarlisleToLeedsIndex = fullPath.findIndex(p => 
    Math.abs(p[0] - Leeds_NTH[0]) < 0.0001 && 
    Math.abs(p[1] - Leeds_NTH[1]) < 0.0001
  );

  const pathToCarlisleToLeeds = fullPath.slice(0, CarlisleToLeedsIndex + 1);
  
// 最初にジャンプを防ぐ
  map.panTo(pathToCarlisleToLeeds[0], { animate: false });


  let frame = 0;

  function animate() {
   
   const index = frame;

    if (index < pathToCarlisleToLeeds.length) {
      trainMarker.setLatLng(pathToCarlisleToLeeds[index]); // ← マーカーを移動
      map.panTo(pathToCarlisleToLeeds[index], { animate: true, duration: 0.03 });
      frame++;
      setTimeout(animate, 20); // ← 速度調整（数字が少ないほどスピードアップ）
    } else {
      setTimeout(() => {
        markerLeeds.openPopup();
        map.removeLayer(trainMarker); // アイコンを削除
        animationRunning = false;
      }, 100);

    }
  }
  animate();
}



