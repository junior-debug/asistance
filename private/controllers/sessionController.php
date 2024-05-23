<?php
include_once(MODEL_DIR . 'sessionModel.php');
$conexion   = new database();
if (isset($_GET['mode'])) {
	switch ($_GET['mode']) {
		case 'login':
			$u = $_POST['user'];
			$c = $conexion->sessionLogin($u);
			if (!empty($c)) {
				$user = $c[0][4];
				echo 1;
			} else {
				echo 2;
			}
			break;
			#_______________________________________________________________
		case 'login_':
			$u = $_POST['user'];
			$p = $_POST['pass'];
			$p_generico = 123456;
			$p_md5 = md5($p);

			$c = $conexion->sessionNew($u, $p_md5);
			if (!empty($c)) {
				$id   			= $c[0][0];
				$nombre 		= $c[0][1];
				$apellido 		= $c[0][2];
				$user 			= $c[0][3];
				$tipo 			= $c[0][5];
				$status 		= $c[0][6];
				$cod_serv		= $c[0][7];
				$change_pw		= $c[0][8];

				if ($status == 'INACTIVO') {
					echo 3;
				} else {
					session_start();
					$_SESSION['id']			= $id;
					$_SESSION['nombre'] 	= $nombre;
					$_SESSION['apellido']	= $apellido;
					$_SESSION['user'] 		= $user;
					$_SESSION['type_user']	= $tipo;
					$_SESSION['cod_serv']	= $cod_serv;
					$_SESSION['change_pw']	= $change_pw;

					if ($p == '123456') {
						echo 3;
					} else {
						echo 1;
					}
				}
			} else {
				echo 2;
				echo $pass;
			}
			break;
			#_________________________________________________________________________________
		case 'disconect':
			include(PUBLIC_DIR . 'general/session.php');
			session_destroy();
			header('location:index.php');
			break;
			#_________________________________________________________________________________
		default:
			header('location:' . HTML_DIR . 'error.html');
			break;
	}
} else {
	include(HTML_DIR . 'login/index.php');
}
