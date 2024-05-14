// Fotoğraf nesneleri
var photos = [
  {
    url: "img/images/1.jpeg",
    text: "Senin gülüşün, dünyamı aydınlatıyor.",
    date: "2024-01-01",
  },
  {
    url: "img/images/2.jpeg",
    text: "Seninle her anım, benim için bir hazine.",
    date: "2024-07-15",
  },
  {
    url: "img/images/3.jpeg",
    text: "Seni düşündüğümde, içimde bir huzur dalgası oluşuyor.",
    date: "2024-12-25",
  },
  {
    url: "img/images/4.jpeg",
    text: "Senin yanında olmak, en güvenli limanım.",
    date: "2024-05-10",
  },
  {
    url: "img/images/5.jpeg",
    text: "Senin sevgin, benim için bir ilham kaynağı.",
    date: "2024-03-20",
  },
  {
    url: "img/images/6.jpeg",
    text: "Hayatımın en güzel anları, seninle geçirdiğim anlardır.",
    date: "2024-08-28",
  },
  {
    url: "img/images/7.jpeg",
    text: "Seninle her şey daha renkli ve anlamlı.",
    date: "2024-06-12",
  },
  {
    url: "img/images/8.jpeg",
    text: "Senin varlığın, hayatımın en büyük hediyesi.",
    date: "2024-09-05",
  },
  {
    url: "img/images/9.jpeg",
    text: "Seninle her zorluğun üstesinden gelebileceğimi biliyorum.",
    date: "2024-12-30",
  },
  {
    url: "img/images/10.jpeg",
    text: "Seni sevmek, en güzel duygu.",
    date: "2024-10-18",
  },
];

// Fotoğraf panosuna fotoğrafları ekleme
const photoBoard = document.getElementById("photoBoard");

photos.forEach((photo) => {
  const polaroid = document.createElement("div");
  polaroid.classList.add("polaroid");

  const img = document.createElement("img");
  img.src = photo.url;
  img.alt = photo.text;

  const caption = document.createElement("div");
  caption.classList.add("caption");
  caption.innerText = photo.text;

  const date = document.createElement("div");

  const rotation = Math.floor(Math.random() * 17) - 8;
  polaroid.style.transform = `rotate(${rotation}deg)`;

  polaroid.appendChild(img);
  polaroid.appendChild(caption);
  polaroid.appendChild(date);

  photoBoard.appendChild(polaroid);
});

// Arka plana rastgele çiçekler ekleme
const flowerContainer = document.getElementById("flowerContainer");
const flowerCount = 1000; // Eklenecek çiçek sayısı

for (let i = 0; i < flowerCount; i++) {
  const flower = document.createElement("div");
  flower.classList.add("flower");

  // Rastgele pozisyon ve boyutta çiçek oluşturma
  const size = Math.floor(Math.random() * 50) + 200; // Rastgele boyut (50 ile 100 arasında)
  const left = Math.random() * 20; // Rastgele sol pozisyon
  const top = Math.random() * 330; // Rastgele üst pozisyon

  flower.style.width = `${size}px`;
  flower.style.height = `${size}px`;
  flower.style.left = `${left}%`;
  flower.style.top = `${top}%`;

  flowerContainer.appendChild(flower);
}

// Arka plana rastgele çiçekler ekleme
const flowerContainer2 = document.getElementById("flowerContainer2");
const flowerCount2 = 1000; // Eklenecek çiçek sayısı

for (let i = 0; i < flowerCount; i++) {
  const flower = document.createElement("div");
  flower.classList.add("flower");

  // Rastgele pozisyon ve boyutta çiçek oluşturma
  const size = Math.floor(Math.random() * 50) + 200; // Rastgele boyut (50 ile 100 arasında)
  const left = Math.random() * (90 - 50) + 20;
  const top = Math.random() * 330; // Rastgele üst pozisyon

  flower.style.width = `${size}px`;
  flower.style.height = `${size}px`;
  flower.style.left = `${left}%`;
  flower.style.top = `${top}%`;

  flowerContainer.appendChild(flower);
}

// Arka plana rastgele çiçekler ekleme
const flowerContainer3 = document.getElementById("flowerContainer3");
const flowerCount3 = 1000; // Eklenecek çiçek sayısı

for (let i = 0; i < flowerCount; i++) {
  const flower = document.createElement("div");
  flower.classList.add("flower");

  // Rastgele pozisyon ve boyutta çiçek oluşturma
  const size = Math.floor(Math.random() * 50) + 200; // Rastgele boyut (50 ile 100 arasında)
  const left = Math.random() * (110 - 70) + 44;
  const top = Math.random() * 330; // Rastgele üst pozisyon

  flower.style.width = `${size}px`;
  flower.style.height = `${size}px`;
  flower.style.left = `${left}%`;
  flower.style.top = `${top}%`;

  flowerContainer.appendChild(flower);
}
