// London Edinburgh module

// 鉄道ルート　ヨーク⇔ニューカッスル　//
const York_LNER2 = [53.95668456824942, -1.0946599488952553]; //York駅
const YorkCnP1 = [　//左上に膨らむ
(53.95668456824942 + 53.962492486262875) / 2 + 0.0021, // 緯度を少し北へ
(-1.093863638521991 + -1.1027406445606942) / 2 + 0.0085 // 経度を少し東へ
];
const MuseumYork = [53.962492486262875, -1.1027406445606942];
const CP_York1 = adaptiveBezierCurve(York_LNER2,YorkCnP1,MuseumYork,1); //※カーブです
const CP_York1_Un = resamplePath(CP_York1, 9);
const corner_skelton = [53.96222469283808, -1.107899418940041];
const YorkCnP2 = [　//左上に膨らむ
(53.96222469283808 + 53.963911797768375) / 2 - 0.0009, // 緯度を少し南へ
(-1.107899418940041 + -1.1137778899712267) / 2 - 0.0004 // 経度を少し西へ
];
const SkeltonSouth = [53.963911797768375, -1.1137778899712267];
const CP_York2 = adaptiveBezierCurve(corner_skelton,YorkCnP2,SkeltonSouth,1); //※カーブです
const CP_York2_Un = resamplePath(CP_York2, 4);
const Motservice = [53.96747390946786, -1.1174023920041822];
const Rawcliffe = [53.9746874127735, -1.1242045359548576];
const UK_A1237 = [53.98238288751885, -1.131291322128535];
const Overton = [53.99463133898563, -1.1423084636432121];
const OvertonRd = [54.01006088696025, -1.1562709172251477];
const ShiptonLowRd = [54.02045627943867, -1.165728394795037];
const ChapmansLn = [54.032772135957174, -1.176877920450798];
const NewtononOuse_s = [54.04007885712529, -1.183276569981279];
const NewtononOuse_n = [54.05215700288702, -1.1942425434726107];
const WarehillLn = [54.06571982316464, -1.206601313838373];
const Tollerton = [54.07413393908445, -1.2140955559609883];
const Alne = [54.08579859723287, -1.2244614601673423];
const ForestLn = [54.090558073275055, -1.228873385455155];
const Tholthorpe_s = [54.102331101622816, -1.239177351545448];
const Tholthorpe_c = [54.108316225704726, -1.2450890303037951];
const Tholthorpe_n = [54.11477760389727, -1.2512216663400704];
const HagLm = [54.12075170787085, -1.2576087810715986];
const Raskelf = [54.12957653968102, -1.2675217053927352];
const WestMoorRd = [54.13680999284103, -1.2752613143947724];
const Pilmoor = [54.149740361377376, -1.288942606809107];
const Sessay = [54.17170518914492, -1.3105091774104325];
const Dalton_s = [54.17756980942831, -1.316756814986542];
const Dalton_n = [54.191231354813084, -1.3314338624257513];
const UK_A168_YK = [54.210019772090114, -1.3525208460746918];
const UK_B1448 = [54.213181945235654, -1.3562115656473293];
const Thirsk = [54.228322785564245, -1.3730547487295126]; //Thirsk駅
const Breckenbrough_s = [54.23635946093127, -1.3817871465493394];
const Breckenbrough_c = [54.2437905747994, -1.3901478961931932];
const Breckenbrough_n = [54.251441458788754, -1.3985635823086762];
const NewshamRd = [54.25475267246531, -1.4013616383304568];
const Northallerton = [54.33297862883088, -1.44116968128268]; //Northallerton駅
const YafforthRd = [54.3457523132137, -1.4492836090651022];
const DanbyLn = [54.38471667567413, -1.4727485790607036];
//カーブ北東//
const HuttonBonville_s = [54.3948751662644,-1.4788254663829563];
const Cn_HuttonBonville = [
(54.3948751662644 + 54.41598216833143) / 2 + 0.0024, //東//
(-1.4788254663829563 + -1.4958628579598299) / 2 + 0.0004 //北//
];
const HuttonBonville_n = [54.41598216833143,-1.4958628579598299];
const CP_HuttonBonville = adaptiveBezierCurve(HuttonBonville_s,Cn_HuttonBonville,HuttonBonville_n,1);
const CP_HuttonBonville_Un = resamplePath(CP_HuttonBonville, 5);
const UK_B1263 = [54.44242191474956, -1.5261726579335615];
//カーブ南西//
const DaltononTees_s = [54.46437348929675,-1.5514928536802675];
const Cn_DaltononTees = [
(54.46437348929675 + 54.47572088370006) / 2 - 0.0024, //西//
(-1.5514928536802675 + -1.5536386208968476) / 2 - 0.0039 //南//
];
const DaltononTees_n = [54.47572088370006,-1.5536386208968476];
const CP_DaltononTees = adaptiveBezierCurve(DaltononTees_s,Cn_DaltononTees,DaltononTees_n,1);
const CP_DaltononTees_Un = resamplePath(CP_DaltononTees, 6);
//カーブ南東//
const CroftonTees_s = [54.47915465026166,-1.5517116305875982];
const Cn_CroftonTees = [
(54.47915465026166 + 54.48289055912525) / 2 - 0.0009, //東//
(-1.5517116305875982 + -1.5503847145552818) / 2 + 0.0004 //南//
];
const CroftonTees_n = [54.48289055912525,-1.5503847145552818];
const CP_CroftonTees = adaptiveBezierCurve(CroftonTees_s,Cn_CroftonTees,CroftonTees_n,1);
const CP_CroftonTees_Un = resamplePath(CP_CroftonTees, 4);
const ComfortCow = [54.498120881642706, -1.5484105968744926];
const UK_A66_DL = [54.5053396877626, -1.5485346532177628];
const Darlington = [54.521126434342825, -1.5460040570133933];//Darlington駅
const ParkgateDr_s = [54.52342393342963, -1.545353197802328];
const ParkgateDr_n = [54.52717817345181, -1.5444132771693089];
const UK_B6279 = [54.53021648269997, -1.5437183242577246];
//カーブ南東//
const SaltersLn_s = [54.54936144767438,-1.5402492476699055];
const Cn_SaltersLn = [
(54.54936144767438 + 54.56043286182098) / 2 + 0.0012, //東//
(-1.5402492476699055 + -1.5408493167144799) / 2 + 0.0004 //南//
];
const SaltersLn_n = [54.56043286182098,-1.5408493167144799];
const CP_SaltersLn = adaptiveBezierCurve(SaltersLn_s,Cn_SaltersLn,SaltersLn_n,1);
const CP_SaltersLn_Un = resamplePath(CP_SaltersLn, 5);

