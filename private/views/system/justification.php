<link rel="stylesheet" href="public/css/justification.css">
<div class="topSeparation"></div>
<div id="modalUpd" class="notice card" style="display: none;">
    <div class="inputsCont">
        <input id="updDate" type="date" class="form-control" style="width: 30%;margin-right: 30px;">
        <select id="justificationUpd" class="form-select selectData" style="margin-right: 0px;">
            <option selected disabled>Justificacion</option>
            <option value="J">Inasistencia Justificada</option>
            <option value="PNR">Permiso No Remunerado</option>
            <option value="R">Retiro</option>
            <option value="SSO">Reposo IVSS</option>
            <option value="RPN">Reposo Pre-Post Natal</option>
            <option value="NC">No Contratado</option>
            <option value="V">Vacaciones</option>
            <option value="F">Feriado Trabajado</option>
            <option value="AP">Asistente</option>
            <option value="E">Inasistente</option>
            <option value="DL">Dia libre</option>
        </select>
    </div>
    <div class="buttonsCont">
        <button type="button" class="btn btn-success" style="margin-right: 20px;" onclick="queryUpdate()">Actualizar</button>
        <button type="button" class="btn btn-danger" style="margin-right: 20px;" onclick="closeModal('update')">Cerrar</button>
    </div>
</div>
<div id="modalDel" class="notice card" style="display: none;">
    <div class="titleCont">
      <h4 class="card-title">Desea Eliminar Justificacion?</h4>
      <input type="date" id="dateDelete" style="margin-bottom: 20px;width: 30%;" class="form-control">
    </div>
    <div class="buttonsCont">
        <button type="button" class="btn btn-success" id="buttonDelete" style="margin-right: 20px;" onclick="queryDelete()">Eliminar</button>
        <button type="button" class="btn btn-danger" style="margin-right: 20px;" onclick="closeModal('delete')">Cerrar</button>
    </div>
</div>
<div id="modalDelPayRoll" class="notice card" style="display: none;">
  <div class="titleCont">
    <h4 class="card-title">Desea Eliminar Justificaciones?</h4>
  </div>
  <div class="buttonsCont">
    <button type="button" class="btn btn-success" id="buttonDelete" style="margin-right: 20px;" onclick="queryDeletePayroll()">Eliminar</button>
    <button type="button" class="btn btn-danger" style="margin-right: 20px;" onclick="closeModal('delete')">Cerrar</button>
  </div>
