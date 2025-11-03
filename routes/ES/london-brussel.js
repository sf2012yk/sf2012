// London Brussel

// 鉄道ルート　ロンドン⇔ブリュッセル　//
const StPancras = [51.531403145750126, -0.126309026898089];
const N1CCentre = [51.53796388734271, -0.12907867664315523];
const YorkRdKn = [51.540176645466154, -0.12496387602983065];
const CaledonianRoad = [51.5434994564745, -0.11504901284335954];
const Canonbury = [51.54865032015372, -0.09215367693891695];
const Dalston = [51.54808989176876, -0.07535231932860154];
const Hackney = [51.54707303712583, -0.05682797698303355];
const Homerton = [51.54698225179576, -0.04227881917353008];
const UK_A12_ST = [51.54648596648756, -0.03273171756988444];
const OlympicParkWest = [51.54527991549631, -0.023239164870017717];
const Stratford = [51.54491556059036, -0.008787862829287474];//Stratford駅
const Maryland = [51.544625987138566, 0.0043357707998376675];
const ForestGate = [51.54727083810989, 0.025447286124077106];
const Woodgrange = [51.548253614885404, 0.044587247978896065];
const UK_A406_EsTn = [51.54403129432811, 0.06814028230060744];
const Baking = [51.53958187323462, 0.08079671626381792];
const UK_A13_ES = [51.53148912168111, 0.10054638830004337];
const DagenhamDock = [51.525974617174484, 0.14541213897474706];
const MarshWay = [51.52345343597256, 0.16948429300809797];
const Rainham = [51.5165815258585, 0.1904901655275585];
const NewTankHillRd = [51.49142830339136, 0.2346431533763932];
const Purfleet = [51.48634084360039, 0.24230555238654186];
const UK_A282_EB = [51.4751814266241, 0.263967407617641];
const Thames_ES_EB1 = [51.4693708231843, 0.2737299846820903];
const Thames_ES_EB2 = [51.46667956289569, 0.27957560951203125];
const Thames_ES_EB3 = [51.464772464868105, 0.2860207972086013];
const Thames_ES_EB4 = [51.462818307564504, 0.29343937980313795];
const Thames_ES_EB5 = [51.46009575242952, 0.30060097197409824];
const UK_A226_EB = [51.450269074053416, 0.31467289188913955];
const Ebbsfleet = [51.44391892029894, 0.3213169651326606];//Ebbsfleet駅
const Ashford = [51.14326094528893, 0.8759206807100788];//Ashford駅
const Eurotunnel_UK  = [51.097029785519055, 1.1560365958063963];
const UK_last  = [51.10865307844975, 1.2870989866203484];
const FR_first  = [50.93874714918805, 1.7301429299771602];
const CalaisFrethun = [50.90131939162405, 1.8113274238147192];
const FR_D943_CF = [50.82543804323111, 2.053625504546413];
const FR_D217_CF = [50.843407592168596, 2.1016009519400436];
const FR_D300_CF = [50.84445318233127, 2.2074684884415468];
const FR_D928_CF = [50.82519151461905, 2.3082167641648255];
const FR_D933_CF = [50.78121938207711, 2.450570439951701];
const Lille = [50.63905851769837, 3.0757495218666224];
const FR_M48_LL = [50.60641625723213, 3.106129910400623];
const FR_A23_LL = [50.57056081693843, 3.1564910831328086];
const FR_N508_LL = [50.56251634091366, 3.324275871527916];
const BE_N52 = [50.55913581001046, 3.4533652272032462];
const BE_E42 = [50.55760903919471, 3.5017737356604117];
const BE_N50 = [50.556736576523626, 3.5896643605329857];
const BE_N527 = [50.571675270381924, 3.7034758532752865];
const BE_N56 = [50.60600540076692, 3.8093909233457577];
const BE_N525 = [50.63268930937671, 3.862090965720914];
const Silly = [50.6628402297399, 3.935905357859024];
const BE_N55 = [50.680002368956664, 4.032293221555899];
const BE_N285 = [50.67804440708444, 4.047571083994678];
const Rebecq = [50.68125626108596, 4.137514540519235];
const Lembeek = [50.71514446882174, 4.221605614885788];
const Halle_BE = [50.733417833039475, 4.240543554113383];
const Brussel_ES = [50.83545522369974, 4.334752425478581];

