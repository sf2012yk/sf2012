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

//  Vienna Airport
    var popupContent = `
      <div class="popup_summer">
    <a href="https://lh3.googleusercontent.com/pw/AP1GczOz6lC01rHUrihqsVKW5fOETpwYkiWlYPRvkxOIymZ55DCHjrezaRkt4_-lgKAuzkWqqXn8Hj5T11Ftkk2uWc1ZEpDfF6La3F8ssPMgVqTpV9_QDqJbdzCTeOUO-iZ__-FDwqLcLcTzG2_H2ZZA2JA2HQ=w1216-h913-s-no-gm?authuser=0" 
       data-lightbox="image" 
       data-title="ViennaAirport">
      <img class="popup_img" loading="eager" src="https://lh3.googleusercontent.com/pw/AP1GczOz6lC01rHUrihqsVKW5fOETpwYkiWlYPRvkxOIymZ55DCHjrezaRkt4_-lgKAuzkWqqXn8Hj5T11Ftkk2uWc1ZEpDfF6La3F8ssPMgVqTpV9_QDqJbdzCTeOUO-iZ__-FDwqLcLcTzG2_H2ZZA2JA2HQ=w1216-h913-s-no-gm?authuser=0" alt="Vienna Airport Station">
    </a>
    <div class="popup_caption">
    <a href="https://lh3.googleusercontent.com/pw/AP1GczOz6lC01rHUrihqsVKW5fOETpwYkiWlYPRvkxOIymZ55DCHjrezaRkt4_-lgKAuzkWqqXn8Hj5T11Ftkk2uWc1ZEpDfF6La3F8ssPMgVqTpV9_QDqJbdzCTeOUO-iZ__-FDwqLcLcTzG2_H2ZZA2JA2HQ=w1216-h913-s-no-gm?authuser=0" data-lightbox="image" data-title="Vienna Airport Station" class="popup_link">Vienna Airport Station</a>
    <p>
    駅の説明
    </p>
    </div>
    <a onclick="toggleSection('nextVisitSection')" class="popup_link">▼ Next Station</a>
    <div id="nextVisitSection" class="popup_section">
    <div class="next_card" id="FlughafenWienToViennaCard">
    <p class="next_text">◀ Vienna City（17km）</span>
    </div>
    </div>
  </div>
`;
var markerFlughafenWien = L.marker([48.120983101278604, 16.563218852576007], {
  icon: stationIcon //途中駅はstation_2_Icon、画像なしの駅はstation_3_Iconで切り替え
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);

//  Vienna
    var popupContent = `
      <div class="popup_summer">
    <a href="https://lh3.googleusercontent.com/pw/AP1GczNOiA89ZAmPaHsN3Vz_cVzuLNqOQZulvW-NHMf06XIgyx4b0yq9FO_C1M2Tb6HJVqhAtlSS7j407bN_x8_kGEGzu50dpXLLmA-hxu3V-3FLgvyQOQcxvBX8444mPz4DDthPbI73iCFvXYZ7gAlr9PxQRA=w1216-h913-s-no-gm?authuser=0" 
       data-lightbox="image" 
       data-title="Vienna">
      <img class="popup_img" loading="eager" src="https://lh3.googleusercontent.com/pw/AP1GczNOiA89ZAmPaHsN3Vz_cVzuLNqOQZulvW-NHMf06XIgyx4b0yq9FO_C1M2Tb6HJVqhAtlSS7j407bN_x8_kGEGzu50dpXLLmA-hxu3V-3FLgvyQOQcxvBX8444mPz4DDthPbI73iCFvXYZ7gAlr9PxQRA=w1216-h913-s-no-gm?authuser=0" alt="Vienna Station">
    </a>
    <div class="popup_caption">
    <a href="https://lh3.googleusercontent.com/pw/AP1GczNOiA89ZAmPaHsN3Vz_cVzuLNqOQZulvW-NHMf06XIgyx4b0yq9FO_C1M2Tb6HJVqhAtlSS7j407bN_x8_kGEGzu50dpXLLmA-hxu3V-3FLgvyQOQcxvBX8444mPz4DDthPbI73iCFvXYZ7gAlr9PxQRA=w1216-h913-s-no-gm?authuser=0" data-lightbox="image" data-title="Vienna Station" class="popup_link">Vienna Station</a>
    <p>
    駅の説明
    </p>
    </div>
    <a onclick="toggleSection('nextVisitSection')" class="popup_link">▼ Next Station</a>
    <div id="nextVisitSection" class="popup_section">
    <div class="next_card" id="ViennaToSalzburgCard">
    <p class="next_text">◀ Salzburg（320km）</span>
    </div>
    <div class="next_card" id="ViennaToFlughafenWienCard">
    <p class="next_text">&#x2708; Airport（17km）</span>
    </div>
    <div class="next_card" id="ViennaToVeneziaCard">
    <p class="next_text">▼ Venezia（670km）</span>
    </div>
    </div>
  </div>
`;
var markerViennaCentral = L.marker([48.18500525586605, 16.377671700808875], {
  icon: stationIcon //途中駅はstation_2_Iconで切り替え
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);


//  Salzburg
    var popupContent = `
      <div class="popup_summer">
    <a href="https://lh3.googleusercontent.com/pw/AP1GczOxhYFtu2jaQO72CU8YpXFPfkArBbvVTkrp2FDc01IgLFZcMfJneNS1eLf4lqCBrGe9M5PPl1HZ_BwXk39tzQuvTjcwauomDE3_8qqoxjYtSDWr9iGKP0uHOlZ2roLbaBSQxTgv1W7Tz_e7j2hr1Q8KzA=w1216-h913-s-no-gm?authuser=0" 
       data-lightbox="image" 
       data-title="Salzburg">
      <img class="popup_img" loading="eager" src="https://lh3.googleusercontent.com/pw/AP1GczOxhYFtu2jaQO72CU8YpXFPfkArBbvVTkrp2FDc01IgLFZcMfJneNS1eLf4lqCBrGe9M5PPl1HZ_BwXk39tzQuvTjcwauomDE3_8qqoxjYtSDWr9iGKP0uHOlZ2roLbaBSQxTgv1W7Tz_e7j2hr1Q8KzA=w1216-h913-s-no-gm?authuser=0" alt="Salzburg Station">
    </a>
    <div class="popup_caption">
    <a href="https://lh3.googleusercontent.com/pw/AP1GczOxhYFtu2jaQO72CU8YpXFPfkArBbvVTkrp2FDc01IgLFZcMfJneNS1eLf4lqCBrGe9M5PPl1HZ_BwXk39tzQuvTjcwauomDE3_8qqoxjYtSDWr9iGKP0uHOlZ2roLbaBSQxTgv1W7Tz_e7j2hr1Q8KzA=w1216-h913-s-no-gm?authuser=0" data-lightbox="image" data-title="Salzburg Station" class="popup_link">Salzburg Station</a>
    <p>
    駅の説明
    </p>
    </div>
    <a onclick="toggleSection('nextVisitSection')" class="popup_link">▼ Next Station</a>
    <div id="nextVisitSection" class="popup_section">
    <div class="next_card" id="SalzburgToViennaCard">
    <p class="next_text">▶ Vienna（300km）</span>
    </div>
    <div class="next_card" id="SalzburgToInnsbruckCard">
    <p class="next_text">◀ Innsbruck（190km）</span>
    </div>
    </div>
  </div>
`;
var markerSalzburg = L.marker([47.812680660648525, 13.045783626953863], {
  icon: stationIcon //途中駅はstation_2_Iconで切り替え
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);


//  Innsbruck
    var popupContent = `
      <div class="popup_summer">
    <a href="https://lh3.googleusercontent.com/pw/AP1GczMMmJc8jm03s2Gy9O94v_gQukIwHXtSHIJlFRAU_xMOSGtqPAAhGcDUY2VhuUB3wKvJqRgPFkO3eqa2xgAmm0m1zIWsTdOl-IQIBFGKpQRp4d3ZOnNZ8vyPGEtCS0QXjXOXxUFGUYxnit1byzYewJgPew=w1216-h913-s-no-gm?authuser=0" 
       data-lightbox="image" 
       data-title="Innsbruck">
      <img class="popup_img" loading="eager" src="https://lh3.googleusercontent.com/pw/AP1GczMMmJc8jm03s2Gy9O94v_gQukIwHXtSHIJlFRAU_xMOSGtqPAAhGcDUY2VhuUB3wKvJqRgPFkO3eqa2xgAmm0m1zIWsTdOl-IQIBFGKpQRp4d3ZOnNZ8vyPGEtCS0QXjXOXxUFGUYxnit1byzYewJgPew=w1216-h913-s-no-gm?authuser=0" alt="Innsbruck Station">
    </a>
    <div class="popup_caption">
    <a href="https://lh3.googleusercontent.com/pw/AP1GczMMmJc8jm03s2Gy9O94v_gQukIwHXtSHIJlFRAU_xMOSGtqPAAhGcDUY2VhuUB3wKvJqRgPFkO3eqa2xgAmm0m1zIWsTdOl-IQIBFGKpQRp4d3ZOnNZ8vyPGEtCS0QXjXOXxUFGUYxnit1byzYewJgPew=w1216-h913-s-no-gm?authuser=0" data-lightbox="image" data-title="Innsbruck Station" class="popup_link">Innsbruck Station</a>
    <p>
    駅の説明
    </p>
    </div>
    <a onclick="toggleSection('nextVisitSection')" class="popup_link">▼ Next Station</a>
    <div id="nextVisitSection" class="popup_section">
    <div class="next_card" id="InnsbruckToSalzburgCard">
    <p class="next_text">▶ Salzburg（190km）</span>
    </div>
    <div class="next_card" id="InnsbruckToZurichCard">
    <p class="next_text">◀ Zurich（280km）</span>
    </div>
    <div class="next_card" id="InnsbruckToVeronaCard">
    <p class="next_text">▼ Verona（240km）</span>
    </div>
    </div>
  </div>
`;
var markerInnsbruck = L.marker([47.26253050680029, 11.40060390583582], {
  icon: stationIcon //途中駅はstation_2_Iconで切り替え
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);