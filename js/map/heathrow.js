
var map = L.map('mapheathrow', {center: [51.46683619237497, -0.4631505587077417],
       zoom: 13.4,
        minZoom: 5,
        maxZoom: 14,
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
      attribution: '© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">Heathrow UK</a>'
    }).addTo(map);