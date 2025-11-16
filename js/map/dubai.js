
var map = L.map('mapdubai', {center: [25.24799726392085, 55.364589666991996],
        zoom: 12.5,
        minZoom: 8,
        maxZoom: 13,
        zoomControl: false,
        scrollWheelZoom: false,  // ホイールズーム禁止
        doubleClickZoom: false,  // ダブルクリックズーム禁止
        boxZoom: false,          // ボックスズーム禁止
        keyboard: false,          // キーボード操作禁止
        maxBounds: [
    [23.0, -10.0], // 南西端（モロッコ沖〜スペイン南部）
    [60.0, 57.0]   // 北東端（ポーランド〜ドバイ）
  ],
  maxBoundsViscosity: 1.0

        });


    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">Duai UAE</a>'
    }).addTo(map);