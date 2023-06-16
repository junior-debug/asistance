<link rel="stylesheet" href="public/css/individualInsert.css">
<div class="topSeparation"></div>
<div class="formCont">
    <form class="formIndividual" method="POST" id="individualInsert">
        <div class="top">
            <div class="formColumn">
                <div class="imgCont"></div>
                <input type="text" class="formInput" id="business" name="business" style="margin-top: 9px;" placeholder="Empresa" readonly onchange="enableBut()">
                <select name="payroll" class="formInput" style="margin-bottom: 1.5em;" id="payroll" disabled="disabled" onchange="setColor(id)">
                    <option disabled selected>Nomina</option>
                    <?php
                    foreach ($dataPayroll as $res) {
                        if ($res["estatus_deshabilitado"] == 0) { ?>
                            <option value="<?= $res["nomina"]; ?>"><?= $res["nomina"]; ?></option>
                    <?php }
                    } ?>
                </select>
                <input type="text" class="formInput" name="id" id="idData" readonly placeholder="Cedula">
                <input type="text" class="formInput" name="birthDate" id="birthDate" placeholder="Fecha de Nacimiento" readonly onfocus="(this.type='date')" onblur="(this.type='text')">
                <input type="text" class="formInput" name="email" id="email" readonly placeholder="Correo Electronico">
                <input type="text" class="formInput" name="name" id="name" readonly placeholder="Nombre y Apellido">
                <input type="text" class="formInput" name="dateAdmission" id="dateAdmission" readonly placeholder="Fecha de Ingreso" onfocus="(this.type='date')" onblur="(this.type='text')">
                <input type="text" class="formInput" name="dueDate" id="dueDate" readonly placeholder="Fecha de Culminacion de Contrato" onfocus="(this.type='date')" onblur="(this.type='text')">
            </div>
            <div class="formColumn">
                <select name="position" class="formInput" style="margin-top: 0.9em;margin-bottom: 1.5em;" id="position" disabled="disabled" onchange="setColor(id)">
                    <option disabled selected>Seleccione un Cargo</option>
                    <?php
                    foreach ($dataPosition as $res) {
                        if ($res["estatus_deshabilitado"] == 0) { ?>
                            <option value="<?= $res["cargo"]; ?>"><?= $res["cargo"]; ?></option>
                    <?php }
                    } ?>
                </select>
                <input type="text" class="formInput" name="campus" id="campus" readonly placeholder="Unidad Organizativa/Sede">
                <select name="turn" class="formInput" style="margin-bottom: 1.5em;" id="turn" disabled="disabled" onchange="setColor(id)">
                    <option disabled selected>Selecciona un Turno</option>
                    <?php
                    foreach ($dataTurn as $res) { ?>
                        <option value="<?= $res["turno"]; ?>"><?= $res["turno"]; ?></option>
                    <?php } ?>
                </select>
                <select name="rotation" class="formInput" style="margin-bottom: 1.5em;" id="rotation" disabled="disabled" onchange="setColor(id)">
                    <option disabled selected>Selecciona una Rotacion</option>
                    <?php
                    foreach ($dataRot as $res) {
                        if ($res["estatus_deshabilitado"] == 0) { ?>
                            <option value="<?= $res["rotacion"]; ?>"><?= $res["rotacion"]; ?></option>
                    <?php }
                    } ?>
                </select>
                <select name="workingHours" class="formInput" style="margin-bottom: 1.5em;" id="workingHours" disabled="disabled" onchange="setColor(id)">
                    <option disabled selected>Horario de Trabajo</option>
                    <?php
                    foreach ($dataTimetable as $res) {
                        if ($res["estatus_deshabilitado"] == 0) { ?>
                            <option value="<?= $res["horarios"]; ?>"><?= $res["horarios"]; ?></option>
                    <?php }
                    } ?>
                </select>
                <input type="text" class="formInput" name="exceptionLevel" id="exceptionLevel" readonly placeholder="Nivel de Excepcion">
                <input type="text" class="formInput" name="file" id="file" readonly placeholder="Ficha">
                <input type="text" class="formInput" name="bank" id="bank" readonly placeholder="Entidad Bancaria">
                <input type="text" class="formInput" name="accType" id="accType" readonly placeholder="Tipo de cuenta">
            </div>
            <div class="formColumn">
                <input type="text" class="formInput" name="accNumber" id="accNumber" readonly placeholder="Numero de Cuenta" style="margin-top: 1.1em;">
                <input type="text" class="formInput" name="salary" id="salary" readonly placeholder="Sueldo">
                <input type="text" class="formInput" name="manualDexterity" id="manualDexterity" readonly placeholder="Destreza Manual">
                <input type="text" class="formInput" name="address" id='address' readonly placeholder="Direccion">
                <input type="text" class="formInput" name="phone1" id="phone1" readonly placeholder="Telefono 1">
                <input type="text" class="formInput" name="phone2" id="phone2" readonly placeholder="Telefono Fijo 2">
                <input type="text" class="formInput" name="feeding" id="feeding" readonly placeholder="% Tickets Alimentacion">
                <input type="text" class="formInput" name="vacationBonus" id="vacationBonus" readonly placeholder="Bono Vacacional">
                <input type="text" class="formInput" name="utilities" id="utilities" readonly placeholder="Utilidades">
            </div>
        </div>
        <div class="bot">
            <button type="button" class="sendForm" style="display: none" id="sendForm" onclick="uploadEmployees();">Finish</button>
        </div>
    </form>
</div>

<script src="public/js/individualInsert.js"></script>