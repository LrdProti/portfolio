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
    nyc: {
      project: "New York 1977 | AI Motion-Transfer Fashion Film",
      role: "Creative Direction, AI Video & Post-Production",
      text: "I recast a short dance clip with my own AI model and moved it into New York 1977. Motion transfer keeps every step and cut of the original, while a start frame sets the world: elevated train, brownstone stoops and yellow checker cabs, shot like a 16 mm home movie. Around her, a hydrant bursts, a payphone sparks and a cab flips through a fireball, yet she keeps dancing. Two slow-motion moments with white silhouette flashes mark the turns, so the outfit stays the hero of every frame."
    },
    dior: {
      project: "Dior Pre-Fall | AI Fashion Edit",
      role: "Creative Direction, AI Video & Post-Production",
      text: "I built an independent AI fashion edit around a Dior Prêt-à-Porter look: a black ribbed cardigan with pearl buttons and washed straight-leg denim. Alpine meadows, a mossy forest and a boulder field give the look three settings. Flash masks, stacked silhouettes and double exposure punctuate the cut, while typography behind the model calls out the garment details. This is a self-initiated concept and has no affiliation with Dior."
    },
    feisty: {
      project: "FEISTY | AI Beat-Cut Portrait Edit",
      role: "Creative Direction, AI Video & Post-Production",
      text: "I recast a few short phone clips as a black-and-white portrait edit cut to the beat. Motion transfer replaces the original performer with a new AI character in a black studio, while the rhythm and the 25 shots of the footage carry over. On eight bass accents, offset ghost copies, prism stretches and white flashes split the image before it snaps back. Hands and face stay the focus of every frame. This is a self-initiated study, shown without sound."
    },
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
    w("feisty", "video", "FEISTY B/W Edit", "Self-initiated", "feisty", "1080/1920", ["media/feisty-bw-edit.jpg", "media/feisty-bw-edit-loop.mp4", "media/feisty-bw-edit.mp4"], "Black-and-white portrait of a model with braided hair holding both hands at the chin in a dark studio"),
    w("floral-1", "image", "Floral Beauty I", "Self-initiated", "floral", "2/3", ["media/floral-1.jpg"], "Beauty portrait with a coral flower headpiece"),
    w("nyc-1977", "video", "New York 1977", "Self-initiated", "nyc", "1280/954", ["media/nyc1977.jpg", "media/nyc1977-loop.mp4", "media/nyc1977.mp4"], "Model in a Fair Isle sweater dancing down a 1970s New York street while a yellow cab explodes behind her"),

    w("dior-pre-fall", "video", "Dior Pre-Fall Fashion Edit", "Self-initiated", "dior", "4/3", ["media/dior-pre-fall.jpg", "media/dior-pre-fall-loop.mp4", "media/dior-pre-fall.mp4"], "Model in a black pearl-button cardigan and jeans stands in a rocky alpine landscape"),
    w("floral-5", "image", "Floral Beauty V", "Self-initiated", "floral", "2/3", ["media/floral-5.jpg"], "Beauty portrait with blue graphic eyeliner against a blue sky"),
    w("silencio", "video", "SILENCIO", "Campaign concept", "silencio", "16/9", ["media/silencio.jpg", "media/silencio-loop.mp4", "media/silencio.mp4"]),
    w("floral-2", "image", "Floral Beauty II", "Self-initiated", "floral", "2/3", ["media/floral-2.jpg"], "Beauty portrait with a sculptural pink flower collar"),
    w("baizo-editorial-2", "image", "BAIZO Editorial II", "BAIZO", "baizo", "9/16", ["media/baizo-still-2.jpg"], "Model on a coral bench with a zebra-print tote"),

    w("baizo-teaser", "video", "BAIZO Event Teaser", "BAIZO", "teaser", "1078/1920", ["media/baizo-teaser.jpg", "media/baizo-teaser-loop.mp4", "media/baizo-teaser.mp4"]),
    w("floral-4", "image", "Floral Beauty IV", "Self-initiated", "floral", "2/3", ["media/floral-4.jpg"], "Beauty portrait with a burgundy flower cap and a white flower at the lips"),
    w("baizo-editorial-3", "image", "BAIZO Editorial III", "BAIZO", "baizo", "9/16", ["media/baizo-still-3.jpg"], "Model in a patched denim jacket against yellow tiles"),
    w("floral-3", "image", "Floral Beauty III", "Self-initiated", "floral", "2/3", ["media/floral-3.jpg"], "Beauty portrait with a red flower fringe and black lips"),
    w("tropical", "video", "Tropical Glamour", "Self-initiated", "tropical", "16/9", ["media/tropical.jpg", "media/tropical-loop.mp4", "media/tropical.mp4"])
  ];
})();
