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
      break
  }
  $('#dataDay').show('slow')
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

function validationQuery(array, yearData) {
  // Fecha donde cambiara la rotacion
  let dateSelected = $('#day').val()
  dateSelectedArray = dateSelected.split('-')
  
  // Mes seleccionado para el cambio
  let monthSelected = parseInt(dateSelectedArray[1])

  // Ultimo mes en el que cambio
  const last = array[array.length - 1]
  let lastMonthChange = parseInt(last)

  // Si ya hubo un cambio este mismo mes
  if (lastMonthChange == monthSelected && yearData == year) {
    const id = $('#id').val()
    let date = year + '-' + monthSelected + '-' + dateSelectedArray[2]

    // sendQuery
    switch ($('#selectData').val()) {
      case 'nomina':
        const nomina = $('#nomina').val()
        sendQuery(date, nomina, nomina, '', '', '', '', '', '')
        break
      case 'cargo':
        const position = $('#cargo').val()
        sendQuery(date, '', '', position, position, '', '', '', '')
        break
      case 'turno':
        const turno = $('#turno').val()
        sendQuery(date, '', '', '', '', turno, turno, '', '')
        break
      case 'rotation':
        const rotation = $('#rotation').val()
        const oldRotation = $('#oldRotation').val()
        sendQuery(date, '', '', '', '', '', '', oldRotation, rotation)
        break
    }
    // payrollUpdate
    switch ($('#selectData').val()) {
      case 'nomina':
        payrollUpdate($('#nomina').val(), id, 'payrollUpdate')
        break
      case 'cargo':
        payrollUpdate($('#cargo').val(), id, 'positionUpdate')
        break
      case 'turno':
        payrollUpdate($('#turno').val(), id, 'turnUpdate')
        break
      case 'rotation':
        payrollUpdate($('#rotation').val(), id, 'rotationUpdate')
        break
    }
  }
  
  // Si la data del anterior cambio es anterior al año actual
  if(yearData < year){
    item = 0
    countMonthBeforeEndYear = 12 - lastMonthChange
    result = countMonthBeforeEndYear + monthSelected
    isTwoYear = true
  } else {
    item = lastMonthChange
    countMonthBeforeEndYear = 0
    result = monthSelected
    isTwoYear = false
  }

  // Contador con logica de meses
  lastMonthChangeCounter = lastMonthChange == 0 ? 1 : lastMonthChange

  // Recorre una vez por cada mes transcurrido
  for (let i = item; i < result; i++) {

    // Agrega 0 al string
    if (lastMonthChangeCounter < 10) {
      lastMonthChangeCounter = '0' + lastMonthChangeCounter
    }

    // Valida si es del año anterior o el actual
    let date = ""
    if(i < countMonthBeforeEndYear && isTwoYear == true){
      date = yearData + '-' + lastMonthChangeCounter + '-' + dateSelectedArray[2]
    }
    if(i >= countMonthBeforeEndYear && isTwoYear == true){
      date = year + '-' + lastMonthChangeCounter + '-' + dateSelectedArray[2]
    }
    if(isTwoYear == false){
      date = year + '-' + lastMonthChangeCounter + '-' + dateSelectedArray[2]
    }

    if (i < result - 1) {
      switch ($('#selectData').val()) {
        case 'nomina':
          const oldPayroll = $('#oldPayroll').val()
          sendQuery(date, '', oldPayroll, '', '', '', '', '', '')
          break
        case 'cargo':
          const oldPosition = $('#position').val()
          sendQuery(date, '', '', '', oldPosition, '', '', '', '')
          break
        case 'turno':
          const oldTurn = $('#oldTurn').val()
          sendQuery(date, '', '', '', '', oldTurn, '', '', '')
          break
        case 'rotation':
          const oldRotation = $('#oldRotation').val()
          sendQuery(date, '', '', '', '', '', '', oldRotation, '')
          break
      }
    } else if (i == result - 1) {
      switch ($('#selectData').val()) {
        case 'nomina':
          const nomina = $('#nomina').val()
          sendQuery(date, nomina, nomina, '', '', '', '', '', '')
          break
        case 'cargo':
          const position = $('#cargo').val()
          sendQuery(date, '', '', position, position, '', '', '', '')
          break
        case 'turno':
          const turno = $('#turno').val()
          sendQuery(date, '', '', '', '', turno, turno, '', '')
          break
        case 'rotation':
          const rotation = $('#rotation').val()
          const oldRotation = $('#oldRotation').val()
          sendQuery(date, '', '', '', '', '', '', oldRotation, rotation)
          break
        default:
          break
      }
    }
    if (i == result - 1) {
      const id = $('#id').val()
      switch ($('#selectData').val()) {
        case 'nomina':
          payrollUpdate($('#nomina').val(), id, 'payrollUpdate')
          break
        case 'cargo':
          payrollUpdate($('#cargo').val(), id, 'positionUpdate')
          break
        case 'turno':
          payrollUpdate($('#turno').val(), id, 'turnUpdate')
          break
        case 'rotation':
          payrollUpdate($('#rotation').val(), id, 'rotationUpdate')
          break
        default:
          break
      }
    }

    lastMonthChangeCounter == 12 ? lastMonthChangeCounter = 1 : lastMonthChangeCounter++
  }
}

function validator(data) {
  const array = []
  if (data == undefined || data == '') {
    validationQuery([0], 2023)
  } else if (data != undefined || data != '') {
    for (let i = 0; i < data.length; i++) {
      let str = data[i].fecha.split('-')
      monthData = str[1]
      yearData = str[0]
      array.push(monthData)
      if (i + 1 == data.length) {
        validationQuery(array, yearData)
      }
    }
  }
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

function queryChanges(queryData) {
  const id = $('#id').val()
  logChanges(id)
  $.ajax({
    type: 'POST',
    url: `?view=sistema&mode=${queryData}`,
    dataType: 'json',
    data: {
      id: id,
    },
    statusCode: {
      200: function (data) {
        switch ($('#selectData').val()) {
          case 'nomina':
            if (data == false) {
              validator(undefined)
            } else {
              for (let i = 0; i < data.length; i++) {
                if (data[i].antigua_nomina == '' && data[i].nomina == '') {
                  if (i + 1 == data.length) {
                    validator(undefined)
                  }
                } else {
                  validator(data)
                  return
                }
              }
            }
            break
          case 'cargo':
            if (data == false) {
              validator(undefined)
            } else {
              for (let i = 0; i < data.length; i++) {
                if (data[i].antiguo_cargo == '' && data[i].cargo == '') {
                  if (i + 1 == data.length) {
                    validator(undefined)
                  }
                } else {
                  validator(data)
                  return
                }
              }
            }
            break
          case 'turno':
            if (data == false) {
              validator(undefined)
            } else {
              for (let i = 0; i < data.length; i++) {
                if (data[i].antiguo_turno == '' && data[i].turno == '') {
                  if (i + 1 == data.length) {
                    validator(undefined)
                  }
                } else {
                  validator(data)
                  return
                }
              }
            }
            break
          case 'rotation':
            if (data == false) {
              validator(undefined)
            } else {
              for (let i = 0; i < data.length; i++) {
                if (data[i].antigua_rotacion == '' && data[i].rotacion == '') {
                  if (i + 1 == data.length) {
                    validator(undefined)
                  }
                } else {
                  validator(data)
                  return
                }
              }
            }
            break
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