//カーブ北東//
const Brafferton_s = [54.57699099872808,-1.5454980168039103];
const Cn_Brafferton = [
(54.57699099872808 + 54.58366084495327) / 2 + 0.0012, //東//
(-1.5454980168039103 + -1.552566396487948) / 2 + 0.0024 //北//
];
const Brafferton_n = [54.58366084495327,-1.552566396487948];
const CP_Brafferton = adaptiveBezierCurve(Brafferton_s,Cn_Brafferton,Brafferton_n,1);
const CP_Brafferton_Un = resamplePath(CP_Brafferton, 4);
//カーブ南西//
const LimeLnDr_s = [54.58478470270229,-1.5552967814813892];
const Cn_LimeLnDr = [
(54.58478470270229 + 54.59220730013532) / 2 - 0.0024, //西//
(-1.5552967814813892 + -1.5601961637580506) / 2 - 0.0026 //南//
];
const LimeLnDr_n = [54.59220730013532,-1.5601961637580506];
const CP_LimeLnDr = adaptiveBezierCurve(LimeLnDr_s,Cn_LimeLnDr,LimeLnDr_n,1);
const CP_LimeLnDr_Un = resamplePath(CP_LimeLnDr, 4);
//カーブ北西//
const AycliffeVl_s = [54.596686434717306,-1.5585785049980763];
const Cn_AycliffeVl = [
(54.596686434717306 + 54.601782840900604) / 2 + 0.0009, //西//
(-1.5585785049980763 + -1.555359854154742) / 2 + 0.0004 //北//
];
const AycliffeVl_n = [54.601782840900604,-1.555359854154742];
const CP_AycliffeVl = adaptiveBezierCurve(AycliffeVl_s,Cn_AycliffeVl,AycliffeVl_n,1);
const CP_AycliffeVl_Un = resamplePath(CP_AycliffeVl, 3);
//カーブ北東//
const RicknallLn_s = [54.60431837613244,-1.5532570021970975];
const Cn_RicknallLn = [
(54.60431837613244 + 54.611103884661894) / 2 + 0.0032, //東//
(-1.5532570021970975 + -1.537721647655835) / 2 + 0.0004 //北//
];
const RicknallLn_n = [54.611103884661894,-1.537721647655835];
const CP_RicknallLn = adaptiveBezierCurve(RicknallLn_s,Cn_RicknallLn,RicknallLn_n,1);
const CP_RicknallLn_Un = resamplePath(CP_RicknallLn, 3);
//カーブ南東//
const PrestonLeSkerne_s = [54.61194888714131,-1.5292673246779274];
const Cn_PrestonLeSkerne = [
(54.61194888714131 + 54.62320251249372) / 2 - 0.0049, //東//
(-1.5292673246779274 + -1.5114591958332786) / 2 + 0.0020 //南//
];
const PrestonLeSkerne_n = [54.62320251249372,-1.5114591958332786];
const CP_PrestonLeSkerne = adaptiveBezierCurve(PrestonLeSkerne_s,Cn_PrestonLeSkerne,PrestonLeSkerne_n,1);
const CP_PrestonLeSkerne_Un = resamplePath(CP_PrestonLeSkerne, 5);
//カーブ北東//
const Bradbury_s = [54.65256720472936,-1.501932132993153];
const Cn_Bradbury = [
(54.65256720472936 + 54.65860288273418) / 2 + 0.0009, //東//
(-1.501932132993153 + -1.5029818310483596) / 2 + 0.0009 //北//
];
const Bradbury_n = [54.65860288273418,-1.5029818310483596];
const CP_Bradbury = adaptiveBezierCurve(Bradbury_s,Cn_Bradbury,Bradbury_n,1);
const CP_Bradbury_Un = resamplePath(CP_Bradbury, 4);
//カーブ北東//
const ThrundleFarm_s = [54.66143452944784,-1.50533495132088];
const Cn_ThrundleFarm = [
(54.66143452944784 + 54.665559081857566) / 2 + 0.0009, //東//
(-1.50533495132088 + -1.5128606924781516) / 2 + 0.0004 //北//
];
const ThrundleFarm_n = [54.665559081857566,-1.5128606924781516];
const CP_ThrundleFarm = adaptiveBezierCurve(ThrundleFarm_s,Cn_ThrundleFarm,ThrundleFarm_n,1);
const CP_ThrundleFarm_Un = resamplePath(CP_ThrundleFarm, 3);
//カーブ北西//
const GhipslyLn_s = [54.66669825890965,-1.5160677350937006];
const Cn_GhipslyLn = [
(54.66669825890965 + 54.66997096306613) / 2 - 0.0009, //西//
(-1.5160677350937006 + -1.5226068353528346) / 2 + 0.0004 //北//
];
const GhipslyLn_n = [54.66997096306613,-1.5226068353528346];
const CP_GhipslyLn = adaptiveBezierCurve(GhipslyLn_s,Cn_GhipslyLn,GhipslyLn_n,1);
const CP_GhipslyLn_Un = resamplePath(CP_GhipslyLn, 4);
//カーブ南西//
const Mainsforth_s = [54.673365473395364,-1.526974175702541];
const Cn_Mainsforth = [
(54.673365473395364 + 54.67935565440926) / 2 - 0.0010, //西//
(-1.526974175702541 + -1.5308528533754524) / 2 - 0.0010 //南//
];
const Mainsforth_n = [54.67935565440926,-1.5308528533754524];
const CP_Mainsforth = adaptiveBezierCurve(Mainsforth_s,Cn_Mainsforth,Mainsforth_n,1);
const CP_Mainsforth_Un = resamplePath(CP_Mainsforth, 4);
const EastHowle_s = [54.69658356245248, -1.5331494389120455];
const EastHowle_n = [54.70324856447823, -1.5345273901992795];
const MetalBridge = [54.710162740973, -1.5350764937309187];
//カーブ北西//
const HettSouth_s = [54.71259429873397,-1.5347452914951047];
const Cn_HettSouth = [
(54.71259429873397 + 54.72498326162244) / 2 + 0.0037, //西//
(-1.5347452914951047 + -1.5462744941916193) / 2 + 0.0039 //北//
];
const HettSouth_n = [54.72498326162244,-1.5462744941916193];
const CP_HettSouth = adaptiveBezierCurve(HettSouth_s,Cn_HettSouth,HettSouth_n,0.2);
const CP_HettSouth_Un = resamplePath(CP_HettSouth, 4);
//カーブ北西//
const HettNorth_s = [54.72892367588807,-1.55773289113804];
const Cn_HettNorth = [
(54.72892367588807 + 54.729221050070386) / 2 + 0.0019, //西//
(-1.55773289113804 + -1.574899028789216) / 2 + 0.0014 //北//
];
const HettNorth_n = [54.729221050070386,-1.574899028789216];
const CP_HettNorth = adaptiveBezierCurve(HettNorth_s,Cn_HettNorth,HettNorth_n,0.2);
const CP_HettNorth_Un = resamplePath(CP_HettNorth, 3);
const Croxdale = [54.729642326524434, -1.5818513146067439];
//カーブ北西//
const BrowneyLn_s = [54.73376241637099,-1.596187215059845];
const Cn_BrowneyLn = [
(54.73376241637099 + 54.742062301822216) / 2 - 0.0024, //西//
(-1.596187215059845 + -1.604941945185146) / 2 - 0.0024 //北//
];
const BrowneyLn_n = [54.742062301822216,-1.604941945185146];
const CP_BrowneyLn = adaptiveBezierCurve(BrowneyLn_s,Cn_BrowneyLn,BrowneyLn_n,0.2);
const CP_BrowneyLn_Un = resamplePath(CP_BrowneyLn, 4);
const LangleyMoor_s = [54.748867361320556, -1.6058628833573767];
const LangleyMoor = [54.756834331756416, -1.6069097508662236];
const GroveTeracce = [54.760909581586034, -1.6070876433084542];
//カーブ北東//
const NevillesCross_s = [54.76772923632636,-1.6068472542942291];
const Cn_NevillesCross = [
(54.76772923632636 + 54.77268804162755) / 2 + 0.0009, //東//
(-1.6068472542942291 + -1.6016658156678945) / 2 - 0.0024 //北//
];
const NevillesCross_n = [54.77268804162755,-1.6016658156678945];
const CP_NevillesCross = adaptiveBezierCurve(NevillesCross_s,Cn_NevillesCross,NevillesCross_n,1);
const CP_NevillesCross_Un = resamplePath(CP_NevillesCross, 4);
//カーブ南東//
const Durham_s = [54.77684044105925, -1.5862169994524649];
const Durham_c = [54.77815227386161, -1.5836420788490948];
const Durham = [54.77983780775699, -1.5814880478633844]; //ダラム駅
const AykleyHeads = [54.79327136120881, -1.5686552140590326];
//カーブ北東//
const NewtonHall_s = [54.79682902412444,-1.5632373795651178];
const Cn_NewtonHall = [
(54.79682902412444 + 54.806155438647565) / 2 + 0.0009, //東//
(-1.5632373795651178 + -1.563489338968832) / 2 + 0.0054 //北//
];
const NewtonHall_n = [54.806155438647565,-1.563489338968832];
const CP_NewtonHall = adaptiveBezierCurve(NewtonHall_s,Cn_NewtonHall,NewtonHall_n,1);
const CP_NewtonHall_Un = resamplePath(CP_NewtonHall, 4);
const BurdonPl = [54.81274933106201, -1.571746634863563];
const Plawsworth_s = [54.82284467571255, -1.5801723926020352];
const Plawsworth_n = [54.826917473062494, -1.5817326411975456];

