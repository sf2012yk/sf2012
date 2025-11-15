//  Basel Zurich

// 鉄道ルート　バーゼル→チューリッヒ駅　//
const Basel_SBB = [47.54717812533671, 7.5890015703746885];
const Olten_w = [47.365007407888896, 7.918003875249367];
const Olten_e = [47.358776575085656, 7.925371665693845];
const Aarau = [47.39130707458747, 8.051470595831386];
const Zurich_HB = [47.37828613669217, 8.539567674375348];

 
// ブリュッセル⇒ケルン⇔チューリッヒのルート
const SBB_Basel = L.polyline
([Basel_SBB,Olten_w,Olten_e,Aarau,Zurich_HB], { color: '#000000' }).addTo(map);


// Basel → Zurich へ滑らかに移動する関数
//イベント登録を無制限制限
map.on('popupopen', function (e) {
  const BaselToZurichBtn = document.getElementById('BaselSBBToZurichCard');
  if (BaselToZurichBtn) {
    const newBtn = BaselToZurichBtn.cloneNode(true);
    BaselToZurichBtn.parentNode.replaceChild(newBtn, BaselToZurichBtn);

    newBtn.addEventListener('click', () => {
      if (!animationRunning) {
        BaselToZurich();
      }
    });
  }
  })

function BaselToZurich() {
  if (animationRunning) return; // ← すでに動いていたら何もしない
  animationRunning = true;

  markerBaselSBB.closePopup(); // ← 移動前にBasel（始発）のポップアップを閉じる

  // 🚄 アイコン付きマーカーを表示（初期位置）
  const trainIcon = L.icon({
    iconUrl: "image/icon/train_test.png",// アイコン画像のURL
    iconRetinaUrl:"image/icon/train_test@2x.png",
    iconSize: [40, 40],
    iconAnchor: [25, 25],
    className: "icon-train"
  });

  const trainMarker = L.marker(Basel_SBB, { icon: trainIcon }).addTo(map);

  const fullPath = interpolatePolyline(SBB_Basel , 50);// ← 数字が少ないほどスピードアップ

  const BaselToZurichIndex = fullPath.findIndex(p => 
    Math.abs(p[0] - Zurich_HB[0]) < 0.0001 && 
    Math.abs(p[1] - Zurich_HB[1]) < 0.0001
  );

  const pathToBaselToZurich = fullPath.slice(0, BaselToZurichIndex + 1);
  // ✅ ここに animatePath を定義
  const totalFrames = pathToBaselToZurich.length;
  let frame = 0;

  function animate() {
   
   const index = frame;

    if (index < pathToBaselToZurich.length) {
      trainMarker.setLatLng(pathToBaselToZurich[index]); // ← マーカーを移動
      map.panTo(pathToBaselToZurich[index], { animate: true, duration: 0.03 });
      frame++;
      setTimeout(animate, 20); // ← 速度調整（数字が少ないほどスピードアップ）50座標 × 30ms = 約1.5秒
    } else {
      setTimeout(() => {
        markerZurich.openPopup();
        map.removeLayer(trainMarker); // アイコンを削除
        animationRunning = false;
      }, 100);

    }
  }
  animate();
}

// Zurich　→　Baselへ滑らかに戻る関数
//イベント登録を無制限制限
map.on('popupopen', function (e) {
  const ZurichToBaselBtn = document.getElementById('ZurichToBaselCard');
  if (ZurichToBaselBtn) {
    const newBtn = ZurichToBaselBtn.cloneNode(true);
    ZurichToBaselBtn.parentNode.replaceChild(newBtn, ZurichToBaselBtn);

    newBtn.addEventListener('click', () => {
      if (!animationRunning) {
        ZurichToBasel();
      }
    });
  }
  })

function ZurichToBasel() {
  if (animationRunning) return; // ← すでに動いていたら何もしない
  animationRunning = true;

  markerZurich.closePopup(); // ← 移動前にZurichのポップアップを閉じる

  // 🚄 アイコン付きマーカーを表示（初期位置）
  const trainIcon = L.icon({
    iconUrl: "image/icon/train_test.png",// アイコン画像のURL
    iconRetinaUrl:"image/icon/train_test@2x.png",
    iconSize: [40, 40],
    iconAnchor: [25, 25],
    className: "icon-train"
  });

  const trainMarker = L.marker(Zurich_HB, { icon: trainIcon }).addTo(map);

  const fullPath = [...interpolatePolyline(SBB_Basel, 50)].reverse();// ← 数字が少ないほどスピードアップ

  const ZurichToBaselIndex = fullPath.findIndex(p => 
    Math.abs(p[0] - Basel_SBB[0]) < 0.0001 && 
    Math.abs(p[1] - Basel_SBB[1]) < 0.0001
  );

  const pathToZurichToBasel = fullPath.slice(0, ZurichToBaselIndex + 1);
  
// 最初にジャンプを防ぐ
  map.panTo(pathToZurichToBasel[0], { animate: false });


  let frame = 0;

  function animate() {
   
   const index = frame;

    if (index < pathToZurichToBasel.length) {
      trainMarker.setLatLng(pathToZurichToBasel[index]); // ← マーカーを移動
      map.panTo(pathToZurichToBasel[index], { animate: true, duration: 0.03 });
      frame++;
      setTimeout(animate, 20); // ← 速度調整（数字が少ないほどスピードアップ）
    } else {
      setTimeout(() => {
        markerBaselSBB.openPopup();
        map.removeLayer(trainMarker); // アイコンを削除
        animationRunning = false;
      }, 100);

    }
  }
  animate();
}




