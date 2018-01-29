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

        Cargarurl(); 
  
  
       
    };

    function onPause() {
        // TODO: esta aplicación se ha suspendido. Guarde el estado de la aplicación aquí.
      
    };

    function onResume() {
        // TODO: esta aplicación se ha reactivado. Restaure el estado de la aplicación aquí.
       
    };


    function Cargarurl() {
        var iddecion = sessionStorage.edicion;

        //alert(iddecion);
        var insert = "";
        var sinopsis = "";
        $.ajax({
            type: "POST",
            url: "http://192.168.0.11:24480/postinfoediciones.aspx/urlinfo",
            data: "{'edicion':'" + iddecion + "'}",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            crossDomain: true,
            cache: false,    
            success: function (result) {
                insert = result.d;


                //alert(insert);
            },
            error: function (result) {
                alert("Ocurrió un problema. Por favor Comuníquese con el administrador del sistema. Gracias.");
            }
        });


        //***

        var cadena = "<table border=0 cellpadding=3 cellspacing=0 class=fa-align - center>";
        $.ajax({
            type: "POST",
            url: "http://localhost:24480/postinfoediciones.aspx/sinopsis",
            data: "{'edicion':'" + iddecion + "'}",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            crossDomain: true,
            cache: false,
            success: function (result) {
                sinopsis = result.d;
                cadena = " <tr >" + "<td data-edicion=" + iddecion + "class=center-wrapper ><h3 class= 'center-wrapper'>" + iddecion + "</h3>" + " <img  align=middle border=5 style=display: block;  width=300 height=250 src=" + insert + ">" + "<p class= pservices text-justify>" + sinopsis + "</p>" + "<a id=seleccionar  href='http://192.168.0.11:9999/Descarga/Index?edicion=" + iddecion + " '  class=ui-btn ui-btn-inline ui-icon-delete ui-btn-icon-right style=background: green; color: red; >Descargar</a>"  +"</td>" + " </tr>";
                cadena = cadena + "</table>";
                $("#divLista").append(cadena);
            },
            error: function (result) {
                alert("Ocurrió un problema. Por favor Comuníquese con el administrador del sistema. Gracias.");
            }
        });



    }




 

  











})();