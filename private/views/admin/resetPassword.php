<link rel="stylesheet" href="public/css/createUser.css">
<div class="cardCont">
    <div class="card" style="width: 30%;height: 13em;;">
        <div class="card-body">
            <h5 class="card-title">Reiniciar Contraseña de Usuario</h5>
            <div class="options">
                <!-- <div class="optionCont">
                    <select class="form-select inputData" id="option">
                        <option value="" disabled selected>Crear Nuev@</option>
                        <?php if ($_SESSION['type_user'] == "5") { ?>
                            <option value="5">Administrador</option>
                        <?php } ?>
                        <option value="4">Analista</option>
                        <option value="3">Usuario</option>
                        <option value="6">Analista de Planificacion</option>
                    </select>
                </div> -->
                <div class="optionCont">
                    <div class="iconChangePw">
                        <img src="public/images/user.png" alt="user" width="30px">
                    </div>
                    <div class="inputChangePw mx-3" style="width: 100%">
                        <input type="text" class="form-control" name="nombreUsuario" id="nombreUsuario" placeholder="Buscar usuario por nombre de usuario">
                    </div>
                </div>
            </div>
            <div class="butCont">
                <button id="buttonFindUser" href="#" class="btn btn-primary mx-3" onclick="finUserByCedula()">Buscar</button>
                <button id="buttonResetPassword" href="#" class="btn btn-primary" onclick="resetUserPassword()" disabled>Reiniciar contraseña</button>
            </div>
        </div>
    </div>
</div>

<script src="public/js/resetPassword.js"></script>