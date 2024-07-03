<link rel="stylesheet" href="public/css/createData.css">
<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/timepicker/1.3.5/jquery.timepicker.min.css">
<div class="topSeparation"></div>

<div class="cardCont">
    <div class="card" style="width: 90%;top: 1em;">
        <div class="card-body">
            <h5 class="card-title">Crear nuevo Dato</h5>
            <div class="options">
                <select class="form-select inputData" id="selectData" onchange="newData(value)">
                    <option value="" disabled selected>Crear Nuev@</option>
                    <option value="payroll">nomina</option>
                    <option value="position">cargo</option>
                    <option value="turn">turno</option>
                </select>
                <input type="text" style="display: none" id="payroll" placeholder="nomina" class="form-control inputData" aria-label="nomina" aria-describedby="basic-addon1">
                <input type="text" style="display: none" id="position" placeholder="cargo" class="form-control inputData" aria-label="cargo" aria-describedby="basic-addon1">
                <input style="display: none" id="turnOn" placeholder="Desde" class="form-control inputData timepicker timepicker-with-dropdown text-center" aria-label="turno" aria-describedby="basic-addon1">
                <input style="display: none" id="turnOff" placeholder="Hasta" class="form-control inputData timepicker timepicker-with-dropdown text-center" aria-label="turno" aria-describedby="basic-addon1">
            </div>

            <button id="button" href="#" class="btn btn-primary" style="display: none;margin-top: 1em;" onclick="sendData()">Crear Dato</button>
        </div>
    </div>
</div>

<script src="public/js/createData.js"></script>
<script>
    document.addEventListener('DOMContentLoaded', () => {
        // Genera un número aleatorio
        const randomString = `?${Math.floor(Math.random() * 100000000)}`;
        
        // Selecciona el script existente
        const scriptElement = document.querySelector('script[src="public/js/createData.js"]');
        
        // Modifica el atributo src del script para incluir el número aleatorio
        scriptElement.src += randomString;
    });
</script>
<script src="jquery-timepicker/jquery.timepicker.min.js"></script>