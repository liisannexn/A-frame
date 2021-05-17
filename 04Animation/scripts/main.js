

// changing individual properties with code and using setInterval
var rotationSpeed = -0.005;
var myOtherBox = document.getElementById('myOtherBox');

function spinXas(){
	myOtherBox.object3D.rotation.x += rotationSpeed;
	console.log(myOtherBox.object3D.rotation.x);
}

	setInterval(spinXas, 16); //equivalent to 60 fps

	function spinYas(){
		myOtherBox.object3D.rotation.y += rotationSpeed;
		console.log(myOtherBox.object3D.rotation.y);
	}

		setInterval(spinYas, 16); //equivalent to 60 fps

function spinZas(){
	myOtherBox.object3D.rotation.z += rotationSpeed;
	console.log(myOtherBox.object3D.rotation.z);
}

	setInterval(spinZas, 16); //equivalent to 60 fps
