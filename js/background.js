const images = [
  "https://wallpapercave.com/dwp1x/wp8138742.png",
  "https://wallpapercave.com/dwp1x/wp4364620.png",
  "https://wallpapercave.com/dwp1x/wp6515556.jpg",
  "https://wallpapercave.com/dwp1x/wp1813550.jpg",
  "https://wallpapercave.com/dwp1x/wp4968119.jpg",
  "https://wallpapercave.com/dwp1x/wp8138747.jpg",
  "https://wallpapercave.com/dwp1x/wp6218841.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = chosenImage;

document.body.appendChild(bgImage);
