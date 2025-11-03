// London Geneva

// 飛行機　ロンドン→ジュネーブ
const HeathrowTerminal5_GVA = [51.47259800120853, -0.4859364875464297];
const HeathrowGate8 = [51.47264475189647, -0.48487434812377256];

const LHR_Terminal5B = [51.47488345689283, -0.4848314327612855];
const LHR_Terminal5C = [51.47491072882984, -0.47626200287508463];
const Pt_LHRGVA_1 = [51.47501518037146, -0.4698109257433893];
const Pt_LHRGVA_1_2 = [51.47516887802986, -0.4670750726023086];
const Pt_LHRGVA_2 = [51.47530252774585, -0.45311685687734904];
const LHR_Terminal2 = [51.475071109335516, -0.44404814517596];
const Pt_LHRGVA_3 = [51.47502268576295, -0.43820176239236347];
const Pt_LHRGVA_3_1 = [51.47459498870308, -0.4369036137309423];
const Pt_LHRGVA_3_2 = [51.47450811508424, -0.4361096798782365];
const Pt_LHRGVA_4 = [51.47161663411831, -0.4360651695656971];
const Pt_LHRGVA_5 = [51.467503417330605, -0.4361202118942671];
const Pt_LHRGVA_6 = [51.4651239870801, -0.4360772965311435];
const LHRGVATakeoff_1 = [51.464942799747526, -0.4358590165129393];
const LHRGVATakeoff_2 = [51.46501842044002, -0.4371942286473566];
const LHRGVATakeoff_3 = [51.46498061010944, -0.44010741875881243];
const LHRGVATakeoff_4 = [51.464980571803665, -0.4444847679550656];
const LHRGVATakeoff_5 = [51.46498057180369, -0.451694580618794];
const LHRGVATakeoff_6 = [51.464927099867886, -0.46036350229405176];
const LHRGVATakeoff_7 = [51.46482012774393, -0.4782162857794616];

