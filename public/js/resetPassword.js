function finUserByCedula() {
    const username = $("#nombreUsuario").val();
    if (username == null) {
      alert("Porfavor rellenar campos");
    } else {
      console.log('entro')
      $.ajax({
        type: "POST",
        url: "?view=gestion&mode=findUser",
        dataType: "json",
        data: {
          username: username,
        },
        statusCode: {
          200: function (data) { 
            alert(`Usuario ${data.responseText} Encontrado`);
            $("#buttonResetPassword").prop("disabled", false);
          },
          400: function () {
            alert("Error en la solicitud");
          },
          500: function () {
            alert("Error en el Servidor");
          },
        },
      });
    }
  }
  
  function resetUserPassword() {
    const username = $("#nombreUsuario").val();
    $.ajax({
      type: "POST",
      url: "?view=gestion&mode=resetUserPassword",
      dataType: "json",
      data: {
        username: username,
      },
      statusCode: {
        200: function (data) { 
          alert('contraseña reiniciada a prc12345+')
        },
        400: function () {
          alert("Error en la solicitud");
        },
        500: function () {
          alert("Error en el Servidor");
        },
      },
    });
  }
  