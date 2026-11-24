const wishlistData = {
  electronics: [
    "Headphones",
    "Long Tripod stand",
    "C Type vlogging microphone",
    "Hair straightener",
    "Tablet with stylus",
    "Second hand digital camera",
    "Power bank"
  ],
  miscellenous: [
    "EFT of N$200",
    "A gift card",
    "An umbrella with blue in the design",
    "Feather pillow"
  ],
  exercise: [
    "White or baby blue yoga mat",
    "Resistance band"
  ],
  jewellery: [
    {label: "Bow bracelete N$100", url:"https://vt.tiktok.com/ZSsY4S2Sj/"},
    {label: "Nose hoop N$100", url:"https://vt.tiktok.com/ZSsY4y8C6/"},
    {label: "Gold heart necklace N$80", url:"https//vt.tiktok.com/ZSsY4H8Tv"}
  ],
  scents: [
    "Ariana Grande Thank U Next body mist N$400",
    "Baby powder, preferably unscented",
    {label:"Scented white or baby blue candle with a unique design", url:"https://www.tiktok.com/@ombili.glow?_r=1&_t=ZS-9Bg5NhZwXY1"}
  ],
  sewing: [
    "Bobbin case from PNA N$40",
    "Bobbins from PNA N$10"
  ],
  makeup: [
    {label:"Raspberry Jelly lip gloss N$80", url:"https://www.instagram.com/p/DcGxjDVNCRD/?dmpr=MTAwcnJvOHB1eXVoNg=="},
    {label: "Summer Fridays lip gloss, Brown sugar and cherry N$200", url:"https://www.instagram.com/p/DbhKNhKiMr_/?fqnt=MW83c3d2cHZ6eHhuYw=="},

  ],
  food: [
    "A box of chocolate ice lollies",
    "Chillie Bites",
    "A tub of CHOCOLATE ice cream",
  ]
};

const modal = document.getElementById("envelopeModal");
const closeBtn = document.getElementById("closeModal");
const letterTitle = document.getElementById("letterTitle");
const wishlistItems = document.getElementById("wishlistItems");
const shelves = document.querySelectorAll(".shelf");

shelves.forEach((shelf) => {
  shelf.addEventListener("click", () => {
    const category = shelf.dataset.category;
    const titleText = shelf.querySelector(".shelf-title").textContent;
    const items = wishlistData[category] || ["No items added yet."];

    letterTitle.textContent = titleText;
    wishlistItems.innerHTML = items
      .map((item) => {
        if (typeof item === "string") {
          return `<li>✦ ${item}</li>`;
        }
        return `<li>✦ <a href="${item.url}" target="_blank" rel="noopener noreferrer">${item.label}</a></li>`;
      })
      .join("");

    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
  });
});

function closeLetter() {
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
}

closeBtn.addEventListener("click", closeLetter);

// Close when clicking outside the envelope/letter on the blurred background
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeLetter();
  }
});