
// ※ブリストル　UK
var map = L.map('mapPlymouth', {center: [50.373715656880854, -4.142493668109399],
       zoom: 13.4,
        minZoom: 7,
        maxZoom: 14,
        zoomControl: false,
        scrollWheelZoom: false,  // ホイールズーム禁止
        doubleClickZoom: false,  // ダブルクリックズーム禁止
        boxZoom: false,          // ボックスズーム禁止
        keyboard: false,          // キーボード操作禁止
        maxBounds: [
    [35.0, -10.0], // 南西端（モロッコ沖〜スペイン南部）
    [60.0, 30.0]   // 北東端（ポーランド〜ウクライナ西部）
  ],
  maxBoundsViscosity: 1.0

        });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">Plymouth UK</a>'
    }).addTo(map);