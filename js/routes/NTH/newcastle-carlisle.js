// ニューカッスル・カーライル
const Newcastle_NTH = [54.96814759160355, -1.6176357599706133];
//カーブ北西//
const PotteryLn_n_NTH = [54.967566644288254,-1.618788844937472];
const Cn_PotteryLn_NTH = [
(54.965366935721256 + 54.967566644288254) / 2 - 0.0009, //西//
(-1.618701106879188 + -1.618788844937472) / 2 - 0.0014 //北//
];
const PotteryLn_s_NTH = [54.965366935721256,-1.618701106879188];
const CP_PotteryLn_NTH = adaptiveBezierCurve(PotteryLn_n_NTH,Cn_PotteryLn_NTH,PotteryLn_s_NTH,0.01);
const CP_PotteryLn_NTH_Un = resamplePath(CP_PotteryLn_NTH, 3);

//カーブ北西//
const KingEdward_Bd_n_NTH = [54.962401114879036,-1.6153462999806965];
const Cn_KingEdward_Bd_NTH = [
(54.96045355192529 + 54.962401114879036) / 2 - 0.0009, //西//
(-1.6152741252638652 + -1.6153462999806965) / 2 + 0.0004 //北//
];
const KingEdward_Bd_s_NTH = [54.96045355192529,-1.6152741252638652];
const CP_KingEdward_Bd_NTH = adaptiveBezierCurve(KingEdward_Bd_n_NTH,Cn_KingEdward_Bd_NTH,KingEdward_Bd_s_NTH,0.4);
const CP_KingEdward_Bd_NTH_Un = resamplePath(CP_KingEdward_Bd_NTH, 3);
const Tyne_Rd_NC_NTH = [54.958593191695414, -1.6172818841657346];
const Dunston = [54.950088839200944, -1.6415414319873984];
const Metrocentre = [54.958953940680416, -1.6653147523278675];
const Blaydon = [54.96599199753817, -1.7128327503149041];
const Wylam = [54.974971380449986, -1.8139533095604448];
const Prudhoe = [54.965865186158375, -1.8647289298564227];
const Stocksfield = [54.947016117030415, -1.9167071088489442];
const RidingMill = [54.948783366543395, -1.9716375626595626];
const Corbridge = [54.9662300828727, -2.0188559731709717];
const Hexham = [54.973411146998664, -2.0946647513553582];
const HaydonBridge = [54.97505994812026, -2.2482591684889726];
const BardonMill = [54.97442878041, -2.343049870790689];
const Haltwhistle = [54.96792005649873, -2.463670659685489];
const Brampton = [54.93195124630741, -2.704647207806789];
const Wetheral = [54.88377222054592, -2.8311524556083767];
const Carlisle_NTH = [54.89053256020592, -2.933184282739173];

// ルート
const NTH_NcCr = L.polyline([
Newcastle_NTH,...CP_PotteryLn_NTH_Un,...CP_KingEdward_Bd_NTH_Un,Tyne_Rd_NC_NTH,
Metrocentre,Blaydon,Wylam,Prudhoe,Stocksfield,RidingMill,
Corbridge,
Hexham,HaydonBridge,BardonMill,
Haltwhistle,Brampton,Wetheral,
Carlisle_NTH], { color: '#000000' }).addTo(map);


// Newcastle → Carlisle へ滑らかに移動する関数
//イベント登録を無制限制限
map.on('popupopen', function (e) {
  const NewcastleToCarlisleBtn = document.getElementById('NewcastleToCarlisleCard');
  if (NewcastleToCarlisleBtn) {
    const newBtn = NewcastleToCarlisleBtn.cloneNode(true);
    NewcastleToCarlisleBtn.parentNode.replaceChild(newBtn, NewcastleToCarlisleBtn);

    newBtn.addEventListener('click', () => {
      if (!animationRunning) {
        NewcastleToCarlisle();
      }
    });
  }
  })

function NewcastleToCarlisle() {
  if (animationRunning) return; // ← すでに動いていたら何もしない
  animationRunning = true;

  markerNewcastle.closePopup(); // ← 移動前にNewcastle（始発）のポップアップを閉じる

  // 🚄 アイコン付きマーカーを表示（初期位置）
  const trainIcon = L.icon({
    iconUrl: "image/icon/train_test.png",// アイコン画像のURL
    iconRetinaUrl:"image/icon/train_test@2x.png",
    iconSize: [40, 40],
    iconAnchor: [25, 25],
    className: "icon-train"
  });

  const trainMarker = L.marker(Newcastle_NTH, { icon: trainIcon }).addTo(map);

  const fullPath = interpolatePolyline(NTH_NcCr , 50);// ← 数字が少ないほどスピードアップ

  const NewcastleToCarlisleIndex = fullPath.findIndex(p => 
    Math.abs(p[0] - Carlisle_NTH[0]) < 0.0001 && 
    Math.abs(p[1] - Carlisle_NTH[1]) < 0.0001
  );

  const pathToNewcastleToCarlisle = fullPath.slice(0, NewcastleToCarlisleIndex + 1);
  // ✅ ここに animatePath を定義
  const totalFrames = pathToNewcastleToCarlisle.length;
  let frame = 0;

  function animate() {
   
   const index = frame;

    if (index < pathToNewcastleToCarlisle.length) {
      trainMarker.setLatLng(pathToNewcastleToCarlisle[index]); // ← マーカーを移動
      map.panTo(pathToNewcastleToCarlisle[index], { animate: true, duration: 0.03 });
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


// Carlisle　→　Newcastleへ滑らかに戻る関数
//イベント登録を無制限制限
map.on('popupopen', function (e) {
  const CarlisleToNewcastleBtn = document.getElementById('CarlisleToNewcastleCard');
  if (CarlisleToNewcastleBtn) {
    const newBtn = CarlisleToNewcastleBtn.cloneNode(true);
    CarlisleToNewcastleBtn.parentNode.replaceChild(newBtn, CarlisleToNewcastleBtn);

    newBtn.addEventListener('click', () => {
      if (!animationRunning) {
        CarlisleToNewcastle();
      }
    });
  }
  })

function CarlisleToNewcastle() {
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

  const trainMarker = L.marker(Carlisle_NTH, { icon: trainIcon }).addTo(map);

  const fullPath = [...interpolatePolyline(NTH_NcCr, 50)].reverse();// ← 数字が少ないほどスピードアップ

  const CarlisleToNewcastleIndex = fullPath.findIndex(p => 
    Math.abs(p[0] - Newcastle_NTH[0]) < 0.0001 && 
    Math.abs(p[1] - Newcastle_NTH[1]) < 0.0001
  );

  const pathToCarlisleToNewcastle = fullPath.slice(0, CarlisleToNewcastleIndex + 1);
  
// 最初にジャンプを防ぐ
  map.panTo(pathToCarlisleToNewcastle[0], { animate: false });


  let frame = 0;

  function animate() {
   
   const index = frame;

    if (index < pathToCarlisleToNewcastle.length) {
      trainMarker.setLatLng(pathToCarlisleToNewcastle[index]); // ← マーカーを移動
      map.panTo(pathToCarlisleToNewcastle[index], { animate: true, duration: 0.03 });
      frame++;
      setTimeout(animate, 20); // ← 速度調整（数字が少ないほどスピードアップ）
    } else {
      setTimeout(() => {
        markerNewcastle.openPopup();
        map.removeLayer(trainMarker); // アイコンを削除
        animationRunning = false;
      }, 100);

    }
  }
  animate();
}



