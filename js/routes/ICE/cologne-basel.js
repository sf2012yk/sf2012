//  Cologne Basel

// 鉄道ルート　ケルン⇔バーゼル駅　//
const Cologne_2 = [50.94325481600945, 6.9585388293166295];
const Hohenzollernbrucke_w = [50.941424964243694, 6.962344663717393];
const Hohenzollernbrucke_c = [50.941401558759466, 6.965799129975659];
const Hohenzollernbrucke_e = [50.94146007244796, 6.9684178382682145];
const MesseDeutzBf = [50.94102706940316, 6.974639592215713];
const LanxessArena_e = [50.93924696686864, 6.98794691008877];
const Trimbornstraße = [50.93586991926647, 6.996716138377362];
const AirportBusinesspark = [50.91031255475196, 7.044511910266018];
const Steinstr = [50.89535688042125, 7.057167303594255];
const PorzRhein = [50.88299852167973, 7.064518811935749];
const Wahn = [50.85812219991485, 7.078776438828366];
const Spich = [50.82642736715999, 7.11519007738176];
const Troisdorf = [50.81403279227138, 7.149834691294657];
const SiegburgBonn = [50.79392077420858, 7.202679424294908];
const NeustadtWied_w = [50.624792636383106, 7.387352795245156];
const NeustadtWied_c = [50.621541621579865, 7.397890304014571];
const NeustadtWied_e = [50.619572587795155, 7.404891251723493];
const Fernthal = [50.59063518001385, 7.452095356917235];
const Epgert = [50.57685483237572, 7.486876653808769];
const Montabaur = [50.44469223827364, 7.825079497882552];
const Görgeshausen = [50.41369553125436, 7.951277304258078];
const Elz = [50.403518865827785, 8.030347522824092];
const LimburgSüd = [50.38230130502627, 8.096222841798578];
const SpotterplatzWest = [50.0372517113468, 8.51967990012424];
const SpotterplatzEast = [50.04446274421445, 8.53691627520122];
const Frankfurt_airport = [50.05213795307499, 8.570923411132238];
const Zeppelinheim = [50.03663973833626, 8.605309975431915];
const Walldorf = [50.00146435702203, 8.580817115967687];
const Mörfelden = [49.97901929362856, 8.565339782285893];
//カーブ南東//
const Mörfelden_s = [49.97502893756259,8.562663619019288];
const Cn_Mörfelden = [
(49.97502893756259 + 49.97205846839336) / 2 - 0.0005, //東//
(8.562663619019288 + 8.560009786895614) / 2 - 0.0004 //南//
];
const Mörfelden_n = [49.97205846839336,8.560009786895614];
const CP_Mörfelden = adaptiveBezierCurve(Mörfelden_s,Cn_Mörfelden,Mörfelden_n,1);
const CP_Mörfelden_Un = resamplePath(CP_Mörfelden, 4);
const GerauerStr = [49.966614300994785, 8.553317648715423];
//カーブ北西//
const GroßGerau_n = [49.92275188720747,8.499073313062299];
const Cn_GroßGerau = [
(49.92275188720747 + 49.91454387769905) / 2 + 0.0019, //西//
(8.499073313062299 + 8.49470271452945) / 2 - 0.0014 //北//
];
const GroßGerau_s = [49.91454387769905,8.49470271452945];
const CP_GroßGerau = adaptiveBezierCurve(GroßGerau_n,Cn_GroßGerau,GroßGerau_s,1);
const CP_GroßGerau_Un = resamplePath(CP_GroßGerau, 8);
const Dornberg = [49.909507426079095, 8.494358941708379];
const Dornheim = [49.877340935948766, 8.493700334569889];
const Wolfskehlen = [49.85399876149175, 8.493102149337037];
const Gernsheim = [49.75394860901905, 8.490013527272989];
const GroßRohrheim = [49.714174730082696, 8.476726378999986];
const BiblisBf = [49.68868228994412, 8.450394810259422];
//カーブ北西//
const Biblis_n = [49.685379418538844,8.445619693144756];
const Cn_Biblis = [
(49.685379418538844 + 49.68139371280027) / 2 - 0.0009, //西//
(8.445619693144756 + 8.444436209670377) / 2 - 0.0014 //北//
];
const Biblis_s = [49.68139371280027,8.444436209670377];
const CP_Biblis = adaptiveBezierCurve(Biblis_n,Cn_Biblis,Biblis_s,1);
const CP_Biblis_Un = resamplePath(CP_Biblis, 6);
const Bobstadt = [49.66336159932317, 8.451713347776536];
const BürstadtBf = [49.64572459892588, 8.458894975192672];
const Lampertheim = [49.59820479209414, 8.47841035390264];
const Lampertheim_s = [49.59380678905356, 8.480294029198202];
const ViernheimerStr = [49.58869895355318, 8.481560730537245];
const Blumenau_n = [49.57447946695845, 8.481857808378843];
const Blumenau_c = [49.56306689515242, 8.482090172173645];
const Blumenau_s = [49.5544299998149, 8.482259150638491];
const WaldStr = [49.53119900601848, 8.482466272757707];
const Mannheim = [49.47968211722923, 8.467507974305194];
const Mannheim_e = [49.47147937419355, 8.484217515278216];
const MannheimARENA = [49.457571104168096, 8.511252088418654];
const Hockenheim = [49.31741095459013, 8.537130888969337];
const NeudorfNord = [49.17801417360898, 8.49332087023726];
const Neudorf = [49.16231283009111, 8.490401734599741];
const Friedrichstal_n = [49.10917369217509, 8.476463680313588];
const Friedrichstal_c = [49.101068144589185, 8.474309133421903];
const Friedrichstal_s = [49.096120725863344, 8.47303461270673];
const Blankenloch_n = [49.07313559695042, 8.466333242599882];
const Blankenloch_c = [49.06638786683969, 8.464487882834135];
const Blankenloch_s = [49.05755820242421, 8.462256284913376];
const Büchig = [49.048228644196385, 8.459757675170811];
const Reitschulschlag = [49.043156054038555, 8.458247439223541];
const Hagsfeld_n = [49.03837203005866, 8.456920523175075];
const Hagsfeld_c = [49.032767780428685, 8.455363948565285];
const Hagsfeld_s = [49.02749753682273, 8.453883926853];
const Karlsruhe = [48.993787878225646, 8.402638200453167];
const Rastatt_n = [48.86276018688745, 8.21881135883896];
const Rastatt_c = [48.860713288902744, 8.21565708104763];
const Rastatt_s = [48.85873991879611, 8.214353786697181];
const BBHaueneberstein = [48.81190717240538, 8.208877110805613];
const BadenBaden = [48.79032594386292, 8.190606497458768];
const Sinzheim_n = [48.770625439607535, 8.169455480268056];
const Sinzheim_c = [48.760042155681646, 8.15829601393634];
const Sinzheim_s = [48.751441538979286, 8.15280906867165];
const BBRebland = [48.73384983305455, 8.146521595001373];
const Eisental = [48.71343042558989, 8.137622551363425];
const Sasbachried = [48.65618082154423, 8.08984645133877];
const Renchen = [48.59329828238857, 8.007323338771693];
const Urloffen = [48.560879518875716, 7.979973069565144];
const Appenweier_n = [48.55029433659049, 7.975537709719161];
const Appenweier_c = [48.54189904325713, 7.973163855067793];
const Appenweier_s = [48.530110197974224, 7.96941566372174];
const Offenburg = [48.476674609387295, 7.946440305878149];
//カーブ南東//
const Grabenallee_n = [48.46730616453111,7.948959621338317];
const Cn_Grabenallee = [
(48.46730616453111 + 48.46398239644954) / 2 - 0.0014, //東//
(7.948959621338317 + 7.946468459843711) / 2 + 0.0014 //南//
];
const Grabenallee_s = [48.46398239644954,7.946468459843711];
const CP_Grabenallee = adaptiveBezierCurve(Grabenallee_n,Cn_Grabenallee,Grabenallee_s,1);
const CP_Grabenallee_Un = resamplePath(CP_Grabenallee, 8);
const Friesenheim = [48.38157673444892, 7.863127429415228];
const Lahr = [48.34093806199923, 7.835239219036146];
const Orschweier = [48.27411611224956, 7.790218782207496];

