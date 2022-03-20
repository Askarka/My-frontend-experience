function myMove() {
	elem = document.getElementById("myAnimation");
	time = 0;
	posx = 0;
	posy = 0;
	vx = 4;
	vy = 4;
	id = setInterval(frame, 10);
	function frame(argument) {
		if (time != 100000){
			time++;
			posx+=vx;
			posy+=vy;
			elem.style.top = posx + 'px';
			elem.style.left = posy + 'px';
			if (posx > 750 || posx < 0){
				vx*=-1;
			}
			if (posy > 1365 || posy < 0){
				vy*=-1;
			}
		}
		
	}
}
