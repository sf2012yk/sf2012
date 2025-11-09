// Zurich Lyon module

// 鉄道ルート チューリッヒ⇔ベルン⇔ジュネーブ　//
const Geneva_SNCF = [46.20996053976771, 6.141703085164053];
const Satigny = [46.21422506886462, 6.037404860013276];
const Bellegarde = [46.11076233811534, 5.825413285468206];
const Seyssel_Corbonod = [45.962828193299586, 5.831458102288957];
const Culoz = [45.8432056007908, 5.777067005467854];
const Virieu_le_Grand_Belley = [45.847926468620045, 5.6533291119145295];
const Tenay_Hauteville = [45.92220250589081, 5.5015698216704845];
const St_Rambert_en_Bugey = [45.94693798852725, 5.438226773553548];
const Ambérieu_en_Bugey = [45.953674432872056, 5.342142369077729];
const Meximieux_Pérouges = [45.90170972237614, 5.19244984690583];
const A432 = [45.83621926756377, 5.018075437055525];
const D48 = [45.790829036787, 4.861913702448458];
const Lyon_Part_Dieu_3 = [45.7603030076784, 4.860375801911088];
 

// チューリッヒ⇔ベルン⇔ジュネーブ⇔リヨンのルート
const SNCF_Geneva = L.polyline
([Geneva_SNCF,Satigny,Bellegarde,Seyssel_Corbonod,Culoz,Virieu_le_Grand_Belley,Tenay_Hauteville,St_Rambert_en_Bugey,
  Ambérieu_en_Bugey,Meximieux_Pérouges,A432,D48,Lyon_Part_Dieu_3], { color: '#000000' }).addTo(map);

// Geneva → Lyon へ滑らかに移動する関数
//イベント登録を無制限制限
map.on('popupopen', function (e) {
  const LyonBtn = document.getElementById('GenevaToLyonCard');
  if (LyonBtn) {
    const newBtn = LyonBtn.cloneNode(true);
    LyonBtn.parentNode.replaceChild(newBtn, LyonBtn);

    newBtn.addEventListener('click', () => {
      if (!animationRunning) {
        GenevaToLyon();
      }
    });
  }
  })

function GenevaToLyon() {
  if (animationRunning) return; // ← すでに動いていたら何もしない
  animationRunning = true;

  markerGeneva.closePopup(); // ← 移動前にGeneva（始発）のポップアップを閉じる

  // 🚄 アイコン付きマーカーを表示（初期位置）
  const trainIcon = L.icon({
    iconUrl: "image/icon/train_test.png",// アイコン画像のURL
    iconRetinaUrl:"image/icon/train_test@2x.png",
    iconSize: [40, 40],
    iconAnchor: [25, 25],
    className: "icon-train"
  });

  const trainMarker = L.marker(Geneva_SNCF, { icon: trainIcon }).addTo(map);

  const fullPath = interpolatePolyline(SNCF_Geneva , 50);// ← 数字が少ないほどスピードアップ

  const LyonIndex = fullPath.findIndex(p => 
    Math.abs(p[0] - Lyon_Part_Dieu_3[0]) < 0.0001 && 
    Math.abs(p[1] - Lyon_Part_Dieu_3[1]) < 0.0001
  );

  const pathToLyon = fullPath.slice(0, LyonIndex + 1);
  // ✅ ここに animatePath を定義
  const totalFrames = pathToLyon.length;
  let frame = 0;

  function animate() {
   
   const index = frame;

    if (index < pathToLyon.length) {
      trainMarker.setLatLng(pathToLyon[index]); // ← マーカーを移動
      map.panTo(pathToLyon[index], { animate: true, duration: 0.03 });
      frame++;
      setTimeout(animate, 20); // ← 速度調整（数字が少ないほどスピードアップ）50座標 × 30ms = 約1.5秒
    } else {
      setTimeout(() => {
        markerPartDieu.openPopup();
        map.removeLayer(trainMarker); // アイコンを削除
        animationRunning = false;
      }, 100);

    }
  }
  animate();
}

// Lyon　→　Genevaへ滑らかに戻る関数
//イベント登録を無制限制限
map.on('popupopen', function (e) {
  const LyonToGenevaBtn = document.getElementById('LyonToGenevaCard');
  if (LyonToGenevaBtn) {
    const newBtn = LyonToGenevaBtn.cloneNode(true);
    LyonToGenevaBtn.parentNode.replaceChild(newBtn, LyonToGenevaBtn);

    newBtn.addEventListener('click', () => {
      if (!animationRunning) {
        LyonToGeneva();
      }
    });
  }
  })

function LyonToGeneva() {
  if (animationRunning) return; // ← すでに動いていたら何もしない
  animationRunning = true;

  markerPartDieu.closePopup(); // ← 移動前にLyonのポップアップを閉じる

  // 🚄 アイコン付きマーカーを表示（初期位置）
  const trainIcon = L.icon({
    iconUrl: "image/icon/train_test.png",// アイコン画像のURL
    iconRetinaUrl:"image/icon/train_test@2x.png",
    iconSize: [40, 40],
    iconAnchor: [25, 25],
    className: "icon-train"
  });

  const trainMarker = L.marker(Lyon_Part_Dieu_3, { icon: trainIcon }).addTo(map);

  const fullPath = [...interpolatePolyline(SNCF_Geneva, 50)].reverse();// ← 数字が少ないほどスピードアップ

  const LyonToGenevaIndex = fullPath.findIndex(p => 
    Math.abs(p[0] - Geneva_SNCF[0]) < 0.0001 && 
    Math.abs(p[1] - Geneva_SNCF[1]) < 0.0001
  );

  const pathToLyonToGeneva = fullPath.slice(0, LyonToGenevaIndex + 1);
  
// 最初にジャンプを防ぐ
  map.panTo(pathToLyonToGeneva[0], { animate: false });


  let frame = 0;

  function animate() {
   
   const index = frame;

    if (index < pathToLyonToGeneva.length) {
      trainMarker.setLatLng(pathToLyonToGeneva[index]); // ← マーカーを移動
      map.panTo(pathToLyonToGeneva[index], { animate: true, duration: 0.03 });
      frame++;
      setTimeout(animate, 20); // ← 速度調整（数字が少ないほどスピードアップ）
    } else {
      setTimeout(() => {
        markerGeneva.openPopup();
        map.removeLayer(trainMarker); // アイコンを削除
        animationRunning = false;
      }, 100);

    }
  }
  animate();
}



