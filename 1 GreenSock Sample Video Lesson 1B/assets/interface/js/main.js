var myPlayer = videojs('my-video');

// change playback rate label default to "1x" instead of "1"
myPlayer.ready(function() {
	this.controlBar.playbackRateMenuButton.labelEl_.innerHTML = "1x";
});