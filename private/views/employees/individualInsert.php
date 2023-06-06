<link rel="stylesheet" href="public/css/individualInsert.css">
<div class="topSeparation"></div>
<div class="formCont">
    <form class="formIndividual" method="POST" id="individualInsert">
        <div class="top">
            <div class="formColumn">
                <div class="imgCont"></div>
                <input type="text" class="formInput" id="business" name="business" style="margin-top: 9px;" placeholder="Empresa" onchange="enableBut()">
                <select name="payroll" class="formInput" style="margin-bottom: 1.5em;" id="payroll" onchange="setColor(id)">
                    <option disabled selected>Nomina</option>
                    <?php
                    foreach ($dataPayroll as $res) {
                        if ($res["estatus_deshabilitado"] == 0) { ?>
                            <option value="<?= $res["nomina"]; ?>"><?= $res["nomina"]; ?></option>
                    <?php }
                    } ?>
                </select>
                <input type="text" class="formInput" name="id" placeholder="Cedula">
                <input type="text" class="formInput" name="birthDate" placeholder="Fecha de Nacimiento" onfocus="(this.type='date')" onblur="(this.type='text')">
                <input type="text" class="formInput" name="email" placeholder="Correo Electronico">
                <input type="text" class="formInput" name="name" placeholder="Nombre y Apellido">
                <input type="text" class="formInput" name="dateAdmission" placeholder="Fecha de Ingreso" onfocus="(this.type='date')" onblur="(this.type='text')">
                <input type="text" class="formInput" name="dueDate" placeholder="Fecha de Culminacion de Contrato" onfocus="(this.type='date')" onblur="(this.type='text')">
            </div>
            <div class="formColumn">
                <select name="position" class="formInput" style="margin-top: 0.9em;margin-bottom: 1.5em;" id="position" onchange="setColor(id)">
                    <option disabled selected>Seleccione un Cargo</option>
                    <?php
                    foreach ($dataPosition as $res) {
                        if ($res["estatus_deshabilitado"] == 0) { ?>
                            <option value="<?= $res["cargo"]; ?>"><?= $res["cargo"]; ?></option>
                    <?php }
                    } ?>
                </select>
                <input type="text" class="formInput" name="campus" placeholder="Unidad Organizativa/Sede">
                <select name="turn" class="formInput" style="margin-bottom: 1.5em;" id="turn" onchange="setColor(id)">
                    <option disabled selected>Selecciona un Turno</option>
                    <?php
                    foreach ($dataTurn as $res) { ?>
                        <option value="<?= $res["turno"]; ?>"><?= $res["turno"]; ?></option>
                    <?php } ?>
                </select>
                <select name="rotation" class="formInput" style="margin-bottom: 1.5em;" id="rotation" onchange="setColor(id)">
                    <option disabled selected>Selecciona una Rotacion</option>
                    <?php
                    foreach ($dataRot as $res) {
                        if ($res["estatus_deshabilitado"] == 0) { ?>
                            <option value="<?= $res["rotacion"]; ?>"><?= $res["rotacion"]; ?></option>
                    <?php }
                    } ?>
                </select>
                <select name="workingHours" class="formInput" style="margin-bottom: 1.5em;" id="workingHours" onchange="setColor(id)">
                    <option disabled selected>Horario de Trabajo</option>
                    <?php
                    foreach ($dataTimetable as $res) {
                        if ($res["estatus_deshabilitado"] == 0) { ?>
                            <option value="<?= $res["horarios"]; ?>"><?= $res["horarios"]; ?></option>
                    <?php }
                    } ?>
                </select>
                <input type="text" class="formInput" name="exceptionLevel" placeholder="Nivel de Excepcion">
                <input type="text" class="formInput" name="file" placeholder="Ficha">
                <input type="text" class="formInput" name="bank" placeholder="Entidad Bancaria">
                <input type="text" class="formInput" name="accType" placeholder="Tipo de cuenta">
            </div>
            <div class="formColumn">
                <input type="text" class="formInput" name="accNumber" placeholder="Numero de Cuenta" style="margin-top: 1.1em;">
                <input type="text" class="formInput" name="salary" placeholder="Sueldo">
                <input type="text" class="formInput" name="manualDexterity" placeholder="Destreza Manual">
                <input type="text" class="formInput" name="address" placeholder="Direccion">
                <input type="text" class="formInput" name="phone1" placeholder="Telefono 1">
                <input type="text" class="formInput" name="phone2" placeholder="Telefono Fijo 2">
                <input type="text" class="formInput" name="feeding" placeholder="% Tickets Alimentacion">
                <input type="text" class="formInput" name="vacationBonus" placeholder="Bono Vacacional">
                <input type="text" class="formInput" name="utilities" placeholder="Utilidades">
            </div>
        </div>
        <div class="bot">
            <button type="button" class="sendForm" style="display: none" id="sendForm" onclick="uploadEmployees();">Finish</button>
        </div>
    </form>
</div>

<script src="public/js/individualInsert.js"></script>