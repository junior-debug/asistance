const months = ['', 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

const week = [
  'dom',
  'lun',
  'mar',
  'mie',
  'jue',
  'vie',
  'sab',
  'dom',
  'lun',
  'mar',
  'mie',
  'jue',
  'vie',
  'sab',
  'dom',
  'lun',
  'mar',
  'mie',
  'jue',
  'vie',
  'sab',
  'dom',
  'lun',
  'mar',
  'mie',
  'jue',
  'vie',
  'sab',
  'dom',
  'lun',
  'mar',
  'mie',
  'jue',
  'vie',
  'sab',
  'dom',
  'lun',
  'mar',
  'mie',
  'jue',
  'vie',
  'sab',
]

console.log("WORK");

const daysMonth = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]

let newDate = new Date()

const year = newDate.getFullYear()

const month = newDate.getMonth() + 1

$('#month').html(months[month])

let selectedYear = $('#selectYear').val()

const dataDays = document.getElementsByClassName('dataDay')

const day = document.getElementsByClassName('day')

function monthsSelect() {
  selectedYear = $('#selectYear').val()
  if(selectedYear == year){
    $('#selectMonth').empty();
    for (let i = 1; i < month + 1; i++) {
      $('#selectMonth').append(`<option value="${months[i].toLowerCase()}">${months[i]}</option>`)
    }
  } else {
    $('#selectMonth').empty();
    for (let i = 1; i < months.length; i++) {
      $('#selectMonth').append(`<option value="${months[i].toLowerCase()}">${months[i]}</option>`)
    }
  }
}

monthsSelect()

const selectedYearInput = document.querySelector("#selectYear");

selectedYearInput.addEventListener("change", (e) => monthsSelect())

function setSelected() {
  switch ($('#month').text()) {
    case 'Enero':
      $('#selectMonth option[value="enero"]').attr('selected', 'selected')
      break
    case 'Febrero':
      $('#selectMonth option[value="febrero"]').attr('selected', 'selected')
      break
    case 'Marzo':
      $('#selectMonth option[value="marzo"]').attr('selected', 'selected')
      break
    case 'Abril':
      $('#selectMonth option[value="abril"]').attr('selected', 'selected')
      break
    case 'Mayo':
      $('#selectMonth option[value="mayo"]').attr('selected', 'selected')
      break
    case 'Junio':
      $('#selectMonth option[value="junio"]').attr('selected', 'selected')
      break
    case 'Julio':
      $('#selectMonth option[value="julio"]').attr('selected', 'selected')
      break
    case 'Agosto':
      $('#selectMonth option[value="agosto"]').attr('selected', 'selected')
      break
    case 'Septiembre':
      $('#selectMonth option[value="septiembre"]').attr('selected', 'selected')
      break
    case 'Octubre':
      $('#selectMonth option[value="octubre"]').attr('selected', 'selected')
      break
    case 'Noviembre':
      $('#selectMonth option[value="noviembre"]').attr('selected', 'selected')
      break
    case 'Diciembre':
      $('#selectMonth option[value="diciembre"]').attr('selected', 'selected')
      break
    default:
      console.log('no data')
  }
}

setSelected()

$(document).ready(function () {
  window.testSelAll2 = $('.testSelAll2').SumoSelect({ selectAll: true })
  $('#search1').on('keyup', function () {
    let value = $(this).val().toUpperCase()
    $('#tableBody tr').filter(function () {
      $(this).toggle($(this).text().toUpperCase().indexOf(value) > -1)
    })
  })
})

// Segun el mes del input, llama a changeMonth()
function selectMonth() {
  $('#table tbody').empty()
  const payRolls = pushOpt()
  $('#month').html($('#selectMonth').val())

  $('.monthDays').remove()
  $('.titleDays').remove()
  $('tbody tr').remove()

  switch ($('#selectMonth').val()) {
    case 'enero':
      changeMonth(new Date(selectedYear, 1 - 1, 1).getDay(), new Date(selectedYear, 1, 0).getDate(), 1, payRolls, selectedYear)
      break
    case 'febrero':
      changeMonth(new Date(selectedYear, 2 - 1, 1).getDay(), new Date(selectedYear, 2, 0).getDate(), 2, payRolls, selectedYear)
      break
    case 'marzo':
      changeMonth(new Date(selectedYear, 3 - 1, 1).getDay(), new Date(selectedYear, 3, 0).getDate(), 3, payRolls, selectedYear)
      break
    case 'abril':
      changeMonth(new Date(selectedYear, 4 - 1, 1).getDay(), new Date(selectedYear, 4, 0).getDate(), 4, payRolls, selectedYear)
      break
    case 'mayo':
      changeMonth(new Date(selectedYear, 5 - 1, 1).getDay(), new Date(selectedYear, 5, 0).getDate(), 5, payRolls, selectedYear)
      break
    case 'junio':
      changeMonth(new Date(selectedYear, 6 - 1, 1).getDay(), new Date(selectedYear, 6, 0).getDate(), 6, payRolls, selectedYear)
      break
    case 'julio':
      changeMonth(new Date(selectedYear, 7 - 1, 1).getDay(), new Date(selectedYear, 7, 0).getDate(), 7, payRolls, selectedYear)
      break
    case 'agosto':
      changeMonth(new Date(selectedYear, 8 - 1, 1).getDay(), new Date(selectedYear, 8, 0).getDate(), 8, payRolls, selectedYear)
      break
    case 'septiembre':
      changeMonth(new Date(selectedYear, 9 - 1, 1).getDay(), new Date(selectedYear, 9, 0).getDate(), 9, payRolls, selectedYear)
      break
    case 'octubre':
      changeMonth(new Date(selectedYear, 10 - 1, 1).getDay(), new Date(selectedYear, 10, 0).getDate(), 10, payRolls, selectedYear)
      break
    case 'noviembre':
      changeMonth(new Date(selectedYear, 11 - 1, 1).getDay(), new Date(selectedYear, 11, 0).getDate(), 11, payRolls, selectedYear)
      break
    case 'diciembre':
      changeMonth(new Date(selectedYear, 12 - 1, 1).getDay(), new Date(selectedYear, 12, 0).getDate(), 12, payRolls, selectedYear)
      break
  }
}

