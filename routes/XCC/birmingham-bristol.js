// 鉄道ルート　
const Birmingham_xcc2 = [52.47781931496408, -1.89936569926818];
const FiveWays = [52.47124779761741, -1.9130262219387666];
const Bromsgrove = [52.32019033127115, -2.0501409367085177];
const SaltWay = [52.26369980741437, -2.107549955217846];
const HayLn = [52.25110863853326, -2.1133196057019057];
const DeenBruck = [52.2453694825767, -2.115933319168772];
const Saleway = [52.2408951239947, -2.1181489003081877];
const Dunhampstead = [52.23771902024288, -2.120420632576449];
const OddingleyChurch = [52.22943975975007, -2.1238129555561964];
const OldTpkeRd = [52.2068508671062, -2.138542476230294];
const BredictLn = [52.19423081733283, -2.139546182110452];
const Spetchley = [52.182641564525305, -2.142600931056385];
const WorcestershireParkway = [52.156075140502516, -2.160435534102246];
const RebeccaRd = [52.10958891134409, -2.145224157775896];
const HarpleyRd = [52.086187349656115, -2.12526575060456];
const Eckington_n = [52.07167125726882, -2.116992160312448];
const Bredon = [52.03051628920657, -2.108807144424432];
const Kinsham_n = [52.02381749895692, -2.1088178685568724];
const Kinsham_c = [52.014801046356915, -2.1086013444063787];
const Kinsham_s = [52.00627149763234, -2.108745693840041];
const Ashchurch = [51.99898696463105, -2.1087804007064403];
const Fiddington_n = [51.98968829844845, -2.108848277010232];
const Fiddington_c = [51.977901373631205, -2.108695171305033];
const Fiddington_s = [51.9690041204961, -2.1086951713009956];
const StokeOrchard = [51.95043878598453, -2.099093559568034];
const TewkesburyRd = [51.91050353312041, -2.093970620695404];
const CheltenhamSpa = [51.89742711288771, -2.0998422953431235];
const GloucesterAR_s = [51.883378850346084, -2.151160054515553];
const BarnwoodJn = [51.864665497805234, -2.214800989517361];
const HuntsGrove = [51.804411940316, -2.264683813663355];
const Haresfield = [51.79146956871391, -2.2710567535598227];
const CamDursley = [51.71762742212558, -2.359479300788884];
const UpperWick  = [51.663359705161916, -2.4160493586743237];
const Yate = [51.541143641857275, -2.432344491690351];
const WesterleighJn = [51.52015104422286, -2.442599548887875];
const BadmintonRd = [51.51952532783115, -2.4787979602811556];
const HickscommonRd = [51.517382003176564, -2.4990925817588763];
const BristolParkway = [51.51396664038052, -2.5433889678058605];
const Bristol_xcc = [51.44953427862961, -2.5807735188100613];

//路線
const XCC_BgBr = L.polyline([
Birmingham_xcc2,FiveWays,Bromsgrove,SaltWay,HayLn,
DeenBruck,Saleway,Dunhampstead,OddingleyChurch,OldTpkeRd,BredictLn,Spetchley,
WorcestershireParkway,RebeccaRd,HarpleyRd,Eckington_n,Bredon,
Kinsham_n,Kinsham_c,Kinsham_s,Ashchurch,Fiddington_n,Fiddington_c,Fiddington_s,
StokeOrchard,TewkesburyRd,
CheltenhamSpa,GloucesterAR_s,BarnwoodJn,HuntsGrove,Haresfield,CamDursley,UpperWick,
Yate,WesterleighJn,BadmintonRd,HickscommonRd,
BristolParkway,
Bristol_xcc], { color: '#000000' }).addTo(map);