//カーブ北西//
const OldWindsor_s = [51.46466787142372,-0.5729422297303274];
const Cn_OldWindsor = [
(51.46466787142372 + 51.45550553498458) / 2 + 0.0005, //西//
(-0.5729422297303274 + -0.6212456062846191) / 2 - 0.0110 //北//
];
const OldWindsor_n = [51.45550553498458,-0.6212456062846191];
const CP_OldWindsor = adaptiveBezierCurve(OldWindsor_s,Cn_OldWindsor,OldWindsor_n,1);
const CP_OldWindsor_Un = resamplePath(CP_OldWindsor, 4);
const Pt_LHRGVA_7 = [51.44071372057288, -0.6381259126813491];
const Pt_LHRGVA_8 = [51.41674590548284, -0.6481323834345265];
const Pt_LHRGVA_9 = [51.37462798265963, -0.6748327704096032];
const Pt_LHRGVA_10 = [51.332944531142, -0.701203759472222];
const Pt_LHRGVA_11FN = [51.29122314861186, -0.7266654040901109];
const Pt_LHRGVA_12 = [51.24946382250747, -0.752490786706029];
//カーブ南東//
const Pt_LHRGVA_13compton = [51.209375620502115,-0.7777705625587096];
const Cn_compton = [
(51.209375620502115 + 51.137299849920296) / 2 + 0.0029, //東//
(-0.7777705625587096 + -0.7719475302123641) / 2 - 0.0034 //南//
];
const Pt_LHRGVA_14chart = [51.137299849920296,-0.7719475302123641];
const CP_compton = adaptiveBezierCurve(Pt_LHRGVA_13compton,Cn_compton,Pt_LHRGVA_14chart,1);
const CP_compton_Un = resamplePath(CP_compton,4);
const Pt_LHRGVA_15 = [51.08478887061725, -0.703796420722451];
const Pt_LHRGVA_16 = [51.03037651140102, -0.635777456096975];
const Pt_LHRGVA_17 = [50.97590019550458, -0.5641211136134467];
const Pt_LHRGVA_18 = [50.92135989698132, -0.49573841058707724];
const Pt_LHRGVA_19 = [50.86675559079982, -0.4244458054541164];
const Pt_LHRGVA_20Worthing = [50.81277674610801, -0.3542444129339907];
const Pt_LHRGVA_21 = [50.758045155382796, -0.28440675887231054];
const Pt_LHRGVA_22 = [50.70347984830669, -0.21566031783352482];
const Pt_LHRGVA_23 = [50.648159059506604, -0.1458226641387394];
const Pt_LHRGVA_24 = [50.59323487406548, -0.07598500993317903];
const Pt_LHRGVA_25 = [50.538708885814906, -0.005783618261946925];
const Pt_LHRGVA_26 = [50.484351232854635, 0.06587272477552053];
const Pt_LHRGVA_27 = [50.42969927368177, 0.13461916577833669];
const Pt_LHRGVA_28 = [50.37405624175878, 0.20482055721936043];
const Pt_LHRGVA_29 = [50.3192768810399, 0.27429447327581796];
const Pt_LHRGVA_30 = [50.263969282109166, 0.34267717692806643];
const Pt_LHRGVA_31 = [50.20789900886433, 0.4139697823559817];
const Pt_LHRGVA_32 = [50.15316116481127, 0.4834436982110065];
const Pt_LHRGVA_33 = [50.09766059994963, 0.5543725658711022];
const Pt_LHRGVA_34 = [50.04209566809435, 0.6245739581466314];
const Pt_LHRGVA_35 = [49.98623247378332, 0.6933203991350592];
const Pt_LHRGVA_36 = [49.93124089579782, 0.7638855290273348];
const Pt_LHRGVA_37SotteVille = [49.88087442489895, 0.8264484281138935];
const Pt_LHRGVA_38 = [49.81989587052555, 0.9028333618956209];
const Pt_LHRGVA_39 = [49.76400958408076, 0.9723072778729447];
const Pt_LHRGVA_40 = [49.708294021187925, 1.0425086702204143];
const Pt_LHRGVA_41 = [49.65227898923481, 1.1127100616398555];
const Pt_LHRGVA_42 = [49.59596365263108, 1.183275192057294];
const Pt_LHRGVA_43 = [49.54076338641606, 1.2523853706696622];
const Pt_LHRGVA_44 = [49.48479179085865, 1.324041713735906];
const Pt_LHRGVA_45 = [49.42757325989793, 1.3927881547243335];
const Pt_LHRGVA_46 = [49.37194587083289, 1.4637170217729376];
const Pt_LHRGVA_47 = [49.315781229291424, 1.5328272004356633];
const Pt_LHRGVA_48 = [49.25907769363183, 1.6033923304646251];
const Pt_LHRGVA_49 = [49.20207127179347, 1.6721387709422784];
const Pt_LHRGVA_50 = [49.146902527215474, 1.7419764254355994];
const Pt_LHRGVA_51 = [49.09000490283756, 1.8114503421611001];
const Pt_LHRGVA_52 = [49.0337574192839, 1.881287995913437];
const Pt_LHRGVA_53 = [48.975775047459265, 1.9525806014492626];
const Pt_LHRGVA_54Poissy = [48.91963733769725, 2.02096330438211];
const Pt_LHRGVA_55 = [48.862957884386695, 2.0922559103783525];
const Pt_LHRGVA_56Versailles = [48.806693288525565, 2.1617298262189895];
const Pt_LHRGVA_57 = [48.74940617397594, 2.2304762674807894];
const Pt_LHRGVA_58 = [48.69229377831357, 2.3021326101729436];
const Pt_LHRGVA_59 = [48.63535690091169, 2.3712427886126544];
const Pt_LHRGVA_60 = [48.57811504556611, 2.4403529674480398];
const Pt_LHRGVA_61 = [48.52080829962267, 2.510190621603242];
const Pt_LHRGVA_62 = [48.46391903219558, 2.581119489054711];
const Pt_LHRGVA_63 = [48.40624153755838, 2.6509571434832853];
const Pt_LHRGVA_64 = [48.349223771510125, 2.7215222728360096];
const Pt_LHRGVA_65 = [48.29141611338766, 2.7899049760710066];
const Pt_LHRGVA_66 = [48.23451206694152, 2.860833843738295];
const Pt_LHRGVA_67 = [48.176331904042236, 2.9317627111897657];
const Pt_LHRGVA_68 = [48.1190569588239, 2.998690462677244];
const Pt_LHRGVA_69courtenay = [48.05736595173743, 3.055167090846199];
const Pt_LHRGVA_70 = [47.991416922241264, 3.097360921262435];
const Pt_LHRGVA_71 = [47.91923022727959, 3.1444574959217255];
const Pt_LHRGVA_72 = [47.85150432475109, 3.1881553483809975];
const Pt_LHRGVA_73 = [47.78564728586293, 3.233309796328127];
const Pt_LHRGVA_74 = [47.71546013757252, 3.2770076489410465];
const Pt_LHRGVA_75 = [47.654663718296696, 3.316335716012269];
const Pt_LHRGVA_76 = [47.589212155258274, 3.359062505264304];
const Pt_LHRGVA_77 = [47.5135136071662, 3.4076156745760016];
const Pt_LHRGVA_78 = [47.441974855605714, 3.4522845906746373];
const Pt_LHRGVA_79Beuvron = [47.37329807639379, 3.4969535061875];
const Pt_LHRGVA_80asnan = [47.31165511737299, 3.5592295763672754];
const Pt_LHRGVA_81 = [47.27439778244438, 3.6510684132544835];
const Pt_LHRGVA_82 = [47.23781350725297, 3.7422206044946806];
const Pt_LHRGVA_83 = [47.20229969346138, 3.832951637158344];
const Pt_LHRGVA_84 = [47.16554890887742, 3.9246188123087182];
const Pt_LHRGVA_85 = [47.129940571389746, 4.014912696569085];
const Pt_LHRGVA_86 = [47.092905968062716, 4.1086398088166725];
const Pt_LHRGVA_87 = [47.056898135592284, 4.199620337997497];
const Pt_LHRGVA_88 = [47.02145110284544, 4.2892275774290765];
const Pt_LHRGVA_89curgy = [46.9848094726925, 4.379349800132551];
const Pt_LHRGVA_90 = [46.948963008190745, 4.470330328997631];
const Pt_LHRGVA_91 = [46.91297525692996, 4.561825843409337];
const Pt_LHRGVA_92 = [46.876141922112694, 4.653149696372788];
const Pt_LHRGVA_93 = [46.84022267511873, 4.744473548789625];
const Pt_LHRGVA_94Chalon = [46.8033393831067, 4.835282417180853];
const Pt_LHRGVA_95 = [46.76701870196143, 4.925919623879379];
const Pt_LHRGVA_96 = [46.73090883670046, 5.016900154129664];
const Pt_LHRGVA_97 = [46.69442155842245, 5.108738990816559];
const Pt_LHRGVA_98 = [46.65802743114229, 5.199204536219623];
const Pt_LHRGVA_99 = [46.633868874280004, 5.302201323872955];
const Pt_LHRGVA_100 = [46.627974921431836, 5.414124541755039];
const Pt_LHRGVA_101 = [46.61429847899505, 5.50682168646407];
const Pt_LHRGVA_102 = [46.60203390383285, 5.609131865104641];
const Pt_LHRGVA_103Mesnois = [46.58599142230637, 5.711442048457639];
const Pt_LHRGVA_104 = [46.569799947056204, 5.809556907133628];
const Pt_LHRGVA_105 = [46.552305428023004, 5.912744704900249];
const Pt_LHRGVA_106Morbier = [46.53431907178132, 6.022293394310017];
const Pt_LHRGVA_107 = [46.51190756059029, 6.101808382538338];
const Pt_LHRGVA_108 = [46.477130498765185, 6.1918473766477];
const Pt_LHRGVA_109Gland = [46.421440940624265, 6.270000033510978];

