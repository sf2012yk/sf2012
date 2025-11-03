// 鉄道ルート
const York_TPE = [53.95668456824942, -1.0946599488952553]; //York駅
const Ulleskelf = [53.85361980430283, -1.214101132593846];
const ChurchFenton = [53.82702456122147, -1.2274416849720335];
const Micklefield = [53.78880785491498, -1.3270164558265671];
const CrossGates = [53.804782340169574, -1.4521480317575879];

const Leeds_TPE = [53.7946841310327, -1.5475408292829431];


// ルート
const TPE_YkLd = L.polyline([
York_TPE,Ulleskelf,ChurchFenton,Micklefield,CrossGates,
Leeds_TPE], { color: '#000000' }).addTo(map);
