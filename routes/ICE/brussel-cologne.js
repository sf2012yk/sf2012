// Brussel Cologne Zurich

// 鉄道ルート　ブリュッセル⇔ケルン　//
const Brussel_2 = [50.83545522369974, 4.334752425478581];
const B_Central = [50.84549586426277, 4.35711347262208];
const B_Noord = [50.86028942969334, 4.3614429298782325];
const Schaerbeek = [50.878337198553844, 4.379134780499558];
const Leuven = [50.88083119046987, 4.716356005145286];
const N25 = [50.860044571679246, 4.730178134727387];
const Bierbeek = [50.840375, 4.751436];
const N234 = [50.82570905124591, 4.816497233227142];
const Boutersem = [50.819239, 4.841977];
const Hoegaarden = [50.803892, 4.876099];
const N221 = [50.787693731728545, 4.909086712873427];
const N29 = [50.780709334675855, 4.920791524129244];
const N279 = [50.741341225271725, 4.963208588201229];
const N64 = [50.71674277092863, 5.0322132074035935];
const N80 = [50.712051282469844, 5.0815658790600615];
const N615 = [50.69961678997249, 5.186503742756371];
const N752 = [50.70630875885069, 5.244050143033211];
const N743 = [50.70641747112901, 5.256495592835282];
const N784 = [50.70549340870643, 5.272460100870206];
const N69 = [50.70405292218615, 5.292244074786565];
const Remicourt = [50.691238, 5.396270];
const Bierset_Awans = [50.65831437116272, 5.4571006452205335];
const Ans = [50.66108672040177, 5.509406514729902];
const N682 = [50.6554278836956, 5.529662557207959];
const r33 = [50.638876430179195, 5.5560925323255335];
const Liège_Guillemins = [50.62382366427076, 5.567168022242202];
const N90 = [50.61697622230551, 5.580672009187205];
const r38 = [50.61068570594747, 5.60710786122592];
const Chenee = [50.60752651464158, 5.61762212051362];
const N621_1 = [50.60333208813857, 5.634917004239716];
const A_Bouny = [50.60135730988846, 5.681909305914682];
const N673 = [50.60201103876406, 5.694783909330967];
const Ayeneux = [50.60604216634505, 5.714353306137585];
const José = [50.63133734711984, 5.7663117187154995];
const N621_2 = [50.633820932056224, 5.779194705085451];
const N627 = [50.63463752794256, 5.820994250389949];
const E42_2 = [50.63703279400601, 5.836529604924084];
const N67 = [50.649234881025684, 6.001328756577799];
const Lontzen = [50.680460, 6.046998];
const Raeren = [50.692098, 6.051719];
const Hergenrath = [50.70900447998746, 6.0432954779033965];
const Preuswald = [50.736227, 6.047630];
const Eberburgweg = [50.750544, 6.072442];
const Aachen = [50.767679838672564, 6.090875981954147];
const Aachen_2 = [50.7652600510318, 6.106217508396433];
const Düren = [50.80949472751832, 6.482108657931249];
const Merzenich = [50.84002437666045, 6.518213153003684];
const Buir = [50.86240682882715, 6.5747379279830325];
const Sindorf = [50.903653500656546, 6.681092062068364];
const Horrem = [50.91661513430171, 6.714394369262917];
const Horremer_Brücke = [50.9267600322162, 6.74263266564766];
const Frechen_Königsdorf = [50.936473603337795, 6.7776779388694175];
const Lövenich = [50.94295045906885, 6.834308819204719];
const Ehrenfeld = [50.95171081899701, 6.918251232458536];
const Koln_1 = [50.95434137906158, 6.9481390714563345];
const Hansaring = [50.94910999208279, 6.952344775204721];
const Cologne_1 = [50.94325481600945, 6.9585388293166295];
 
// ブリュッセル⇒ケルンのルート
const ICE_Brussel = L.polyline
([Brussel_2,B_Central,B_Noord,Schaerbeek,Leuven,N25,Bierbeek,N234,Boutersem,Hoegaarden,N221,N29,N279,N64,N80,
  N615,N752,N743,N784,N69,Remicourt,Bierset_Awans,Ans,N682,r33,
  Liège_Guillemins,N90,r38,Chenee,N621_1,A_Bouny,N673,Ayeneux,José,N621_2,N627,E42_2,N67,Lontzen,Raeren,Hergenrath,Preuswald,Eberburgweg,
  Aachen,Aachen_2,Düren,Merzenich,Buir,Sindorf,Horrem,Horremer_Brücke,Frechen_Königsdorf,Lövenich,Ehrenfeld,Koln_1,Hansaring,
  Cologne_1], { color: '#000000' }).addTo(map);

