<?php
class database
{
    private $db;

    public function __construct()
    {
        $this->db = new Conexion();
    }

    public function rotation($selectedDays)
    {
        $sql = $this->db->query("INSERT INTO rotaciones (rotacion) VALUES ('$selectedDays')");
    }

    public function queryUser($id)
    {
        $sql = $this->db->query("SELECT * FROM `empleados` WHERE cedula = '$id'");
        if ($this->db->rows($sql) > 0) {
            while ($data = $this->db->recorrer($sql)) {
                $respuesta[] = $data;
            }
        } else {
            $respuesta = false;
        }
        return $respuesta;
    }

    public function queryJustification($id, $date, $justification, $finalDay)
    {
        $sql = $this->db->query("INSERT INTO adtlog (empleadoID, fecha_hora_aut, fecha_aut, hora_aut, direccion, nombre_dispositivo, sn_dispositivo, nombre_persona, no_tarjeta, justificacion, final_justificacion) VALUES ('$id', '$date', '0000-00-00', '12:56:01.000000', 'IN', '', '', '', '', '$justification', '$finalDay')");
    }

    public function queryUpdate($id, $date, $justification)
    {
        $date = $date . '%';
        $sql = $this->db->query("SELECT * FROM adtlog WHERE empleadoID = '$id' AND fecha_hora_aut LIKE '$date' AND justificacion != ''");
        if ($this->db->rows($sql) > 0) {
            while ($data = $this->db->recorrer($sql)) {
                $respuesta[] = $data;
            }
        } else {
            $respuesta = false;
        }

        if ($respuesta) {
            $sql = $this->db->query("UPDATE adtlog SET justificacion = '$justification' WHERE empleadoID = '$id' AND fecha_hora_aut = '$date'");
            return true;
        }
        return false;
    }

    public function queryDelete($id, $date)
    {
        $sql = $this->db->query("DELETE FROM adtlog WHERE empleadoID = '$id' AND fecha_hora_aut like '$date%'");
    }

