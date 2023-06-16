function uploadEmployees() {
  const form = new FormData($("#individualInsert")[0]);
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

