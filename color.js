const button=document.getElementById("button");
const bg=["#BF616A","#EBCB8B","#A3BE8C","#D08770","#B48EAD"]
const fg=["#2E3440","#2E3440","#2E3440","#2E3440","#2E3440"]

function color(){
	let limit=bg.length;
	let index=Math.floor(Math.random()*limit);
	button.style.background=bg[index];
	button.style.color=fg[index];
}
