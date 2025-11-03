// London Dubai

// 飛行機　ロンドン→ドバイ
const Heathrow_DXB = [51.46896718671588, -0.4574958618544679];
const Dubai_LHR = [25.24916816381139, 55.361520925952654];

const LHRtoDXB = L.polyline([
Heathrow_DXB,
Dubai_LHR], { color: '#be742aff' }).addTo(map);


// London → Dubai へ滑らかに移動する関数
//イベント登録を無制限制限
map.on('popupopen', function (e) {
  const DubaiBtn = document.getElementById('HeathrowToDubaiCard');
  if (DubaiBtn) {
    const newBtn = DubaiBtn.cloneNode(true);
    DubaiBtn.parentNode.replaceChild(newBtn, DubaiBtn);

    newBtn.addEventListener('click', () => {
      if (!animationRunning) {
        goToDubai();
      }
    });
  }
  })

function goToDubai() {
  if (animationRunning) return; // ← すでに動いていたら何もしない
  animationRunning = true;

  markerHeathrowTerminal3.closePopup(); // ← 移動前にLondon（始発）のポップアップを閉じる

  // 🚄 アイコン付きマーカーを表示（初期位置）
  const trainIcon = L.icon({
    iconUrl: "image/icon/train_test.png",// アイコン画像のURL
    iconRetinaUrl:"image/icon/train_test@2x.png",
    iconSize: [40, 40],
    iconAnchor: [25, 25],
    className: "icon-train"
  });

  const trainMarker = L.marker(Heathrow_DXB, { icon: trainIcon }).addTo(map);

  const fullPath = interpolatePolyline(LHRtoDXB , 50);// ← 数字が少ないほどスピードアップ

  const DubaiIndex = fullPath.findIndex(p => 
    Math.abs(p[0] - Dubai_LHR[0]) < 0.0001 && 
    Math.abs(p[1] - Dubai_LHR[1]) < 0.0001
  );

  const pathToDubai = fullPath.slice(0, DubaiIndex + 1);
  // ✅ ここに animatePath を定義
  const totalFrames = pathToDubai.length;
  let frame = 0;

  function animate() {
   
   const index = frame;

    if (index < pathToDubai.length) {
      trainMarker.setLatLng(pathToDubai[index]); // ← マーカーを移動
      map.panTo(pathToDubai[index], { animate: true, duration: 0.25 });
      frame++;
      setTimeout(animate, 5); // ← 速度調整（数字が少ないほどスピードアップ）50座標 × 30ms = 約1.5秒
    } else {
      setTimeout(() => {
        markerDubai.openPopup();
        map.removeLayer(trainMarker); // アイコンを削除
        animationRunning = false;
      }, 100);

    }
  }
  animate();
}

// Dubai　→　Londonへ滑らかに戻る関数
//イベント登録を無制限制限
map.on('popupopen', function (e) {
  const DubaiToLondonBtn = document.getElementById('DubaiToHeathrowCard');
  if (DubaiToLondonBtn) {
    const newBtn = DubaiToLondonBtn.cloneNode(true);
    DubaiToLondonBtn.parentNode.replaceChild(newBtn, DubaiToLondonBtn);

    newBtn.addEventListener('click', () => {
      if (!animationRunning) {
        DubaiToLondon();
      }
    });
  }
  })

function DubaiToLondon() {
  if (animationRunning) return; // ← すでに動いていたら何もしない
  animationRunning = true;

  markerDubai.closePopup(); // ← 移動前にDubaiのポップアップを閉じる

  // 🚄 アイコン付きマーカーを表示（初期位置）
  const trainIcon = L.icon({
    iconUrl: "image/icon/train_test.png",// アイコン画像のURL
    iconRetinaUrl:"image/icon/train_test@2x.png",
    iconSize: [40, 40],
    iconAnchor: [25, 25],
    className: "icon-train"
  });

  const trainMarker = L.marker(Dubai_LHR, { icon: trainIcon }).addTo(map);

  const fullPath = [...interpolatePolyline(LHRtoDXB, 50)].reverse();// ← 数字が少ないほどスピードアップ

  const DubaiToLondonIndex = fullPath.findIndex(p => 
    Math.abs(p[0] - Heathrow_DXB[0]) < 0.0001 && 
    Math.abs(p[1] - Heathrow_DXB[1]) < 0.0001
  );

  const pathToDubaiToLondon = fullPath.slice(0, DubaiToLondonIndex + 1);
  
// 最初にジャンプを防ぐ
  map.panTo(pathToDubaiToLondon[0], { animate: false });


  let frame = 0;

  function animate() {
   
   const index = frame;

    if (index < pathToDubaiToLondon.length) {
      trainMarker.setLatLng(pathToDubaiToLondon[index]); // ← マーカーを移動
      map.panTo(pathToDubaiToLondon[index], { animate: true, duration: 0.25 });
      frame++;
      setTimeout(animate, 5); // ← 速度調整（数字が少ないほどスピードアップ）
    } else {
      setTimeout(() => {
        markerHeathrowTerminal3.openPopup();
        map.removeLayer(trainMarker); // アイコンを削除
        animationRunning = false;
      }, 100);

    }
  }
  animate();
}