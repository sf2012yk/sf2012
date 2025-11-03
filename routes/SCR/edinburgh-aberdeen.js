
// 鉄道ルート
const Edinburgh_SCR = [55.95227339041507, -3.1886484442399126];
const SouthGyle = [55.93652242814026, -3.2993367538115934];
const Dalmeny = [55.98621752873315, -3.3815126276113596];
const NorthQueensferry = [56.01243322267585, -3.39476313166167];
const Inverkeithing = [56.03551252120041, -3.3954377232006077];
const Leuchars = [56.37516261971971, -2.8936452076285235];
const Dundee = [56.457693270640426, -2.9693679285883796];
const Arbroath = [56.55922363089709, -2.5895868110811118];
const Montrose = [56.712829461265535, -2.472225823682804];
const Laurencekirk = [56.83659541438617, -2.4659918952039117];
const Stonehaven = [56.966777246548226, -2.225531146494416];
const Aberdeen = [57.1419491653465, -2.0975924191865976];
const SCR_EdAb = L.polyline([
Edinburgh_SCR,Dalmeny,NorthQueensferry,Inverkeithing,Leuchars,
Dundee,Arbroath,
Montrose,Laurencekirk,Stonehaven,
Aberdeen], { color: '#000000' }).addTo(map);