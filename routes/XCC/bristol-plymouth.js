// 鉄道ルート　
const Bristol_xcc2 = [51.44953427862961, -2.5807735188100613];
const BathRdBR = [51.4463031497384, -2.5800046218778365];
const StLakesRd = [51.443631805295674, -2.5846009763320774];
const StLakesRd_w = [51.442496273893035, -2.588725231421629];
const Bedminster = [51.44061976267359, -2.5936444242766075];
const Yatton = [51.39095521696614, -2.82781084509594];
const Worle = [51.357981107061484, -2.9091447146089506];
const WorleJn = [51.353175967760855, -2.920758464714589];
const FlowerDoenBd = [51.34535459084132, -2.937455177744318];
const BrentKnoll = [51.25223166919879, -2.9704156276708757];
const Edithmead_n = [51.242626047452134, -2.970531740799147];
const Edithmead_c = [51.236978367109344, -2.970511718976605];
const Edithmead_s = [51.22951509842492, -2.9707371702841345];
const BristolRdHB = [51.22504235576984, -2.971027173503061];
const HighbridgeBurnham = [51.218396984331406, -2.971991966025969];
const Bridgwater = [51.12794507643236, -2.990337295441282];
const TauntonJn = [51.04129733472127, -3.000106140197984];//分岐点
const UK_M5_xcc = [51.024637341868356, -3.0557984543843935];
const UK_A38_xcc  = [51.02631088744768, -3.07051841746681];
const UK_A358_xcc  = [51.024178455910395, -3.090087814455394];
const Taunton_xcc = [51.02331377215021, -3.1035371321110854];//Taunton駅



//路線
const XCC_BrPl = L.polyline([
Bristol_xcc2,BathRdBR,StLakesRd,StLakesRd_w,Bedminster,
Yatton,Worle,WorleJn,FlowerDoenBd,Edithmead_n,Edithmead_c,Edithmead_s,BristolRdHB,
HighbridgeBurnham,
Bridgwater,TauntonJn,UK_M5_xcc,UK_A38_xcc,UK_A358_xcc,
Taunton_xcc], { color: '#000000'}).addTo(map);