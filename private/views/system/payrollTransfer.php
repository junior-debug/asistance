<link rel="stylesheet" href="public/css/payrollTransfer.css">
<div class="topSeparation"></div>

<div class="cardCont">
    <div class="card" style="width: 95%;top: 1em;">
        <div class="card-body">
            <h5 class="card-title">Transferencias de Nomina</h5>
            <div class="options">
                <select class="form-select inputData" name="" id="month" onchange="selectedMonth()">
                    <option value="" selected disabled>Seleccione Mes</option>
                    <option value="01">Enero</option>
                    <option value="02">Febrero</option>
                    <option value="03">Marzo</option>
                    <option value="04">Abril</option>
                    <option value="05">Mayo</option>
                    <option value="06">Junio</option>
                    <option value="07">Julio</option>
                    <option value="08">Agosto</option>
                    <option value="09">Septiembre</option>
                    <option value="10">Octubre</option>
                    <option value="11">Noviembre</option>
                    <option value="12">Diciembre</option>
                </select>
                <input type="text" id="id" placeholder="cedula" class="form-control inputData" style="display: none;" aria-label="cedula" aria-describedby="basic-addon1">
                <button type="button" class="btn btn-primary" onclick="user()" style="margin-right: 15px;">Buscar</button>
                <button id="download" type="button" class="btn btn-primary" style="display: none;" onclick="download()">Descargar</button>
            </div>
            <div id="success" class="success" style="display: none;">
                <h4 style="color: white;" id="user"></h4>
            </div>
            <div id="warning" class="warning" style="display: none;">
                <h4 style="color: white;">Usuario no Existe</h4>
            </div>
        </div>
    </div>
    <div id="updateCont" class="card" style="width: 95%;margin-top: 25px;display: none;">
        <div class="card-body">
            <table id="table">
                <thead>
                    <tr>
                        <th>Empresa</th>
                        <th>Nómina</th>
                        <th>Cédula</th>
                        <th>Ficha</th>
                        <th>Nombre y Apellido</th>
                        <th>Compañía Origen</th>
                        <th>Compañía Destino</th>
                        <th>Nómina Origen</th>
                        <th>Nómina Destino</th>
                        <th>Fecha de Movimiento</th>
                        <th>Motivo de Movimiento</th>
                        <th>TURNO</th>
                    </tr>
                </thead>
                <tbody id="dataTable">

                </tbody>
            </table>
        </div>
    </div>
</div>
<script src="bower_components\jquery\dist\jquery.min.js"></script>
<script src="bower_components\jquery-table2excel\dist\jquery.table2excel.min.js"></script>
<script src="public/js/payrollTransfer.js"></script>
<script>
    document.addEventListener('DOMContentLoaded', () => {
        // Genera un número aleatorio
        const randomString = `?${Math.floor(Math.random() * 100000000)}`;
        
        // Selecciona el script existente
        const scriptElement = document.querySelector('script[src="public/js/payrollTransfer.js"]');
        
        // Modifica el atributo src del script para incluir el número aleatorio
        scriptElement.src += randomString;
    });
</script>