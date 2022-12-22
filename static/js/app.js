const video = document.getElementById("videoStream");
const takeScreenshot = document.getElementById("takeScreenShot");
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true }).then(function (stream) {
    video.srcObject = stream;
    video.play();
  });
}

takeScreenshot.addEventListener("click", function () {
  context.drawImage(
    video,
    0,
    0,
    video.getAttribute("width"),
    video.getAttribute("height")
  );
});
