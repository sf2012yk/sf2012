// London Edinburgh module

// 鉄道ルート　ロンドン⇔エディンバラ　//
const Kingscross = [51.530637046098505, -0.1233642679259429];
const GoodswayLD = [51.53417772470422, -0.12335454874510957];
const RigentsCanal = [51.53539805062303, -0.12318758580150829];
const CopenhagenStLD = [51.53707444629562, -0.12321274330228785];
const CaledonianOC_s = [51.53935610191494, -0.12296937268783538];
const CaledonianOC = [51.54258699942883, -0.12226737996161705];
const BlundellSt = [51.5445930974789, -0.12123062046897216];
const CaledonianPark = [51.54679809699726, -0.12017091132175171];
const Caledonian_Road = [51.54856220208831, -0.11900567383390746];
const HollowayRd = [51.553285547709365, -0.11310481403010392];
const HornsleyRd = [51.55504706523929, -0.11103969252461648];
//カーブ南東//
const Arsenal_s = [51.556948533731116,-0.10927765146902062];
const Cn_Arsenal = [
(51.556948533731116 + 51.56224955921888) / 2 + 0.0009, //東//
(-0.10927765146902062 + -0.10668522326871413) / 2 + 0.0008 //南//
];
const Arsenal_n = [51.56224955921888,-0.10668522326871413];
const CP_Arsenal = adaptiveBezierCurve(Arsenal_s,Cn_Arsenal,Arsenal_n,1);
const CP_Arsenal_Un = resamplePath(CP_Arsenal, 5);
const FinsburyPark = [51.5657118907105, -0.10638142307634142];
const EndymionRd = [51.572373790977274, -0.10541906467565641];
//カーブ北東//
const Harringay_s = [51.57540982835663,-0.1049757934328904];
const Cn_Harringay = [
(51.57540982835663 + 51.579564641949624) / 2 + 0.0009, //東//
(-0.1049757934328904 + -0.1062516742304768) / 2 + 0.0004 //北//
];
const Harringay_n = [51.579564641949624,-0.1062516742304768];
const CP_Harringay = adaptiveBezierCurve(Harringay_s,Cn_Harringay,Harringay_n,1);
const CP_Harringay_Un = resamplePath(CP_Harringay, 5);
const HarringayLadder = [51.583639796715595, -0.11001050590469186];
const Hornsey = [51.58646856060271, -0.11167787881728777];
const Alexandra_s = [51.59307840963128, -0.11647026564838794];
const AlexandraPalace = [51.59809770267204, -0.12041788714255701];
const Alexandra_n = [51.59978436284875, -0.12230405960027772];
const DansfordRd = [51.6039764994342, -0.12882619787122365];
const NestNursery = [51.60655732337536, -0.13268017560317125];
const BinghamWay = [51.610302448917196, -0.13887493833912665];
const NewSouthgate = [51.61404672104186, -0.14308064208364893];
const OakleighRdNr = [51.62280730078915, -0.15163789044012058];
const RusellLn = [51.629380426603404, -0.1582568016999574];
const OakleighPark = [51.63759632728262, -0.1662607572833207];
const LongmoreAv = [51.643450325310894, -0.17025016081478916];
const NewBarnet = [51.64836878219244, -0.17274097425533713];
//カーブ南東//
const Cadent_s = [51.652651805209395,-0.17473140157341763];
const Cn_Cadent = [
(51.652651805209395 + 51.65652940430085) / 2 + 0.0009, //東//
(-0.17473140157341763 + -0.17538000219745115) / 2 - 0.0004 //南//
];
const Cadent_n = [51.65652940430085,-0.17538000219745115];
const CP_Cadent = adaptiveBezierCurve(Cadent_s,Cn_Cadent,Cadent_n,1);
const CP_Cadent_Un = resamplePath(CP_Cadent, 5);
const CarmetWay_s = [51.664192173887926, -0.1759401572994955];
const HadleyWood = [51.66846707699905, -0.1761533432963012];
//カーブ北東//
const WaggonRd_s = [51.67436461523965,-0.17658642984157008];
const Cn_WaggonRd = [
(51.67436461523965 + 51.67930150961244) / 2 + 0.0009, //東//
(-0.17658642984157008 + -0.17821955727116123) / 2 + 0.0004 //北//
];
const WaggonRd_n = [51.67930150961244,-0.17821955727116123];
const CP_WaggonRd = adaptiveBezierCurve(WaggonRd_s,Cn_WaggonRd,WaggonRd_n,1);
const CP_WaggonRd_Un = resamplePath(CP_WaggonRd, 5);
const OrbitalMoterway = [51.68380451976825, -0.18150764640678022];
const Orbital_n = [51.68863959602468, -0.1838323575447988];
const MuttonLn_s = [51.69178115264249, -0.18665451047367415];
const MuttonLn = [51.693954713471946, -0.18907909797401892];
const PottersBar = [51.69711013041446, -0.1927687794240103];
//カーブ南東//
const LittleAmberFish_s = [51.70459853965808,-0.19947810134059657];
const Cn_LittleAmberFish = [
(51.70459853965808 + 51.71322767874636) / 2  + 0.0009, //東//
(-0.19947810134059657 + -0.2040227067978585) / 2 - 0.0004 //南//
];
const LittleAmberFish_n = [51.71322767874636,-0.2040227067978585];
const CP_LittleAmberFish = adaptiveBezierCurve(LittleAmberFish_s,Cn_LittleAmberFish,LittleAmberFish_n,1);
const CP_LittleAmerFish_Un = resamplePath(CP_LittleAmberFish, 5);
const BrookmansPark = [51.721023182910734, -0.20490828285713258];
//カーブ北東//
const BullsLn_s = [51.727097691910366,-0.20534898651292854];
const Cn_BullsLn = [
(51.727097691910366 + 51.73370850020227) / 2 + 0.0009, //東//
(-0.20534898651292854 + -0.20801737865418343) / 2 + 0.0004 //北//
];
const BullsLn_n = [51.73370850020227,-0.20801737865418343];
const CP_BullsLn = adaptiveBezierCurve(BullsLn_s,Cn_BullsLn,BullsLn_n,1);
const CP_BullsLn_Un = resamplePath(CP_BullsLn, 5);
const WelhamGreen = [51.73626917934292, -0.2105631396584275];
//カーブ南東//
const Marshmoor_s = [51.74428113067621,-0.21923816204004581];
const Cn_Marshmoor = [
(51.74428113067621 + 51.752012919147994) / 2 + 0.0019, //東//
(-0.21923816204004581 + -0.2221564054923854) / 2 - 0.0019 //南//
];
const Marshmoor_n = [51.752012919147994,-0.2221564054923854];
const CP_Marshmoor = adaptiveBezierCurve(Marshmoor_s,Cn_Marshmoor,Marshmoor_n,1);
const CP_Marshmoor_Un = resamplePath(CP_Marshmoor, 4);
//カーブ北西//
const SouthHatfield_s = [51.75456991615299, -0.2213517400564659];
const Cn_SouthHatfield = [
(51.75456991615299 + 51.75879370337697) / 2 + 0.0004, //西//
(-0.2213517400564659 + -0.2183476659563911) / 2 - 0.0005 //北//
];
const SouthHatfield_n = [51.75879370337697, -0.2183476659563911];
const CP_SouthHatfield = adaptiveBezierCurve(SouthHatfield_s,Cn_SouthHatfield,SouthHatfield_n,1);
const CP_SouthHatfield_Un = resamplePath(CP_SouthHatfield, 4);
const FrenchHornLn = [51.76159074903815, -0.21655898755288852];
const Hatfield = [51.7640201976442, -0.21587531157025294];
const StAlbansRd = [51.76749851519949, -0.21582056582925466];
const TheRide = [51.773717920223525, -0.21611965918013498];
//カーブ北西//
const MountPlesantLn_s = [51.77620352743587,-0.21619923891896392];
const Cn_MountPlesantLn = [
(51.77620352743587 + 51.780816964206274) / 2 + 0.0005, //西//
(-0.21619923891896392 + -0.21465806157524714) / 2 - 0.0009 //北//
];
const MountPlesantLn_n = [51.780816964206274,-0.21465806157524714];
const CP_MountPlesantLn = adaptiveBezierCurve(MountPlesantLn_s,Cn_MountPlesantLn,MountPlesantLn_n,1);
const CP_MountPlesantLn_Un = resamplePath(CP_MountPlesantLn, 4);
const BroadWaterRd = [51.79375927544913, -0.20740066443388228];
const WelwynGardenCity = [51.800775840621924, -0.20357423677631697];
const Knightsfield = [51.81125124574285, -0.198424987608798];
const BesemmerRd = [51.817226422025314, -0.19546509372135923];
const DigswellViaduct = [51.819352582088726, -0.19439851668780572];
const WelwynNorth = [51.82345189755962, -0.19217443101549173];
const HarmerGreen = [51.83053084987354, -0.1887356724494744];
const HarmerGreen_n = [51.83706519508093, -0.18561903075853303];
//カーブ北西//
const Oaklands_s = [51.84186298681036,-0.1831306289171839];
const Cn_Oaklands = [
(51.84186298681036 + 51.84589301957807) / 2 - 0.0009, //西//
(-0.1831306289171839 + -0.18270147548328894) / 2 + 0.0004 //北//
];
const Oaklands_n = [51.84589301957807,-0.18270147548328894];
const CP_Oaklands = adaptiveBezierCurve(Oaklands_s,Cn_Oaklands,Oaklands_n,1);
const CP_Oaklands_Un = resamplePath(CP_Oaklands, 4);
const MadleyHill = [51.84876291067397, -0.18327674639242833];
const WoolmerGreen_n = [51.856070242882645, -0.18530539292309794];
const StockensGreen_n = [51.863690046303574, -0.18583408241832503];
const Knebworth = [51.86668942800769, -0.18688472758644295];
const DeardsEndLn = [51.87196525475005, -0.18917683309508762];
const OldKnebworthLn = [51.88272007192122, -0.1941929184101113];
const StevenageJn = [51.8865212966234, -0.19668200829317548];
const BroadHallwaySN = [51.88939910053389, -0.19934088514194362];
const BandQStevenage = [51.893493547920535, -0.20249944441204198];
const SixHillsWay = [51.89837402646039, -0.2052716691826452];
const Stevenage = [51.901855651815815, -0.20733225151144705];//Stevenage駅
const FairLandsWay_n = [51.906352846400665, -0.20965806672997034];
const BridgeRdSN = [51.91132942648321, -0.21242223168042476];
const GunnelsWoodRd = [51.91632606129364, -0.21545241129065248];
const TheJohnHenry = [51.92032633141929, -0.21886832032978337];
const SainsburysSN = [51.923939295911275, -0.22213925118071126];
const ChantryLn_s = [51.92775712322811, -0.22572205220947086];
const ChantryLn_n = [51.92954742534501, -0.22792778933853228];
const StevenageRd = [51.932137032489194, -0.23199255009315936];
const ArchRd = [51.93738577921772, -0.24023582051957904];
const WymondleyRd = [51.94495318449094, -0.2522043465994154];
const Benslow = [51.94962963691356, -0.2590147330982249];
const Hitchin = [51.953349946551555, -0.26317412833830567];//Hitchin駅
const HitchinJn = [51.95683598004548, -0.26718048874014194];//ケンブリッジ分岐
const GroveRd = [51.958738613690926, -0.2689713260322374];
const GroveRd_n = [51.960981352875685, -0.2705971401955654];
const BurymeadSprings_s = [51.96329517358989, -0.27167002378582006];
const BurymeadSprings = [51.96582040728681, -0.272185007906494];
const Cadwell_s = [51.971452640654185, -0.27186248247081063];
const Cadwell = [51.97698800769427, -0.2715016088680973];
const Cadwell_n = [51.98241155926434, -0.2709242111334475];
const BlueLagoon = [51.99482451069023, -0.2698204229746242];
const RiverHiz = [52.01330787168917, -0.2681243170898349];
const ChurchEnd = [52.023146258903274, -0.2671499583847777];
const Arlesey = [52.02592905734658, -0.26633436178277803];//Arlesey駅
const Arlesey_n = [52.031428904570504, -0.2649941239894962];
const Langford = [52.04721505162846, -0.26360039818854486];
const Langford_n = [52.05968642612026, -0.2625177774289391];
const Holme_HCI = [52.07454790607464, -0.26123550980790494];
const Biggleswade = [52.0848759772164, -0.2609362592867028];//Biggleswade駅
const Sandy = [52.124694445461316, -0.2814199048123873];//Sandy駅
const TempsFordRd = [52.15741808685826, -0.27924277230789923];
const UK_A428_STN = [52.209630624656384, -0.261798234294277];
const StNeots = [52.23156740318316, -0.2471412462561285];//StNeots駅
const PrioryHill = [52.23697316705209, -0.24469027828433243];
const HuntingdonRd = [52.24623628642839, -0.24089618179772765];
const LittlePaxton = [52.25114186125479, -0.2372202674775722];
const GreatPaxton = [52.26085998784985, -0.23159896809911998];
const GreatPaxton_n = [52.26862389684521, -0.22707565875779356];
const OffordDArcy_s = [52.274384443798276, -0.22246367437143275];
const OffordDArcy_c = [52.28058115151515, -0.21976000763688933];
const OffordDArcy_n = [52.28520186094738, -0.2170134256599613];
const OffordCluny_c = [52.28879832980788, -0.21589762667920995];
const OffordCluny_n = [52.291968257084484, -0.21435899132861644];
const HuntingdonRd_A14 = [52.29940958254944, -0.20982496559148955];
const AlansRest_s = [52.314698100796775, -0.20053635736831035];
const AlansRest = [52.32172857119067, -0.19650231485882902];
const AlansRest_n = [52.32626630389599, -0.19358407150834298];
const Huntingdon = [52.32874887039262, -0.19246427476458233];//Huntingdon駅
const ErmineSt  = [52.33621656165476, -0.19039438877081613];
const SpittalsWay = [52.35336146925281, -0.18619649868294907];
const AbbotsRipton = [52.379954149791836, -0.19759981126982365];
const AbbotsRipton_n = [52.38936885837463, -0.20345897698753176];
const Wennington = [52.400812797027776, -0.21043272039578606];
const Wennington_n = [52.41142440030727, -0.21719242582483525];
const Conington = [52.460345959254106, -0.2365647779993113];
const LongDrove = [52.47432001620297, -0.23752529150595394];
const Yaxley_n = [52.52428146726928, -0.24194520587193155];
const FlettonPkwy = [52.5483329389774, -0.24500584886667656];
const HighSt_PT  = [52.55794589647585, -0.24370098240272728];
const LondonRd_PT = [52.56320353301759, -0.24315475928077296];
const OundleRd  = [52.56601657096413, -0.2438982296822507];
const Peterborough = [52.57388879556104, -0.24981606095851133];//Peterborough駅
const UK_A47_PT = [52.59734183761748, -0.26611646150946927];
const WoodCroftRd = [52.63124889897061, -0.3185894714363961];
const UK_B1443 = [52.6361374529963, -0.33011617988184183];
const MaxeyRd = [52.63974947526968, -0.34306542939464324];
const KingSt_PT = [52.64892370199979, -0.358858968374386];
const UK_A1175 = [52.66362664337394, -0.3814642978095853];
const CasewickRd_1 = [52.677561341109126, -0.41101104830399093];
const Essendine = [52.70036200875801, -0.4541774869842249];
const Careby = [52.736194754528015, -0.4888654590426432];
const LittleBytham = [52.75122583675206, -0.49706569328451167];
const CounthorpeRd = [52.77150739528051, -0.5101105860154728];
const SwayfieldBridge = [52.79666417062453, -0.5266550330541889];
const FormerCorbyGlen = [52.809394172786575, -0.5402269805874976];
const GR_TN1 = [52.84552251817095, -0.5912112679411755];
const GR_TN2 = [52.84988140742909, -0.6009909423065503];
const GreatPonton = [52.863152084910546, -0.6155853700531125];
const WhalebornRd = [52.879300605190906, -0.6187009625307927];
const UK_B1174_GR = [52.90033996991311, -0.6346840762414938];
//カーブを敷く//
const Grantham = [52.90650086402263, -0.6430994930013065]; //Grantham駅
const Cn_Grantham = [
(52.90650086402263 + 52.91603744458935) / 2 - 0.0009, 
(-0.6430994930013065 + -0.6484915335581686) / 2 - 0.0034 
];
const GranthamJNN = [52.91603744458935, -0.6484915335581686];
const Cp_Grantham = adaptiveBezierCurve(Grantham,Cn_Grantham,GranthamJNN,1);
const Cp_Grantham_Un = resamplePath(Cp_Grantham, 5);
//カーブを敷く//
const Barkston_S = [52.961075210531085, -0.642336450622161];
const Cn_Barkston = [
(52.961075210531085 + 52.9705095687634) / 2 + 0.0009, 
(-0.642336450622161 + -0.644353471797429) / 2 + 0.0024 
];
const Barkston_N = [52.9705095687634, -0.644353471797429];
const Cp_Barkston = adaptiveBezierCurve(Barkston_S,Cn_Barkston,Barkston_N,1);
const Cp_Barkston_Un = resamplePath(Cp_Barkston, 4);
//カーブを敷く//
const Gelston_S = [52.98591559384667, -0.653685074802814];
const Cn_Gelston = [
(52.98591559384667 + 52.99599027284791) / 2 + 0.0009, 
(-0.653685074802814 + -0.6660876091147059) / 2 + 0.0024 
];
const Gelston_N = [52.99599027284791, -0.6660876091147059];
const Cp_Gelston = adaptiveBezierCurve(Gelston_S,Cn_Gelston,Gelston_N,0.1);
const Cp_Gelston_Un = resamplePath(Cp_Gelston, 5);
const Claypole = [53.030569258216104, -0.7238844549406901];
const Balderton = [53.056763994640214, -0.7677105831740022];
const BarnbyRd = [53.069866532861006, -0.789466481510494];
const BeaconHillRd = [53.07569848839279, -0.7961413758008421];
const Newark = [53.08220565263308, -0.7994596920140059];//Newark駅
//カーブを敷く//
const EastMarkham_S = [53.24620310615411, -0.8818858455019757]; 
const Cn_EastMarkham = [
(53.24620310615411 + 53.25783437685533) / 2 + 0.0009, 
(-0.8818858455019757 + -0.8902543375537485) / 2 + 0.0044 
];
const EastMarkham_N = [53.25783437685533, -0.8902543375537485];
const Cp_EastMarkham = adaptiveBezierCurve(EastMarkham_S,Cn_EastMarkham,EastMarkham_N,1);
const Cp_EastMarkham_Un = resamplePath(Cp_EastMarkham, 4);
//カーブを敷く//
const Askham_S = [53.26852481202694, -0.9094139952708921];
const Cn_Askham = [
(53.26852481202694 + 53.27841564265329) / 2 - 0.0009, 
(-0.9094139952708921 + -0.9168059395357023) / 2 - 0.0044 
];
const Askham_N = [53.27841564265329, -0.9168059395357023];
const CP_Askham  = adaptiveBezierCurve(Askham_S,Cn_Askham,Askham_N,0.1);
const CP_Askham_Un = resamplePath(CP_Askham , 5);
//カーブを敷く//
const Eaton_S = [53.29380041683506, -0.9161203029994059];
const Cn_Eaton = [
(53.29380041683506 + 53.30482892791034) / 2 + 0.0009, 
(-0.9161203029994059 + -0.9259908322135225) / 2 + 0.0044 
];
const Eaton_N = [53.30482892791034, -0.9259908322135225];
const Cp_Eaton = adaptiveBezierCurve(Eaton_S,Cn_Eaton,Eaton_N,0.1);
const Cp_Eaton_Un = resamplePath(Cp_Eaton, 5);
const Retford = [53.31476215756098, -0.9475803806420339]; //Retford駅
const BotanyBay_S = [53.332806651497506, -0.9705146372391867];
//カーブを敷く//
const Torworth_S = [53.36007912861025, -0.9966066140776947];
const Cn_Torworth = [
(53.36007912861025 + 53.369867102510554) / 2 - 0.0009, 
(-0.9966066140776947 + -1.0021859206712784) / 2 + 0.0004 
];
const Torworth_N = [53.369867102510554, -1.0021859206712784];
const CP_Torworth = adaptiveBezierCurve(Torworth_S,Cn_Torworth,Torworth_N,0.5);
const CP_Torworth_Un = resamplePath(CP_Torworth, 5);
const Ranskill = [53.38782144113041, -1.0084628469848025];
//カーブを敷く//
const Scrooby_N = [53.42026198632827, -1.0180929755546055];
const Cn_Bawtry_S = [
(53.42026198632827 + 53.425838046517434) / 2 - 0.0009, 
(-1.0180929755546055 + -1.0181651680060868) / 2 + 0.0004 
];
const BawtryViaduct = [53.425838046517434, -1.0181651680060868];
const CP_Bawtry_S = adaptiveBezierCurve(Scrooby_N,Cn_Bawtry_S,BawtryViaduct,0.1);
const CP_Bawtry_S_Un = resamplePath(CP_Bawtry_S, 5);
//カーブを敷く//
const Bawtry = [53.431523637858945, -1.0158062030811665];
const Cn_Bawtry_N = [
(53.431523637858945 + 53.44528320999086) / 2 + 0.0009, 
(-1.0158062030811665 + -1.0219465529449119) / 2 + 0.0064 
];
const GreatNorthRoadBridge = [53.44528320999086, -1.0219465529449119];
const CP_Bawtry_N = adaptiveBezierCurve(Bawtry,Cn_Bawtry_N,GreatNorthRoadBridge,0.1);
const CP_Bawtry_N_Un = resamplePath(CP_Bawtry_N, 5);
53.44592220412242, -1.0228048597903658
const UK_A638_RO = [53.458590885273686, -1.0436954255541075];
const Rossington = [53.47800412342622, -1.0663083637276787];
//カーブを敷く//
const UK_M18_DS = [53.488510287750266, -1.0786788869396353];
const Cn_Rossington = [
(53.488510287750266 + 53.49879956371667) / 2 + 0.0004, 
(-1.0786788869396353 + -1.100658960677102) / 2 + 0.0054 
];
const ChildersWood = [53.49879956371667, -1.100658960677102];
const CP_Rossinton = adaptiveBezierCurve(UK_M18_DS,Cn_Rossington,ChildersWood,0.5);
const CP_Rossinton_Un = resamplePath(CP_Rossinton, 4);
//カーブを敷く//
const Hitachi_Doncaster = [53.5044917477512, -1.1243806528763256];
const Cn_Doncaster = [
(53.5044917477512 + 53.51546152650434) / 2 - 0.0039, 
(-1.1243806528763256 + -1.1398992090672357) / 2 - 0.0064 
];
const UK_A630_DS = [53.51546152650434, -1.1398992090672357];
const CP_Doncaster = adaptiveBezierCurve(Hitachi_Doncaster,Cn_Doncaster,UK_A630_DS,0.5);
const CP_Doncaster_Un = resamplePath(CP_Doncaster, 8);
const Doncaster = [53.52214542204585, -1.1404633953040075];
const UK_A19_DS = [53.52943203519044, -1.1396176832331226];
const DoncasterJn = [53.533328020619365, -1.1394963003053156];
const Arksey = [53.55145046180734, -1.1333361169335185];
const Haywood = [53.60117944482645, -1.1170299790054647];
const MossRd = [53.62248029819512, -1.1128166728307354];
const Fenwick = [53.63925732423812, -1.1097131599488588];
const BalneRd = [53.669448981767566, -1.1035654612883519];
//カーブを敷く//
const TempleHirstCr_S = [53.71466440385547, -1.0895603075527749];
const Cn_TempleHirst = [
(53.71466440385547 + 53.735771335807094) / 2 + 0.0050, 
(-1.0895603075527749 + -1.1007507427674896) / 2 + 0.0062
];
const TempleHirstCr_N = [53.735771335807094, -1.1007507427674896];
const CP_TempleHirst = adaptiveBezierCurve(TempleHirstCr_S, Cn_TempleHirst, TempleHirstCr_N, 1);
const CP_TempleHirst_Un = resamplePath(CP_TempleHirst, 5);
const GateforthRd = [53.75892267285599, -1.1341880691788337];
const Hambleton = [53.77681153020014, -1.1542485890355603];
//カーブを敷く//
const Sclam_S = [53.78351982224479, -1.1613852273642258];
const Corner_Sclam = [
(53.78351982224479 + 53.795558368923025) / 2 - 0.0010, 
(-1.1613852273642258 + -1.168508436766995) / 2 - 0.0030 
];
const SclamLn = [53.795558368923025, -1.168508436766995];
const CP_Sclam_S = adaptiveBezierCurve(Sclam_S, Corner_Sclam, SclamLn, 1);
const CP_Sclam_S_Un = resamplePath(CP_Sclam_S, 5);
//カーブを敷く//
const Oakwood = [53.83101355788982, -1.1680476990000108];
const Corner_Oakwood = [
(53.83101355788982 + 53.8486381952248) / 2 - 0.0009, 
(-1.1680476990000108 + -1.173176818393485) / 2 + 0.0014 
];
const UK_B1223_BP = [53.8486381952248, -1.173176818393485];
const CP_Oakwood = adaptiveBezierCurve(Oakwood,Corner_Oakwood,UK_B1223_BP,1);
const CP_Oakwood_Un = resamplePath(CP_Oakwood, 5);
//カーブを敷く//
const BoltonPercy = [53.862501657718454, -1.180452778905907];
const CP_bolton = [　
(53.862501657718454 + 53.890318222024135) / 2 + 0.0035, 
(-1.180452778905907 + -1.16823452715311) / 2 - 0.0110 
];
const YorkSouthJc = [53.890318222024135, -1.16823452715311];
const CP_BoltonPercy = adaptiveBezierCurve(BoltonPercy,CP_bolton,YorkSouthJc,1);
const CP_BoltonPercy_Un = resamplePath(CP_BoltonPercy, 5);
//カーブを敷く//
const Copman_S = [53.91071138496761, -1.139511540990051];
const Copman_C = [　
(53.91071138496761 + 53.91617314419756) / 2 - 0.0009, 
(-1.139511540990051 + -1.1327409175330667) / 2 - 0.0004 
];
const Copman_N = [53.91617314419756, -1.1327409175330667];
const CP_Copman = adaptiveBezierCurve(Copman_S,Copman_C,Copman_N,1);
const CP_Copman_Un = resamplePath(CP_Copman, 2);
const UK_A64_YK = [53.92478664555398, -1.1243782718194328];
const MoorLane = [53.93327581682382, -1.1164292388483623];
const StHelensRd = [53.94321757436504, -1.1105289557092228];
const UK_A59_YK = [53.95256236541704, -1.1012364606400304];
const York_LNER1 = [53.95668456824942, -1.0946599488952553]; //York駅


