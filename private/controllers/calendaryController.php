<?php
include(PUBLIC_DIR . 'general/session.php');
if (empty($_SESSION)) {
	header('location:index.php');
} else {
	include_once(MODEL_DIR . 'calendarioModel.php');
	$conexion = new database();
	if (isset($_GET['mode'])) {
		switch ($_GET['mode']) {
			case 'index':
				$data = $conexion->queryAllEmployee();
				$dataPayroll = $conexion->payroll();
				include(PUBLIC_DIR . 'general/header.php');
				include(PUBLIC_DIR . 'general/navbar.php');
				include(HTML_DIR . 'calendary/index.php');
				include(PUBLIC_DIR . 'general/footer.php');
				break;
				#------------------------------------------------------------------------------------
			case 'asistanceData':
				$newQuery = $_POST['newQuery'];
				$employeData = $conexion->employe($newQuery);
				echo json_encode($employeData);
				break;
				#------------------------------------------------------------------------------------
			case 'asistance':
				$id = $_POST['id'];
				$dataDay = $_POST['dataDay'];
				$asistance = $conexion->asistance($id, $dataDay);
				echo json_encode($asistance);
				break;
				#------------------------------------------------------------------------------------
			case 'queryChanges':
				$id = $_POST['id'];
				$data = $conexion->changes($id);
				echo json_encode($data);
				#------------------------------------------------------------------------------------
				break;
			case 'userChanges':
				$id = $_POST['id'];
				$data = $conexion->userChanges($id);
				echo json_encode($data);
				#------------------------------------------------------------------------------------
				break;
			case 'payrollUpdate':
				$value = $_POST['value'];
				$id = $_POST['id'];
				$data = $conexion->payrollUpdate($value, $id);
				echo json_encode($data);
				#------------------------------------------------------------------------------------
				break;
			case 'positionUpdate':
				$value = $_POST['value'];
				$id = $_POST['id'];
				$data = $conexion->positionUpdate($value, $id);
				echo json_encode($data);
				#------------------------------------------------------------------------------------
				break;
			case 'turnUpdate':
				$value = $_POST['value'];
				$id = $_POST['id'];
				$data = $conexion->turnUpdate($value, $id);
				echo json_encode($data);
				#------------------------------------------------------------------------------------
				break;
			case 'rotationUpdate':
				$value = $_POST['value'];
				$id = $_POST['id'];
				$data = $conexion->rotationUpdate($value, $id);
				echo json_encode($data);
				#------------------------------------------------------------------------------------
				break;
			case 'deleteQuery':
				$identifier = $_POST['identifier'];
				$id = $_POST['id'];
				$data = $conexion->deleteQuery($identifier, $id);
				echo json_encode($data);
				#------------------------------------------------------------------------------------
				break;
			case 'userData':
				$id = $_POST['id'];
				$data = $conexion->userData($id);
				echo json_encode($data);
				#------------------------------------------------------------------------------------
				break;
			case 'userUpdate':
				$requestDate = $_POST['requestDate'];
				$id = $_POST['id'];
				$oldRotation = $_POST['oldRotation'];
				$data = $conexion->userUpdate($requestDate, $id, $oldRotation);
				echo json_encode($data);
				#------------------------------------------------------------------------------------
				break;
			case 'rotationLog':
				$id = $_POST['id'];
				$date = $_POST['date'];
				$data = $conexion->rotationLog($id, $date);
				echo json_encode($data);
				#------------------------------------------------------------------------------------
				break;
			case 'changedPasswordFromCalendary':
				$newPassword = $_POST['newPassword'];
				$newPassword = md5($newPassword);
				$user = $_SESSION['user'];
				$data = $conexion->changedPasswordFromCalendary($user, $newPassword);
				#------------------------------------------------------------------------------------
				break;
			case 'payrollChanges':
				$data = $conexion->payrollChanges();
				echo json_encode($data);
				#------------------------------------------------------------------------------------
				break;
			default:
				header('location:' . HTML_DIR . 'error.html');
				break;
		}
	}
}
