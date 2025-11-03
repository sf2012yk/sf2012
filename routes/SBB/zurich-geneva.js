// Zurich Lyon module

// 鉄道ルート チューリッヒ⇔ベルン⇔ジュネーブ⇔リヨン駅　//
const Zurich_HB_3 = [47.37828613669217, 8.539567674375348];
const Aarau_2 = [47.39130707458747, 8.051470595831386];
const Olten_e_2 = [47.358776575085656, 7.925371665693845];
const Bern = [46.948380752911675, 7.43530795120567];
const Fribourg = [46.803290415343206, 7.150914818179362];
const Romont = [46.69358760965649, 6.911767779438169];
const Grandvaux = [46.49693410356502, 6.722628918803512];
const Bossière = [46.509697745589754, 6.699316196822455];
const Lausanne = [46.51675788314949, 6.6288213303053105];
const Morges = [46.511250548989395, 6.4938441327181184];
const Nyon = [46.38436387900231, 6.235928505138236];
const Geneva = [46.20996053976771, 6.141703085164053];

// チューリッヒ⇔ベルン⇔ジュネーブ⇔リヨンのルート
const SBB_Geneva = L.polyline
([Zurich_HB_3,Aarau_2,Olten_e_2,Bern,Fribourg,Romont,Grandvaux,Bossière,Lausanne,
  Morges,Nyon,Geneva], { color: '#000000' }).addTo(map);
