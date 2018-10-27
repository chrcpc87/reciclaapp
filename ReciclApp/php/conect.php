<?php 
	$hostname="localhost";
	$username="root";
	$user_pass="";
	$dbname="sugerencias";
	$tabla_sug="sugerencias";
	$conn=mysqli_connect($hostname,$username,$user_pass);
	if (mysqli_connect_errno()) {
		echo "No se ha logrado conectar con el host";
	 }
	 mysqli_set_charset($conn,"UTF8");
	 mysqli_select_db($conn,$dbname) or die("Error al conectar con la base de datos");
?>