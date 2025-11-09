// Zurich Vienna module

// 鉄道ルート インスブルック⇔ザルツブルク駅　//
const Innsbruck_2  = [47.26253050680029, 11.40060390583582];
const Hall_in_Tirol  = [47.27707581431055, 11.501074309764629];
const Jenbach  = [47.38837302608748, 11.778372688590245];
const Lichtwerth = [47.411592439853194, 11.833802587321323];
const BrixleggBf = [47.4347991444112, 11.87959275447542];
const RattenbergTirol = [47.43919149658563, 11.895851215249097];
const SanktLeonhard = [47.46463469631762, 11.956509231714623];
const WorglWestE45 = [47.48193642898433, 12.027647731462693];
const Worgl = [47.49175194905508, 12.060460691226407];
const Kufstein = [47.584727906701055, 12.165245690490806];
const Kiefersfelden = [47.60992747347554, 12.190446759883232];
const Oberaudorf = [47.65288189669135, 12.175328896312646];
const Rosenheim_s  = [47.84303687217366, 12.135119726085021];
const Bad_Endorf  = [47.90502755099685, 12.301802923105058];
const Bernau_am_Chiemsee  = [47.816423960753774, 12.380691633224618];
const Traunstein  = [47.869424463486446, 12.638755797984915];
const Freilassing  = [47.837379179240685, 12.97584064061125];
const Salzburg_2  = [47.812680660648525, 13.045783626953863];

// チューリッヒ⇔ウィーンのルート
const OBB_innsbruck = L.polyline
([Innsbruck_2,Hall_in_Tirol,
  Jenbach,Lichtwerth,BrixleggBf,RattenbergTirol,SanktLeonhard,WorglWestE45,
  Worgl,Kufstein,Kiefersfelden,Oberaudorf,

  Rosenheim_s,Bad_Endorf,Bernau_am_Chiemsee,Traunstein,Freilassing,Salzburg_2
  ], { color: '#000000' }).addTo(map);

// Innsbruck → Salzburg へ滑らかに移動する関数
//イベント登録を無制限制限
map.on('popupopen', function (e) {
  const SalzburgBtn = document.getElementById('InnsbruckToSalzburgCard');
  if (SalzburgBtn) {
    const newBtn = SalzburgBtn.cloneNode(true);
    SalzburgBtn.parentNode.replaceChild(newBtn, SalzburgBtn);

    newBtn.addEventListener('click', () => {
      if (!animationRunning) {
        goToSalzburg();
      }
    });
  }
  })

function goToSalzburg() {
  if (animationRunning) return; // ← すでに動いていたら何もしない
  animationRunning = true;

  markerInnsbruck.closePopup(); // ← 移動前にInnsbruck（始発）のポップアップを閉じる

  // 🚄 アイコン付きマーカーを表示（初期位置）
  const trainIcon = L.icon({
    iconUrl: "image/icon/train_test.png",// アイコン画像のURL
    iconRetinaUrl:"image/icon/train_test@2x.png",
    iconSize: [40, 40],
    iconAnchor: [25, 25],
    className: "icon-train"
  });

  const trainMarker = L.marker(Innsbruck_2, { icon: trainIcon }).addTo(map);

  const fullPath = interpolatePolyline(OBB_innsbruck , 50);// ← 数字が少ないほどスピードアップ

  const SalzburgIndex = fullPath.findIndex(p => 
    Math.abs(p[0] - Salzburg_2[0]) < 0.0001 && 
    Math.abs(p[1] - Salzburg_2[1]) < 0.0001
  );

  const pathToSalzburg = fullPath.slice(0, SalzburgIndex + 1);
  // ✅ ここに animatePath を定義
  const totalFrames = pathToSalzburg.length;
  let frame = 0;

  function animate() {
   
   const index = frame;

    if (index < pathToSalzburg.length) {
      trainMarker.setLatLng(pathToSalzburg[index]); // ← マーカーを移動
      map.panTo(pathToSalzburg[index], { animate: true, duration: 0.03 });
      frame++;
      setTimeout(animate, 20); // ← 速度調整（数字が少ないほどスピードアップ）50座標 × 30ms = 約1.5秒
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

// Salzburg　→　Innsbruckへ滑らかに戻る関数
//イベント登録を無制限制限
map.on('popupopen', function (e) {
  const SalzburgToInnsbruckBtn = document.getElementById('SalzburgToInnsbruckCard');
  if (SalzburgToInnsbruckBtn) {
    const newBtn = SalzburgToInnsbruckBtn.cloneNode(true);
    SalzburgToInnsbruckBtn.parentNode.replaceChild(newBtn, SalzburgToInnsbruckBtn);

    newBtn.addEventListener('click', () => {
      if (!animationRunning) {
        SalzburgToInnsbruck();
      }
    });
  }
  })

function SalzburgToInnsbruck() {
  if (animationRunning) return; // ← すでに動いていたら何もしない
  animationRunning = true;

  markerSalzburg.closePopup(); // ← 移動前にSalzburgのポップアップを閉じる

  // 🚄 アイコン付きマーカーを表示（初期位置）
  const trainIcon = L.icon({
    iconUrl: "image/icon/train_test.png",// アイコン画像のURL
    iconRetinaUrl:"image/icon/train_test@2x.png",
    iconSize: [40, 40],
    iconAnchor: [25, 25],
    className: "icon-train"
  });

  const trainMarker = L.marker(Salzburg_2, { icon: trainIcon }).addTo(map);

  const fullPath = [...interpolatePolyline(OBB_innsbruck, 50)].reverse();// ← 数字が少ないほどスピードアップ

  const SalzburgToInnsbruckIndex = fullPath.findIndex(p => 
    Math.abs(p[0] - Innsbruck_2[0]) < 0.0001 && 
    Math.abs(p[1] - Innsbruck_2[1]) < 0.0001
  );

  const pathToSalzburgToInnsbruck = fullPath.slice(0, SalzburgToInnsbruckIndex + 1);
  
// 最初にジャンプを防ぐ
  map.panTo(pathToSalzburgToInnsbruck[0], { animate: false });


  let frame = 0;

  function animate() {
   
   const index = frame;

    if (index < pathToSalzburgToInnsbruck.length) {
      trainMarker.setLatLng(pathToSalzburgToInnsbruck[index]); // ← マーカーを移動
      map.panTo(pathToSalzburgToInnsbruck[index], { animate: true, duration: 0.03 });
      frame++;
      setTimeout(animate, 20); // ← 速度調整（数字が少ないほどスピードアップ）
    } else {
      setTimeout(() => {
        markerInnsbruck.openPopup();
        map.removeLayer(trainMarker); // アイコンを削除
        animationRunning = false;
      }, 100);

    }
  }
  animate();
}



