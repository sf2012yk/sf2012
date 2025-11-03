// Zurich Lyon module

// 鉄道ルート チューリッヒ⇔ベルン⇔ジュネーブ　//
const Geneve = [46.20996053976771, 6.141703085164053];
const Satigny = [46.21422506886462, 6.037404860013276];
const Bellegarde = [46.11076233811534, 5.825413285468206];
const Seyssel_Corbonod = [45.962828193299586, 5.831458102288957];
const Culoz = [45.8432056007908, 5.777067005467854];
const Virieu_le_Grand_Belley = [45.847926468620045, 5.6533291119145295];
const Tenay_Hauteville = [45.92220250589081, 5.5015698216704845];
const St_Rambert_en_Bugey = [45.94693798852725, 5.438226773553548];
const Ambérieu_en_Bugey = [45.953674432872056, 5.342142369077729];
const Meximieux_Pérouges = [45.90170972237614, 5.19244984690583];
const A432 = [45.83621926756377, 5.018075437055525];
const D48 = [45.790829036787, 4.861913702448458];
const Lyon_Part_Dieu_3 = [45.7603030076784, 4.860375801911088];
 

// チューリッヒ⇔ベルン⇔ジュネーブ⇔リヨンのルート
const Swiss_France = L.polyline
([Geneve,Satigny,Bellegarde,Seyssel_Corbonod,Culoz,Virieu_le_Grand_Belley,Tenay_Hauteville,St_Rambert_en_Bugey,
  Ambérieu_en_Bugey,Meximieux_Pérouges,A432,D48,Lyon_Part_Dieu_3], { color: '#000000' }).addTo(map);
