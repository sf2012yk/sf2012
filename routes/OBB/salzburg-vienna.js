// Zurich Vienna module

// 鉄道ルート ザルツブルク⇔ウィーン駅　//
const Salzburg  = [47.812680660648525, 13.045783626953863];
const Neumarkt_am_Wallersee  = [47.812680660648525, 13.045783626953863];
const Vöcklabruck  = [48.009831982474296, 13.66448467947427];
const Wels  = [48.16636798232817, 14.02726211324162];
const Linz  = [48.29032317252522, 14.291723983454574];
const Amstetten  = [48.12143389693978, 14.878069288084664];
const St_Pölten  = [48.20798813157282, 15.624624784784572];
const Tullnerfeld  = [48.295175135348565, 15.99635392438884];
const Meidling  = [48.174882700977655, 16.335360420988106];
const Vienna = [48.18500525586605, 16.377671700808875];

// ザルツブルク⇔ウィーンのルート
const OBB_Salzburg = L.polyline
([Salzburg,Neumarkt_am_Wallersee,Vöcklabruck,Wels,
  Linz,Amstetten,St_Pölten,Tullnerfeld,Meidling,Vienna], { color: '#000000' }).addTo(map);
