// Zurich Vienna module

// 鉄道ルート インスブルック⇔ザルツブルク駅　//
const Innsbruck_2  = [47.26253050680029, 11.40060390583582];
const Hall_in_Tirol  = [47.27707581431055, 11.501074309764629];
const Jenbach  = [47.38837302608748, 11.778372688590245];
const Lichtwerth = [47.411592439853194, 11.833802587321323];
const BrixleggBf = [47.4347991444112, 11.87959275447542];
const RattenbergTirol = [47.43919149658563, 11.895851215249097];
const SanktLeonhard = [47.46463469631762, 11.956509231714623];
const WorglWestE45 = [47.48193642898433, 12.027647731462693];
const Worgl = [47.49175194905508, 12.060460691226407];
const Kufstein = [47.584727906701055, 12.165245690490806];
const Kiefersfelden = [47.60992747347554, 12.190446759883232];
const Oberaudorf = [47.65288189669135, 12.175328896312646];

const Rosenheim_s  = [47.84303687217366, 12.135119726085021];
const Bad_Endorf  = [47.90502755099685, 12.301802923105058];
const Bernau_am_Chiemsee  = [47.816423960753774, 12.380691633224618];
const Traunstein  = [47.869424463486446, 12.638755797984915];
const Freilassing  = [47.837379179240685, 12.97584064061125];
const Salzburg_2  = [47.812680660648525, 13.045783626953863];

// チューリッヒ⇔ウィーンのルート
const OBB_innsbruck = L.polyline
([Innsbruck_2,Hall_in_Tirol,
  Jenbach,Lichtwerth,BrixleggBf,RattenbergTirol,SanktLeonhard,WorglWestE45,
  Worgl,Kufstein,Kiefersfelden,Oberaudorf,

  Rosenheim_s,Bad_Endorf,Bernau_am_Chiemsee,Traunstein,Freilassing,Salzburg_2
  ], { color: '#000000' }).addTo(map);