// ロンドン・ヨークのルート
const LNER_KnYk = L.polyline([
Kingscross,GoodswayLD,RigentsCanal,CopenhagenStLD,CaledonianOC_s,CaledonianOC,BlundellSt,
CaledonianPark,Caledonian_Road,HollowayRd,HornsleyRd,...CP_Arsenal_Un,
FinsburyPark,EndymionRd,...CP_Harringay_Un,HarringayLadder,Hornsey,Alexandra_s,
AlexandraPalace,Alexandra_n,DansfordRd,NestNursery,BinghamWay,NewSouthgate,
OakleighRdNr,RusellLn,OakleighPark,LongmoreAv,NewBarnet,...CP_Cadent_Un,CarmetWay_s,
HadleyWood,...CP_WaggonRd_Un,OrbitalMoterway,Orbital_n,MuttonLn_s,MuttonLn,
PottersBar,LittleAmberFish_s,...CP_LittleAmerFish_Un,BrookmansPark,...CP_BullsLn_Un,
WelhamGreen,...CP_Marshmoor_Un,...CP_SouthHatfield_Un,FrenchHornLn,Hatfield,StAlbansRd,TheRide,
...CP_MountPlesantLn_Un,BroadWaterRd,WelwynGardenCity,Knightsfield,BesemmerRd,DigswellViaduct,
WelwynNorth,HarmerGreen,HarmerGreen_n,...CP_Oaklands_Un,MadleyHill,WoolmerGreen_n,StockensGreen_n,
Knebworth,DeardsEndLn,OldKnebworthLn,StevenageJn,BroadHallwaySN,BandQStevenage,SixHillsWay,
Stevenage,FairLandsWay_n,BridgeRdSN,GunnelsWoodRd,TheJohnHenry,SainsburysSN,
ChantryLn_s,ChantryLn_n,StevenageRd,ArchRd,WymondleyRd,Benslow,Hitchin,HitchinJn,
GroveRd,GroveRd_n,BurymeadSprings_s,BurymeadSprings,Cadwell_s,Cadwell,Cadwell_n,BlueLagoon,RiverHiz,ChurchEnd,
Arlesey,Arlesey_n,Langford,Langford_n,Holme_HCI,
Biggleswade,
Sandy,TempsFordRd,UK_A428_STN,
StNeots,PrioryHill,HuntingdonRd,LittlePaxton,GreatPaxton,GreatPaxton_n,OffordDArcy_s,OffordDArcy_n,OffordDArcy_n,
OffordCluny_c,OffordCluny_n,HuntingdonRd_A14,AlansRest_s,AlansRest,AlansRest_n,
Huntingdon,ErmineSt,SpittalsWay,AbbotsRipton,AbbotsRipton_n,Wennington,Wennington_n,
Conington,LongDrove,Yaxley_n,FlettonPkwy,HighSt_PT,LondonRd_PT,OundleRd,
Peterborough,UK_A47_PT,WoodCroftRd,UK_B1443,MaxeyRd,KingSt_PT,UK_A1175,CasewickRd_1,
Essendine,Careby,LittleBytham,CounthorpeRd,SwayfieldBridge,FormerCorbyGlen,
GR_TN1,GR_TN2,GreatPonton,
...Cp_Grantham_Un,...Cp_Barkston_Un,...Cp_Gelston_Un,Claypole,Balderton,BarnbyRd,BeaconHillRd,
Newark,...Cp_EastMarkham_Un,...CP_Askham_Un,...Cp_Eaton_Un,
Retford,BotanyBay_S,...CP_Torworth_Un,Ranskill,...CP_Bawtry_S_Un,...CP_Bawtry_N_Un,UK_A638_RO,Rossington,...CP_Rossinton_Un,...CP_Doncaster_Un,
Doncaster,UK_A19_DS,DoncasterJn,Arksey,Haywood,MossRd,Fenwick,BalneRd,
...CP_TempleHirst_Un,GateforthRd,Hambleton,...CP_Sclam_S_Un,...CP_Oakwood_Un,...CP_BoltonPercy_Un,...CP_Copman_Un,
UK_A64_YK,MoorLane,StHelensRd,UK_A59_YK,
York_LNER1],
 { 
  color: '#000000' 
}).addTo(map);


