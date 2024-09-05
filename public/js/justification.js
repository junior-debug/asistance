let newDate = new Date()
const year = newDate.getFullYear()
let month = newDate.getMonth() + 1
const today = newDate.getDate()

function typeOption(value) {
  if (value == 'individual') {
    $('#IndividualInsert').show('slow')
    $('#massivedInsert').hide('slow')
    $('#individualTxt').show('slow')
    $('#massiveTxt').hide('slow')
  } else if (value == 'masiva') {
    $('#IndividualInsert').hide('slow')
    $('#massivedInsert').show('slow')
    $('#individualTxt').hide('slow')
    $('#massiveTxt').show('slow')
  }
}

function closeModalJustification() {
  $('#loadingRequest').hide('slow')
  $('#spiner').hide('slow')
}

function modalFunction(id, selection) {
  if (selection == 'update') {
    $('#modalUpd').show('slow')
  }
  if (selection == 'delete') {
    $('#modalDel').show('slow')
    const cedula = document.getElementById(`empleadoid${id}`)

    $('#buttonDelete').val(cedula.textContent)
    $('#modalDel').val(id)
  }
  let dateJus = document.getElementsByClassName('date')
  id = id - 1
  const val = dateJus[id].textContent
  $('#updDate').val(`${val}`)
}

function hideSpiner() {
  $('#loadingRequest').hide('slow')
  $('#spiner').hide('slow')
}

function queryJustification() {
  const id = $('#id').val();
  $('#loadingRequest').show('slow');
  $('#spiner').show('slow');

  const itemsPerPage = 5;
  let currentPage = 1;
  let totalPages = 0;
  let data = [];  // Declarar data fuera del ámbito de la función AJAX

  const dataDay = `${year}`;
  $.ajax({
    type: 'POST',
    url: '?view=calendary&mode=justificationsLog',
    dataType: 'json',
    data: { id: id, dataDay: dataDay },
    success: function (response) {
      hideSpiner();
      data = response;  // Asignar la respuesta a la variable data

      if (data.length > 0) {
        $('#updateCont').show('slow');
        totalPages = Math.ceil(data.length / itemsPerPage);
        renderTable(data, currentPage, itemsPerPage);
        renderPagination(totalPages);
      }
    }
  });

  function renderTable(data, page, itemsPerPage) {
    $('#body').empty();  // Limpiar la tabla antes de insertar nuevos elementos
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedData = data.slice(start, end);

    paginatedData.forEach((item, index) => {
      if (item.justificacion !== '') {
        let date = item.fecha_hora_aut.slice(0, 10);
        $('#body').append(
          `<tr id="deleteJust${item.empleadoID}">
                        <td class='date'>${date}</td>
                        <td id="empleadoid${start + index + 1}">${item.empleadoID}</td>
                        <td>${item.justificacion}</td>
                        <td><button type="button" id="${start + index + 1}" class="btn btn-warning updJustification" onclick="modalFunction(${start + index + 1}, 'update')">Actualizar</button></td>
                        <td><button type="button" id="${start + index + 1}" class="btn btn-danger" onclick="modalFunction(${start + index + 1}, 'delete')">Eliminar</button></td>
                    </tr>`
        );
      }
    });
  }

  function renderPagination(totalPages) {
    $('#pagination').empty();  // Limpiar la paginación antes de agregar nuevos botones
    if (currentPage > 1) {
      $('#pagination').append(`<li class="page-item"><a class="page-link" href="#" onclick="changePage(${currentPage - 1})">Previous</a></li>`);
    }

    for (let i = 1; i <= totalPages; i++) {
      $('#pagination').append(`<li class="page-item ${i === currentPage ? 'active' : ''}"><a class="page-link" href="#" onclick="changePage(${i})">${i}</a></li>`);
    }

    if (currentPage < totalPages) {
      $('#pagination').append(`<li class="page-item"><a class="page-link" href="#" onclick="changePage(${currentPage + 1})">Next</a></li>`);
    }
  }

  window.changePage = function (page) {
    currentPage = page;
    renderTable(data, currentPage, itemsPerPage);  // Ahora data está disponible aquí
    renderPagination(totalPages);
  };
}


async function daysSelected(cedulas) {
  let date = '';

  if ($('#daysJustifi').val() === '1') {
    date = $('#oneDate').val();
    const statusValidation = await validateJustificationForMassive(cedulas, date, false);

    if (statusValidation) {
      console.log('Justificación encontrada para la fecha seleccionada.');
      return;
    }
  }

  if ($('#daysJustifi').val() === '2') {
    const currentDate = new Date($('#initDay').val());
    const finalDate = new Date($('#finalDay').val());

    while (currentDate <= finalDate) {
      let formattedDate = currentDate.toISOString().split('T')[0];
      const statusValidation = await validateJustificationForMassive(cedulas, formattedDate, true);
      console.log(statusValidation)
      if (statusValidation) {
        $('#loadingRequest').hide('slow')
        $('#spiner').hide('slow')
        break;
      }

      if (currentDate.getTime() === finalDate.getTime()) {
        alert('justificaciones realizadas');
        location.reload()
      }

      currentDate.setDate(currentDate.getDate() + 1);
    }
  }
}


