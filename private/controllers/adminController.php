<?php
include(PUBLIC_DIR . 'general/session.php');
if (empty($_SESSION)) {
    header('location:index.php');
} else {
    include_once(MODEL_DIR . 'adminModel.php');
    $conexion = new database();
    if (isset($_GET['mode'])) {
        switch ($_GET['mode']) {
            case 'createData':
                include(PUBLIC_DIR . 'general/header.php');
                include(PUBLIC_DIR . 'general/navbar.php');
                include(HTML_DIR . 'admin/createData.php');
                include(PUBLIC_DIR . 'general/footer.php');
                break;
                #------------------------------------------------------------------------------------
            case 'newData':
                $payroll = $_POST['payroll'];
                $position = $_POST['position'];
                $turnOn =  $_POST['turnOn'];
                $turnOff =  $_POST['turnOff'];

                if ($payroll != "") {
                    $data = $conexion->newPayroll($payroll);
                } else if ($position != "") {
                    $data = $conexion->newPosition($position);
                } else if ($turnOn != "" && $turnOff != "") {
                    $turn = $turnOn . " " . "a" . " " . $turnOff;
                    $data = $conexion->newTimeTable($turn);
                }
                break;
                #------------------------------------------------------------------------------------
            case 'editData':
                include(PUBLIC_DIR . 'general/header.php');
                include(PUBLIC_DIR . 'general/navbar.php');
                include(HTML_DIR . 'admin/editData.php');
                include(PUBLIC_DIR . 'general/footer.php');
                break;
            #------------------------------------------------------------------------------------
            case 'resetPassword':
                include(PUBLIC_DIR . 'general/header.php');
                include(PUBLIC_DIR . 'general/navbar.php');
                include(HTML_DIR . 'admin/resetPassword.php');
                include(PUBLIC_DIR . 'general/footer.php');                
                break; 
            #------------------------------------------------------------------------------------
            case 'resetUserPassword':    
                $username = $_POST['username'];
                $newPassword = md5('prc12345+');
                $data = $conexion->resetUserPassword($username, $newPassword);

                break; 
            #------------------------------------------------------------------------------------
            case 'findUser':
                $userName = $_POST['username'];
                $data = $conexion->user($userName);
                break;
                #------------------------------------------------------------------------------------
            case 'queryData':
                $dataUser = $_POST['dataUser'];
                if ($dataUser == "payroll") {
                    $data = $conexion->payRoll();
                    echo json_encode($data);
                } else if ($dataUser == "position") {
                    $data = $conexion->position();
                    echo json_encode($data);
                } else if ($dataUser == "turn") {
                    $data = $conexion->timetable();
                    echo json_encode($data);
                } else if ($dataUser == "rotation") {
                    $data = $conexion->rotation();
                    echo json_encode($data);
                }
                break;
                #------------------------------------------------------------------------------------
            case 'payrollUpd':
                $inputUpdate = $_POST['inputUpdate'];
                $id = $_POST['id'];
                if ($inputUpdate != "") {
                    $data = $conexion->payrollUpd($inputUpdate, $id);
                } else {
                    $data = $conexion->payrollDisable($id);
                }
                break;
                #------------------------------------------------------------------------------------
            case 'positionUpd':
                $inputUpdate = $_POST['inputUpdate'];
                $id = $_POST['id'];
                if ($inputUpdate != "") {
                    $data = $conexion->positionUpd($inputUpdate, $id);
                } else {
                    $data = $conexion->positionDisable($id);
                }
                break;
                #------------------------------------------------------------------------------------
            case 'timeTableUpd':
                $inputUpdate = $_POST['inputUpdate'];
                $id = $_POST['id'];
                if ($inputUpdate != "") {
                    $data = $conexion->timeTableUpd($inputUpdate, $id);
                } else {
                    $data = $conexion->timeTableDisable($id);
                }
                break;
                #------------------------------------------------------------------------------------
            case 'rotationUpd':
                $inputUpdate = $_POST['inputUpdate'];
                $id = $_POST['id'];
                if ($inputUpdate != "") {
                    $data = $conexion->rotationUpd($inputUpdate, $id);
                } else {
                    $data = $conexion->rotationDisable($id);
                }
                break;
                #------------------------------------------------------------------------------------
            case 'createUser':
                include(PUBLIC_DIR . 'general/header.php');
                include(PUBLIC_DIR . 'general/navbar.php');
                include(HTML_DIR . 'admin/createUser.php');
                include(PUBLIC_DIR . 'general/footer.php');
                break;
                #------------------------------------------------------------------------------------
            case 'queryCreateUser':
                $opt = $_POST['opt'];
                $name = $_POST['name'];
                $userName = $_POST['userName'];
                $lastName = $_POST['lastName'];
                $password = $_POST['password'];
                $password = md5($password);
                $data = $conexion->createUser($userName, $name, $lastName, $password, $opt);
                break;
                #------------------------------------------------------------------------------------
            case 'queryUser':
                $userName = $_POST['userName'];
                $data = $conexion->user($userName);
                echo json_encode($data);
                break;
                #------------------------------------------------------------------------------------
            default:
                header('location:' . HTML_DIR . 'error.html');
                break;
        }
    }
}
