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
const daysMonth = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
let newDate = new Date()
const year = newDate.getFullYear()
const month = newDate.getMonth() + 1

$('#month').html(months[month])

const dataDays = document.getElementsByClassName('dataDay')
const day = document.getElementsByClassName('day')

function monthsSelect() {
  for (let i = 1; i < month + 1; i++) {
    $('#selectMonth').append(`<option value="${months[i].toLowerCase()}">${months[i]}</option>`)
  }
}
monthsSelect()

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
    case 'Octubro':
      $('#selectMonth option[value="octubro"]').attr('selected', 'selected')
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

function changeMonth(firstDayWeek, totalDaysMonth, selectedMonth, payRolls) {
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
  queryCalendary(firstDayWeek, totalDaysMonth, selectedMonth, payRolls)
}

function selectMonth() {
  $('#table tbody').empty()
  const payRolls = pushOpt()
  $('#month').html($('#selectMonth').val())

  $('.monthDays').remove()
  $('.titleDays').remove()
  $('tbody tr').remove()

  switch ($('#selectMonth').val()) {
    case 'enero':
      changeMonth(new Date(year, 1 - 1, 1).getDay(), new Date(year, 1, 0).getDate(), 01, payRolls)
      break
    case 'febrero':
      changeMonth(new Date(year, 2 - 1, 1).getDay(), new Date(year, 2, 0).getDate(), 02, payRolls)
      break
    case 'marzo':
      changeMonth(new Date(year, 3 - 1, 1).getDay(), new Date(year, 3, 0).getDate(), 03, payRolls)
      break
    case 'abril':
      changeMonth(new Date(year, 4 - 1, 1).getDay(), new Date(year, 4, 0).getDate(), 04, payRolls)
      break
    case 'mayo':
      changeMonth(new Date(year, 5 - 1, 1).getDay(), new Date(year, 5, 0).getDate(), 05, payRolls)
      break
    case 'junio':
      changeMonth(new Date(year, 6 - 1, 1).getDay(), new Date(year, 6, 0).getDate(), 06, payRolls)
      break
    case 'julio':
      changeMonth(new Date(year, 7 - 1, 1).getDay(), new Date(year, 7, 0).getDate(), 07, payRolls)
      break
    case 'agosto':
      changeMonth(new Date(year, 8 - 1, 1).getDay(), new Date(year, 8, 0).getDate(), 08, payRolls)
      break
    case 'septiembre':
      changeMonth(new Date(year, 9 - 1, 1).getDay(), new Date(year, 9, 0).getDate(), 09, payRolls)
      break
    case 'octubre':
      changeMonth(new Date(year, 10 - 1, 1).getDay(), new Date(year, 10, 0).getDate(), 10, payRolls)
      break
    case 'noviembre':
      changeMonth(new Date(year, 11 - 1, 1).getDay(), new Date(year, 11, 0).getDate(), 11, payRolls)
      break
    case 'diciembre':
      changeMonth(new Date(year, 12 - 1, 1).getDay(), new Date(year, 12, 0).getDate(), 12, payRolls)
      break
  }
}

function setIdDays(dayPosition, firstDayWeek) {
  let weekIterator = firstDayWeek - 1
  for (let i = 0; i < $('.dataDay').length; i++) {
    weekIterator++
    dayPosition[i].id = week[weekIterator]
  }
}

function newRotTwo(first, second, dayPosition, totalDaysMonth, today, selectedMonth, estatusCambios, id, notHired, dayhired, fecha_egreso, dateChange) {
  for (let i = dateChange; i < totalDaysMonth; i++) {
    if (dayPosition[i].id == first || dayPosition[i].id == second) {
      dayPosition[i].textContent = 'DL'
    }
  }
  if (selectedMonth == month) {
    let dataDay = `${year}-${selectedMonth}`
    if (estatusCambios == 'inactivo') {
      queryDays(id, dataDay, dayPosition, today, null, fecha_egreso, notHired, dayhired)
    } else {
      queryDays(id, dataDay, dayPosition, today, null, null, notHired, dayhired)
    }
  } else if (selectedMonth != month) {
    let dataDay = `${year}-${selectedMonth}`
    if (estatusCambios == 'inactivo') {
      queryDays(id, dataDay, dayPosition, totalDaysMonth, true, fecha_egreso, notHired, dayhired)
    } else {
      queryDays(id, dataDay, dayPosition, totalDaysMonth, true, null, notHired, dayhired)
    }
  }
}

