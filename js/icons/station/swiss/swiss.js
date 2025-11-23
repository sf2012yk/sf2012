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


//  Basel SBB
    var popupContent = `
      <div class="popup_summer">
    <a href="image/map/station/BaselSBB.JPG" 
       data-lightbox="image" 
       data-title="Basel SBB">
      <img class="popup_img" loading="eager" src="image/map/station/BaselSBB.JPG" alt="Basel SBB Station">
    </a>
    <div class="popup_caption">
    <a href="image/map/station/BaselSBB.JPG" data-lightbox="image" data-title="Basel SBB Station" class="popup_link">Basel SBB Station</a>
    <p>
    駅の説明
    </p>
    </div>
    <a onclick="toggleSection('nextVisitSection')" class="popup_link">▼ Next Station</a>
    <div id="nextVisitSection" class="popup_section">
    <div class="next_card" id="BaselSBBToZurichCard">
    <p class="next_text">▶ Zurich（90km）</span>
    </div>
    <div class="next_card" id="BaselSBBToParisCard">
    <p class="next_text">◀ Paris（600km）</span>
    </div>
    <div class="next_card" id="BaselSBBToCologneCard">
    <p class="next_text">▲ Cologne（480km）</span>
    </div>
    </div>
  </div>
`;
var markerBaselSBB = L.marker([47.54717812533671, 7.5890015703746885], {
  icon: stationIcon //途中駅はstation_2_Iconで切り替え
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);

//  Zurich
    var popupContent = `
      <div class="popup_summer">
    <a href="image/map/station/Zurich.JPG" 
       data-lightbox="image" 
       data-title="Zurich">
      <img class="popup_img" loading="eager" src="image/map/station/Zurich.JPG" alt="Zurich Station">
    </a>
    <div class="popup_caption">
    <a href="image/map/station/Zurich.JPG" data-lightbox="image" data-title="Zurich Station" class="popup_link">Zurich Station</a>
    <p>
    駅の説明
    </p>
    </div>
    <a onclick="toggleSection('nextVisitSection')" class="popup_link">▼ Next Station</a>
    <div id="nextVisitSection" class="popup_section">
    <div class="next_card" id="ZurichToBaselCard">
    <p class="next_text">▶ Basel（90km）</span>
    </div>
    <div class="next_card" id="ZurichToBernCard">
    <p class="next_text">▶ Bern（100km）</span>
    </div>
    <div class="next_card" id="ZurichToGenevaCard">
    <p class="next_text">▶ Geneva（270km）</span>
    </div>
    </div>
  </div>
`;
var markerZurich = L.marker([47.37828613669217, 8.539567674375348], {
  icon: stationIcon //途中駅はstation_2_Iconで切り替え
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);

//  Olten
    var popupContent = `
      <div class="popup_summer">
    <a href="image/map/station/Olten.JPG" 
       data-lightbox="image" 
       data-title="Olten">
      <img class="popup_img" loading="eager" src="image/map/station/Olten.JPG" alt="Olten Station">
    </a>
    <div class="popup_caption">
    <a href="image/map/station/Olten.JPG" data-lightbox="image" data-title="Olten Station" class="popup_link">Olten Station</a>
    <p>
    駅の説明
    </p>
    </div>
    <a onclick="toggleSection('nextVisitSection')" class="popup_link">▼ Next Station</a>
    <div id="nextVisitSection" class="popup_section">
    <div class="next_card" id="OltenToZurichCard">
    <p class="next_text">▶ Zurich（50km）</span>
    </div>
    <div class="next_card" id="OltenToBernCard">
    <p class="next_text">▼ Bern（50km）</span>
    </div>
     <div class="next_card" id="OltenToBaselCard">
    <p class="next_text">▲ Basel（60km）</span>
    </div>
    </div>
  </div>
`;
var markerOlten = L.marker([47.35196790659258, 7.907783649218526], {
  icon: station_2_Icon 
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);

//  Bern
    var popupContent = `
      <div class="popup_summer">
    <a href="image/map/station/Bern.JPG" 
       data-lightbox="image" 
       data-title="Bern">
      <img class="popup_img" loading="eager" src="image/map/station/Bern.JPG" alt="Bern Station">
    </a>
    <div class="popup_caption">
    <a href="image/map/station/Bern.JPG" data-lightbox="image" data-title="Bern Station" class="popup_link">Bern Station</a>
    <p>
    駅の説明
    </p>
    </div>
    <a onclick="toggleSection('nextVisitSection')" class="popup_link">▼ Next Station</a>
    <div id="nextVisitSection" class="popup_section">
    <div class="next_card" id="BernToZurichCard">
    <p class="next_text">▶ Zurich（100km）</span>
    </div>
    <div class="next_card" id="BernToGenevaCard">
    <p class="next_text">▶ Geneva（170km）</span>
    </div>
    <div class="next_card" id="BernToInterlakenCard">
    <p class="next_text">▶ Interlaken（60km）</span>
    </div>
    </div>
  </div>
`;
var markerBern = L.marker([46.948380752911675, 7.43530795120567], {
  icon: stationIcon //途中駅はstation_2_Iconで切り替え
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);


//  Lausanne
    var popupContent = `
      <div class="popup_summer">
    <a href="image/map/station/Lausanne.JPG" 
       data-lightbox="image" 
       data-title="Lausanne">
      <img class="popup_img" loading="eager" src="image/map/station/Lausanne.JPG" alt="Lausanne Station">
    </a>
    <div class="popup_caption">
    <a href="image/map/station/Lausanne.JPG" data-lightbox="image" data-title="Lausanne Station" class="popup_link">Lausanne Station</a>
    <p>
    駅の説明
    </p>
    </div>
    <a onclick="toggleSection('nextVisitSection')" class="popup_link">▼ Next Station</a>
    <div id="nextVisitSection" class="popup_section">
    <div class="next_card" id="LausanneToZurichCard">
    <p class="next_text">▶ Zurich（210km）</span>
    </div>
    <div class="next_card" id="LausanneToBernCard">
    <p class="next_text">▶ Bern（110km）</span>
    </div>
    <div class="next_card" id="LausanneToGenevaCard">
    <p class="next_text">▶ Geneva（60km）</span>
    </div>
    </div>
  </div>
`;
var markerLausanne = L.marker([46.51675788314949, 6.6288213303053105], {
  icon: stationIcon //途中駅はstation_2_Iconで切り替え
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);


//  Geneva
    var popupContent = `
      <div class="popup_summer">
    <a href="image/map/station/Geneve.JPG" 
       data-lightbox="image" 
       data-title="Geneva">
      <img class="popup_img" loading="eager" src="image/map/station/Geneve.JPG" alt="Geneva Station">
    </a>
    <div class="popup_caption">
    <a href="image/map/station/Geneve.JPG" data-lightbox="image" data-title="Geneva Station" class="popup_link">Geneva Station</a>
    <p>
    駅の説明
    </p>
    </div>
    <a onclick="toggleSection('nextVisitSection')" class="popup_link">▼ Next Station</a>
    <div id="nextVisitSection" class="popup_section">
    <div class="next_card" id="GenevaToGenevaCard">
    <p class="next_text">▶ Lausanne（60km）</span>
    </div>
    <div class="next_card" id="GenevaToLyonCard">
    <p class="next_text">◀ Lyon（150km）</span>
    </div>
    <div class="next_card" id="GenevaToZurichCard">
    <p class="next_text">▶ Zurich（270km）</span>
    </div>
    </div>
  </div>
`;
var markerGeneva = L.marker([46.20996053976771, 6.141703085164053], {
  icon: stationIcon //途中駅はstation_2_Iconで切り替え
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);