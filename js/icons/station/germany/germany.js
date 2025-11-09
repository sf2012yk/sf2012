// Icons module

  //主要駅（station）アイコン：
    var stationIcon = L.icon({
    iconUrl: "image/icon/train.png",
    iconRetinaUrl:"image/icon/train@2x.png",
    shadowUrl: "https://esm.sh/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize:     [40, 40], // アイコンのサイズ
    shadowSize:   [41, 25], // size of the shadow
    iconAnchor:   [13, 41], // point of the icon which will correspond to marker's location
    shadowAnchor: [16, 28],  // the same for the shadow
    popupAnchor:  [0, -30], // point from which the popup should open relative to the iconAnchor
    className: "icon-station"
    });

     //通過駅等（station_2）アイコン：
    var station_2_Icon = L.icon({
    iconUrl: "image/icon/train_2.png",
    iconRetinaUrl:"image/icon/train_2@2x.png",
    shadowUrl: "https://esm.sh/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize:     [40, 40], // アイコンのサイズ
    shadowSize:   [41, 25], // size of the shadow
    iconAnchor:   [13, 41], // point of the icon which will correspond to marker's location
    shadowAnchor: [16, 28],  // the same for the shadow
    popupAnchor:  [0, -30], // point from which the popup should open relative to the iconAnchor
    className: "icon-station_2"
    });

