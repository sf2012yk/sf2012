// 鉄道ルート
const Leeds_NTH = [53.7946841310327, -1.5475408292829431];
const Bingley = [53.84867598323501, -1.8373129664466459];

const Cononley = [53.91747294657412, -2.012010236321917];
//カーブ北東//
const Skipton_s = [53.95536105560979,-2.0202095927016597];
const Cn_Skipton = [
(53.95536105560979 + 53.958411467256056) / 2 + 0.0009, //東//
(-2.0202095927016597 + -2.0263963843994035) / 2 + 0.0014 //北//
];
const Skipton = [53.958411467256056,-2.0263963843994035]; 
const CP_Skipton = adaptiveBezierCurve(Skipton_s,Cn_Skipton,Skipton,1);
const CP_Skipton_Un = resamplePath(CP_Skipton, 5);
const Skipton_n = [53.958500418113196, -2.0290370100084716]; 
const Settle = [54.06688536084535, -2.2809156611312402]; //Settle駅
const Ribblehead = [54.20554493462866, -2.360514349954543]; //Ribblehead駅
const Dent = [54.28242732080147, -2.363559330158231];
const Garsdale = [54.32145844393467, -2.326242736630291];
const KirkbyStephen = [54.4552533088809, -2.3694000526779164];
const Appleby = [54.58042250402391, -2.4864566556569154];
const Langwathby = [54.694375701334906, -2.663607049908578];
const Lazonby = [54.75019332316334, -2.7027944773894776];
const Carlisle_ST = [54.89053256020592, -2.933184282739173];

// ルート
const NTH_LdCr = L.polyline([
Leeds_NTH,Bingley,Cononley,...CP_Skipton_Un,
Skipton_n,
Settle,
Ribblehead,
Dent,
Garsdale,KirkbyStephen,Appleby,Langwathby,Lazonby,
Carlisle_ST], { color: '#000000' }).addTo(map);
