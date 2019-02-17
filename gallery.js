var slideShow - 0;
var slide = [];
var time = 1000;


//image list
images[0] = 'slide';
images[1] = 'slide';
images[2] = 'slide';
images[3] = 'slide';
images[4] = 'slide';

//function to change the image
function changeImg(){
	document.slideShow.src =gallery[]
	if(slide < images.length - 1){
		slide++;
	} else {
		slide = 0;
	}
}

setTimeout("changeImg()", time);
window.onload = changeImg;
