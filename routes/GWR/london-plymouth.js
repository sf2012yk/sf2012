// London Plymouth module

// 鉄道ルート　ロンドン⇔プリマス //
const Paddington = [51.516894337841045, -0.17712164609673156];
const BishopsRd = [51.518401914496124, -0.1797598504051242];
const WestBourneBd = [51.51871334985519, -0.18374146010219508];
const RoyalOak = [51.51913163568928, -0.1886898594810405];
const WestbournePark = [51.52104823863323, -0.2008535300059221];
//カーブ北西//
const LadbrokeGrove_e = [51.52461358171907,-0.21421088953644724];
const Cn_LadbrokeGrove = [
(51.52461358171907 + 51.52593131289449) / 2 + 0.0009, //西//
(-0.21421088953644724 + -0.22850075456681943) / 2 + 0.0004 //北//
];
const LadbrokeGrove_w = [51.52593131289449,-0.22850075456681943];
const CP_LadbrokeGrove = adaptiveBezierCurve(LadbrokeGrove_e,Cn_LadbrokeGrove,LadbrokeGrove_w,1);
const CP_LadbrokeGrove_Un = resamplePath(CP_LadbrokeGrove, 4);
//カーブ北西//
const OldOakCommon_s = [51.52580430434064,-0.23449739433667227];
const Cn_OldOakCommon = [
(51.52580430434064 + 51.52219904630757) / 2 + 0.0009, //西//
(-0.23449739433667227 + -0.2518537023518243) / 2 + 0.0004 //北//
];
const OldOakCommon_n = [51.52219904630757,-0.2518537023518243];
const CP_OldOakCommon = adaptiveBezierCurve(OldOakCommon_s,Cn_OldOakCommon,OldOakCommon_n,1);
const CP_OldOakCommon_Un = resamplePath(CP_OldOakCommon, 5);
const WesturnAv = [51.51850865397213, -0.26169606793978945];
//カーブ南東//
const ActonMainLine_s = [51.51691259162641,-0.26793399593923645];
const Cn_ActonMainLine = [
(51.51691259162641 + 51.515086880046205) / 2 - 0.0009, //東//
(-0.26793399593923645 + -0.2823850119376564) / 2 + 0.0004 //南//
];
const ActonMainLine_n = [51.515086880046205,-0.2823850119376564];
const CP_ActonMainLine = adaptiveBezierCurve(ActonMainLine_s,Cn_ActonMainLine,ActonMainLine_n,1);
const CP_ActonMainLine_Un = resamplePath(CP_ActonMainLine, 4);
const HangerLn = [51.51495494393, -0.2921100265257885];
const EalingBroadway = [51.51465064287004, -0.30230567720185864];
const WestEaling = [51.51358010880236, -0.3214764146370598];
const Hanwell = [51.512004340874746, -0.33885712908879867];
const Ironbridge = [51.50943861368329, -0.35484180481476074];
const SouthallPark = [51.50774130466111, -0.3662880480411617];
const Southall = [51.50592313122698, -0.3787199480281218];
const TranscoSH = [51.504227991541484, -0.3908663030736357];
const SteerHayes = [51.503082180703366, -0.40062246778202454];
const TheParkway  = [51.502734659040215, -0.4074175040518041];
const HayesHarlington = [51.50307214571084, -0.42090214750314464];
const DawleyRd = [51.50376577367225, -0.429886366573761];
const HeathrowJn = [51.504999575941255, -0.4389347703584408];//HayesHarlington駅(ヒースロー行はここまで)
const WestDrayton = [51.50986753543619, -0.4727315515531088];
const Iver = [51.508455114705534, -0.5064977963664008];
const Langley = [51.50788235902562, -0.5427571498418663];
const Slough = [51.511845860102135, -0.591373216810744]; //Slough駅(ウィンザー行はここまで)
const UK_A355  = [51.516811329106105, -0.6139547009628884];
const Burnham  = [51.523300321388334, -0.6464416165232728];
const Taplow  = [51.523392521598176, -0.6813061061208396];
const Maidenhead = [51.51875824766786, -0.7230490896244363];
const UK_A404 = [51.51147858325339, -0.7514209243355933];
const UK_B3024 = [51.48183563083723, -0.843463925251949];
const Twyford = [51.47547438112665, -0.8631406106240559];
const UK_A4 = [51.46103190036599, -0.9176864747456273];
const UK_A3290 = [51.45877987998453, -0.9414232001156574];
const Reading = [51.45934668763566, -0.9732287208600584]; //Reading駅(ブリストル行と分岐)
const ReadingWest = [51.455152962328924, -0.9904992718680445];
const UK_A4155 = [51.44859124149792, -0.9935576792014145];
const GWRjunction_1 = [51.44114864269765, -0.9979485375122101];
const UK_M4 = [51.43544527854332, -1.0568388827599342];
const Theale = [51.43350122075964, -1.0739980323880198];
const Sulhamstead = [51.420189046366396, -1.1026966430021847];
const UK_A4_2 = [51.41092611544017, -1.123769887328425];
const Aldermaston = [51.40216586661463, -1.1369813825262616];
const Midgham = [51.39608168722434, -1.178200491261297];
const HealesLock = [51.393750416104744, -1.1939236005085878];
const Thatcham = [51.39378556179479, -1.2435927471235355];
const BullsLock = [51.39661249909432, -1.284274377718585];
const Racecourse = [51.39843708917264, -1.3072376812659006];
const Newbury = [51.39775229870874, -1.3228771861662805]; //Newbury駅
const UK_A34 = [51.396902066445755, -1.355629195567635];
const BenhamLock = [51.3977162593802, -1.3749263411251995];
const HamsteadLock = [51.40194656816828, -1.3909337645468332];
const Kintbury = [51.40262821306199, -1.445820305317015];
const BrunsdonLock = [51.406174537191056, -1.4669332265271684];
const WireLock = [51.40993287046265, -1.4800940174628576];
const DunMillLock = [51.41119095821429, -1.4962087292598085];
const Hungerford = [51.41471956738876, -1.51126882722097]; //Hungerford駅
const PicketfieldLock = [51.411498597492766, -1.5483384392525676];
const FroxfieldBottomLock = [51.40756100293518, -1.5655927824137397];
const FroxfieldMiddleLock = [51.40512490614523, -1.5695195364281949];
const OakhillDownLock = [51.40279576918389, -1.5723519491404403];
const LittleBedwynLock = [51.392222545484934, -1.5839458484294529];
const Bedwyn = [51.379363619534864, -1.5990850690908303]; //Bedwyn駅
const CroftonCrossingLock = [51.36076588986326, -1.6223279403644766];
const UK_A346 = [51.36980264139844, -1.6790553775713704];
const Pewsey = [51.3421932904433, -1.770767302797448]; //Pewsey駅
const UK_A342 = [51.33052887191414, -1.9399452433926665];
const UK_A360 = [51.29259649769493, -2.0077608240042526];
const UK_A350 = [51.27095083813433, -2.178168124298536];
const UK_B3097 = [51.26776321975572, -2.198188786480391];
const Westbury = [51.266430716580366, -2.199827576006039]; //Westbury駅
const WestburJunction_1 = [51.261870289158864, -2.2056848404008824]; 
const WestburJunction_2 = [51.25892363974029, -2.2280597841350547];
const UK_A36 = [51.253302998626125, -2.2579034917621255];
const UK_A361 = [51.24152369876019, -2.289098182340183];
const UK_B3092 = [51.23049678686312, -2.2987533762804984];
const Bruton = [51.11151369463063, -2.4475458053410093]; //Bruton駅
const UK_A359 = [51.10817326523206, -2.458700490782947];
const CastleCary = [51.09977432216676, -2.5226884750656717]; //CastleCary駅
const UK_A371 = [51.098242574484686, -2.5272464397884606];
const UK_B3153 = [51.0938494709171, -2.5424384716186457];
const UK_A37 = [51.0714576535699, -2.6248196895761073];
const CharltonMackrell = [51.0568841871401, -2.670397498075117];
const UK_B3153_2 = [51.059787135970645, -2.7003088838275984];
const UK_B3153_3 = [51.05599454281671, -2.7298468906741227];
const UK_B3165 = [51.053748962051245, -2.732224554417033];
const SomertonSouth = [51.05126222649578, -2.735995648989687];
const UK_B3165_2 = [51.04961656055823, -2.7399653183365538];
const UptonTunnel = [51.0410797144958, -2.764727817273952];
const UK_A372 = [51.0410604661167, -2.8194147407987464];
const UK_A378 = [51.04124935088083, -2.826238280609378];
const TauntonJunction = [51.04129733472127, -3.000106140197984];//分岐点
const UK_M5 = [51.024637341868356, -3.0557984543843935];
const UK_A38 = [51.02631088744768, -3.07051841746681];
const UK_A358 = [51.024178455910395, -3.090087814455394];
const Taunton = [51.02331377215021, -3.1035371321110854];//Taunton駅
const UK_A3027 = [51.02445983395398, -3.115367312582392];
const UK_A3065 = [51.02515452459031, -3.133194282535641];
const Tonedale = [50.98471028443164, -3.239484796750258];
const UK_A38_2 = [50.96713575449945, -3.270927482381291];
const UK_A38_3 = [50.953263737884605, -3.2976608174196116];
const Tiverton_parkway = [50.91715250466851, -3.3597230443082386];//Tiverton_parkway駅
const Willand = [50.8945515097463, -3.3765775906064777];
const UK_B3181 = [50.8794806835599, -3.3826976631166326];
const UK_A373 = [50.86086329049453, -3.3852100321764125];
const NagsHeadBridge = [50.837422760085175, -3.39274811656396];
const WaterstaveBridge = [50.82946180380413, -3.4001416301172775];
const CrosswaysTavern = [50.811465599406176, -3.4271500297875264];
const YardeFarm = [50.80495323669326, -3.453636325277788];
const PaddlefordBridge = [50.787968562036234, -3.489480838196632];
const UK_A396 = [50.784122678810334, -3.4967409088078494];
const SandyLaneLC = [50.78060796020351, -3.502373990407431];
const StokeCanon = [50.7717510204143, -3.5093041731618966];
const LiverExe_1 = [50.76379415069894, -3.517347320141396];
const LiverExe_3 = [50.75657617824731, -3.529160162987388];
const UK_A377 = [50.746946227553096, -3.5478895645225683];
const Exeter_stdavids = [50.7294333305537, -3.543730040076946];//Exeter_stdavids駅
const ExeterStThomas = [50.7294333305537, -3.543730040076946];//ExeterStThomas駅
const UK_A377_2 = [50.714860113395275, -3.536018298445353];
const MarshBarton = [50.7042431922934, -3.5214583752454933];//MarshBarton駅
const UK_A379 = [50.692521488959905, -3.5036325226217975];
const UK_M5_2 = [50.68530324850776, -3.491970167221419];
const Starcross = [50.627833190755, -3.447895891229658];//Starcross駅
const DawlishWarren = [50.59871923176234, -3.4435530968312777];//DawlishWarren駅
const DawlishWarrenSeaside = [50.595830214279474, -3.4433830295470638];
const RedRockBeach = [50.59276612367905, -3.444527468061528];
const BlackBridge = [50.59276612367905, -3.444527468061528];
const Dawlish = [50.58064708288686, -3.4645937602425056];//Dawlish駅
const Kennawaytunnel = [50.57707332659245, -3.467757178147319];
const HolcombeBeach = [50.56215216561298, -3.4744211420320967];
const Teignmouth = [50.54825872312098, -3.4945128205233726];//Teignmouth駅
const UK_A379_2 = [50.547306258419496, -3.499378116265792];
const UK_A379_3 = [50.54658418802258, -3.5105286319389597];
const UK_A380 = [50.54052015782775, -3.5845952633106783];
const Newtonabbot = [50.52977137614369, -3.599179421092743];//Newtonabbot駅
const UK_B3195 = [50.52654479632193, -3.5989896944307693];
const UK_A381JC = [50.51584556196358, -3.5891499799091537];
const GropersLn = [50.48568692918603, -3.6201634069555504];
const UK_A381_2 = [50.47528645072745, -3.6419924620595543];
const LiverDart = [50.437946494194264, -3.6861110513483375];
const Totnes = [50.43587563261568, -3.6889138327000484]; //Totnes駅
const UK_A385 = [50.43474838256769, -3.690681535519367];
const Tigley = [50.43063233466181, -3.748649204083089];
const UK_A385_2 = [50.43003599558403, -3.774505143641196];
const UK_A385_3 = [50.43223770436974, -3.7899047180298093];
const UK_A385_4 = [50.432218723790825, -3.802091831981494];
const SouthBrent = [50.427719052267, -3.8331433376357347];
const AishLn = [50.424424555711276, -3.8455887875010366];
const ChestonLn = [50.41240031776746, -3.85268279010396];
const UK_B3213 = [50.40543814651202, -3.854129963611364];
const UK_B3213_2 = [50.398784583144874, -3.86932548751488];
const UK_B3213_3 = [50.39742154793207, -3.8785273864201764];
const Ivybridge = [50.39348201112909, -3.9048988655434114]; //Ivybridge駅
const IvybridgeWest = [50.394362566284265, -3.9353042341561824];
const UK_B3417 = [50.39272746825944, -4.047708880198643];
const UK_B3416 = [50.38933461122094, -4.063381214958513];
const UK_A38_PL = [50.389645165569135, -4.084034511741838];
const UK_A374 = [50.383683159109395, -4.100579152184103];
const UK_B3214 = [50.382423256225444, -4.118887275534512];
const UK_B3250 = [50.38126264478199, -4.133599220421101];
const Plymouth = [50.3776674014801, -4.144099241952264];  //Plymouth駅

