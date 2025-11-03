// London Bristol module

// 鉄道ルート　ロンドン⇔ブリストル ※パディントン～ブリストルのconstは、プリマス行と別にすること　//
const Paddington_BR = [51.516894337841045, -0.17712164609673156];
const BishopsRd_BR = [51.518401914496124, -0.1797598504051242];
const WestBourneBd_BR = [51.51871334985519, -0.18374146010219508];
const RoyalOak_BR = [51.51913163568928, -0.1886898594810405];
const WestbournePark_BR = [51.52104823863323, -0.2008535300059221];
//カーブ北西//
const LadbrokeGrove_e_BR = [51.52461358171907,-0.21421088953644724];
const Cn_LadbrokeGrove_BR = [
(51.52461358171907 + 51.52593131289449) / 2 + 0.0009, //西//
(-0.21421088953644724 + -0.22850075456681943) / 2 + 0.0004 //北//
];
const LadbrokeGrove_w_BR = [51.52593131289449,-0.22850075456681943];
const CP_LadbrokeGrove_BR = adaptiveBezierCurve(LadbrokeGrove_e_BR,Cn_LadbrokeGrove_BR,LadbrokeGrove_w_BR,1);
const CP_LadbrokeGrove_Un_BR = resamplePath(CP_LadbrokeGrove_BR, 4);
//カーブ北西//
const OldOakCommon_s_BR = [51.52580430434064,-0.23449739433667227];
const Cn_OldOakCommon_BR = [
(51.52580430434064 + 51.52219904630757) / 2 + 0.0009, //西//
(-0.23449739433667227 + -0.2518537023518243) / 2 + 0.0004 //北//
];
const OldOakCommon_n_BR = [51.52219904630757,-0.2518537023518243];
const CP_OldOakCommon_BR = adaptiveBezierCurve(OldOakCommon_s_BR,Cn_OldOakCommon_BR,OldOakCommon_n_BR,1);
const CP_OldOakCommon_Un_BR = resamplePath(CP_OldOakCommon_BR, 5);
const WesturnAv_BR = [51.51850865397213, -0.26169606793978945];
//カーブ南東//
const ActonMainLine_s_BR = [51.51691259162641,-0.26793399593923645];
const Cn_ActonMainLine_BR = [
(51.51691259162641 + 51.515086880046205) / 2 - 0.0009, //東//
(-0.26793399593923645 + -0.2823850119376564) / 2 + 0.0004 //南//
];
const ActonMainLine_n_BR = [51.515086880046205,-0.2823850119376564];
const CP_ActonMainLine_BR = adaptiveBezierCurve(ActonMainLine_s_BR,Cn_ActonMainLine_BR,ActonMainLine_n_BR,1);
const CP_ActonMainLine_Un_BR = resamplePath(CP_ActonMainLine_BR, 4);
const HangerLn_BR = [51.51495494393, -0.2921100265257885];
const EalingBroadway_BR = [51.51465064287004, -0.30230567720185864];
const WestEaling_BR = [51.51358010880236, -0.3214764146370598];
const Hanwell_BR = [51.512004340874746, -0.33885712908879867];
const Ironbridge_BR = [51.50943861368329, -0.35484180481476074];
const SouthallPark_BR = [51.50774130466111, -0.3662880480411617];
const Southall_BR = [51.50592313122698, -0.3787199480281218];
const TranscoSH_BR = [51.504227991541484, -0.3908663030736357];
const SteerHayes_BR = [51.503082180703366, -0.40062246778202454];
const TheParkway_BR  = [51.502734659040215, -0.4074175040518041];
const HayesHarlington_BR = [51.50307214571084, -0.42090214750314464];
const DawleyRd_BR = [51.50376577367225, -0.429886366573761];
const HeathrowJn_BR = [51.504999575941255, -0.4389347703584408];//HayesHarlington駅(ヒースロー行はここまで)
const WestDrayton_BR = [51.50986753543619, -0.4727315515531088];
const Iver_BR = [51.508455114705534, -0.5064977963664008];
const Langley_BR = [51.50788235902562, -0.5427571498418663];
const Slough_BR = [51.511845860102135, -0.591373216810744]; //Slough駅(ウィンザー行はここまで)
const UK_A355_BR  = [51.516811329106105, -0.6139547009628884];
const Burnham_BR  = [51.523300321388334, -0.6464416165232728];
const Taplow_BR  = [51.523392521598176, -0.6813061061208396];
const Maidenhead_BR = [51.51875824766786, -0.7230490896244363];
const UK_A404_BR = [51.51147858325339, -0.7514209243355933];
const UK_B3024_BR = [51.48183563083723, -0.843463925251949];
const Twyford_BR = [51.47547438112665, -0.8631406106240559];
const UK_A4_BR = [51.46103190036599, -0.9176864747456273];
const UK_A3290_BR = [51.45877987998453, -0.9414232001156574];
const Reading_BR = [51.45934668763566, -0.9732287208600584]; //Reading駅(ブリストル行と分岐)
const Norcot_1 = [51.463325927721534, -1.0065701668645957];
const Norcot_2 = [51.46712241269038, -1.020474738525706];
const Tilehurst = [51.471613620876816, -1.0296586221878714];
const Pangbourne = [51.48536042303487, -1.0908758142663462];
const UK_A329_1 = [51.489346469453956, -1.1023532362454271];
const UK_A329_2_Park = [51.49749585162441, -1.1123525114939734];
const Lower_thames = [51.511649680090606, -1.1277946282562974];
const GoringStreatley = [51.52150090478524, -1.1334953552201663];
const UK_A329_4 = [51.56270382711487, -1.147755720221681];
const Cholsey = [51.57010364050926, -1.1581601133943504];
const SouthMoreton = [51.58896342034243, -1.1833880942206507];
const DidcotJC = [51.60939368813009, -1.2369859298077575]; //Didcotジャンクション駅(オックスフォード行と分岐)
const DidcotParkway = [51.61093148758615, -1.2429802216318375];
const UK_A4130 = [51.61538352322922, -1.2578056157501303];
const UK_A34_Didcot = [51.621052434394414, -1.3052631482526416];
const UK_A338 = [51.61977582134478, -1.4078940589292777];
const UK_A417 = [51.61279506895306, -1.488186186489696];
const UK_B4000 = [51.58687215110774, -1.656240047962435];
const UK_A420 = [51.585432246580034, -1.6866670268762998];
const UK_A420_2 = [51.584285623279484, -1.7015586513800782];
const UK_A419 = [51.57807202188787, -1.7349467892862724];
const UK_A4289 = [51.568747923099416, -1.7757718319164666];
const Swindon = [51.565299775141895, -1.7856377362114335];
const UK_B4289 = [51.56076824817248, -1.7973625130841462];
const UK_B3102 = [51.55500642205523, -1.808249044342691];
const Footpathbridge = [51.54672931864195, -1.8249043765351816];
const UK_M4_Swindon = [51.54224550887822, -1.8383154216400532];
const UK_B4005 = [51.54051058296609, -1.845246249721021];
const SwindonJC = [51.53512127125015, -1.905205568541617];
const UK_A3102 = [51.53648268758815, -1.9132521955879838];
const UK_B4069 = [51.5216634470272, -2.0092279195745353];
const ChristianMalford = [51.50824577903235, -2.043338789970199];
const Chippenham = [51.462624198729046, -2.1152152168085063];
const UK_A420_CP = [51.46097085117332, -2.1195238884853844];
const UK_A4_CP = [51.45160652592362, -2.1332651627222705];
const UK_A4528 = [51.44343115042127, -2.1365291771770467];
const UK_A350_CP = [51.439164553165746, -2.13946887826316];
const UK_B3353 = [51.42664088950838, -2.1827801359680064];
const UK_B3109 = [51.42133507448283, -2.2264676576306637];
const UK_A4_CP2 = [51.41866010611364, -2.249259339739581];
const UK_A4_CP3 = [51.416691011416056, -2.2696715985573466];
const UK_A4_CP4 = [51.40784688775321, -2.284579612290252];
const Bathford = [51.40226461213416, -2.309304033992828];
const UK_A36_bath = [51.387594410142846, -2.348497361475689];
const UK_A36_bath_2 = [51.38085842532954, -2.3512868588473155];
const BathSpa = [51.37779463871984, -2.3569100502506695];
const UK_A36_bath_3 = [51.377335926011, -2.361507000466739];
const OldfieldPark = [51.37914532931701, -2.380562388610045];
const UK_A36_bath_5 = [51.38816580889732, -2.4164939890413333];
const Keynsham = [51.4179075167263, -2.4957200131629445];
const UK_A4174 = [51.42759499122123, -2.51512157827111];
const UK_A4320 = [51.45125459481833, -2.5667670447660584];
const BristolNorthJC = [51.451762298298576, -2.5737357917612527];
const Bristol = [51.44953427862961, -2.5807735188100613];

