// ニューカッスル・カーライル
const Newcastle_NTH = [54.96814759160355, -1.6176357599706133];
//カーブ北西//
const PotteryLn_n_NTH = [54.967566644288254,-1.618788844937472];
const Cn_PotteryLn_NTH = [
(54.965366935721256 + 54.967566644288254) / 2 - 0.0009, //西//
(-1.618701106879188 + -1.618788844937472) / 2 - 0.0014 //北//
];
const PotteryLn_s_NTH = [54.965366935721256,-1.618701106879188];
const CP_PotteryLn_NTH = adaptiveBezierCurve(PotteryLn_n_NTH,Cn_PotteryLn_NTH,PotteryLn_s_NTH,0.01);
const CP_PotteryLn_NTH_Un = resamplePath(CP_PotteryLn_NTH, 5);

//カーブ北西//
const KingEdward_Bd_n_NTH = [54.962401114879036,-1.6153462999806965];
const Cn_KingEdward_Bd_NTH = [
(54.96045355192529 + 54.962401114879036) / 2 - 0.0009, //西//
(-1.6152741252638652 + -1.6153462999806965) / 2 + 0.0004 //北//
];
const KingEdward_Bd_s_NTH = [54.96045355192529,-1.6152741252638652];
const CP_KingEdward_Bd_NTH = adaptiveBezierCurve(KingEdward_Bd_n_NTH,Cn_KingEdward_Bd_NTH,KingEdward_Bd_s_NTH,0.4);
const CP_KingEdward_Bd_NTH_Un = resamplePath(CP_KingEdward_Bd_NTH, 6);
const Tyne_Rd_NC_NTH = [54.958593191695414, -1.6172818841657346];
const Dunston = [54.950088839200944, -1.6415414319873984];
const Metrocentre = [54.958953940680416, -1.6653147523278675];
const Blaydon = [54.96599199753817, -1.7128327503149041];
const Wylam = [54.974971380449986, -1.8139533095604448];
const Prudhoe = [54.965865186158375, -1.8647289298564227];
const Stocksfield = [54.947016117030415, -1.9167071088489442];
const RidingMill = [54.948783366543395, -1.9716375626595626];
const Corbridge = [54.9662300828727, -2.0188559731709717];
const Hexham = [54.973411146998664, -2.0946647513553582];
const HaydonBridge = [54.97505994812026, -2.2482591684889726];
const BardonMill = [54.97442878041, -2.343049870790689];
const Haltwhistle = [54.96792005649873, -2.463670659685489];
const Brampton = [54.93195124630741, -2.704647207806789];
const Wetheral = [54.88377222054592, -2.8311524556083767];
const Carlisle_NTH = [54.89053256020592, -2.933184282739173];

// ルート
const NTH_NcCr = L.polyline([
Newcastle_NTH,...CP_PotteryLn_NTH_Un,...CP_KingEdward_Bd_NTH_Un,Tyne_Rd_NC_NTH,
Metrocentre,Blaydon,Wylam,Prudhoe,Stocksfield,RidingMill,
Corbridge,
Hexham,HaydonBridge,BardonMill,
Haltwhistle,Brampton,Wetheral,
Carlisle_NTH], { color: '#000000' }).addTo(map);