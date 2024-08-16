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
  } else if (selection == 'delete') {
    $('#modalDel').show('slow')
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
  const id = $('#id').val()
  $('#loadingRequest').show('slow')
  $('#spiner').show('slow')
  let idBut = 0
  if (month < 10) {
    month = '0' + month
  }
  const dataDay = `${year}`
  $.ajax({
    type: 'POST',
    url: '?view=calendary&mode=justificationsLog',
    dataType: 'json',
    data: { id: id, dataDay: dataDay },
    success: function (data) {
      hideSpiner()
      for (let i = 0; i < data.length; i++) {
        if (data[i].justificacion != '') {
          $('#updateCont').show('slow')
          idBut++
          let date = data[i].fecha_hora_aut
          date = date.slice(0, 10)
          $('#body').append(
            `<tr>
              <td class='date'>${date}</td>
              <td>${data[i].justificacion}</td>
              <td><button type="button" id="${idBut}" class="btn btn-warning updJustification" onclick="modalFunction(${idBut}, 'update')">Actualizar</button></td>
              <td><button type="button" id="${idBut}" class="btn btn-danger" onclick="modalFunction(${idBut}, 'delete')">Eliminar</button></td>
            </tr>`
          )
        }
      }
    },
  })
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

function validateJustificationForMassive (cedulas) {
  const date = $('#oneDate').val()
  $.ajax({
    type: 'POST',
    url: '?view=sistema&mode=validateJustificationForMassive',
    dataType: 'json',
    data: { date: date, cedulas: cedulas },
    statusCode: {
      200: function (data) {
        if (data) {
          const empleadoIDs = data.map(empleado => empleado.empleadoID).join(',');
          alert(`el usuario ${empleadoIDs} ya posee una justificacion en la fecha seleccionado porfavor elimine la justificacion del usuario en el apartado de justificacion individual`)
          location.reload()
          return
        }
        const justification = $('#justification').val()
        logJustification('masiva')
        let cedulasArray = cedulas.split(',');
        cedulasArray.forEach(function(cedula) {
          sendDataJustification(cedula, justification);
        });
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


function getEmployeesForPayroll () {
  const payRoll = $('#payRoll').val()
  $.ajax({
    type: 'POST',
    url: '?view=sistema&mode=getEmployeesForPayroll',
    dataType: 'json',
    data: { payRoll: payRoll },
    statusCode: {
      200: function (data) {
        let cedulas = data.map(employee => employee.cedula);
        cedulas = cedulas.join(',');
        validateJustificationForMassive(cedulas)
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
  const date = $('#oneDate').val()
  $.ajax({
    type: 'POST',
    url: '?view=sistema&mode=queryJustification',
    dataType: 'json',
    data: { id: id, date: date, justification: justification },
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
}

function validateJustification(id, justification) {
  const date = $('#oneDate').val()
  $.ajax({
    type: 'POST',
    url: '?view=sistema&mode=validateJustification',
    dataType: 'json',
    data: { id: id, date: date },
    statusCode: {
      200: function (data) {
        if (data) {
          $('#loadingRequest').show('slow')
          $('#modalText').show('slow')
        } else {
          sendDataJustification(id, justification)
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
  const id = $('#id').val()
  const date = $('#updDate').val()
  $.ajax({
    type: 'POST',
    url: '?view=sistema&mode=queryDelete',
    dataType: 'json',
    data: { id: id, date: date },
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

function closeModal(selection) {
  if (selection == 'update') {
    $('#modalUpd').hide('slow')
  } else if (selection == 'delete') {
    $('#modalDel').hide('slow')
  }
}
