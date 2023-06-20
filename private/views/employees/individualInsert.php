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
                <input type="text" class="formInput" name="id" id="idData" placeholder="Cedula">
                <input type="text" class="formInput" name="birthDate" id="birthDate" placeholder="Fecha de Nacimiento" onfocus="(this.type='date')" onblur="(this.type='text')">
                <input type="text" class="formInput" name="email" id="email" placeholder="Correo Electronico">
                <input type="text" class="formInput" name="name" id="name" placeholder="Nombre y Apellido">
                <input type="text" class="formInput" name="dateAdmission" id="dateAdmission" placeholder="Fecha de Ingreso" onfocus="(this.type='date')" onblur="(this.type='text')">
                <input type="text" class="formInput" name="dueDate" id="dueDate" placeholder="Fecha de Culminacion de Contrato" onfocus="(this.type='date')" onblur="(this.type='text')">
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
                <input type="text" class="formInput" name="campus" id="campus" placeholder="Unidad Organizativa/Sede">
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
                <input type="text" class="formInput" name="exceptionLevel" id="exceptionLevel" placeholder="Nivel de Excepcion">
                <input type="text" class="formInput" name="file" id="file" placeholder="Ficha">
                <input type="text" class="formInput" name="bank" id="bank" placeholder="Entidad Bancaria">
                <input type="text" class="formInput" name="accType" id="accType" placeholder="Tipo de cuenta">
            </div>
            <div class="formColumn">
                <input type="text" class="formInput" name="accNumber" id="accNumber" placeholder="Numero de Cuenta" style="margin-top: 1.1em;">
                <input type="text" class="formInput" name="salary" id="salary" placeholder="Sueldo">
                <input type="text" class="formInput" name="manualDexterity" id="manualDexterity" placeholder="Destreza Manual">
                <input type="text" class="formInput" name="address" id='address' placeholder="Direccion">
                <input type="text" class="formInput" name="phone1" id="phone1" placeholder="Telefono 1">
                <input type="text" class="formInput" name="phone2" id="phone2" placeholder="Telefono Fijo 2">
                <input type="text" class="formInput" name="feeding" id="feeding" placeholder="% Tickets Alimentacion">
                <input type="text" class="formInput" name="vacationBonus" id="vacationBonus" placeholder="Bono Vacacional">
                <input type="text" class="formInput" name="utilities" id="utilities" placeholder="Utilidades">
            </div>
        </div>
        <div class="bot">
            <button type="button" class="sendForm" style="display: none" id="sendForm" onclick="uploadEmployees();">Finish</button>
        </div>
    </form>
</div>

<script src="public/js/individualInsert.js"></script>