//カーブ北西//
const ChesterMoor_s = [54.83171312315044,-1.582548032755897];
const Cn_ChesterMoor = [
(54.83171312315044 + 54.83609615449198) / 2 + 0.0013, //西//
(-1.582548032755897 + -1.5815885292271454) / 2 + 0.0004 //北//
];
const ChesterMoor_n = [54.83609615449198,-1.5815885292271454];
const CP_ChesterMoor = adaptiveBezierCurve(ChesterMoor_s,Cn_ChesterMoor,ChesterMoor_n,1);
const CP_ChesterMoor_Un = resamplePath(CP_ChesterMoor, 4);

//カーブ北東//
const Waldridge_s = [54.84654953902549,-1.5773828254977365];
const Cn_Waldridge = [
(54.84654953902549 + 54.85151558893752) / 2 + 0.0009, //東//
(-1.5773828254977365 + -1.5773059682707373) / 2 + 0.0004 //北//
];
const Waldridge_n = [54.85151558893752,-1.5773059682707373];
const CP_Waldridge = adaptiveBezierCurve(Waldridge_s,Cn_Waldridge,Waldridge_n,1);
const CP_Waldridge_Un = resamplePath(CP_Waldridge, 4);
const ChesterleStreet = [54.85450328396147, -1.5783317766117124];
const NBurns_s = [54.856896139271065,-1.5790368540879731];
const NBurns_n = [54.859601022209986,-1.5791012270945686];
//カーブ北東//
const HighFlatts_s = [54.86630071886632,-1.5778402088428298];
const Cn_HighFlatts = [
(54.86630071886632 + 54.872386622184294) / 2 + 0.0009, //東//
(-1.5778402088428298 + -1.5783561959436172) / 2 + 0.0004 //北//
];
const HighFlatts_n = [54.872386622184294,-1.5783561959436172];
const CP_HighFlatts = adaptiveBezierCurve(HighFlatts_s,Cn_HighFlatts,HighFlatts_n,1);
const CP_HighFlatts_Un = resamplePath(CP_HighFlatts, 4);
//カーブ北東//
const Birtley_s = [54.89085310403023,-1.5828193917299687];
const Cn_Birtley = [
(54.89085310403023 + 54.89490333398965) / 2 + 0.0004, //東//
(-1.5828193917299687 + -1.5850264284760878) / 2 + 0.0004 //北//
];
const Birtley_n = [54.89490333398965,-1.5850264284760878];
const CP_Birtley = adaptiveBezierCurve(Birtley_s,Cn_Birtley,Birtley_n,0.1);
const CP_Birtley_Un = resamplePath(CP_Birtley, 3);
const Lamesley_s = [54.91995714993537, -1.603741845926646];
const Lamesley_n = [54.92806183524937, -1.6080984336460882];
//カーブ北東//
const Saltwell_s = [54.940654189383416,-1.611892913794876];
const Cn_Saltwell = [
(54.940654189383416 + 54.945952965754984) / 2 + 0.0009, //東//
(-1.611892913794876 + -1.614684721010228) / 2 + 0.0004 //北//
];
const Saltwell_n = [54.945952965754984,-1.614684721010228];
const CP_Saltwell = adaptiveBezierCurve(Saltwell_s,Cn_Saltwell,Saltwell_n,0.1);
const CP_Saltwell_Un = resamplePath(CP_Saltwell, 3);
//カーブ北西//
const Gateshead_s = [54.9505941666716,-1.6185268622493083];
const Cn_Gateshead = [
(54.9505941666716 + 54.95485527344649) / 2 - 0.0009, //西//
(-1.6185268622493083 + -1.6194398151333023) / 2 - 0.0009 //北//
];
const Gateshead_n = [54.95485527344649,-1.6194398151333023];
const CP_Gateshead = adaptiveBezierCurve(Gateshead_s,Cn_Gateshead,Gateshead_n,0.01);
const CP_Gateshead_Un = resamplePath(CP_Gateshead, 4);
const Tyne_Rd_NC = [54.958593191695414, -1.6172818841657346];
//カーブ北西//
const KingEdward_Bd_s = [54.96045355192529,-1.6152741252638652];
const Cn_KingEdward_Bd = [
(54.96045355192529 + 54.962401114879036) / 2 - 0.0009, //西//
(-1.6152741252638652 + -1.6153462999806965) / 2 + 0.0004 //北//
];
const KingEdward_Bd_n = [54.962401114879036,-1.6153462999806965];
const CP_KingEdward_Bd = adaptiveBezierCurve(KingEdward_Bd_s,Cn_KingEdward_Bd,KingEdward_Bd_n,0.4);
const CP_KingEdward_Bd_Un = resamplePath(CP_KingEdward_Bd, 4);

