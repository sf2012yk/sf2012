// A駅 → B駅 へ滑らかに移動する関数
//イベント登録を無制限制限
map.on('popupopen', function (e) {
  const B駅Btn = document.getElementById('A駅ToB駅Card');
  if (B駅Btn) {
    const newBtn = B駅Btn.cloneNode(true);
    B駅Btn.parentNode.replaceChild(newBtn, B駅Btn);

    newBtn.addEventListener('click', () => {
      if (!animationRunning) {
        goToB駅();
      }
    });
  }
  })

function goToB駅() {
  if (animationRunning) return; // ← すでに動いていたら何もしない
  animationRunning = true;

  markerA駅.closePopup(); // ← 移動前にA駅（始発）のポップアップを閉じる

  // 🚄 アイコン付きマーカーを表示（初期位置）
  const trainIcon = L.icon({
    iconUrl: "image/icon/train_test.png",// アイコン画像のURL
    iconRetinaUrl:"image/icon/train_test@2x.png",
    iconSize: [40, 40],
    iconAnchor: [25, 25],
    className: "icon-train"
  });

  const trainMarker = L.marker(A駅, { icon: trainIcon }).addTo(map);

  const fullPath = interpolatePolyline(路線名 , 50);// ← 数字が少ないほどスピードアップ

  const b駅Index = fullPath.findIndex(p => 
    Math.abs(p[0] - B駅[0]) < 0.0001 && 
    Math.abs(p[1] - B駅[1]) < 0.0001
  );

  const pathToB駅 = fullPath.slice(0, b駅Index + 1);
  // ✅ ここに animatePath を定義
  const totalFrames = pathToB駅.length;
  let frame = 0;

  function animate() {
   
   const index = frame;

    if (index < pathToB駅.length) {
      trainMarker.setLatLng(pathToB駅[index]); // ← マーカーを移動
      map.panTo(pathToB駅[index], { animate: true, duration: 0.25 });
      frame++;
      setTimeout(animate, 5); // ← 速度調整（数字が少ないほどスピードアップ）50座標 × 30ms = 約1.5秒
    } else {
      setTimeout(() => {
        markerB駅.openPopup();
        map.removeLayer(trainMarker); // アイコンを削除
        animationRunning = false;
      }, 100);

    }
  }
  animate();
}


