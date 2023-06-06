const newDate = new Date();
const year = newDate.getFullYear();
let month = newDate.getMonth() + 1;
const today = newDate.getDate();

function swichJustification(just) {
  let data = "";
  switch (just) {
    case "J":
      data = "INASISTENCIA JUSTIFICADA";
      break;
    case "PNR":
      data = "PERMISO NO REMUNERADO";
      break;
    case "R":
      data = "RETIRO";
      break;
    case "SSO":
      data = "REPOSO IVSS";
      break;
    case "RPN":
      data = "REPOSO PRE-POST NATAL";
      break;
    case "NC":
      data = "NO CANTRATADO";
      break;
    case "V":
      data = "VACACIONES";
      break;
    case "F":
      data = "FERIADO TRABAJADO";
      break;
  }
  return data;
}

function queryJustifications(id, dataDay, file, name, payroll) {
  $.ajax({
    type: "POST",
    url: "?view=calendary&mode=asistance",
    dataType: "json",
    data: { id: id, dataDay: dataDay },
    success: function (data) {
      if (
        data != false &&
        data[0].justificacion != "" &&
        data[0].final_justificacion != ""
      ) {
        for (let i = 0; i < data.length; i++) {
          let initDay = data[i].fecha_hora_aut;
          initDay = initDay.slice(0, 10);
          initDay = initDay.split("-");
          let firstDay = parseInt(initDay[2]);
          let finalDay = data[0].final_justificacion;
          finalDay = finalDay.slice(0, 10);
          finalDay = finalDay.split("-");
          let secondDay = parseInt(finalDay[2]);
          let dataDay = secondDay - firstDay;
          if (dataDay > 3) {
            dataDay = dataDay + 1;
            let date = data[i].fecha_hora_aut;
            date = date.slice(0, 10);
            let justification = swichJustification(data[i].justificacion);
            $("#dataTable").append(
              `<tr style="text-align: center;"><td>${payroll}</td><td>${id}</td>
              <td>${file}</td><td>${name}</td><td>${justification}</td><td>${dataDay}</td><td>${date}</td><td>${data[i].final_justificacion}</td><td></td></tr>`
            );
          }
        }
      }
    },
  });
}

function dataUser() {
  $.ajax({
    type: "POST",
    url: "?view=calendary&mode=asistanceData",
    dataType: "json",
    data: {},
    success: function (data) {
      if (month < 10) {
        month = "0" + month;
      }
      for (let i = 0; i < data.length; i++) {
        let file = data[i].ficha;
        let name = data[i].nombre_apellido;
        let payroll = data[i].nomina_cliente;
        let id = data[i].cedula;
        for (let t = 0; t < today; t++) {
          let day = 1 + t;
          if (day < 10) {
            day = "0" + day;
          }
          let dataDay = `${year}-${month}-${day}`;
          queryJustifications(id, dataDay, file, name, payroll);
        }
      }
    },
  });
}

function download() {
  $("#table").table2excel({
    exclude: ".noExl",
    name: "Excel Document Name",
    filename: "justificaciones" + new Date().toISOString() + ".xls",
    fileext: ".xls",
    exclude_img: true,
    exclude_links: true,
    exclude_inputs: true,
    preserveColors: true,
  });
}

$(document).ready(function () {
  dataUser();
});
