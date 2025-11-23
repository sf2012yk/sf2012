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
    <a href="Hidden.html" class="popup_link">
      <img class="popup_img" loading="eager" src="image/hidden/Spot_1.jpg" alt="ロンドンマラソンする、体操服全力少女">
    ロンドンマラソンする<br/>体操服全力少女</a>
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

//ワイン畑でほほ笑む少女
    var popupContent = `
    <div class="popup_summer">
      <img class="popup_img" loading="eager" src="image/hidden/Hidden_2.jpg" alt="場所名">
    <a href="Hidden.html" class="popup_link">ワイン畑でほほ笑む少女</a>
    <div class="popup_caption">
    <p>
    ワイン畑でほほ笑む少女
    </p>
    </div>
  </div>
`;
var marker = L.marker([46.494551269807005, 6.727661990211627], {
  icon: hiddenIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .openPopup()
  .addTo(map);



//澄み渡った山頂でハイ、チーズ！
    var popupContent = `
    <div class="popup_summer">
      <img class="popup_img" loading="eager" src="image/hidden/Hidden_8.JPG" alt="場所名">
    <a href="Hidden.html" class="popup_link">澄み渡った山頂でハイ、チーズ！</a>
    <div class="popup_caption">
    <p>
    澄み渡った山頂でハイ、チーズ！
    </p>
    </div>
  </div>
`;
var marker = L.marker([47.210341080084504, 11.452044198424705], {
  icon: hiddenIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .openPopup()
  .addTo(map);

//SLを楽しむ学ラン少女
    var popupContent = `
    <div class="popup_summer">
      <img class="popup_img" loading="eager" src="image/hidden/Hiddenicon_1.jpg" alt="場所名">
    <a href="Hidden.html" class="popup_link">SLを楽しむ学ラン少女</a>
    <div class="popup_caption">
    <p>
    SLを楽しむ学ラン少女
    </p>
    </div>
  </div>
`;
var marker = L.marker([50.434463914316396, -3.565016090145747], {
  icon: hiddenIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .openPopup()
  .addTo(map);
