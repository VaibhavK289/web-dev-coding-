const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "photos/pexels-anjana-c-169994-674010.png") {
    myImage.setAttribute("src", "photos/pexels-souvenirpixels-414612.png");
  } else {
    myImage.setAttribute("src", "photos/pexels-anjana-c-169994-674010.png");
  }
});
