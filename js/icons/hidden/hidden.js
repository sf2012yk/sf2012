    //隠し（hidden）アイコン：
    var hiddenIcon = L.icon({
    iconUrl: "image/icon/hidden.png",
    iconRetinaUrl:"image/icon/hidden@2x.png",
    shadowUrl: "https://esm.sh/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize:     [40, 40], // アイコンのサイズ
    shadowSize:   [41, 25], // size of the shadow
    iconAnchor:   [13, 41], // point of the icon which will correspond to marker's location
    shadowAnchor: [16, 28],  // the same for the shadow
    popupAnchor:  [0, -30], // point from which the popup should open relative to the iconAnchor
    className: "icon-hidden"
    });

//ロンドンマラソンする、体操服全力少女
    var popupContent = `
    <div class="popup_summer">
      <img class="popup_img" loading="eager" src="https://lh3.googleusercontent.com/pw/AP1GczNL_pB_U8ulCGMkYJf0m12C4mb0xXOWV8rJFxoC2k4o08VTpVhSxtMcBamHet20iij7UCQWyEPA-RZlH_JOikyQxmtWOK6NqyoZ9Xbj-b6Mk_C8YVo9a2pb3okb0s_mbIxjN3ySIgsQEbMgB4AylcL_GA=w1216-h913-s-no-gm?authuser=0" alt="ロンドンマラソンする、体操服全力少女">
    <a href="Hidden.html" class="popup_link">ロンドンマラソンする<br/>体操服全力少女</a>
    <div class="popup_caption">
    <p>
    場所の説明
    </p>
    </div>
  </div>
`;
var marker = L.marker([51.501073829838674, -0.127194699081446], {
  icon: hiddenIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .openPopup()
  .addTo(map);

//ここから下に掲載//
