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

// GW_01 Paddington駅：
    var popupContent = `
     <div class="popup_summer">
    <a href="image/map/station/Paddington.jpg" 
       data-lightbox="image" 
       data-title="Paddington">
      <img class="popup_img" loading="eager" src="image/map/station/Paddington.jpg" alt="Paddington Station">
    </a>
    <div class="popup_caption">
    <a href="image/map/station/Paddington.jpg" data-lightbox="image" data-title="Paddington Station" class="popup_link">Paddington Station</a>
    <p>
    ヴィクトリア様式の美しい駅舎を持つ、ロンドン西部のターミナル駅。映画『パディントン』の舞台として知られている。
    </p>
    </div>
    <a onclick="toggleSection('nextVisitSection')" class="popup_link">▼ Next Station</a>
    <div id="nextVisitSection" class="popup_section">
    <div class="next_card" id="PaddingtonToWindsorCard">
    <p class="next_text">◀ Windsor (35km)</span>
    </div>
    <div class="next_card" id="goToBristolCard">
    <p class="next_text">◀ Bristol (190km)</span>
    </div>
    <div class="next_card" id="goToPlymouthCard">
    <p class="next_text">◀ Plymouth (360km)</span>
    </div>
    </div>
  </div>
`;
var markerPaddington = L.marker([51.516894337841045, -0.17712164609673156], {
  icon: stationIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);


// GW_01 Paddington空港専用
    var popupContent = `
     <div class="popup_summer">
    <a href="image/map/station/Paddington_airport.JPG" 
       data-lightbox="image" 
       data-title="Paddington">
      <img class="popup_img" loading="eager" src="image/map/station/Paddington_airport.JPG" alt="Paddington Station">
    </a>
    <div class="popup_caption">
    <a href="image/map/station/Paddington_airport.JPG" data-lightbox="image" data-title="Paddington Station" class="popup_link">Paddington (&#x2708; Access)</a>
    <p>
    ヴィクトリア様式の美しい駅舎を持つ、ロンドン西部のターミナル駅。パディントン駅からロンドン・ヒースロー空港へ直接アクセスすることが可能だ。
    </p>
    </div>
    <a onclick="toggleSection('nextVisitSection')" class="popup_link">▼ Next Station</a>
    <div id="nextVisitSection" class="popup_section">
    <div class="next_card" id="goToHeathrowTerminal3Card">
    <p class="next_text">&#x2708; Terminal3 (23km)</span>
    </div>
    <div class="next_card" id="goToHeathrowTerminal5Card">
    <p class="next_text">&#x2708; Terminal5 (25km)</span>
    </div>
    </div>
  </div>
`;
var markerPaddingtonLHR = L.marker([51.51820949995243, -0.1781408423165258], {
  icon: AirportIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);
  
//  Slough
    var popupContent = `
      <div class="popup_summer">
    <a href="image/map/station/Slough.JPG" 
       data-lightbox="image" 
       data-title="Slough">
      <img class="popup_img" loading="eager" src="image/map/station/Slough.JPG" alt="Slough Station">
    </a>
    <div class="popup_caption">
    <a href="image/map/station/Slough.JPG" data-lightbox="image" data-title="Slough Station" class="popup_link">Slough Station</a>
    <p>
    Slough駅の説明
    </p>
    </div>
    <a onclick="toggleSection('nextVisitSection')" class="popup_link">▼ Next Station</a>
    <div id="nextVisitSection" class="popup_section">
    <div class="next_card" id="SloughToLondonCard">
    <p class="next_text">▶ London（30km）</span>
    </div>
    <div class="next_card" id="SloughToReadingCard">
    <p class="next_text">◀ Reading（27km）</span>
    </div>
    <div class="next_card" id="SloughToWindsorCard">
    <p class="next_text">▼ Windsor（5km）</span>
    </div>
    </div>
  </div>
`;
var markerSlough = L.marker([51.511845860102135, -0.591373216810744], {
  icon: station_2_Icon //途中駅はstation_2_Iconで切り替え
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);

//  Windsor
    var popupContent = `
      <div class="popup_summer">
    <a href="image/map/station/Windsor.JPG" 
       data-lightbox="image" 
       data-title="Windsor">
      <img class="popup_img" loading="eager" src="image/map/station/Windsor.JPG" alt="Windsor Station">
    </a>
    <div class="popup_caption">
    <a href="image/map/station/Windsor.JPG" data-lightbox="image" data-title="Windsor Station" class="popup_link">Windsor Station</a>
    <p>
    駅の説明
    </p>
    </div>
    <a onclick="toggleSection('nextVisitSection')" class="popup_link">▼ Next Station</a>
    <div id="nextVisitSection" class="popup_section">
    <div class="next_card" id="WindsorToPaddingtonCard">
    <p class="next_text">▶ London（35km）</span>
    </div>
    <div class="next_card" id="WindsorToSloughCard">
    <p class="next_text">▲ Slough（5km）</span>
    </div>
    </div>
  </div>
`;
var markerWindsor = L.marker([51.48317195088449, -0.6100296685527282], {
  icon: stationIcon //途中駅はstation_2_Iconで切り替え
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .openPopup()
  .addTo(map);

//  GW_03 Reading駅：
    var popupContent = `
      <div class="popup_summer">
    <a href="image/map/station/Reading.JPG" 
       data-lightbox="image" 
       data-title="Reading">
      <img class="popup_img" loading="eager" src="image/map/station/Reading.JPG" alt="Reading Station">
    </a>
    <div class="popup_caption">
    <a href="image/map/station/Reading.JPG" data-lightbox="image" data-title="Reading Station" class="popup_link">Reading Station</a>
    <p>
    レディング駅は実質乗換専用駅。
    </p>
    </div>
    <a onclick="toggleSection('nextVisitSection')" class="popup_link">▼ Next Station</a>
    <div id="nextVisitSection" class="popup_section">
    <div class="next_card" id="RedingToPaddingtonCard">
    <p class="next_text">▶ London（57km）</span>
    </div>
    <div class="next_card" id="RedingToBathSpaCard">
    <p class="next_text">◀ Bath（120km）</span>
    </div>
    <div class="next_card" id="RedingToPlymouthCard">
    <p class="next_text">▼ Plymouth（300km）</span>
    </div>
    </div>
  </div>
`;
var markerReading = L.marker([51.45934668763566, -0.9732287208600584], {
  icon: station_2_Icon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .openPopup()
  .addTo(map);


//  GWR Bath Spa
    var popupContent = `
      <div class="popup_summer">
    <a href="image/map/station/BathSpa.JPG" 
       data-lightbox="image" 
       data-title="Bath Spa">
      <img class="popup_img" loading="eager" src="image/map/station/BathSpa.JPG" alt="Bath Spa Station">
    </a>
    <div class="popup_caption">
    <a href="image/map/station/BathSpa.JPG" data-lightbox="image" data-title="Bath Spa Station" class="popup_link">Bath Spa Station</a>
    <p>
    Bath Spaの説明
    </p>
    </div>
    <a onclick="toggleSection('nextVisitSection')" class="popup_link">▼ Next Station</a>
    <div id="nextVisitSection" class="popup_section">
    <div class="next_card" id="BathSpaToBristolCard">
    <p class="next_text">◀ Bristol（20km）</span>
    </div>
    <div class="next_card" id="BathSpaToReadingCard">
    <p class="next_text">▶ Reading（115km）</span>
    </div>
    <div class="next_card" id="BathSpaToPaddingtonCard">
    <p class="next_text">▶ London（170km）</span>
    </div>
    </div>
  </div>
`;
var markerBathSpa = L.marker([51.37779463871984, -2.3569100502506695], {
  icon: stationIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .openPopup()
  .addTo(map);

// GW_06 Bristol_Temple_Meads駅：
    var popupContent = `
      <div class="popup_summer">
    <a href="image/map/station/Bristol.JPG" 
       data-lightbox="image" 
       data-title="Bristol Temple Meads">
      <img class="popup_img" loading="eager" src="image/map/station/Bristol.JPG" alt="Bristol Temple Meads Station">
    </a>
    <div class="popup_caption">
    <a href="image/map/station/Bristol.JPG" data-lightbox="image" data-title="Bristol Temple Meads Station" class="popup_link">Bristol Temple Meads Station</a>
    <p>
    ブリストルの代表駅。
    </p>
    </div>
    <a onclick="toggleSection('nextVisitSection')" class="popup_link">▼ Next Station</a>
    <div id="nextVisitSection" class="popup_section">
    <div class="next_card">
    <p class="next_text">▲ Birmingham（150km）</span>
    </div>
    <div class="next_card" id="BristoltoPaddingtonCard">
    <p class="next_text">▶ London（192km）</span>
    </div>
    <div class="next_card">
    <p class="next_text">▼ Plymouth（200km）</span>
    </div>
    </div>
  </div>
`;
var markerBristol = L.marker([51.44953427862961, -2.5807735188100613], {
  icon: stationIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .openPopup()
  .addTo(map);

// GW_06 Taunton駅：
    var popupContent = `
     <div class="popup_summer">
    <a href="image/map/station/Taunton.JPG" 
       data-lightbox="image" 
       data-title="Taunton Station">
      <img class="popup_img" loading="eager" src="image/map/station/Taunton.JPG" alt="Paddington Station">
    </a>
    <a href="image/map/station/Taunton.JPG" data-lightbox="image" data-title="Paddington Station" class="popup_link">Paddington Station</a>
  </div>
`;
var marker = L.marker([51.02331377215021, -3.1035371321110854], {
  icon: station_2_Icon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .openPopup()
  .addTo(map);

// GW_06 Exeter St Davids駅：
    var popupContent = `
     <div class="popup_summer">
    <a href="image/map/station/Exeter.JPG" 
       data-lightbox="image" 
       data-title="Exeter St Davids Station">
      <img class="popup_img" loading="eager" src="image/map/station/Exeter.JPG" alt="Exeter St Davids Station">
    </a>
    <a href="image/map/station/Exeter.JPG" data-lightbox="image" data-title="Exeter St Davids Station" class="popup_link">Exeter St Davids Station</a>
  </div>
`;
var marker = L.marker([50.7294333305537, -3.543730040076946], {
  icon: stationIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .openPopup()
  .addTo(map);

// GW_06 Dawlish駅：
    var popupContent = `
     <div class="popup_summer">
    <a href="image/map/station/Dawlish.JPG" 
       data-lightbox="image" 
       data-title="Dawlish Station">
      <img class="popup_img" loading="eager" src="image/map/station/Dawlish.JPG" alt="Dawlish Station">
    </a>
    <a href="image/map/station/Dawlish.JPG" data-lightbox="image" data-title="Dawlish Station" class="popup_link">Dawlish Station</a>
  </div>
`;
var marker = L.marker([50.58064708288686, -3.4645937602425056], {
  icon: stationIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .openPopup()
  .addTo(map);


// GW_06 Plymouth駅：
    var popupContent = `

     <div class="popup_summer">
    <a href="image/map/station/Plymouth.JPG" 
       data-lightbox="image" 
       data-title="Plymouth Station">
      <img class="popup_img" loading="eager" src="image/map/station/Plymouth.JPG" alt="Plymouth Station">
    </a>
    <div class="popup_caption">
    <a href="image/map/station/Plymouth.JPG" data-lightbox="image" data-title="Plymouth Station" class="popup_link">Plymouth Station</a>
    <p>
    プリマスの代表駅。
    </p>
    </div>
    <a onclick="toggleSection('nextVisitSection')" class="popup_link">▼ Next Station</a>
    <div id="nextVisitSection" class="popup_section">
    <div class="next_card" id="PlymouthToPaddingtonCard">
    <p class="next_text">▶ London（360km）</span>
    </div>
    <div class="next_card" id="goToPenzanceFromPlymouth">
    <p class="next_text">◀ Penzance（140km）</span>
    </div>
    </div>
  </div>
`;
var markerPlymouth = L.marker([50.3776674014801, -4.144099241952264], {
  icon: stationIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .openPopup()
  .addTo(map);

//  Penzance
    var popupContent = `
    
      <div class="popup_summer">
    <a href="image/map/station/Penzance.JPG" 
       data-lightbox="image" 
       data-title="Penzance">
      <img class="popup_img" loading="eager" src="image/map/station/Penzance.JPG" alt="Penzance Station">
    </a>
    <div class="popup_caption">
    <a href="image/map/station/Penzance.JPG" data-lightbox="image" data-title="Penzance Station" class="popup_link">Penzance Station</a>
    <p>
    駅の説明
    </p>
    </div>
    <a onclick="toggleSection('nextVisitSection')" class="popup_link">▼ Next Station</a>
    <div id="nextVisitSection" class="popup_section">
    <div class="next_card" id="PenzanceToPlymouthCard">
    <p class="next_text">▶ Plymouth（140km）</span>
    </div>
    <div class="next_card" id="PenzanceToStIvesCard">
    <p class="next_text">▶ StIves（17km）</span>
    </div>
    </div>
  </div>
`;
var markerPenzance = L.marker([50.12204180137364, -5.532390786439714], {
  icon: stationIcon //途中駅はstation_2_Iconで切り替え
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);