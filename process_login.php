<?php
    $conectar = mysql_connect('localhost','root','');
    if (!$conectar){
        echo"no se pudo conectar a la base de datos";
    }else{
        $base = mysql_select_db("AstroXplore");
            if (!$base){
            echo "no se encuentra la base";
        }
    }


$ussername = $_POST['ussername'];
$correo = $_POST['correo'];
$password = $_POST['password'];

$sql = "INSERT INTO ussers VALUES('$ussername','$correo','$password')";

$ejecutar = mysql_query($sql);
if(!$ejecutar){
    echo "hubo algun error";
}else{
    echo "datos guardados correctamente<br><a href = >volver</a>";
}
?>