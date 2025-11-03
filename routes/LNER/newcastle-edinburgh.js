// London Edinburgh module

// 鉄道ルート　ニューカッスル⇔エディンバラ　//
const Newcastle_LNER2 = [54.96814759160355, -1.6176357599706133];
//※カーブです
const StNicholasSt = [54.968883694987156, -1.6109060606943977];
const DeenSt = [
(54.968883694987156 + 54.97027400154161) / 2 - 0.0004,
(-1.6109060606943977 + -1.6083719569400838) / 2 + 0.0004
];
const TyneBridge = [54.97027400154161, -1.6083719569400838];
const CP_LN1 = adaptiveBezierCurve(StNicholasSt, DeenSt,TyneBridge,1); 
const CP_LN1_Un = resamplePath(CP_LN1, 5);
const UK_A186_NC = [54.97157834477355, -1.6067296225098109];
const Manors = [54.97274222134454, -1.6055226284137962];
const UK_A193_NC = [54.97446316082513, -1.5995172144214014];
const HeatonRd = [54.98028992153217, -1.5805092318112224];
const UK_A188_NC = [54.98203129841552, -1.5750925188267024];
const HeatonDepot = [54.990256343838205, -1.5641073642711312];
const UK_A1058_NC = [54.99598376694772, -1.5604658765292128];
const UK_A191_NC = [55.01213452569093, -1.5590396272520468];
const StationRd_NC = [55.02058685541269, -1.5664252604719568];
const UK_B1505_NC = [55.02827856772659, -1.5790980712589773];
const UK_A1056_NC = [55.03922787379688, -1.58649120725615];
const UK_A189_NC = [55.04537588016285, -1.590255307564636];
const Dudley = [55.05710691424906, -1.5974404170153587];
const UK_A19_CM = [55.06699427991503, -1.5983666801482692];
//※カーブです
const Cramlington = [55.08774071567473, -1.5986901372356894];
const CM_corner1 = [
(55.08774071567473 + 55.0945278602178) / 2 + 0.0015,
(-1.5986901372356894 + -1.6115254392126626) / 2 + 0.0016
];
const NelsonDr = [55.0945278602178, -1.6115254392126626];
const CP_Cramlington1 = adaptiveBezierCurve(Cramlington,CM_corner1,NelsonDr,1); 
const CP_Cramlington1_Un = resamplePath(CP_Cramlington1, 5);
const Stannington = [55.1279797747085, -1.6609313918135626];
const HepscotFarm = [55.1382931339038, -1.6678085402716962];
const Clifton_n = [55.14384585021936, -1.6719360965474546];
const Loansdean_n = [55.15349411073992, -1.681355484357061];

const Morpeth = [55.16243301762506, -1.6838500076816818];
const Pegswood = [55.1782100376528, -1.644271113269458];
const Ulgham = [55.22803185836566, -1.6141602295177802];

const Widdrington = [55.24135122323797, -1.6168307549390166];
const WestChevington_c = [55.26542843229968, -1.6515273645324264];

const Acklington = [55.30710656626293, -1.6517365617132929];
const EastfieldHall_MP_c = [55.35268857855903, -1.634877583494589];

const Alnmouth = [55.39266923862451, -1.6365429606089055];
const LittleMill_c = [55.455399958395226, -1.644399728002555];
const Stamford_MP_c = [55.466297550960434, -1.6547135578430854];
const Brunton = [55.51582429425546, -1.6781522621456844];

const Chathill = [55.53660837226039, -1.706484984888501];
const Newham_c = [55.54729317344884, -1.7278163814656236];
const NewhamHall_c = [55.552039038085134, -1.7343912789776341];

const Berwick_upon_Tweed = [55.774000911462174, -2.0109968009665393];
const Reston = [55.84959712613118, -2.191859300863759];
const Dunbar = [55.99835102274254, -2.513190049448867];
const EastLinton = [55.9854500777894, -2.6579973611927192];
const Drem = [56.00505816378277, -2.7862616631322625];
const Longniddry = [55.97634350065689, -2.8883991403239677];
const Prestonpans = [55.952884297308515, -2.9748990289402766];
const Wallyford = [55.94036627052745, -3.0152750129701524];
const Musselburgh = [55.933442981217354, -3.0726495605927067];
const Hitachi_Depot = [55.95317848257007, -3.126492202874932];
const Edinburgh_lner = [55.95185702547384, -3.1885119395760397];


// ロンドン・ヨークのルート
const LNER_NcEd = L.polyline([
Newcastle_LNER2,...CP_LN1_Un,UK_A186_NC,Manors,UK_A193_NC,HeatonRd,UK_A188_NC,HeatonDepot,
UK_A1058_NC,UK_A191_NC,StationRd_NC,UK_B1505_NC,UK_A1056_NC,UK_A189_NC,Dudley,UK_A19_CM,
...CP_Cramlington1_Un,Stannington,HepscotFarm,Clifton_n,Loansdean_n,
Morpeth,Pegswood,Ulgham,
Widdrington,WestChevington_c,
Acklington,EastfieldHall_MP_c,
Alnmouth,LittleMill_c,Stamford_MP_c,Brunton,
Chathill,Newham_c,NewhamHall_c,
Berwick_upon_Tweed,Reston,Dunbar,EastLinton,Drem,
Longniddry,Prestonpans,Wallyford,Musselburgh,Hitachi_Depot,
Edinburgh_lner], { color: '#000000' }).addTo(map);

