// London Windsor module

// 鉄道ルート　ウィンザー城　//
const Paddington_WD = [51.516894337841045, -0.17712164609673156];
const BishopsRd_WD = [51.518401914496124, -0.1797598504051242];
const WestBourneBd_WD = [51.51871334985519, -0.18374146010219508];
const RoyalOak_WD = [51.51913163568928, -0.1886898594810405];
const WestbournePark_WD = [51.52104823863323, -0.2008535300059221];
//カーブ北西//
const LadbrokeGrove_e_WD = [51.52461358171907,-0.21421088953644724];
const Cn_LadbrokeGrove_WD = [
(51.52461358171907 + 51.52593131289449) / 2 + 0.0009, //西//
(-0.21421088953644724 + -0.22850075456681943) / 2 + 0.0004 //北//
];
const LadbrokeGrove_w_WD = [51.52593131289449,-0.22850075456681943];
const CP_LadbrokeGrove_WD = adaptiveBezierCurve(LadbrokeGrove_e_WD,Cn_LadbrokeGrove_WD,LadbrokeGrove_w_WD,1);
const CP_LadbrokeGrove_Un_WD = resamplePath(CP_LadbrokeGrove_WD, 4);
//カーブ北西//
const OldOakCommon_s_WD = [51.52580430434064,-0.23449739433667227];
const Cn_OldOakCommon_WD = [
(51.52580430434064 + 51.52219904630757) / 2 + 0.0009, //西//
(-0.23449739433667227 + -0.2518537023518243) / 2 + 0.0004 //北//
];
const OldOakCommon_n_WD = [51.52219904630757,-0.2518537023518243];
const CP_OldOakCommon_WD = adaptiveBezierCurve(OldOakCommon_s_WD,Cn_OldOakCommon_WD,OldOakCommon_n_WD,1);
const CP_OldOakCommon_Un_WD = resamplePath(CP_OldOakCommon_WD, 5);
const WesturnAv_WD = [51.51850865397213, -0.26169606793978945];
//カーブ南東//
const ActonMainLine_s_WD = [51.51691259162641,-0.26793399593923645];
const Cn_ActonMainLine_WD = [
(51.51691259162641 + 51.515086880046205) / 2 - 0.0009, //東//
(-0.26793399593923645 + -0.2823850119376564) / 2 + 0.0004 //南//
];
const ActonMainLine_n_WD = [51.515086880046205,-0.2823850119376564];
const CP_ActonMainLine_WD = adaptiveBezierCurve(ActonMainLine_s_WD,Cn_ActonMainLine_WD,ActonMainLine_n_WD,1);
const CP_ActonMainLine_Un_WD = resamplePath(CP_ActonMainLine_WD, 4);
const HangerLn_WD = [51.51495494393, -0.2921100265257885];
const EalingBroadway_WD = [51.51465064287004, -0.30230567720185864];
const WestEaling_WD = [51.51358010880236, -0.3214764146370598];
const Hanwell_WD = [51.512004340874746, -0.33885712908879867];
const Ironbridge_WD = [51.50943861368329, -0.35484180481476074];
const SouthallPark_WD = [51.50774130466111, -0.3662880480411617];
const Southall_WD = [51.50592313122698, -0.3787199480281218];
const TranscoSH_WD = [51.504227991541484, -0.3908663030736357];
const SteerHayes_WD = [51.503082180703366, -0.40062246778202454];
const TheParkway_WD  = [51.502734659040215, -0.4074175040518041];
const HayesHarlington_WD = [51.50307214571084, -0.42090214750314464];
const DawleyRd_WD = [51.50376577367225, -0.429886366573761];
const HeathrowJn_WD = [51.504999575941255, -0.4389347703584408];//HayesHarlington駅(ヒースロー行はここまで)
const WestDrayton_WD = [51.50986753543619, -0.4727315515531088];
const Iver_WD = [51.508455114705534, -0.5064977963664008];
const Langley_WD = [51.50788235902562, -0.5427571498418663];
const Slough_WD = [51.511845860102135, -0.591373216810744]; //Slough駅(本線から分岐)
const GWR_Slough_Cn1 = [51.51257772687517, -0.5957861044573999]; 
const SloughCnP1 = [　//左上に膨らむ
(51.51257772687517 + 51.510706623980106) / 2 + 0.0007, // 緯度を少し南へ
(-0.5957861044573999 + -0.5998427204086497) / 2 - 0.0007 // 経度を少し西へ
];
const GWR_Slough_Cn2 = [51.510706623980106, -0.5998427204086497]; 
const curve_SL1 = adaptiveBezierCurve(GWR_Slough_Cn1, SloughCnP1,GWR_Slough_Cn2,1); //※カーブです
const curve_SL1_Un = resamplePath(curve_SL1, 3);
const UK_M4_WD = [51.502141054422694, -0.6085312393695544]; 
const GWR_Golf_Cn1 = [51.496938763042536, -0.6145532694616629]; 
const EtonWickRd = [51.4936900267197, -0.6171176998464528];
const WindsorWalk = [51.48984522867868, -0.6178832390639861];
const GWR_Windsor_Cn1 = [51.48596667356591, -0.6179389614569516]; 
const WindsorCnP1 = [　//左下に膨らむ
  (51.48596667356591 + 51.483535386263) / 2 - 0.001, // 緯度を少し南へ
  (-0.6179389614569516 + -0.6138561985383748) / 2 - 0.001 // 経度を少し西へ
];
const GWR_Windsor_Cn2 = [51.483535386263, -0.6138561985383748]; 
const curve_WD = adaptiveBezierCurve(GWR_Windsor_Cn1, WindsorCnP1, GWR_Windsor_Cn2,1);//※カーブです
const curve_WD_Un = resamplePath(curve_WD, 3);
const Windsor = [51.48317195088449, -0.6100296685527282]; //Windsor駅

