// 鉄道ルート　
const Peterborough_xcc = [52.57388879556104, -0.24981606095851133];//Peterborough駅
const Bainton = [52.645290310503825, -0.3862189979933188];
const Stamford = [52.64787251795713, -0.48015331892615637];
const Pilton = [52.61918346725273, -0.6473318699009305];
const Oakham = [52.67226067229538, -0.7343588761439259];
const MeltonMowbray = [52.761087095912394, -0.8859391157521557];
const Syston = [52.6940551744918, -1.0825275065897855];
const Leicester = [52.63102076256686, -1.1248363580407335];
const Hinckley = [52.53517352098986, -1.3714493766275169];
const Nuneaton_XCC = [52.526665019268165, -1.4636891847737274];
const ColeshillParkway = [52.51657717266119, -1.7084311104037397];
const WaterOrton = [52.518635906796355, -1.7430104187790971];
const Birmingham_xcc = [52.47781931496408, -1.89936569926818];


// ロンドン・ヨークのルート
const XCC_PtBg = L.polyline([
Peterborough_xcc,Bainton,
Stamford,Pilton,Oakham,MeltonMowbray,Syston,
Leicester,Hinckley,
Nuneaton_XCC,ColeshillParkway,WaterOrton,
Birmingham_xcc], { color: '#000000' }).addTo(map);