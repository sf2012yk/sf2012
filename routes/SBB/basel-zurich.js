//  Basel Zurich

// 鉄道ルート　バーゼル→チューリッヒ駅　//
const Basel_SBB = [47.54717812533671, 7.5890015703746885];
const Olten_w = [47.365007407888896, 7.918003875249367];
const Olten_e = [47.358776575085656, 7.925371665693845];
const Aarau = [47.39130707458747, 8.051470595831386];
const Zurich_HB = [47.37828613669217, 8.539567674375348];

 
// ブリュッセル⇒ケルン⇔チューリッヒのルート
const SBB_Basel = L.polyline
([Basel_SBB,Olten_w,Olten_e,Aarau,Zurich_HB], { color: '#000000' }).addTo(map);