//カーブ北西//
const PotteryLn_s = [54.965366935721256,-1.618701106879188];
const Cn_PotteryLn = [
(54.965366935721256 + 54.967566644288254) / 2 - 0.0009, //西//
(-1.618701106879188 + -1.618788844937472) / 2 - 0.0014 //北//
];
const PotteryLn_n = [54.967566644288254,-1.618788844937472];
const CP_PotteryLn = adaptiveBezierCurve(PotteryLn_s,Cn_PotteryLn,PotteryLn_n,0.01);
const CP_PotteryLn_Un = resamplePath(CP_PotteryLn, 4);
const Newcastle_LNER1 = [54.96814759160355, -1.6176357599706133];


// ロンドン・ヨークのルート
const LNER_YkNc = L.polyline([
...CP_York1_Un,...CP_York2_Un,
Motservice,Rawcliffe,UK_A1237,Overton,OvertonRd,ShiptonLowRd,ChapmansLn,NewtononOuse_s,NewtononOuse_n,WarehillLn,
Tollerton,Alne,ForestLn,Tholthorpe_s,Tholthorpe_c,Tholthorpe_n,
HagLm,Raskelf,WestMoorRd,Pilmoor,Sessay,Dalton_s,Dalton_n,UK_A168_YK,UK_B1448,
Thirsk,Breckenbrough_s,Breckenbrough_c,Breckenbrough_n,NewshamRd,
Northallerton,YafforthRd,DanbyLn,...CP_HuttonBonville_Un,UK_B1263,
...CP_DaltononTees_Un,...CP_CroftonTees_Un,ComfortCow,UK_A66_DL,
Darlington,ParkgateDr_s,ParkgateDr_n,UK_B6279,...CP_SaltersLn_Un,...CP_Brafferton_Un,...CP_LimeLnDr_Un,...CP_AycliffeVl_Un,
...CP_RicknallLn_Un,...CP_PrestonLeSkerne_Un,
...CP_Bradbury_Un,...CP_ThrundleFarm_Un,...CP_GhipslyLn_Un,...CP_Mainsforth_Un,
EastHowle_s,EastHowle_n,MetalBridge,...CP_HettSouth_Un,...CP_HettNorth_Un,Croxdale,...CP_BrowneyLn_Un,
LangleyMoor_s,LangleyMoor,GroveTeracce,...CP_NevillesCross_Un,Durham_s,Durham_c,
Durham,AykleyHeads,...CP_NewtonHall_Un,BurdonPl,Plawsworth_s,Plawsworth_n,...CP_ChesterMoor_Un,...CP_Waldridge_Un,
ChesterleStreet,NBurns_s,NBurns_n,...CP_HighFlatts_Un,...CP_Birtley_Un,
Lamesley_s,Lamesley_n,...CP_Saltwell_Un,...CP_Gateshead_Un,Tyne_Rd_NC,...CP_KingEdward_Bd_Un,...CP_PotteryLn_Un,
Newcastle_LNER1], { color: '#000000' }).addTo(map);


