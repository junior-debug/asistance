<?php $dateActualy = date('Y-m-d');
?>

<link rel="stylesheet" href="public/css/changeRotation.css">
<div class="topSeparation"></div>
<div class="cardCont">
    <div class="card" style="width: 90%;top: 1em;">
        <div class="card-body">
            <h5 class="card-title">Seleccione Dato a Cambiar</h5>
            <div class="options">
                <input type="text" id="id" placeholder="cedula" class="form-control inputData" aria-label="cedula" aria-describedby="basic-addon1">
                <button type="button" class="btn btn-primary" onclick="user()" style="margin-right: 15px;">Buscar</button>
                <select class="form-select inputData inputData" id="selectData" onchange="changeOption(value)" style="display: none" disabled>
                    <option value="" disabled selected>seleccione</option>
                    <option value="nomina">nomina</option>
                    <option value="cargo">cargo</option>
                    <option value="turno">turno</option>
                    <option value="rotation">rotacion</option>
                </select>
                <select class="form-select inputData" style="display: none" id="nomina">
                    <option disabled selected>Seleccione Nomina</option>
                    <?php
                    foreach ($dataPayroll as $res) {
                        if ($res["estatus_deshabilitado"] == 0) { ?>
                            <option value="<?= $res["nomina"]; ?>"><?= $res["nomina"]; ?></option>
                    <?php }
                    } ?>
                </select>
                <input type="text" style="display: none" id="reason" placeholder="motivo" class="form-control inputData" aria-label="nomina" aria-describedby="basic-addon1">
                <select class="form-select inputData" style="display: none" id="cargo">
                    <option disabled selected>Seleccione Cargo</option>
                    <?php
                    foreach ($dataPosition as $res) {
                        if ($res["estatus_deshabilitado"] == 0) { ?>
                            <option value="<?= $res["cargo"]; ?>"><?= $res["cargo"]; ?></option>
                    <?php }
                    } ?>
                </select>
                <select class="form-select inputData" style="display: none" id="turno">
                    <option disabled selected>Seleccione Turno</option>
                    <?php
                    foreach ($dataTimetable as $res) { ?>
                        <option value="<?= $res["turno"]; ?>"><?= $res["turno"]; ?></option>
                    <?php } ?>
                </select>
                <select class="form-select inputData" style="display: none" id="rotation">
                    <option value="" disabled selected>Seleccione Rotacion</option>
                    <?php
                    foreach ($data as $res) {
                        if ($res["estatus_deshabilitado"] == 0) { ?>
                            <option value="<?= $res["rotacion"]; ?>"><?= $res["rotacion"]; ?></option>
                    <?php }
                    } ?>
                </select>
                <input type="text" id="oldPayroll" class="form-control inputData" style="display: none">
                <input type="text" id="position" class="form-control inputData" style="display: none">
                <input type="text" id="oldTurn" class="form-control inputData" style="display: none">
                <input type="text" id="oldRotation" class="form-control inputData" style="display: none">
            </div>
            <div style="display: none" id="dataDay">
                <h5 class="card-title">Fecha a efectuar el cambio</h5>
                <input id="day" type="date" class="form-control inputData" onchange="showButton()">
            </div>
            <div id="success" class="success" style="display: none;">
                <h4 style="color: white;" id="user"></h4>
            </div>
            <div id="warning" class="warning" style="display: none;">
                <h4 style="color: white;">Usuario no Existe</h4>
            </div>
            <button id="button" href="#" class="btn btn-primary" style="display: none;margin-top: 1em;" onclick="sendData()">Realizar Cambio</button>

        </div>
    </div>
</div>

<script src="public/js/changeRotation.js"></script>
<script>
    document.addEventListener('DOMContentLoaded', () => {
        // Genera un número aleatorio
        const randomString = `?${Math.floor(Math.random() * 100000000)}`;
        
        // Selecciona el script existente
        const scriptElement = document.querySelector('script[src="public/js/changeRotation.js"]');
        
        // Modifica el atributo src del script para incluir el número aleatorio
        scriptElement.src += randomString;
    });
</script>