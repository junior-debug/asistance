<?php
class database
{
    private $db;

    public function __construct()
    {
        $this->db = new Conexion();
    }

    public function registro(
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
    ) {
        try {
            // Ejecutar la consulta
            $sql = $this->db->query("INSERT INTO empleados (
        empresa, nomina_cliente, cedula, fecha_nacimiento, correo, nombre_apellido, 
        fecha_ingreso, fecha_egreso, finalizacion_contrato, cargo, unidad_organizativa, 
        turno, rotacion, horario, excepcion, ficha, banco, tipo_cuenta, numero_cuenta, 
        sueldo, destreza, direccion, telefono_1, telefono_2, tickets, bono, utilidades, estatus, estatus_cambios
    ) VALUES (
        '$business', '$payroll', '$id', '$birthDate', '$email', '$name', '$dateAdmission', 
        null, '$dueDate', '$position', '$campus', '$turn', '$rotation', '$workingHours', 
        '$exceptionLevel', '$file', '$bank', '$accType', '$accNumber', '$salary', 
        '$manualDexterity', '$address', '$phone1', '$phone2', '$feeding', '$vacationBonus', 
        '$utilities', 'activo', 0
    )");

            if ($sql === false) {
                // Mostrar el error de SQL si la consulta falla
                echo "Error al insertar el registro: " . $id . $this->db->error;
            }

        } catch (Exception $e) {
            // Capturar y mostrar cualquier error que ocurra
            echo "Excepción capturada: " . $e->getMessage();
        }


    }

    // public function findEmployeById($id): bool
    public function findEmployeById($id)
    {
        // Utilizamos una consulta preparada para mayor seguridad
        $stmt = $this->db->prepare("SELECT cedula FROM empleados WHERE cedula = ? AND estatus = 'activo'");

        // Enlazamos el parámetro (asumimos que 'cedula' es de tipo string)
        $stmt->bind_param("s", $id);

        // Ejecutamos la consulta
        $stmt->execute();

        // Obtenemos el resultado
        $stmt->store_result();

        // Si hay al menos una fila encontrada, devolvemos true
        if ($stmt->num_rows > 0) {
            return true;
        } else {
            return false;
        }
    }

    public function findPayRoll($payRoll)
    {
        // Utilizamos una consulta preparada para mayor seguridad
        $stmt = $this->db->prepare("SELECT id FROM nominas WHERE nomina = ?  AND estatus_deshabilitado = 0");

        if (!$stmt) {
            die("Error en la preparación de la consulta: " . $this->db->error);
        }

        // Enlazamos el parámetro (asumimos que 'cedula' es de tipo string)
        $stmt->bind_param("s", $payRoll);

        // Ejecutamos la consulta
        $stmt->execute();

        // Obtenemos el resultado
        $stmt->store_result();

        // Si hay al menos una fila encontrada, devolvemos true
        if ($stmt->num_rows > 0) {

            return true;
        } else {
            return false;
        }
    }

    public function findTurn($turn)
    {
        // Utilizamos una consulta preparada para mayor seguridad
        $stmt = $this->db->prepare("SELECT * FROM turnos WHERE turno = ? ");

        // Enlazamos el parámetro (asumimos que 'cedula' es de tipo string)
        $stmt->bind_param("s", $turn);

        // Ejecutamos la consulta
        $stmt->execute();

        // Obtenemos el resultado
        $stmt->store_result();

        // Si hay al menos una fila encontrada, devolvemos true
        if ($stmt->num_rows > 0) {
            return true;
        } else {
            return false;
        }
    }

    public function findWorkingHours($workingHours)
    {
        // Utilizamos una consulta preparada para mayor seguridad
        $stmt = $this->db->prepare("SELECT * FROM horarios WHERE horarios = ? AND estatus_deshabilitado = 0");

        // Enlazamos el parámetro (asumimos que 'cedula' es de tipo string)
        $stmt->bind_param("s", $workingHours);

        // Ejecutamos la consulta
        $stmt->execute();

        // Obtenemos el resultado
        $stmt->store_result();

        // Si hay al menos una fila encontrada, devolvemos true
        if ($stmt->num_rows > 0) {
            return true;
        } else {
            return false;
        }
    }

