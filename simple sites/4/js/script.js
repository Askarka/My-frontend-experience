colors = ['red', 'green', 'blue'];

window.onload = function() {
	colorIndex = 0
	bottons = ["button1", "button2", "button3", "button4"]
	bottons.forEach(function(button){
		document.getElementById(button).onclick = function(event){
			let color = event.target.dataset.color;
			if (color == "rgb"){
				color = colors[colorIndex++];
				if (colorIndex === 3){
					colorIndex = 0;
				}
			}
			document.body.style.backgroundColor = color;
			console.log(event.target.dataset.color);

		}
	})