//☆☆ポップアップ間移動の共通JS☆☆//
//ポップアップをクリックしたときの動き
function toggleSection(id) {
  const section = document.getElementById(id);
  if (section.classList.contains("open")) {
    section.style.maxHeight = "0px";
    section.classList.remove("open");
  } else {
    section.style.maxHeight = section.scrollHeight + "px";
    section.classList.add("open");
  }
}

//凡例をクリックしたときの動き
function toggleSection2(id) {
  const section = document.getElementById(id);
  const wasOpen = section.classList.contains("open");

  section.classList.toggle("open");

  if (!wasOpen) {
    // 一時的に overflow を隠してスクロールを防ぐ
    section.style.overflow = "hidden";
    section.style.maxHeight = section.scrollHeight + "px";

    // 少し後で overflow を戻す（アニメーション後）
    setTimeout(() => {
      section.style.overflow = "";
    }, 300); // アニメーション時間に合わせて調整
  } else {
    section.style.maxHeight = "0px";
  }
}


//イージング関数（加減速）
function easeInOutQuad(t) {
  return t < 0.5
    ? 2 * t * t
    : -1 + (4 - 2 * t) * t;
}

//ポリライン補間関数（複数区間対応）
function interpolatePolyline(polyline, stepsPerSegment = 100) {
  const latlngs = polyline.getLatLngs();
  const interpolated = [];

  for (let i = 0; i < latlngs.length - 1; i++) {
    const start = latlngs[i];
    const end = latlngs[i + 1];

    for (let j = 0; j < stepsPerSegment; j++) {
      const t = j / stepsPerSegment;
      const lat = start.lat + (end.lat - start.lat) * t;
      const lng = start.lng + (end.lng - start.lng) * t;
      interpolated.push([lat, lng]);
    }
  }

  interpolated.push([latlngs[latlngs.length - 1].lat, latlngs[latlngs.length - 1].lng]);
  return interpolated;
}

let animationRunning = false; // ← グローバルでアニメーション状態を管理
//☆☆ポップアップ間移動の共通JS☆☆//