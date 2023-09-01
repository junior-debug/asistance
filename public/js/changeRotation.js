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

function validationQuery(array) {
  let dataDay = $('#day').val()
  dataDay = dataDay.split('-')
  let dataDayInt = parseInt(dataDay[1])
  dataDayInt = dataDayInt + 1
  const last = array[array.length - 1]
  let lastInt = parseInt(last)
  lastInt = lastInt + 1
  if (lastInt == dataDayInt) {
    const id = $('#id').val()
    let date = year + '-' + last + '-' + dataDay[2]
    switch ($('#selectData').val()) {
      case 'nomina':
        const nomina = $('#nomina').val()
        sendQuery(date, nomina, nomina, '', '', '', '', '', '', lastInt, dataDayInt)
        break
      case 'cargo':
        const position = $('#cargo').val()
        sendQuery(date, '', '', position, position, '', '', '', '', lastInt, dataDayInt)
        break
      case 'turno':
        const turno = $('#turno').val()
        sendQuery(date, '', '', '', '', turno, turno, '', '', lastInt, dataDayInt)
        break
      case 'rotation':
        const rotation = $('#rotation').val()
        const oldRotation = $('#oldRotation').val()
        sendQuery(date, '', '', '', '', '', '', oldRotation, rotation, lastInt, dataDayInt)
        break
    }
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
  for (let i = lastInt; i < dataDayInt; i++) {
    if (i < 10) {
      i = '0' + i
    }
    let date = year + '-' + i + '-' + dataDay[2]
    if (i < dataDayInt - 1) {
      switch ($('#selectData').val()) {
        case 'nomina':
          const oldPayroll = $('#oldPayroll').val()
          sendQuery(date, '', oldPayroll, '', '', '', '', '', '', lastInt, dataDayInt)
          break
        case 'cargo':
          const oldPosition = $('#position').val()
          sendQuery(date, '', '', '', oldPosition, '', '', '', '', lastInt, dataDayInt)
          break
        case 'turno':
          const oldTurn = $('#oldTurn').val()
          sendQuery(date, '', '', '', '', oldTurn, '', '', '', lastInt, dataDayInt)
          break
        case 'rotation':
          const oldRotation = $('#oldRotation').val()
          sendQuery(date, '', '', '', '', '', '', oldRotation, '', lastInt, dataDayInt)
          break
      }
    } else if (i == dataDayInt - 1) {
      switch ($('#selectData').val()) {
        case 'nomina':
          const nomina = $('#nomina').val()
          sendQuery(date, nomina, nomina, '', '', '', '', '', '', lastInt, dataDayInt)
          break
        case 'cargo':
          const position = $('#cargo').val()
          sendQuery(date, '', '', position, position, '', '', '', '', lastInt, dataDayInt)
          break
        case 'turno':
          const turno = $('#turno').val()
          sendQuery(date, '', '', '', '', turno, turno, '', '', lastInt, dataDayInt)
          break
        case 'rotation':
          const rotation = $('#rotation').val()
          const oldRotation = $('#oldRotation').val()
          sendQuery(date, '', '', '', '', '', '', oldRotation, rotation, lastInt, dataDayInt)
          break
      }
    }
    if (i == dataDayInt - 1) {
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
  }
}

function validator(data) {
  const array = []
  if (data == undefined || data == '') {
    array.push(0)
    validationQuery(array)
  } else if (data != undefined || data != '') {
    for (let i = 0; i < data.length; i++) {
      let str = data[i].fecha.split('-')
      str = str[1]
      str = array.push(str)
      if (i + 1 == data.length) {
        validationQuery(array)
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