</div>
<div class="cardCont">
    <div class="loadingRequest" id="loadingRequest" style="display: none;">
        <div id="modalText" class="modalText" style="display: none;">
            <h4 id="justificationMessage" style="color: white;"></h4>
            <button id="butCloseAlert" type="button" class="btn btn-danger" style="margin-right: 20px;display: none;" onclick="closeModalJustification()">Cerrar</button>
        </div>
        <div id="spiner" style="display: none;">
            <img src="public/images/loading-23.gif" alt="spiner">
        </div>
    </div>
    <div class="card" style="width: 90%;margin-top: 25px;">
        <div class="card-body">
            <h5 class="card-title">Justificacion de dias ausentes</h5>
            <p class="card-text" id="individualTxt" style="display: none;">Introduzca la cedula del usuario, la justificacion del usuario y en el rango de fecha</p>
            <p class="card-text" id="massiveTxt" style="display: none;">Introduzca Nomina, la justificacion y el rango de fecha</p>
            <div style="display: flex;">
                <select class="form-select selectData" id="insertOption" onchange="typeOption(value)">
                    <option value="" selected disabled value="">Tipo justificacion </option>
                    <option value="individual">Individual</option>
                    <option value="masiva">Masiva</option>
                </select>
                <div class="IndividualInsert" id="IndividualInsert" style="display: none;">
                    <input type="text" id="id" class="form-control inputData" placeholder="Cedula" aria-label="Cedula" aria-describedby="basic-addon1">
                    <button type="button" class="btn btn-primary" onclick="queryUser()" style="margin-right: 15px;">Buscar</button>
                </div>
                <div id="massivedInsert" style="display: none;">
                    <select class="form-select selectData" id="payRoll" onchange="massivePayroll(value)">
                        <option value="" selected disabled value="0">Nomina </option>
                        <?php
                        foreach ($dataPayroll as $res) {
                            if ($res["estatus_deshabilitado"] == 0) { ?>
                                <option value="<?= $res["nomina"]; ?>"><?= $res["nomina"]; ?></option>
                        <?php }
                        } ?>
                    </select>
                </div>
                <div style="display: flex;">
                    <select id="daysJustifi" class="form-select selectData" onchange="selectDays()" style="display: none" disabled>
                        <option selected>Justificar</option>
                        <option value="1">1 Dia</option>
                        <option value="2">Varios Dias</option>
                    </select>
                    <select id="justification" class="form-select selectData" style="display: none" disabled>
                        <option selected disabled value="">Justificacion</option>
                        <option value="J">Inasistencia Justificada</option>
                        <option value="PNR">Permiso No Remunerado</option>
                        <option value="R">Retiro</option>
                        <option value="SSO">Reposo IVSS</option>
                        <option value="RPN">Reposo Pre-Post Natal</option>
                        <option value="NC">No Contratado</option>
                        <option value="V">Vacaciones</option>
                        <option value="F">Feriado Trabajado</option>
                        <option value="AP">Asistente</option>
                        <option value="E">Inasistente</option>
                        <option value="DL">Dia libre</option>
                    </select>
                </div>
            </div>

            <div id="success" class="success" style="display: none;">
                <h4 style="color: white;" id="user"></h4>
            </div>
            <div id="warning" class="warning" style="display: none;">
                <h4 style="color: white;">Usuario no Existe</h4>
            </div>
            <div class="dataCont" id="oneDay" style="margin-top: 1em; display: none;">
                <div class="input-group mb-3" style="width: 40%;">
                    <span class="input-group-text" id="basic-addon1">Seleccione el dia</span>
                    <input type="date" id="oneDate" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" onchange="button('1dia')">
                </div>
            </div>
            <div class="someDays" id="someDays" style="margin-top: 1em; display: none;">
                <div class="input-group mb-3" style="width: 40%;margin-right: 1em;">
                    <span class="input-group-text" id="basic-addon1">Desde</span>
                    <input type="date" id="initDay" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
                </div>
                <div class="input-group mb-3" style="width: 40%;">
                    <span class="input-group-text" id="basic-addon1">Hasta</span>
                    <input type="date" id="finalDay" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" onchange="button('dias')">
                </div>
            </div>

          <button id="openModal" class="btn btn-primary" style="margin-top: 1em;display: none;" onclick="openModal()">Ejecutar</button>
          <!-- <button id="but" class="btn btn-primary" style="margin-top: 1em;display: none;" onclick="validationData()">Justificar</button> -->
       </div>
      <div id="myModal" class="modal" style="display: none;">
        <div class="modal-content">
          <span class="close">&times;</span>
          <h2>Justificación Masiva</h2>
          <p>Esta justificación afectará a todos los empleados de la nómina. Puedes excluir alguno en el siguiente formulario.</p>
          <button id="but" class="btn btn-primary" onclick="validationData()">Justificar</button>
          <button id="closeModal" class="btn btn-secondary" onclick="closeModalMasive()">Cerrar</button>
        </div>
      </div>
   </div>

   <div id="updateCont" class="card" style="width: 90%;margin-top: 25px;display: none;">
     <div class="modification" style="margin-top: 10px;">
       <button class="btn btn-success" style="margin-right: 50px;" onclick="modalFunction('modify', 'individual')">Modificar</button>
       <button class="btn btn-danger" onclick="modalFunction('delete', 'individual')">Eliminar</button>
     </div>
       <div class="card-body">
           <div class="top">
               <h5 id="dataName" class="card-title"></h5>
               <h5 id="dataId" class="card-title"></h5>
               <h5 id="dataStatus" class="card-title"></h5>
               <img id="off" style="display: none; width: 2em;" src="public/images/power-on.png" alt="off">
               <img id="on" style="display: none; width: 2em;" src="public/images/power.png" alt="on">
           </div>
           <div class="body">
               <table class="table">
                   <thead>
                       <tr>
                       <th>Fecha</th>
                       <th>Usuario</th>
                       <th>Justificación</th>
                       </tr>
                   </thead>
                   <tbody id="body">
                       <!-- Aquí se insertarán las filas de la tabla -->
                    </tbody>
                </table>
                <nav aria-label="Page navigation example">
                  <ul class="pagination" id="pagination">
                    <!-- Aquí se generarán los botones de paginación -->
                  </ul>
                </nav>
            </div>
        </div>
    </div>

    <div id="updateContMassive" class="card" style="width: 90%;margin-top: 25px;display: none;">
      <div class="modification" style="margin-top: 10px;">
        <button class="btn btn-danger" onclick="modalFunction('delete', 'Payroll')">Eliminar</button>
      </div>
      <div class="card-body">
        <div class="top">
          <h5 id="dataName" class="card-title"></h5>
          <h5 id="dataId" class="card-title"></h5>
          <h5 id="dataStatus" class="card-title"></h5>
          <img id="off" style="display: none; width: 2em;" src="public/images/power-on.png" alt="off">
          <img id="on" style="display: none; width: 2em;" src="public/images/power.png" alt="on">
        </div>
        <div class="body">
          <table class="table">
            <thead>
            <tr>
              <th>Usuario</th>
              <th>Fecha</th>
              <th>Justificación</th>
            </tr>
            </thead>
            <tbody id="bodyMassive">
            <!-- Aquí se insertarán las filas de la tabla -->
            </tbody>
          </table>
        </div>
      </div>
    </div>

</div>


<script src="public/js/justification.js"></script>
<script>
    document.addEventListener('DOMContentLoaded', () => {
        // Genera un número aleatorio
        const randomString = `?${Math.floor(Math.random() * 100000000)}`;
        
        // Selecciona el script existente
        const scriptElement = document.querySelector('script[src="public/js/justification.js"]');
        
        // Modifica el atributo src del script para incluir el número aleatorio
        scriptElement.src += randomString;
    });
</script>