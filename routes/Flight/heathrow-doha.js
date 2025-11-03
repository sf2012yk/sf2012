// London Doha
const Heathrow_DOH = [51.460130701266216, -0.44843566368321325];
const Doha_LHR = [25.26393391919446, 51.61163864611003];

const LHRtoDOH = L.polyline([
Heathrow_DOH,  
Doha_LHR], { color: '#be742aff' }).addTo(map);


// London → Doha へ滑らかに移動する関数
//イベント登録を無制限制限
map.on('popupopen', function (e) {
  const DohaBtn = document.getElementById('HeathrowToDohaCard');
  if (DohaBtn) {
    const newBtn = DohaBtn.cloneNode(true);
    DohaBtn.parentNode.replaceChild(newBtn, DohaBtn);

    newBtn.addEventListener('click', () => {
      if (!animationRunning) {
        goToDoha();
      }
    });
  }
  })

function goToDoha() {
  if (animationRunning) return; // ← すでに動いていたら何もしない
  animationRunning = true;

  markerHeathrowTerminal4.closePopup(); // ← 移動前にLondon（始発）のポップアップを閉じる

  // 🚄 アイコン付きマーカーを表示（初期位置）
  const trainIcon = L.icon({
    iconUrl: "image/icon/train_test.png",// アイコン画像のURL
    iconRetinaUrl:"image/icon/train_test@2x.png",
    iconSize: [40, 40],
    iconAnchor: [25, 25],
    className: "icon-train"
  });

  const trainMarker = L.marker(Heathrow_DOH, { icon: trainIcon }).addTo(map);

  const fullPath = interpolatePolyline(LHRtoDOH , 50);// ← 数字が少ないほどスピードアップ

  const DohaIndex = fullPath.findIndex(p => 
    Math.abs(p[0] - Doha_LHR[0]) < 0.0001 && 
    Math.abs(p[1] - Doha_LHR[1]) < 0.0001
  );

  const pathToDoha = fullPath.slice(0, DohaIndex + 1);
  // ✅ ここに animatePath を定義
  const totalFrames = pathToDoha.length;
  let frame = 0;

  function animate() {
   
   const index = frame;

    if (index < pathToDoha.length) {
      trainMarker.setLatLng(pathToDoha[index]); // ← マーカーを移動
      map.panTo(pathToDoha[index], { animate: true, duration: 0.25 });
      frame++;
      setTimeout(animate, 5); // ← 速度調整（数字が少ないほどスピードアップ）50座標 × 30ms = 約1.5秒
    } else {
      setTimeout(() => {
        markerDoha.openPopup();
        map.removeLayer(trainMarker); // アイコンを削除
        animationRunning = false;
      }, 100);

    }
  }
  animate();
}


// Doha　→　Londonへ滑らかに戻る関数
//イベント登録を無制限制限
map.on('popupopen', function (e) {
  const DohaToLondonBtn = document.getElementById('DohaToHeathrowCard');
  if (DohaToLondonBtn) {
    const newBtn = DohaToLondonBtn.cloneNode(true);
    DohaToLondonBtn.parentNode.replaceChild(newBtn, DohaToLondonBtn);

    newBtn.addEventListener('click', () => {
      if (!animationRunning) {
        DohaToLondon();
      }
    });
  }
  })

function DohaToLondon() {
  if (animationRunning) return; // ← すでに動いていたら何もしない
  animationRunning = true;

  markerDoha.closePopup(); // ← 移動前にDohaのポップアップを閉じる

  // 🚄 アイコン付きマーカーを表示（初期位置）
  const trainIcon = L.icon({
    iconUrl: "image/icon/train_test.png",// アイコン画像のURL
    iconRetinaUrl:"image/icon/train_test@2x.png",
    iconSize: [40, 40],
    iconAnchor: [25, 25],
    className: "icon-train"
  });

  const trainMarker = L.marker(Doha_LHR, { icon: trainIcon }).addTo(map);

  const fullPath = [...interpolatePolyline(LHRtoDOH, 50)].reverse();// ← 数字が少ないほどスピードアップ

  const DohaToLondonIndex = fullPath.findIndex(p => 
    Math.abs(p[0] - Heathrow_DOH[0]) < 0.0001 && 
    Math.abs(p[1] - Heathrow_DOH[1]) < 0.0001
  );

  const pathToDohaToLondon = fullPath.slice(0, DohaToLondonIndex + 1);
  
// 最初にジャンプを防ぐ
  map.panTo(pathToDohaToLondon[0], { animate: false });


  let frame = 0;

  function animate() {
   
   const index = frame;

    if (index < pathToDohaToLondon.length) {
      trainMarker.setLatLng(pathToDohaToLondon[index]); // ← マーカーを移動
      map.panTo(pathToDohaToLondon[index], { animate: true, duration: 0.25 });
      frame++;
      setTimeout(animate, 5); // ← 速度調整（数字が少ないほどスピードアップ）
    } else {
      setTimeout(() => {
        markerHeathrowTerminal4.openPopup();
        map.removeLayer(trainMarker); // アイコンを削除
        animationRunning = false;
      }, 100);

    }
  }
  animate();
}