//カーブ北西//
const Pt_109Gland_n = [46.421440940624265,6.270000033510978];
const Cn_Pt_109Gland = [
(46.421440940624265 + 46.40037325875873) / 2 - 0.0009, //西//
(6.270000033510978 + 6.284934537563595) / 2 + 0.0004 //北//
];
const Pt_109Gland_s = [46.40037325875873,6.284934537563595];
const CP_Pt_109Gland = adaptiveBezierCurve(Pt_109Gland_n,Cn_Pt_109Gland,Pt_109Gland_s,1);
const CP_Pt_109Gland_Un = resamplePath(CP_Pt_109Gland, 2);
const Pt_LHRGVA_110 = [46.34451128677366, 6.225902010630163];
const Pt_LHRGVA_111 = [46.2945477713738, 6.172979056237711];
const LHRGVALanding_1 = [46.25039060796373, 6.127166835274288];
const LHRGVALanding_2 = [46.24560454284918, 6.1201239730502115];
const LHRGVALanding_3 = [46.24248809823544, 6.115489139766703];
const LHRGVALanding_4 = [46.24041041797187, 6.112699642414134];
const LHRGVALanding_5 = [46.239549641676625, 6.111455097455839];
const LHRGVALanding_6 = [46.23898567747151, 6.110468044557881];
const Pt_LHRGVA_112 = [46.23782804843915, 6.110897197935753];
const Pt_LHRGVA_113 = [46.23643292472595, 6.110811367247275];
const Pt_LHRGVA_114 = [46.23376131226407, 6.1089230921152184];
const Pt_LHRGVA_115 = [46.232250390699306, 6.1068595877774285];
const Pt_LHRGVA_116 = [46.23172966974555, 6.107012693472534];
const GenevaAirport_LHR = [46.23127955104175, 6.107484769365773];

