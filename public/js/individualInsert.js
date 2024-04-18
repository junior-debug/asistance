function uploadEmployees() {
  const form = new FormData($("#individualInsert")[0]);

  // $("#sendForm").disabled();
  $("#sendForm").addClass('disabled');

  console.log("form", form);

  $.ajax({
    url: "?view=employees&mode=iInsertCore",
    type: "post",
    data: form,
    processData: false,
    contentType: false,
    statusCode: {
      200: function () {
        alert("Registros agregados");
        $("#individualInsert")[0].reset();
      },
      400: function () {
        alert("Error en la solicitud");
      },
      410: function () {
        alert("El usuario ya se encuentra activo");
      },
      500: function () {
        alert("Error en el Servidor");
      },
    },
  });
}

function enableBut() {
  if ($("#business").val() != "") {
    $("#sendForm").show("slow");
  }
}

function setColor(id) {
  $(`#${id}`).css("color", "black");
}

