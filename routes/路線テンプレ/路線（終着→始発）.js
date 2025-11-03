// B駅　→　A駅へ滑らかに戻る関数
//イベント登録を無制限制限
map.on('popupopen', function (e) {
  const B駅ToA駅Btn = document.getElementById('B駅ToA駅Card');
  if (B駅ToA駅Btn) {
    const newBtn = B駅ToA駅Btn.cloneNode(true);
    B駅ToA駅Btn.parentNode.replaceChild(newBtn, B駅ToA駅Btn);

    newBtn.addEventListener('click', () => {
      if (!animationRunning) {
        B駅ToA駅();
      }
    });
  }
  })

function B駅ToA駅() {
  if (animationRunning) return; // ← すでに動いていたら何もしない
  animationRunning = true;

  markerB駅.closePopup(); // ← 移動前にB駅のポップアップを閉じる

  // 🚄 アイコン付きマーカーを表示（初期位置）
  const trainIcon = L.icon({
    iconUrl: "image/icon/train_test.png",// アイコン画像のURL
    iconRetinaUrl:"image/icon/train_test@2x.png",
    iconSize: [40, 40],
    iconAnchor: [25, 25],
    className: "icon-train"
  });

  const trainMarker = L.marker(B駅, { icon: trainIcon }).addTo(map);

  const fullPath = [...interpolatePolyline(路線名, 50)].reverse();// ← 数字が少ないほどスピードアップ

  const B駅ToA駅Index = fullPath.findIndex(p => 
    Math.abs(p[0] - A駅[0]) < 0.0001 && 
    Math.abs(p[1] - A駅[1]) < 0.0001
  );

  const pathToB駅ToA駅 = fullPath.slice(0, B駅ToA駅Index + 1);
  
// 最初にジャンプを防ぐ
  map.panTo(pathToB駅ToA駅[0], { animate: false });


  let frame = 0;

  function animate() {
   
   const index = frame;

    if (index < pathToB駅ToA駅.length) {
      trainMarker.setLatLng(pathToB駅ToA駅[index]); // ← マーカーを移動
      map.panTo(pathToB駅ToA駅[index], { animate: true, duration: 0.25 });
      frame++;
      setTimeout(animate, 5); // ← 速度調整（数字が少ないほどスピードアップ）
    } else {
      setTimeout(() => {
        markerA駅.openPopup();
        map.removeLayer(trainMarker); // アイコンを削除
        animationRunning = false;
      }, 100);

    }
  }
  animate();
}