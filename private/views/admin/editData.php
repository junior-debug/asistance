<link rel="stylesheet" href="public/css/editData.css">
<div class="topSeparation"></div>

<div class="cardCont">
    <div class="card" style="width: 90%;top: 1em;">
        <div class="card-body">
            <h5 class="card-title">Editar Datos</h5>
            <div class="options">
                <select class="form-select inputData" id="selectData" onchange="queryDate(value)">
                    <option value="" disabled selected>Editar</option>
                    <option value="payroll">nomina</option>
                    <option value="position">cargo</option>
                    <option value="turn">turno</option>
                    <option value="rotation">rotacion</option>
                </select>
            </div>
        </div>
        <table id="dataTable" class="table table-striped">
            <thead id="thead">
            </thead>
            <tbody id="tbody">
            </tbody>
        </table>
    </div>
    <div class="modalWindow" id="modalWindow" style="display: none">
        <div class="card" style="width: 40%;height: 30%;top: 1em;">
            <div class="dataCont">
                <input type="text" id="inputUpdate" class="form-control inputData" style="margin-right: 0px;">
                <input type="text" id="queryId" style="display: none">
            </div>
            <div class="butCont">
                <button type="button" id="updBut" class="btn btn-success but" onclick="sendUpd('update')" style="margin-right: 30px;">Actualizar</button>
                <button type="button" id="disableBut" class="btn btn-success" onclick="sendUpd('disable')" style="margin-right: 30px;height: 2.7em;width: 7em;">Deshabilitar</button>
                <button type="button" class="btn btn-danger but" onclick="closeModalUpd()">Cerrar</button>
            </div>
        </div>
    </div>
</div>

<script src="public/js/editData.js"></script>