function newRotation(totalDaysMonth, newRot, dayPosition, today, selectedMonth, estatusCambios, id, notHired, dayhired, fecha_egreso, dateChange) {
  if (newRot.length == 3 && typeof newRot == 'string') {
    switch (newRot) {
      case 'L-V':
        newRotTwo('sab', 'dom', dayPosition, totalDaysMonth, today, selectedMonth, estatusCambios, id, notHired, dayhired, fecha_egreso, dateChange)
        break
      case 'M-S':
        newRotTwo('dom', 'lun', dayPosition, totalDaysMonth, today, selectedMonth, estatusCambios, id, notHired, dayhired, fecha_egreso, dateChange)
        break
      case 'M-D':
        newRotTwo('lun', 'mar', dayPosition, totalDaysMonth, today, selectedMonth, estatusCambios, id, notHired, dayhired, fecha_egreso, dateChange)
        break
      case 'J-L':
        newRotTwo('mar', 'mie', dayPosition, totalDaysMonth, today, selectedMonth, estatusCambios, id, notHired, dayhired, fecha_egreso, dateChange)
        break
      case 'V-M':
        newRotTwo('mie', 'jue', dayPosition, totalDaysMonth, today, selectedMonth, estatusCambios, id, notHired, dayhired, fecha_egreso, dateChange)
        break
      case 'S-MI':
        newRotTwo('jue', 'vie', dayPosition, totalDaysMonth, today, selectedMonth, estatusCambios, id, notHired, dayhired, fecha_egreso, dateChange)
        break
      case 'D-J':
        newRotTwo('vie', 'sab', dayPosition, totalDaysMonth, today, selectedMonth, estatusCambios, id, notHired, dayhired, fecha_egreso, dateChange)
        break
    }
  } else {
    threeDays(newRot, dayPosition, totalDaysMonth, today, selectedMonth, estatusCambios, id, notHired, dayhired, fecha_egreso, dateChange)
  }
}

function twoDays(first, second, dayPosition, totalDaysMonth, newRot = null, today, selectedMonth, estatusCambios, id, notHired, dayhired, fecha_egreso, dateChange = null) {
  if (newRot) {
    for (let i = 0; i < dateChange; i++) {
      dayPosition[i].textContent = ''
      if (dayPosition[i].id == first || dayPosition[i].id == second) {
        dayPosition[i].textContent = 'DL'
      }
    }
    newRotation(totalDaysMonth, newRot, dayPosition, today, selectedMonth, estatusCambios, id, notHired, dayhired, fecha_egreso, dateChange)
    return
  } else {
    for (let i = 0; i < totalDaysMonth; i++) {
      dayPosition[i].textContent = ''
      if (dayPosition[i].id == first || dayPosition[i].id == second) {
        dayPosition[i].textContent = 'DL'
      }
    }
    if (selectedMonth == month) {
      let dataDay = `${year}-${selectedMonth}`
      if (estatusCambios == 'inactivo') {
        queryDays(id, dataDay, dayPosition, today, null, fecha_egreso, notHired, dayhired)
      } else {
        queryDays(id, dataDay, dayPosition, today, null, null, notHired, dayhired)
      }
    } else if (selectedMonth != month) {
      let dataDay = `${year}-${selectedMonth}`
      if (estatusCambios == 'inactivo') {
        queryDays(id, dataDay, dayPosition, totalDaysMonth, true, fecha_egreso, notHired, dayhired)
      } else {
        queryDays(id, dataDay, dayPosition, totalDaysMonth, true, null, notHired, dayhired)
      }
    }
  }
}