// 始発駅（Newcastle） → 終着駅（Edinburgh）へ滑らかに移動する関数
//イベント登録を無制限制限
map.on('popupopen', function (e) {
  const EdinburghBtn = document.getElementById('NewcastleToEdinburghCard');
  if (EdinburghBtn) {
    const newBtn = EdinburghBtn.cloneNode(true);
    EdinburghBtn.parentNode.replaceChild(newBtn, EdinburghBtn);

    newBtn.addEventListener('click', () => {
      if (!animationRunning) {
        goToEdinburgh();
      }
    });
  }
  })

function goToEdinburgh() {
  if (animationRunning) return; // ← すでに動いていたら何もしない
  animationRunning = true;

  markerNewcastle.closePopup(); // ← 移動前にNewcastle（始発）のポップアップを閉じる

  // 🚄 アイコン付きマーカーを表示（初期位置）
  const trainIcon = L.icon({
    iconUrl: "image/icon/train_test.png",// アイコン画像のURL
    iconRetinaUrl:"image/icon/train_test@2x.png",
    iconSize: [40, 40],
    iconAnchor: [25, 25],
    className: "icon-train"
  });

  const trainMarker = L.marker(Newcastle_LNER2, { icon: trainIcon }).addTo(map);

  const fullPath = interpolatePolyline(LNER_NcEd , 50);// ← 数字が少ないほどスピードアップ

  const EdinburghIndex = fullPath.findIndex(p => 
    Math.abs(p[0] - Edinburgh_lner[0]) < 0.0001 && 
    Math.abs(p[1] - Edinburgh_lner[1]) < 0.0001
  );

  const pathToEdinburgh = fullPath.slice(0, EdinburghIndex + 1);
  // ✅ ここに animatePath を定義
  const totalFrames = pathToEdinburgh.length;
  let frame = 0;

  function animate() {
   
   const index = frame;

    if (index < pathToEdinburgh.length) {
      trainMarker.setLatLng(pathToEdinburgh[index]); // ← マーカーを移動
      map.panTo(pathToEdinburgh[index], { animate: true, duration: 0.25 });
      frame++;
      setTimeout(animate, 5); // ← 速度調整（数字が少ないほどスピードアップ）50座標 × 30ms = 約1.5秒
    } else {
      setTimeout(() => {
        markerEdinburgh.openPopup();
        map.removeLayer(trainMarker); // アイコンを削除
        animationRunning = false;
      }, 100);

    }
  }
  animate();
}

// Edinburgh　→　Newcastleへ滑らかに戻る関数
//イベント登録を無制限制限
map.on('popupopen', function (e) {
  const EdinburghToNewcastleBtn = document.getElementById('EdinburghToNewcastleCard');
  if (EdinburghToNewcastleBtn) {
    const newBtn = EdinburghToNewcastleBtn.cloneNode(true);
    EdinburghToNewcastleBtn.parentNode.replaceChild(newBtn, EdinburghToNewcastleBtn);

    newBtn.addEventListener('click', () => {
      if (!animationRunning) {
        EdinburghToNewcastle();
      }
    });
  }
  })

function EdinburghToNewcastle() {
  if (animationRunning) return; // ← すでに動いていたら何もしない
  animationRunning = true;

  markerEdinburgh.closePopup(); // ← 移動前にEdinburghのポップアップを閉じる

  // 🚄 アイコン付きマーカーを表示（初期位置）
  const trainIcon = L.icon({
    iconUrl: "image/icon/train_test.png",// アイコン画像のURL
    iconRetinaUrl:"image/icon/train_test@2x.png",
    iconSize: [40, 40],
    iconAnchor: [25, 25],
    className: "icon-train"
  });

  const trainMarker = L.marker(Edinburgh_lner, { icon: trainIcon }).addTo(map);

  const fullPath = [...interpolatePolyline(LNER_NcEd, 50)].reverse();// ← 数字が少ないほどスピードアップ

  const EdinburghToNewcastleIndex = fullPath.findIndex(p => 
    Math.abs(p[0] - Newcastle_LNER2[0]) < 0.0001 && 
    Math.abs(p[1] - Newcastle_LNER2[1]) < 0.0001
  );

  const pathToEdinburghToNewcastle = fullPath.slice(0, EdinburghToNewcastleIndex + 1);
  
// 最初にジャンプを防ぐ
  map.panTo(pathToEdinburghToNewcastle[0], { animate: false });


  let frame = 0;

  function animate() {
   
   const index = frame;

    if (index < pathToEdinburghToNewcastle.length) {
      trainMarker.setLatLng(pathToEdinburghToNewcastle[index]); // ← マーカーを移動
      map.panTo(pathToEdinburghToNewcastle[index], { animate: true, duration: 0.25 });
      frame++;
      setTimeout(animate, 5); // ← 速度調整（数字が少ないほどスピードアップ）
    } else {
      setTimeout(() => {
        markerNewcastle.openPopup();
        map.removeLayer(trainMarker); // アイコンを削除
        animationRunning = false;
      }, 100);

    }
  }
  animate();
}

