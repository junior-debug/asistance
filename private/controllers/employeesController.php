<?php
include(PUBLIC_DIR . 'general/session.php');
if (empty($_SESSION)) {
    header('location:index.php');
} else {
    include_once(MODEL_DIR . 'employeesModel.php');
    $conexion = new database();
    if (isset($_GET['mode'])) {
        switch ($_GET['mode']) {
            case 'employees':
                include(PUBLIC_DIR . 'general/header.php');
                include(PUBLIC_DIR . 'general/navbar.php');
                include(HTML_DIR . 'employees/employees.php');
                include(PUBLIC_DIR . 'general/footer.php');
                break;
                #------------------------------------------------------------------------------------
            case 'queryEmployees':
                $data = $_POST['selected'];
                if ($data == 1) {
                    $data = $conexion->activeEmployees();
                    echo json_encode($data);
                } else if ($data == 2) {
                    $data = $conexion->inactiveEmployees();
                    echo json_encode($data);
                }

                break;
                #------------------------------------------------------------------------------------
            case 'individualInsert':
                $dataRot = $conexion->rotations();
                $dataPosition = $conexion->position();
                $dataTimetable = $conexion->timetable();
                $dataPayroll = $conexion->payroll();
                $dataTurn = $conexion->turn();
                include(PUBLIC_DIR . 'general/header.php');
                include(PUBLIC_DIR . 'general/navbar.php');
                include(HTML_DIR . 'employees/individualInsert.php');
                include(PUBLIC_DIR . 'general/footer.php');
                break;
                #------------------------------------------------------------------------------------
            case 'iInsertCore':
                $business = $_POST['business'];
                $business = strtoupper($business);
                $payroll = $_POST['payroll'];
                $payroll = strtoupper($payroll);
                $id = $_POST['id'];
                $id = strtoupper($id);
                $birthDate = $_POST['birthDate'];
                $birthDate = strtoupper($birthDate);
                $email = $_POST['email'];
                $email = strtoupper($email);
                $name = $_POST['name'];
                $name = strtoupper($name);
                $dateAdmission = $_POST['dateAdmission'];
                $dateAdmission = strtoupper($dateAdmission);
                $dueDate = $_POST['dueDate'];
                $dueDate = strtoupper($dueDate);
                $position = $_POST['position'];
                $position = strtoupper($position);
                $campus = $_POST['campus'];
                $campus = strtoupper($campus);
                $turn = $_POST['turn'];
                $turn = strtoupper($turn);
                $rotation = $_POST['rotation'];
                $rotation = strtoupper($rotation);
                $workingHours = $_POST['workingHours'];
                $workingHours = strtoupper($workingHours);
                $exceptionLevel = $_POST['exceptionLevel'];
                $exceptionLevel = strtoupper($exceptionLevel);
                $file = $_POST['file'];
                $file = strtoupper($file);
                $bank = $_POST['bank'];
                $bank = strtoupper($bank);
                $accType = $_POST['accType'];
                $accType = strtoupper($accType);
                $accNumber = $_POST['accNumber'];
                $accNumber = strtoupper($accNumber);
                $salary = $_POST['salary'];
                $salary = strtoupper($salary);
                $manualDexterity = $_POST['manualDexterity'];
                $manualDexterity = strtoupper($manualDexterity);
                $address = $_POST['address'];
                $address = strtoupper($address);
                $phone1 = $_POST['phone1'];
                $phone1 = strtoupper($phone1);
                $phone2 = $_POST['phone2'];
                $phone2 = strtoupper($phone2);
                $feeding = $_POST['feeding'];
                $feeding = strtoupper($feeding);
                $vacationBonus = $_POST['vacationBonus'];
                $vacationBonus = strtoupper($vacationBonus);
                $utilities = $_POST['utilities'];
                $utilities = strtoupper($utilities);

                $individualInsert = $conexion->registro(
                    $business,
                    $payroll,
                    $id,
                    $birthDate,
                    $email,
                    $name,
                    $dateAdmission,
                    $dueDate,
                    $position,
                    $campus,
                    $turn,
                    $rotation,
                    $workingHours,
                    $exceptionLevel,
                    $file,
                    $bank,
                    $accType,
                    $accNumber,
                    $salary,
                    $manualDexterity,
                    $address,
                    $phone1,
                    $phone2,
                    $feeding,
                    $vacationBonus,
                    $utilities
                );
                break;
                #------------------------------------------------------------------------------------
            case 'massiveInsert':
                include(PUBLIC_DIR . 'general/header.php');
                include(PUBLIC_DIR . 'general/navbar.php');
                include(HTML_DIR . 'employees/massiveInsert.php');
                include(PUBLIC_DIR . 'general/footer.php');
                break;
                #------------------------------------------------------------------------------------
            case 'mInsertCore':
                $fileContent = $_FILES['fileEmployees'];
                $fileContent = file_get_contents($fileContent['tmp_name']);
                $fileContent = explode("\n", $fileContent);
                $fileContent = array_filter($fileContent);
                $fileContent = array_slice($fileContent, 1);
                foreach ($fileContent as $employees) {
                    $listEmployees[] = explode(";", $employees);
                }

                foreach ($listEmployees as $dataEmployees) {
                    $business = $dataEmployees[0];
                    $business = strtoupper($business);
                    $payroll = $dataEmployees[1];
                    $payroll = strtoupper($payroll);
                    $id = $dataEmployees[2];
                    $birthDate = $dataEmployees[3];
                    $birthDate = explode("/", $birthDate);
                    $birthDate = "$birthDate[2]" . "-" . "$birthDate[0]" . "-" . "$birthDate[1]";
                    $email = $dataEmployees[4];
                    $email = strtoupper($email);
                    $name = $dataEmployees[5];
                    $name = strtoupper($name);
                    $dateAdmission = $dataEmployees[6];
                    $dateAdmission = explode("/", $dateAdmission);
                    $dateAdmission0 = intval($dateAdmission[0]);
                    if ($dateAdmission0 < 10) {
                        $dateAdmission0 = '0' . $dateAdmission[0];
                    };
                    $dateAdmission1 = intval($dateAdmission[1]);
                    if ($dateAdmission1 < 10) {
                        $dateAdmission1 = '0' . $dateAdmission[1];
                    };
                    $dateAdmission2 = $dateAdmission[2];
                    $dateAdmission = "$dateAdmission2" . "-" . "$dateAdmission1" . "-" . "$dateAdmission0";
                    $dueDate = $dataEmployees[7];
                    $dueDate = explode("/", $dueDate);
                    $dueDate = "$dueDate[2]" . "-" . "$dueDate[0]" . "-" . "$dueDate[1]";
                    $position = $dataEmployees[8];
                    $position = strtoupper($position);
                    $campus = $dataEmployees[9];
                    $campus = strtoupper($campus);
                    $turn = $dataEmployees[10];
                    $turn = strtoupper($turn);
                    $rotation = $dataEmployees[11];
                    $rotation = strtoupper($rotation);
                    $workingHours = $dataEmployees[12];
                    $exceptionLevel = $dataEmployees[13];
                    $file = $dataEmployees[14];
                    $bank = $dataEmployees[15];
                    $accType = $dataEmployees[16];
                    $accNumber = $dataEmployees[17];
                    $salary = $dataEmployees[18];
                    $manualDexterity = $dataEmployees[19];
                    $manualDexterity = strtoupper($manualDexterity);
                    $address = $dataEmployees[20];
                    $address = strtoupper($address);
                    $phone1 = $dataEmployees[21];
                    $phone2 = $dataEmployees[22];
                    $feeding = $dataEmployees[23];
                    $vacationBonus = $dataEmployees[24];
                    $utilities = $dataEmployees[25];

                    $registro = $conexion->registro(
                        $business,
                        $payroll,
                        $id,
                        $birthDate,
                        $email,
                        $name,
                        $dateAdmission,
                        $dueDate,
                        $position,
                        $campus,
                        $turn,
                        $rotation,
                        $workingHours,
                        $exceptionLevel,
                        $file,
                        $bank,
                        $accType,
                        $accNumber,
                        $salary,
                        $manualDexterity,
                        $address,
                        $phone1,
                        $phone2,
                        $feeding,
                        $vacationBonus,
                        $utilities
                    );
                }
                break;
                #------------------------------------------------------------------------------------
            case 'updateEmployee':
                $dataRot = $conexion->rotations();
                $dataPosition = $conexion->position();
                $dataTimetable = $conexion->timetable();
                $dataPayroll = $conexion->payroll();
                $dataTurn = $conexion->turn();
                $reasons = $conexion->reasons();
                $reasonResignation = $conexion->reasonResignation();
                $dischargeRequested = $conexion->dischargeRequested();
                include(PUBLIC_DIR . 'general/header.php');
                include(PUBLIC_DIR . 'general/navbar.php');
                include(HTML_DIR . 'employees/updateEmployee.php');
                include(PUBLIC_DIR . 'general/footer.php');
                break;
                #------------------------------------------------------------------------------------
            case 'queryEmployee':
                $id = $_POST['id'];
                $data = $conexion->queryEmployee($id);
                echo json_encode($data);
                break;
                #------------------------------------------------------------------------------------
            case 'updEmployeeCore':
                $business = $_POST['business'];
                $payroll = $_POST['payroll'];
                $id = $_POST['id'];
                $birthDate = $_POST['birthDate'];
                $email = $_POST['email'];
                $name = $_POST['name'];
                $dateAdmission = $_POST['dateAdmission'];
                $dueDate = $_POST['dueDate'];
                $secondContract = $_POST['secondContract'];
                $thirdContract = $_POST['thirdContract'];
                $disqualificationDate = $_POST['disqualificationDate'];
                $position = $_POST['position'];
                $campus = $_POST['campus'];
                $turn = $_POST['turn'];
                $rotation = $_POST['rotation'];
                $workingHours = $_POST['workingHours'];
                $exceptionLevel = $_POST['exceptionLevel'];
                $file = $_POST['file'];
                $bank = $_POST['bank'];
                $accType = $_POST['accType'];
                $accNumber = $_POST['accNumber'];
                $salary = $_POST['salary'];
                $manualDexterity = $_POST['manualDexterity'];
                $address = $_POST['address'];
                $phone1 = $_POST['phone1'];
                $phone2 = $_POST['phone2'];
                $feeding = $_POST['feeding'];
                $vacationBonus = $_POST['vacationBonus'];
                $utilities = $_POST['utilities'];
                $status = $_POST['statusActual'];
                if ($status == "activo") {
                    $registro = $conexion->updateEmployee(
                        $business,
                        $payroll,
                        $id,
                        $birthDate,
                        $email,
                        $name,
                        $dateAdmission,
                        $dueDate,
                        $secondContract,
                        $thirdContract,
                        $disqualificationDate,
                        $position,
                        $campus,
                        $turn,
                        $rotation,
                        $workingHours,
                        $exceptionLevel,
                        $file,
                        $bank,
                        $accType,
                        $accNumber,
                        $salary,
                        $manualDexterity,
                        $address,
                        $phone1,
                        $phone2,
                        $feeding,
                        $vacationBonus,
                        $utilities,
                        $status
                    );
                } else if ($status == "inactivo") {
                    $reasons = $_POST['reasons'];
                    $reasonResignation = $_POST['reasonResignation'];
                    $dischargeRequested = $_POST['dischargeRequested'];
                    if ($reasonResignation != "") {
                        $commentary = $reasonResignation;
                    } else if ($dischargeRequested != "") {
                        $commentary = $dischargeRequested;
                    }
                    $registro = $conexion->discharge(
                        $business,
                        $payroll,
                        $id,
                        $birthDate,
                        $email,
                        $name,
                        $dateAdmission,
                        $dueDate,
                        $secondContract,
                        $thirdContract,
                        $disqualificationDate,
                        $position,
                        $campus,
                        $turn,
                        $rotation,
                        $workingHours,
                        $exceptionLevel,
                        $file,
                        $bank,
                        $accType,
                        $accNumber,
                        $salary,
                        $manualDexterity,
                        $address,
                        $phone1,
                        $phone2,
                        $feeding,
                        $vacationBonus,
                        $utilities,
                        $status,
                        $reasons,
                        $commentary
                    );
                }



                break;
            default:

                header('location:' . HTML_DIR . 'error.html');
                break;
        }
    }
}
