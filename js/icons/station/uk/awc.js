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

  // AW_01 Euston駅：
    var popupContent = `
      <div class="popup_summer">
    <a href="https://lh3.googleusercontent.com/pw/AP1GczNL-INtZm5J8ZunWC3VQU0mh9zYBVYWKFHPCnfQdvD8bSSc5o6TQTgpv6MELh4k3RVCXJj2Edkcae31vy5UKJ6l7WYIy0mPsRRWsqoZ7lWTJOiWmDxIrc1I3q1RYcmevSps54WMgD4JN8FtSLSrzyPEMQ=w1216-h913-s-no-gm?authuser=0" 
       data-lightbox="image" 
       data-title="Euston">
      <img class="popup_img" loading="eager" src="https://lh3.googleusercontent.com/pw/AP1GczNL-INtZm5J8ZunWC3VQU0mh9zYBVYWKFHPCnfQdvD8bSSc5o6TQTgpv6MELh4k3RVCXJj2Edkcae31vy5UKJ6l7WYIy0mPsRRWsqoZ7lWTJOiWmDxIrc1I3q1RYcmevSps54WMgD4JN8FtSLSrzyPEMQ=w1216-h913-s-no-gm?authuser=0" alt="Euston Station">
    </a>
    <div class="popup_caption">
    <a href="https://lh3.googleusercontent.com/pw/AP1GczNL-INtZm5J8ZunWC3VQU0mh9zYBVYWKFHPCnfQdvD8bSSc5o6TQTgpv6MELh4k3RVCXJj2Edkcae31vy5UKJ6l7WYIy0mPsRRWsqoZ7lWTJOiWmDxIrc1I3q1RYcmevSps54WMgD4JN8FtSLSrzyPEMQ=w1216-h913-s-no-gm?authuser=0" data-lightbox="image" data-title="Euston Station" class="popup_link">Euston Station</a>
    <p>
    ロンドン市内では一見目立たないターミナル駅。バーミンガム・マンチェスター方面への列車が発着する。
    </p>
    </div>
    <a onclick="toggleSection('nextVisitSection')" class="popup_link">▼ Next Station</a>
    <div id="nextVisitSection" class="popup_section">
    <div class="next_card" id="goToBirminghamCard">
    <p class="next_text">▲ Birmingham（170km）</span>
    </div>
    <div class="next_card" id="goToManchesterCard">
    <p class="next_text">▲ Manchester（320km）</span>
    </div>
    <div class="next_card" id="goToLiverpool_Card">
    <p class="next_text">▲ Liverpool（300km）</span>
    </div>
    </div>
  </div>
`;
var markerEuston = L.marker([51.52831505242004, -0.13468317401621938], {
  icon: stationIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .openPopup()
  .addTo(map);

// GW_06 Birmingham New Street駅：
    var popupContent = `
      <div class="popup_summer">
    <a href="https://lh3.googleusercontent.com/pw/AP1GczO4HwyTzHeGDULHeeT2A6pnijPUi4VZ7reIro36gxYPz6s8vQapFyuMxJlKJQ96-cEPLFXtpnhU8xX6Rvi4Br1Gfcdy2RooDJ6Rc3-coWkfAjjidm8f9k0rBAjsNlIoAd49FcaCSYDPKr8z7Gop15u5PA=w1130-h848-s-no-gm?authuser=0" 
       data-lightbox="image" 
       data-title="Birmingham New Street">
      <img class="popup_img" loading="eager" src="https://lh3.googleusercontent.com/pw/AP1GczO4HwyTzHeGDULHeeT2A6pnijPUi4VZ7reIro36gxYPz6s8vQapFyuMxJlKJQ96-cEPLFXtpnhU8xX6Rvi4Br1Gfcdy2RooDJ6Rc3-coWkfAjjidm8f9k0rBAjsNlIoAd49FcaCSYDPKr8z7Gop15u5PA=w1130-h848-s-no-gm?authuser=0" alt="Birmingham New Street Station">
    </a>
    <div class="popup_caption">
    <a href="https://lh3.googleusercontent.com/pw/AP1GczO4HwyTzHeGDULHeeT2A6pnijPUi4VZ7reIro36gxYPz6s8vQapFyuMxJlKJQ96-cEPLFXtpnhU8xX6Rvi4Br1Gfcdy2RooDJ6Rc3-coWkfAjjidm8f9k0rBAjsNlIoAd49FcaCSYDPKr8z7Gop15u5PA=w1130-h848-s-no-gm?authuser=0" data-lightbox="image" data-title="Birmingham New Street Station" class="popup_link">Birmingham Station</a>
    <p>
    バーミンガムの代表駅。
    </p>
    </div>
    <a onclick="toggleSection('nextVisitSection')" class="popup_link">▼ Next Station</a>
    <div id="nextVisitSection" class="popup_section">
    <div class="next_card" id="BirminghamtoEustonCard">
    <p class="next_text">▼ London（170km）</span>
    </div>
    <div class="next_card" id="BirminghamtoManchesterCard">
    <p class="next_text">▲ Manchester（150km）</span>
    </div>
    <div class="next_card" id="BirminghamtoBristol_CC_Card">
    <p class="next_text">▼ Bristol（150km）</span>
    </div>
    </div>
  </div>
`;
var markerBirmingham = L.marker([52.47781931496408, -1.89936569926818], {
  icon: stationIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .openPopup()
  .addTo(map);


//  Manchester
    var popupContent = `
      <div class="popup_summer">
    <a href="https://lh3.googleusercontent.com/pw/AP1GczNsBkTfmYFDKQnQA4Dt7MSObkcpW1b1l-DjE-MgrQ6bnF51q-uXnM4OCnTKUJoy_NMWX-NIQAGFGkIT-GPYf2wDkQnJ3JWAGpYlCPENxOBYJvac-ja9Dky-bE--DIZIQbhk3XuuHIq3-fAvGJ9QUHmctw=w1216-h913-s-no-gm?authuser=0" 
       data-lightbox="image" 
       data-title="Manchester">
      <img class="popup_img" loading="eager" src="https://lh3.googleusercontent.com/pw/AP1GczNsBkTfmYFDKQnQA4Dt7MSObkcpW1b1l-DjE-MgrQ6bnF51q-uXnM4OCnTKUJoy_NMWX-NIQAGFGkIT-GPYf2wDkQnJ3JWAGpYlCPENxOBYJvac-ja9Dky-bE--DIZIQbhk3XuuHIq3-fAvGJ9QUHmctw=w1216-h913-s-no-gm?authuser=0" alt="Manchester Station">
    </a>
    <div class="popup_caption">
    <a href="https://lh3.googleusercontent.com/pw/AP1GczNsBkTfmYFDKQnQA4Dt7MSObkcpW1b1l-DjE-MgrQ6bnF51q-uXnM4OCnTKUJoy_NMWX-NIQAGFGkIT-GPYf2wDkQnJ3JWAGpYlCPENxOBYJvac-ja9Dky-bE--DIZIQbhk3XuuHIq3-fAvGJ9QUHmctw=w1216-h913-s-no-gm?authuser=0" data-lightbox="image" data-title="Manchester Station" class="popup_link">Manchester Piccadilly</a>
    <p>
    マンチェスター・ピカデリー駅の説明
    </p>
    </div>
    <a onclick="toggleSection('nextVisitSection')" class="popup_link">▼ Next Station</a>
    <div id="nextVisitSection" class="popup_section">
    <div class="next_card" id="ManchesterToPrestonCard">
    <p class="next_text">▲ Preston（70km）</span>
    </div>
    <div class="next_card" id="ManchesterToLeedsCard">
    <p class="next_text">▶ Leeds（70km）</span>
    </div>
    <div class="next_card" id="ManchesterToBirminghamCard">
    <p class="next_text">▼ Birmingham（150km）</span>
    </div>
    </div>
  </div>
`;
var markerManchester = L.marker([53.477308627188506, -2.2299399620126628], {
  icon: stationIcon 
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);


//  Preston
    var popupContent = `
      <div class="popup_summer">
    <a href="https://lh3.googleusercontent.com/pw/AP1GczOaC9z8GTOTyBmX5fJqJyC0qRfo056lg1Y57U8tGs4yl2PMuVDkSLAuKR1htWS-zqNj1ocYk-4RfJEK4_hyDmO4-9wp6N51ReNbfvd4fGDcSMrNuL9xmsORNtv50W2ZIAbik3iYK3LkqAz7PAVgjh1i0g=w1216-h913-s-no-gm?authuser=0" 
       data-lightbox="image" 
       data-title="Preston">
      <img class="popup_img" loading="eager" src="https://lh3.googleusercontent.com/pw/AP1GczOaC9z8GTOTyBmX5fJqJyC0qRfo056lg1Y57U8tGs4yl2PMuVDkSLAuKR1htWS-zqNj1ocYk-4RfJEK4_hyDmO4-9wp6N51ReNbfvd4fGDcSMrNuL9xmsORNtv50W2ZIAbik3iYK3LkqAz7PAVgjh1i0g=w1216-h913-s-no-gm?authuser=0" alt="Preston Station">
    </a>
    <div class="popup_caption">
    <a href="https://lh3.googleusercontent.com/pw/AP1GczOaC9z8GTOTyBmX5fJqJyC0qRfo056lg1Y57U8tGs4yl2PMuVDkSLAuKR1htWS-zqNj1ocYk-4RfJEK4_hyDmO4-9wp6N51ReNbfvd4fGDcSMrNuL9xmsORNtv50W2ZIAbik3iYK3LkqAz7PAVgjh1i0g=w1216-h913-s-no-gm?authuser=0" data-lightbox="image" data-title="Preston Station" class="popup_link">Preston Station</a>
    <p>
    駅の説明
    </p>
    </div>
    <a onclick="toggleSection('nextVisitSection')" class="popup_link">▼ Next Station</a>
    <div id="nextVisitSection" class="popup_section">
    <div class="next_card" id="PrestonToManchesterCard">
    <p class="next_text">▶ Manchester（80km）</span>
    </div>
    </div>
  </div>
`;
var markerPreston = L.marker([53.755888528479566, -2.7073275847086293], {
  icon: station_2_Icon 
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);

//  Carlisle
    var popupContent = `
      <div class="popup_summer">
    <a href="https://lh3.googleusercontent.com/pw/AP1GczNdAgB8oKDgszo_ZZZtcA5KUYMmjGF6b25yFR7K850sIYeiL8psFb2ILKWhzkqz__MJqJWvk--x3P9OaM56aEDP0UmqeNEJM06_i45ZPK14MnF0DLqnTlGt-z8kZUb_MFIm9E-MyZoysBO7MnyW9mcfog=w1216-h913-s-no-gm?authuser=0" 
       data-lightbox="image" 
       data-title="Carlisle">
      <img class="popup_img" loading="eager" src="https://lh3.googleusercontent.com/pw/AP1GczNdAgB8oKDgszo_ZZZtcA5KUYMmjGF6b25yFR7K850sIYeiL8psFb2ILKWhzkqz__MJqJWvk--x3P9OaM56aEDP0UmqeNEJM06_i45ZPK14MnF0DLqnTlGt-z8kZUb_MFIm9E-MyZoysBO7MnyW9mcfog=w1216-h913-s-no-gm?authuser=0" alt="Carlisle Station">
    </a>
    <div class="popup_caption">
    <a href="https://lh3.googleusercontent.com/pw/AP1GczNdAgB8oKDgszo_ZZZtcA5KUYMmjGF6b25yFR7K850sIYeiL8psFb2ILKWhzkqz__MJqJWvk--x3P9OaM56aEDP0UmqeNEJM06_i45ZPK14MnF0DLqnTlGt-z8kZUb_MFIm9E-MyZoysBO7MnyW9mcfog=w1216-h913-s-no-gm?authuser=0" data-lightbox="image" data-title="Carlisle Station" class="popup_link">Carlisle Station</a>
    <p>
    駅の説明
    </p>
    </div>
    <a onclick="toggleSection('nextVisitSection')" class="popup_link">▼ Next Station</a>
    <div id="nextVisitSection" class="popup_section">
    <div class="next_card" id="CarlisleToEdinburghCard">
    <p class="next_text">▲ Edinburgh（160km）</span>
    </div>
    <div class="next_card" id="CarlisleToNewcastleCard">
    <p class="next_text">▶ Newcastle（95km）</span>
    </div>
    <div class="next_card" id="CarlisleToLeedsCard">
    <p class="next_text">▼Leeds（180km）</span>
    </div>
    </div>
  </div>
`;
var markerCarlisle = L.marker([54.89053256020592, -2.933184282739173], {
  icon: stationIcon //途中駅はstation_2_Iconで切り替え
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);