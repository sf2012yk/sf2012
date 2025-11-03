
// 鉄道ルート　ロンドン⇔エディンバラ　//
const Leyland = [53.69889183721045, -2.6868560633314407];
const Preston = [53.755888528479566, -2.7073275847086293];
const BlackpoolRd = [53.772753255808844, -2.7183793994243803];
const LythamRd = [53.77650468126729, -2.7200291868171282];
const CadleyCauseway = [53.779949893801906, -2.7215951200786277];
const LightfootLn = [53.79612044837105, -2.7285900768992977];
const PrestonNorthBp = [53.799064669856826, -2.729805029720272];
const NewshamHallLn = [53.809979511852426, -2.734622320310969];
const Newsham = [53.82053194090107, -2.7381095169189664];
const BilsborrowLn = [53.85197842175335, -2.741053860114706];
const LiverBrock = [53.85894484333843, -2.7425675837122148];
const NewLn_PR = [53.86952035218597, -2.7449827131102844];
const StubbinsLn = [53.880369996788396, -2.7469354135415744];
const RayLn_PR = [53.888261767463646, -2.747884811040896];
const DelphLn = [53.90715571538636, -2.754178515505581];

//カーブ北東//
const GubbefFordLn_s = [53.92449945493444,-2.759682669705619];
const Cn_GubbefFordLn = [
(53.92449945493444 + 53.92851941011744) / 2 + 0.0009, //東//
(-2.759682669705619 + -2.761984423075716) / 2 + 0.0004 //北//
];
const GubbefFordLn_n = [53.92851941011744,-2.761984423075716];
const CP_GubbefFordLn = adaptiveBezierCurve(GubbefFordLn_s,Cn_GubbefFordLn,GubbefFordLn_n,1);
const CP_GubbefFordLn_Un = resamplePath(CP_GubbefFordLn,5);
const Scorton_s = [53.93142404492519, -2.7646591346477987];
const Scorton = [53.93437721023345, -2.7673295991948206];
const Lancaster = [54.04888707581833, -2.807851033775735];
const Carnforth = [54.129584506196146, -2.771089297535842];
const PyesBridgeLn = [54.210211009940686, -2.7429296279895725];
const MilnthoupeRd = [54.21354303134459, -2.744258550208862];
const Whassett = [54.22108792241193, -2.746518790742742];
const Ackenthwaite = [54.22921338439095, -2.7490682611083654];
const Sedgwick = [54.276957503078656, -2.7418872681499677];
const BurtonRd_OH = [54.298787208388816, -2.7277926236059047];
const OxenholmeRd = [54.30363023768309, -2.7230209357722424];
const Oxenholme = [54.30554314645306, -2.7215110331335843];
const SedberghRd = [54.3278884855491, -2.718325323625976];
const GreatStrickland = [54.59480661466263, -2.697461885375786];
const ALDIPenrith = [54.65987723833353, -2.7604416664300864];
const Penrith = [54.66191706256666, -2.7589880515411784];
const MorrisonsPenrith = [54.663582834702204, -2.7584525473084884];
const BoothsPenrith = [54.66531284456619, -2.758795819659333];
const ThackaBeck_s  = [54.667161904271474, -2.760061822305451];
const ThackaBeck  = [54.67127989042848, -2.764991880284674];
const ThackaBeck_n  = [54.67838739392663, -2.7735093577666037];
const Plumpton = [54.724023790277364, -2.7965857440885977];
const Carlisle = [54.89053256020592, -2.933184282739173];
const Mossband = [54.97979380520386, -3.023163068870734];
const GretnaJn = [54.99897834959738, -3.0460794882574658];
const Quintinshill = [55.01551618733901, -3.0713213345044412];
const Kirkpatrick = [55.02279914767543, -3.131304365908379];
const Kirtlebridge_S = [55.043844791540565, -3.198346927547721];
const Lockerbie = [55.122331767767974, -3.3536889724212826];
const Beattock = [55.30530280374644, -3.4535887287133473];
const Crawford = [55.47027346719285, -3.6522636100937067];
const ColdChapel = [55.50568131324779, -3.6854885931404455];
const Symington_S = [55.59800214103136, -3.6038148587285055];
const Symington_N = [55.61280053587207, -3.6092631528532726];
const CarstairsJN_S = [55.68777895007009, -3.6610845519347905];
const CarstairsJN_N = [55.69095478056962, -3.659914899844746];
const Cobbinshaw = [55.80346314028655, -3.578001078132754];
const Harburn_N = [55.83607124793345, -3.5345306372260983];
const OakbankJN = [55.88287135345338, -3.457384079493228];
const Kirknewton = [55.88888847875926, -3.4336248911016742];
const Curriehill = [55.90056076198539, -3.318748886065423];
const WesterHailes = [55.91426209929671, -3.2843375715807523];
const Kingsknowe = [55.918852798476976, -3.264742135558641];
const Slateford = [55.92629383429861, -3.244316690337709];
const HaymarketJN_AWC = [55.94414245063276, -3.224143856319947];
const Haymarket_AWC = [55.94555705143157, -3.2180811802638956];
const CastleED = [55.94912016399582, -3.2040386314504907];
const Edinburgh_AWC = [55.95227339041507, -3.1886484442399126];
const avw_LdEd = L.polyline([
Leyland,
Preston,BlackpoolRd,LythamRd,CadleyCauseway,LightfootLn,
PrestonNorthBp,NewshamHallLn,Newsham,BilsborrowLn,LiverBrock,NewLn_PR,
StubbinsLn,RayLn_PR,DelphLn,...CP_GubbefFordLn_Un,
Lancaster,Carnforth,PyesBridgeLn,MilnthoupeRd,Whassett,Sedgwick,BurtonRd_OH,OxenholmeRd,
Oxenholme,SedberghRd,GreatStrickland,ALDIPenrith,
Penrith,MorrisonsPenrith,BoothsPenrith,ThackaBeck_s,ThackaBeck,ThackaBeck_n,Plumpton,
Carlisle,Mossband,GretnaJn,Quintinshill,Kirkpatrick,Kirtlebridge_S,
Lockerbie,Beattock,Crawford,ColdChapel,Symington_S,Symington_N,CarstairsJN_S,
CarstairsJN_N,Cobbinshaw,Harburn_N,OakbankJN,Kirknewton,Curriehill,WesterHailes,Kingsknowe,Slateford,
HaymarketJN_AWC,Haymarket_AWC,CastleED,
Edinburgh_AWC], { color: '#000000' }).addTo(map);