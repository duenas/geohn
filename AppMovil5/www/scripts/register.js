// Si quiere una introducción sobre la plantilla En blanco, vea la siguiente documentación:
// http://go.microsoft.com/fwlink/?LinkID=397704
// Para depurar código al cargar la página en dispositivos/emuladores Ripple o Android: inicie la aplicación, establezca puntos de interrupción 
// y ejecute "window.location.reload()" en la Consola de JavaScript.
(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady() {
        // Controlar la pausa de Cordova y reanudar eventos
        document.addEventListener('pause', onPause.bind(this), false);
        document.addEventListener('resume', onResume.bind(this), false);

        document.getElementById("guardar").addEventListener('click', RegistrarUsuario, false)


   
    };

    function onPause() {
        // TODO: esta aplicación se ha suspendido. Guarde el estado de la aplicación aquí.
        alert("on  pause");
    };

    function onResume() {
        // TODO: esta aplicación se ha reactivado. Restaure el estado de la aplicación aquí.
        alert("on  resume");
    };



    function RegistrarUsuario() {
        var pUsername = document.getElementById("nombre").value;
        var pEmail = document.getElementById("email").value;
        var pPass = document.getElementById("pass").value;
     

        if (pUsername == "") {
            alert("Ingrese un usuario!");
            return false;
        }
        if (pEmail == "") {
            alert("Ingrese un password!");
            return false;
        }
        if (pPass == "") {
            alert("Ingrese el nombre completo!");
            return false;
        }
        var insert = 0;
        if (confirm("Estas seguro?")) {
            //agregando evento Ajax
            $.ajax({
                type: "POST",
                url: "http://192.168.0.11:9098/postdata.aspx/RegistraUsuario",
                data: "{'pUsername':'" + pUsername + "','pPassword':'" + pPass + "','pEmail':'" + pEmail + "'}",
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                crossDomain: true,
                cache: false,
                success: function (result) {
                    if (result.d != null) {
                        insert = result.d;
                    }

                    if (insert == 1) {
                        //document.getElementById("pUsername").value = "";
                        //document.getElementById("pEmail").value = "";
                        //document.getElementById("pPass").value = "";               
                        $("#divRegistro").html("Registro creado satisfactoriamente!");
                    } else {
                        $("#divRegistro").html("Error al registrar el usuario!");
                    }
                },
                error: function (result) {
                    alert("Ocurrió un problema. al insertar");
                }
            });
        }
    }


 







})();