const grw_2 = L.polyline([Paddington_BR,BishopsRd_BR,WestBourneBd_BR,RoyalOak_BR,WestbournePark_BR,
...CP_LadbrokeGrove_Un_BR,...CP_OldOakCommon_Un_BR,WesturnAv_BR,
...CP_ActonMainLine_Un_BR,HangerLn_BR,EalingBroadway_BR,WestEaling_BR,Hanwell_BR,Ironbridge_BR,
Southall_BR,TranscoSH_BR,SteerHayes_BR,TheParkway_BR,HayesHarlington_BR,DawleyRd_BR,HeathrowJn_BR,
WestDrayton_BR,Iver_BR,Langley_BR,
Slough_BR,UK_A355_BR,Burnham_BR,Taplow_BR,Maidenhead_BR,UK_A404_BR,UK_B3024_BR,Twyford_BR,UK_A4_BR,UK_A3290_BR,
Reading_BR,Norcot_1,Norcot_2,Tilehurst,Pangbourne,UK_A329_1,UK_A329_2_Park,Lower_thames,GoringStreatley,UK_A329_4,Cholsey,SouthMoreton,DidcotJC,
DidcotParkway,UK_A4130,UK_A34_Didcot,UK_A338,UK_A417,UK_B4000,UK_A420,UK_A420_2,UK_A419,UK_A4289,
Swindon,UK_B4289,UK_B3102,Footpathbridge,UK_M4_Swindon,UK_B4005,SwindonJC,UK_A3102,UK_B4069,ChristianMalford,
Chippenham,UK_A420_CP,UK_A4_CP,UK_A4528,UK_A350_CP,UK_B3353,UK_B3109,UK_A4_CP2,UK_A4_CP3,UK_A4_CP4,Bathford,UK_A36_bath,UK_A36_bath_2,
BathSpa,UK_A36_bath_3,OldfieldPark,UK_A36_bath_5,Keynsham,UK_A4174,UK_A4320,BristolNorthJC,
Bristol], { color: '#000000' }).addTo(map);

