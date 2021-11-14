var video = document.getElementById("player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
});

function displayPercentage(num) {
	return num * 100 + "%"
}

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").textContent = displayPercentage(video.volume);

});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video")
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * .95;
	console.log("New Speed:" + video.playbackRate);

});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 1.05;
	console.log("New Speed:" + video.playbackRate);

});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Original location: " + video.currentTime + " sec")
	let timeLeft = video.duration - video.currentTime;
	if (timeLeft > 15) {
		video.currentTime += 15;
	} else {
		video.currentTime = 0;
	}
	console.log("New location: " + video.currentTime + " sec")
});

document.querySelector("#mute").addEventListener("click", function() {
	video.muted = !video.muted;
	this.textContent = video.muted ? "Unmute" : "Mute";
});

document.querySelector("#slider").addEventListener("change", function() {
	video.volume = this.value / 100;
	console.log(video.volume)
	document.querySelector("#volume").textContent = displayPercentage(video.volume);
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool")
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool")
});