// ロンドン⇒ブリュッセル
const HS1 = L.polyline
([StPancras,N1CCentre,YorkRdKn,CaledonianRoad,Canonbury,Dalston,Hackney,UK_A12_ST,OlympicParkWest,
Stratford,Maryland,ForestGate,Woodgrange,UK_A406_EsTn,Baking,UK_A13_ES,DagenhamDock,MarshWay,
Rainham,NewTankHillRd,Purfleet,UK_A282_EB,Thames_ES_EB1,Thames_ES_EB2,Thames_ES_EB3,Thames_ES_EB4,Thames_ES_EB5,UK_A226_EB,
Ebbsfleet, Ashford, Eurotunnel_UK, UK_last,FR_first,CalaisFrethun, 
FR_D943_CF,FR_D217_CF,FR_D300_CF,FR_D928_CF,FR_D933_CF,Lille,
FR_M48_LL,FR_A23_LL,FR_N508_LL,BE_N52,BE_E42,BE_N50,BE_N527,BE_N56,Silly,BE_N55,BE_N285,Rebecq,Lembeek,Halle_BE,
Brussel_ES], { color: '#000000' }).addTo(map);


// StPancras → Brussel へ滑らかに移動する関数
//イベント登録を無制限制限
map.on('popupopen', function (e) {
  const BrusselBtn = document.getElementById('StPancrasToBrusselCard');
  if (BrusselBtn) {
    const newBtn = BrusselBtn.cloneNode(true);
    BrusselBtn.parentNode.replaceChild(newBtn, BrusselBtn);

    newBtn.addEventListener('click', () => {
      if (!animationRunning) {
        goToBrussel();
      }
    });
  }
  })

function goToBrussel() {
  if (animationRunning) return; // ← すでに動いていたら何もしない
  animationRunning = true;

  markerStPancras.closePopup(); // ← 移動前にStPancras（始発）のポップアップを閉じる

  // 🚄 アイコン付きマーカーを表示（初期位置）
  const trainIcon = L.icon({
    iconUrl: "image/icon/train_test.png",// アイコン画像のURL
    iconRetinaUrl:"image/icon/train_test@2x.png",
    iconSize: [40, 40],
    iconAnchor: [25, 25],
    className: "icon-train"
  });

  const trainMarker = L.marker(StPancras, { icon: trainIcon }).addTo(map);

  const fullPath = interpolatePolyline(HS1 , 50);// ← 数字が少ないほどスピードアップ

  const BrusselIndex = fullPath.findIndex(p => 
    Math.abs(p[0] - Brussel_ES[0]) < 0.0001 && 
    Math.abs(p[1] - Brussel_ES[1]) < 0.0001
  );

  const pathToBrussel = fullPath.slice(0, BrusselIndex + 1);
  // ✅ ここに animatePath を定義
  const totalFrames = pathToBrussel.length;
  let frame = 0;

  function animate() {
   
   const index = frame;

    if (index < pathToBrussel.length) {
      trainMarker.setLatLng(pathToBrussel[index]); // ← マーカーを移動
      map.panTo(pathToBrussel[index], { animate: true, duration: 0.25 });
      frame++;
      setTimeout(animate, 5); // ← 速度調整（数字が少ないほどスピードアップ）50座標 × 30ms = 約1.5秒
    } else {
      setTimeout(() => {
        markerBrussel.openPopup();
        map.removeLayer(trainMarker); // アイコンを削除
        animationRunning = false;
      }, 100);

    }
  }
  animate();
}

// Brussel　→　StPancrasへ滑らかに戻る関数
//イベント登録を無制限制限
map.on('popupopen', function (e) {
  const BrusselToStPancrasBtn = document.getElementById('BrusselToStPancrasCard');
  if (BrusselToStPancrasBtn) {
    const newBtn = BrusselToStPancrasBtn.cloneNode(true);
    BrusselToStPancrasBtn.parentNode.replaceChild(newBtn, BrusselToStPancrasBtn);

    newBtn.addEventListener('click', () => {
      if (!animationRunning) {
        BrusselToStPancras();
      }
    });
  }
  })