const grw = L.polyline([Paddington,BishopsRd,WestBourneBd,RoyalOak,WestbournePark,
...CP_LadbrokeGrove_Un,...CP_OldOakCommon_Un,WesturnAv,
...CP_ActonMainLine_Un,HangerLn,EalingBroadway,WestEaling,Hanwell,Ironbridge,
Southall,TranscoSH,SteerHayes,TheParkway,HayesHarlington,DawleyRd,HeathrowJn,
WestDrayton,Iver,Langley,Slough,UK_A355,Burnham,Taplow,Maidenhead,UK_A404,UK_B3024,Twyford,UK_A4,UK_A3290,
Reading, ReadingWest,UK_A4155,GWRjunction_1,UK_M4,Theale,Sulhamstead,UK_A4_2,
Aldermaston,Midgham,HealesLock,Thatcham,BullsLock,Racecourse,
Newbury,UK_A34,BenhamLock,HamsteadLock,Kintbury,BrunsdonLock,WireLock,DunMillLock,
Hungerford,PicketfieldLock,FroxfieldBottomLock,FroxfieldMiddleLock,OakhillDownLock,LittleBedwynLock,
Bedwyn,CroftonCrossingLock,UK_A346,Pewsey,UK_A342,UK_A360,UK_A350,UK_B3097,
Westbury,WestburJunction_1,WestburJunction_2,UK_A36,UK_A361,UK_B3092,Bruton,
CastleCary,UK_A371,UK_B3153,UK_A37,CharltonMackrell,UK_B3153_2,UK_B3153_3,UK_B3165,SomertonSouth,UK_B3165_2,
UptonTunnel,UK_A372,UK_A378,TauntonJunction,UK_M5,UK_A38,UK_A358,
Taunton, UK_A3027,UK_A3065,Tonedale,UK_A38_2,UK_A38_3,
Tiverton_parkway,Willand,UK_B3181,UK_A373,NagsHeadBridge,WaterstaveBridge,CrosswaysTavern,YardeFarm,
PaddlefordBridge,UK_A396,SandyLaneLC,StokeCanon,LiverExe_1,LiverExe_3,UK_A377,
Exeter_stdavids,ExeterStThomas,UK_A377_2,MarshBarton,UK_A379,UK_M5_2,Starcross,DawlishWarren,DawlishWarrenSeaside,RedRockBeach,BlackBridge,
Dawlish, Kennawaytunnel,HolcombeBeach,Teignmouth,UK_A379_2,UK_A379_3,UK_A380,
Newtonabbot,UK_B3195,UK_A381JC,GropersLn,UK_A381_2,LiverDart,
Totnes, UK_A385,Tigley,UK_A385_2,UK_A385_3,UK_A385_4,SouthBrent,AishLn,ChestonLn,UK_B3213,UK_B3213_2,UK_B3213_3,
Ivybridge,IvybridgeWest,UK_B3417,UK_B3416,UK_A38_PL,UK_A374,UK_B3214,UK_B3250,
Plymouth], { color: '#000000' }).addTo(map);