function twoHolidays(rotacion, dayPosition, totalDaysMonth, newRot = null, today, selectedMonth, estatusCambios, id, notHired, dayhired, fecha_egreso, dateChange = null) {
  switch (rotacion) {
    case 'L-V':
      twoDays('sab', 'dom', dayPosition, totalDaysMonth, newRot, today, selectedMonth, estatusCambios, id, notHired, dayhired, fecha_egreso, dateChange)
      break
    case 'M-S':
      twoDays('dom', 'lun', dayPosition, totalDaysMonth, newRot, today, selectedMonth, estatusCambios, id, notHired, dayhired, fecha_egreso, dateChange)
      break
    case 'M-D':
      twoDays('lun', 'mar', dayPosition, totalDaysMonth, newRot, today, selectedMonth, estatusCambios, id, notHired, dayhired, fecha_egreso, dateChange)
      break
    case 'J-L':
      twoDays('mar', 'mie', dayPosition, totalDaysMonth, newRot, today, selectedMonth, estatusCambios, id, notHired, dayhired, fecha_egreso, dateChange)
      break
    case 'V-M':
      twoDays('mie', 'jue', dayPosition, totalDaysMonth, newRot, today, selectedMonth, estatusCambios, id, notHired, dayhired, fecha_egreso, dateChange)
      break
    case 'S-MI':
      twoDays('jue', 'vie', dayPosition, totalDaysMonth, newRot, today, selectedMonth, estatusCambios, id, notHired, dayhired, fecha_egreso, dateChange)
      break
    case 'D-J':
      twoDays('vie', 'sab', dayPosition, totalDaysMonth, newRot, today, selectedMonth, estatusCambios, id, notHired, dayhired, fecha_egreso, dateChange)
      break
  }
}

