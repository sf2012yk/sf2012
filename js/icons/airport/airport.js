// Icons module

 //airportnow）アイコン：
var AirportIcon = L.icon({
iconUrl: "image/icon/airport.png",
iconRetinaUrl:"image/icon/airport@2x.png",
shadowUrl: "https://esm.sh/leaflet@1.9.4/dist/images/marker-shadow.png",
iconSize:     [40, 40], // アイコンのサイズ
shadowSize:   [41, 25], // size of the shadow
iconAnchor:   [13, 41], // point of the icon which will correspond to marker's location
shadowAnchor: [16, 28],  // the same for the shadow
popupAnchor:  [0, -30], // point from which the popup should open relative to the iconAnchor
className: "icon-airport"
});

//  HeathrowTerminal3
    var popupContent = `
      <div class="popup_summer">
    <a href="Heathrow.html">
      <img class="popup_img" loading="eager" src="image/map/airport/Heathrow3.JPG" alt="Heathrow Terminal5">
    </a>
    <div class="popup_caption">
    <a href="Heathrow.html" class="popup_link">Heathrow Terminal3</a>
    <p>
    ヒースロー空港第3ターミナル。ここからは主に長距離国際線が発着。
    </p>
    </div>
    <a onclick="toggleSection('nextVisitSection')" class="popup_link">▼ Next Airport</a>
    <div id="nextVisitSection" class="popup_section">
    <div class="next_card" id="HeathrowToViennaCard">
    <p class="next_text">&#x2708; Vienna（1200km）</span>
    </div>
    <div class="next_card" id="HeathrowToRomeCard">
    <p class="next_text">&#x2708; Rome（1400km）</span>
    </div>
    <div class="next_card" id="HeathrowToDubaiCard">
    <p class="next_text">&#x2708; Dubai（5000km）</span>
    </div>
    <div class="next_card" id="HeathrowTerminal3ToPaddingtonCard">
    <p class="next_text">London City（23km）</span>
    </div>
    </div>
  </div>
`;
var markerHeathrowTerminal3 = L.marker([51.46896718671588, -0.4574958618544679], {
  icon: AirportIcon 
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);

//  HeathrowTerminal5
    var popupContent = `
      <div class="popup_summer">
    <a href="Heathrow.html">
      <img class="popup_img" loading="eager" src="image/map/airport/Heathrow5.JPG" alt="Heathrow Terminal5">
    </a>
    <div class="popup_caption">
    <a href="Heathrow.html" class="popup_link">Heathrow Terminal5</a>
    <p>
    ヒースロー空港第5ターミナルの説明
    </p>
    </div>
    <a onclick="toggleSection('nextVisitSection')" class="popup_link">▼ Next Airport</a>
    <div id="nextVisitSection" class="popup_section">
    <div class="next_card" id="HeathrowToParisCard">
    <p class="next_text">&#x2708; Paris（400km）</span>
    </div>
    <div class="next_card" id="HeathrowToAmsterdamCard">
    <p class="next_text">&#x2708; Amsterdam（400km）</span>
    </div>
    <div class="next_card" id="HeathrowToGenevaCard">
    <p class="next_text">&#x2708; Geneva（600km）</span>
    </div>
    <div class="next_card" id="HeathrowTerminal5ToPaddingtonCard">
    <p class="next_text">London City（25km）</span>
    </div>
    </div>
  </div>
`;
var markerHeathrowTerminal5 = L.marker([51.47259800120853, -0.4859364875464297], {
  icon: AirportIcon 
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
    <a href="image/map/airport/Geneve.jpg" 
       data-lightbox="image" 
       data-title="Geneva">
      <img class="popup_img" loading="eager" src="image/map/airport/Geneve.jpg" alt="Geneva Airport">
    </a>
    <div class="popup_caption">
    <a href="image/map/airport/Geneve.jpg" data-lightbox="image" data-title="Geneva Airport" class="popup_link">Geneva Airport</a>
    <p>
    Genevaの説明
    </p>
    </div>
    <a onclick="toggleSection('nextVisitSection')" class="popup_link">▼ Next Airport</a>
    <div id="nextVisitSection" class="popup_section">
    <div class="next_card" id="GenevaToHeathrowCard">
    <p class="next_text">&#x2708; London（600km）</span>
    </div>
    <div class="next_card" id="GenevaToViennaCard">
    <p class="next_text">&#x2708; Vienna（bbkm）</span>
    </div>
    </div>
  </div>
`;
var markerGenevaAirport = L.marker([46.2314339144919, 6.10746786781946], {
  icon: AirportIcon 
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
    <a href="image/map/airport/Vienna.JPG" 
       data-lightbox="image" 
       data-title="Vienna">
      <img class="popup_img" loading="eager" src="image/map/airport/Vienna.JPG" alt="Vienna Airport">
    </a>
    <div class="popup_caption">
    <a href="image/map/airport/Vienna.JPG" data-lightbox="image" data-title="Vienna Airport" class="popup_link">Vienna Airport</a>
    <p>
    Viennaの説明
    </p>
    </div>
    <a onclick="toggleSection('nextVisitSection')" class="popup_link">▼ Next Airport</a>
    <div id="nextVisitSection" class="popup_section">
    <div class="next_card" id="ViennaToGenevaCard">
    <p class="next_text">&#x2708; Geneva（800km）</span>
    </div>
    <div class="next_card" id="ViennaToHeathrowCard">
    <p class="next_text">&#x2708; London（1200km）</span>
    </div>
    </div>
  </div>
`;
var markerViennaAirport = L.marker([48.11851237806887, 16.566266743122807], {
  icon: AirportIcon 
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);

//  Dubai
    var popupContent = `
      <div class="popup_summer">
    <a href="Dubai.html">
      <img class="popup_img" loading="eager" src="image/map/airport/Dubai.JPG" alt="Dubai Airport">
    </a>
    <div class="popup_caption">
    <a href="Dubai.html" class="popup_link">Dubai Airport</a>
    <p>
    Dubaiの説明
    </p>
    </div>
    <a onclick="toggleSection('nextVisitSection')" class="popup_link">▼ Next Airport</a>
    <div id="nextVisitSection" class="popup_section">
    <div class="next_card" id="DubaiToHeathrowCard">
    <p class="next_text">&#x2708; London（6000km）</span>
    </div>
    <div class="next_card" id="DubaiToGeneveCard">
    <p class="next_text">&#x2708; Geneve（5500km）</span>
    </div>
    <div class="next_card" id="DubaiToViennaCard">
    <p class="next_text">&#x2708; Vienna（5000km）</span>
    </div>
    </div>
  </div>
`;
var markerDubai = L.marker([25.24916816381139, 55.361520925952654], {
  icon: AirportIcon 
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);