// Paddington → Plymouth駅へ滑らかに移動する関数
//イベント登録を無制限制限
map.on('popupopen', function (e) {
  const PlymouthBtn = document.getElementById('goToPlymouthCard');
  if (PlymouthBtn) {
    const newBtn = PlymouthBtn.cloneNode(true);
    PlymouthBtn.parentNode.replaceChild(newBtn, PlymouthBtn);

    newBtn.addEventListener('click', () => {
      if (!animationRunning) {
        goToPlymouth();
      }
    });
  }
  })

function goToPlymouth() {
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

  const trainMarker = L.marker(Paddington, { icon: trainIcon }).addTo(map);

  const fullPath = interpolatePolyline(grw, 50);

  const PlymouthIndex = fullPath.findIndex(p => 
    Math.abs(p[0] - Plymouth[0]) < 0.0001 && 
    Math.abs(p[1] - Plymouth[1]) < 0.0001
  );

  const pathToPlymouth = fullPath.slice(0, PlymouthIndex + 1);
  const totalFrames = pathToPlymouth.length;
  let frame = 0;

  function animate() {
    const index = frame;

    if (index < pathToPlymouth.length) {
      trainMarker.setLatLng(pathToPlymouth[index]); // ← マーカーを移動
      map.panTo(pathToPlymouth[index], { animate: true, duration: 0.25 });
      frame++;
      setTimeout(animate, 5); // ← 速度調整（数字が少ないほどスピードアップ）50座標 × 30ms = 約1.5秒
    } else {
      setTimeout(() => {
        markerPlymouth.openPopup();
        map.removeLayer(trainMarker); // アイコンを削除
        animationRunning = false;
      }, 100);

    }
  }

  animate();
}

