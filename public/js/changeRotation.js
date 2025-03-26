const year = new Date().getFullYear()

function changeOption(value) {
  switch (value) {
    case 'nomina':
      $('#nomina').show('slow')
      $('#reason').show('slow')
      $('#cargo').hide('slow')
      $('#turno').hide('slow')
      $('#rotation').hide('slow')
      break
    case 'cargo':
      $('#cargo').show('slow')
      $('#reason').hide('slow')
      $('#turno').hide('slow')
      $('#rotation').hide('slow')
      $('#nomina').hide('slow')
      break
    case 'turno':
      $('#turno').show('slow')
      $('#reason').hide('slow')
      $('#rotation').hide('slow')
      $('#nomina').hide('slow')
      $('#cargo').hide('slow')
      break
    case 'rotation':
      $('#rotation').show('slow')
      $('#reason').hide('slow')
      $('#nomina').hide('slow')
      $('#cargo').hide('slow')
      $('#turno').hide('slow')
      findChangesRotation()
      break
  }
  $('#dataDay').show('slow')
}

function findChangesRotation() {
  const id = $('#id').val();
  $.ajax({
    type: 'POST',
    url: '?view=sistema&mode=findChangesRotation',
    dataType: 'json',
    data: { id: id },
    success: function (data) {
      if (Array.isArray(data) && data.length > 0) {
        let tableContent = `
          <table style="width:100%; border-collapse: collapse;">
            <thead  class="text-center">
              <tr>
                <th>Cédula</th>
                <th>Fecha</th>
                <th>Rotación</th>
                <th>Antigua Rotación</th>
                <th>Editar</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>`;

        data.forEach(res => {
          tableContent += `
            <tr class="text-center">
              <td>${res.cedula}</td>
              <td>${res.fecha}</td>
              <td>${res.rotacion}</td>
              <td>${res.antigua_rotacion}</td>
              <td class="text-center">
                  <button class="btn btn-primary btn-sm" onclick="openRotationModal(${res.id})">
                    <img style="width: 33px;" src="https://img.icons8.com/?size=100&id=49&format=png&color=000000"/>
                  </button>
              </td>
              <td class="text-center">
                <button class="btn btn-danger btn-sm" onclick="openDeleteModal(${res.id})">
                  <img style="width: 33px;" src="https://img.icons8.com/?size=100&id=43949&format=png&color=000000"/>
                </button>
              </td>
            </tr>`;
        });

        tableContent += `</tbody></table>`;

        $('#changes').html(tableContent);
      } else {
        $('#changes').html('<p>No se encontraron datos.</p>');
      }
    },
    error: function () {
      alert('Error al obtener los datos');
    }
  });
}

let deleteId = null;

function openDeleteModal(id) {
  deleteId = id; // Guardamos el ID del registro a eliminar
  const deleteModal = new bootstrap.Modal(document.getElementById("deleteModal"));
  deleteModal.show();
}

document.getElementById("confirmDelete").addEventListener("click", function () {
  if (deleteId) {
    deleteRecord(deleteId); // Llama a la función de eliminación
    deleteId = null; // Reinicia el ID después de eliminar
    const deleteModal = bootstrap.Modal.getInstance(document.getElementById("deleteModal"));
    deleteModal.hide(); // Cierra el modal
  }
});

function deleteRecord (id) {
  $.ajax({
    type: 'POST',
    url: '?view=sistema&mode=deleteRotation',
    dataType: 'json',
    data: { id: id },
    success: function (data) {
      location.reload()
    },
    error: function () {
      alert('Error al obtener los datos');
    }
  });
}

let selectedId = null; // Variable global para almacenar el ID

// Función para abrir el modal y asignar el ID
function openRotationModal(id) {
  selectedId = id; // Guarda el ID del registro
  const rotationModal = new bootstrap.Modal(document.getElementById("rotationModal"));
  rotationModal.show();
}

// Evento para el botón "Aceptar" en el modal de selección de rotación
document.getElementById("confirmRotation").addEventListener("click", function () {
  const selectedRotation = document.getElementById("oldRotationSelect").value;

  if (selectedId && selectedRotation) {
    updateRotation(selectedId, selectedRotation); // Llama a la función con los datos
    selectedId = null; // Reinicia el ID después de actualizar
    const rotationModal = bootstrap.Modal.getInstance(document.getElementById("rotationModal"));
    rotationModal.hide(); // Cierra el modal
  } else {
    alert("Por favor, selecciona una antigua rotación.");
  }
});