function validateJustificationForMassive(cedulas, date, someDays) {
  return new Promise((resolve, reject) => {
    let idBut = 0;
    $.ajax({
      type: 'POST',
      url: '?view=sistema&mode=validateJustificationForMassive',
      dataType: 'json',
      data: { date: date, cedulas: cedulas },
      statusCode: {
        200: async function(data) {
          if (data && data.length > 0) { // Verifica que data no esté vacío
            alert(`Esta nómina ya cuenta con justificación el día ${date}`);
            $('#updateContMassive').show('slow');
            for (let i = 0; i < data.length; i++) {
              idBut++;
              let date = data[i].fecha_hora_aut;
              date = date.slice(0, 10);
              $('#bodyMassive').append(
                `<tr id="deleteJust${data[i].empleadoID}">
                    <td id="empleadoid${idBut}">${data[i].empleadoID}</td>
                    <td class='date'>${date}</td>
                    <td>${data[i].justificacion}</td>
                    <td><button type="button" id="${idBut}" class="btn btn-danger" onclick="modalFunction(${idBut}, 'delete')">Eliminar</button></td>
                </tr>`
              );
            }
            resolve(true); // Resuelve la promesa con true
          } else {
            const justification = $('#justification').val();
            logJustification('masiva');
            let cedulasArray = cedulas.split(',');
            $('#loadingRequest').show('slow')
            $('#spiner').show('slow')
            for (let i = 0; i < cedulasArray.length; i++) {
              const cedula = cedulasArray[i];
              const statusJustification = await sendDataJustification(cedula, justification);
              if (i === cedulasArray.length - 1 && someDays === false) {
                alert('Todas las peticiones se han completado');
                location.reload();
              }
            }
            resolve(false); // Resuelve la promesa con false si no hay datos
          }
        },
        400: function () {
          alert('Error en la solicitud');
          reject('Error en la solicitud');
        },
        500: function () {
          alert('Error en el Servidor');
          reject('Error en el servidor');
        },
      },
    });
  });
}
function massivePayroll(value) {
  if (value != 0) {
    $('#daysJustifi').show('slow')
    $('#justification').show('slow')
    $('#daysJustifi').removeAttr('disabled')
    $('#justification').removeAttr('disabled')
  }
}