const Ringsheim_n = [48.24959854419228, 7.7735837436689845];
const Ringsheim_c = [48.24877587870748, 7.773088694711667];
const Ringsheim_s = [48.244627423765735, 7.771049875102899];
const Herbolzheim = [48.22387706190546, 7.7678312056018415];
const Kenzingen = [48.19442554737012, 7.764160741210448];
const Köndringen = [48.1373414334861, 7.8031447803571705];
const Teningen_w = [48.132341054261126, 7.815399667125009];
const Teningen_c = [48.12863180747356, 7.824638031172751];
const Teningen_e = [48.12388647140585, 7.836438597574503];
const Emmendingen = [48.11930933595476, 7.847950465197431];
const Denzlingen = [48.06859462248486, 7.88142977213461];
const Gundelfingen_n = [48.04935122659428, 7.875840802740226];
const Gundelfingen_c = [48.044061965663616, 7.874150714409568];
const Gundelfingen_s = [48.038620904147734, 7.871536708050439];
const WiltalStr = [48.030463837335994, 7.867204636977016];
const FRZähringen = [48.02436524627309, 7.863880177433705];
const FRSonnenstraße = [48.005940884087245, 7.848650809751836];
const Freiburg = [47.99764397378909, 7.841209835361019];
const FRStGeorgen = [47.97552447734587, 7.802785231683415];
const Scherzingen = [47.945373016970876, 7.734736892618286];
const Norsingen = [47.939119683004215, 7.725992760684716];
const Offnadingen = [47.931622939492925, 7.714945542891172];
const BadKrozingen_n = [47.92284819719537, 7.701957700831335];
const BadKrozingen_c = [47.91975709288431, 7.697587915664152];
const BadKrozingen_s = [47.91501839669259, 7.690972546338085];
const Tunsel_n = [47.90969969706784, 7.683560771840925];
const Tunsel_c = [47.902648786711076, 7.673772149462883];
const Tunsel_s = [47.89708688084274, 7.665535407728605];
const Eschbach = [47.89025883341706, 7.65477283476649];
const Heitersheim = [47.87968941955337, 7.6460143744346345];
const Buggingen_n = [47.861338049545225, 7.63205656398774];
const Buggingen_c = [47.85541301677453, 7.628172310505799];
const Buggingen_s = [47.847735936328, 7.623377684999392];
const MüllheimimMf = [47.809966086186336, 7.599360087248498];
const Auggen_n = [47.79969546644287, 7.593046678802658];
const Auggen_c = [47.78985278399055, 7.586839653096645];
const Auggen_s = [47.78119647095153, 7.581101762957251];
const Schliengen = [47.761550750832505, 7.568904235550829];
const Bamlach = [47.715956885255636, 7.563844176961454];
const Welmlingen = [47.6974515928957, 7.567783288948033];
const Wintersweiler = [47.6744899016943, 7.572153074115218];
const Eimeldingen = [47.62788558852744, 7.5955235417320175];
const HaltingenEM = [47.61907611691736, 7.605146360452549];
const WeilamRhein = [47.59346363128451, 7.608008174740753];
const Basel_Bad_Bf = [47.56749462336529, 7.608098898397099];
const Basel_ICE = [47.54717812533671, 7.5890015703746885];
 