// Obtiene payRolls
function pushOpt() {
  const arrayData = []
  const data = $('.selected')
  for (let i = 0; i < data.length; i++) {
    arrayData.push(data[i].lastChild.innerText)
  }
  return arrayData
}

// Contruye los dias del mes en la tabla, y llama a queryCalendary()
function changeMonth(firstDayWeek, totalDaysMonth, selectedMonth, payRolls, selectedYear) {
  let weekIterator = firstDayWeek - 1
  for (let i = 0; i < totalDaysMonth; i++) {
    $('#day-labels').append('<th class="titleDays"></th>')
    $('#one').append('<th class ="monthDays"><span class="dataDay"></span></th>')
  }
  for (let i = 0; i < $('.dataDay').length; i++) {
    dataDays[i].textContent = '' + daysMonth[i]
  }
  const titleDays = document.getElementsByClassName('titleDays')
  for (let i = 0; i < totalDaysMonth; i++) {
    weekIterator++
    titleDays[i].textContent = week[weekIterator]
  }
  // Consulta a BD segun los parametros del usuario.
  queryCalendary(firstDayWeek, totalDaysMonth, selectedMonth, payRolls, selectedYear)
}

// Consulta a BD segun los parametros del usuario.
function queryCalendary(firstDayWeek, totalDaysMonth, selectedMonth, payRolls, selectedYear) {
  const newQuery = buildQuery(payRolls)

  // Validacion de input
  if (newQuery == 0) {
    alert('seleccione nomina')
    return
  }

  $('#gif').show()
  $('.calendaryCont').hide()
  $('#calendar').show('slow')

  // Consulta al controller con caso asistanceData
  $.ajax({
    url: '?view=calendary&mode=asistanceData',
    type: 'post',
    dataType: 'json',
    data: {
      newQuery: newQuery,
    },
    statusCode: {
      200: function (data) {
        const classSelect = $('.select-all')
        let res = data
        if (selectedMonth < 10) {
          selectedMonth = '0' + selectedMonth
        }
        // console.log("classSelect", classSelect[0].classList[1]);
        if (classSelect[0].classList[1] == 'selected') {
          payRollChanges(res, selectedMonth, selectedYear, payRolls, firstDayWeek, totalDaysMonth, true)
        } else {
          payRollChanges(res, selectedMonth, selectedYear, payRolls, firstDayWeek, totalDaysMonth)
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

// Consulta la nomina si tiene cambios.
function payRollChanges(res, selectedMonth, selectedYear, payRolls, firstDayWeek, totalDaysMonth, allPayrolls = null) {
  $.ajax({
    url: '?view=calendary&mode=payrollChanges',
    type: 'post',
    dataType: 'json',
    data: {},
    statusCode: {
      200: function (data) {
        // console.log("allPayrolls", allPayrolls);
        if (allPayrolls == true) {
          console.log("ALL 2");
          buildJson(res, data, selectedMonth, firstDayWeek, totalDaysMonth, selectedYear)
          gif(480000) // 8 Minutos
        } else {
          for (let i = 0; i < data.length; i++) {
            
            if ((data[i].nomina == payRolls && data[i].fecha.slice(5, 7) == selectedMonth) || (data[i].antigua_nomina == payRolls && data[i].fecha.slice(5, 7) == selectedMonth)) {
              gif(60000) // 1 Minuto
              validationData(data, selectedMonth, selectedYear, payRolls, res, firstDayWeek, totalDaysMonth)
              return
            } 
            else if (i + 1 == data.length) {
              gif(60000) // 1 Minuto
              buildingCalendary(res, selectedMonth, selectedYear, firstDayWeek, totalDaysMonth)
            }
          }
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

// Setea los dias
function setIdDays(dayPosition, firstDayWeek) {
  let weekIterator = firstDayWeek - 1
  for (let i = 0; i < $('.dataDay').length; i++) {
    weekIterator++
    dayPosition[i].id = week[weekIterator]
  }
}

function buildingCalendary(newRes, selectedMonth, selectedYear, firstDayWeek, totalDaysMonth, userChanges = false) {
  const res = newRes
  const today = newDate.getDate()

  // console.log("res", res);

  for (let i = 0; i < res.length; i++) {
    $(`.tableAsistance${i}`).remove()

    const initMonth = res[i].fecha_ingreso.slice(5, 7)
    const initYear = res[i].fecha_ingreso.slice(0, 4)

    let notHired = null
    let dayhired = null

    const dateConsult = selectedYear + '-' + selectedMonth + '-' + totalDaysMonth
    const dateConsultEgreso = selectedYear + '-' + selectedMonth + '-' + "01"

    // Si el año y mes en el que fue contratado es el actual.
    if (initMonth == selectedMonth && initYear == selectedYear) {
      // Mes en el que ingreso
      notHired = initMonth
      // Dia en el que ingreso
      dayhired = res[i].fecha_ingreso.slice(8, 10)
    }

    if (
      (res[i].fecha_ingreso <= dateConsult && res[i].estatus == 'activo') 
      ||
      (res[i].fecha_egreso >= dateConsultEgreso && res[i].estatus == 'inactivo')
    ){
      $(`.day${i}`).remove()
      let id = res[i].cedula
      let dayPosition = ''

      // console.log("userChanges", userChanges);
      if (userChanges == false) {
        $('#tableBody').append(
          `<tr class='tableAsistance${i}'>
            <td id="payRoll${i}">${res[i].nomina_cliente}</td>
            <td>${res[i].cedula}</td>
            <td>${res[i].ficha}</td>
            <td>${res[i].nombre_apellido}</td>
            <td>${res[i].fecha_ingreso}</td>
            <td>${res[i].finalizacion_contrato}</td>
            <td class='soloExcel'>${res[i].finalizacion_segundo_contrato}</td>
            <td class='soloExcel'>${res[i].finalizacion_tercer_contrato}</td>
            <td id="position${i}">${res[i].cargo}</td>
            <td id="turn${i}">${res[i].turno}</td>
            <td id="rotation${i}">${res[i].rotacion}</td>
          </tr>`
        )
        for (let x = 0; x < $('.dataDay').length; x++) {
          $(`.tableAsistance${i}`).append(`<td class ="day${i}" style="border: 1px solid rgba(128, 128, 128, 0.342);text-align: center;"></td>`)
        }
        dayPosition = document.getElementsByClassName(`day${i}`)
      } 
      else if (userChanges != false) {
        $('#tableBody').append(
          `<tr class='tableAsistance${userChanges}'>
            <td id="payRoll${userChanges}">${res[i].nomina_cliente}</td>
            <td>${res[i].cedula}</td><td>${res[i].ficha}</td>
            <td>${res[i].nombre_apellido}</td><td>${res[i].fecha_ingreso}</td>
            <td>${res[i].finalizacion_contrato}</td>
            <td class='soloExcel'>${res[i].finalizacion_segundo_contrato}</td>
            <td class='soloExcel'>${res[i].finalizacion_tercer_contrato}</td>
            <td id="position${userChanges}">${res[i].cargo}</td>
            <td id="turn${userChanges}">${res[i].turno}</td>
            <td id="rotation${userChanges}">${res[i].rotacion}</td>
          </tr>`
        )
        for (let x = 0; x < $('.dataDay').length; x++) {
          $(`.tableAsistance${userChanges}`).append(`<td class ="day${userChanges}" style="border: 1px solid rgba(128, 128, 128, 0.342);text-align: center;"></td>`)
        }
        dayPosition = document.getElementsByClassName(`day${userChanges}`)
      }

      setIdDays(dayPosition, firstDayWeek)

      if (res[i].estatus_cambios == 1) {
        dataLog(id, selectedMonth, i, selectedYear)
        rotationLog(id, selectedMonth, selectedYear, i, dayPosition, totalDaysMonth, res[i].rotacion, today, res[i].estatus, notHired, dayhired, res[i].fecha_egreso)
      } 
      else {
        let rotacionString = res[i].rotacion
        let rotacionArray = res[i].rotacion.split('-')
        holyDays(rotacionArray, rotacionString, dayPosition, totalDaysMonth, '', today, selectedMonth, selectedYear, res[i].estatus, id, notHired, dayhired, res[i].fecha_egreso)
      }
    }
  }
}

// Valida segun mes seleccionado y año seleccionado.
function newRotTwo(first, second, dayPosition, totalDaysMonth, today, selectedMonth, selectedYear, estatusCambios, id, notHired, dayhired, fecha_egreso, dateChange) {
  for (let i = dateChange; i < totalDaysMonth; i++) {
    if (dayPosition[i].id == first || dayPosition[i].id == second) {
      dayPosition[i].textContent = 'DL'
    }
  }

  if (selectedMonth == month && selectedYear <= year) {
    let dataDay = `${selectedYear}-${selectedMonth}`
    if (estatusCambios == 'inactivo') {
      queryDays(id, dataDay, dayPosition, today, null, fecha_egreso, notHired, dayhired)
    } else {
      queryDays(id, dataDay, dayPosition, today, null, null, notHired, dayhired)
    }
  }
  
  if (selectedMonth != month && selectedYear <= year) {
    let dataDay = `${selectedYear}-${selectedMonth}`
    if (estatusCambios == 'inactivo') {
      queryDays(id, dataDay, dayPosition, totalDaysMonth, true, fecha_egreso, notHired, dayhired)
    } else {
      queryDays(id, dataDay, dayPosition, totalDaysMonth, true, null, notHired, dayhired)
    }
  }
}

// Llama a newRotTwo
function newRotation(totalDaysMonth, newRot, dayPosition, today, selectedMonth, selectedYear, estatusCambios, id, notHired, dayhired, fecha_egreso, dateChange) {
  if (typeof newRot == 'string') {
    switch (newRot) {
      case 'L-V':
        newRotTwo('sab', 'dom', dayPosition, totalDaysMonth, today, selectedMonth, selectedYear, estatusCambios, id, notHired, dayhired, fecha_egreso, dateChange)
        break
      case 'M-S':
        newRotTwo('dom', 'lun', dayPosition, totalDaysMonth, today, selectedMonth, selectedYear, estatusCambios, id, notHired, dayhired, fecha_egreso, dateChange)
        break
      case 'M-D':
        newRotTwo('lun', 'mar', dayPosition, totalDaysMonth, today, selectedMonth, selectedYear, estatusCambios, id, notHired, dayhired, fecha_egreso, dateChange)
        break
      case 'J-L':
        newRotTwo('mar', 'mie', dayPosition, totalDaysMonth, today, selectedMonth, selectedYear, estatusCambios, id, notHired, dayhired, fecha_egreso, dateChange)
        break
      case 'V-M':
        newRotTwo('mie', 'jue', dayPosition, totalDaysMonth, today, selectedMonth, selectedYear, estatusCambios, id, notHired, dayhired, fecha_egreso, dateChange)
        break
      case 'S-MI':
        newRotTwo('jue', 'vie', dayPosition, totalDaysMonth, today, selectedMonth, selectedYear, estatusCambios, id, notHired, dayhired, fecha_egreso, dateChange)
        break
      case 'D-J':
        newRotTwo('vie', 'sab', dayPosition, totalDaysMonth, today, selectedMonth, selectedYear, estatusCambios, id, notHired, dayhired, fecha_egreso, dateChange)
        break
    }
  } else {
    threeDays(newRot, dayPosition, totalDaysMonth, today, selectedMonth, selectedYear, estatusCambios, id, notHired, dayhired, fecha_egreso, dateChange)
  }
}

function twoDays(first, second, dayPosition, totalDaysMonth, newRot = null, today, selectedMonth, selectedYear, estatusCambios, id, notHired, dayhired, fecha_egreso, dateChange = null) {
  // **IMPORTANTE**
  // Validado los casos donde para por el ELSE
  // Validar caso donde newRot pase por el IF y llame a newRotation
  if (newRot) {
    const dateData = parseInt(dateChange) - 1
    for (let i = 0; i < dateData; i++) {
      dayPosition[i].textContent = ''
      if (dayPosition[i].id == first || dayPosition[i].id == second) {
        dayPosition[i].textContent = 'DL'
      }
    }
    newRotation(totalDaysMonth, newRot, dayPosition, today, selectedMonth, selectedYear, estatusCambios, id, notHired, dayhired, fecha_egreso, dateData)
    return
  } else {
    for (let i = 0; i < totalDaysMonth; i++) {
      dayPosition[i].textContent = ''
      if (dayPosition[i].id == first || dayPosition[i].id == second) {
        dayPosition[i].textContent = 'DL'
      }
    }

    // console.log("IF 1", selectedMonth == month && selectedYear <= year);
    if (selectedMonth == month && selectedYear == year) {
      let dataDay = `${selectedYear}-${selectedMonth}`
      // console.log(id, dataDay, dayPosition, totalDaysMonth, true, null, notHired, dayhired);
      if (estatusCambios == 'inactivo') {
        queryDays(id, dataDay, dayPosition, today, null, fecha_egreso, notHired, dayhired)
      } else {
        queryDays(id, dataDay, dayPosition, today, null, null, notHired, dayhired)
      }
    }

    if (selectedMonth == month && selectedYear < year) {
      let dataDay = `${selectedYear}-${selectedMonth}`
      // console.log(id, dataDay, dayPosition, totalDaysMonth, true, null, notHired, dayhired);
      if (estatusCambios == 'inactivo') {
        queryDays(id, dataDay, dayPosition, totalDaysMonth, true, fecha_egreso, notHired, dayhired)
      } else {
        queryDays(id, dataDay, dayPosition, totalDaysMonth, true, null, notHired, dayhired)
      }
    }
    
    // console.log("IF 2", selectedMonth != month && selectedYear <= year)
    if (selectedMonth != month && selectedYear <= year) {
      let dataDay = `${selectedYear}-${selectedMonth}`
      if (estatusCambios == 'inactivo') {
        queryDays(id, dataDay, dayPosition, totalDaysMonth, true, fecha_egreso, notHired, dayhired)
      } else {
        queryDays(id, dataDay, dayPosition, totalDaysMonth, true, null, notHired, dayhired)
      }
    }
  }
}

// **IMPORTANTE**
// Dentro de twoDays -- Validar caso donde newRot pase por el IF y llame a newRotation
function twoHolidays(rotacion, dayPosition, totalDaysMonth, newRot = null, today, selectedMonth, selectedYear, estatusCambios, id, notHired, dayhired, fecha_egreso, dateChange = null) {
  switch (rotacion) {
    case 'L-V':
      twoDays('sab', 'dom', dayPosition, totalDaysMonth, newRot, today, selectedMonth, selectedYear, estatusCambios, id, notHired, dayhired, fecha_egreso, dateChange)
      break
    case 'M-S':
      twoDays('dom', 'lun', dayPosition, totalDaysMonth, newRot, today, selectedMonth, selectedYear, estatusCambios, id, notHired, dayhired, fecha_egreso, dateChange)
      break
    case 'M-D':
      twoDays('lun', 'mar', dayPosition, totalDaysMonth, newRot, today, selectedMonth, selectedYear, estatusCambios, id, notHired, dayhired, fecha_egreso, dateChange)
      break
    case 'J-L':
      twoDays('mar', 'mie', dayPosition, totalDaysMonth, newRot, today, selectedMonth, selectedYear, estatusCambios, id, notHired, dayhired, fecha_egreso, dateChange)
      break
    case 'V-M':
      twoDays('mie', 'jue', dayPosition, totalDaysMonth, newRot, today, selectedMonth, selectedYear, estatusCambios, id, notHired, dayhired, fecha_egreso, dateChange)
      break
    case 'S-MI':
      twoDays('jue', 'vie', dayPosition, totalDaysMonth, newRot, today, selectedMonth, selectedYear, estatusCambios, id, notHired, dayhired, fecha_egreso, dateChange)
      break
    case 'D-J':
      twoDays('vie', 'sab', dayPosition, totalDaysMonth, newRot, today, selectedMonth, selectedYear, estatusCambios, id, notHired, dayhired, fecha_egreso, dateChange)
      break
  }
}

function threeDays(days, dayPosition, totalDaysMonth, today, selectedMonth, selectedYear, estatusCambios, id, notHired, dayhired, fecha_egreso, dateChange = null, oldRotation = null) {
  if (dateChange == null && oldRotation == null) {
    if (days.length == 3) {
      for (let i = 0; i < totalDaysMonth; i++) {
        if (dayPosition[i].id != days[0] && dayPosition[i].id != days[1] && dayPosition[i].id != days[2]) {
          dayPosition[i].textContent = 'DL'
        }
      }
    } else if (days.length == 4) {
      for (let i = 0; i < totalDaysMonth; i++) {
        if (dayPosition[i].id != days[0] && dayPosition[i].id != days[1] && dayPosition[i].id != days[2] && dayPosition[i].id != days[3]) {
          dayPosition[i].textContent = 'DL'
        }
      }
    }
  }

  if (dateChange != null && oldRotation == null) {
    if (days.length == 3) {
      for (let i = dateChange; i < totalDaysMonth; i++) {
        if (dayPosition[i].id != days[0] && dayPosition[i].id != days[1] && dayPosition[i].id != days[2]) {
          dayPosition[i].textContent = 'DL'
        }
      }
    } else if (days.length == 4) {
      for (let i = dateChange; i < totalDaysMonth; i++) {
        if (dayPosition[i].id != days[0] && dayPosition[i].id != days[1] && dayPosition[i].id != days[2] && dayPosition[i].id != days[3]) {
          dayPosition[i].textContent = 'DL'
        }
      }
    }
  }

  if (dateChange != null && oldRotation != null) {
    let oldDays = []
    for (let i = 0; i < oldRotation.length; i++) {
      switch (oldRotation[i]) {
        case 'L':
          oldDays.push('lun')
          break
        case 'M':
          oldDays.push('mar')
          break
        case 'MI':
          oldDays.push('mie')
          break
        case 'J':
          oldDays.push('jue')
          break
        case 'V':
          oldDays.push('vie')
          break
        case 'S':
          oldDays.push('sab')
          break
        case 'D':
          oldDays.push('dom')
          break
      }
    }
    
    const dateData = parseInt(dateChange) - 1
    if (oldDays.length == 3) {
      for (let i = 0; i < dateData; i++) {
        if (dayPosition[i].id != oldDays[0] && dayPosition[i].id != oldDays[1] && dayPosition[i].id != oldDays[2]) {
          dayPosition[i].textContent = 'DL'
        }
      }
    } else if (oldDays.length == 4) {
      for (let i = 0; i < dateData; i++) {
        if (dayPosition[i].id != oldDays[0] && dayPosition[i].id != oldDays[1] && dayPosition[i].id != oldDays[2] && dayPosition[i].id != oldDays[3]) {
          dayPosition[i].textContent = 'DL'
        }
      }
    }
    newRotation(totalDaysMonth, days, dayPosition, today, selectedMonth, estatusCambios, id, notHired, dayhired, fecha_egreso, dateData)
  }

  if (selectedMonth == month && selectedYear == year) {
    let dataDay = `${selectedYear}-${selectedMonth}`
    // console.log("threeDays IF 1", selectedMonth == month && selectedYear <= year)
    if (estatusCambios == 'inactivo') {
      queryDays(id, dataDay, dayPosition, today, null, fecha_egreso, notHired, dayhired)
    } else {
      queryDays(id, dataDay, dayPosition, today, null, null, notHired, dayhired)
    }
  }

  if (selectedMonth == month && selectedYear < year) {
    let dataDay = `${selectedYear}-${selectedMonth}`
    // console.log(id, dataDay, dayPosition, totalDaysMonth, true, null, notHired, dayhired);
    if (estatusCambios == 'inactivo') {
      queryDays(id, dataDay, dayPosition, totalDaysMonth, true, fecha_egreso, notHired, dayhired)
    } else {
      queryDays(id, dataDay, dayPosition, totalDaysMonth, true, null, notHired, dayhired)
    }
  }
  
  // console.log("threeDays IF 2", selectedMonth != month && selectedYear <= year)
  if (selectedMonth != month && selectedYear <= year) {
    let dataDay = `${selectedYear}-${selectedMonth}`
    if (estatusCambios == 'inactivo') {
      queryDays(id, dataDay, dayPosition, totalDaysMonth, true, fecha_egreso, notHired, dayhired)
    } else {
      queryDays(id, dataDay, dayPosition, totalDaysMonth, true, null, notHired, dayhired)
    }
  }
}

function fourHolidays(oldRotation, rotationArray, dayPosition, totalDaysMonth, today, selectedMonth, selectedYear, estatusCambios, id, notHired, dayhired, fecha_egreso, dateChange) {
  let days = []
  
  // console.log("fourHolidays rotation", rotationArray);
  for (let i = 0; i < rotationArray.length; i++) {
    switch (rotationArray[i]) {
      case 'L':
        days.push('lun')
        break
      case 'M':
        days.push('mar')
        break
      case 'MI':
        days.push('mie')
        break
      case 'J':
        days.push('jue')
        break
      case 'V':
        days.push('vie')
        break
      case 'S':
        days.push('sab')
        break
      case 'D':
        days.push('dom')
        break
    }
  }

  // console.log("fourHolidays oldRotation", oldRotation);
  if (oldRotation == null) {
    threeDays(days, dayPosition, totalDaysMonth, today, selectedMonth, selectedYear, estatusCambios, id, notHired, dayhired, fecha_egreso)
  }

  if (oldRotation != null) {
    if (oldRotation.length >= 3 && oldRotation.length < 5) {
      twoHolidays(oldRotation, dayPosition, totalDaysMonth, days, today, selectedMonth, selectedYear, estatusCambios, id, notHired, dayhired, fecha_egreso, dateChange)
    }
    if (oldRotation.length >= 5) {
      threeDays(days, dayPosition, totalDaysMonth, today, selectedMonth, selectedYear, estatusCambios, id, notHired, dayhired, fecha_egreso, dateChange, oldRotation)
    }
  }
}

function queryJustification(dates, dayPosition) {
  for (let a = 0; a < dates.length; a++) {
    if (dates[a].length > 2) {
      let date = dates[a].slice(0, -1)
      date = parseInt(date)
      date = date - 1
      const nomenclature = dates[a].slice(2, 3)
      if (dayPosition[date].textContent == 'DL') {
        dayPosition[date].textContent = 'DL'
      } else {
        dayPosition[date].textContent = nomenclature
      }
    }
  }
}

function inAssitstant(dayPosition, x, days, completMonth, nomenclature) {
  if(nomenclature == 'R'){
    dayPosition[x].textContent = `R`
  } else {
    if (nomenclature == 'NC') {
      dayPosition[x].textContent = `NC`
    } else {
      if (dayPosition[x].textContent == '') {
        if (completMonth == true) {
          dayPosition[x].textContent = `${nomenclature}`
        } else {
          if (x == days - 1) {
            dayPosition[x].textContent = ''
          } else {
            dayPosition[x].textContent = `${nomenclature}`
          }
        }
      }
    }
  }
}

function assistant(dayPosition, x) {
  if (dayPosition[x].textContent == '') {
    dayPosition[x].textContent = 'AP'
  }
}

// Coloca los valores en el calendario segun sus datos
function queryDays(id, dataDay, dayPosition, days, completMonth = null, status = null, notHired, dayhired = null) {
  $.ajax({
    type: 'POST',
    url: '?view=calendary&mode=asistance',
    dataType: 'json',
    data: { id: id, dataDay: dataDay },
    success: function (data) {
      // console.log("data", data);
      if (data != false) {
        let dates = []

        for (let i = 0; i < data.length; i++) {
          // Si tiene justificacion
          if (data[i].justificacion != '') {
            let queryDay = data[i].fecha_hora_aut
            queryDay = queryDay.slice(8, 10)
            queryDay = queryDay + data[i].justificacion
            dates.push(queryDay)
          } 
          // Si no tiene justificacion
          else {
            let queryDay = data[i].fecha_hora_aut
            queryDay = queryDay.slice(8, 10)
            dates.push(queryDay)
          }
        }

        for (let x = 0; x < days; x++) {
          let y = x + 1
          y = String(y)
          if (y < 10) {
            y = '0' + y
          }

          if (dates.includes(y) == true) {
            assistant(dayPosition, x)
          } 
          else if (dates.includes(y) == false) {
            if (status != null && notHired != null) {
              const date = status.slice(8, 10)
              if (x < dayhired - 1) {
                inAssitstant(dayPosition, x, days, completMonth, 'NC')
              } else if (x >= date) {
                inAssitstant(dayPosition, x, days, completMonth, 'R')
              } else if (x < date) {
                inAssitstant(dayPosition, x, days, completMonth, 'E')
              }
            } 
            else if (status != null) {
              const date = status.slice(8, 10)
              if (x >= date) {
                inAssitstant(dayPosition, x, days, completMonth, 'R')
              } else if (x < date) {
                inAssitstant(dayPosition, x, days, completMonth, 'E')
              }
            } 
            else if (notHired != null) {
              if (x < dayhired - 1) {
                inAssitstant(dayPosition, x, days, completMonth, 'NC')
              } else if (x >= dayhired - 1) {
                inAssitstant(dayPosition, x, days, completMonth, 'E')
              }
            } 
            else {
              inAssitstant(dayPosition, x, days, completMonth, 'E')
            }
          }
        }
        queryJustification(dates, dayPosition)
      } 
      else {
        if (status != null) {
          const date = status.slice(8, 10)
          for (let x = 0; x < days; x++) {
            if (x >= date) {
              inAssitstant(dayPosition, x, days, completMonth, 'R')
            } else if (x < date) {
              inAssitstant(dayPosition, x, days, completMonth, 'E')
            }
          }
        } else {
          for (let i = 0; i < days; i++) {
            if (i < dayhired - 1) {
              inAssitstant(dayPosition, i, days, completMonth, 'NC')
            } else {
              inAssitstant(dayPosition, i, days, completMonth, 'E')
            }
          }
        }
      }
    },
  })
}

// ???
function dataLog(id, selectedMonth, x) {
  $.ajax({
    type: 'POST',
    url: '?view=calendary&mode=userChanges',
    dataType: 'json',
    data: { id: id },
    success: function (data) {
      for (let i = 0; i < data.length; i++) {
        let arr = data[i].fecha.split('-')
        if (selectedMonth == arr[1] && selectedYear == arr[0] && data[i].antigua_nomina != '') {
          $(`#payRoll${x}`).text(`${data[i].antigua_nomina}`)
        }
        if (selectedMonth == arr[1] && selectedYear == arr[0] && data[i].antiguo_cargo != '') {
          $(`#position${x}`).text(`${data[i].antiguo_cargo}`)
        }
        if (selectedMonth == arr[1] && selectedYear == arr[0] && data[i].antiguo_turno != '') {
          $(`#turn${x}`).text(`${data[i].antiguo_turno}`)
        }
      }
    },
  })
}

// ???
function rotationLog(id, selectedMonth, selectedYear, iterator, dayPosition, totalDaysMonth, oldRot, today, estatusCambios, notHired, dayhired, fecha_egreso) {
  const date = selectedYear + '-' + selectedMonth
  $.ajax({
    type: 'POST',
    url: '?view=calendary&mode=rotationLog',
    dataType: 'json',
    data: { id: id, date: date },
    success: function (data) {
      if (data == false) {
        let rotacion = oldRot
        let rotation = oldRot
        rotation = rotation.split('-')
        holyDays(rotation, rotacion, dayPosition, totalDaysMonth, '', today, selectedMonth, selectedYear, estatusCambios, id, notHired, dayhired, fecha_egreso)
      } else {
        for (let i = 0; i < data.length; i++) {
          if (data[i].rotacion == '' && data[i].antigua_rotacion == '') {
            $(`#rotation${iterator}`).text(`${oldRot}`)
            let rotacion = oldRot
            let rotation = oldRot
            rotation = rotation.split('-')
            holyDays(rotation, rotacion, dayPosition, totalDaysMonth, '', today, selectedMonth, selectedYear, estatusCambios, id, notHired, dayhired, fecha_egreso)
          } else if (data[i].rotacion == '' && data[i].antigua_rotacion != '') {
            $(`#rotation${iterator}`).text(`${data[i].antigua_rotacion}`)
            let rotacion = data[i].antigua_rotacion
            let rotation = data[i].antigua_rotacion
            rotation = rotation.split('-')
            holyDays(rotation, rotacion, dayPosition, totalDaysMonth, '', today, selectedMonth, selectedYear, estatusCambios, id, notHired, dayhired, fecha_egreso)
          } else if (data[i].rotacion != '' && data[i].antigua_rotacion != '') {
            $(`#rotation${iterator}`).text(`${data[i].rotacion}`)
            let rotacion = data[i].rotacion
            let rotation = data[i].rotacion
            rotation = rotation.split('-')
            let oldRotation = data[i].antigua_rotacion
            let dateChange = data[i].fecha
            dateChange = dateChange.split('-')[2]
            holyDays(rotation, rotacion, dayPosition, totalDaysMonth, oldRotation, today, selectedMonth, selectedYear, estatusCambios, id, notHired, dayhired, fecha_egreso, dateChange)
          }
        }
      }
    },
  })
}

// Segun la rotacion llama a twoHolidays() o fourHolidays()
function holyDays(rotationArray, rotacionString, dayPosition, totalDaysMonth, oldRotation, today, selectedMonth, selectedYear, estatusCambios, id, notHired, dayhired, fecha_egreso = null, dateChange = null) {
  if (oldRotation == '') {
    if (rotationArray.length == 2) {
      twoHolidays(rotacionString, dayPosition, totalDaysMonth, null, today, selectedMonth, selectedYear, estatusCambios, id, notHired, dayhired, fecha_egreso)
    } 
    if (rotationArray.length > 2) {
      fourHolidays(null, rotationArray, dayPosition, totalDaysMonth, today, selectedMonth, selectedYear, estatusCambios, id, notHired, dayhired, fecha_egreso)
    }
  } 
  
  if (oldRotation != '') {
    if (rotationArray.length == 2) {
      twoHolidays(oldRotation, dayPosition, totalDaysMonth, rotacionString, today, selectedMonth, selectedYear, estatusCambios, id, notHired, dayhired, fecha_egreso, dateChange)
    } else if (rotation.length > 2) {
      fourHolidays(oldRotation, rotationArray, dayPosition, totalDaysMonth, today, selectedMonth, selectedYear, estatusCambios, id, notHired, dayhired, fecha_egreso, dateChange)
    }
  }
}

// Reproduce el gif
function gif(time) {
  setTimeout(function () {
    $('#gif').hide()
    $('.calendaryCont').show()
  }, time)
}

// return
// SELECT * FROM empleados WHERE nomina_cliente = 'ASISTENTES'
function buildQuery(payRolls) {
  if (payRolls.length == 0) {
    return 0
  } else {
    let data = 'SELECT * FROM empleados WHERE'
    let queryData = ''

    for (var i = 0; i < payRolls.length; i++) {
      if (i + 1 == payRolls.length) {
        queryData = queryData + 'nomina_cliente =' + `'${payRolls[i]}'`
      } else {
        queryData = queryData + 'nomina_cliente =' + `'${payRolls[i]}'` + ' ' + 'OR' + ' '
      }
    }

    const newQuery = data + ' ' + queryData
    return newQuery
  }
}

// Consulta los datos de userData y llama buildingCalendary
function userWithChanges(id, selectedMonth, selectedYear, lastPayroll, dataMonth, dataYear, firstDayWeek, totalDaysMonth) {
  $.ajax({
    url: '?view=calendary&mode=userData',
    type: 'post',
    dataType: 'json',
    data: {
      id,
    },
    statusCode: {
      200: function (data) {
        for (let y = 0; y < data.length; y++) {
          if (data[y].nomina_cliente != lastPayroll && selectedMonth == dataMonth && selectedYear == dataYear) {
            const newObject = [
              {
                id: data[y].id,
                empresa: data[y].empresa,
                nomina_cliente: lastPayroll,
                cedula: data[y].cedula,
                fecha_nacimiento: data[y].fecha_nacimiento,
                correo: data[y].correo,
                nombre_apellido: data[y].nombre_apellido,
                fecha_ingreso: data[y].fecha_ingreso,
                fecha_egreso: data[y].fecha_egreso,
                finalizacion_contrato: data[y].finalizacion_contrato,
                finalizacion_segundo_contrato: data[y].finalizacion_segundo_contrato,
                finalizacion_tercer_contrato: data[y].finalizacion_tercer_contrato,
                cargo: data[y].cargo,
                unidad_organizativa: data[y].unidad_organizativa,
                turno: data[y].turno,
                rotacion: data[y].rotacion,
                horario: data[y].horario,
                excepcion: data[y].excepcion,
                ficha: data[y].ficha,
                banco: data[y].banco,
                tipo_cuenta: data[y].tipo_cuenta,
                numero_cuenta: data[y].numero_cuenta,
                sueldo: data[y].sueldo,
                destreza: data[y].destreza,
                direccion: data[y].direccion,
                telefono_1: data[y].telefono_1,
                telefono_2: data[y].telefono_2,
                tickets: data[y].tickets,
                bono: data[y].bono,
                utilidades: data[y].utilidades,
                estatus: data[y].estatus,
                estatus_cambios: data[y].estatus_cambios,
              },
            ]
            if (y + 1 == data.length) {
              buildingCalendary(newObject, selectedMonth, selectedYear, firstDayWeek, totalDaysMonth, id)
            }
          }
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

// Valida la data y segun llama al userWithChanges o buildingCalendary
function validationData(data, selectedMonth, selectedYear, payRolls, res, firstDayWeek, totalDaysMonth) {
  if (data != false) {
    for (let i = 0; i < data.length; i++) {
      let lastPayroll = data[i].antigua_nomina
      let dataMonth = data[i].fecha.slice(5, 7)
      let dataYear = data[i].fecha.slice(0, 4)
      let id = data[i].cedula

      for (let x = 0; x < payRolls.length; x++) {
        if (payRolls[x] == lastPayroll && selectedMonth == dataMonth && selectedYear == dataYear) {
          userWithChanges(id, selectedMonth, selectedYear, lastPayroll, dataMonth, dataYear, firstDayWeek, totalDaysMonth)
        }
      }
      if (i == data.length - 1) {
        buildingCalendary(res, selectedMonth, selectedYear, firstDayWeek, totalDaysMonth)
      }
    }
  } else {
    buildingCalendary(res, selectedMonth, selectedYear, firstDayWeek, totalDaysMonth)
  }
}

// Construye el buildJson y llama buildingCalendary
function buildJson(res, data, selectedMonth, firstDayWeek, totalDaysMonth, selectedYear) {
  for (let i = 0; i < res.length; i++) {
    if (res[i].estatus_cambios == 1) {
      for (let y = 0; y < data.length; y++) {
        if (selectedMonth == data[y].fecha.slice(5, 7) && selectedYear == data[y].fecha.slice(0, 4) && data[y].antigua_nomina != '' && data[y].nomina == '' && data[y].cedula == res[i].cedula) {
          res[i].nomina_cliente = data[y].antigua_nomina
        }
      }
    }
    if (i + 1 == res.length) {
      buildingCalendary(res, selectedMonth, selectedYear, firstDayWeek, totalDaysMonth)
    }
  }
}

function download() {
  $('#table').table2excel({
    exclude: '.noExl',
    name: 'Excel Document Name',
    filename: 'calendario' + new Date().toISOString() + '.xls',
    fileext: '.xls',
    exclude_img: true,
    exclude_links: true,
    exclude_inputs: true,
    preserveColors: true,
  })
}

function userUpdate(requestDate, id, oldRotation) {
  $.ajax({
    type: 'POST',
    url: `?view=calendary&mode=userUpdate`,
    dataType: 'json',
    data: { requestDate: requestDate, id: id, oldRotation: oldRotation },
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

function userData(requestDate, id) {
  $.ajax({
    type: 'POST',
    url: `?view=calendary&mode=userData`,
    dataType: 'json',
    data: { id: id },
    statusCode: {
      200: function (data) {
        userUpdate(requestDate, id, data[0].rotacion)
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