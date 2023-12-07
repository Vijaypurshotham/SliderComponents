// ? Below flag value shows which index image is present (0,1,2,3)
let images = 0;

// ! To add the functionalities of arrow
function controller(x) {
  images += x;

  slidesshow(images);
}
// ! To display the default image
function slidesshow(num) {
  let slides = document.getElementsByClassName("slide");

  //   ! below it says that if num i.e 4 is equal to 4 then reset the images by the showing the 0th index image
  if (num == slides.length) {
    images = 0;
    num = 0;
  } else if (num < 0) {
    images = slides.length - 1;
    num = slides.length - 1;
  }

  for (let sliding of slides) {
    sliding.style.display = "none";
  }
  slides[num].style.display = "block";
}
slidesshow(images);
