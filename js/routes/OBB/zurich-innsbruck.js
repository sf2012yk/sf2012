// Zurich Vienna module

// 鉄道ルート チューリッヒ⇔インスブルック駅　//
const Zurich_OBB = [47.37828613669217, 8.539567674375348]; //Zurich中央駅
const TN_North = [47.37569528657373, 8.518599199038311];
const TN_South = [47.30029760678326, 8.559522398936306];
const Binz = [47.36237975737446, 8.51929519508454];
const Saalsporthalle = [47.357979238727374, 8.520153501992596];
const Albisstrasse = [47.33170378117955, 8.52981873295796];
const SwHW3 = [47.302931968446096, 8.547086200648463];
const Thalwil = [47.29591289732868, 8.5643930473244];
const Oberrieden = [47.279619988326125, 8.578396999312735];
const Horgen = [47.26166657905401, 8.596689491441246];
const AuZH = [47.24691345243255, 8.643610415815361];
const Wadenswil = [47.229289837497525, 8.675360558579877];
const Richterswil = [47.20843136548262, 8.707605712781232];
const BachSZ = [47.200880222549195, 8.72723419244509];
const Freienbach = [47.207310474287816, 8.7561745176691];
const PfaffikonSZ = [47.203127144463934, 8.777948149623336];
const Altendorf = [47.19405748420332, 8.822807153326567];
const Lachen = [47.18992234993609, 8.852781324299443];
const SiebnenWangen = [47.182825026350024, 8.900608254260284];
const SchubelbachButtikon = [47.176505386933115, 8.938796865205118];
const Reichenburg = [47.172794796629915, 8.982325599805144];
const Bilten = [47.15219535539714, 9.03023891815624];
const Ziegelbrucke = [47.13654335066016, 9.060237634855602];
const Weesen = [47.12984962091985, 9.09465407442288];
const Kerenzerbergtunnel = [47.125334646666325, 9.118303521559648];
const Muhlehorn = [47.11792042765983, 9.172968195096944];
const Murg = [47.11331836724431, 9.214911077976424];
const Unterterzen = [47.11399636367143, 9.254948692079822];
const Mols = [47.11295077738543, 9.277031719879114];
const Walenstadt = [47.11976520512367, 9.312936528346524];
const Flums = [47.0967579786594, 9.348106356667145];
const Mels = [47.053797850514215, 9.418128951059927];
const Sargans = [47.04505749813919, 9.44488300598082];　//Sargans駅
const SargansJC = [47.039632556279315, 9.454969417050854];
const SW_E43_1 = [47.04052087366417, 9.463775981070622];
const SW_E43_2 = [47.04532965292103, 9.468065522012573];
const SW_E43_3 = [47.053864745651715, 9.470389970867732];
const SW_E43_4 = [47.06007909908947, 9.468586669399697];
const Azmoos = [47.07569874950019, 9.485747219642244];
const Azmoos_2 = [47.091844118595006, 9.502085859149728];
const Vilnaswang = [47.105500872529646, 9.500975599796085];
const Sevelen = [47.12544368870456, 9.493970944044177];
const BuchsSG = [47.16842489710598, 9.478900207320331]; //BuchsSG駅
const BuchsJC = [47.16597407286274, 9.47969414115833];
const RheinRiver = [47.16457355111569, 9.490659011628589];
const SchaanVaduz = [47.16854299728384, 9.508135828204443]; //Vaduz駅
const ForstHilti = [47.181247718333196, 9.520677257009291];
const Nendeln = [47.2002404120529, 9.541690068822797];
const Tisis = [47.227274339724076, 9.575711095984312];
const Gisingen = [47.25566893183523, 9.59815479776622];
const Altenstadt = [47.25627175252766, 9.61537517179102];
const FeldkirchJC = [47.25054711854539, 9.616674153657069];
const Feldkirch = [47.24076932481191, 9.60393501578127]; //Feldkirch駅
const Bludenz  = [47.15458969150714, 9.814561984591867];
const St_Anton_Am_Arlberg  = [47.12754732591151, 10.267339534438817];
const Landeck_Zams  = [47.148206117471496, 10.57896111256332];
const Imst_Pitztal  = [47.218970044867255, 10.761662461804978];
const Ötztal  = [47.23862468355587, 10.859197362339224];
const Innsbruck  = [47.26253050680029, 11.40060390583582];

// チューOBB
const OBB_Zurich = L.polyline
([Zurich_OBB,TN_North,TN_South,Thalwil,Oberrieden,Horgen,AuZH,Wadenswil,Richterswil,BachSZ,Freienbach,PfaffikonSZ,
  Altendorf,Lachen,SiebnenWangen,SchubelbachButtikon,Reichenburg,Bilten,Ziegelbrucke,
  Weesen,Kerenzerbergtunnel,Muhlehorn,Murg,Unterterzen,Mols,Walenstadt,Flums,Mels,
  Sargans,SargansJC,SW_E43_1,SW_E43_2,SW_E43_3,SW_E43_4,Azmoos,Azmoos_2,Vilnaswang,Sevelen,
  BuchsSG,BuchsJC,RheinRiver,SchaanVaduz,ForstHilti,Nendeln,Tisis,Gisingen,Altenstadt,FeldkirchJC,
  Feldkirch,Bludenz,St_Anton_Am_Arlberg,Landeck_Zams,Imst_Pitztal,Ötztal,
  Innsbruck], { color: '#000000' }).addTo(map);