    public function findRotation($rotation)
    {
        // Utilizamos una consulta preparada para mayor seguridad
        $stmt = $this->db->prepare("SELECT * FROM rotaciones WHERE rotacion = ? AND estatus_deshabilitado = 0");

        // Enlazamos el parámetro (asumimos que 'cedula' es de tipo string)
        $stmt->bind_param("s", $rotation);

        // Ejecutamos la consulta
        $stmt->execute();

        // Obtenemos el resultado
        $stmt->store_result();

        // Si hay al menos una fila encontrada, devolvemos true
        if ($stmt->num_rows > 0) {
            return true;
        } else {
            return false;
        }
    }

    public function queryEmployee($id)
    {
        $sql = $this->db->query("SELECT * FROM empleados WHERE cedula = '$id' AND estatus = 'activo'");
        if ($this->db->rows($sql) > 0) {
            while ($data = $this->db->recorrer($sql)) {
                $respuesta[] = $data;
            }
        } else {
            $respuesta = false;
        }
        return $respuesta;
    }

    public function updateEmployee(
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
    ) {
        $sql = $this->db->query("UPDATE empleados SET empresa = '$business', nomina_cliente = '$payroll', cedula = '$id', fecha_nacimiento = '$birthDate', correo = '$email', nombre_apellido = '$name', fecha_ingreso = '$dateAdmission', fecha_egreso = '$disqualificationDate', finalizacion_contrato = '$dueDate', finalizacion_segundo_contrato = '$secondContract', finalizacion_tercer_contrato = '$thirdContract', cargo = '$position', unidad_organizativa = '$campus', turno = '$turn', rotacion = '$rotation', horario = '$workingHours', excepcion = '$exceptionLevel', ficha = '$file', banco = '$bank', tipo_cuenta = '$accType', numero_cuenta = '$accNumber', sueldo = '$salary', destreza = '$manualDexterity', direccion = '$address', telefono_1 = '$phone1', telefono_2 = '$phone2', tickets = '$feeding', bono = '$vacationBonus', utilidades = '$utilities', estatus = '$status' WHERE cedula = '$id' AND estatus = 'activo'");
    }

    public function discharge(
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
    ) {
        $sql = $this->db->query("INSERT INTO egresos (empresa, nomina_cliente, cedula, fecha_nacimiento, correo, nombre_apellido, fecha_ingreso, fecha_egreso, finalizacion_contrato, finalizacion_segundo_contrato, finalizacion_tercer_contrato, cargo, unidad_organizativa, turno, rotacion, horario, excepcion, ficha, banco, tipo_cuenta, numero_cuenta, sueldo, destreza, direccion, telefono_1, telefono_2, tickets, bono, utilidades, estatus, motivo, comentario) VALUES ('$business', '$payroll', '$id', '$birthDate', '$email', '$name', '$dateAdmission','$disqualificationDate', '$dueDate', '$secondContract', '$thirdContract', '$position', '$campus', '$turn', '$rotation', '$workingHours', '$exceptionLevel', '$file', '$bank', '$accType', '$accNumber', '$salary', '$manualDexterity', '$address', '$phone1', '$phone2', '$feeding', '$vacationBonus', '$utilities', '$status', '$reasons', '$commentary')");
        $sql = $this->db->query("UPDATE empleados SET empresa = '$business', nomina_cliente = '$payroll', cedula = '$id', fecha_nacimiento = '$birthDate', correo = '$email', nombre_apellido = '$name', fecha_ingreso = '$dateAdmission', fecha_egreso = '$disqualificationDate', finalizacion_contrato = '$dueDate', finalizacion_segundo_contrato = '$secondContract', finalizacion_tercer_contrato = '$thirdContract', cargo = '$position', unidad_organizativa = '$campus', turno = '$turn', rotacion = '$rotation', horario = '$workingHours', excepcion = '$exceptionLevel', ficha = '$file', banco = '$bank', tipo_cuenta = '$accType', numero_cuenta = '$accNumber', sueldo = '$salary', destreza = '$manualDexterity', direccion = '$address', telefono_1 = '$phone1', telefono_2 = '$phone2', tickets = '$feeding', bono = '$vacationBonus', utilidades = '$utilities', estatus = '$status' WHERE cedula = '$id'");
    }

