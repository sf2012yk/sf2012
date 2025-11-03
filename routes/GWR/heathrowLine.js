// London Windsor module

// 鉄道ルート　ウィンザー城　//
const Paddington_LHR = [51.51820949995243, -0.1781408423165258];
const BishopsRd_LHR = [51.518401914496124, -0.1797598504051242];
const WestBourneBd_LHR = [51.51871334985519, -0.18374146010219508];
const RoyalOak_LHR = [51.51913163568928, -0.1886898594810405];
const WestbournePark_LHR = [51.52104823863323, -0.2008535300059221];
//カーブ北西//
const LadbrokeGrove_e_LHR = [51.52461358171907,-0.21421088953644724];
const Cn_LadbrokeGrove_LHR = [
(51.52461358171907 + 51.52593131289449) / 2 + 0.0009, //西//
(-0.21421088953644724 + -0.22850075456681943) / 2 + 0.0004 //北//
];
const LadbrokeGrove_w_LHR = [51.52593131289449,-0.22850075456681943];
const CP_LadbrokeGrove_LHR = adaptiveBezierCurve(LadbrokeGrove_e_LHR,Cn_LadbrokeGrove_LHR,LadbrokeGrove_w_LHR,1);
const CP_LadbrokeGrove_Un_LHR = resamplePath(CP_LadbrokeGrove_LHR, 4);
//カーブ北西//
const OldOakCommon_s_LHR = [51.52580430434064,-0.23449739433667227];
const Cn_OldOakCommon_LHR = [
(51.52580430434064 + 51.52219904630757) / 2 + 0.0009, //西//
(-0.23449739433667227 + -0.2518537023518243) / 2 + 0.0004 //北//
];
const OldOakCommon_n_LHR = [51.52219904630757,-0.2518537023518243];
const CP_OldOakCommon_LHR = adaptiveBezierCurve(OldOakCommon_s_LHR,Cn_OldOakCommon_LHR,OldOakCommon_n_LHR,1);
const CP_OldOakCommon_Un_LHR = resamplePath(CP_OldOakCommon_LHR, 5);
const WesturnAv_LHR = [51.51850865397213, -0.26169606793978945];
//カーブ南東//
const ActonMainLine_s_LHR = [51.51691259162641,-0.26793399593923645];
const Cn_ActonMainLine_LHR = [
(51.51691259162641 + 51.515086880046205) / 2 - 0.0009, //東//
(-0.26793399593923645 + -0.2823850119376564) / 2 + 0.0004 //南//
];
const ActonMainLine_n_LHR = [51.515086880046205,-0.2823850119376564];
const CP_ActonMainLine_LHR = adaptiveBezierCurve(ActonMainLine_s_LHR,Cn_ActonMainLine_LHR,ActonMainLine_n_LHR,1);
const CP_ActonMainLine_Un_LHR = resamplePath(CP_ActonMainLine_LHR, 4);
const HangerLn_LHR = [51.51495494393, -0.2921100265257885];
const EalingBroadway_LHR = [51.51465064287004, -0.30230567720185864];
const WestEaling_LHR = [51.51358010880236, -0.3214764146370598];
const Hanwell_LHR = [51.512004340874746, -0.33885712908879867];
const Ironbridge_LHR = [51.50943861368329, -0.35484180481476074];
const SouthallPark_LHR = [51.50774130466111, -0.3662880480411617];
const Southall_LHR = [51.50592313122698, -0.3787199480281218];
const TranscoSH_LHR = [51.504227991541484, -0.3908663030736357];
const SteerHayes_LHR = [51.503082180703366, -0.40062246778202454];
const TheParkway_LHR  = [51.502734659040215, -0.4074175040518041];
const HayesHarlington_LHR = [51.50307214571084, -0.42090214750314464];
const DawleyRd_LHR = [51.50376577367225, -0.429886366573761];
const HeathrowJn_LHR = [51.504999575941255, -0.4389347703584408];//本線分岐
//カーブ北西//
const NissinUK_s = [51.50588644292473,-0.4441058945760312];
const Cn_NissinUK = [
(51.50588644292473 + 51.50424614421459) / 2 + 0.0019, //西//
(-0.4441058945760312 + -0.44879664981761236) / 2 + 0.0004 //北//
];
const NissinUK_n = [51.50424614421459,-0.44879664981761236];
const CP_NissinUK = adaptiveBezierCurve(NissinUK_s,Cn_NissinUK,NissinUK_n,1);
const CP_NissinUK_Un = resamplePath(CP_NissinUK, 6);
const StockleyRd = [51.49936377330215, -0.45153753607205727];
const Harlington_n = [51.49563025194973, -0.45164246905633987];
const Harlington_c = [51.48996471692142, -0.45102404897432263];
const Harlington_s = [51.4813825658431, -0.44855036884544647];
//カーブ南東//
const LHRTerminal2_s = [51.47912673232871,-0.4476669117042384];
const Cn_LHRTerminal2 = [
(51.47912673232871 + 51.47285382872425) / 2 - 0.0026, //東//
(-0.4476669117042384 + -0.4522608890020674) / 2 + 0.0019 //南//
];
const LHRTerminal2_n = [51.47285382872425,-0.4522608890020674];
const CP_LHRTerminal2 = adaptiveBezierCurve(LHRTerminal2_s,Cn_LHRTerminal2,LHRTerminal2_n,1);
const CP_LHRTerminal2_Un = resamplePath(CP_LHRTerminal2, 9);
const HeathrowTerminal3 = [51.47028371585865, -0.4590508896992913];

