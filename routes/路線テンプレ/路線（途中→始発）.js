// 途中駅（C駅） → 終着駅（D駅）へ滑らかに移動する関数
//イベント登録
map.on('popupopen', function (e) {
  const C駅toD駅 = document.getElementById('C駅toD駅Card');
  if (C駅toD駅) {
    const newBtn = C駅toD駅 .cloneNode(true);
    C駅toD駅 .parentNode.replaceChild(newBtn, C駅toD駅);

    newBtn.addEventListener('click', () => {
      if (!animationRunning) {
        goToC駅toD駅();
      }
    });
  }
  })

//findClosestIndex() を使って座標を探す
function findClosestIndex(path, target) {
  let minDist = Infinity;
  let closestIndex = -1;
  path.forEach((p, i) => {
    const dist = Math.sqrt((p[0] - target[0]) ** 2 + (p[1] - target[1]) ** 2);
    if (dist < minDist) {
      minDist = dist;
      closestIndex = i;
    }
  });
  return closestIndex;
}

function goToC駅toD駅(C駅, D駅, markerD駅) {
  if (animationRunning) return;
  animationRunning = true;

  const trainIcon = L.icon({
    iconUrl: "image/icon/train_test.png",
    iconRetinaUrl: "image/icon/train_test@2x.png",
    iconSize: [40, 40],
    iconAnchor: [25, 25],
    className: "icon-train"
  });

  const trainMarker = L.marker(C駅, { icon: trainIcon }).addTo(map);

  const fullPath = [...interpolatePolyline(路線名, 50)].reverse();

  const fromC駅Index = findClosestIndex(fullPath, C駅);
  const toD駅Index = findClosestIndex(fullPath, D駅);

  const start = Math.min(fromC駅Index, toD駅Index);
  const end = Math.max(fromC駅Index, toD駅Index);
  const pathC駅toD駅 = fullPath.slice(start, end + 1);

  map.panTo(pathC駅toD駅[0], { animate: false });

  let frame = 0;

  function animate() {
    if (frame < pathC駅toD駅.length) {
      trainMarker.setLatLng(pathC駅toD駅[frame]);
      map.panTo(pathC駅toD駅[frame], { animate: true, duration: 0.25 });
      frame++;
      setTimeout(animate, 5);
    } else {
      setTimeout(() => {
        if (markerD駅) markerD駅.openPopup();
        map.removeLayer(trainMarker);
        animationRunning = false;
      }, 100);
    }
  }

  animate();
}