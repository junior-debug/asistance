<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta charset="utf-8">
  <link href="public/images/icon.png" rel="icon" type="image/png" />
  <link rel="stylesheet" href="public/css/newloggin.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet">
  <title>SISCOATTENDANCE</title>
</head>

<body>
  <div class="contCen">
    <div class="contFather">
      <div>
        <img src="public/images/logo_prc.png" height="83" width="250px">
      </div>
      <div class="logginCont">
        <div class="top">
          <div class="inputCont">
            <div class="imgCont">
              <img src="public/images/user.png" style="width:1em">
            </div>
            <input type='text' class="inputName" name="username" id='username' placeholder='Usuario' required autofocus>
          </div>
          <div id="mensaje" class="watermark" style="display:none; color:red;">El usuario no existe, por favor verifique.</div>
          <div class="inputCont" style="margin-top: 10px;">
            <div class="imgCont">
              <img src="public/images/padlock.png" style="width:1em">
            </div>
            <input type='password' class="inputPassword" name="password" id='password' placeholder='Contraseña' maxlength="15" required>
          </div>
          <div id="mensaje2" class="watermark" style="display:none; color: red;">La contraseña es invalida, por favor verifique.</div>
          <div id="mensaje3" class="watermark" style="display:none; color: red;">Por favor introduzca su usuario o contraseña.</div>
        </div>
        <div class="bot">
          <input id="session" name="session" type="submit" class="button" value="Iniciar sesión" />
        </div>
      </div>
      <div>
        <p class="watermark">Este sitio es propiedad privada de PRC333 C.A. RIF: J-300661756-6</p>
        <p class="watermark"><?= APP_COPY ?></p>
      </div>
    </div>
  </div>
</body>

</html>
<script src="public/js/jquery-3.6.1.min.js"></script>
<script>
  //VALIDACION DEL NOMBRE DE USUARIO
  $(document).ready(function() {
    $('#username').change(function() {
      $.post('?view=session&mode=login', {
          user: $('#username').val()
        },
        function(respuesta) {
          if (respuesta != 1) {
            $('#mensaje').show()
          } else {
            $('#mensaje').hide()
          }
        })
    })

    //VALIDACION DE LA CONTRASEÑA

    $('#session').click(function() {
      if ($('#username').val() === "" || $('#password').val() === "") {
        $('#mensaje3').show()
      } else {
        $('#mensaje3').hide()
        $.post('?view=session&mode=login_', {
            user: $('#username').val(),
            pass: $('#password').val()
          },
          function(confirm) {
            if (confirm == 2) {
              $('#mensaje2').show()
            } else if (confirm == 1) {
              window.location = '?view=calendary&mode=index'
            } else {
              //window.location='?view=formulario&mode=index'
              $('#mensaje2').show()
            }
          })
      }
    })
  })
  $(document).on('keypress', function(e) {
    if (e.which == 13) {
      if ($('#username').val() === "" || $('#password').val() === "") {
        $('#mensaje3').show()
      } else {
        $('#mensaje3').hide()
        $.post('?view=session&mode=login_', {
            user: $('#username').val(),
            pass: $('#password').val()
          },
          function(confirm) {
            if (confirm == 2) {
              $('#mensaje2').show()
            } else if (confirm == 1) {
              window.location = '?view=calendary&mode=index'
            } else {
              //window.location='?view=formulario&mode=index'
              $('#mensaje2').show()
            }
          })
      }
    }
  });
</script>