const LHRtoGVA = L.polyline([
HeathrowTerminal5_GVA,HeathrowGate8,LHR_Terminal5B,LHR_Terminal5C,Pt_LHRGVA_1,Pt_LHRGVA_1_2,Pt_LHRGVA_2,
LHR_Terminal2,Pt_LHRGVA_3,Pt_LHRGVA_3_1,Pt_LHRGVA_3_2,Pt_LHRGVA_4,Pt_LHRGVA_5,Pt_LHRGVA_6,
LHRGVATakeoff_1,LHRGVATakeoff_2,LHRGVATakeoff_3,LHRGVATakeoff_4,LHRGVATakeoff_5,LHRGVATakeoff_6,LHRGVATakeoff_7,
...CP_OldWindsor_Un,Pt_LHRGVA_7,Pt_LHRGVA_8,Pt_LHRGVA_9,Pt_LHRGVA_10,Pt_LHRGVA_11FN,Pt_LHRGVA_12,
...CP_compton_Un,Pt_LHRGVA_15,Pt_LHRGVA_16,Pt_LHRGVA_17,Pt_LHRGVA_18,Pt_LHRGVA_19,Pt_LHRGVA_20Worthing,
Pt_LHRGVA_21,Pt_LHRGVA_22,Pt_LHRGVA_23,Pt_LHRGVA_24,Pt_LHRGVA_25,Pt_LHRGVA_26,Pt_LHRGVA_27,Pt_LHRGVA_28,Pt_LHRGVA_29,
Pt_LHRGVA_30,Pt_LHRGVA_31,Pt_LHRGVA_32,Pt_LHRGVA_33,Pt_LHRGVA_34,Pt_LHRGVA_35,Pt_LHRGVA_36,Pt_LHRGVA_37SotteVille,Pt_LHRGVA_38,Pt_LHRGVA_39,
Pt_LHRGVA_40,Pt_LHRGVA_41,Pt_LHRGVA_42,Pt_LHRGVA_43,Pt_LHRGVA_44,Pt_LHRGVA_45,Pt_LHRGVA_46,Pt_LHRGVA_47,Pt_LHRGVA_48,Pt_LHRGVA_49,
Pt_LHRGVA_50,Pt_LHRGVA_51,Pt_LHRGVA_52,Pt_LHRGVA_53,Pt_LHRGVA_54Poissy,Pt_LHRGVA_55,Pt_LHRGVA_56Versailles,Pt_LHRGVA_57,Pt_LHRGVA_58,Pt_LHRGVA_59,
Pt_LHRGVA_60,Pt_LHRGVA_61,Pt_LHRGVA_62,Pt_LHRGVA_63,Pt_LHRGVA_64,Pt_LHRGVA_65,Pt_LHRGVA_66,Pt_LHRGVA_67,Pt_LHRGVA_68,Pt_LHRGVA_69courtenay,
Pt_LHRGVA_70,Pt_LHRGVA_71,Pt_LHRGVA_72,Pt_LHRGVA_73,Pt_LHRGVA_74,Pt_LHRGVA_75,Pt_LHRGVA_76,Pt_LHRGVA_77,Pt_LHRGVA_78,Pt_LHRGVA_79Beuvron,
Pt_LHRGVA_80asnan,Pt_LHRGVA_81,Pt_LHRGVA_82,Pt_LHRGVA_83,Pt_LHRGVA_84,Pt_LHRGVA_85,Pt_LHRGVA_86,Pt_LHRGVA_87,Pt_LHRGVA_88,Pt_LHRGVA_89curgy,
Pt_LHRGVA_90,Pt_LHRGVA_91,Pt_LHRGVA_92,Pt_LHRGVA_93,Pt_LHRGVA_94Chalon,Pt_LHRGVA_95,Pt_LHRGVA_96,Pt_LHRGVA_97,Pt_LHRGVA_98,Pt_LHRGVA_99,
Pt_LHRGVA_100,Pt_LHRGVA_101,Pt_LHRGVA_102,Pt_LHRGVA_103Mesnois,Pt_LHRGVA_104,Pt_LHRGVA_105,Pt_LHRGVA_106Morbier,Pt_LHRGVA_107,Pt_LHRGVA_108,
...CP_Pt_109Gland_Un,Pt_LHRGVA_110,Pt_LHRGVA_111,LHRGVALanding_1,LHRGVALanding_2,LHRGVALanding_3,LHRGVALanding_4,LHRGVALanding_5,LHRGVALanding_6,
Pt_LHRGVA_112,Pt_LHRGVA_113,Pt_LHRGVA_114,Pt_LHRGVA_115,Pt_LHRGVA_116,
GenevaAirport_LHR], { color: '#be742aff' }).addTo(map);

