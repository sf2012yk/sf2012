// Vienna ViennaAirport 
const Vienna_AR = [48.18500525586605, 16.377671700808875];
const WienHBFOst  = [48.18447752141296, 16.380768933089186];
const AlfredAdlerSt  = [48.183293592898266, 16.383374542248042];
const AlsenalStrasse  = [48.18230561020823, 16.385559515861527];
const WienFreight_w = [48.18069154779957, 16.38787090055705];
const WienFreight_c  = [48.17796314610027, 16.39138482999864];
const WienFreight_e  = [48.17550537748478, 16.39516425635473];
const Sudosttragente = [48.1727909513815, 16.399004144278504];
const WienGrillgasse = [48.16731619348783, 16.406891089320585];
const Grillgasse_s = [48.16421569519002, 16.41067347531608];
const Tchibo_AS = [48.156795546997984, 16.420404450387768];
const WienZentralfriedhof_w = [48.153822668428965, 16.42264057555369];
const Zentralfriedhof_s1 = [48.15174755078352, 16.424370282239686];
const Zentralfriedhof_s2 = [48.14894347809215, 16.424870986807495];
const Zentralverschiebebahnhof_AR1 = [48.14509686569521, 16.427103458631482];
const Zentralverschiebebahnhof_AR2 = [48.14298553129856, 16.42794553995456];
const Zentralverschiebebahnhof_AR3 = [48.14099330550311, 16.430191090149428];
const Zentralverschiebebahnhof_AR4 = [48.13959699860536, 16.435141507624483];
const Zentralverschiebebahnhof_AR5 = [48.13855825782798, 16.44134228856491];
const Kledering_ne = [48.1390590805977, 16.453414351452448];
const Kaiserebersdorf_w = [48.1414980822994, 16.45846868179688];
const Kaiserebersdorf = [48.14621291407726, 16.465224761240687];
const Kaiserebersdorf_CN1 = [48.14782616180353, 16.46782950584327];
const Kaiserebersdorf_CN2 = [48.148259561876934, 16.470229315177907];
const Kaiserebersdorf_CN3 = [48.1478502396807, 16.471817158971035];
const Kaiserebersdorf_CN4 = [48.14633331128836, 16.474397405165206];
const Kaiserebersdorf_CN5 = [48.145719303711545, 16.478096359476673];
const Schwechat = [48.14420231236203, 16.480622474565767];
const Schwechat_e1 = [48.14212564508691, 16.48726935309652];
const Schwechat_e2 = [48.139163232453775, 16.49307808407621];
const Mannswörth_w = [48.137925158583776, 16.50166970532408];
const Mannswörth_c = [48.13664283634661, 16.507080880539814];
const Mannswörth_e = [48.135272042662876, 16.513088389425715];
const HainburgerStr_w = [48.13322685883449, 16.53265776828487];
const HainburgerStr_c = [48.13240797141659, 16.53633867884327];
const HainburgerStr_e = [48.13173358373739, 16.538251308839293];
const LufthansaAviationWien = [48.12903594428278, 16.54485529577196];
const UPSCenterWien = [48.125986483232474, 16.553295798666433];
const FlughafenWien = [48.120983101278604, 16.563218852576007];

// ルートポリライン
const VIEairportLine = L.polyline
([Vienna_AR,WienHBFOst,AlfredAdlerSt,AlsenalStrasse,WienFreight_w,WienFreight_c,WienFreight_e,
Sudosttragente,WienGrillgasse,Grillgasse_s,Tchibo_AS,WienZentralfriedhof_w,Zentralfriedhof_s1,Zentralfriedhof_s2,
Zentralverschiebebahnhof_AR1,Zentralverschiebebahnhof_AR2,Zentralverschiebebahnhof_AR3,Zentralverschiebebahnhof_AR4,Zentralverschiebebahnhof_AR5,
Kledering_ne,Kaiserebersdorf_w,Kaiserebersdorf,Kaiserebersdorf_CN1,Kaiserebersdorf_CN2,Kaiserebersdorf_CN3,Kaiserebersdorf_CN4,Kaiserebersdorf_CN5,
Schwechat,Schwechat_e1,Schwechat_e2,Mannswörth_w,Mannswörth_c,Mannswörth_e,HainburgerStr_w,HainburgerStr_c,HainburgerStr_e,
LufthansaAviationWien,UPSCenterWien,FlughafenWien], { color: '#000000' }).addTo(map);

// Vienna → FlughafenWien へ滑らかに移動する関数
//イベント登録を無制限制限
map.on('popupopen', function (e) {
  const FlughafenWienBtn = document.getElementById('ViennaToFlughafenWienCard');
  if (FlughafenWienBtn) {
    const newBtn = FlughafenWienBtn.cloneNode(true);
    FlughafenWienBtn.parentNode.replaceChild(newBtn, FlughafenWienBtn);

    newBtn.addEventListener('click', () => {
      if (!animationRunning) {
        goToFlughafenWien();
      }
    });
  }
  })