//ルートの順序は Paddington → Reading → BathSpa → Bristol





// Paddington → Bristol（始発駅→終着駅）
//イベント登録を無制限制限
map.on('popupopen', function (e) {
  const BristolBtn = document.getElementById('goToBristolCard');
  if (BristolBtn) {
    const newBtn = BristolBtn.cloneNode(true);
    BristolBtn.parentNode.replaceChild(newBtn, BristolBtn);

    newBtn.addEventListener('click', () => {
      if (!animationRunning) {
        goToBristol();
      }
    });
  }
  })

function goToBristol() {
  if (animationRunning) return; // ← すでに動いていたら何もしない
  animationRunning = true;

  markerPaddington.closePopup(); // ← 移動前にPaddington駅のポップアップを閉じる

   // 🚄 アイコン付きマーカーを表示（初期位置）
  const trainIcon = L.icon({
    iconUrl: "image/icon/train_test.png",// アイコン画像のURL
    iconRetinaUrl:"image/icon/train_test@2x.png",
    iconSize: [40, 40],
    iconAnchor: [25, 25],
    className: "icon-train"
  });

  const trainMarker = L.marker(Paddington_BR, { icon: trainIcon }).addTo(map);

  const fullPath = interpolatePolyline(grw_2, 50);// ← 数字が少ないほどスピードアップ 100座標 × 30ms = 約3秒

  const bristolIndex = fullPath.findIndex(p => 
    Math.abs(p[0] - Bristol[0]) < 0.0001 && 
    Math.abs(p[1] - Bristol[1]) < 0.0001
  );

  const pathToBristol = fullPath.slice(0, bristolIndex + 1);

  // ✅ ここに animatePath を定義
  const totalFrames = pathToBristol.length;
  let frame = 0;

  function animate() {
   
   const index = frame;

    if (index < pathToBristol.length) {
      trainMarker.setLatLng(pathToBristol[index]); // ← マーカーを移動
      map.panTo(pathToBristol[index], { animate: true, duration: 0.25 });
      frame++;
      setTimeout(animate, 5); // ← 速度調整（数字が少ないほどスピードアップ）50座標 × 30ms = 約1.5秒
    } else {
      setTimeout(() => {
        markerBristol.openPopup();
        map.removeLayer(trainMarker); // アイコンを削除
        animationRunning = false;
      }, 100);

    }
  }

  animate();
}

// Bristol →  Paddington（終着駅→始発駅）
//イベント登録を無制限
map.on('popupopen', function (e) {
  const BristoltoPaddington = document.getElementById('BristoltoPaddingtonCard');
  if (BristoltoPaddington ) {
    const newBtn = BristoltoPaddington .cloneNode(true);
    BristoltoPaddington .parentNode.replaceChild(newBtn, BristoltoPaddington );

    newBtn.addEventListener('click', () => {
      if (!animationRunning) {
        goToBristoltoPaddington();
      }
    });
  }
  })

