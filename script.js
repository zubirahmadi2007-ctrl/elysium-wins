// ===== EDIT THESE TWO ARRAYS =====

// Video testimonials, shown in this order.
const videos = [
  { name: "Keven rauda", id: "0Q1OhaNC3GY" },
  { name: "Robert freeman", id: "M9-uuVNbV6M" },
  { name: "Eduardo Mendoza", id: "3T-Qm89aLaA" },
  { name: "Rohan Habibi", id: "XAiA-1lmGbk" }
];

// Screenshot filenames inside the images/ folder, sorted by name.
// Example: const screenshots = ["win-01.jpg", "win-02.png"];
const screenshots = [];

// ===== RENDERING (no need to edit below) =====

(function () {
  const videoGrid = document.getElementById("video-grid");
  const winsGrid = document.getElementById("wins-grid");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  // Testimonial cards
  videos.forEach(function (v) {
    const a = document.createElement("a");
    a.className = "video-card";
    a.href = "https://www.youtube.com/watch?v=" + encodeURIComponent(v.id);
    a.target = "_blank";
    a.rel = "noopener";
    a.setAttribute("aria-label", "Watch " + v.name + "'s testimonial on YouTube");

    const img = document.createElement("img");
    img.src = "https://i.ytimg.com/vi/" + encodeURIComponent(v.id) + "/hqdefault.jpg";
    img.alt = v.name + " video testimonial thumbnail";
    img.loading = "lazy";
    img.addEventListener("error", function () { img.remove(); });

    const play = document.createElement("span");
    play.className = "play";
    play.setAttribute("aria-hidden", "true");
    play.textContent = "▶";

    const cap = document.createElement("span");
    cap.className = "caption";
    cap.textContent = v.name;

    a.append(img, play, cap);
    videoGrid.appendChild(a);
  });

  // Win screenshots
  if (screenshots.length === 0) {
    const p = document.createElement("p");
    p.className = "empty";
    p.textContent = "Screenshots coming soon.";
    winsGrid.appendChild(p);
  }

  screenshots.forEach(function (file, i) {
    const img = document.createElement("img");
    img.className = "win-img";
    img.src = "images/" + encodeURIComponent(file);
    img.alt = "Student win screenshot " + (i + 1);
    img.loading = "lazy";
    img.tabIndex = 0;
    img.addEventListener("click", function () { openLightbox(img); });
    img.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openLightbox(img); }
    });
    winsGrid.appendChild(img);
  });

  // Lightbox
  function openLightbox(img) {
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.hidden = true;
    lightboxImg.src = "";
    document.body.style.overflow = "";
  }

  lightbox.addEventListener("click", closeLightbox);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !lightbox.hidden) closeLightbox();
  });
})();