function goToFlughafenWien() {
  if (animationRunning) return; // ← すでに動いていたら何もしない
  animationRunning = true;

  markerViennaCentral.closePopup(); // ← 移動前にVienna（始発）のポップアップを閉じる

  // 🚄 アイコン付きマーカーを表示（初期位置）
  const trainIcon = L.icon({
    iconUrl: "image/icon/train_test.png",// アイコン画像のURL
    iconRetinaUrl:"image/icon/train_test@2x.png",
    iconSize: [40, 40],
    iconAnchor: [25, 25],
    className: "icon-train"
  });

  const trainMarker = L.marker(Vienna_AR, { icon: trainIcon }).addTo(map);

  const fullPath = interpolatePolyline(VIEairportLine , 50);// ← 数字が少ないほどスピードアップ

  const FlughafenWienIndex = fullPath.findIndex(p => 
    Math.abs(p[0] - FlughafenWien[0]) < 0.0001 && 
    Math.abs(p[1] - FlughafenWien[1]) < 0.0001
  );

  const pathToFlughafenWien = fullPath.slice(0, FlughafenWienIndex + 1);
  // ✅ ここに animatePath を定義
  const totalFrames = pathToFlughafenWien.length;
  let frame = 0;

  function animate() {
   
   const index = frame;

    if (index < pathToFlughafenWien.length) {
      trainMarker.setLatLng(pathToFlughafenWien[index]); // ← マーカーを移動
      map.panTo(pathToFlughafenWien[index], { animate: true, duration: 0.03 });
      frame++;
      setTimeout(animate, 5); // ← 速度調整（数字が少ないほどスピードアップ）50座標 × 30ms = 約1.5秒
    } else {
      setTimeout(() => {
        markerFlughafenWien.openPopup();
        map.removeLayer(trainMarker); // アイコンを削除
        animationRunning = false;
      }, 100);

    }
  }
  animate();
}


// FlughafenWien　→　Viennaへ滑らかに戻る関数
//イベント登録を無制限制限
map.on('popupopen', function (e) {
  const FlughafenWienToViennaBtn = document.getElementById('FlughafenWienToViennaCard');
  if (FlughafenWienToViennaBtn) {
    const newBtn = FlughafenWienToViennaBtn.cloneNode(true);
    FlughafenWienToViennaBtn.parentNode.replaceChild(newBtn, FlughafenWienToViennaBtn);

    newBtn.addEventListener('click', () => {
      if (!animationRunning) {
        FlughafenWienToVienna();
      }
    });
  }
  })

function FlughafenWienToVienna() {
  if (animationRunning) return; // ← すでに動いていたら何もしない
  animationRunning = true;

  markerFlughafenWien.closePopup(); // ← 移動前にFlughafenWienのポップアップを閉じる

  // 🚄 アイコン付きマーカーを表示（初期位置）
  const trainIcon = L.icon({
    iconUrl: "image/icon/train_test.png",// アイコン画像のURL
    iconRetinaUrl:"image/icon/train_test@2x.png",
    iconSize: [40, 40],
    iconAnchor: [25, 25],
    className: "icon-train"
  });

  const trainMarker = L.marker(FlughafenWien, { icon: trainIcon }).addTo(map);

  const fullPath = [...interpolatePolyline(VIEairportLine, 50)].reverse();// ← 数字が少ないほどスピードアップ

  const FlughafenWienToViennaIndex = fullPath.findIndex(p => 
    Math.abs(p[0] - Vienna_AR[0]) < 0.0001 && 
    Math.abs(p[1] - Vienna_AR[1]) < 0.0001
  );

  const pathToFlughafenWienToVienna = fullPath.slice(0, FlughafenWienToViennaIndex + 1);
  
// 最初にジャンプを防ぐ
  map.panTo(pathToFlughafenWienToVienna[0], { animate: false });


  let frame = 0;

  function animate() {
   
   const index = frame;

    if (index < pathToFlughafenWienToVienna.length) {
      trainMarker.setLatLng(pathToFlughafenWienToVienna[index]); // ← マーカーを移動
      map.panTo(pathToFlughafenWienToVienna[index], { animate: true, duration: 0.25 });
      frame++;
      setTimeout(animate, 5); // ← 速度調整（数字が少ないほどスピードアップ）
    } else {
      setTimeout(() => {
        markerViennaCentral.openPopup();
        map.removeLayer(trainMarker); // アイコンを削除
        animationRunning = false;
      }, 100);

    }
  }
  animate();
}