function queryUser() {
  const id = $('#id').val()
  $.ajax({
    type: 'POST',
    url: '?view=sistema&mode=queryUser',
    dataType: 'json',
    data: { id: id },
    statusCode: {
      200: function (data) {
        if (data != '') {
          $('#success').show('slow')
          $('#daysJustifi').show('slow')
          $('#justification').show('slow')
          $('#warning').hide('slow')
          for (let i = 0; i < data.length; i++) {
            $('#user').text(`${data[i].nombre_apellido}`)
            $('#dataName').text(`${data[i].nombre_apellido}`)
            $('#dataId').text(`${data[i].cedula}`)
            $('#dataStatus').text(`${data[i].estatus}`)
            if (data[i].estatus == 'activo') {
              $('#on').show('slow')
            } else if (data[i].estatus == 'inactivo') {
              $('#off').show('slow')
            }
          }
          $('#daysJustifi').removeAttr('disabled')
          $('#justification').removeAttr('disabled')
          queryJustification()
        } else if (data == false) {
          $('#warning').show('slow')
          $('#success').hide('slow')
        }
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

function sentDatesBetween(startDate, endDate, justification, id, finalDay) {
  const dates = []
  let currentDate = new Date(startDate)

  while (currentDate <= endDate) {
    dates.push(new Date(currentDate))
    currentDate.setDate(currentDate.getDate() + 1)
  }

  dates.forEach((date, index) => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const dataDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`

    if (index === dates.length - 1) {
      $.ajax({
        type: 'POST',
        url: '?view=sistema&mode=queryJustification',
        dataType: 'json',
        data: {
          id: id,
          date: dataDate,
          justification: justification,
          finalDay: finalDay,
        },
        statusCode: {
          200: function () {
            alert('justificacion realizada')
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
    } else {
      $.ajax({
        type: 'POST',
        url: '?view=sistema&mode=queryJustification',
        dataType: 'json',
        data: {
          id: id,
          date: dataDate,
          justification: justification,
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
  })
}

function getEmployeesForPayroll () {
  const payRoll = $('#payRoll').val()
  $.ajax({
    type: 'POST',
    url: '?view=sistema&mode=getEmployeesForPayroll',
    dataType: 'json',
    data: { payRoll: payRoll },
    statusCode: {
      200: function (data) {
        if (!data) {
          alert('no existen usuarios en nomina seleccionada')
          location.reload()
        }
        let cedulas = data.map(employee => employee.cedula);
        cedulas = cedulas.join(',');
        daysSelected(cedulas)
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

function validationData() {
  if ($('#insertOption').val() == 'individual') {
    const id = $('#id').val()
    sendJustification(id)
    logJustification('individual')
  } else if ($('#insertOption').val() == 'masiva') {
    getEmployeesForPayroll()
  }
}

function logJustification(type) {
  if (type == 'individual') {
    const opt = $('#insertOption').val()
    const id = $('#id').val()
    const now = new Date()
    $.ajax({
      type: 'POST',
      url: `?view=sistema&mode=logJustificacion`,
      dataType: 'json',
      data: {
        id: id,
        opt: opt,
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
  } else if (type == 'masiva') {
    const opt = $('#insertOption').val()
    const payRoll = $('#payRoll').val()
    const now = new Date()
    $.ajax({
      type: 'POST',
      url: `?view=sistema&mode=logJustificacionM`,
      dataType: 'json',
      data: {
        payRoll: payRoll,
        opt: opt,
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
}

function sendDataJustification(id, justification) {
  return new Promise((resolve, reject) => {
    const date = $('#oneDate').val();
    $.ajax({
      type: 'POST',
      url: '?view=sistema&mode=queryJustification',
      dataType: 'json',
      data: { id: id, date: date, justification: justification },
      statusCode: {
        200: function() {
          resolve(true); // Resuelve la promesa en caso de éxito
        },
        400: function() {
          alert('Error en la solicitud');
          reject('Error en la solicitud'); // Rechaza la promesa en caso de error
        },
        500: function() {
          alert('Error en el Servidor');
          reject('Error en el Servidor'); // Rechaza la promesa en caso de error
        }
      }
    });
  });
}

function validateJustification(id, justification) {
  const date = $('#oneDate').val()
  $.ajax({
    type: 'POST',
    url: '?view=sistema&mode=validateJustification',
    dataType: 'json',
    data: { id: id, date: date },
    statusCode: {
      200: async function(data) {
        if (data) {
          $('#loadingRequest').show('slow')
          $('#modalText').show('slow')
        } else {
          const validateJustification = await sendDataJustification(id, justification, true)
          alert('justificacion realizada')
          location.reload()
        }
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

function sendJustification(id) {
  const justification = $('#justification').val()
  if ($('#daysJustifi').val() == 1) {
    if (justification == null) {
      alert('seleccione justificacion')
    } else if (justification != null) {
      validateJustification(id, justification)
    }
  } else if ($('#daysJustifi').val() == 2) {
    const initDay = $('#initDay').val()
    const finalDay = $('#finalDay').val()
    if (justification == null) {
      alert('seleccione justifiacion')
    } else if (justification != null) {
      const startDate = new Date(initDay)
      const endDate = new Date(finalDay)
      sentDatesBetween(startDate, endDate, justification, id, finalDay)
    }
  }
}

function selectDays() {
  if ($('#daysJustifi').val() == 1) {
    $('#oneDay').show('slow')
    $('#someDays').hide('slow')
  } else if ($('#daysJustifi').val() == 2) {
    $('#someDays').show('slow')
    $('#oneDay').hide('slow')
  }
}

function button(selectedDays) {
  if (selectedDays == '1dia') {
    $('#but').show('slow')
  } else if (selectedDays == 'dias' && $('#initDay').val() != '') {
    $('#but').show('slow')
  }
}

function queryUpdate() {
  const id = $('#id').val()
  const date = $('#updDate').val()
  const justification = $('#justificationUpd').val()
  if (justification == null) {
    alert('seleccione justificacion')
  } else if (justification != null) {
    $.ajax({
      type: 'POST',
      url: '?view=sistema&mode=queryUpdate',
      dataType: 'json',
      data: { id: id, date: date, justification: justification },
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
}

function queryDelete() {
  const id = $('#buttonDelete').val()
  const date = $('#updDate').val()
  $.ajax({
    type: 'POST',
    url: '?view=sistema&mode=queryDelete',
    dataType: 'json',
    data: { id: id, date: date },
    statusCode: {
      200: function () {
        if ($('#insertOption').val() === 'individual') {
          alert('solicitud procesada')
          location.reload()
        }
        if ($('#insertOption').val() === 'masiva') {
          let deleteRow = document.getElementById(`deleteJust${id}`)
          deleteRow.style.display = 'none';
          closeModal('delete')
          alert('solicitud procesada')
        }
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

function closeModal(selection) {
  if (selection == 'update') {
    $('#modalUpd').hide('slow')
  } else if (selection == 'delete') {
    $('#modalDel').hide('slow')
  }
}