function threeDays(days, dayPosition, totalDaysMonth, today, selectedMonth, estatusCambios, id, notHired, dayhired, fecha_egreso, dateChange = null) {
  if (dateChange == null) {
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
  } else {
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

  if (selectedMonth == month) {
    let dataDay = `${year}-${selectedMonth}`
    if (estatusCambios == 'inactivo') {
      queryDays(id, dataDay, dayPosition, today, null, fecha_egreso, notHired, dayhired)
    } else {
      queryDays(id, dataDay, dayPosition, today, null, null, notHired, dayhired)
    }
  } else if (selectedMonth != month) {
    let dataDay = `${year}-${selectedMonth}`
    if (estatusCambios == 'inactivo') {
      queryDays(id, dataDay, dayPosition, totalDaysMonth, true, fecha_egreso, notHired, dayhired)
    } else {
      queryDays(id, dataDay, dayPosition, totalDaysMonth, true, null, notHired, dayhired)
    }
  }
}

function fourHolidays(oldRotation, rotation, dayPosition, totalDaysMonth, today, selectedMonth, estatusCambios, id, notHired, dayhired, fecha_egreso, dateChange) {
  let days = []
  for (let i = 0; i < rotation.length; i++) {
    switch (rotation[i]) {
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

  if (oldRotation == null) {
    threeDays(days, dayPosition, totalDaysMonth, today, selectedMonth, estatusCambios, id, notHired, dayhired, fecha_egreso)
  } else if (oldRotation != null) {
    if (oldRotation.length == 3) {
      twoHolidays(oldRotation, dayPosition, totalDaysMonth, days, today, selectedMonth, estatusCambios, id, notHired, dayhired, fecha_egreso, dateChange)
    } else if (oldRotation.length > 3) {
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

function assistant(dayPosition, x) {
  if (dayPosition[x].textContent == '') {
    dayPosition[x].textContent = 'AP'
  }
}

function queryDays(id, dataDay, dayPosition, days, completMonth = null, status = null, notHired, dayhired = null) {
  $.ajax({
    type: 'POST',
    url: '?view=calendary&mode=asistance',
    dataType: 'json',
    data: { id: id, dataDay: dataDay },
    success: function (data) {
      if (data != false) {
        let dates = []
        for (let i = 0; i < data.length; i++) {
          if (data[i].justificacion != '') {
            let queryDay = data[i].fecha_hora_aut
            queryDay = queryDay.slice(8, 10)
            queryDay = queryDay + data[i].justificacion
            dates.push(queryDay)
          } else {
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
          } else if (dates.includes(y) == false) {
            if (status != null && notHired != null) {
              const date = status.slice(8, 10)
              if (x < dayhired - 1) {
                inAssitstant(dayPosition, x, days, completMonth, 'NC')
              } else if (x >= date) {
                inAssitstant(dayPosition, x, days, completMonth, 'R')
              } else if (x < date) {
                inAssitstant(dayPosition, x, days, completMonth, 'E')
              }
            } else if (status != null) {
              const date = status.slice(8, 10)
              if (x >= date) {
                inAssitstant(dayPosition, x, days, completMonth, 'R')
              } else if (x < date) {
                inAssitstant(dayPosition, x, days, completMonth, 'E')
              }
            } else if (notHired != null) {
              if (x < dayhired - 1) {
                inAssitstant(dayPosition, x, days, completMonth, 'NC')
              } else if (x >= dayhired - 1) {
                inAssitstant(dayPosition, x, days, completMonth, 'E')
              }
            } else {
              inAssitstant(dayPosition, x, days, completMonth, 'E')
            }
          }
        }
        queryJustification(dates, dayPosition)
      } else {
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
            if (dayPosition[i].textContent == '') {
              dayPosition[i].textContent = 'E'
            }
          }
        }
      }
    },
  })
}

function dataLog(id, selectedMonth, x) {
  $.ajax({
    type: 'POST',
    url: '?view=calendary&mode=userChanges',
    dataType: 'json',
    data: { id: id },
    success: function (data) {
      for (let i = 0; i < data.length; i++) {
        let arr = data[i].fecha.split('-')
        if (selectedMonth == arr[1] && data[i].antigua_nomina != '') {
          $(`#payRoll${x}`).text(`${data[i].antigua_nomina}`)
        }
        if (selectedMonth == arr[1] && data[i].antiguo_cargo != '') {
          $(`#position${x}`).text(`${data[i].antiguo_cargo}`)
        }
        if (selectedMonth == arr[1] && data[i].antiguo_turno != '') {
          $(`#turn${x}`).text(`${data[i].antiguo_turno}`)
        }
      }
    },
  })
}

function rotationLog(id, selectedMonth, iterator, dayPosition, totalDaysMonth, oldRot, today, estatusCambios, notHired, dayhired, fecha_egreso) {
  const date = year + '-' + selectedMonth
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
        holyDays(rotation, rotacion, dayPosition, totalDaysMonth, '', today, selectedMonth, estatusCambios, id, notHired, dayhired, fecha_egreso)
      } else {
        for (let i = 0; i < data.length; i++) {
          if (data[i].rotacion == '' && data[i].antigua_rotacion == '') {
            $(`#rotation${iterator}`).text(`${oldRot}`)
            let rotacion = oldRot
            let rotation = oldRot
            rotation = rotation.split('-')
            holyDays(rotation, rotacion, dayPosition, totalDaysMonth, '', today, selectedMonth, estatusCambios, id, notHired, dayhired, fecha_egreso)
          } else if (data[i].rotacion == '' && data[i].antigua_rotacion != '') {
            $(`#rotation${iterator}`).text(`${data[i].antigua_rotacion}`)
            let rotacion = data[i].antigua_rotacion
            let rotation = data[i].antigua_rotacion
            rotation = rotation.split('-')
            holyDays(rotation, rotacion, dayPosition, totalDaysMonth, '', today, selectedMonth, estatusCambios, id, notHired, dayhired, fecha_egreso)
          } else if (data[i].rotacion != '' && data[i].antigua_rotacion != '') {
            $(`#rotation${iterator}`).text(`${data[i].rotacion}`)
            let rotacion = data[i].rotacion
            let rotation = data[i].rotacion
            rotation = rotation.split('-')
            let oldRotation = data[i].antigua_rotacion
            let dateChange = data[i].fecha
            dateChange = dateChange.split('-')[2]
            holyDays(rotation, rotacion, dayPosition, totalDaysMonth, oldRotation, today, selectedMonth, estatusCambios, id, notHired, dayhired, fecha_egreso, dateChange)
          }
        }
      }
    },
  })
}