// Zurich → Innsbruck へ滑らかに移動する関数
//イベント登録を無制限制限
map.on('popupopen', function (e) {
  const InnsbruckBtn = document.getElementById('ZurichToInnsbruckCard');
  if (InnsbruckBtn) {
    const newBtn = InnsbruckBtn.cloneNode(true);
    InnsbruckBtn.parentNode.replaceChild(newBtn, InnsbruckBtn);

    newBtn.addEventListener('click', () => {
      if (!animationRunning) {
        goToInnsbruck();
      }
    });
  }
  })

function goToInnsbruck() {
  if (animationRunning) return; // ← すでに動いていたら何もしない
  animationRunning = true;

  markerZurich.closePopup(); // ← 移動前にZurich（始発）のポップアップを閉じる

  // 🚄 アイコン付きマーカーを表示（初期位置）
  const trainIcon = L.icon({
    iconUrl: "image/icon/train_test.png",// アイコン画像のURL
    iconRetinaUrl:"image/icon/train_test@2x.png",
    iconSize: [40, 40],
    iconAnchor: [25, 25],
    className: "icon-train"
  });

  const trainMarker = L.marker(Zurich_OBB, { icon: trainIcon }).addTo(map);

  const fullPath = interpolatePolyline(OBB_Zurich , 50);// ← 数字が少ないほどスピードアップ

  const InnsbruckIndex = fullPath.findIndex(p => 
    Math.abs(p[0] - Innsbruck[0]) < 0.0001 && 
    Math.abs(p[1] - Innsbruck[1]) < 0.0001
  );

  const pathToInnsbruck = fullPath.slice(0, InnsbruckIndex + 1);
  // ✅ ここに animatePath を定義
  const totalFrames = pathToInnsbruck.length;
  let frame = 0;

  function animate() {
   
   const index = frame;

    if (index < pathToInnsbruck.length) {
      trainMarker.setLatLng(pathToInnsbruck[index]); // ← マーカーを移動
      map.panTo(pathToInnsbruck[index], { animate: true, duration: 0.03 });
      frame++;
      setTimeout(animate, 20); // ← 速度調整（数字が少ないほどスピードアップ）50座標 × 30ms = 約1.5秒
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

// Innsbruck　→　Zurichへ滑らかに戻る関数
//イベント登録を無制限制限
map.on('popupopen', function (e) {
  const InnsbruckToZurichBtn = document.getElementById('InnsbruckToZurichCard');
  if (InnsbruckToZurichBtn) {
    const newBtn = InnsbruckToZurichBtn.cloneNode(true);
    InnsbruckToZurichBtn.parentNode.replaceChild(newBtn, InnsbruckToZurichBtn);

    newBtn.addEventListener('click', () => {
      if (!animationRunning) {
        InnsbruckToZurich();
      }
    });
  }
  })

function InnsbruckToZurich() {
  if (animationRunning) return; // ← すでに動いていたら何もしない
  animationRunning = true;

  markerInnsbruck.closePopup(); // ← 移動前にInnsbruckのポップアップを閉じる

  // 🚄 アイコン付きマーカーを表示（初期位置）
  const trainIcon = L.icon({
    iconUrl: "image/icon/train_test.png",// アイコン画像のURL
    iconRetinaUrl:"image/icon/train_test@2x.png",
    iconSize: [40, 40],
    iconAnchor: [25, 25],
    className: "icon-train"
  });

  const trainMarker = L.marker(Innsbruck, { icon: trainIcon }).addTo(map);

  const fullPath = [...interpolatePolyline(OBB_Zurich, 50)].reverse();// ← 数字が少ないほどスピードアップ

  const InnsbruckToZurichIndex = fullPath.findIndex(p => 
    Math.abs(p[0] - Zurich_OBB[0]) < 0.0001 && 
    Math.abs(p[1] - Zurich_OBB[1]) < 0.0001
  );

  const pathToInnsbruckToZurich = fullPath.slice(0, InnsbruckToZurichIndex + 1);
  
// 最初にジャンプを防ぐ
  map.panTo(pathToInnsbruckToZurich[0], { animate: false });


  let frame = 0;

  function animate() {
   
   const index = frame;

    if (index < pathToInnsbruckToZurich.length) {
      trainMarker.setLatLng(pathToInnsbruckToZurich[index]); // ← マーカーを移動
      map.panTo(pathToInnsbruckToZurich[index], { animate: true, duration: 0.03 });
      frame++;
      setTimeout(animate, 20); // ← 速度調整（数字が少ないほどスピードアップ）
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