// 始発駅（KingsCross） → 終着駅（York）へ滑らかに移動する関数
//イベント登録を無制限制限
map.on('popupopen', function (e) {
  const YorkBtn = document.getElementById('KingsCrossToYorkCard');
  if (YorkBtn) {
    const newBtn = YorkBtn.cloneNode(true);
    YorkBtn.parentNode.replaceChild(newBtn, YorkBtn);

    newBtn.addEventListener('click', () => {
      if (!animationRunning) {
        goToYork();
      }
    });
  }
  })

function goToYork() {
  if (animationRunning) return; // ← すでに動いていたら何もしない
  animationRunning = true;

  markerKingscross.closePopup(); // ← 移動前にKingsCross（始発）のポップアップを閉じる

  // 🚄 アイコン付きマーカーを表示（初期位置）
  const trainIcon = L.icon({
    iconUrl: "image/icon/train_test.png",// アイコン画像のURL
    iconRetinaUrl:"image/icon/train_test@2x.png",
    iconSize: [40, 40],
    iconAnchor: [25, 25],
    className: "icon-train"
  });

  const trainMarker = L.marker(Kingscross, { icon: trainIcon }).addTo(map);

  const fullPath = interpolatePolyline(LNER_KnYk , 60);// ← 数字が少ないほどスピードアップ

  const YorkIndex = fullPath.findIndex(p => 
    Math.abs(p[0] - York_LNER1[0]) < 0.0001 && 
    Math.abs(p[1] - York_LNER1[1]) < 0.0001
  );

  const pathToYork = fullPath.slice(0, YorkIndex + 1);
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
        map.panTo(path[frame], { animate: true, duration: 0.02 });

        frame++;
        setTimeout(animate, segmentDuration);
      } else {
        markerYork.openPopup();
        map.removeLayer(trainMarker);
        animationRunning = false;
      }
    }

    animate();
  }

  // ✅ 呼び出し
  animatePath(pathToYork, 1500);
}

