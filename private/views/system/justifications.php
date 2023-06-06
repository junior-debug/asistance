<link rel="stylesheet" href="public/css/justifications.css">
<div class="topSeparation"></div>
<div class="cardCont">
    <button class="btn btn-primary" style="width: 20%;" onclick="download()">Descargar Excel</button>
</div>
<div class="card tableCont" id="dataCont">
    <table id="table" class="table table-striped">
        <thead class="table-dark">
            <tr style="text-align: center;">
                <th>Nomina</th>
                <th>Cedula</th>
                <th>Ficha</th>
                <th>Nombre y Apellido</th>
                <th>Descripcion Reposo / Suspension</th>
                <th>Cantidad</th>
                <th>Fecha Desde</th>
                <th>fecha Hasta</th>
                <th>Comentarios</th>
            </tr>
        </thead>
        <tbody id="dataTable">
        </tbody>
    </table>
</div>
<script src="bower_components\jquery\dist\jquery.min.js"></script>
<script src="bower_components\jquery-table2excel\dist\jquery.table2excel.min.js"></script>
<script src="public/js/justifications.js"></script>