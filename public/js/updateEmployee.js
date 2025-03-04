function searchEmployee() {
  const id = $("#queryEmployee").val();
  $.ajax({
    url: "?view=employees&mode=queryEmployee",
    type: "post",
    dataType: "json",
    data: { id: id },
    statusCode: {
      200: function (data) {
        if (data === false) {
          alert("Cedula Invalida");
        }
        $("#queryEmployee").val("");
        const res = data;
        for (let i = 0; i < res.length; i++) {
          if (res[i].estatus == "activo") {
            $("#imgSleep").hide("slow");
            $("#imgOn").show("slow");
            $("#imgOff").hide("slow");
            const items = document.getElementById("statusActual");
            for (let i = 0; i < items.length; i++) {
              if (items[i].value == "activo") {
                items[i].setAttribute("selected", true);
              }
            }
            $("#empresa").removeAttr("readonly");
            $("#payroll").removeAttr("readonly");
            $("#id").removeAttr("readonly");
            $("#birthDate").removeAttr("readonly");
            $("#email").removeAttr("readonly");
            $("#name").removeAttr("readonly");
            $("#dateAdmission").removeAttr("readonly");
            $("#dueDate").removeAttr("readonly");
            $("#secondContract").removeAttr("readonly");
            $("#thirdContract").removeAttr("readonly");

            $("#position").removeAttr("readonly");
            $("#campus").removeAttr("readonly");
            $("#turn").removeAttr("readonly");
            $("#rotation").removeAttr("readonly");
            $("#workingHours").removeAttr("readonly");
            $("#exceptionLevel").removeAttr("readonly");
            $("#file").removeAttr("readonly");
            $("#bank").removeAttr("readonly");
            $("#accType").removeAttr("readonly");

            $("#accNumber").removeAttr("readonly");
            $("#salary").removeAttr("readonly");
            $("#manualDexterity").removeAttr("readonly");
            $("#address").removeAttr("readonly");
            $("#phone1").removeAttr("readonly");
            $("#phone2").removeAttr("readonly");
            $("#feeding").removeAttr("readonly");
            $("#vacationBonus").removeAttr("readonly");
            $("#utilities").removeAttr("readonly");
            $("#statusActual").removeAttr("disabled");
            $("#button").show("slow");
          } else if (res[i].estatus == "inactivo") {
            $("#imgSleep").hide("slow");
            $("#imgOff").show("slow");
            $("#imgOn").hide("slow");
            const items = document.getElementById("statusActual");
            for (let i = 0; i < items.length; i++) {
              if (items[i].value == "inactivo") {
                items[i].setAttribute("selected", true);
              }
            }
            $("#statusActual").prop("disabled", true);
            $("#empresa").attr("readonly", "readonly");
            $("#payroll").attr("readonly", "readonly");
            $("#id").attr("readonly", "readonly");
            $("#birthDate").attr("readonly", "readonly");
            $("#email").attr("readonly", "readonly");
            $("#name").attr("readonly", "readonly");
            $("#dateAdmission").attr("readonly", "readonly");
            $("#dueDate").attr("readonly", "readonly");

            $("#position").attr("readonly", "readonly");
            $("#campus").attr("readonly", "readonly");
            $("#turn").attr("readonly", "readonly");
            $("#rotation").attr("readonly", "readonly");
            $("#workingHours").attr("readonly", "readonly");
            $("#exceptionLevel").attr("readonly", "readonly");
            $("#file").attr("readonly", "readonly");
            $("#bank").attr("readonly", "readonly");
            $("#accType").attr("readonly", "readonly");

            $("#accNumber").attr("readonly", "readonly");
            $("#salary").attr("readonly", "readonly");
            $("#manualDexterity").attr("readonly", "readonly");
            $("#address").attr("readonly", "readonly");
            $("#phone1").attr("readonly", "readonly");
            $("#phone2").attr("readonly", "readonly");
            $("#feeding").attr("readonly", "readonly");
            $("#vacationBonus").attr("readonly", "readonly");
            $("#utilities").attr("readonly", "readonly");
            $("#dateEgress").attr("readonly", "readonly");
            $("#contEgress").show("slow");
            $("#button").hide("slow");
          }
          $("#empresa").val(res[i].empresa);
          $("#payroll").val(res[i].nomina_cliente);
          $("#id").val(res[i].cedula);
          $("#birthDate").val(res[i].fecha_nacimiento);
          $("#email").val(res[i].correo);
          $("#name").val(res[i].nombre_apellido);
          $("#dateAdmission").val(res[i].fecha_ingreso);
          $("#dueDate").val(res[i].finalizacion_contrato);
          $("#secondContract").val(res[i].finalizacion_segundo_contrato);
          $("#thirdContract").val(res[i].finalizacion_tercer_contrato);

          $("#position").val(res[i].cargo);
          $("#campus").val(res[i].unidad_organizativa);
          $("#turn").val(res[i].turno);
          $("#rotation").val(res[i].rotacion);
          $("#workingHours").val(res[i].horario);
          $("#exceptionLevel").val(res[i].excepcion);
          $("#file").val(res[i].ficha);
          $("#bank").val(res[i].banco);
          $("#accType").val(res[i].tipo_cuenta);
          $("#dateEgress").val(res[i].fecha_egreso);

          $("#accNumber").val(res[i].numero_cuenta);
          $("#salary").val(res[i].sueldo);
          $("#manualDexterity").val(res[i].destreza);
          $("#address").val(res[i].direccion);
          $("#phone1").val(res[i].telefono_1);
          $("#phone2").val(res[i].telefono_2);
          $("#feeding").val(res[i].tickets);
          $("#vacationBonus").val(res[i].bono);
          $("#utilities").val(res[i].utilidades);
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

function updateEmployee(opt) {
  if (opt == "disableEmployee") {
    $("#realData").val($("#disqualificationDate").val());
    $("#reasons1").val($("#reasons").val());
    $("#reasonResignation1").val($("#reasonResignation").val());
    $("#dischargeRequested1").val($("#dischargeRequested").val());
    closeModal("update");
  }
  const form = new FormData($("#updateEmployee")[0]);
  $.ajax({
    url: "?view=employees&mode=updEmployeeCore",
    type: "post",
    data: form,
    processData: false,
    contentType: false,
    statusCode: {
      200: function () {
        $("#activo").removeAttr("selected");
        $("#inactivo").removeAttr("selected");
        $("#statusActual").attr("disabled", true);
        $("#imgSleep").show("imgSleep");
        $("#imgOn").hide("slow");
        $("#imgOff").hide("slow");
        alert("Actualizacion Completa");
        $("#updateEmployee")[0].reset();
        $("#button").css("display", "none");
        $("#disqualificationDate").val("");
        $("#reasons").val("");
        $("#reasonResignation").val("");
        $("#dischargeRequested").val("");
        $("#reasonResignation").hide("slow");
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

function inactive(value) {
  if (value == "inactivo") {
    $("#myModal").show();
  }
}

function closeModal(opt) {
  if (opt == "close") {
    $("#myModal").hide();
    $("#statusActual").val("activo");
  } else if (opt == "update") {
    $("#myModal").hide();
  }
}

function selectReason() {
  if ($("#reasons").val() == "RENUNCIA") {
    $("#reasonResignation").show("slow");
    $("#dischargeRequested").hide("slow");
  } else if ($("#reasons").val() == "EGRESO SOLICITADO") {
    $("#reasonResignation").hide("slow");
    $("#dischargeRequested").show("slow");
  } else {
    $("#reasonResignation").hide("slow");
    $("#dischargeRequested").hide("slow");
  }
}
