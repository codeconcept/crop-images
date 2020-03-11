// @ts-nocheck
// console.log("coucou");
const uploadedImageDiv = document.getElementById("uploadedImage");
const fileUpload = document.getElementById("fileUpload");
fileUpload.addEventListener("change", getImage, false);
let cropper = null;
const cropButton = document.getElementById("cropButton");
cropButton.addEventListener("click", cropImage);
let myGreatImage = null;
const croppedImage = document.getElementById("croppedImage");

function getImage() {
  console.log("images", this.files[0]);
  const imageToProcess = this.files[0];

  // display uploaded image
  let newImg = new Image(imageToProcess.width, imageToProcess.height);
  newImg.src = imageToProcess;
  newImg.src = URL.createObjectURL(imageToProcess);
  newImg.id = "myGreatImage";
  uploadedImageDiv.style.border = "4px solid #FCB514";
  uploadedImageDiv.appendChild(newImg);
  myGreatImage = document.getElementById("myGreatImage");

  processImage();
}

function processImage() {
  cropper = new Cropper(myGreatImage, {
    aspectRatio: 1, // 16 / 9,
    crop(event) {
      console.log(
        Math.round(event.detail.width),
        Math.round(event.detail.height)
      );
      const canvas = this.cropper.getCroppedCanvas();
      croppedImage.src = canvas.toDataURL("image/png");
    }
  });
}

function cropImage() {
  const imgurl = cropper.getCroppedCanvas().toDataURL();
  const img = document.createElement("img");
  img.src = imgurl;
  document.getElementById("cropResult").appendChild(img);
}
