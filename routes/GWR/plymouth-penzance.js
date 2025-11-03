// Plymouth Penzance module

// 鉄道ルート　プリマス⇔ペンザンス //
const Plymouth_2 = [50.3776674014801, -4.144099241952264];  //Plymouth_2
const Devonport = [50.37851984405473, -4.170057764491775]; 
const PL_corner1 = [50.37990189104244, -4.174499502507731];
const Dockyard = [50.382296431448445, -4.176130285607127]; 
const Keyham_PLSL = [50.38988339225587, -4.179577724699969]; 
const StBudeauxFerryRoad = [50.401213277372825, -4.186467102900524]; 
const RoyalAlbert_1 = [50.40720752820105, -4.200003763487621]; 
const RoyalAlbert_2 = [50.40793718681703, -4.206224083850025]; 
const Saltash = [50.40746785396117, -4.209143145365782]; //Saltash
const SL_corner1 = [50.402844208507865, -4.211430228356966];
const SL_corner2 = [50.399903602248656, -4.213318503507313]; 
const SL_corner3 = [50.39800236899987, -4.219519770771463];  
const ForderViaduct = [50.39758722726707, -4.232973083949007]; 
const LynherViaduct = [50.39784511827974, -4.282414893718981]; 
const StGermans_UK = [50.3943277831964, -4.3087383974598135]; //StGermans
const SG_corner1 = [50.396542545740594, -4.3130269646347825]; 
const UK_A374_SG = [50.404133056841346, -4.346879455884719]; 
const Menheniot = [50.42625130284492, -4.408899599539195]; 
const UK_A38_MH = [50.43530868634382, -4.439451643230423]; 
const LiskeardViaduct = [50.44562681080632, -4.466081939316732]; 
const Liskeard = [50.44708505186819, -4.470252327027815]; //Liskeard駅
const MoorswaterViaduct = [50.448981934402696, -4.484460200360608];  
const Dobwalls = [50.45322053922219, -4.50947247060312]; 
const UK_A390_1 = [50.45598957784741, -4.5278687548643015]; 
const UK_B3360 = [50.45575733225612, -4.539155490436373]; 
const EastLarginViaduct = [50.45267630598957, -4.57661971444325]; 
const DerrycombeViaduct = [50.45672211457137, -4.599443491176444]; 
const ClinnickViaduct = [50.45708665020351, -4.6132485489900965]; 
const UK_A38_BD1 = [50.455469987394636, -4.634237391285276]; 
const UK_A38_BD3 = [50.453174779197475, -4.6486569469232695];  
const Bodmin_Parkway = [50.44588365703201, -4.663009914430932];
const ResprynBridge = [50.44020886902461, -4.676966887048944];
const UK_A390_2 = [50.410465422509596, -4.665200807843653];
const Lostwithiel = [50.40707378804621, -4.666132617652777];
const Lantyan_1 = [50.38421777699173, -4.673775998177817];
const Lantyan_2 = [50.381044447153194, -4.678944991937327];
const Par = [50.355938223586115, -4.704371605794146];
const UK_A3082_2 = [50.34908210285597, -4.706385351076583];
const UK_A3082_3 = [50.34608825503674, -4.7072673556014095];
const UK_A390_3 = [50.338743089330016, -4.766295072925835];
const St_Austell = [50.339464493637315, -4.789088938402467];
const GoverViaduct = [50.34272449874398, -4.814257795171967];
const UK_A3058 = [50.34058630117433, -4.82045446480194];
const BurngullowJC = [50.33655543564553, -4.837781127756199];
const GrampoundRoad = [50.31671922508845, -4.9296986766036355];
const UK_B3275 = [50.294215929901654, -4.969346366395041];
const TregarneViaduct = [50.28746056192947, -4.988013261150232];
const Probus_TN1 = [50.28703856588003, -5.007737143969057];
const Probus_TN2 = [50.28532877020231, -5.014708378219901];
const UK_A39_TR = [50.27944553323539, -5.041037865034181];
const UK_B3284 = [50.26638433349113, -5.056260047064174];
const Truro = [50.264304395306766, -5.064012719642247];
const UK_A390_4 = [50.26141218755855, -5.07071844309142];
const TruroJC = [50.258920957476484, -5.0734729995948555];
const PenwithersViaduct = [50.25544019798333, -5.088813942118741];
const Threemilestone = [50.2567965937446, -5.120405255284604];
const Bridgeway = [50.26179622847311, -5.141916649410548];
const BlackwaterViaduct = [50.26380313682741, -5.167124516165729];
const UK_A30_RR1 = [50.265426304765974, -5.182285619389079];
const ApexBridge = [50.2608633460966, -5.189716582263218];
const UK_A3047_1 = [50.25231047926221, -5.198284026325148];
const UK_A3047_2 = [50.247721850571416, -5.2171530181465355];
const Redruth = [50.23323429163531, -5.2259747054609225];
const BarncooseBridge = [50.226458306280385, -5.250560904551007];
const HigherBrea = [50.217139716113685, -5.277315463355195];
const Camborne = [50.210512243611966, -5.2972712098165];
const UK_B3303 = [50.20795381044892, -5.304765646755173];
const Coswinsawsin = [50.1971417580943, -5.346721625596063];
const Angarrack = [50.19329176530936, -5.3854413851896075];
const UK_A30 = [50.19067871815104, -5.398055046660557];
const Hayle = [50.18571654324807, -5.419637515445524];
const UK_A30_2 = [50.174437301345954, -5.433482515958281];
const St_Erth = [50.17054724201994, -5.444487797322478];
const UK_A394 = [50.135485695124565, -5.476583499657541];
const MarazionRoad = [50.12936141580475, -5.4899623582070545];
const LongBeach = [50.128335572051476, -5.502312215198186];
const UK_A30_3 = [50.12644136454834, -5.523705294419571];
const Penzance = [50.12204180137364, -5.532390786439714];

