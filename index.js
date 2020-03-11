// @ts-nocheck
// console.log("coucou");
const uploadedImageDiv = document.getElementById("uploadedImage");
const fileUpload = document.getElementById("fileUpload");
fileUpload.addEventListener("change", getImage, false);

function getImage() {
  console.log("images", this.files[0]);
  const imageToProcess = this.files[0];

  // display uploaded image
  let newImg = new Image(imageToProcess.width, imageToProcess.height);
  newImg.src = imageToProcess;
  newImg.src = URL.createObjectURL(imageToProcess);
  uploadedImageDiv.style.border = "4px solid #FCB514";
  uploadedImageDiv.appendChild(newImg);

  processImage(imageToProcess);
}

function processImage(image) {
  // TODO
}
