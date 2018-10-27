function menu(){
	//document.querySelector('.menu-btn').addEventListener('click',function(){
		if (document.getElementById("nav").className.match(/(?:^|\s)esconder-menu(?!\S)/) ) {
			document.getElementById("nav").className="mostrar-menu";
		}else{
			document.getElementById("nav").className="esconder-menu";
		}
	//}); 
}
