function uploadEmployees() {
  if ($("#formFile").val() == "") {
    alert("Porfavor Cargar Archivo");
  } else if ($("#formFile").val() != "") {
    const form = new FormData($("#filesForm")[0]);
    $.ajax({
      url: "?view=employees&mode=mInsertCore",
      type: "post",
      data: form,
      processData: false,
      contentType: false,
      statusCode: {
        200: function () {
          alert("Registros agregados");
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

function DownloadFromUrl(fileURL, fileName) {
  var link = document.createElement("a");
  link.href = fileURL;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
