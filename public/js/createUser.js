function createUser() {
  const opt = $("#option").val();
  const name = $("#userName").val();
  const nameSlice = name.slice(0, 1);
  const userName = nameSlice + $("#lastName").val();
  const lastName = $("#lastName").val();
  const password = $("#password").val();
  if (opt == null) {
    alert("Porfavor rellenar campos");
  } else if (name == "") {
    alert("Porfavor rellenar campos");
  } else if (lastName == "") {
    alert("Porfavor rellenar campos");
  } else if (password == "") {
    alert("Porfavor rellenar campos");
  } else {
    $.ajax({
      type: "POST",
      url: "?view=admin&mode=queryCreateUser",
      dataType: "json",
      data: {
        opt: opt,
        name: name,
        userName: userName,
        lastName: lastName,
        password: password,
      },
      statusCode: {
        200: function (data) {
          alert("Usuario Creado");
          location.reload();
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

function verification() {
  let name = $("#userName").val();
  name = name.slice(0, 1);
  const userName = name + $("#lastName").val();
  $.ajax({
    type: "POST",
    url: "?view=admin&mode=queryUser",
    dataType: "json",
    data: {
      userName: userName,
    },
    statusCode: {
      200: function (data) {
        if (data == false) {
          createUser();
        } else {
          alert("ya existe el usuario");
        }
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
