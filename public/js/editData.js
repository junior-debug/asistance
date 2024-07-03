function openModalUpd(id, opt) {
  const textCont = $(`#data${id}`).text();
  $("#modalWindow").show();
  $("#inputUpdate").val(textCont);
  $("#queryId").val(id);
  if (opt == "update") {
    $("#updBut").show();
    $("#disableBut").hide();
  } else {
    $("#disableBut").show();
    $("#updBut").hide();
  }
}

function closeModalUpd() {
  $("#modalWindow").hide();
  $("#inputUpdate").val("");
  $("#queryId").val("");
}

function tableTitle(tableName) {
  $("#thead").append(
    `<tr><th>${tableName}</th><th>Editar</th><th>Eliminar</th></tr>`
  );
}

function tableData(data, id) {
  $("#tbody").append(
    `<tr><td value="${data}" id="data${id}">${data}</td><td><button type="button" id="update${id}" class="btn btn-warning but" onclick="openModalUpd(${id}, 'update')"><img src="https://img.icons8.com/ios-glyphs/30/null/pencil--v1.png"/></button></td><td><button type="button"id="delete${id}" class="btn btn-danger but" onclick="openModalUpd(${id}, 'disable')"><img src="https://img.icons8.com/material-rounded/24/null/delete-forever.png"/></button></td></tr>`
  );
}

function queryDate(value) {
  $("tr").remove();
  const dataUser = value;
  $.ajax({
    type: "POST",
    url: "?view=gestion&mode=queryData",
    dataType: "json",
    data: { dataUser: dataUser },
    success: function (data) {
      const selectData = $("#selectData").val();
      if (selectData == "payroll") {
        tableTitle("Nominas");
      } else if (selectData == "position") {
        tableTitle("Cargos");
      } else if (selectData == "turn") {
        tableTitle("Horarios");
      } else if (selectData == "rotation") {
        tableTitle("Rotacion");
      }
      for (let i = 0; i < data.length; i++) {
        if (selectData == "payroll" && data[i].estatus_deshabilitado != 1) {
          tableData(data[i].nomina, data[i].id);
        } else if (
          selectData == "position" &&
          data[i].estatus_deshabilitado != 1
        ) {
          tableData(data[i].cargo, data[i].id);
        } else if (selectData == "turn" && data[i].estatus_deshabilitado != 1) {
          tableData(data[i].horarios, data[i].id);
        } else if (selectData == "rotation" && data[i].estatus_deshabilitado != 1) {
          tableData(data[i].rotacion, data[i].id);
        }
      }
    },
  });
}

function sendUpd(opt) {
  const selectData = $("#selectData").val();
  let update = "";
  const id = $("#queryId").val();
  let inputUpdate = "";
  if (opt == "update") {
    inputUpdate = $("#inputUpdate").val();
  }
  if (selectData == "payroll") {
    update = "payrollUpd";
  } else if (selectData == "position") {
    update = "positionUpd";
  } else if (selectData == "turn") {
    update = "timeTableUpd";
  } else if (selectData == "rotation") {
    update = "rotationUpd";
  }
  $.ajax({
    type: "POST",
    url: `?view=gestion&mode=${update}`,
    dataType: "json",
    data: { inputUpdate: inputUpdate, id: id },
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
