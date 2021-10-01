const captureVideoButton = document.getElementById("streamer")
const screenshotButton = document.getElementById("shotbtn");
const downloadButton = document.getElementById("download");
const img = document.getElementById("imgpureimg");
const video = document.getElementById("res-vid");
const canvas = document.createElement("canvas");
const constraints = {
video: true,
audio: true,
};


$(document).ready(function() {
    $(".imgpure-range").change(addFilter).mousemove(addFilter);
});

captureVideoButton.onclick = function () {
    navigator.mediaDevices
    .getUserMedia(constraints)
    .then(handleSuccess)
    .catch(handleError);
};

screenshotButton.onclick = video.onclick = function () {
    downloadButton.style.display = "block";
    screenshotButton.style.display = "none";
    captureVideoButton.style.display="block";
    img.style.display = "block"
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext("2d").drawImage(video, 0, 0);
    // Other browsers will fall back to image/png
    img.src = canvas.toDataURL("image/png");
    downloadButton.setAttribute("href", img.src);
    video.style.display = "none"
};

function handleSuccess(stream) {
    video.style.display = "block"
    img.style.display = "none"
    captureVideoButton.style.display = "none"
    video.srcObject = stream;
    screenshotButton.style.display = "block";
}

function handleError(error) {
   alert(error)
}

function addFilter() {
    var opacity = $("#opacity").val();
    var saturation = $("#saturation").val();
    var sepia = $("#sepia").val();
    var brightness = $("#brightness").val();
    var blur = $("#blur").val();
    var color_inverse = $("#color_inverse").val();
    var contrast = $("#contrast").val();
    var grayscale = $("#grayscale").val();
    var hue_rotate = $("#hue_rotate").val();
    $("#imgpureimg").css("-webkit-filter", "blur("+ blur +"px) grayscale("+ grayscale +"%) brightness("+brightness+"%) sepia("+sepia +"%) opacity("+opacity+"%) contrast("+contrast +"%) hue-rotate("+hue_rotate+"deg) invert("+ color_inverse +"%) saturate("+saturation+"%) ")
    $("#imgpureimg").css("filter", "blur("+ blur +"px) grayscale("+ grayscale +"%) brightness("+brightness+"%) sepia("+sepia +"%) opacity("+opacity+"%) contrast("+contrast +"%) hue-rotate("+hue_rotate+"deg) invert("+ color_inverse +"%) saturate("+saturation+"%) ")
}