// Heathrow → Geneva へ滑らかに移動する関数
//イベント登録を無制限制限
map.on('popupopen', function (e) {
  const GenevaBtn = document.getElementById('HeathrowToGenevaCard');
  if (GenevaBtn) {
    const newBtn = GenevaBtn.cloneNode(true);
    GenevaBtn.parentNode.replaceChild(newBtn, GenevaBtn);

    newBtn.addEventListener('click', () => {
      if (!animationRunning) {
        goToGeneva();
      }
    });
  }
  })

function goToGeneva() {
  if (animationRunning) return; // ← すでに動いていたら何もしない
  animationRunning = true;

  markerHeathrowTerminal5.closePopup(); // ← 移動前にHeathrow（始発）のポップアップを閉じる

  // 🚄 アイコン付きマーカーを表示（初期位置）
  const trainIcon = L.icon({
    iconUrl: "image/icon/train_test.png",// アイコン画像のURL
    iconRetinaUrl:"image/icon/train_test@2x.png",
    iconSize: [40, 40],
    iconAnchor: [25, 25],
    className: "icon-train"
  });

  const trainMarker = L.marker(HeathrowTerminal5_GVA, { icon: trainIcon }).addTo(map);

  const fullPath = interpolatePolyline(LHRtoGVA , 100);// ← 数字が少ないほどスピードアップ

  const GenevaIndex = fullPath.findIndex(p => 
    Math.abs(p[0] - GenevaAirport_LHR[0]) < 0.0001 && 
    Math.abs(p[1] - GenevaAirport_LHR[1]) < 0.0001
  );

  const pathToGenevaAR = fullPath.slice(0, GenevaIndex + 1);
  // ✅ ここに animatePath を定義
  const totalFrames = pathToGenevaAR.length;
  let frame = 0;

  function animate() {
   
   const index = frame;

    if (index < pathToGenevaAR.length) {
      trainMarker.setLatLng(pathToGenevaAR[index]); // ← マーカーを移動
      map.panTo(pathToGenevaAR[index], { animate: true, duration: 0.03 });
      frame++;
      setTimeout(animate, 20); // ← 速度調整（数字が少ないほどスピードアップ）50座標 × 30ms = 約1.5秒
    } else {
      setTimeout(() => {
        markerGenevaAirport.openPopup();
        map.removeLayer(trainMarker); // アイコンを削除
        animationRunning = false;
      }, 500);

    }
  }
  animate();
}