function BrusselToStPancras() {
  if (animationRunning) return; // ← すでに動いていたら何もしない
  animationRunning = true;

  markerBrussel.closePopup(); // ← 移動前にBrusselのポップアップを閉じる

  // 🚄 アイコン付きマーカーを表示（初期位置）
  const trainIcon = L.icon({
    iconUrl: "image/icon/train_test.png",// アイコン画像のURL
    iconRetinaUrl:"image/icon/train_test@2x.png",
    iconSize: [40, 40],
    iconAnchor: [25, 25],
    className: "icon-train"
  });

  const trainMarker = L.marker(Brussel_ES, { icon: trainIcon }).addTo(map);

  const fullPath = [...interpolatePolyline(HS1, 50)].reverse();// ← 数字が少ないほどスピードアップ

  const BrusselToStPancrasIndex = fullPath.findIndex(p => 
    Math.abs(p[0] - StPancras[0]) < 0.0001 && 
    Math.abs(p[1] - StPancras[1]) < 0.0001
  );

  const pathToBrusselToStPancras = fullPath.slice(0, BrusselToStPancrasIndex + 1);
  
// 最初にジャンプを防ぐ
  map.panTo(pathToBrusselToStPancras[0], { animate: false });


  let frame = 0;

  function animate() {
   
   const index = frame;

    if (index < pathToBrusselToStPancras.length) {
      trainMarker.setLatLng(pathToBrusselToStPancras[index]); // ← マーカーを移動
      map.panTo(pathToBrusselToStPancras[index], { animate: true, duration: 0.25 });
      frame++;
      setTimeout(animate, 5); // ← 速度調整（数字が少ないほどスピードアップ）
    } else {
      setTimeout(() => {
        markerStPancras.openPopup();
        map.removeLayer(trainMarker); // アイコンを削除
        animationRunning = false;
      }, 100);

    }
  }
  animate();
}

// Brussel　→　StPancrasへ滑らかに戻る関数
//イベント登録を無制限制限
map.on('popupopen', function (e) {
  const BrusselToStPancrasBtn = document.getElementById('BrusselToStPancrasCard');
  if (BrusselToStPancrasBtn) {
    const newBtn = BrusselToStPancrasBtn.cloneNode(true);
    BrusselToStPancrasBtn.parentNode.replaceChild(newBtn, BrusselToStPancrasBtn);

    newBtn.addEventListener('click', () => {
      if (!animationRunning) {
        BrusselToStPancras();
      }
    });
  }
  })

function BrusselToStPancras() {
  if (animationRunning) return; // ← すでに動いていたら何もしない
  animationRunning = true;

  markerBrussel.closePopup(); // ← 移動前にBrusselのポップアップを閉じる

  // 🚄 アイコン付きマーカーを表示（初期位置）
  const trainIcon = L.icon({
    iconUrl: "image/icon/train_test.png",// アイコン画像のURL
    iconRetinaUrl:"image/icon/train_test@2x.png",
    iconSize: [40, 40],
    iconAnchor: [25, 25],
    className: "icon-train"
  });

  const trainMarker = L.marker(Brussel_ES, { icon: trainIcon }).addTo(map);

  const fullPath = [...interpolatePolyline(HS1, 50)].reverse();// ← 数字が少ないほどスピードアップ

  const BrusselToStPancrasIndex = fullPath.findIndex(p => 
    Math.abs(p[0] - StPancras[0]) < 0.0001 && 
    Math.abs(p[1] - StPancras[1]) < 0.0001
  );

  const pathToBrusselToStPancras = fullPath.slice(0, BrusselToStPancrasIndex + 1);
  
// 最初にジャンプを防ぐ
  map.panTo(pathToBrusselToStPancras[0], { animate: false });


  let frame = 0;

  function animate() {
   
   const index = frame;

    if (index < pathToBrusselToStPancras.length) {
      trainMarker.setLatLng(pathToBrusselToStPancras[index]); // ← マーカーを移動
      map.panTo(pathToBrusselToStPancras[index], { animate: true, duration: 0.25 });
      frame++;
      setTimeout(animate, 5); // ← 速度調整（数字が少ないほどスピードアップ）
    } else {
      setTimeout(() => {
        markerStPancras.openPopup();
        map.removeLayer(trainMarker); // アイコンを削除
        animationRunning = false;
      }, 100);

    }
  }
  animate();
}


