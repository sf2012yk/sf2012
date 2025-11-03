
// 鉄道ルート　マンチェスター⇔ウィンダミア　//
const Manchester_2 = [53.477308627188506, -2.2299399620126628];
const OxfordRoad_MC_2 = [53.47383767483756, -2.242495874564298];
const Deansgate_2 = [53.47418133467857, -2.2510124912367457];
const SalfordCrescent = [53.48549291692724, -2.275607851597327];
const Kearsley = [53.5444741395339, -2.375436197594418];
const Farnworth = [53.55004193217387, -2.387739855906462];
const MosesGate = [53.556339706443055, -2.4017714412326305];
const Bolton = [53.574467472971065, -2.4259161110437915];
const HorwichParkway = [53.57800173419418, -2.5397348505175645];
const Blackrod = [53.59125816963594, -2.569980870163792];
const AndertonHallCr = [53.59555267187476, -2.5756846549024814];
const Adlington = [53.61318661055617, -2.6031185216939225];
const Chorley = [53.65260244826109, -2.626773352062018];
const BuckshawParkway = [53.67296108896423, -2.659021721639102];
const Leyland_2 = [53.69889183721045, -2.6868560633314407];
const Preston_2 = [53.755888528479566, -2.7073275847086293];
const BlackpoolRd_2 = [53.772753255808844, -2.7183793994243803];
const LythamRd_2 = [53.77650468126729, -2.7200291868171282];
const CadleyCauseway_2 = [53.779949893801906, -2.7215951200786277];
const LightfootLn_2 = [53.79612044837105, -2.7285900768992977];
const PrestonNorthBp_2 = [53.799064669856826, -2.729805029720272];
const NewshamHallLn_2 = [53.809979511852426, -2.734622320310969];
const Newsham_2 = [53.82053194090107, -2.7381095169189664];
const BilsborrowLn_2 = [53.85197842175335, -2.741053860114706];
const LiverBrock_2 = [53.85894484333843, -2.7425675837122148];
const NewLn_PR2 = [53.86952035218597, -2.7449827131102844];
const StubbinsLn_2 = [53.880369996788396, -2.7469354135415744];
const RayLn_PR2 = [53.888261767463646, -2.747884811040896];
const DelphLn_2 = [53.90715571538636, -2.754178515505581];

//カーブ北東//
const GubbefFordLn_s_2 = [53.92449945493444,-2.759682669705619];
const Cn_GubbefFordLn_2 = [
(53.92449945493444 + 53.92851941011744) / 2 + 0.0009, //東//
(-2.759682669705619 + -2.761984423075716) / 2 + 0.0004 //北//
];
const GubbefFordLn_n_2 = [53.92851941011744,-2.761984423075716];
const CP_GubbefFordLn_2 = adaptiveBezierCurve(GubbefFordLn_s_2,Cn_GubbefFordLn_2,GubbefFordLn_n_2,1);
const CP_GubbefFordLn_Un_2 = resamplePath(CP_GubbefFordLn_2,5);
const Scorton_s_2 = [53.93142404492519, -2.7646591346477987];
const Scorton_2 = [53.93437721023345, -2.7673295991948206];
const Lancaster_2 = [54.04888707581833, -2.807851033775735];
const Carnforth_2 = [54.129584506196146, -2.771089297535842];
const PyesBridgeLn_2 = [54.210211009940686, -2.7429296279895725];
const MilnthoupeRd_2 = [54.21354303134459, -2.744258550208862];
const Whassett_2 = [54.22108792241193, -2.746518790742742];
const Ackenthwaite_2 = [54.22921338439095, -2.7490682611083654];
const Sedgwick_2 = [54.276957503078656, -2.7418872681499677];
const BurtonRd_2_OH = [54.298787208388816, -2.7277926236059047];
const OxenholmeRd_2 = [54.30363023768309, -2.7230209357722424];
const Oxenholme_2 = [54.30554314645306, -2.7215110331335843];
const nth_MCWD = L.polyline([
Manchester_2,OxfordRoad_MC_2,Deansgate_2,SalfordCrescent,Kearsley,Farnworth,MosesGate,
Bolton,HorwichParkway,Blackrod,AndertonHallCr,Adlington,
Chorley,BuckshawParkway,Leyland_2,
Preston_2,BlackpoolRd_2,LythamRd_2,CadleyCauseway_2,LightfootLn_2,
PrestonNorthBp_2,NewshamHallLn_2,Newsham_2,BilsborrowLn_2,LiverBrock_2,NewLn_PR2,
StubbinsLn_2,RayLn_PR2,DelphLn_2,...CP_GubbefFordLn_Un_2,
Lancaster_2,Carnforth_2,PyesBridgeLn_2,MilnthoupeRd_2,Whassett_2,Sedgwick_2,BurtonRd_2_OH,OxenholmeRd_2,
Oxenholme_2,], { color: '#000000' }).addTo(map);