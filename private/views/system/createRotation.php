<link rel="stylesheet" href="public/css/createRotation.css">
<div class="topSeparation"></div>
<div class="cardCont">
    <div class="card" style="width: 90%;">
        <div class="card-body">
            <h5 class="card-title">Crea tu Nueva Rotacion</h5>
            <p class="card-text">Selecciona los dias Laborales de tu nueva Rotacion.</p>
            <form action="POST" id="formRotation">
                <div class="daysCont">
                    <div class="days">
                        <label for="Lunes" class="form-check-label" style="color: white;"> Lunes</label><br>
                        <input type="checkbox" value="L" id="Lunes" class="form-check-input">
                    </div>
                    <div class="days">
                        <label for="Martes" class="form-check-label" style="color: white;"> Martes</label><br>
                        <input type="checkbox" value="M" id="Martes" name="Martes" class="form-check-input check">
                    </div>
                    <div class="days">
                        <label for="Miercoles" class="form-check-label" style="color: white;"> Miercoles</label><br>
                        <input type="checkbox" value="MI" id="Miercoles" name="Miercoles" class="form-check-input check">
                    </div>
                    <div class="days">
                        <label for="Jueves" class="form-check-label" style="color: white;"> Jueves</label><br>
                        <input type="checkbox" value="J" id="Jueves" name="Jueves" class="form-check-input check">
                    </div>
                    <div class="days">
                        <label for="Viernes" class="form-check-label" style="color: white;"> Viernes</label><br>
                        <input type="checkbox" value="V" id="Viernes" name="Viernes" class="form-check-input check">
                    </div>
                    <div class="days">
                        <label for="Sabado" class="form-check-label" style="color: white;"> Sabado</label><br>
                        <input type="checkbox" value="S" id="Sabado" name="Sabado" class="form-check-input check">
                    </div>
                    <div class="days">
                        <label for="Domingo" class="form-check-label" style="color: white;"> Domingo</label><br>
                        <input type="checkbox" value="D" id="Domingo" name="Domingo" class="form-check-input check">
                    </div>
                </div>
                <div class="constButton">
                    <button type="button" class="btn btn-success" onclick="sendRotation()">Enviar Rotacion</button>
                </div>
            </form>

        </div>
    </div>
</div>

<script src="public/js/createRotation.js"></script>