//※往路 //
// 始発駅（York） → 終着駅（Newcastle）へ滑らかに移動する関数
//イベント登録を無制限制限
map.on('popupopen', function (e) {
  const NewcastleBtn = document.getElementById('YorkToNewcastleCard');
  if (NewcastleBtn) {
    const newBtn = NewcastleBtn.cloneNode(true);
    NewcastleBtn.parentNode.replaceChild(newBtn, NewcastleBtn);

    newBtn.addEventListener('click', () => {
      if (!animationRunning) {
        goToNewcastle();
      }
    });
  }
  })

function goToNewcastle() {
  if (animationRunning) return; // ← すでに動いていたら何もしない
  animationRunning = true;

  markerYork.closePopup(); // ← 移動前にYork（始発）のポップアップを閉じる

  // 🚄 アイコン付きマーカーを表示（初期位置）
  const trainIcon = L.icon({
    iconUrl: "image/icon/train_test.png",// アイコン画像のURL
    iconRetinaUrl:"image/icon/train_test@2x.png",
    iconSize: [40, 40],
    iconAnchor: [25, 25],
    className: "icon-train"
  });

  const trainMarker = L.marker(York_LNER2, { icon: trainIcon }).addTo(map);

  const fullPath = interpolatePolyline(LNER_YkNc, 40);// ← 数字が少ないほどスピードアップ

  const newcastleIndex = fullPath.findIndex(p => 
    Math.abs(p[0] - Newcastle_LNER1[0]) < 0.0001 && 
    Math.abs(p[1] - Newcastle_LNER1[1]) < 0.0001
  );

  const pathToNewcastle = fullPath.slice(0, newcastleIndex + 1);
  // ✅ ここに animatePath を定義
  const totalFrames = pathToNewcastle.length;

  // ✅ 距離に応じてフレーム間隔を調整
  const totalDistance = calculateTotalDistance(pathToNewcastle); // メートル
  const targetDuration = 20000; // 全体移動時間（ミリ秒）
  const frameInterval = Math.max(1, targetDuration / totalFrames); // 最低5ms

  let frame = 0;

  function animate() {
   
   const index = frame;

    if (index < pathToNewcastle.length) {
      trainMarker.setLatLng(pathToNewcastle[index]); // ← マーカーを移動
      map.panTo(pathToNewcastle[index], { animate: true, duration: 0.03 });
      frame++
      requestAnimationFrame(animate); // ← 滑らかなアニメーション
    } else {
      setTimeout(() => {
        markerNewcastle.openPopup();
        map.removeLayer(trainMarker); // アイコンを削除
        animationRunning = false;
      }, 200);

    }
  }
  animate();
}

// York → Darlington へ滑らかに移動する関数
//イベント登録を無制限制限
map.on('popupopen', function (e) {
  const DarlingtonBtn = document.getElementById('YorkToDarlingtonCard');
  if (DarlingtonBtn) {
    const newBtn = DarlingtonBtn.cloneNode(true);
    DarlingtonBtn.parentNode.replaceChild(newBtn, DarlingtonBtn);

    newBtn.addEventListener('click', () => {
      if (!animationRunning) {
        goToDarlington();
      }
    });
  }
  })