// ブリュッセル⇒ケルン⇔チューリッヒのルート
const ICE_Cologne = L.polyline
([Cologne_2,Hohenzollernbrucke_w,Hohenzollernbrucke_c,Hohenzollernbrucke_e,MesseDeutzBf,LanxessArena_e,
Trimbornstraße,AirportBusinesspark,Steinstr,PorzRhein,Wahn,Spich,Troisdorf,
SiegburgBonn,NeustadtWied_w,NeustadtWied_c,NeustadtWied_e,Fernthal,Epgert,
Montabaur,Görgeshausen,Elz,
LimburgSüd,SpotterplatzWest,SpotterplatzEast,
Frankfurt_airport,Zeppelinheim,Walldorf,Mörfelden,...CP_Mörfelden_Un,GerauerStr,...CP_GroßGerau_Un,
Dornberg,Dornheim,Wolfskehlen,Gernsheim,GroßRohrheim,
BiblisBf,...CP_Biblis_Un,Bobstadt,BürstadtBf,Lampertheim,Lampertheim_s,ViernheimerStr,Blumenau_n,Blumenau_c,Blumenau_s,WaldStr,
Mannheim,Mannheim_e,MannheimARENA,Hockenheim,NeudorfNord,Neudorf,Friedrichstal_n,Friedrichstal_c,Friedrichstal_s,
Blankenloch_n,Blankenloch_c,Blankenloch_s,Büchig,Reitschulschlag,Hagsfeld_n,Hagsfeld_c,Hagsfeld_s,
Karlsruhe,Rastatt_n,Rastatt_c,Rastatt_s,BBHaueneberstein,
BadenBaden,Sinzheim_n,Sinzheim_c,Sinzheim_s,BBRebland,Eisental,Sasbachried,
Renchen,Urloffen,Appenweier_n,Appenweier_c,Appenweier_s,
Offenburg,...CP_Grabenallee_Un,Friesenheim,Lahr,Orschweier,Ringsheim_n,Ringsheim_c,Ringsheim_s,
Herbolzheim,Kenzingen,Köndringen,Teningen_w,Teningen_c,Teningen_e,Emmendingen,Denzlingen,
Gundelfingen_n,Gundelfingen_c,Gundelfingen_s,WiltalStr,FRZähringen,FRSonnenstraße,
Freiburg,FRStGeorgen,Scherzingen,Norsingen,Offnadingen,BadKrozingen_n,BadKrozingen_c,BadKrozingen_s,
Tunsel_n,Tunsel_c,Tunsel_s,Eschbach,Heitersheim,Buggingen_n,Buggingen_c,Buggingen_s,MüllheimimMf,Auggen_n,Auggen_c,Auggen_s,
Schliengen,Bamlach,Welmlingen,Wintersweiler,Eimeldingen,HaltingenEM,WeilamRhein,
Basel_Bad_Bf,Basel_ICE], { color: '#000000' }).addTo(map);


