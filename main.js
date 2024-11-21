let images = [
  "./images/img1.jpg.jpg",
  "./images/img2.jpg.jpg",
  "./images/img3.jpg.jpg",
  "./images/img4.jpg.jpg",
  "./images/img5.jpg.jpg",
  "./images/img6.jpg.jpg",
  "./images/img7.jpg.jpg",
  "./images/img8.jpg.jpg",
];
// Create image ui

function imagesUi() {
  let mainImageContainer = document.querySelector("#main");
  if (!images || images.length === 0) return;
  mainImage = document.createElement("img");
  mainImage.classList.add("mainImage");
  mainImage.src = images[0];
  mainImageContainer.appendChild(mainImage);
  let thumbNails = document.querySelector(".images");
  let activeThumbnail = null;
  //Loop through image array
  images.forEach((img, index) => {
    let image = document.createElement("img");
    image.classList.add("thumImage");
    image.src = img;
    thumbNails.appendChild(image);
    //Blur first image
    if (index === 0) {
      image.style.opacity = 0.5;
      activeThumbnail = image;
    }
    // Add eventListner to each image
    image.addEventListener("click", function (e) {
      //Reset Active Thumbnail
      if (activeThumbnail) {
        activeThumbnail.style.opacity = 1;
      }
      e.target.style.opacity = 0.5;
      mainImage.src = e.target.src;
      mainImage.classList.remove("mainImage");
      void mainImage.offsetWidth;
      mainImage.classList.add("mainImage");
      activeThumbnail = e.target;
    });
  });
}
imagesUi();