    public function queryDeletePayRoll($payrollUsers, $date)
    {
        // Verifica que el array no esté vacío
        if (!is_array($payrollUsers) || empty($payrollUsers)) {
            throw new \Exception("La variable \$payrollUsers debe ser un array no vacío.");
        }

        // Convertir el array en una lista de strings separados por comas, cada uno entre comillas simples
        $payRollList = implode("','", $payrollUsers);

        // Ejecutar la consulta
        $sql = $this->db->query("DELETE FROM adtlog WHERE fecha_hora_aut = '$date' AND empleadoID IN ('$payRollList')");
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

    public function logJustificacionM($user, $payRoll, $opt, $now)
    {   
        $sql = $this->db->query("INSERT INTO log_changes (nombre, fecha_cambio, cambio, justificacion, empleado) VALUES ('$user', '$now', '', '$opt' , '$payRoll')");
    }

    public function logJustificacion($user, $id, $opt, $now)
    {   
        $sql = $this->db->query("INSERT INTO log_changes (nombre, fecha_cambio, cambio, justificacion, empleado) VALUES ('$user', '$now', '', '$opt' , '$id')");
    }

    public function logChanges($user, $id, $selecData, $now)
    {   
        $sql = $this->db->query("INSERT INTO log_changes (nombre, fecha_cambio, cambio, justificacion, empleado) VALUES ('$user', '$now', '$selecData', '' , '$id')");
    }

    public function changeNomina($nomina, $oldPayroll, $reason, $dataDay, $id)
    {   
        $sql = $this->db->query("INSERT INTO cambios (cedula, fecha, nomina, antigua_nomina, motivo) VALUES ('$id', '$dataDay', '$nomina', '$oldPayroll', '$reason')");
    }

    public function changeCargo($cargo, $oldPosition, $dataDay, $id)
    {
        $sql = $this->db->query("INSERT INTO cambios (cedula, fecha, cargo, antiguo_cargo) VALUES ('$id', '$dataDay', '$cargo', '$oldPosition')");
    }

    public function changeTurno($turno, $oldTurn, $dataDay, $id)
    {
        $sql = $this->db->query("INSERT INTO cambios (cedula, fecha, turno, antiguo_turno) VALUES ('$id', '$dataDay', '$turno', '$oldTurn')");
    }

    public function changeRot($rotation, $oldRotation, $dataDay, $id)
    {
        $sql = $this->db->query("INSERT INTO cambios (cedula, fecha, rotacion, antigua_rotacion ) VALUES ('$id', '$dataDay', '$rotation', '$oldRotation')");
    }

    public function queryChangesData($id, $date)
    {
        $sql = $this->db->query("SELECT * FROM `cambios` WHERE cedula = '$id' AND fecha LIKE '$date%'");
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

    public function validateJustification($id, $date)
    {
        $date = $date . '%';  
        $sql = $this->db->query("SELECT * FROM adtlog WHERE empleadoID = '$id' AND fecha_hora_aut LIKE '$date' AND justificacion != ''");
        $respuesta = [];
        if ($this->db->rows($sql) > 0) {
            while ($data = $this->db->recorrer($sql)) {
                $respuesta[] = $data;
            }
        } else {
            $respuesta = false;
        }
        return $respuesta;
    }

    public function getEmployeesForPayroll($payRoll)
    {
        $sql = $this->db->query("SELECT cedula FROM empleados WHERE  nomina_cliente = '$payRoll' AND estatus = 'activo'");
        $respuesta = [];
        if ($this->db->rows($sql) > 0) {
            while ($data = $this->db->recorrer($sql)) {
                $respuesta[] = $data;
            }
        } else {
            $respuesta = false;
        }
        return $respuesta;
    }

    public function validateJustificationForMassive($cedulas, $date)
    {
        $date = $date . '%';
        $sql = $this->db->query("SELECT * FROM adtlog WHERE fecha_hora_aut LIKE '$date' AND justificacion != '' AND empleadoID IN ($cedulas)");
        $respuesta = [];
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

    public function queryPayroll($id)
    {
        $sql = $this->db->query("SELECT cedula, fecha, nomina, antigua_nomina FROM `cambios` WHERE cedula = '$id'");
        if ($this->db->rows($sql) > 0) {
            while ($data = $this->db->recorrer($sql)) {
                $respuesta[] = $data;
            }
        } else {
            $respuesta = false;
        }
        return $respuesta;
    }

    public function queryPosition($id)
    {
        $sql = $this->db->query("SELECT cedula, fecha, cargo, antiguo_cargo FROM `cambios` WHERE cedula = '$id'");
        if ($this->db->rows($sql) > 0) {
            while ($data = $this->db->recorrer($sql)) {
                $respuesta[] = $data;
            }
        } else {
            $respuesta = false;
        }
        return $respuesta;
    }

    public function queryTurn($id)
    {
        $sql = $this->db->query("SELECT cedula, fecha, turno, antiguo_turno FROM `cambios` WHERE cedula = '$id'");
        if ($this->db->rows($sql) > 0) {
            while ($data = $this->db->recorrer($sql)) {
                $respuesta[] = $data;
            }
        } else {
            $respuesta = false;
        }
        return $respuesta;
    }

    public function queryRotation($id)
    {
        $sql = $this->db->query("SELECT cedula, fecha, rotacion, antigua_rotacion FROM `cambios` WHERE cedula = '$id' ORDER BY `fecha` ASC");
        if ($this->db->rows($sql) > 0) {
            while ($data = $this->db->recorrer($sql)) {
                $respuesta[] = $data;
            }
        } else {
            $respuesta = false;
        }
        return $respuesta;
    }

    public function payRollEmployees($payRoll)
    {
        $sql = $this->db->query("SELECT * FROM `empleados` WHERE nomina_cliente = '$payRoll' AND estatus = 'activo'");
        if ($this->db->rows($sql) > 0) {
            while ($data = $this->db->recorrer($sql)) {
                $respuesta[] = $data;
            }
        } else {
            $respuesta = false;
        }
        return $respuesta;
    }
}
