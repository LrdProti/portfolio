// Raster, Strichleiste und Player aus projects.js. Stumme Loops laufen nur, solange sie sichtbar sind.
(function () {
  var works = window.WORKS || [];
  var grid = document.getElementById("grid");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text) n.textContent = text;
    return n;
  }
  function thumb(w) { return w.kind === "video" ? w.poster : w.full; }

  // Raster
  if (grid) {
    var show = grid.dataset.show;
    works.filter(function (w) { return show !== "video" || w.kind === "video"; }).forEach(function (w) {
      var b = el("button", "item");
      b.type = "button";
      b.id = "w-" + w.id;
      b.dataset.id = w.id;
      var rr = w.ratio.split("/");
      if (Number(rr[0]) < Number(rr[1])) b.classList.add("portrait");
      b.setAttribute("aria-label", (w.kind === "video" ? "Play " : "Open ") + w.title + ", " + w.credit);
      var m = el("span", "media");
      m.style.aspectRatio = w.ratio;
      if (w.kind === "video") {
        var v = document.createElement("video");
        v.muted = true; v.loop = true; v.playsInline = true; v.preload = "none";
        v.poster = w.poster; v.dataset.src = w.loop;
        v.setAttribute("aria-hidden", "true");
        m.appendChild(v);
      } else {
        var i = document.createElement("img");
        i.src = w.full; i.alt = w.alt || w.title; i.loading = "lazy"; i.decoding = "async";
        m.appendChild(i);
      }
      var c = el("span", "cap");
      c.appendChild(el("span", "t", w.title));
      c.appendChild(el("span", "c", w.credit));
      b.appendChild(m); b.appendChild(c);
      grid.appendChild(b);
    });
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

  // Strichleiste mit Vorschau
  var ticks = document.getElementById("ticks");
  var peek = document.getElementById("peek");
  if (ticks && peek) {
    var img = document.createElement("img"); img.alt = ""; peek.appendChild(img);
    works.forEach(function (w) {
      var a = el("a", "tick");
      a.href = "#w-" + w.id;
      a.setAttribute("aria-label", w.title);
      function on() {
        img.src = thumb(w);
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

  // Player mit Credits
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
      i.src = w.full; i.alt = w.alt || w.title;
      stage.appendChild(i);
    }
    var head = el("p"); head.style.margin = "0 0 6px";
    head.appendChild(el("b", "", w.title));
    head.appendChild(document.createTextNode(", " + w.credit + ". " + w.role + "."));
    text.appendChild(head);
    text.appendChild(el("p", "", w.text));
    text.lastChild.style.margin = "0";
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
  if (grid) grid.addEventListener("click", function (e) {
    var b = e.target.closest(".item"); if (!b) return;
    var w = works.filter(function (x) { return x.id === b.dataset.id; })[0];
    if (w) open(w, b);
  });
})();
