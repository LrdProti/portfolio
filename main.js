// Stumme Loops laufen nur, solange sie sichtbar sind; ein Klick öffnet die Vollversion mit Ton.
(function () {
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var loops = document.querySelectorAll("video.loop");

  function start(v) {
    if (!v.src) v.src = v.dataset.src;
    var p = v.play();
    if (p && p.catch) p.catch(function () {});
  }

  if (!reduce && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) start(e.target);
        else e.target.pause();
      });
    }, { rootMargin: "200px 0px" });
    loops.forEach(function (v) { io.observe(v); });
  }

  var dlg = document.querySelector(".viewer");
  var stage = dlg.querySelector(".viewer-stage");
  var title = dlg.querySelector(".viewer-title");
  var opener = null;

  function open(btn) {
    opener = btn;
    var src = btn.dataset.full;
    stage.textContent = "";
    if (/\.mp4$/.test(src)) {
      var v = document.createElement("video");
      v.src = src;
      v.controls = true;
      v.autoplay = true;
      v.playsInline = true;
      if (btn.dataset.poster) v.poster = btn.dataset.poster;
      stage.appendChild(v);
    } else {
      var img = document.createElement("img");
      img.src = src;
      var inner = btn.querySelector("img");
      img.alt = inner ? inner.alt : "";
      stage.appendChild(img);
    }
    title.textContent = btn.dataset.title || "";
    dlg.showModal();
  }

  function close() { dlg.close(); }

  dlg.addEventListener("close", function () {
    var v = stage.querySelector("video");
    if (v) { v.pause(); v.removeAttribute("src"); v.load(); }
    stage.textContent = "";
    if (opener) opener.focus();
  });
  dlg.querySelector(".viewer-close").addEventListener("click", close);
  dlg.addEventListener("click", function (e) { if (e.target === dlg) close(); });

  document.querySelectorAll("[data-full]").forEach(function (btn) {
    btn.addEventListener("click", function () { open(btn); });
  });
})();
