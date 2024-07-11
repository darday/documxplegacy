---
id: az1
title: Levantar Azure
description: En esta página se encuentra la documentación para levantar azure
slug: /levantar-azure
---

1. Para levantar Maxpoint azure lo primero que se debe hacer es Consultar con DevOps cuál es la rama y commit estable.
2. Una vez que se tenga la rama correspondiente a la versión estable de Maxpoint se debe clonar el proyecto en el servidor donde se esté trabajando. Si está trabajando en Xampp sería en la carpeta **xampp/htdocs**.
3. Abrir el proyecto **maxpoint azure** con visual studio code y buscar el archivo **clase_conexion.php** que está ubicado en **system/conexion** y reemplazar por el siguiente código. Reemplazar las variables de conexión.


```jsx title="clase_conexion.php"
<?php

if (!isset($_SESSION)) {
    session_start();
}


class conexion
{

    private $lc_host;
    private $lc_base;
    private $lc_conec;

    //Constructor de la clase
    public function __construct()
    {
        $configuraciones = parse_ini_file('replica.ini', true);
        $rutaWebservice = $configuraciones['credencial']["urlCredenciales"];
        if (!isset($_SESSION["lc_host"]) || !isset($_SESSION["Database"]) || !isset($_SESSION["UID"]) || !isset($_SESSION["PWD"])) {
            try {
                
                //REEMPLAZAR ESTAS VARIABLES POR LAS VARIABLES DE LA BASE DE DATOS CON LAS QUE SE ESTÁ REEMPLAZANDO

                 $_SESSION["lc_host"] = "asdasd";//$response->servidor;
                 $_SESSION["Database"] = "MAXPOINT";//$response->base;
                 $_SESSION["UID"] = "asdasd";//$response->usuario;
                 $_SESSION["PWD"] = "asdasd";//$response->clave;

                
                $this->lc_conec = NULL;
            } catch (Exception $e) {
                return $e;
            }
        }
    }

    //Función que permite conectarse a la base de datos
    public function fn_conectarse()
    {
        $lc_host = $_SESSION["lc_host"];
        $connectionInfo = array("Database" => $_SESSION["Database"], "UID" => $_SESSION["UID"], "PWD" => $_SESSION["PWD"]);

        if (is_null($this->lc_conec)) {
            if (!($this->lc_conec = sqlsrv_connect($lc_host, $connectionInfo)
                
            )) {

                echo "<pre><div style='text-align:justify;'><div style='font:14px;color:white;background:#137DE8;width:75%;margin: 0 auto;'>";
                print_r($this->fn_errorconec());
                echo "</div></div></pre>";
                exit();
            } elseif (!(sqlsrv_query($this->lc_conec, $this->lc_base))) {
                echo "<pre><div style='text-align:justify;'><div style='font:14px;color:white;background:#137DE8;width:75%;margin: 0 auto;'>";
                print_r($this->fn_errorconec());
                echo "</div></div></pre>";
                exit();
            }
        }
        return $this->lc_conec;
    }

    //Generar un error en caso de que no se pueda realizar la conexión
    private function fn_errorconec()
    {
        return sqlsrv_errors();
    }

    //Función que permite desconectarse a la base de datos
    public function fn_cerrarconec()
    {
        if (sqlsrv_close($this->lc_conec)) {
            return true;
        } else {
            return false;
        }
    }

    private function descifrar($original, $clave)
    {
        // Proceso inverso del cifrado
        $descifrado = '';
        $ASCIIcifrado = 0;
        //$n = 0;
        for ($i = 0; $i < strlen($original); $i++) {
            $ASCIIcifrado = ord(substr($original, $i));
            $ASCIIcifrado = $ASCIIcifrado - $clave % 255;
            $descifrado = $descifrado . chr($ASCIIcifrado);
        }
        return $descifrado;
    }
}

```

4. Seguidamente se debe modificar el archivo **replica.ini** con el siguiente código: 

```jsx title="replica.ini"
; this is an INI file
[azure]
#reemplazar aquí los datos del servidor de pruebas.
 db.config.host = 192.168.101.30
 db.config.instancia =SQL2022MAX
 db.config.username = sa
 db.config.password = jcjajpla*88
 db.config.dbname = Maxpoint_Azure_1


[onpremise]
db.config.host = asdasd
db.config.instancia = SQL2016
db.config.username = asdasd
db.config.password = asdasd
db.config.dbname = MAXPOINT_DISTRIB_19
[logazure]
db.config.host = asdasd
db.config.instancia =
db.config.username = asdasd
db.config.password = asdasd
db.config.dbname = MAXPOINT_LOG
[logonpremise]
db.config.host = asdasd
db.config.instancia = SQL2016
db.config.username = asdasd
db.config.password =asdasd
db.config.dbname = MAXPOINT_LOG
[credencial]
urlCredenciales = http://localhost:8090/credencial
[tipoambiente]
;db.config.tipoambiente = tienda
db.config.tipoambiente = azure

```

5. Una vez que ya se tengan estas configuraciones el proyecto podrá ser levantado.

<!-- ![Example banner](./assets/img/azure/cadenas.png) -->

![Docusaurus logo](/img/azure/cadenas.png)




