
const 場所あ_n = [];
const 場所あ_c = [];
const 場所あ_s = [];

const 場所い_w = [];
const 場所い_c = [];
const 場所い_e = [];


const 場所う = [];
const 場所う_2 = [];

//カーブ北東//
const 場所_s = [経度A,緯度A];
const Cn_場所 = [
(経度A + 経度C) / 2 + 0.0009, //東//
(緯度A + 緯度C) / 2 + 0.0004 //北//
];
const 場所_n = [経度C,緯度C];
const CP_場所 = adaptiveBezierCurve(場所_s,Cn_場所,場所_n,数値);
const CP_場所_Un = resamplePath(CP_場所, 数値y);

//カーブ北西//
const 場所_s = [経度A,緯度A];
const Cn_場所 = [
(経度A + 経度C) / 2 - 0.0009, //西//
(緯度A + 緯度C) / 2 + 0.0004 //北//
];
const 場所_n = [経度C,緯度C];
const CP_場所 = adaptiveBezierCurve(場所_s,Cn_場所,場所_n,数値);
const CP_場所_Un = resamplePath(CP_場所, 数値y);

//カーブ南東//
const 場所_s = [経度A,緯度A];
const Cn_場所 = [
(経度A + 経度C) / 2 + 0.0009, //東//
(緯度A + 緯度C) / 2 - 0.0004 //南//
];
const 場所_n = [経度C,緯度C];
const CP_場所 = adaptiveBezierCurve(場所_s,Cn_場所,場所_n,数値);
const CP_場所_Un = resamplePath(CP_場所, 数値y);