// Geneva　→　Londonへ滑らかに戻る関数
//イベント登録を無制限制限
map.on('popupopen', function (e) {
  const GenevaToLondonBtn = document.getElementById('GenevaToHeathrowCard');
  if (GenevaToLondonBtn) {
    const newBtn = GenevaToLondonBtn.cloneNode(true);
    GenevaToLondonBtn.parentNode.replaceChild(newBtn, GenevaToLondonBtn);

    newBtn.addEventListener('click', () => {
      if (!animationRunning) {
        GenevaToLondon();
      }
    });
  }
  })

function GenevaToLondon() {
  if (animationRunning) return; // ← すでに動いていたら何もしない
  animationRunning = true;

  markerGenevaAirport.closePopup(); // ← 移動前にGenevaのポップアップを閉じる

  // 🚄 アイコン付きマーカーを表示（初期位置）
  const trainIcon = L.icon({
    iconUrl: "image/icon/train_test.png",// アイコン画像のURL
    iconRetinaUrl:"image/icon/train_test@2x.png",
    iconSize: [40, 40],
    iconAnchor: [25, 25],
    className: "icon-train"
  });

  const trainMarker = L.marker(GenevaAirport_LHR, { icon: trainIcon }).addTo(map);

  const fullPath = [...interpolatePolyline(LHRtoGVA, 100)].reverse();// ← 数字が少ないほどスピードアップ

  const GenevaToLondonIndex = fullPath.findIndex(p => 
    Math.abs(p[0] - HeathrowTerminal5_GVA[0]) < 0.0001 && 
    Math.abs(p[1] - HeathrowTerminal5_GVA[1]) < 0.0001
  );

  const pathToGenevaToLondon = fullPath.slice(0, GenevaToLondonIndex + 1);
  
// 最初にジャンプを防ぐ
  map.panTo(pathToGenevaToLondon[0], { animate: false });


  let frame = 0;

  function animate() {
   
   const index = frame;

    if (index < pathToGenevaToLondon.length) {
      trainMarker.setLatLng(pathToGenevaToLondon[index]); // ← マーカーを移動
      map.panTo(pathToGenevaToLondon[index], { animate: true, duration: 0.03 });
      frame++;
      setTimeout(animate, 20); // ← 速度調整（数字が少ないほどスピードアップ）
    } else {
      setTimeout(() => {
        markerHeathrowTerminal5.openPopup();
        map.removeLayer(trainMarker); // アイコンを削除
        animationRunning = false;
      }, 500);

    }
  }
  animate();
}


