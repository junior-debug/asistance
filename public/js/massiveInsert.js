function peticionAjax(form){
  $.ajax({
    url: "?view=employees&mode=mInsertCore",
    type: "post",
    data: form,
    processData: false,
    contentType: false,
    statusCode: {
      200: function () {
        alert("Registros agregados");
      },
      400: function () {
        alert("Error en la solicitud");
      },
      401: function (data) {
        console.log(data);
        alert("El usuario " + data + " ya esta registrado");
      },
      500: function () {
        alert("Error en el Servidor");
      },
    },
  });
}

function uploadEmployees() {
  if ($("#formFile").val() == "") {
    alert("Por favor Cargar Archivo");
  } else {
    const form = new FormData($("#filesForm")[0]);
    peticionAjax(form);
  }
}

function DownloadFromUrl(fileURL, fileName) {
  var link = document.createElement("a");
  link.href = fileURL;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

document.getElementById('formFile').addEventListener('change', function(event) {  
  const archivo = event.target.files[0];
  
  if (!archivo) {
      alert('No se ha seleccionado ningún archivo.');
      return;
  }
  
  const lector = new FileReader();
  
  lector.onload = function(e){
      const contenidoCSV = e.target.result;
      // Parsear el contenido CSV
      const filas = contenidoCSV.split('\n');
      let cantidadFilas = filas.length - 1;
      const headers = filas[0].split(';').map(header => header.trim());
      const datos = [];

      for (let i = 1; i < filas.length; i++) {
        const fila = filas[i].split(';');
        const objeto = {};
        
        for (let j = 0; j < headers.length; j++) {
            objeto[headers[j]] = fila[j] ? fila[j].trim() : null;
        }
        
        datos.push(objeto);
      }

      console.log('Datos parseados:', datos);
      const cabecerasAValidar = ['Empresa', 'N�mina / Cliente', 'C�dula', 'Nombre y Apellido', 'Fecha de Ingreso', 'Cargo', 'Turno', 'Rotacion', 'Horario de Trabajo', 'Ficha'];
      
      let errores = []
      for (const dato of datos) {
        for (const cabecera of cabecerasAValidar) {
          if(cantidadFilas > 1){
            if (!dato[cabecera] || dato[cabecera].trim() === '') {
              errores.push(cabecera)
            }
          }
        }
        cantidadFilas--
      }

      if(errores.length >= 1){
        alert(`Los siguientes campos están vacíos en algunas de las filas: ${errores}`);
        const boton = document.getElementById('botonSubmit');
        boton.disabled = true;
      } else {
        const boton = document.getElementById('botonSubmit');
        boton.disabled = false;
      }


    };
    lector.readAsText(archivo);
  
});