function updateRotation(id, rotation) {
  $.ajax({
    type: 'POST',
    url: '?view=sistema&mode=changeOldRotation',
    dataType: 'json',
    data: { id: id ,
    rotation: rotation
    },
    success: function (data) {
      location.reload()
    },
    error: function () {
      alert('Error al obtener los datos');
    }
  });
}

function sendQuery(date, nomina, oldPayroll, cargo, oldPosition, oldTurn, turno, oldRotation, rotation) {
  const id = $('#id').val()
  const reason = $('#reason').val()
  $.ajax({
    type: 'POST',
    url: '?view=sistema&mode=queryChangeRot',
    dataType: 'json',
    data: {
      id: id,
      nomina: nomina,
      oldPayroll: oldPayroll,
      reason: reason,
      cargo: cargo,
      oldPosition: oldPosition,
      turno: turno,
      oldTurn: oldTurn,
      rotation: rotation,
      oldRotation: oldRotation,
      date: date,
    },
    statusCode: {
      200: function () {},
      400: function () {
        alert('Error en la solicitud')
      },
      500: function () {
        alert('Error en el Servidor')
      },
    },
  })
}

function generateDateRange(hiringDate, dateSelected) {
  let dates = [];
  let [selectedYear, selectedMonth, selectedDay] = dateSelected.split('-').map(Number);
  let [hiringYear, hiringMonth] = hiringDate.split('-').map(Number);

  let currentDate = new Date(hiringYear, hiringMonth - 1, selectedDay); // Comienza desde el mes de contratación con el día de dateSelected

  while (currentDate.getFullYear() < selectedYear ||
  (currentDate.getFullYear() === selectedYear && currentDate.getMonth() + 1 <= selectedMonth)) {

    let formattedDate = currentDate.toISOString().split('T')[0]; // Formatear YYYY-MM-DD
    dates.push(formattedDate);

    currentDate.setMonth(currentDate.getMonth() + 1); // Avanzar mes a mes
  }

  return dates;
}

function generateDateRangeWithChanges(lastChangeDate, dateSelected) {
  const startDate = new Date(lastChangeDate);
  const endDate = new Date(dateSelected);

  const day = endDate.getDate(); // Tomamos el día de dateSelected
  let currentDate = new Date(startDate.getFullYear(), startDate.getMonth() + 1, day); // Siguiente mes después de lastChangeDate

  const dateArray = [];

  while (currentDate <= endDate) {
    dateArray.push(currentDate.toISOString().split('T')[0]); // Guardamos la nueva fecha
    currentDate.setMonth(currentDate.getMonth() + 1); // Avanzamos mes a mes
  }

  return dateArray;
}

function validationQuery(haveChanges = null, yearData) {
  let dateSelected = $('#day').val();
  let dateArray = []
  // Generar todas las fechas desde hiringDate hasta dateSelected
  if (haveChanges) {
     dateArray = generateDateRangeWithChanges(haveChanges.fecha, dateSelected);
  } else {
     dateArray = generateDateRange(yearData, dateSelected);
  }

  let id = $('#id').val();
  let selectData = $('#selectData').val();

  dateArray.forEach((date, index) => {
    let isLastIteration = index === dateArray.length - 1;

    switch (selectData) {
      case 'nomina':
        const payroll = $('#nomina').val();
        if (isLastIteration) {
          sendQuery(date, payroll, payroll, '', '', '', '', '', '');
          payrollUpdate(payroll, id, 'payrollUpdate');
        } else {
          const oldPayroll = $('#oldPayroll').val();
          sendQuery(date, '', oldPayroll, '', '', '', '', '', '');
        }
        break;

      case 'cargo':
        const position = $('#cargo').val();
        if (isLastIteration) {
          sendQuery(date, '', '', position, position, '', '', '', '');
          payrollUpdate(position, id, 'positionUpdate');
        } else {
          const oldPosition = $('#position').val();
          sendQuery(date, '', '', '', oldPosition, '', '', '', '');
        }
        break;

      case 'turno':
        const turno = $('#turno').val();
        if (isLastIteration) {
          sendQuery(date, '', '', '', '', turno, turno, '', '');
          payrollUpdate(turno, id, 'turnUpdate');
        } else {
          const oldTurn = $('#oldTurn').val();
          sendQuery(date, '', '', '', '', oldTurn, '', '', '');
        }
        break;

      case 'rotation':
        const rotation = $('#rotation').val();
        const oldRotation = $('#oldRotation').val();
        if (isLastIteration) {
          sendQuery(date, '', '', '', '', '', '', oldRotation, rotation);
          payrollUpdate(rotation, id, 'rotationUpdate');
        } else {
          sendQuery(date, '', '', '', '', '', '', oldRotation, '');
        }
        break;
    }
  });
}

