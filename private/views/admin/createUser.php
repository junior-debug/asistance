<link rel="stylesheet" href="public/css/createUser.css">
<div class="cardCont">
    <div class="card" style="width: 30%;height: 20em;;">
        <div class="card-body">
            <h5 class="card-title">Crear nuevo Usuario</h5>
            <div class="options">
                <div class="optionCont">
                    <select class="form-select inputData" id="option">
                        <option value="" disabled selected>Crear Nuev@</option>
                        <?php if ($_SESSION['type_user'] == "5") { ?>
                            <option value="5">Administrador</option>
                        <?php } ?>
                        <option value="4">Analista</option>
                        <option value="3">Usuario</option>
                        <option value="6">Analista de Planificacion</option>
                    </select>
                </div>
                <div class="optionCont">
                    <div class="iconCont">
                        <img src="public/images/user.png" alt="user" style="width: 1.5em;">
                    </div>
                    <div class="inputCont">
                        <input type="text" class="form-control" name="userName" id="userName" placeholder="Nombre">
                    </div>
                </div>
                <div class="optionCont">
                    <div class="iconCont">
                        <img src="public/images/user.png" alt="user" style="width: 1.5em;">
                    </div>
                    <div class="inputCont">
                        <input type="text" class="form-control" name="lastName" id="lastName" placeholder="Apellido">
                    </div>
                </div>
                <div class="optionCont">
                    <div class="iconCont">
                        <img src="public/images/padlock.png" alt="user" style="width: 1.5em;">
                    </div>
                    <div class="inputCont">
                        <input type="text" class="form-control" name="password" id="password" placeholder="Contraseña">
                    </div>
                </div>
            </div>
            <div class="butCont">
                <button id="button" href="#" class="btn btn-primary" onclick="verification()">Crear Usuario</button>
            </div>
        </div>
    </div>
</div>
<script src="public/js/createUser.js"></script>

<script>
    document.addEventListener('DOMContentLoaded', () => {
        // Genera un número aleatorio
        const randomString = `?${Math.floor(Math.random() * 100000000)}`;
        
        // Selecciona el script existente
        const scriptElement = document.querySelector('script[src="public/js/createUser.js"]');
        
        // Modifica el atributo src del script para incluir el número aleatorio
        scriptElement.src += randomString;
    });
</script>