// York　→　Kingscrossへ滑らかに戻る関数
//イベント登録を無制限制限
map.on('popupopen', function (e) {
  const YorkToKingscrossBtn = document.getElementById('YorkToLondonCard');
  if (YorkToKingscrossBtn) {
    const newBtn = YorkToKingscrossBtn.cloneNode(true);
    YorkToKingscrossBtn.parentNode.replaceChild(newBtn, YorkToKingscrossBtn);

    newBtn.addEventListener('click', () => {
      if (!animationRunning) {
        YorkToKingscross();
      }
    });
  }
  })

function YorkToKingscross() {
  if (animationRunning) return; // ← すでに動いていたら何もしない
  animationRunning = true;

  markerYork.closePopup(); // ← 移動前にYorkのポップアップを閉じる

  // 🚄 アイコン付きマーカーを表示（初期位置）
  const trainIcon = L.icon({
    iconUrl: "image/icon/train_test.png",// アイコン画像のURL
    iconRetinaUrl:"image/icon/train_test@2x.png",
    iconSize: [40, 40],
    iconAnchor: [25, 25],
    className: "icon-train"
  });

  const trainMarker = L.marker(York_LNER1, { icon: trainIcon }).addTo(map);

  const fullPath = [...interpolatePolyline(LNER_KnYk, 50)].reverse();// ← 数字が少ないほどスピードアップ

  const YorkToKingscrossIndex = fullPath.findIndex(p => 
    Math.abs(p[0] - Kingscross[0]) < 0.0001 && 
    Math.abs(p[1] - Kingscross[1]) < 0.0001
  );

  const pathToYorkToKingscross = fullPath.slice(0, YorkToKingscrossIndex + 1);
  
// 最初にジャンプを防ぐ
  map.panTo(pathToYorkToKingscross[0], { animate: false });


  let frame = 0;

  function animate() {
   
   const index = frame;

    if (index < pathToYorkToKingscross.length) {
      trainMarker.setLatLng(pathToYorkToKingscross[index]); // ← マーカーを移動
      map.panTo(pathToYorkToKingscross[index], { animate: true, duration: 0.25 });
      frame++;
      setTimeout(animate, 5); // ← 速度調整（数字が少ないほどスピードアップ）
    } else {
      setTimeout(() => {
        markerKingscross.openPopup();
        map.removeLayer(trainMarker); // アイコンを削除
        animationRunning = false;
      }, 100);

    }
  }
  animate();
}
