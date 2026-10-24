// Startseite (eine Arbeit pro Bildschirm), Raster (Overview, Video, Imagery), Strichleiste und Player aus projects.js.
// Stumme Loops laufen nur, solange sie sichtbar sind; ein Klick öffnet die Vollversion mit Ton und den Projekttext.
(function () {
  var works = window.WORKS || [];
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text) n.textContent = text;
    return n;
  }
  function ratioNum(r) { var p = r.split("/"); return Number(p[0]) / Number(p[1]); }

  function card(w, cls) {
    var b = el("button", cls);
    b.type = "button";
    b.id = "w-" + w.id;
    b.dataset.id = w.id;
    if (ratioNum(w.ratio) < 1) b.classList.add("portrait");
    b.setAttribute("aria-label", (w.kind === "video" ? "Play " : "Open ") + w.title + ", " + w.credit);
    var m = el("span", "media");
    m.style.aspectRatio = w.ratio;
    m.style.setProperty("--r", ratioNum(w.ratio).toFixed(4));
    if (w.kind === "video") {
      var v = document.createElement("video");
      v.muted = true; v.loop = true; v.playsInline = true; v.preload = "none";
      v.poster = w.poster; v.dataset.src = w.loop;
      v.setAttribute("aria-hidden", "true");
      m.appendChild(v);
    } else {
      var i = document.createElement("img");
      i.src = w.full; i.alt = w.alt; i.loading = "lazy"; i.decoding = "async";
      m.appendChild(i);
    }
    var c = el("span", "cap");
    c.appendChild(el("span", "t", w.title));
    c.appendChild(el("span", "c", w.credit));
    b.appendChild(m); b.appendChild(c);
    return b;
  }

  // Startseite: eine Arbeit pro Bildschirm
  var start = document.getElementById("start");
  if (start) works.forEach(function (w) {
    var s = el("div", "solo");
    s.appendChild(card(w, "item item-solo"));
    start.appendChild(s);
  });

  // Raster: alles, nur Filme oder nur Bilder
  var grid = document.getElementById("grid");
  if (grid) {
    var show = grid.dataset.show;
    works.filter(function (w) { return show === "all" || w.kind === show; })
      .forEach(function (w) { grid.appendChild(card(w, "item")); });
  }

  // Loops
  var loops = document.querySelectorAll(".media video");
  if (!reduce && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        var v = e.target;
        if (e.isIntersecting) {
          if (!v.src) v.src = v.dataset.src;
          var p = v.play(); if (p && p.catch) p.catch(function () {});
        } else { v.pause(); }
      });
    }, { rootMargin: "150px 0px" });
    loops.forEach(function (v) { io.observe(v); });
  }

  // Strichleiste mit Vorschau (nur Overview)
  var ticks = document.getElementById("ticks");
  var peek = document.getElementById("peek");
  if (ticks && peek) {
    var img = document.createElement("img"); img.alt = ""; peek.appendChild(img);
    works.forEach(function (w) {
      var a = el("a", "tick");
      a.href = "#w-" + w.id;
      a.setAttribute("aria-label", w.title);
      function on() {
        img.src = w.kind === "video" ? w.poster : w.full;
        var r = a.getBoundingClientRect();
        peek.style.left = Math.min(r.left, window.innerWidth - 132) + "px";
        peek.style.top = (r.bottom + 6) + "px";
        peek.classList.add("on");
      }
      function off() { peek.classList.remove("on"); }
      a.addEventListener("mouseenter", on);
      a.addEventListener("focus", on);
      a.addEventListener("mouseleave", off);
      a.addEventListener("blur", off);
      a.addEventListener("click", function (e) {
        e.preventDefault(); off();
        var t = document.getElementById("w-" + w.id);
        if (t) { t.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "center" }); t.focus({ preventScroll: true }); }
      });
      ticks.appendChild(a);
    });
  }

  // Player mit Projekttext
  var dlg = document.querySelector(".viewer");
  if (!dlg) return;
  var stage = dlg.querySelector(".viewer-stage");
  var text = dlg.querySelector(".viewer-text");
  var opener = null;

  function open(w, btn) {
    opener = btn;
    stage.textContent = ""; text.textContent = "";
    if (w.kind === "video") {
      var v = document.createElement("video");
      v.src = w.full; v.poster = w.poster; v.controls = true; v.autoplay = true; v.playsInline = true;
      stage.appendChild(v);
    } else {
      var i = document.createElement("img");
      i.src = w.full; i.alt = w.alt;
      stage.appendChild(i);
    }
    text.appendChild(el("p", "vt-title", w.project));
    text.appendChild(el("p", "vt-role", w.role));
    text.appendChild(el("p", "vt-text", w.text));
    dlg.showModal();
  }
  dlg.addEventListener("close", function () {
    var v = stage.querySelector("video");
    if (v) { v.pause(); v.removeAttribute("src"); v.load(); }
    stage.textContent = "";
    if (opener) opener.focus();
  });
  dlg.querySelector(".viewer-close").addEventListener("click", function () { dlg.close(); });
  dlg.addEventListener("click", function (e) { if (e.target === dlg) dlg.close(); });
  document.addEventListener("click", function (e) {
    var b = e.target.closest(".item"); if (!b) return;
    var w = works.filter(function (x) { return x.id === b.dataset.id; })[0];
    if (w) open(w, b);
  });
})();