function goToDarlington() {
  if (animationRunning) return; // ← すでに動いていたら何もしない
  animationRunning = true;

  markerYork.closePopup(); // ← 移動前にYork（始発）のポップアップを閉じる

  // 🚄 アイコン付きマーカーを表示（初期位置）
  const trainIcon = L.icon({
    iconUrl: "image/icon/train_test.png",// アイコン画像のURL
    iconRetinaUrl:"image/icon/train_test@2x.png",
    iconSize: [40, 40],
    iconAnchor: [25, 25],
    className: "icon-train"
  });

  const trainMarker = L.marker(York_LNER2, { icon: trainIcon }).addTo(map);

  const fullPath = interpolatePolyline(LNER_YkNc , 40);// ← 数字が少ないほどスピードアップ

  const DarlingtonIndex = fullPath.findIndex(p => 
    Math.abs(p[0] - Darlington[0]) < 0.0001 && 
    Math.abs(p[1] - Darlington[1]) < 0.0001
  );

  const pathToDarlington = fullPath.slice(0, DarlingtonIndex + 1);
  // ✅ ここに animatePath を定義
  const totalFrames = pathToDarlington.length;
  let frame = 0;

  function animate() {
   
   const index = frame;

    if (index < pathToDarlington.length) {
      trainMarker.setLatLng(pathToDarlington[index]); // ← マーカーを移動
      map.panTo(pathToDarlington[index], { animate: true, duration: 0.01 });
      frame++;
      requestAnimationFrame(animate); // ← 滑らかなアニメーション
    } else {
      setTimeout(() => {
        markerDarlington.openPopup();
        map.removeLayer(trainMarker); // アイコンを削除
        animationRunning = false;
      }, 100);

    }
  }
  animate();
}

// Darlington → Durham（途中駅→途中駅）
//イベント登録
map.on('popupopen', function (e) {
  const DarlingtonToDurhamBtn = document.getElementById('DarlingtonToDurhamCard');
  if (DarlingtonToDurhamBtn) {
    const newBtn = DarlingtonToDurhamBtn.cloneNode(true);
    DarlingtonToDurhamBtn.parentNode.replaceChild(newBtn, DarlingtonToDurhamBtn);

    newBtn.addEventListener('click', () => {
      if (!animationRunning) {
        goToDarlingtonToDurham();
      }
    });
  }
});

function goToDarlingtonToDurham() {
  if (animationRunning) return;
  animationRunning = true;

  markerDarlington.closePopup();

  const trainIcon = L.icon({
    iconUrl: "image/icon/train_test.png",
    iconRetinaUrl: "image/icon/train_test@2x.png",
    iconSize: [40, 40],
    iconAnchor: [25, 25],
    className: "icon-train"
  });

  const trainMarker = L.marker(Darlington, { icon: trainIcon }).addTo(map);

  const fullPath = interpolatePolyline(LNER_YkNc, 50);

  const DarlingtonIndex = fullPath.findIndex(p =>
    Math.abs(p[0] - Darlington[0]) < 0.0001 &&
    Math.abs(p[1] - Darlington[1]) < 0.0001
  );

  const DurhamIndex = fullPath.findIndex(p =>
    Math.abs(p[0] - Durham[0]) < 0.0001 &&
    Math.abs(p[1] - Durham[1]) < 0.0001
  );

  if (DarlingtonIndex === -1 || DurhamIndex === -1) {
    animationRunning = false;
    return;
  }

  const start = Math.min(DarlingtonIndex, DurhamIndex);
  const end = Math.max(DarlingtonIndex, DurhamIndex);
  const pathToDarlingtontoDurham = fullPath.slice(start, end + 1);

  if (pathToDarlingtontoDurham.length === 0) {
    animationRunning = false;
    return;
  }

  

  map.panTo(pathToDarlingtontoDurham[0], { animate: false });

  let frame = 0;

  function animate() {
    if (frame < pathToDarlingtontoDurham.length) {
      trainMarker.setLatLng(pathToDarlingtontoDurham[frame]);
      map.panTo(pathToDarlingtontoDurham[frame], { animate: true, duration: 0.01 });
      frame++;
      requestAnimationFrame(animate); // ← 滑らかなアニメーション
    } else {
      setTimeout(() => {
        markerDurham.openPopup();
        map.removeLayer(trainMarker);
        animationRunning = false;
      }, 100);
    }
  }

  animate();
}

// Durham → Newcastle（途中駅→終着駅）
//イベント登録
map.on('popupopen', function (e) {
  const DurhamToNewcastleBtn = document.getElementById('DurhamToNewcastleCard');
  if (DurhamToNewcastleBtn) {
    const newBtn = DurhamToNewcastleBtn.cloneNode(true);
    DurhamToNewcastleBtn.parentNode.replaceChild(newBtn, DurhamToNewcastleBtn);

    newBtn.addEventListener('click', () => {
      if (!animationRunning) {
        DurhamtoNewcastle();
      }
    });
  }
});

function DurhamtoNewcastle() {
  if (animationRunning) return;
  animationRunning = true;

  markerDurham.closePopup();

  const trainIcon = L.icon({
    iconUrl: "image/icon/train_test.png",
    iconRetinaUrl: "image/icon/train_test@2x.png",
    iconSize: [40, 40],
    iconAnchor: [25, 25],
    className: "icon-train"
  });

  const trainMarker = L.marker(Durham, { icon: trainIcon }).addTo(map);

  const fullPath = interpolatePolyline(LNER_YkNc, 30);

  const DurhamIndex = fullPath.findIndex(p =>
    Math.abs(p[0] - Durham[0]) < 0.0001 &&
    Math.abs(p[1] - Durham[1]) < 0.0001
  );

  const NewcastleIndex = fullPath.findIndex(p =>
    Math.abs(p[0] - Newcastle_LNER1[0]) < 0.0001 &&
    Math.abs(p[1] - Newcastle_LNER1[1]) < 0.0001
  );

  if (DurhamIndex === -1 || NewcastleIndex === -1) {
    animationRunning = false;
    return;
  }
  //Durham → York（始発駅） のインデックスを使ってsliceを抽出し、正しいルートにする。
  //start、endの大きさはMathによって調整している。
  const start = Math.min(DurhamIndex, NewcastleIndex);
  const end = Math.max(DurhamIndex, NewcastleIndex);
  const pathToNewcastle = fullPath.slice(start, end + 1);

  if (pathToNewcastle.length === 0) {
    animationRunning = false;
    return;
  }

  map.panTo(pathToNewcastle[0], { animate: false });

  let frame = 0;

  function animate() {
    if (frame < pathToNewcastle.length) {
      trainMarker.setLatLng(pathToNewcastle[frame]);
      map.panTo(pathToNewcastle[frame], { animate: true, duration: 0.03 });
      frame++;
      requestAnimationFrame(animate); // ← 滑らかなアニメーション
    } else {
      setTimeout(() => {
        markerNewcastle.openPopup();
        map.removeLayer(trainMarker);
        animationRunning = false;
      }, 100);
    }
  }

  animate();
}