function payrollUpdate(value, id, update) {
  $.ajax({
    type: 'POST',
    url: `?view=calendary&mode=${update}`,
    dataType: 'json',
    data: { value: value, id: id },
    statusCode: {
      200: function () {
        alert('solicitud procesada')
        location.reload()
      },
      400: function () {
        alert('Error en la solicitud')
      },
      500: function () {
        alert('Error en el Servidor')
      },
    },
  })
}

function logChanges(id) {
  const selecData = $('#selectData').val()
  const now = new Date()
  $.ajax({
    type: 'POST',
    url: `?view=sistema&mode=logChanges`,
    dataType: 'json',
    data: {
      id: id,
      selecData: selecData,
      now: now,
    },
    statusCode: {
      200: function (data) {},
      400: function () {
        alert('Error en la solicitud')
      },
      500: function () {
        alert('Error en el Servidor')
      },
    },
  })
}

function getHiringDate(id) {
  return new Promise((resolve, reject) => {
    $.ajax({
      type: 'POST',
      url: '?view=sistema&mode=queryUser',
      dataType: 'json',
      data: { id: id },
      success: function (data) {
        resolve(data[0].fecha_ingreso);
      },
      error: function () {
        reject('Error en la solicitud');
      }
    });
  });
}

async function queryChanges(queryData) {
  const id = $('#id').val();
  logChanges(id);

  const hiringDate = await getHiringDate(id)

  $.ajax({
    type: 'POST',
    url: `?view=sistema&mode=${queryData}`,
    dataType: 'json',
    data: { id: id },
    statusCode: {
      200: function(data) {
        if (!data || data.length === 0) {
          return validationQuery(null, hiringDate);
        }

        // Ordenamos los datos por fecha en orden ascendente
        data.sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
        const latestData = data[data.length - 1]; // Última posición

        switch ($('#selectData').val()) {
          case 'nomina':
            if (latestData.antigua_nomina || latestData.nomina) {
              validationQuery(latestData, hiringDate);
            } else {
              validationQuery();
            }
            break;
          case 'cargo':
            if (latestData.antiguo_cargo || latestData.cargo) {
              validationQuery(latestData, hiringDate);
            } else {
              validationQuery(undefined);
            }
            break;
          case 'turno':
            if (latestData.antiguo_turno || latestData.turno) {
              validationQuery(latestData, hiringDate);
            } else {
              validationQuery(undefined);
            }
            break;
          case 'rotation':
            if (latestData.antigua_rotacion || latestData.rotacion) {
              validationQuery(latestData, hiringDate);
            } else {
              validationQuery(undefined);
            }
            break;
        }
      },
      400: function() {
        alert('Error en la solicitud');
      },
      500: function() {
        alert('Error en el Servidor');
      },
    },
  });
}

function sendData() {
  switch ($('#selectData').val()) {
    case 'nomina':
      queryChanges('queryPayroll')
      break
    case 'cargo':
      queryChanges('queryPosition')
      break
    case 'turno':
      queryChanges('queryTurn')
      break
    case 'rotation':
      queryChanges('queryRotationData')
      break
  }
}

function user() {
  const id = $('#id').val()
  $.ajax({
    type: 'POST',
    url: '?view=sistema&mode=queryUser',
    dataType: 'json',
    data: { id: id },
    success: function (data) {
      if (data != '') {
        $('#success').show('slow')
        $('#selectData').show('slow')
        $('#warning').hide('slow')
        for (let i = 0; i < data.length; i++) {
          $('#user').text(`${data[i].nombre_apellido}`)
          $('#oldPayroll').val(`${data[i].nomina_cliente}`)
          $('#position').val(`${data[i].cargo}`)
          $('#oldTurn').val(`${data[i].turno}`)
          $('#oldRotation').val(`${data[i].rotacion}`)
        }
        $('#selectData').removeAttr('disabled')
      } else if (data == false) {
        $('#warning').show('slow')
        $('#success').hide('slow')
      }
    },
  })
}

function showButton() {
  $('#button').show('slow')
}