// Cologne → Basel へ滑らかに移動する関数
//イベント登録を無制限制限
map.on('popupopen', function (e) {
  const BaselBtn = document.getElementById('CologneToBaselCard');
  if (BaselBtn) {
    const newBtn = BaselBtn.cloneNode(true);
    BaselBtn.parentNode.replaceChild(newBtn, BaselBtn);

    newBtn.addEventListener('click', () => {
      if (!animationRunning) {
        CologneToBasel();
      }
    });
  }
  })

function CologneToBasel() {
  if (animationRunning) return; // ← すでに動いていたら何もしない
  animationRunning = true;

  markerCologne.closePopup(); // ← 移動前にCologne（始発）のポップアップを閉じる

  // 🚄 アイコン付きマーカーを表示（初期位置）
  const trainIcon = L.icon({
    iconUrl: "image/icon/train_test.png",// アイコン画像のURL
    iconRetinaUrl:"image/icon/train_test@2x.png",
    iconSize: [40, 40],
    iconAnchor: [25, 25],
    className: "icon-train"
  });

  const trainMarker = L.marker(Cologne_2, { icon: trainIcon }).addTo(map);

  const fullPath = interpolatePolyline(ICE_Cologne , 50);// ← 数字が少ないほどスピードアップ

  const BaselIndex = fullPath.findIndex(p => 
    Math.abs(p[0] - Basel_ICE[0]) < 0.0001 && 
    Math.abs(p[1] - Basel_ICE[1]) < 0.0001
  );

  const pathToBasel = fullPath.slice(0, BaselIndex + 1);
  // ✅ ここに animatePath を定義
  const totalFrames = pathToBasel.length;
  let frame = 0;

  function animate() {
   
   const index = frame;

    if (index < pathToBasel.length) {
      trainMarker.setLatLng(pathToBasel[index]); // ← マーカーを移動
      map.panTo(pathToBasel[index], { animate: true, duration: 0.03 });
      frame++;
      setTimeout(animate, 20); // ← 速度調整（数字が少ないほどスピードアップ）50座標 × 30ms = 約1.5秒
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

// Basel　→　Cologneへ滑らかに戻る関数
//イベント登録を無制限制限
map.on('popupopen', function (e) {
  const BaselToCologneBtn = document.getElementById('BaselSBBToCologneCard');
  if (BaselToCologneBtn) {
    const newBtn = BaselToCologneBtn.cloneNode(true);
    BaselToCologneBtn.parentNode.replaceChild(newBtn, BaselToCologneBtn);

    newBtn.addEventListener('click', () => {
      if (!animationRunning) {
        BaselToCologne();
      }
    });
  }
  })

function BaselToCologne() {
  if (animationRunning) return; // ← すでに動いていたら何もしない
  animationRunning = true;

  markerBaselSBB.closePopup(); // ← 移動前にBaselのポップアップを閉じる

  // 🚄 アイコン付きマーカーを表示（初期位置）
  const trainIcon = L.icon({
    iconUrl: "image/icon/train_test.png",// アイコン画像のURL
    iconRetinaUrl:"image/icon/train_test@2x.png",
    iconSize: [40, 40],
    iconAnchor: [25, 25],
    className: "icon-train"
  });

  const trainMarker = L.marker(Basel_ICE, { icon: trainIcon }).addTo(map);

  const fullPath = [...interpolatePolyline(ICE_Cologne, 50)].reverse();// ← 数字が少ないほどスピードアップ

  const BaselToCologneIndex = fullPath.findIndex(p => 
    Math.abs(p[0] - Cologne_2[0]) < 0.0001 && 
    Math.abs(p[1] - Cologne_2[1]) < 0.0001
  );

  const pathToBaselToCologne = fullPath.slice(0, BaselToCologneIndex + 1);
  
// 最初にジャンプを防ぐ
  map.panTo(pathToBaselToCologne[0], { animate: false });


  let frame = 0;

  function animate() {
   
   const index = frame;

    if (index < pathToBaselToCologne.length) {
      trainMarker.setLatLng(pathToBaselToCologne[index]); // ← マーカーを移動
      map.panTo(pathToBaselToCologne[index], { animate: true, duration: 0.03 });
      frame++;
      setTimeout(animate, 20); // ← 速度調整（数字が少ないほどスピードアップ）
    } else {
      setTimeout(() => {
        markerCologne.openPopup();
        map.removeLayer(trainMarker); // アイコンを削除
        animationRunning = false;
      }, 100);

    }
  }
  animate();
}



