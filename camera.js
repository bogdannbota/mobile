var video = document.getElementById('video'); 

function on_cam_succes(stream){
    video.srcObject = stream; 
}

function on_cam_error(err)
{
    alert("error"+err.message); 

}
var constraints = {audio:false,video:true};
navigator.mediaDevice.getUserMedia(constraints)
.then(on_cam_succes)
.catch (on_cam_error);
function capteaza()
{
    var c = document.getElementById("canvas");
    c.width = video.width; 
    c.height = video.height;
    var ctx = c.getContext("2d");
    etx.drawImage(video,0,0,640,480);
}
video.addEventListener("touchstart",capteaza);
video.addEventListener("mousedown",capteaza);