//※復路 //
// Newcastle　→　Yorkへ滑らかに戻る関数
//イベント登録を無制限制限
map.on('popupopen', function (e) {
  const NewcastleToYorkBtn = document.getElementById('NewcastleToYorkCard');
  if (NewcastleToYorkBtn) {
    const newBtn = NewcastleToYorkBtn.cloneNode(true);
    NewcastleToYorkBtn.parentNode.replaceChild(newBtn, NewcastleToYorkBtn);

    newBtn.addEventListener('click', () => {
      if (!animationRunning) {
        NewcastleToYork();
      }
    });
  }
  })

function NewcastleToYork() {
  if (animationRunning) return; // ← すでに動いていたら何もしない
  animationRunning = true;

  markerNewcastle.closePopup(); // ← 移動前にNewcastleのポップアップを閉じる

  // 🚄 アイコン付きマーカーを表示（初期位置）
  const trainIcon = L.icon({
    iconUrl: "image/icon/train_test.png",// アイコン画像のURL
    iconRetinaUrl:"image/icon/train_test@2x.png",
    iconSize: [40, 40],
    iconAnchor: [25, 25],
    className: "icon-train"
  });

  const trainMarker = L.marker(Newcastle_LNER1, { icon: trainIcon }).addTo(map);

  const fullPath = [...interpolatePolyline(LNER_YkNc, 30)].reverse();// ← 数字が少ないほどスピードアップ

  const NewcastleToYorkIndex = fullPath.findIndex(p => 
    Math.abs(p[0] - York_LNER2[0]) < 0.0001 && 
    Math.abs(p[1] - York_LNER2[1]) < 0.0001
  );

  const pathToNewcastleToYork = fullPath.slice(0, NewcastleToYorkIndex + 1);
  
// 最初にジャンプを防ぐ
  map.panTo(pathToNewcastleToYork[0], { animate: false });


  let frame = 0;

  function animate() {
   
   const index = frame;

    if (index < pathToNewcastleToYork.length) {
      trainMarker.setLatLng(pathToNewcastleToYork[index]); // ← マーカーを移動
      map.panTo(pathToNewcastleToYork[index], { animate: true, duration: 0.01 });
      frame++;
      requestAnimationFrame(animate); // ← 滑らかなアニメーション
    } else {
      setTimeout(() => {
        markerYork.openPopup();
        map.removeLayer(trainMarker); // アイコンを削除
        animationRunning = false;
      }, 100);

    }
  }
  animate();
}

// Newcastle　→　Durhamへ滑らかに戻る関数
//イベント登録を無制限制限
map.on('popupopen', function (e) {
  const NewcastleToDurhamBtn = document.getElementById('NewcastleToDurhamCard');
  if (NewcastleToDurhamBtn) {
    const newBtn = NewcastleToDurhamBtn.cloneNode(true);
    NewcastleToDurhamBtn.parentNode.replaceChild(newBtn, NewcastleToDurhamBtn);

    newBtn.addEventListener('click', () => {
      if (!animationRunning) {
        NewcastleToDurham();
      }
    });
  }
  })

function NewcastleToDurham() {
  if (animationRunning) return; // ← すでに動いていたら何もしない
  animationRunning = true;

  markerNewcastle.closePopup(); // ← 移動前にNewcastleのポップアップを閉じる

  // 🚄 アイコン付きマーカーを表示（初期位置）
  const trainIcon = L.icon({
    iconUrl: "image/icon/train_test.png",// アイコン画像のURL
    iconRetinaUrl:"image/icon/train_test@2x.png",
    iconSize: [40, 40],
    iconAnchor: [25, 25],
    className: "icon-train"
  });

  const trainMarker = L.marker(Newcastle_LNER1, { icon: trainIcon }).addTo(map);

  const fullPath = [...interpolatePolyline(LNER_YkNc, 40)].reverse();// ← 数字が少ないほどスピードアップ

  const NewcastleToDurhamIndex = fullPath.findIndex(p => 
    Math.abs(p[0] - Durham[0]) < 0.0001 && 
    Math.abs(p[1] - Durham[1]) < 0.0001
  );

  const pathToNewcastleToDurham = fullPath.slice(0, NewcastleToDurhamIndex + 1);
  
// 最初にジャンプを防ぐ
  map.panTo(pathToNewcastleToDurham[0], { animate: false });


  let frame = 0;

  function animate() {
   
   const index = frame;

    if (index < pathToNewcastleToDurham.length) {
      trainMarker.setLatLng(pathToNewcastleToDurham[index]); // ← マーカーを移動
      map.panTo(pathToNewcastleToDurham[index], { animate: true, duration: 0.03 });
      frame++;
      requestAnimationFrame(animate); // ← 滑らかなアニメーション
    } else {
      setTimeout(() => {
        markerDurham.openPopup();
        map.removeLayer(trainMarker); // アイコンを削除
        animationRunning = false;
      }, 100);

    }
  }
  animate();
}