// Brussel → Cologne へ滑らかに移動する関数
//イベント登録を無制限制限
map.on('popupopen', function (e) {
  const CologneBtn = document.getElementById('BrusselToCologneCard');
  if (CologneBtn) {
    const newBtn = CologneBtn.cloneNode(true);
    CologneBtn.parentNode.replaceChild(newBtn, CologneBtn);

    newBtn.addEventListener('click', () => {
      if (!animationRunning) {
        goToCologne();
      }
    });
  }
  })

function goToCologne() {
  if (animationRunning) return; // ← すでに動いていたら何もしない
  animationRunning = true;

  markerBrussel.closePopup(); // ← 移動前にBrussel（始発）のポップアップを閉じる

  // 🚄 アイコン付きマーカーを表示（初期位置）
  const trainIcon = L.icon({
    iconUrl: "image/icon/train_test.png",// アイコン画像のURL
    iconRetinaUrl:"image/icon/train_test@2x.png",
    iconSize: [40, 40],
    iconAnchor: [25, 25],
    className: "icon-train"
  });

  const trainMarker = L.marker(Brussel_2, { icon: trainIcon }).addTo(map);

  const fullPath = interpolatePolyline(ICE_Brussel , 50);// ← 数字が少ないほどスピードアップ

  const CologneIndex = fullPath.findIndex(p => 
    Math.abs(p[0] - Cologne_1[0]) < 0.0001 && 
    Math.abs(p[1] - Cologne_1[1]) < 0.0001
  );

  const pathToCologne = fullPath.slice(0, CologneIndex + 1);
  // ✅ ここに animatePath を定義
  const totalFrames = pathToCologne.length;
  let frame = 0;

  function animate() {
   
   const index = frame;

    if (index < pathToCologne.length) {
      trainMarker.setLatLng(pathToCologne[index]); // ← マーカーを移動
      map.panTo(pathToCologne[index], { animate: true, duration: 0.25 });
      frame++;
      setTimeout(animate, 5); // ← 速度調整（数字が少ないほどスピードアップ）50座標 × 30ms = 約1.5秒
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


// Cologne　→　Brusselへ滑らかに戻る関数
//イベント登録を無制限制限
map.on('popupopen', function (e) {
  const CologneToBrusselBtn = document.getElementById('CologneToBrusselCard');
  if (CologneToBrusselBtn) {
    const newBtn = CologneToBrusselBtn.cloneNode(true);
    CologneToBrusselBtn.parentNode.replaceChild(newBtn, CologneToBrusselBtn);

    newBtn.addEventListener('click', () => {
      if (!animationRunning) {
        CologneToBrussel();
      }
    });
  }
  })

function CologneToBrussel() {
  if (animationRunning) return; // ← すでに動いていたら何もしない
  animationRunning = true;

  markerCologne.closePopup(); // ← 移動前にCologneのポップアップを閉じる

  // 🚄 アイコン付きマーカーを表示（初期位置）
  const trainIcon = L.icon({
    iconUrl: "image/icon/train_test.png",// アイコン画像のURL
    iconRetinaUrl:"image/icon/train_test@2x.png",
    iconSize: [40, 40],
    iconAnchor: [25, 25],
    className: "icon-train"
  });

  const trainMarker = L.marker(Cologne_1, { icon: trainIcon }).addTo(map);

  const fullPath = [...interpolatePolyline(ICE_Brussel, 50)].reverse();// ← 数字が少ないほどスピードアップ

  const CologneToBrusselIndex = fullPath.findIndex(p => 
    Math.abs(p[0] - Brussel_2[0]) < 0.0001 && 
    Math.abs(p[1] - Brussel_2[1]) < 0.0001
  );

  const pathToCologneToBrussel = fullPath.slice(0, CologneToBrusselIndex + 1);
  
// 最初にジャンプを防ぐ
  map.panTo(pathToCologneToBrussel[0], { animate: false });


  let frame = 0;

  function animate() {
   
   const index = frame;

    if (index < pathToCologneToBrussel.length) {
      trainMarker.setLatLng(pathToCologneToBrussel[index]); // ← マーカーを移動
      map.panTo(pathToCologneToBrussel[index], { animate: true, duration: 0.25 });
      frame++;
      setTimeout(animate, 5); // ← 速度調整（数字が少ないほどスピードアップ）
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





