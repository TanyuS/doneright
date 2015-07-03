$(document).ready(function(){
	$('.bxslider').bxSlider("adaptiveHeight: true");


	var canvas =  document.getElementById('diamond');
	var context = canvas.getContext("2d"),
		imageObj = new Image();
	imageObj.src = "./img/pic-slide1.jpg";
	imageObj.onload = function () {
		context.drawImage(imageObj,(canvas.width-imageObj.width)/2, (canvas.height-imageObj.height)/2);
	var diamondLine = new Path2D();	
		diamondLine.lineWidth = 8;
		diamondLine.fillStyle ='rgba(2,125,180,1)';
		diamondLine.moveTo(130, 0);
		diamondLine.lineTo(260, 85);
		diamondLine.lineTo(130, 160);
		diamondLine.lineTo(0, 85);
		diamondLine.lineTo(130, 0);
	    context.stroke(diamondLine);

	context.globalCompositeOperation = "destination-out";
	var deleteCorner = new Path2D();
		deleteCorner.moveTo(0,0);
		deleteCorner.lineTo(130,0);
		deleteCorner.lineTo(0,85);
	};
});