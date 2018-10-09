function changeBackground() {
	if (document.getElementById("mode").value == "Mode nuit"){
   		document.body.style.background = "#000000";
   		document.body.style.color = "#FFFFFF";
   		document.getElementById("mode").value = "Mode jour";
   }else {
   		document.body.style.background = "#FFFFFF";
   		document.body.style.color = "#000000"; 
   		document.getElementById("mode").value = "Mode nuit";
   }
}