// Plymouth →  Paddingtonへ滑らかに移動する関数
//イベント登録を無制限制限
map.on('popupopen', function (e) {
  const PlymouthtoPaddington = document.getElementById('PlymouthToPaddingtonCard');
  if (PlymouthtoPaddington) {
    const newBtn = PlymouthtoPaddington.cloneNode(true);
    PlymouthtoPaddington .parentNode.replaceChild(newBtn, PlymouthtoPaddington);

    newBtn.addEventListener('click', () => {
      if (!animationRunning) {
        goToPlymouthToPaddington();
      }
    });
  }
  })

function goToPlymouthToPaddington() {
  if (animationRunning) return; // ← すでに動いていたら何もしない
  animationRunning = true;

  markerPlymouth.closePopup(); // ← 移動前にBristol駅のポップアップを閉じる

   // 🚄 アイコン付きマーカーを表示（初期位置）
  const trainIcon = L.icon({
    iconUrl: "image/icon/train_test.png",// アイコン画像のURL
    iconRetinaUrl:"image/icon/train_test@2x.png",
    iconSize: [40, 40],
    iconAnchor: [25, 25],
    className: "icon-train"
  });

  const trainMarker = L.marker(Plymouth, { icon: trainIcon }).addTo(map);

  const fullPath = [...interpolatePolyline(grw, 50)].reverse(); //折り返し

  const PlymouthToPaddingtonIndex = fullPath.findIndex(p => 
    Math.abs(p[0] - Paddington[0]) < 0.0001 && 
    Math.abs(p[1] - Paddington[1]) < 0.0001
  );

  const pathToPlymouthToPaddington = fullPath.slice(0, PlymouthToPaddingtonIndex + 1);
  
   // 最初にジャンプを防ぐ
  map.panTo(pathToPlymouthToPaddington[0], { animate: false });

  let frame = 0;

  function animate() {
    
    const index = frame;

    if (index < pathToPlymouthToPaddington.length) {
      trainMarker.setLatLng(pathToPlymouthToPaddington[index]); // ← マーカーを移動
      map.panTo(pathToPlymouthToPaddington[index], { animate: true, duration: 0.25 });
      frame++;
      setTimeout(animate, 5); // ← 速度調整（数字が少ないほどスピードアップ）50座標 × 30ms = 約1.5秒
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
