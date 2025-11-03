
// 鉄道ルート
const Hitchin_gnh = [51.953349946551555, -0.26317412833830567];//Hitchin駅
const Letchworth = [51.9802054974817, -0.22947034698203328];
const Baldock = [51.99296729953065, -0.18755136402490863];
const Meldreth = [52.0906212899309, 0.008928663254142091];
const Foxton = [52.11936992751131, 0.05607564255849643];
const Cambridge_gnh = [52.19423832124076, 0.13776144634136725]; //Cambridge駅


//路線
const GNH_KnCm = L.polyline([
Hitchin_gnh,Letchworth,Baldock,Meldreth,Foxton,Cambridge_gnh], { color: '#000000'}).addTo(map);