function holyDays(rotation, rotacion, dayPosition, totalDaysMonth, oldRotation, today, selectedMonth, estatusCambios, id, notHired, dayhired, fecha_egreso = null, dateChange = null) {
  if (oldRotation == '') {
    if (rotation.length == 2) {
      twoHolidays(rotacion, dayPosition, totalDaysMonth, null, today, selectedMonth, estatusCambios, id, notHired, dayhired, fecha_egreso)
    } else if (rotation.length > 2) {
      fourHolidays(null, rotation, dayPosition, totalDaysMonth, today, selectedMonth, estatusCambios, id, notHired, dayhired, fecha_egreso)
    }
  } else if (oldRotation != '') {
    if (rotation.length == 2) {
      twoHolidays(oldRotation, dayPosition, totalDaysMonth, rotacion, today, selectedMonth, estatusCambios, id, notHired, dayhired, fecha_egreso, dateChange)
    } else if (rotation.length > 2) {
      fourHolidays(oldRotation, rotation, dayPosition, totalDaysMonth, today, selectedMonth, estatusCambios, id, notHired, dayhired, fecha_egreso, dateChange)
    }
  }
}

function gif(time) {
  setTimeout(function () {
    $('#gif').hide()
    $('.calendaryCont').show()
  }, time)
}

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

function buildingCalendary(newRes, selectedMonth, firstDayWeek, totalDaysMonth, userChanges = false) {
  const res = newRes
  const today = newDate.getDate()

  for (let i = 0; i < res.length; i++) {
    $(`.tableAsistance${i}`).remove()
    let dischargeMonth = res[i].fecha_egreso
    dischargeMonth = dischargeMonth.slice(5, 7)
    const initMonth = res[i].fecha_ingreso.slice(5, 7)
    const initYear = res[i].fecha_ingreso.slice(0, 4)
    let notHired = null
    let dayhired = null
    const dateConsult = year + '-' + selectedMonth + '-' + totalDaysMonth

    if (initMonth == selectedMonth && initYear == year) {
      notHired = initMonth
      dayhired = res[i].fecha_ingreso.slice(8, 10)
    }
    if ((res[i].fecha_ingreso <= dateConsult && res[i].estatus == 'activo') || (res[i].estatus == 'inactivo' && dischargeMonth >= selectedMonth)) {
      $(`.day${i}`).remove()
      let id = res[i].cedula
      let dayPosition = ''
      if (userChanges == false) {
        $('#tableBody').append(
          `<tr class='tableAsistance${i}'><td id="payRoll${i}">${res[i].nomina_cliente}</td><td>${res[i].cedula}</td><td>${res[i].ficha}</td><td>${res[i].nombre_apellido}</td><td>${res[i].fecha_ingreso}</td><td>${res[i].finalizacion_contrato}</td><td id="position${i}">${res[i].cargo}</td><td id="turn${i}">${res[i].turno}</td><td id="rotation${i}">${res[i].rotacion}</td></tr>`
        )
        for (let x = 0; x < $('.dataDay').length; x++) {
          $(`.tableAsistance${i}`).append(`<td class ="day${i}" style="border: 1px solid rgba(128, 128, 128, 0.342);text-align: center;"></td>`)
        }
        dayPosition = document.getElementsByClassName(`day${i}`)
      } else if (userChanges != false) {
        $('#tableBody').append(
          `<tr class='tableAsistance${userChanges}'><td id="payRoll${userChanges}">${res[i].nomina_cliente}</td><td>${res[i].cedula}</td><td>${res[i].ficha}</td><td>${res[i].nombre_apellido}</td><td>${res[i].fecha_ingreso}</td><td>${res[i].finalizacion_contrato}</td><td id="position${userChanges}">${res[i].cargo}</td><td id="turn${userChanges}">${res[i].turno}</td><td id="rotation${userChanges}">${res[i].rotacion}</td></tr>`
        )
        for (let x = 0; x < $('.dataDay').length; x++) {
          $(`.tableAsistance${userChanges}`).append(`<td class ="day${userChanges}" style="border: 1px solid rgba(128, 128, 128, 0.342);text-align: center;"></td>`)
        }
        dayPosition = document.getElementsByClassName(`day${userChanges}`)
      }

      setIdDays(dayPosition, firstDayWeek)
      if (res[i].estatus_cambios == 1) {
        dataLog(id, selectedMonth, i)
        rotationLog(id, selectedMonth, i, dayPosition, totalDaysMonth, res[i].rotacion, today, res[i].estatus, notHired, dayhired, res[i].fecha_egreso)
      } else {
        let rotacion = res[i].rotacion
        let rotation = res[i].rotacion
        rotation = rotation.split('-')
        holyDays(rotation, rotacion, dayPosition, totalDaysMonth, '', today, selectedMonth, res[i].estatus, id, notHired, dayhired, res[i].fecha_egreso)
      }
    }
  }
}

