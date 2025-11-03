// 鉄道ルート　
const Peterborough_gra = [52.57388879556104, -0.24981606095851133];//Peterborough駅

const Whittlesea = [52.54953036137664, -0.11941341234650549];

const March = [52.5600314308198, 0.09122608134209999];
const Manea = [52.497486672330815, 0.17815329624809456];
const Ely_gra = [52.39089200685495, 0.2666843691393502];//Ely駅

const Waterbeach = [52.2618224815899, 0.1963510299068268];

const CambridgeNorth = [52.22373958649597, 0.1583032385694405];


const Cambridge_gra = [52.19423832124076, 0.13776144634136725]; //Cambridge駅


// ロンドン・ヨークのルート
const GRA_PtCm = L.polyline([
Peterborough_gra,
Whittlesea,
March,Manea,Ely_gra,Waterbeach,
CambridgeNorth,Cambridge_gra], { color: '#000000' }).addTo(map);