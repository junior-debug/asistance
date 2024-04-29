function uploadEmployees() {
  const form = new FormData($("#individualInsert")[0]);
  $("#sendForm").addClass('disabled');
  let error = false;
  let campos = [];

  form.get("business") == "" && (error = true, campos.push("Empresa"));
  form.get("payroll") == "" && (error = true, campos.push("Nómina"));
  form.get("id") == "" && (error = true, campos.push("Cédula"));
  form.get("name") == "" && (error = true, campos.push("Nombre"));
  form.get("dateAdmission") == "" && (error = true, campos.push("Fecha de ingreso"));
  form.get("position") == "" && (error = true, campos.push("Cargo"));
  form.get("turn") == null && (error = true, campos.push("Turno"));
  form.get("rotation") == null && (error = true, campos.push("Rotación"));
  form.get("workingHours") == null && (error = true, campos.push("Horario"));
  form.get("file") == null && (error = true, campos.push("Ficha"));
  
  // console.log(form.get("business"))
  // console.log(form.get("payroll"))
  // console.log(form.get("id"))
  // console.log(form.get("name"))
  // console.log(form.get("dateAdmission"))
  // console.log(form.get("position"))
  // console.log(form.get("turn"))
  // console.log(form.get("rotation"))
  // console.log(form.get("workingHours"))
  // console.log(form.get("file"))

  if(error){
    alert("Los siguientes campos son requeridos: " + campos);
  } else {
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
          alert("El usuario ya se encuentra registrado.");
        },
        500: function () {
          alert("Error en el Servidor");
        },
      },
    });
  }

}

function enableBut() {
  if ($("#business").val() != "") {
    $("#sendForm").show("slow");
  }
}

function setColor(id) {
  $(`#${id}`).css("color", "black");
}