// Durham → Darlington（途中駅→途中駅）
//イベント登録
map.on('popupopen', function (e) {
  const DurhamToDarlingtonBtn = document.getElementById('DurhamToDarlingtonCard');
  if (DurhamToDarlingtonBtn) {
    const newBtn = DurhamToDarlingtonBtn.cloneNode(true);
    DurhamToDarlingtonBtn.parentNode.replaceChild(newBtn, DurhamToDarlingtonBtn);

    newBtn.addEventListener('click', () => {
      if (!animationRunning) {
        goToDurhamToDarlington();
      }
    });
  }
});

function goToDurhamToDarlington() {
  if (animationRunning) return;
  animationRunning = true;

  markerDurham.closePopup();

  const trainIcon = L.icon({
    iconUrl: "image/icon/train_test.png",
    iconRetinaUrl: "image/icon/train_test@2x.png",
    iconSize: [40, 40],
    iconAnchor: [25, 25],
    className: "icon-train"
  });

  const trainMarker = L.marker(Durham, { icon: trainIcon }).addTo(map);

  const fullPath = [...interpolatePolyline(LNER_YkNc, 40)].reverse();

  const DurhamIndex = fullPath.findIndex(p =>
    Math.abs(p[0] - Durham[0]) < 0.0001 &&
    Math.abs(p[1] - Durham[1]) < 0.0001
  );

  const DarlingtonIndex = fullPath.findIndex(p =>
    Math.abs(p[0] - Darlington[0]) < 0.0001 &&
    Math.abs(p[1] - Darlington[1]) < 0.0001
  );

  if (DurhamIndex === -1 || DarlingtonIndex === -1) {
    animationRunning = false;
    return;
  }

  const start = Math.min(DurhamIndex, DarlingtonIndex);
  const end = Math.max(DurhamIndex, DarlingtonIndex);
  const pathToDurhamtoDarlington = fullPath.slice(start, end + 1);

  if (pathToDurhamtoDarlington.length === 0) {
    animationRunning = false;
    return;
  }

  

  map.panTo(pathToDurhamtoDarlington[0], { animate: false });

  let frame = 0;

  function animate() {
    if (frame < pathToDurhamtoDarlington.length) {
      trainMarker.setLatLng(pathToDurhamtoDarlington[frame]);
      map.panTo(pathToDurhamtoDarlington[frame], { animate: true, duration: 0.03 });
      frame++;
      requestAnimationFrame(animate); // ← 滑らかなアニメーション
    } else {
      setTimeout(() => {
        markerDarlington.openPopup();
        map.removeLayer(trainMarker);
        animationRunning = false;
      }, 100);
    }
  }

  animate();
}

// Darlington → York（途中駅→終着駅）
//イベント登録
map.on('popupopen', function (e) {
  const DarlingtonToYorkBtn = document.getElementById('DarlingtonToYorkCard');
  if (DarlingtonToYorkBtn) {
    const newBtn = DarlingtonToYorkBtn.cloneNode(true);
    DarlingtonToYorkBtn.parentNode.replaceChild(newBtn, DarlingtonToYorkBtn);

    newBtn.addEventListener('click', () => {
      if (!animationRunning) {
        DarlingtontoYork();
      }
    });
  }
});

function DarlingtontoYork() {
  if (animationRunning) return;
  animationRunning = true;

  markerDarlington.closePopup();

  const trainIcon = L.icon({
    iconUrl: "image/icon/train_test.png",
    iconRetinaUrl: "image/icon/train_test@2x.png",
    iconSize: [40, 40],
    iconAnchor: [25, 25],
    className: "icon-train"
  });

  const trainMarker = L.marker(Darlington, { icon: trainIcon }).addTo(map);

  const fullPath = [...interpolatePolyline(LNER_YkNc, 40)].reverse();

  const DarlingtonIndex = fullPath.findIndex(p =>
    Math.abs(p[0] - Darlington[0]) < 0.0001 &&
    Math.abs(p[1] - Darlington[1]) < 0.0001
  );

  const YorkIndex = fullPath.findIndex(p =>
    Math.abs(p[0] - York_LNER2[0]) < 0.0001 &&
    Math.abs(p[1] - York_LNER2[1]) < 0.0001
  );

  if (DarlingtonIndex === -1 || YorkIndex === -1) {
    animationRunning = false;
    return;
  }
  //Darlington → Newcastle（始発駅） のインデックスを使ってsliceを抽出し、正しいルートにする。
  //start、endの大きさはMathによって調整している。
  const start = Math.min(DarlingtonIndex, YorkIndex);
  const end = Math.max(DarlingtonIndex, YorkIndex);
  const pathToYork = fullPath.slice(start, end + 1);

  if (pathToYork.length === 0) {
    animationRunning = false;
    return;
  }

  map.panTo(pathToYork[0], { animate: false });

  let frame = 0;

  function animate() {
    if (frame < pathToYork.length) {
      trainMarker.setLatLng(pathToYork[frame]);
      map.panTo(pathToYork[frame], { animate: true, duration: 0.03 });
      frame++;
      requestAnimationFrame(animate); // ← 滑らかなアニメーション
    } else {
      setTimeout(() => {
        markerYork.openPopup();
        map.removeLayer(trainMarker);
        animationRunning = false;
      }, 100);
    }
  }

  animate();
}