//  Aachen
    var popupContent = `
      <div class="popup_summer">
    <a href="https://lh3.googleusercontent.com/pw/AP1GczN3mZ9e18C5QYpMPtVmv_6W_cpsKGekudcSyw0Af8ZhVNJkNirKLaI0RTctxYFdBjdXolvW8L89oO52v9EXpT_e5JLJggj_NTp4APAddZV6VfBFRl-Z-8_ncFSeelCIXbB2GzhYdsoBmTqUu-qZK6T9Gg=w1216-h913-s-no-gm?authuser=0" 
       data-lightbox="image" 
       data-title="Aachen">
      <img class="popup_img" loading="eager" src="https://lh3.googleusercontent.com/pw/AP1GczN3mZ9e18C5QYpMPtVmv_6W_cpsKGekudcSyw0Af8ZhVNJkNirKLaI0RTctxYFdBjdXolvW8L89oO52v9EXpT_e5JLJggj_NTp4APAddZV6VfBFRl-Z-8_ncFSeelCIXbB2GzhYdsoBmTqUu-qZK6T9Gg=w1216-h913-s-no-gm?authuser=0" alt="Aachen Station">
    </a>
    <div class="popup_caption">
    <a href="https://lh3.googleusercontent.com/pw/AP1GczN3mZ9e18C5QYpMPtVmv_6W_cpsKGekudcSyw0Af8ZhVNJkNirKLaI0RTctxYFdBjdXolvW8L89oO52v9EXpT_e5JLJggj_NTp4APAddZV6VfBFRl-Z-8_ncFSeelCIXbB2GzhYdsoBmTqUu-qZK6T9Gg=w1216-h913-s-no-gm?authuser=0" data-lightbox="image" data-title="Aachen Station" class="popup_link">Aachen Station</a>
    <p>
    駅の説明
    </p>
    </div>
    <a onclick="toggleSection('nextVisitSection')" class="popup_link">▼ Next Station</a>
    <div id="nextVisitSection" class="popup_section">
    <div class="next_card" id="AachenToCologneCard">
    <p class="next_text">▶ Cologne（50km）</span>
    </div>
    <div class="next_card" id="AachenToLiegeCard">
    <p class="next_text">◀ Liege（40km）</span>
    </div>
    </div>
  </div>
`;
var markerAachen = L.marker([50.767679838672564, 6.090875981954147], {
  icon: station_2_Icon //途中駅はstation_2_Iconで切り替え
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);



//  Cologne
    var popupContent = `
      <div class="popup_summer">
    <a href="https://lh3.googleusercontent.com/pw/AP1GczO6ko3iEVOlOGxcYCfq-EdD8GC831BCd4xsEIHF5NdpLtCZlbixBW22Kf2Lond9VTEF0tub1rpIQb1qOEFeOBwYoBGnBMSv_uPQg7KUCmx-u6FGsBzMrL8jovcdjKOQYNp2m4LEj71Mlzkw1z6Swd0dLA=w1216-h913-s-no-gm?authuser=0" 
       data-lightbox="image" 
       data-title="Cologne">
      <img class="popup_img" loading="eager" src="https://lh3.googleusercontent.com/pw/AP1GczO6ko3iEVOlOGxcYCfq-EdD8GC831BCd4xsEIHF5NdpLtCZlbixBW22Kf2Lond9VTEF0tub1rpIQb1qOEFeOBwYoBGnBMSv_uPQg7KUCmx-u6FGsBzMrL8jovcdjKOQYNp2m4LEj71Mlzkw1z6Swd0dLA=w1216-h913-s-no-gm?authuser=0" alt="Cologne Station">
    </a>
    <div class="popup_caption">
    <a href="https://lh3.googleusercontent.com/pw/AP1GczO6ko3iEVOlOGxcYCfq-EdD8GC831BCd4xsEIHF5NdpLtCZlbixBW22Kf2Lond9VTEF0tub1rpIQb1qOEFeOBwYoBGnBMSv_uPQg7KUCmx-u6FGsBzMrL8jovcdjKOQYNp2m4LEj71Mlzkw1z6Swd0dLA=w1216-h913-s-no-gm?authuser=0" data-lightbox="image" data-title="Cologne Station" class="popup_link">Cologne Station</a>
    <p>
    駅の説明
    </p>
    </div>
    <a onclick="toggleSection('nextVisitSection')" class="popup_link">▼ Next Station</a>
    <div id="nextVisitSection" class="popup_section">
    <div class="next_card" id="CologneToBrusselCard">
    <p class="next_text">◀ Brussel（230km）</span>
    </div>
    <div class="next_card" id="CologneToBaselCard">
    <p class="next_text">▼ Basel（480km）</span>
    </div>
    </div>
  </div>
`;
var markerCologne = L.marker([50.94325481600945, 6.9585388293166295], {
  icon: stationIcon //途中駅はstation_2_Iconで切り替え
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);

//  Mannheim
    var popupContent = `
      <div class="popup_summer">
    <a href="画像URLを貼る" 
       data-lightbox="image" 
       data-title="Mannheim">
      <img class="popup_img" loading="eager" src="画像URLを貼る" alt="Mannheim Station">
    </a>
    <div class="popup_caption">
    <a href="画像URLを貼る" data-lightbox="image" data-title="Mannheim Station" class="popup_link">Mannheim Station</a>
    <p>
    駅の説明
    </p>
    </div>
    <a onclick="toggleSection('nextVisitSection')" class="popup_link">▼ Next Station</a>
    <div id="nextVisitSection" class="popup_section">
    <div class="next_card" id="MannheimToCologneCard">
    <p class="next_text">▶ Cologne（250km）</span>
    </div>
    <div class="next_card" id="MannheimToKarlsruheCard">
    <p class="next_text">▶ Karlsruhe（60km）</span>
    </div>
    </div>
  </div>
`;
var markerMannheim = L.marker([49.47968211722923, 8.467507974305194], {
  icon: station_2_Icon 
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);

//  Karlsruhe
    var popupContent = `
      <div class="popup_summer">
    <a href="画像URLを貼る" 
       data-lightbox="image" 
       data-title="Karlsruhe">
      <img class="popup_img" loading="eager" src="画像URLを貼る" alt="Karlsruhe Station">
    </a>
    <div class="popup_caption">
    <a href="画像URLを貼る" data-lightbox="image" data-title="Karlsruhe Station" class="popup_link">Karlsruhe Station</a>
    <p>
    駅の説明
    </p>
    </div>
    <a onclick="toggleSection('nextVisitSection')" class="popup_link">▼ Next Station</a>
    <div id="nextVisitSection" class="popup_section">
    <div class="next_card" id="KarlsruheToMannheimCard">
    <p class="next_text">▶ Mannheim（60km）</span>
    </div>
    <div class="next_card" id="KarlsruheToOffenburgCard">
    <p class="next_text">▶ Offenburg（60km）</span>
    </div>
    </div>
  </div>
`;
var markerKarlsruhe = L.marker([48.993787878225646, 8.402638200453167], {
  icon: station_2_Icon 
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);

//  Offenburg
    var popupContent = `
      <div class="popup_summer">
    <a href="画像URLを貼る" 
       data-lightbox="image" 
       data-title="Offenburg">
      <img class="popup_img" loading="eager" src="画像URLを貼る" alt="Offenburg Station">
    </a>
    <div class="popup_caption">
    <a href="画像URLを貼る" data-lightbox="image" data-title="Offenburg Station" class="popup_link">Offenburg Station</a>
    <p>
    駅の説明
    </p>
    </div>
    <a onclick="toggleSection('nextVisitSection')" class="popup_link">▼ Next Station</a>
    <div id="nextVisitSection" class="popup_section">
    <div class="next_card" id="OffenburgToKarlsruheCard">
    <p class="next_text">▶ Karlsruhe（60km）</span>
    </div>
    <div class="next_card" id="OffenburgToFreiburgCard">
    <p class="next_text">▶ Freiburg（60km）</span>
    </div>
    </div>
  </div>
`;
var markerOffenburg = L.marker([48.476674609387295, 7.946440305878149], {
  icon: station_2_Icon 
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);

//  Freiburg
    var popupContent = `
      <div class="popup_summer">
    <a href="画像URLを貼る" 
       data-lightbox="image" 
       data-title="Freiburg">
      <img class="popup_img" loading="eager" src="画像URLを貼る" alt="Freiburg Station">
    </a>
    <div class="popup_caption">
    <a href="画像URLを貼る" data-lightbox="image" data-title="Freiburg Station" class="popup_link">Freiburg Station</a>
    <p>
    駅の説明
    </p>
    </div>
    <a onclick="toggleSection('nextVisitSection')" class="popup_link">▼ Next Station</a>
    <div id="nextVisitSection" class="popup_section">
    <div class="next_card" id="FreiburgToOffenburgCard">
    <p class="next_text">▶ Offenburg（60km）</span>
    </div>
    <div class="next_card" id="FreiburgToBaselCard">
    <p class="next_text">▶ Basel（50km）</span>
    </div>
    </div>
  </div>
`;
var markerFreiburg = L.marker([47.99764397378909, 7.841209835361019], {
  icon: station_2_Icon 
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);