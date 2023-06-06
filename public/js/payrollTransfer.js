const year = new Date().getFullYear();

function selectedMonth() {
  $("#id").show("slow");
}

function queryChangesData(id, payrollActually, file, name, turn) {
  const month = $("#month").val();
  const date = year + "-" + month;
  $.ajax({
    type: "POST",
    url: "?view=sistema&mode=queryChangesData",
    dataType: "json",
    data: { id: id, date: date },
    success: function (data) {
      if (data != false) {
        for (let i = 0; i < data.length; i++) {
          $("#dataTable").append(
            `<tr><td>PRC333</td><td>${payrollActually}</td><td>${data[i].cedula}</td><td>${file}</td><td>${name}</td><td></td><td></td><td>${data[i].antigua_nomina}</td><td>${data[i].nomina}</td><td>${data[i].fecha}</td><td>${data[i].motivo}</td><td>${turn}</td></tr>`
          );
        }
        $("#download").show("slow");
      }
    },
  });
}

function user() {
  const id = $("#id").val();
  $.ajax({
    type: "POST",
    url: "?view=sistema&mode=queryUser",
    dataType: "json",
    data: { id: id },
    success: function (data) {
      if (data != "") {
        $("#success").show("slow");
        $("#warning").hide("slow");
        for (let i = 0; i < data.length; i++) {
          $("#user").text(`${data[i].nombre_apellido}`);
        }
        $("#updateCont").show("slow");
        queryChangesData(
          id,
          data[0].nomina_cliente,
          data[0].ficha,
          data[0].nombre_apellido,
          data[0].turno
        );
      } else if (data == false) {
        $("#warning").show("slow");
        $("#success").hide("slow");
      }
    },
  });
}

function download() {
  $("#table").table2excel({
    exclude: ".noExl",
    name: "Excel Document Name",
    filename: "Cambios" + new Date().toISOString() + ".xls",
    fileext: ".xls",
    exclude_img: true,
    exclude_links: true,
    exclude_inputs: true,
    preserveColors: true,
  });
}
