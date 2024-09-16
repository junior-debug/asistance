$(document).ready(function () {
  $("#search1").on("keyup", function () {
    let value = $(this).val().toUpperCase();
    $("#tableBody tr").filter(function () {
      $(this).toggle($(this).text().toUpperCase().indexOf(value) > -1);
    });
  });
});

function queryEmployees() {
  const selected = $("#dataSelected").val();
  $("tr").remove();
  $.ajax({
    type: "POST",
    url: "?view=employees&mode=queryEmployees",
    dataType: "json",
    data: {
      selected: selected,
    },
    statusCode: {
      200: function (data) {
        if (selected == "1") {
          $("#totalEmployees").text(`Total Empleados Activos ${data.length}`);
          $("#tableHead")
            .append(`<tr id="tableTitles" style="text-align: center;">
          <th scope="col">Empresa</th>
          <th scope="col">Nomina/Cliente</th>
          <th scope="col">Cedula</th>
          <th scope="col">Fecha de Nacimiento</th>
          <th scope="col">Correo Electronico</th>
          <th scope="col">Nombre y Apellido</th>
          <th scope="col">Fecha de Ingreso</th>
          <th scope="col">Fecha de Culminacion de Contrato</th>
          <th scope="col">Finalizacion Segundo Contrato</th>
          <th scope="col">Finalizacion Tercer Contrato</th>
          <th scope="col">Cargo</th>
          <th scope="col">Unidad Organizativa/Sede</th>
          <th scope="col">Turno</th>
          <th scope="col">Rotacion</th>
          <th scope="col">Horario de trabajo</th>
          <th scope="col">Excepcion</th>
          <th scope="col">Ficha</th>
          <th scope="col">Banco</th>
          <th scope="col">Tipo de Cuenta</th>
          <th scope="col">Numero de Cuenta</th>
          <th scope="col">Sueldo</th>
          <th scope="col">Destreza</th>
          <th scope="col">Direccion</th>
          <th scope="col">Telefono 1</th>
          <th scope="col">Telefono 2</th>
          <th scope="col">Tickets</th>
          <th scope="col">Bono</th>
          <th scope="col">Utilidades</th>
          <th scope="col">Estatus</th>
          </tr>`);
        } else if (selected == "2") {
          $("#totalEmployees").text(`Egresos`);
          $("#tableHead")
            .append(`<tr id="tableTitles" style="text-align: center;">
          <th scope="col">Empresa</th>
          <th scope="col">Nomina/Cliente</th>
          <th scope="col">Cedula</th>
          <th scope="col">Fecha de Nacimiento</th>
          <th scope="col">Correo Electronico</th>
          <th scope="col">Nombre y Apellido</th>
          <th scope="col">Fecha de Ingreso</th>
          <th scope="col">Fecha de Egreso</th>
          <th scope="col">Fecha de Culminacion de Contrato</th>
          <th scope="col">Finalizacion Segundo Contrato</th>
          <th scope="col">Finalizacion Tercer Contrato</th>
          <th scope="col">Cargo</th>
          <th scope="col">Unidad Organizativa/Sede</th>
          <th scope="col">Turno</th>
          <th scope="col">Rotacion</th>
          <th scope="col">Horario de trabajo</th>
          <th scope="col">Excepcion</th>
          <th scope="col">Ficha</th>
          <th scope="col">Banco</th>
          <th scope="col">Tipo de Cuenta</th>
          <th scope="col">Numero de Cuenta</th>
          <th scope="col">Sueldo</th>
          <th scope="col">Destreza</th>
          <th scope="col">Direccion</th>
          <th scope="col">Telefono 1</th>
          <th scope="col">Telefono 2</th>
          <th scope="col">Tickets</th>
          <th scope="col">Bono</th>
          <th scope="col">Utilidades</th>
          <th scope="col">Estatus</th>
          </tr>`);
        }
        for (let i = 0; i < data.length; i++) {
          if (selected == "1") {
            $("#tableBody").append(
              `<tr>
                <td>${data[i].empresa}</td>
                <td>${data[i].nomina_cliente}</td>
                <td>${data[i].cedula}</td>
                <td>${data[i].fecha_nacimiento}</td>
                <td>${data[i].correo}</td>
                <td>${data[i].nombre_apellido}</td>
                <td>${data[i].fecha_ingreso}</td>
                <td>${data[i].finalizacion_contrato}</td>
                <td>${data[i].finalizacion_segundo_contrato}</td>
                <td>${data[i].finalizacion_tercer_contrato}</td>
                <td>${data[i].cargo}</td>
                <td>${data[i].unidad_organizativa}</td>
                <td>${data[i].turno}</td>
                <td>${data[i].rotacion}</td>
                <td>${data[i].horario}</td>
                <td>${data[i].excepcion}</td>
                <td>${data[i].ficha}</td>
                <td>${data[i].banco}</td>
                <td>${data[i].tipo_cuenta}</td>
                <td>${data[i].numero_cuenta}</td>
                <td>${data[i].sueldo}</td>
                <td>${data[i].destreza}</td>
                <td>${data[i].direccion}</td>
                <td>${data[i].telefono_1}</td>
                <td>${data[i].telefono_2}</td>
                <td>${data[i].tickets}</td>
                <td>${data[i].bono}</td>
                <td>${data[i].utilidades}</td>
                <td>${data[i].estatus}</td>
              </tr>`
            );
          } else if (selected == "2") {
            $("#tableBody").append(
              `<tr>
                <td>${data[i].empresa}</td>
                <td>${data[i].nomina_cliente}</td>
                <td>${data[i].cedula}</td>
                <td>${data[i].fecha_nacimiento}</td>
                <td>${data[i].correo}</td>
                <td>${data[i].nombre_apellido}</td>
                <td>${data[i].fecha_ingreso}</td>
                <td>${data[i].fecha_egreso}</td>
                <td>${data[i].finalizacion_contrato}</td>
                <td>${data[i].finalizacion_segundo_contrato}</td>
                <td>${data[i].finalizacion_tercer_contrato}</td>
                <td>${data[i].cargo}</td>
                <td>${data[i].unidad_organizativa}</td>
                <td>${data[i].turno}</td>
                <td>${data[i].rotacion}</td>
                <td>${data[i].horario}</td>
                <td>${data[i].excepcion}</td>
                <td>${data[i].ficha}</td>
                <td>${data[i].banco}</td>
                <td>${data[i].tipo_cuenta}</td>
                <td>${data[i].numero_cuenta}</td>
                <td>${data[i].sueldo}</td>
                <td>${data[i].destreza}</td>
                <td>${data[i].direccion}</td>
                <td>${data[i].telefono_1}</td>
                <td>${data[i].telefono_2}</td>
                <td>${data[i].tickets}</td>
                <td>${data[i].bono}</td>
                <td>${data[i].utilidades}</td>
                <td>${data[i].estatus}</td>
              </tr>`
            );
          }
        }
        $("#filter").show("slow");
        $("#cardData").show("slow");
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

function download() {
  $("#dataTable").table2excel({
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
