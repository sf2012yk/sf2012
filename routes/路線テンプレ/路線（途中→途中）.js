// E駅 → F駅（途中駅→途中駅）
//イベント登録
map.on('popupopen', function (e) {
  const E駅ToF駅Btn = document.getElementById('E駅ToF駅Card');
  if (E駅ToF駅Btn) {
    const newBtn = E駅ToF駅Btn.cloneNode(true);
    E駅ToF駅Btn.parentNode.replaceChild(newBtn, E駅ToF駅Btn);

    newBtn.addEventListener('click', () => {
      if (!animationRunning) {
        goToE駅ToF駅();
      }
    });
  }
});

function goToE駅ToF駅() {
  if (animationRunning) return;
  animationRunning = true;

  markerE駅.closePopup();

  const trainIcon = L.icon({
    iconUrl: "image/icon/train_test.png",
    iconRetinaUrl: "image/icon/train_test@2x.png",
    iconSize: [40, 40],
    iconAnchor: [25, 25],
    className: "icon-train"
  });

  const trainMarker = L.marker(E駅, { icon: trainIcon }).addTo(map);

  const fullPath = interpolatePolyline(路線名, 50);

  //逆方向は　 const fullPath = [...interpolatePolyline(路線名, 50)].reverse();
  

  const E駅Index = fullPath.findIndex(p =>
    Math.abs(p[0] - E駅[0]) < 0.0001 &&
    Math.abs(p[1] - E駅[1]) < 0.0001
  );

  const F駅Index = fullPath.findIndex(p =>
    Math.abs(p[0] - F駅[0]) < 0.0001 &&
    Math.abs(p[1] - F駅[1]) < 0.0001
  );

  if (E駅Index === -1 || F駅Index === -1) {
    animationRunning = false;
    return;
  }

  const start = Math.min(E駅Index, F駅Index);
  const end = Math.max(E駅Index, F駅Index);
  const pathToE駅toF駅 = fullPath.slice(start, end + 1);

  if (pathToE駅toF駅.length === 0) {
    animationRunning = false;
    return;
  }

  

  map.panTo(pathToE駅toF駅[0], { animate: false });

  let frame = 0;

  function animate() {
    if (frame < pathToE駅toF駅.length) {
      trainMarker.setLatLng(pathToE駅toF駅[frame]);
      map.panTo(pathToE駅toF駅[frame], { animate: true, duration: 0.25 });
      frame++;
      setTimeout(animate, 5);
    } else {
      setTimeout(() => {
        markerF駅.openPopup();
        map.removeLayer(trainMarker);
        animationRunning = false;
      }, 100);
    }
  }

  animate();
}

