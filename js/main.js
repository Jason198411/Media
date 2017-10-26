

const video = document.getElementsByTagName("video")[0];
const span = document.querySelectorAll(".main span");
const main = document.querySelector(".main");

video.addEventListener("timeupdate", () =>{
	let time = video.currentTime

	for(let i = 0; i < span.length; i++){
		let start = span[i].getAttribute("start-time");
		let end = span[i].getAttribute("end-time");
		if(time >= start && time <= end){
			span[i].className = "highlight";
		}else{
			span[i].className = "";
		}	
	}	
});

main.addEventListener("click", (e) => {
	video.setCurrentTime(e.target.getAttribute("start-time"));
});














