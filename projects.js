// Alle Arbeiten an einer Stelle. Reihenfolge = Reihenfolge auf Start und im Raster (5 Spalten, Hoch- und Querformate gemischt).
// Projekttexte: Upwork-Lookbook-Fassungen (Titel, Rolle, Beschreibung).
(function () {
  var P = {
    white: {
      project: "Avant-Garde Fashion Film | White Studio Editorial",
      role: "Creative Direction & Fashion Video Production",
      text: "I built a fashion film around a white, gallery-like studio that lets the styling carry every frame. The sequence starts with a single model and everyday accessories, introduces increasingly sculptural looks, then gathers three models into a composed tableau before breaking into expressive movement. This progression gives each outfit space while building toward a memorable group image. Delivered as a high-resolution hero film for fashion and creative portfolios."
    },
    tropical: {
      project: "Fashion Editorial Film | Tropical Glamour",
      role: "Creative Direction & Video Concept Development",
      text: "I developed a short fashion editorial that moves one model through three distinct moods: a sunlit tropical mural, a red mirrored room, and an intimate evening table. Flash-lit portraits, ornate surfaces, and close beauty details tie the locations together into one visual identity. The film shows how styling and setting can give a campaign range without losing its central character."
    },
    silencio: {
      project: "SILENCIO | Cinematic Fashion Campaign Film",
      role: "Creative Direction & Video Concept Development",
      text: "I developed a 15-second fashion campaign concept that makes the name SILENCIO feel tangible. A woman leaves a shared apartment and steps onto a sunlit balcony above the sea; the shift in space and light creates a moment of quiet freedom. Restrained pacing keeps the focus on her and the SILENCIO sweatshirt, while the final title card gives the story a clear brand payoff. The result is a cinematic short suited to digital campaigns and social media."
    },
    teaser: {
      project: "BAIZO | Fashion Event Teaser & Product Reveal",
      role: "Creative Direction & Short-Form Video Production",
      text: "I created a vertical event teaser built around a slow-motion fall. A model walks through a sculptural set of coral, mint, and yellow forms carrying BAIZO's zebra-pattern tote, then suddenly loses her balance. The fall becomes the visual hook: suspended movement and a burst of light carry the scene into a phone-screen invitation. The event details land as the payoff to a playful fashion sequence, giving the short video a clear reason to watch through to the end."
    },
    baizo: {
      project: "BAIZO | Fashion Editorial Image Series",
      role: "Art Direction & AI Image Production",
      text: "I developed a three-image fashion editorial for BAIZO, moving from a warm tiled interior to clean studio compositions with colored geometric props. Denim, relaxed silhouettes, and animal-print totes give each image a different product focus, while consistent framing and color-matched BAIZO branding hold the series together. The set works as a flexible group of campaign and social visuals."
    },
    floral: {
      project: "Floral Beauty Editorial | Five Surreal Portraits",
      role: "Creative Direction & AI Image Production",
      text: "I created a five-image beauty editorial in which flowers become part of the styling: a headpiece, sculptural collar, fringe, and delicate facial detail. The series moves between garden greens, deep burgundy terrain, and clear blue skies while preserving the same model and close portrait language. Natural skin texture anchors the surreal elements, creating a cohesive visual story with five distinct images."
    },
    v8: {
      project: "V8 Engine Assembly | Industrial 3D Animation",
      role: "Art Direction, 3D Animation & Post-Production",
      text: "For a self-initiated LED-screen concept study, I turned a licensed V8 engine model into a cinematic assembly film. Exploded parts, macro views of moving components, polished metal, and red accents guide the viewer from mechanical detail to the completed engine. I rebuilt the materials, animation, lighting, and camera work to make a complex product readable at large scale. Base 3D model: \"engine exploded view\" by rondinellisophia (Sketchfab, CC BY)."
    },
    zebra: {
      project: "Zebra in Motion | Widescreen LED Concept Film",
      role: "Art Direction, AI Video & Post-Production",
      text: "I developed a self-initiated wildlife concept for wide LED displays. The film opens so close to a zebra that its stripes become an abstract graphic pattern, then widens to reveal the animal moving through sunlit grass before returning to detail. This shift in scale gives the short piece a visual rhythm designed to hold attention on a large screen. AI video generation and post-production bring the sequence together as an event-content concept."
    }
  };

  function w(id, kind, title, credit, key, ratio, files, alt) {
    var p = P[key];
    var o = { id: id, kind: kind, title: title, credit: credit, project: p.project, role: p.role, text: p.text, ratio: ratio, alt: alt || title };
    if (kind === "video") { o.poster = files[0]; o.loop = files[1]; o.full = files[2]; } else { o.full = files[0]; }
    return o;
  }

  window.WORKS = [
    w("white-studio", "video", "White Studio", "Self-initiated", "white", "16/9", ["media/hero-film.jpg", "media/hero-loop.mp4", "media/hero-film.mp4"]),
    w("baizo-editorial-1", "image", "BAIZO Editorial I", "BAIZO", "baizo", "9/16", ["media/baizo-still-1.jpg"], "Model in a green dress seated on a mint block with a leopard-print tote"),
    w("tropical", "video", "Tropical Glamour", "Self-initiated", "tropical", "16/9", ["media/tropical.jpg", "media/tropical-loop.mp4", "media/tropical.mp4"]),
    w("floral-1", "image", "Floral Beauty I", "Self-initiated", "floral", "2/3", ["media/floral-1.jpg"], "Beauty portrait with a coral flower headpiece"),
    w("baizo-teaser", "video", "BAIZO Event Teaser", "BAIZO", "teaser", "1078/1920", ["media/baizo-teaser.jpg", "media/baizo-teaser-loop.mp4", "media/baizo-teaser.mp4"]),

    w("silencio", "video", "SILENCIO", "Campaign concept", "silencio", "16/9", ["media/silencio.jpg", "media/silencio-loop.mp4", "media/silencio.mp4"]),
    w("floral-2", "image", "Floral Beauty II", "Self-initiated", "floral", "2/3", ["media/floral-2.jpg"], "Beauty portrait with a sculptural pink flower collar"),
    w("v8", "video", "V8 Engine Assembly", "LED-wall concept", "v8", "16/10", ["media/v8-engine.jpg", "media/v8-engine-loop.mp4", "media/v8-engine.mp4"]),
    w("baizo-editorial-2", "image", "BAIZO Editorial II", "BAIZO", "baizo", "9/16", ["media/baizo-still-2.jpg"], "Model on a coral bench with a zebra-print tote"),
    w("floral-3", "image", "Floral Beauty III", "Self-initiated", "floral", "2/3", ["media/floral-3.jpg"], "Beauty portrait with a red flower fringe and black lips"),

    w("zebra", "video", "Zebra in Motion", "LED-wall concept", "zebra", "1920/896", ["media/zebra.jpg", "media/zebra-loop.mp4", "media/zebra.mp4"]),
    w("floral-4", "image", "Floral Beauty IV", "Self-initiated", "floral", "2/3", ["media/floral-4.jpg"], "Beauty portrait with a burgundy flower cap and a white flower at the lips"),
    w("baizo-editorial-3", "image", "BAIZO Editorial III", "BAIZO", "baizo", "9/16", ["media/baizo-still-3.jpg"], "Model in a patched denim jacket against yellow tiles"),
    w("floral-5", "image", "Floral Beauty V", "Self-initiated", "floral", "2/3", ["media/floral-5.jpg"], "Beauty portrait with blue graphic eyeliner against a blue sky")
  ];
})();