function goToBristoltoPaddington() {
  if (animationRunning) return;
  animationRunning = true;

  markerBristol.closePopup();// ← 移動前にBristol駅のポップアップを閉じる

   // 🚄 アイコン付きマーカーを表示（初期位置）
  const trainIcon = L.icon({
    iconUrl: "image/icon/train_test.png",// アイコン画像のURL
    iconRetinaUrl:"image/icon/train_test@2x.png",
    iconSize: [40, 40],
    iconAnchor: [25, 25],
    className: "icon-train"
  });

  const trainMarker = L.marker(Bristol, { icon: trainIcon }).addTo(map);

  const fullPath = [...interpolatePolyline(grw_2, 50)].reverse(); //折り返し

  const BristoltopaddingtonIndex = fullPath.findIndex(p => 
    Math.abs(p[0] - Paddington_BR[0]) < 0.0001 && 
    Math.abs(p[1] - Paddington_BR[1]) < 0.0001
  );

  const pathToBristoltopaddington = fullPath.slice(0, BristoltopaddingtonIndex + 1);

  // 最初にジャンプを防ぐ
  map.panTo(pathToBristoltopaddington[0], { animate: false });

  let frame = 0;

  function animate() {
   
   const index = frame;

    if (index < pathToBristoltopaddington.length) {
      trainMarker.setLatLng(pathToBristoltopaddington[index]); // ← マーカーを移動
      map.panTo(pathToBristoltopaddington[index], { animate: true, duration: 0.25 });
      frame++;
      setTimeout(animate, 5); // ← 速度調整（数字が少ないほどスピードアップ）
    } else {
      setTimeout(() => {
        markerPaddington.openPopup();
        map.removeLayer(trainMarker); // アイコンを削除
        animationRunning = false;
      }, 100);

    }
  }
  animate();
}

// Reading → BathSpa（途中駅→途中駅）
//イベント登録
map.on('popupopen', function (e) {
  const ReadingToBathBtn = document.getElementById('RedingToBathSpaCard');
  if (ReadingToBathBtn) {
    const newBtn = ReadingToBathBtn.cloneNode(true);
    ReadingToBathBtn.parentNode.replaceChild(newBtn, ReadingToBathBtn);

    newBtn.addEventListener('click', () => {
      if (!animationRunning) {
        goToReadingToBathSpa();
      }
    });
  }
});

function goToReadingToBathSpa() {
  if (animationRunning) return;
  animationRunning = true;

  markerReading.closePopup();

  const trainIcon = L.icon({
    iconUrl: "image/icon/train_test.png",
    iconRetinaUrl: "image/icon/train_test@2x.png",
    iconSize: [40, 40],
    iconAnchor: [25, 25],
    className: "icon-train"
  });

  const trainMarker = L.marker(Reading_BR, { icon: trainIcon }).addTo(map);

  const fullPath = interpolatePolyline(grw_2, 50);

  const readingIndex = fullPath.findIndex(p =>
    Math.abs(p[0] - Reading_BR[0]) < 0.0001 &&
    Math.abs(p[1] - Reading_BR[1]) < 0.0001
  );

  const bathspaIndex = fullPath.findIndex(p =>
    Math.abs(p[0] - BathSpa[0]) < 0.0001 &&
    Math.abs(p[1] - BathSpa[1]) < 0.0001
  );

  if (readingIndex === -1 || bathspaIndex === -1) {
    animationRunning = false;
    return;
  }

  const start = Math.min(readingIndex, bathspaIndex);
  const end = Math.max(readingIndex, bathspaIndex);
  const pathToReadingtoBathSpa = fullPath.slice(start, end + 1);

  if (pathToReadingtoBathSpa.length === 0) {
    animationRunning = false;
    return;
  }

  

  map.panTo(pathToReadingtoBathSpa[0], { animate: false });

  let frame = 0;

  function animate() {
    if (frame < pathToReadingtoBathSpa.length) {
      trainMarker.setLatLng(pathToReadingtoBathSpa[frame]);
      map.panTo(pathToReadingtoBathSpa[frame], { animate: true, duration: 0.25 });
      frame++;
      setTimeout(animate, 5);
    } else {
      setTimeout(() => {
        markerBathSpa.openPopup();
        map.removeLayer(trainMarker);
        animationRunning = false;
      }, 100);
    }
  }

  animate();
}

