function sendRotation() {
  let selectedDays = [];
  if ($("#Lunes").prop("checked")) {
    const lunes = $("#Lunes").val();
    selectedDays.push(lunes);
  }
  if ($("#Martes").prop("checked")) {
    const martes = $("#Martes").val();
    selectedDays.push(martes);
  }
  if ($("#Miercoles").prop("checked")) {
    const miercoles = $("#Miercoles").val();
    selectedDays.push(miercoles);
  }
  if ($("#Jueves").prop("checked")) {
    const jueves = $("#Jueves").val();
    selectedDays.push(jueves);
  }
  if ($("#Viernes").prop("checked")) {
    const viernes = $("#Viernes").val();
    selectedDays.push(viernes);
  }
  if ($("#Sabado").prop("checked")) {
    const sabado = $("#Sabado").val();
    selectedDays.push(sabado);
  }
  if ($("#Domingo").prop("checked")) {
    const domingo = $("#Domingo").val();
    selectedDays.push(domingo);
  }
  selectedDays = selectedDays.join("-");

  $.ajax({
    url: "?view=sistema&mode=queryRotation",
    type: "POST",
    dataType: "json",
    data: { selectedDays: selectedDays },
    statusCode: {
      200: function () {
        alert("Registros agregados");
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