const grw_PLPZ = L.polyline([
Plymouth_2,Devonport,PL_corner1,Dockyard,Keyham_PLSL,StBudeauxFerryRoad,
RoyalAlbert_1,RoyalAlbert_2,Saltash,SL_corner1,SL_corner2,SL_corner3,ForderViaduct,LynherViaduct,
StGermans_UK,SG_corner1,UK_A374_SG,Menheniot,UK_A38_MH,LiskeardViaduct,
Liskeard,MoorswaterViaduct,Dobwalls,UK_A390_1,UK_B3360,EastLarginViaduct,
DerrycombeViaduct,UK_A38_BD1,UK_A38_BD3,
Bodmin_Parkway,ResprynBridge,UK_A390_2,Lostwithiel,Lantyan_1,Lantyan_2,Par,UK_A3082_2,UK_A3082_3,
St_Austell,GoverViaduct,UK_A3058,BurngullowJC,GrampoundRoad,UK_B3275,
TregarneViaduct,Probus_TN1,Probus_TN2,UK_A39_TR,UK_B3284,
Truro,UK_A390_4,TruroJC,PenwithersViaduct,Threemilestone,Bridgeway,
BlackwaterViaduct,UK_A30_RR1,ApexBridge,UK_A3047_1,UK_A3047_2,
Redruth,BarncooseBridge,HigherBrea,Camborne,UK_B3303,Coswinsawsin,Angarrack,UK_A30,
Hayle,UK_A30_2,St_Erth,UK_A394,MarazionRoad,LongBeach,UK_A30_3,
Penzance], { color: '#000000' }).addTo(map);

// プリマス→ペンザンス　
//イベント登録を無制限制限
map.on('popupopen', function (e) {
  const PenzanceBtn = document.getElementById('goToPenzanceFromPlymouth');
  if (PenzanceBtn) {
    const newBtn = PenzanceBtn.cloneNode(true);
    PenzanceBtn.parentNode.replaceChild(newBtn, PenzanceBtn);

    newBtn.addEventListener('click', () => {
      if (!animationRunning) {
        goToPenzance();
      }
    });
  }
  })

function goToPenzance() {
  if (animationRunning) return; // ← すでに動いていたら何もしない
  animationRunning = true;

  markerPlymouth.closePopup(); // ← 移動前にPlymouth駅のポップアップを閉じる

  // 🚄 アイコン付きマーカーを表示（初期位置）
  const trainIcon = L.icon({
    iconUrl: "image/icon/train_test.png",// アイコン画像のURL
    iconRetinaUrl:"image/icon/train_test@2x.png",
    iconSize: [40, 40],
    iconAnchor: [25, 25],
    className: "icon-train"
  });

  const trainMarker = L.marker(Plymouth_2, { icon: trainIcon }).addTo(map);

  const fullPath = interpolatePolyline(grw_PLPZ , 50);// ← 数字が少ないほどスピードアップ

  const PenzanceIndex = fullPath.findIndex(p => 
    Math.abs(p[0] - Penzance[0]) < 0.0001 && 
    Math.abs(p[1] - Penzance[1]) < 0.0001
  );

  const pathToPenzance = fullPath.slice(0, PenzanceIndex + 1);
  const totalFrames = pathToPenzance.length;
  let frame = 0;

  function animate() {
   
   const index = frame;

    if (index < pathToPenzance.length) {
      trainMarker.setLatLng(pathToPenzance[index]); // ← マーカーを移動
      map.panTo(pathToPenzance[index], { animate: true, duration: 0.25 });
      frame++;
      setTimeout(animate, 5); // ← 速度調整（数字が少ないほどスピードアップ）
    } else {
      setTimeout(() => {
        markerPenzance.openPopup();
        map.removeLayer(trainMarker); // アイコンを削除
        animationRunning = false;
      }, 100);

    }
  }
  animate();
}