// BathSpa → Bristol（途中駅→終着駅）
//イベント登録
map.on('popupopen', function (e) {
  const BathToBristolBtn = document.getElementById('BathSpaToBristolCard');
  if (BathToBristolBtn) {
    const newBtn = BathToBristolBtn.cloneNode(true);
    BathToBristolBtn.parentNode.replaceChild(newBtn, BathToBristolBtn);

    newBtn.addEventListener('click', () => {
      if (!animationRunning) {
        goToBathSpatoBristol();
      }
    });
  }
});

function goToBathSpatoBristol() {
  if (animationRunning) return;
  animationRunning = true;

  markerBathSpa.closePopup();

  const trainIcon = L.icon({
    iconUrl: "image/icon/train_test.png",
    iconRetinaUrl: "image/icon/train_test@2x.png",
    iconSize: [40, 40],
    iconAnchor: [25, 25],
    className: "icon-train"
  });

  const trainMarker = L.marker(BathSpa, { icon: trainIcon }).addTo(map);

  const fullPath = interpolatePolyline(grw_2, 50);

  const bathSpaIndex = fullPath.findIndex(p =>
    Math.abs(p[0] - BathSpa[0]) < 0.0001 &&
    Math.abs(p[1] - BathSpa[1]) < 0.0001
  );

  const bristolIndex = fullPath.findIndex(p =>
    Math.abs(p[0] - Bristol[0]) < 0.0001 &&
    Math.abs(p[1] - Bristol[1]) < 0.0001
  );

  if (bathSpaIndex === -1 || bristolIndex === -1) {
    animationRunning = false;
    return;
  }
  //BathSpa → Paddington のインデックスを使ってsliceを抽出し、正しいルートにする。
  //start、endの大きさはMathによって調整している。
  const start = Math.min(bathSpaIndex, bristolIndex);
  const end = Math.max(bathSpaIndex, bristolIndex);
  const pathToBristol = fullPath.slice(start, end + 1);

  if (pathToBristol.length === 0) {
    animationRunning = false;
    return;
  }

  map.panTo(pathToBristol[0], { animate: false });

  let frame = 0;

  function animate() {
    if (frame < pathToBristol.length) {
      trainMarker.setLatLng(pathToBristol[frame]);
      map.panTo(pathToBristol[frame], { animate: true, duration: 0.25 });
      frame++;
      setTimeout(animate, 5);
    } else {
      setTimeout(() => {
        markerBristol.openPopup();
        map.removeLayer(trainMarker);
        animationRunning = false;
      }, 100);
    }
  }

  animate();
}

//BathSpa　→　Paddington（途中駅→始発駅）
//イベント登録
map.on('popupopen', function (e) {
  const BathToPaddingtonBtn = document.getElementById('BathSpaToPaddingtonCard');
  if (BathToPaddingtonBtn) {
    const newBtn = BathToPaddingtonBtn.cloneNode(true);
    BathToPaddingtonBtn.parentNode.replaceChild(newBtn, BathToPaddingtonBtn);

    newBtn.addEventListener('click', () => {
      if (!animationRunning) {
        goToPaddingtonFromBathSpa();
      }
    });
  }
});

function goToPaddingtonFromBathSpa() {
  if (animationRunning) return;
  animationRunning = true;

  markerBathSpa.closePopup();

  const trainIcon = L.icon({
    iconUrl: "image/icon/train_test.png",
    iconRetinaUrl: "image/icon/train_test@2x.png",
    iconSize: [40, 40],
    iconAnchor: [25, 25],
    className: "icon-train"
  });

  const trainMarker = L.marker(BathSpa, { icon: trainIcon }).addTo(map);

  const fullPath = interpolatePolyline(grw_2, 50).reverse(); // Paddington → Bristol の順

  const bathSpaIndex = fullPath.findIndex(p =>
    Math.abs(p[0] - BathSpa[0]) < 0.0001 &&
    Math.abs(p[1] - BathSpa[1]) < 0.0001
  );

  const paddingtonIndex = fullPath.findIndex(p =>
    Math.abs(p[0] - Paddington_BR[0]) < 0.0001 &&
    Math.abs(p[1] - Paddington_BR[1]) < 0.0001
  );

  if (bathSpaIndex === -1 || paddingtonIndex === -1) {
    animationRunning = false;
    return;
  }

  const start = Math.min(bathSpaIndex, paddingtonIndex);
  const end = Math.max(bathSpaIndex, paddingtonIndex);
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
        markerPaddington.openPopup();
        map.removeLayer(trainMarker);
        animationRunning = false;
      }, 100);
    }
  }

  animate();
}

