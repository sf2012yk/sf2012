// G駅 → H駅（途中駅→終着駅）
//イベント登録
map.on('popupopen', function (e) {
  const G駅ToH駅Btn = document.getElementById('G駅ToH駅Card');
  if (G駅ToH駅Btn) {
    const newBtn = G駅ToH駅Btn.cloneNode(true);
    G駅ToH駅Btn.parentNode.replaceChild(newBtn, G駅ToH駅Btn);

    newBtn.addEventListener('click', () => {
      if (!animationRunning) {
        G駅toH駅();
      }
    });
  }
});

function G駅toH駅() {
  if (animationRunning) return;
  animationRunning = true;

  markerG駅.closePopup();

  const trainIcon = L.icon({
    iconUrl: "image/icon/train_test.png",
    iconRetinaUrl: "image/icon/train_test@2x.png",
    iconSize: [40, 40],
    iconAnchor: [25, 25],
    className: "icon-train"
  });

  const trainMarker = L.marker(G駅, { icon: trainIcon }).addTo(map);

  const fullPath = interpolatePolyline(路線名, 50);

  //逆方向は　 const fullPath = [...interpolatePolyline(路線名, 50)].reverse();

  const G駅Index = fullPath.findIndex(p =>
    Math.abs(p[0] - G駅[0]) < 0.0001 &&
    Math.abs(p[1] - G駅[1]) < 0.0001
  );

  const H駅Index = fullPath.findIndex(p =>
    Math.abs(p[0] - H駅[0]) < 0.0001 &&
    Math.abs(p[1] - H駅[1]) < 0.0001
  );

  if (G駅Index === -1 || H駅Index === -1) {
    animationRunning = false;
    return;
  }
  //G駅 → I駅（始発駅） のインデックスを使ってsliceを抽出し、正しいルートにする。
  //start、endの大きさはMathによって調整している。
  const start = Math.min(G駅Index, H駅Index);
  const end = Math.max(G駅Index, H駅Index);
  const pathToH駅 = fullPath.slice(start, end + 1);

  if (pathToH駅.length === 0) {
    animationRunning = false;
    return;
  }

  map.panTo(pathToH駅[0], { animate: false });

  let frame = 0;

  function animate() {
    if (frame < pathToH駅.length) {
      trainMarker.setLatLng(pathToH駅[frame]);
      map.panTo(pathToH駅[frame], { animate: true, duration: 0.25 });
      frame++;
      setTimeout(animate, 5);
    } else {
      setTimeout(() => {
        markerH駅.openPopup();
        map.removeLayer(trainMarker);
        animationRunning = false;
      }, 100);
    }
  }

  animate();
}