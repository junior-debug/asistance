<body>
  <nav class="navbar navbar-expand-lg" style="background: rgb(186,186,186);background: linear-gradient(90deg, rgba(186,186,186,1) 0%, rgba(186,186,186,0.4962184702982756) 74%);position: fixed;width: 100%;z-index:100;">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Control de Asistencia</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <?php if ($_SESSION['type_user'] == "5") { ?>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="?view=calendary&mode=index">Calendary</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Colaboradores
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="?view=employees&mode=employees">Empleados</a></li>
                <li class="dropdown-header">
                  Agregar Empleados
                </li>
                <li><a class="dropdown-item" href="?view=employees&mode=individualInsert">Carga Individual</a></li>
                <li><a class="dropdown-item" href="?view=employees&mode=massiveInsert">Carga Masiva</a></li>
                <li class="dropdown-header">
                  Actualizar Empleados
                </li>
                <li><a class="dropdown-item" href="?view=employees&mode=updateEmployee">Actualizar datos Empleado</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Sistema
              </a>
              <ul class="dropdown-menu">
                <li class="dropdown-header">
                  Rotacion
                </li>
                <li><a class="dropdown-item" href="?view=sistema&mode=createRotation">Crear rotacion</a></li>
                <li><a class="dropdown-item" href="?view=sistema&mode=changeRotation">Cambios</a></li>
                <li class="dropdown-header">
                  Justificacion
                </li>
                <li><a class="dropdown-item" href="?view=sistema&mode=justification">Justificacion</a></li>
                <li><a class="dropdown-item" href="?view=sistema&mode=justifications">Justificaciones</a></li>
                <li><a class="dropdown-item" href="?view=sistema&mode=payrollTransfer">Transferencia de Nominas</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Administrador
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="?view=gestion&mode=createData">Nuevas Creaciones</a></li>
                <li><a class="dropdown-item" href="?view=gestion&mode=editData">Editar Datos</a></li>
                <li><a class="dropdown-item" href="?view=gestion&mode=createUser">Crear Nuevo Usuario</a></li>
                <li><a class="dropdown-item" href="?view=gestion&mode=resetPassword">Reiniciar Contraseñas</a></li>
              </ul>
            </li>
          </ul>
          <li class="d-flex nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <?= $_SESSION['user'] ?> <img src="public/images/profile.png" alt="refresh" height="25em" width="25em" />
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="?view=session&mode=disconect">Salir</a></li>
            </ul>
          </li>
        </div>
      <?php } ?>
      <?php if ($_SESSION['type_user'] == "4") { ?>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="?view=calendary&mode=index">Calendary</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Colaboradores
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="?view=employees&mode=employees">Empleados</a></li>
                <li class="dropdown-header">
                  Agregar Empleados
                </li>
                <li><a class="dropdown-item" href="?view=employees&mode=individualInsert">Carga Individual</a></li>
                <li><a class="dropdown-item" href="?view=employees&mode=massiveInsert">Carga Masiva</a></li>
                <li class="dropdown-header">
                  Actualizar Empleados
                </li>
                <li><a class="dropdown-item" href="?view=employees&mode=updateEmployee">Actualizar datos Empleado</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Sistema
              </a>
              <ul class="dropdown-menu">
                <li class="dropdown-header">
                  Rotacion
                </li>
                <li><a class="dropdown-item" href="?view=sistema&mode=createRotation">Crear rotacion</a></li>
                <li><a class="dropdown-item" href="?view=sistema&mode=changeRotation">Cambios</a></li>
                <li class="dropdown-header">
                  Justificacion
                </li>
                <li><a class="dropdown-item" href="?view=sistema&mode=justification">Justificacion</a></li>
                <li><a class="dropdown-item" href="?view=sistema&mode=justifications">Justificaciones</a></li>
                <li><a class="dropdown-item" href="?view=sistema&mode=payrollTransfer">Transferencia de Nominas</a></li>
              </ul>
            </li>
          </ul>
          <li class="d-flex nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <?= $_SESSION['user'] ?> <img src="public/images/profile.png" alt="refresh" height="25em" width="25em" />
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="?view=session&mode=disconect">Salir</a></li>
            </ul>
          </li>
        </div>
      <?php } ?>
      <?php if ($_SESSION['type_user'] == "3") { ?>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="?view=calendary&mode=index">Calendary</a>
            </li>
          </ul>
          <li class="d-flex nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <?= $_SESSION['user'] ?> <img src="public/images/profile.png" alt="refresh" height="25em" width="25em" />
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="?view=session&mode=disconect">Salir</a></li>
            </ul>
          </li>
        </div>
      <?php } ?>
      <?php if ($_SESSION['type_user'] == "6") { ?>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="?view=calendary&mode=index">Calendary</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Colaboradores
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="?view=employees&mode=employees">Empleados</a></li>
                <li class="dropdown-header">
                  Agregar Empleados
                </li>
                <li><a class="dropdown-item" href="?view=employees&mode=individualInsert">Carga Individual</a></li>
                <li><a class="dropdown-item" href="?view=employees&mode=massiveInsert">Carga Masiva</a></li>
                <li class="dropdown-header">
                  Actualizar Empleados
                </li>
                <li><a class="dropdown-item" href="?view=employees&mode=updateEmployee">Actualizar datos Empleado</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Sistema
              </a>
              <ul class="dropdown-menu">
                <li class="dropdown-header">
                  Rotacion
                </li>
                <li><a class="dropdown-item" href="?view=sistema&mode=createRotation">Crear rotacion</a></li>
                <li><a class="dropdown-item" href="?view=sistema&mode=changeRotation">Cambios</a></li>
                <li class="dropdown-header">
                  Justificacion
                </li>
                <li><a class="dropdown-item" href="?view=sistema&mode=justifications">Justificaciones</a></li>
                <li><a class="dropdown-item" href="?view=sistema&mode=payrollTransfer">Transferencia de Nominas</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Administrador
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="?view=gestion&mode=createData">Nuevas Creaciones</a></li>
                <li><a class="dropdown-item" href="?view=gestion&mode=editData">Editar Datos</a></li>
              </ul>
            </li>
          </ul>
          <li class="d-flex nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <?= $_SESSION['user'] ?> <img src="public/images/profile.png" alt="refresh" height="25em" width="25em" />
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="?view=session&mode=disconect">Salir</a></li>
            </ul>
          </li>
        </div>
      <?php } ?>
    </div>
  </nav>