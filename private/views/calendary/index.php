<link rel="stylesheet" href="public/css/estilosCalendary.css" type="text/css">
<link href="public/css/sumoselect.min.css" rel="stylesheet" />
<div class="topSeparation"></div>

<div class="menu navbar navbar-expand-lg">
    <div class="opt" style="height: 3em;">
        <div class="payrollsCont">
            <!-- Seleccione mes -->
            <select id="selectMonth" class="form-select inputData" style="height: 80%;margin-left: 5%;" name="select">
                <option value="">Seleccione mes</option>
            </select>

            <!-- Seleccione ano -->
            <select id="selectYear" class="form-select inputData" style="height: 80%;margin-left: 5%;" name="select">
                <option value="2024">Seleccione año</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
            </select>

            <label for="search2" class="labelPayroll">Nomina</label>
            <select name="payroll" id="search2" data-placeholder="nominas" class="testSelAll2" style="width: 90%" multiple="multiple">
                <?php
                foreach ($dataPayroll as $res) {
                    if ($res["estatus_deshabilitado"] == 0) { ?>
                        <option value="<?= $res["nomina"]; ?>" id="hola"><?= $res["nomina"]; ?></option>
                <?php }
                } ?>
            </select>

            <button class="btn btn-primary" style="width: 5em; height:80%;" onclick="selectMonth()">
                buscar
            </button>
        </div>
        <div class="filterCont">
            <input type="text" class="form-control inputData" style="height: 80%;" id="search1" placeholder="Cedula">

            <?php if ($_SESSION['type_user'] != "3") { ?>
                <button class="btn btn-primary" style="width: 10em; height:80%" onclick="download()">Descargar Excel</button>
            <?php } ?>
        </div>
    </div>
    <div class="monthCont">
        <h2 id="month"></h2>
        <!-- <button onclick="gif(30000)">Presionar</button> -->
    </div>
</div>

<?php
if ($_SESSION['change_pw'] == true){
?>
<div class="modal fade" id="miModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Información</h5>
      </div>
      <div class="modal-body px-2">
        Actualiza tu contraseña
      </div>
      <input type="password" class="form-control mx-3" style="width: 90%" placeholder="Contraseña" name="changedPassword" id="changedPassword">
      <div class="modal-footer mx-2">
        <button class="btn btn-primary" style="width: 10em; height:80%" onclick="changedPasswordModal()">Aceptar</button>
      </div>
    </div>
  </div>
</div>
<?php
}
?>

<div id="calendar" style="display: none" class="collectonme card">

    <div id="gif" class="w-100 loading">
        <h4 class="text-center">
            Cargando...
                <span id="progress-text">0%</span>
        </h4>
        <div class="w-75 m-auto bg-primary border rounded">
            <div id="progress-bar" class="progress-bar text-center"></div>
        </div>
    </div>


    <div class="calendaryCont">
        <table id="table" class="table" style="width: 2300px;">
            <thead class="">
                <tr id="day-labels">
                    <th rowspan="2" class="dataDays ">nomina</th>
                    <th rowspan="2" class="dataDays">cedula</th>
                    <th rowspan="2" class="dataDays">ficha</th>
                    <th rowspan="2" class="dataDays dataDaysWidth">nombres - apellidos</th>
                    <th rowspan="2" class="dataDays">f.ingreso</th>
                    <th rowspan="2" class="dataDays">f.contrato</th>
                    <th rowspan="2" class="dataDays soloExcel">f.contrato segundo</th>
                    <th rowspan="2" class="dataDays soloExcel">f.contrato tercero</th>
                    <th rowspan="2" class="dataDays dataDaysWidth">cargo</th>
                    <th rowspan="2" class="dataDays">turno</th>
                    <th rowspan="2" class="dataDays">rotacion</th>
                </tr>
                <tr id="one">
                </tr>
            </thead>
            <tbody id="tableBody">

            </tbody>
        </table>
    </div>
</div>
<script src="bower_components\jquery\dist\jquery.min.js"></script>
<script src="bower_components\jquery-table2excel\dist\jquery.table2excel.min.js"></script>
<script src="public/js/calendary.js"></script>
<script src="public/js/jquery.sumoselect.min.js"></script>
<script>
  $(document).ready(function() {
    $('#miModal').modal('show');
  });
</script>