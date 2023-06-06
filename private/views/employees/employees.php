<link rel="stylesheet" href="public/css/employees.css">
<link rel="stylesheet" href="//cdn.datatables.net/1.13.1/css/jquery.dataTables.min.css">
<div class="topSeparation"></div>

<div class="card cardTop">
    <div class="card-body">
        <h5 class="card-title">Empleados</h5>
        <div class="bodyCont">
            <div class="query">
                <select class="form-select inputData" id="dataSelected">
                    <option value="0" selected disabled>Seleccionar</option>
                    <option value="1">Activos</option>
                    <option value="2">Egresos</option>
                </select>
                <button class="btn btn-primary" onclick="queryEmployees()">Consultar</a>
            </div>
            <div id="filter" class="filter" style="display: none">
                <div class="totalEmployees">
                    <p class="textEmployees" id="totalEmployees"></p>
                </div>
                <input type="text" id="search1" placeholder="Buscar" class="form-control inputData">
                <button class="btn btn-primary" style="width: 20%;" onclick="download()">Descargar Excel</button>
            </div>
        </div>
    </div>
</div>

<div id="cardData" class="card cardCont" style="display: none">
    <table class="table table-striped" id="dataTable" style="width: 160em;">
        <thead id="tableHead" class="table-dark">
        </thead>
        <tbody id="tableBody">
        </tbody>
    </table>
</div>

<script src="public/js/employees.js"></script>
<script src="bower_components\jquery\dist\jquery.min.js"></script>
<script src="bower_components\jquery-table2excel\dist\jquery.table2excel.min.js"></script>
<script src="//cdn.datatables.net/1.13.1/js/jquery.dataTables.min.js"></script>