function userWithChanges(id, selectedMonth, lastPayroll, dataDate, firstDayWeek, totalDaysMonth) {
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
          if (data[y].nomina_cliente != lastPayroll && selectedMonth == dataDate) {
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
              buildingCalendary(newObject, selectedMonth, firstDayWeek, totalDaysMonth, id)
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

function validationData(data, selectedMonth, payRolls, res, firstDayWeek, totalDaysMonth) {
  if (data != false) {
    for (let i = 0; i < data.length; i++) {
      let lastPayroll = data[i].antigua_nomina
      let dataDate = data[i].fecha.slice(5, 7)
      let id = data[i].cedula
      for (let x = 0; x < payRolls.length; x++) {
        if (payRolls[x] == lastPayroll && selectedMonth == dataDate) {
          userWithChanges(id, selectedMonth, lastPayroll, dataDate, firstDayWeek, totalDaysMonth)
        }
      }
      if (i == data.length - 1) {
        buildingCalendary(res, selectedMonth, firstDayWeek, totalDaysMonth)
      }
    }
  } else {
    buildingCalendary(res, selectedMonth, firstDayWeek, totalDaysMonth)
  }
}

function buildJson(res, data, selectedMonth, firstDayWeek, totalDaysMonth) {
  for (let i = 0; i < res.length; i++) {
    if (res[i].estatus_cambios == 1) {
      for (let y = 0; y < data.length; y++) {
        if (selectedMonth == data[y].fecha.slice(5, 7) && data[y].antigua_nomina != '' && data[y].nomina == '' && data[y].cedula == res[i].cedula) {
          res[i].nomina_cliente = data[y].antigua_nomina
        }
      }
    }
    if (i + 1 == res.length) {
      buildingCalendary(res, selectedMonth, firstDayWeek, totalDaysMonth)
    }
  }
}

function payRollChanges(res, selectedMonth, payRolls, firstDayWeek, totalDaysMonth, allPayrolls = null) {
  $.ajax({
    url: '?view=calendary&mode=payrollChanges',
    type: 'post',
    dataType: 'json',
    data: {},
    statusCode: {
      200: function (data) {
        if (allPayrolls == true) {
          buildJson(res, data, selectedMonth, firstDayWeek, totalDaysMonth)
          gif(120000)
        } else {
          for (let i = 0; i < data.length; i++) {
            if ((data[i].nomina == payRolls && data[i].fecha.slice(5, 7) == selectedMonth) || (data[i].antigua_nomina == payRolls && data[i].fecha.slice(5, 7) == selectedMonth)) {
              gif(30000)
              validationData(data, selectedMonth, payRolls, res, firstDayWeek, totalDaysMonth)
              return
            } else if (i + 1 == data.length) {
              gif(30000)
              buildingCalendary(res, selectedMonth, firstDayWeek, totalDaysMonth)
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

function queryCalendary(firstDayWeek, totalDaysMonth, selectedMonth, payRolls) {
  const newQuery = buildQuery(payRolls)
  if (newQuery == 0) {
    alert('seleccione nomina')
    return
  }
  $('#gif').show()
  $('.calendaryCont').hide()
  $('#calendar').show('slow')
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
        if (classSelect[0].classList[1] == 'selected') {
          payRollChanges(res, selectedMonth, payRolls, firstDayWeek, totalDaysMonth, true)
        } else {
          payRollChanges(res, selectedMonth, payRolls, firstDayWeek, totalDaysMonth)
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

function pushOpt() {
  const arrayData = []
  const data = $('.selected')
  for (let i = 0; i < data.length; i++) {
    arrayData.push(data[i].lastChild.innerText)
  }
  return arrayData
}