//カーブ南東//
const Terminal3_e = [51.469829840927375,-0.460617180717908];
const Cn_Terminal3 = [
(51.469829840927375 + 51.46951302415983) / 2 - 0.0014, //東//
(-0.460617180717908 + -0.47012967869706235) / 2 - 0.0004 //南//
];
const Terminal3_w = [51.46951302415983,-0.47012967869706235];
const CP_Terminal3 = adaptiveBezierCurve(Terminal3_e,Cn_Terminal3,Terminal3_w,1);
const CP_Terminal3_Un = resamplePath(CP_Terminal3, 8);

//カーブ北西//
const Terminal5B_s = [51.47068383077361,-0.4746293991668526];
const Cn_Terminal5B = [
(51.47068383077361 + 51.47246640309725) / 2 + 0.0009, //西//
(-0.4746293991668526 + -0.4809565471081413) / 2 + 0.0004 //北//
];
const Terminal5B_n = [51.47246640309725,-0.4809565471081413];
const CP_Terminal5B = adaptiveBezierCurve(Terminal5B_s,Cn_Terminal5B,Terminal5B_n,1);
const CP_Terminal5B_Un = resamplePath(CP_Terminal5B, 7);
const HeathrowTerminal5 = [51.47259800120853, -0.4859364875464297];


const grw_heathrow = L.polyline([Paddington_LHR,BishopsRd_LHR,WestBourneBd_LHR,RoyalOak_LHR,WestbournePark_LHR,
...CP_LadbrokeGrove_Un_LHR,...CP_OldOakCommon_Un_LHR,WesturnAv_LHR,
...CP_ActonMainLine_Un_LHR,HangerLn_LHR,EalingBroadway_LHR,WestEaling_LHR,Hanwell_LHR,Ironbridge_LHR,
Southall_LHR,TranscoSH_LHR,SteerHayes_LHR,TheParkway_LHR,HayesHarlington_LHR,DawleyRd_LHR,HeathrowJn_LHR,
...CP_NissinUK_Un,StockleyRd,Harlington_n,Harlington_c,Harlington_s,...CP_LHRTerminal2_Un,
HeathrowTerminal3,...CP_Terminal3_Un,...CP_Terminal5B_Un,
HeathrowTerminal5], { color: '#000000' }).addTo(map);


// Paddington → Terminal3 へ滑らかに移動する関数
//イベント登録を無制限制限
map.on('popupopen', function (e) {
  const HeathrowBtn = document.getElementById('goToHeathrowTerminal3Card');
  if (HeathrowBtn) {
    const newBtn = HeathrowBtn.cloneNode(true);
    HeathrowBtn.parentNode.replaceChild(newBtn, HeathrowBtn);

    newBtn.addEventListener('click', () => {
      if (!animationRunning) {
        goToHeathrowTerminal3();
      }
    });
  }
  })

