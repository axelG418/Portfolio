//mode nuit
function changeBackground() {
	if (document.getElementById("mode").value == "Mode nuit"){
   		document.body.style.background = "#282923";
   		document.body.style.color = "#F5F5F5";
   		document.getElementById("mode").value = "Mode jour";
   }else {
   		document.body.style.background = "#F5F5F5";
   		document.body.style.color = "#282923"; 
   		document.getElementById("mode").value = "Mode nuit";
   }
}

window.onload = function onload(){
	
	//afficher l'heure
	horloge('heure');

	//initialiser ladate
	var ladate = new Date();

	//mode nuit quand c'est la nuit
	if (ladate.getHours()>20 && ladate.getHours()<6)
	{
		document.body.style.background = "#282923";
   		document.body.style.color = "#F5F5F5";
   		document.getElementById("mode").value = "Mode jour";
   		document.getElementById("intro").innerHTML = "Bonsoir et bienvenue sur le portfolio de Sylvain Lasarte. ";
	}

//afficher l'heure
function horloge(el) {
  if(typeof el=="string") { el = document.getElementById(el); }
  function actualiser() {
    var date = new Date();
    var str = date.getHours();
    str += ':'+(date.getMinutes()<10?'0':'')+date.getMinutes();
    str += ':'+(date.getSeconds()<10?'0':'')+date.getSeconds();
    el.innerHTML = str;
  }
  actualiser();
  setInterval(actualiser,1000);
}
};

