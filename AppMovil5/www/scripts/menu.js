﻿// Si quiere una introducción sobre la plantilla En blanco, vea la siguiente documentación:
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

        //TODO PERSONALIZADO
        //$('#btnMostrarMapa').click(getDatos);
     

        CargarLista()
        document.getElementById("cerrarsession").addEventListener('click', salir, false)
        document.getElementById("micuenta").addEventListener('click', micuenta, false)
        //document.getElementById("enero").addEventListener('click', edicionvista, false)
        //document.getElementById("divLista").addEventListener('click', edicionselect, false)
        //$('#seleccionar').click(edicionselect);
        $('#divLista').on('click', 'td', function (evt) {
            var celda = $(this).text();
            sessionStorage.edicion = celda; 
            window.location.href = 'descarga.html' ;
        });
    };

    function onPause() {
        // TODO: esta aplicación se ha suspendido. Guarde el estado de la aplicación aquí.
        alert("on  pause");
    };

    function onResume() {
        // TODO: esta aplicación se ha reactivado. Restaure el estado de la aplicación aquí.
        alert("on  resume");
    };


    var edicionseleccionada = "";


    function CargarLista() {
        var cadena = "<table border=0 cellpadding=3 cellspacing=0 class=fa-align - center>";
        //var cadena = "<table border=0 cellpadding=2 cellspacing=0><tr><th>Nombre</th><th>Direccion</th><th>Telefono</th></tr>";
        //agregando evento Ajax
        $.ajax({
            type: "GET",
            url: "http://192.168.0.11:9098/PostDataEdicion.aspx",
            crossDomain: true,
            cache: false,
            contentType: "application/json; charset=utf-8",
            async: false,
            dataType: "json",
            success: function (result) {
                $.each(result, function (i, field) {

                    cadena = cadena + " <tr >" + "<td data-edicion=" + field.edicion + "class=center-wrapper ><h3 class= 'center-wrapper'>"  + field.edicion + "</h3>" + " <img  align=middle border=5 style=display: block;  width=300 height=250 src=" + field.urlportada + ">"  + "" + " </td>" + " </tr>";
                  
                });
                cadena = cadena + "</table>";
              
                $("#divLista").append(cadena);
            },
            error: function (result) {
                alert("Ocurrió un problema. Por favor Comuníquese con el administrador del sistema. Gracias.");
            }
        });
    }

    function salir() {
               var insert = 0;
        if (confirm("Estas seguro?")) {
            //agregando evento Ajax
            window.location.href = 'index.html'; 
        }
    }

    function edicionvista() {
       
       // window.location.href = 'file:///C:/inetpub/wwwroot/descarga/ejemplo.pdf';
     
    }



    function micuenta() {

        window.location.href = 'Cuenta.html';

    }
    function edicionselect() {
      
    //   $('#divLista').on('click', 'td', function (evt) {
    //    var target, edicion, valorSeleccionado;
    //    target = $(event.target);
    //    edicion = target.parent().data('#:');
    //    valorSeleccionado = target.text();
    //    alert("Valor Seleccionado: " + valorSeleccionado + "\n edicion: " + target.parent().data('#:'));
    //});
        //$('#divLista').on('click', 'td', function (evt) {
        //    var celda = $(this).text();
        //    //alert(celda);
        //    window.location.href = 'descarga.html';
        //});
//.
    }

 

   

  

})();