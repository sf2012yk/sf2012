// 鉄道ルート
const Leeds_TPE2 = [53.7946841310327, -1.5475408292829431];
const Huddersfield = [53.64885254149166, -1.7846598854484796];
const Slaithwaite = [53.62376959895857, -1.8817345483493046];
const Marsden_Tn = [53.60345620063153, -1.9421567681417484];
const Diggle_Tn = [53.56973088047885, -1.9899926478783712];
const Stalybridge = [53.484233779647916, -2.0634421530388227];
const ManchesterVictoria = [53.48801914740246, -2.242868001441824];
const GreenGate = [53.48639762805274, -2.2474470445825405];
const ViaductSt = [53.4854414135793, -2.2504030007369735];
const BurySt = [53.48498868774298, -2.251633181710365];
const ChapelSt_MC = [53.483865549457335, -2.25347099734181];
const SalfordCentral = [53.482893886517125, -2.2552759490172036];
const Deansgate = [53.47418133467857, -2.2510124912367457];
const OxfordRoad_MC = [53.47383767483756, -2.242495874564298];
const Manchester_TPE = [53.476339968144806, -2.228709801502412];

// ルート
const TPE_LdMc = L.polyline([
Leeds_TPE2,Huddersfield,Slaithwaite,Marsden_Tn,Diggle_Tn,Stalybridge,
ManchesterVictoria,GreenGate,ViaductSt,BurySt,ChapelSt_MC,SalfordCentral,
Deansgate,OxfordRoad_MC,Manchester_TPE], { color: '#000000' }).addTo(map);
