$(document).ready(function () {
  $("input.timepicker").timepicker({});
});

function newData(value) {
  switch (value) {
    case "payroll":
      $("#payroll").show("slow");
      $("#position").hide("slow");
      $("#turnOn").hide("slow");
      $("#turnOff").hide("slow");
      break;
    case "position":
      $("#position").show("slow");
      $("#turnOn").hide("slow");
      $("#turnOff").hide("slow");
      $("#payroll").hide("slow");
      break;
    case "turn":
      $("#turnOn").show("slow");
      $("#turnOff").show("slow");
      $("#payroll").hide("slow");
      $("#position").hide("slow");
      break;
  }
  $("#button").show("slow");
}

function sendData() {
  const payroll = $("#payroll").val();
  const position = $("#position").val();
  const turnOn = $("#turnOn").val();
  const turnOff = $("#turnOff").val();
  $.ajax({
    type: "POST",
    url: "?view=admin&mode=newData",
    dataType: "json",
    data: {
      payroll: payroll,
      position: position,
      turnOn: turnOn,
      turnOff: turnOff,
    },
    statusCode: {
      200: function (data) {
        alert("Registro agregados");
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