const grw_windsor = L.polyline([Paddington_WD,BishopsRd_WD,WestBourneBd_WD,RoyalOak_WD,WestbournePark_WD,
...CP_LadbrokeGrove_Un_WD,...CP_OldOakCommon_Un_WD,WesturnAv_WD,
...CP_ActonMainLine_Un_WD,HangerLn_WD,EalingBroadway_WD,WestEaling_WD,Hanwell_WD,Ironbridge_WD,
Southall_WD,TranscoSH_WD,SteerHayes_WD,TheParkway_WD,HayesHarlington_WD,DawleyRd_WD,HeathrowJn_WD,
WestDrayton_WD,Iver_WD,Langley_WD,
Slough_WD,...curve_SL1_Un,UK_M4_WD,GWR_Golf_Cn1,
EtonWickRd,WindsorWalk,...curve_WD_Un,
Windsor], { color: '#000000' }).addTo(map);


// Paddington →Slough乗り換え →Windsor
//イベント登録
map.on('popupopen', function (e) {
  const windsorBtn = document.getElementById('PaddingtonToWindsorCard');
  if (windsorBtn) {
    const newBtn = windsorBtn.cloneNode(true);
    windsorBtn.parentNode.replaceChild(newBtn, windsorBtn);

    newBtn.addEventListener('click', () => {
      if (!animationRunning) {
        goToWindsor();
      }
    });
  }
});
//距離に応じて直線・カーブに対応した移動ができる。
function goToWindsor() {
  if (animationRunning) return;
  animationRunning = true;

  markerPaddington.closePopup();

  const trainIcon = L.icon({
    iconUrl: "image/icon/train_test.png",
    iconRetinaUrl: "image/icon/train_test@2x.png",
    iconSize: [40, 40],
    iconAnchor: [25, 25],
    className: "icon-train"
  });

  const trainMarker = L.marker(Paddington_WD, { icon: trainIcon }).addTo(map);

  const fullpath = interpolatePolyline(grw_windsor, 50);

  const windsorIndex = fullpath.findIndex(p =>
    Math.abs(p[0] - Windsor[0]) < 0.0001 &&
    Math.abs(p[1] - Windsor[1]) < 0.0001
  );
  const pathToWindsor = fullpath.slice(0, windsorIndex + 1);

  // ✅ ここに animatePath を定義
  function animatePath(path, totalDuration = 1750) { //スピード調整はここで
    const totalDistance = calculateTotalDistance(path);
    const speed = totalDistance / totalDuration;

    let frame = 0;

    function animate() {
      if (frame < path.length - 1) {
        const segmentDistance = getDistance(path[frame], path[frame + 1]);
        const segmentDuration = segmentDistance / speed;

        trainMarker.setLatLng(path[frame]);
        map.panTo(path[frame], { animate: true, duration: 0.25 });

        frame++;
        setTimeout(animate, segmentDuration);
      } else {
        markerWindsor.openPopup();
        map.removeLayer(trainMarker);
        animationRunning = false;
      }
    }

    animate();
  }

  // ✅ 呼び出し
  animatePath(pathToWindsor, 1500);
}