function goToHeathrowTerminal3() {
  if (animationRunning) return; // ← すでに動いていたら何もしない
  animationRunning = true;

  markerPaddingtonLHR.closePopup(); // ← 移動前にPaddington（始発）のポップアップを閉じる

  // 🚄 アイコン付きマーカーを表示（初期位置）
  const trainIcon = L.icon({
    iconUrl: "image/icon/train_test.png",// アイコン画像のURL
    iconRetinaUrl:"image/icon/train_test@2x.png",
    iconSize: [40, 40],
    iconAnchor: [25, 25],
    className: "icon-train"
  });

  const trainMarker = L.marker(Paddington_LHR, { icon: trainIcon }).addTo(map);

  const fullPath = interpolatePolyline(grw_heathrow , 50);// ← 数字が少ないほどスピードアップ

  const HeathrowIndex = fullPath.findIndex(p => 
    Math.abs(p[0] - HeathrowTerminal3[0]) < 0.0001 && 
    Math.abs(p[1] - HeathrowTerminal3[1]) < 0.0001
  );

  const pathToHeathrow = fullPath.slice(0, HeathrowIndex + 1);
  // ✅ ここに animatePath を定義
  const totalFrames = pathToHeathrow.length;
  let frame = 0;

  function animate() {
   
   const index = frame;

    if (index < pathToHeathrow.length) {
      trainMarker.setLatLng(pathToHeathrow[index]); // ← マーカーを移動
      map.panTo(pathToHeathrow[index], { animate: true, duration: 0.25 });
      frame++;
      setTimeout(animate, 5); // ← 速度調整（数字が少ないほどスピードアップ）50座標 × 30ms = 約1.5秒
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

// Paddington → Terminal5 へ滑らかに移動する関数
//イベント登録を無制限制限
map.on('popupopen', function (e) {
  const HeathrowBtn = document.getElementById('goToHeathrowTerminal5Card');
  if (HeathrowBtn) {
    const newBtn = HeathrowBtn.cloneNode(true);
    HeathrowBtn.parentNode.replaceChild(newBtn, HeathrowBtn);

    newBtn.addEventListener('click', () => {
      if (!animationRunning) {
        goToHeathrowTerminal5();
      }
    });
  }
  })

function goToHeathrowTerminal5() {
  if (animationRunning) return; // ← すでに動いていたら何もしない
  animationRunning = true;

  markerPaddingtonLHR.closePopup(); // ← 移動前にPaddington（始発）のポップアップを閉じる

  // 🚄 アイコン付きマーカーを表示（初期位置）
  const trainIcon = L.icon({
    iconUrl: "image/icon/train_test.png",// アイコン画像のURL
    iconRetinaUrl:"image/icon/train_test@2x.png",
    iconSize: [40, 40],
    iconAnchor: [25, 25],
    className: "icon-train"
  });

  const trainMarker = L.marker(Paddington_LHR, { icon: trainIcon }).addTo(map);

  const fullPath = interpolatePolyline(grw_heathrow , 50);// ← 数字が少ないほどスピードアップ

  const HeathrowIndex = fullPath.findIndex(p => 
    Math.abs(p[0] - HeathrowTerminal5[0]) < 0.0001 && 
    Math.abs(p[1] - HeathrowTerminal5[1]) < 0.0001
  );

  const pathToHeathrow = fullPath.slice(0, HeathrowIndex + 1);
  // ✅ ここに animatePath を定義
  const totalFrames = pathToHeathrow.length;
  let frame = 0;

  function animate() {
   
   const index = frame;

    if (index < pathToHeathrow.length) {
      trainMarker.setLatLng(pathToHeathrow[index]); // ← マーカーを移動
      map.panTo(pathToHeathrow[index], { animate: true, duration: 0.01 });
      frame++;
      setTimeout(animate, 5); // ← 速度調整（数字が少ないほどスピードアップ）50座標 × 30ms = 約1.5秒
    } else {
      setTimeout(() => {
        markerHeathrowTerminal5.openPopup();
        map.removeLayer(trainMarker); // アイコンを削除
        animationRunning = false;
      }, 100);

    }
  }
  animate();
}

// HeathrowTerminal3 → Paddington（途中駅→終着駅）
//イベント登録
map.on('popupopen', function (e) {
  const HeathrowTerminal3ToPaddingtonBtn = document.getElementById('HeathrowTerminal3ToPaddingtonCard');
  if (HeathrowTerminal3ToPaddingtonBtn) {
    const newBtn = HeathrowTerminal3ToPaddingtonBtn.cloneNode(true);
    HeathrowTerminal3ToPaddingtonBtn.parentNode.replaceChild(newBtn, HeathrowTerminal3ToPaddingtonBtn);

    newBtn.addEventListener('click', () => {
      if (!animationRunning) {
        HeathrowTerminal3toPaddington();
      }
    });
  }
});

function HeathrowTerminal3toPaddington() {
  if (animationRunning) return;
  animationRunning = true;

  markerHeathrowTerminal3.closePopup();

  const trainIcon = L.icon({
    iconUrl: "image/icon/train_test.png",
    iconRetinaUrl: "image/icon/train_test@2x.png",
    iconSize: [40, 40],
    iconAnchor: [25, 25],
    className: "icon-train"
  });

  const trainMarker = L.marker(HeathrowTerminal3, { icon: trainIcon }).addTo(map);

  const fullPath = [...interpolatePolyline(grw_heathrow, 50)].reverse();

  const HeathrowTerminal3Index = fullPath.findIndex(p =>
    Math.abs(p[0] - HeathrowTerminal3[0]) < 0.0001 &&
    Math.abs(p[1] - HeathrowTerminal3[1]) < 0.0001
  );

  const PaddingtonIndex = fullPath.findIndex(p =>
    Math.abs(p[0] - Paddington_LHR[0]) < 0.0001 &&
    Math.abs(p[1] - Paddington_LHR[1]) < 0.0001
  );

  if (HeathrowTerminal3Index === -1 || PaddingtonIndex === -1) {
    animationRunning = false;
    return;
  }
  //HeathrowTerminal3 → I駅（始発駅） のインデックスを使ってsliceを抽出し、正しいルートにする。
  //start、endの大きさはMathによって調整している。
  const start = Math.min(HeathrowTerminal3Index, PaddingtonIndex);
  const end = Math.max(HeathrowTerminal3Index, PaddingtonIndex);
  const pathToPaddington = fullPath.slice(start, end + 1);

  if (pathToPaddington.length === 0) {
    animationRunning = false;
    return;
  }

  map.panTo(pathToPaddington[0], { animate: false });

  let frame = 0;

  function animate() {
    if (frame < pathToPaddington.length) {
      trainMarker.setLatLng(pathToPaddington[frame]);
      map.panTo(pathToPaddington[frame], { animate: true, duration: 0.25 });
      frame++;
      setTimeout(animate, 5);
    } else {
      setTimeout(() => {
        markerPaddingtonLHR.openPopup();
        map.removeLayer(trainMarker);
        animationRunning = false;
      }, 100);
    }
  }

  animate();
}

// HeathrowTerminal5　→　Paddingtonへ滑らかに戻る関数
//イベント登録を無制限制限
map.on('popupopen', function (e) {
  const HeathrowTerminal5ToPaddingtonBtn = document.getElementById('HeathrowTerminal5ToPaddingtonCard');
  if (HeathrowTerminal5ToPaddingtonBtn) {
    const newBtn = HeathrowTerminal5ToPaddingtonBtn.cloneNode(true);
    HeathrowTerminal5ToPaddingtonBtn.parentNode.replaceChild(newBtn, HeathrowTerminal5ToPaddingtonBtn);

    newBtn.addEventListener('click', () => {
      if (!animationRunning) {
        HeathrowTerminal5ToPaddington();
      }
    });
  }
  })

function HeathrowTerminal5ToPaddington() {
  if (animationRunning) return; // ← すでに動いていたら何もしない
  animationRunning = true;

  markerHeathrowTerminal5.closePopup(); // ← 移動前にHeathrowTerminal5のポップアップを閉じる

  // 🚄 アイコン付きマーカーを表示（初期位置）
  const trainIcon = L.icon({
    iconUrl: "image/icon/train_test.png",// アイコン画像のURL
    iconRetinaUrl:"image/icon/train_test@2x.png",
    iconSize: [40, 40],
    iconAnchor: [25, 25],
    className: "icon-train"
  });

  const trainMarker = L.marker(HeathrowTerminal5, { icon: trainIcon }).addTo(map);

  const fullPath = [...interpolatePolyline(grw_heathrow, 50)].reverse();// ← 数字が少ないほどスピードアップ

  const HeathrowTerminal5ToPaddingtonIndex = fullPath.findIndex(p => 
    Math.abs(p[0] - Paddington_LHR[0]) < 0.0001 && 
    Math.abs(p[1] - Paddington_LHR[1]) < 0.0001
  );

  const pathToHeathrowTerminal5ToPaddington = fullPath.slice(0, HeathrowTerminal5ToPaddingtonIndex + 1);
  
// 最初にジャンプを防ぐ
  map.panTo(pathToHeathrowTerminal5ToPaddington[0], { animate: false });


  let frame = 0;

  function animate() {
   
   const index = frame;

    if (index < pathToHeathrowTerminal5ToPaddington.length) {
      trainMarker.setLatLng(pathToHeathrowTerminal5ToPaddington[index]); // ← マーカーを移動
      map.panTo(pathToHeathrowTerminal5ToPaddington[index], { animate: true, duration: 0.25 });
      frame++;
      setTimeout(animate, 5); // ← 速度調整（数字が少ないほどスピードアップ）
    } else {
      setTimeout(() => {
        markerPaddingtonLHR.openPopup();
        map.removeLayer(trainMarker); // アイコンを削除
        animationRunning = false;
      }, 100);

    }
  }
  animate();
}