    public function rotations()
    {
        $sql = $this->db->query("SELECT * FROM rotaciones");
        if ($this->db->rows($sql) > 0) {
            while ($data = $this->db->recorrer($sql)) {
                $respuesta[] = $data;
            }
        } else {
            $respuesta = false;
        }
        return $respuesta;
    }

    public function turn()
    {
        $sql = $this->db->query("SELECT * FROM turnos");
        if ($this->db->rows($sql) > 0) {
            while ($data = $this->db->recorrer($sql)) {
                $respuesta[] = $data;
            }
        } else {
            $respuesta = false;
        }
        return $respuesta;
    }

    public function position()
    {
        $sql = $this->db->query("SELECT * FROM cargos");
        if ($this->db->rows($sql) > 0) {
            while ($data = $this->db->recorrer($sql)) {
                $respuesta[] = $data;
            }
        } else {
            $respuesta = false;
        }
        return $respuesta;
    }

    public function timetable()
    {
        $sql = $this->db->query("SELECT * FROM horarios");
        if ($this->db->rows($sql) > 0) {
            while ($data = $this->db->recorrer($sql)) {
                $respuesta[] = $data;
            }
        } else {
            $respuesta = false;
        }
        return $respuesta;
    }

    public function payroll()
    {
        $sql = $this->db->query("SELECT * FROM nominas");
        if ($this->db->rows($sql) > 0) {
            while ($data = $this->db->recorrer($sql)) {
                $respuesta[] = $data;
            }
        } else {
            $respuesta = false;
        }
        return $respuesta;
    }

    public function activeEmployees()
    {
        $sql = $this->db->query("SELECT * FROM `empleados` where estatus = 'activo'");
        if ($this->db->rows($sql) > 0) {
            while ($data = $this->db->recorrer($sql)) {
                $respuesta[] = $data;
            }
        } else {
            $respuesta = false;
        }
        return $respuesta;
    }

    public function inactiveEmployees()
    {
        $sql = $this->db->query("SELECT * FROM `egresos`");
        if ($this->db->rows($sql) > 0) {
            while ($data = $this->db->recorrer($sql)) {
                $respuesta[] = $data;
            }
        } else {
            $respuesta = false;
        }
        return $respuesta;
    }

    public function reasons()
    {
        $sql = $this->db->query("SELECT * FROM motivos_egresos");
        if ($this->db->rows($sql) > 0) {
            while ($data = $this->db->recorrer($sql)) {
                $respuesta[] = $data;
            }
        } else {
            $respuesta = false;
        }
        return $respuesta;
    }

    public function reasonResignation()
    {
        $sql = $this->db->query("SELECT * FROM motivos_renuncia");
        if ($this->db->rows($sql) > 0) {
            while ($data = $this->db->recorrer($sql)) {
                $respuesta[] = $data;
            }
        } else {
            $respuesta = false;
        }
        return $respuesta;
    }

    public function dischargeRequested()
    {
        $sql = $this->db->query("SELECT * FROM motivos_egreso_solicitado");
        if ($this->db->rows($sql) > 0) {
            while ($data = $this->db->recorrer($sql)) {
                $respuesta[] = $data;
            }
        } else {
            $respuesta = false;
        }
        return $respuesta;
    }

    public function reintegrate($dateReintegrate, $id)
    {
        $sql = $this->db->query("UPDATE empleados SET estatus = 'activo', fecha_reingreso = '$dateReintegrate' WHERE cedula = '$id'");
    }
}
