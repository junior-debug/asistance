<?php

date_default_timezone_set('America/Caracas');

#Constantes de conexión a BDD
define('DB_HOST', '192.168.10.50');
define('DB_USER', 'root');            //desarrollos
define('DB_PASS', 'D3s4rr0ll0s++');            //prc333.c0m.v3
define('DB_NAME', 'control_a_db'); // control_a_db
define('DB_PORT', '3306');


#Constantes de la APP
define('HTML_DIR', 'private/views/');
define('MODEL_DIR', 'private/model/');
define('PUBLIC_DIR', 'public/');
define('APP_TITLE', 'tuAsistencia.com');
define('APP_COPY', 'Copyright &copy; ' . date('Y', time()));
define('APP_URL', 'http://localhost/');

require('database.php');
