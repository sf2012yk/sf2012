// Zurich Vienna module

// 鉄道ルート ザルツブルク⇔ウィーン駅　//
const Salzburg  = [47.812680660648525, 13.045783626953863];
const Neumarkt_am_Wallersee  = [47.812680660648525, 13.045783626953863];
const Vöcklabruck  = [48.009831982474296, 13.66448467947427];
const Wels  = [48.16636798232817, 14.02726211324162];
const Linz  = [48.29032317252522, 14.291723983454574];
const Amstetten  = [48.12143389693978, 14.878069288084664];
const St_Pölten  = [48.20798813157282, 15.624624784784572];
const Tullnerfeld  = [48.295175135348565, 15.99635392438884];
const Meidling  = [48.174882700977655, 16.335360420988106];
const Vienna = [48.18500525586605, 16.377671700808875];

// ザルツブルク⇔ウィーンのルート
const OBB_Salzburg = L.polyline
([Salzburg,Neumarkt_am_Wallersee,Vöcklabruck,Wels,
  Linz,Amstetten,St_Pölten,Tullnerfeld,Meidling,Vienna], { color: '#000000' }).addTo(map);

// Salzburg → Vienna へ滑らかに移動する関数
//イベント登録を無制限制限
map.on('popupopen', function (e) {
  const ViennaBtn = document.getElementById('SalzburgToViennaCard');
  if (ViennaBtn) {
    const newBtn = ViennaBtn.cloneNode(true);
    ViennaBtn.parentNode.replaceChild(newBtn, ViennaBtn);

    newBtn.addEventListener('click', () => {
      if (!animationRunning) {
        goToVienna();
      }
    });
  }
  })

function goToVienna() {
  if (animationRunning) return; // ← すでに動いていたら何もしない
  animationRunning = true;

  markerSalzburg.closePopup(); // ← 移動前にSalzburg（始発）のポップアップを閉じる

  // 🚄 アイコン付きマーカーを表示（初期位置）
  const trainIcon = L.icon({
    iconUrl: "image/icon/train_test.png",// アイコン画像のURL
    iconRetinaUrl:"image/icon/train_test@2x.png",
    iconSize: [40, 40],
    iconAnchor: [25, 25],
    className: "icon-train"
  });

  const trainMarker = L.marker(Salzburg, { icon: trainIcon }).addTo(map);

  const fullPath = interpolatePolyline(OBB_Salzburg , 50);// ← 数字が少ないほどスピードアップ

  const ViennaIndex = fullPath.findIndex(p => 
    Math.abs(p[0] - Vienna[0]) < 0.0001 && 
    Math.abs(p[1] - Vienna[1]) < 0.0001
  );

  const pathToVienna = fullPath.slice(0, ViennaIndex + 1);
  // ✅ ここに animatePath を定義
  const totalFrames = pathToVienna.length;
  let frame = 0;

  function animate() {
   
   const index = frame;

    if (index < pathToVienna.length) {
      trainMarker.setLatLng(pathToVienna[index]); // ← マーカーを移動
      map.panTo(pathToVienna[index], { animate: true, duration: 0.03 });
      frame++;
      setTimeout(animate, 20); // ← 速度調整（数字が少ないほどスピードアップ）50座標 × 30ms = 約1.5秒
    } else {
      setTimeout(() => {
        markerViennaCentral.openPopup();
        map.removeLayer(trainMarker); // アイコンを削除
        animationRunning = false;
      }, 100);

    }
  }
  animate();
}


// Vienna　→　Salzburgへ滑らかに戻る関数
//イベント登録を無制限制限
map.on('popupopen', function (e) {
  const ViennaToSalzburgBtn = document.getElementById('ViennaToSalzburgCard');
  if (ViennaToSalzburgBtn) {
    const newBtn = ViennaToSalzburgBtn.cloneNode(true);
    ViennaToSalzburgBtn.parentNode.replaceChild(newBtn, ViennaToSalzburgBtn);

    newBtn.addEventListener('click', () => {
      if (!animationRunning) {
        ViennaToSalzburg();
      }
    });
  }
  })

function ViennaToSalzburg() {
  if (animationRunning) return; // ← すでに動いていたら何もしない
  animationRunning = true;

  markerViennaCentral.closePopup(); // ← 移動前にViennaのポップアップを閉じる

  // 🚄 アイコン付きマーカーを表示（初期位置）
  const trainIcon = L.icon({
    iconUrl: "image/icon/train_test.png",// アイコン画像のURL
    iconRetinaUrl:"image/icon/train_test@2x.png",
    iconSize: [40, 40],
    iconAnchor: [25, 25],
    className: "icon-train"
  });

  const trainMarker = L.marker(Vienna, { icon: trainIcon }).addTo(map);

  const fullPath = [...interpolatePolyline(OBB_Salzburg, 50)].reverse();// ← 数字が少ないほどスピードアップ

  const ViennaToSalzburgIndex = fullPath.findIndex(p => 
    Math.abs(p[0] - Salzburg[0]) < 0.0001 && 
    Math.abs(p[1] - Salzburg[1]) < 0.0001
  );

  const pathToViennaToSalzburg = fullPath.slice(0, ViennaToSalzburgIndex + 1);
  
// 最初にジャンプを防ぐ
  map.panTo(pathToViennaToSalzburg[0], { animate: false });


  let frame = 0;

  function animate() {
   
   const index = frame;

    if (index < pathToViennaToSalzburg.length) {
      trainMarker.setLatLng(pathToViennaToSalzburg[index]); // ← マーカーを移動
      map.panTo(pathToViennaToSalzburg[index], { animate: true, duration: 0.03 });
      frame++;
      setTimeout(animate, 20); // ← 速度調整（数字が少ないほどスピードアップ）
    } else {
      setTimeout(() => {
        markerSalzburg.openPopup();
        map.removeLayer(trainMarker); // アイコンを削除
        animationRunning = false;
      }, 100);

    }
  }
  animate();
}