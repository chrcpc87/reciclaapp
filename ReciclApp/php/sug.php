<?php 
	if (isset($_POST['send'])) {
		include("conect.php");
		if ($_POST['name']!="" && $_POST['email']!="" && $_POST['textarea']!="") {
			$name=$_POST['name'];
			$email=$_POST['email'];
			$sug=$_POST['textarea'];
			$valName=preg_match_all("/^([a-z ñáéíóú]{2,30})$/i", $name);
			if ($valName==false) {
				echo '<script>
	 					alert("El nombre que intenta ingresar no es válido");
	 					window.history.go(-1);
	 				  </script>';
			}else{
				if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
					$valTA=preg_match_all("/^([a-z ñáéíóú]{4,300})$/i", $sug);
					if ($valTA==false) {
						echo '<script>
			 					alert("Desde cuatro, hasta 300 caracteres puede ser su sugerencia.");
			 					window.history.go(-1);
			 				  </script>';
					}else{
						$regSug="INSERT INTO $tabla_sug(id_mensaje,nombre,email,suegerencias) VALUES('','$name','$email','$sug')";
						if (mysqli_query($conn,$regSug)) {
							echo '<script>
				 					alert("Gracias! Su sugerencia es importante para nosotros. Feliz dia!");
				 					location.href="../html/index.html";
				 				  </script>';
						}else{
							echo '<script>
									alert("No se a enviado la sugerencia.");
									window.history.go(-1);
								  </script>';
						}
					}
				}else{
					echo '<script>
	 						alert("El correo electrónico que intenta ingresar no es válido");
	 						window.history.go(-1);
	 					  </script>';
				}
			}
		}else{
			echo '<script>
					alert("Debe llenar todos los campos!");
					window.history.go(-1);
				  </script>';
		}
	}
 ?>