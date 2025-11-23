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


//  King's Cross
    var popupContent = `
      <div class="popup_summer">
    <a href="image/map/station/KingsCross.JPG" 
       data-lightbox="image" 
       data-title="King's Cross">
      <img class="popup_img" loading="eager" src="image/map/station/KingsCross.JPG" alt="King's Cross Station">
    </a>
    <div class="popup_caption">
    <a href="image/map/station/KingsCross.JPG" data-lightbox="image" data-title="King's Cross Station" class="popup_link">King's Cross Station</a>
    <p>
    King's Cross駅の説明
    </p>
    </div>
    <a onclick="toggleSection('nextVisitSection')" class="popup_link">▼ Next Station</a>
    <div id="nextVisitSection" class="popup_section">
    <div class="next_card" id="KingsCrossToYorkCard">
    <p class="next_text">▲ York（300km）</span>
    </div>
    </div>
  </div>
`;
var markerKingscross = L.marker([51.530637046098505, -0.1233642679259429], {
  icon: stationIcon //途中駅はstation_2_Iconで切り替え
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);


//  Peterborough
    var popupContent = `
      <div class="popup_summer">
    <a href="画像URLを貼る" 
       data-lightbox="image" 
       data-title="Peterborough">
      <img class="popup_img" loading="eager" src="画像URLを貼る" alt="Peterborough Station">
    </a>
    <div class="popup_caption">
    <a href="画像URLを貼る" data-lightbox="image" data-title="Peterborough Station" class="popup_link">Peterborough Station</a>
    <p>
    駅の説明
    </p>
    </div>
    <a onclick="toggleSection('nextVisitSection')" class="popup_link">▼ Next Station</a>
    <div id="nextVisitSection" class="popup_section">
    <div class="next_card" id="PeterboroughToLondonCard">
    <p class="next_text">▼ London（120km）</span>
    </div>
    <div class="next_card" id="PeterboroughToYorkCard">
    <p class="next_text">▲ York（180km）</span>
    </div>
    <div class="next_card" id="PeterboroughToElyCard">
    <p class="next_text">▶ Ely（50km）</span>
    </div>
    <div class="next_card" id="PeterboroughToBirminghamCard">
    <p class="next_text">◀ Birmingham（50km）</span>
    </div>
    </div>
  </div>
`;
var markerPeterborough = L.marker([52.57388879556104, -0.24981606095851133], {
  icon: stationIcon //途中駅はstation_2_Iconで切り替え
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);


  //  York
    var popupContent = `
      <div class="popup_summer">
    <a href="image/map/station/York.JPG" 
       data-lightbox="image" 
       data-title="York">
      <img class="popup_img" loading="eager" src="image/map/station/York.JPG" alt="York Station">
    </a>
    <div class="popup_caption">
    <a href="image/map/station/York.JPG" data-lightbox="image" data-title="York Station" class="popup_link">York Station</a>
    <p>
    UK中央部、ヨークシャー地方の代表駅。
    </p>
    </div>
    <a onclick="toggleSection('nextVisitSection')" class="popup_link">▼ Next Station</a>
    <div id="nextVisitSection" class="popup_section">
    <div class="next_card" id="YorkToDarlingtonCard">
    <p class="next_text">▲ Darlington（70km）</span>
    </div>
    <div class="next_card" id="YorkToNewcastleCard">
    <p class="next_text">▲ NewCastle（130km）</span>
    </div>
    <div class="next_card" id="YorkToLeedsCard">
    <p class="next_text">◀ Leeds（400km）</span>
    </div>
    <div class="next_card" id="YorkToLondonCard">
    <p class="next_text">▼ London（300km）</span>
    </div>
    </div>
  </div>
`;
var markerYork = L.marker([53.95668456824942, -1.0946599488952553], {
  icon: stationIcon //途中駅はstation_2_Iconで切り替え
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);

//  Darlington
    var popupContent = `
      <div class="popup_summer">
    <a href="image/map/station/Darlington.JPG" 
       data-lightbox="image" 
       data-title="Darlington">
      <img class="popup_img" loading="eager" src="image/map/station/Darlington.JPG" alt="Darlington Station">
    </a>
    <div class="popup_caption">
    <a href="image/map/station/Darlington.JPG" data-lightbox="image" data-title="Darlington Station" class="popup_link">Darlington Station</a>
    <p>
    駅の説明
    </p>
    </div>
    <a onclick="toggleSection('nextVisitSection')" class="popup_link">▼ Next Station</a>
    <div id="nextVisitSection" class="popup_section">
    <div class="next_card" id="DarlingtonToDurhamCard">
    <p class="next_text">▲ Durham（35km）</span>
    </div>
    <div class="next_card" id="DarlingtonToNewcastleCard">
    <p class="next_text">▲ Newcastle（60km）</span>
    </div>
    <div class="next_card" id="DarlingtonToYorkCard">
    <p class="next_text">▼ York（70km）</span>
    </div>
    </div>
  </div>
`;
var markerDarlington = L.marker([54.521126434342825, -1.5460040570133933], {
  icon: stationIcon //途中駅はstation_2_Iconで切り替え
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);


//  Durham
    var popupContent = `
      <div class="popup_summer">
    <a href="image/map/station/Durham.JPG" 
       data-lightbox="image" 
       data-title="Durham">
      <img class="popup_img" loading="eager" src="image/map/station/Durham.JPG" alt="Durham Station">
    </a>
    <div class="popup_caption">
    <a href="image/map/station/Durham.JPG" data-lightbox="image" data-title="Durham Station" class="popup_link">Durham Station</a>
    <p>
    駅の説明
    </p>
    </div>
    <a onclick="toggleSection('nextVisitSection')" class="popup_link">▼ Next Station</a>
    <div id="nextVisitSection" class="popup_section">
    <div class="next_card" id="DurhamToNewcastleCard">
    <p class="next_text">▲ Newcastle（22km）</span>
    </div>
    <div class="next_card" id="DurhamToDarlingtonCard">
    <p class="next_text">▼ Darlington（36km）</span>
    </div>
    <div class="next_card" id="DurhamToYorkCard">
    <p class="next_text">▼ York（106km）</span>
    </div>
    </div>
  </div>
`;
var markerDurham = L.marker([54.77983780775699, -1.5814880478633844], {
  icon: stationIcon //途中駅はstation_2_Iconで切り替え
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);

//  Newcastle
    var popupContent = `
      <div class="popup_summer">
    <a href="image/map/station/Newcastle.JPG" 
       data-lightbox="image" 
       data-title="Newcastle">
      <img class="popup_img" loading="eager" src="image/map/station/Newcastle.JPG" alt="Newcastle Station">
    </a>
    <div class="popup_caption">
    <a href="image/map/station/Newcastle.JPG" data-lightbox="image" data-title="Newcastle Station" class="popup_link">Newcastle Station</a>
    <p>
    駅の説明
    </p>
    </div>
    <a onclick="toggleSection('nextVisitSection')" class="popup_link">▼ Next Station</a>
    <div id="nextVisitSection" class="popup_section">
    <div class="next_card" id="NewcastleToEdinburghCard">
    <p class="next_text">▲ Edinburgh（190km）</span>
    </div>
    <div class="next_card" id="NewcastleToDurhamCard">
    <p class="next_text">▼ Durham（22km）</span>
    </div>
    <div class="next_card" id="NewcastleToYorkCard">
    <p class="next_text">▼ York（130km）</span>
    </div>
     <div class="next_card" id="NewcastleToCarlisleCard">
    <p class="next_text">◀ Carlisle（95km）</span>
    </div>
    </div>
  </div>
`;
var markerNewcastle = L.marker([54.96814759160355, -1.6176357599706133], {
  icon: stationIcon //途中駅はstation_2_Iconで切り替え
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);


  //  Edinburgh
    var popupContent = `
      <div class="popup_summer">
    <a href="image/map/station/Edinburgh.JPG" 
       data-lightbox="image" 
       data-title="Edinburgh">
      <img class="popup_img" loading="eager" src="image/map/station/Edinburgh.JPG" alt="Edinburgh Station">
    </a>
    <div class="popup_caption">
    <a href="image/map/station/Edinburgh.JPG" data-lightbox="image" data-title="Edinburgh Station" class="popup_link">Edinburgh Station</a>
    <p>
    駅の説明
    </p>
    </div>
    <a onclick="toggleSection('nextVisitSection')" class="popup_link">▼ Next Station</a>
    <div id="nextVisitSection" class="popup_section">
    <div class="next_card" id="EdinburghToNewcastleCard">
    <p class="next_text">▼ Newcastle（190km）</span>
    </div>
    <div class="next_card" id="EdinburghToAberdeenCard">
    <p class="next_text">▲ Aberdeen（210km）</span>
    </div>
    </div>
  </div>
`;
var markerEdinburgh = L.marker([55.95185702547384, -3.1885119395760397], {
  icon: stationIcon //途中駅はstation_2_Iconで切り替え
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);