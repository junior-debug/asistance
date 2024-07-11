<?php
class database
{
    private $db;

    public function __construct()
    {
        $this->db = new Conexion();
    }

    public function queryAllEmployee()
    {
        $sql = $this->db->query("SELECT * FROM empleados");
        if ($this->db->rows($sql) > 0) {
            while ($data = $this->db->recorrer($sql)) {
                $respuesta[] = $data;
            }
        } else {
            $respuesta = false;
        }
        return $respuesta;
    }

    public function employe($newQuery)
    {
        $sql = $this->db->query("$newQuery");
        if ($this->db->rows($sql) > 0) {
            while ($data = $this->db->recorrer($sql)) {
                $respuesta[] = $data;
            }
        } else {
            $respuesta = false;
        }
        return $respuesta;
    }


    public function asistance($id, $dataDay)
    {
        $sql = $this->db->query("SELECT * FROM `adtlog` WHERE empleadoID = '$id' AND fecha_hora_aut LIKE '$dataDay-%';");
        if ($this->db->rows($sql) > 0) {
            while ($data = $this->db->recorrer($sql)) {
                $respuesta[] = $data;
            }
        } else {
            $respuesta = false;
        }
        return $respuesta;
    }

    public function justificationsLog($id, $dataDay)
    {
        $date = $dataDay . '%';  
        $sql = $this->db->query("SELECT * FROM adtlog WHERE empleadoID = '$id' AND justificacion != '' AND fecha_hora_aut LIKE '$date'");
        if ($this->db->rows($sql) > 0) {
            while ($data = $this->db->recorrer($sql)) {
                $respuesta[] = $data;
            }
        } else {
            $respuesta = false;
        }
        return $respuesta;
    }

    public function changes($id)
    {
        $sql = $this->db->query("SELECT * FROM cambios WHERE cedula = '$id'");
        if ($this->db->rows($sql) > 0) {
            while ($data = $this->db->recorrer($sql)) {
                $respuesta[] = $data;
            }
        } else {
            $respuesta = false;
        }
        return $respuesta;
    }

    public function userChanges($id)
    {
        $sql = $this->db->query("SELECT * FROM cambios WHERE cedula = '$id'");
        if ($this->db->rows($sql) > 0) {
            while ($data = $this->db->recorrer($sql)) {
                $respuesta[] = $data;
            }
        } else {
            $respuesta = false;
        }
        return $respuesta;
    }

    public function userData($id)
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

    public function payrollChanges()
    {
        $sql = $this->db->query("SELECT * FROM `cambios`");
        if ($this->db->rows($sql) > 0) {
            while ($data = $this->db->recorrer($sql)) {
                $respuesta[] = $data;
            }
        } else {
            $respuesta = false;
        }
        return $respuesta;
    }

    public function payrollUpdate($value, $id)
    {
        $sql = $this->db->query("UPDATE empleados SET nomina_cliente = '$value', estatus_cambios = '1'  WHERE cedula = '$id'");
    }

    public function positionUpdate($value, $id)
    {
        $sql = $this->db->query("UPDATE empleados SET cargo = '$value', estatus_cambios = '1'  WHERE cedula = '$id'");
    }

    public function turnUpdate($value, $id)
    {
        $sql = $this->db->query("UPDATE empleados SET turno = '$value', estatus_cambios = '1'  WHERE cedula = '$id'");
    }

    public function rotationUpdate($value, $id)
    {
        $sql = $this->db->query("UPDATE empleados SET rotacion = '$value', estatus_cambios = '1'  WHERE cedula = '$id'");
    }

    public function deleteQuery($identifier)
    {
        $sql = $this->db->query("DELETE FROM cambios WHERE id = '$identifier'");
    }

    public function userUpdate($requestDate, $id, $oldRotation)
    {
        $sql = $this->db->query("UPDATE empleados SET vieja_rotacion = '$oldRotation', fecha_vieja_rotacion = '$requestDate' WHERE cedula = '$id'");
    }

    public function rotationLog($id, $date)
    {
        $sql = $this->db->query("SELECT fecha, rotacion, antigua_rotacion FROM `cambios` WHERE cedula = '$id' AND fecha LIKE '$date%';");
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

    public function changedPasswordFromCalendary($user, $newPassword)
    {
        $sql = $this->db->query("UPDATE users SET password = '$newPassword', change_pw = false WHERE user = '$user'");
    }
}
