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
     
        //TODO PERSONALIZADO
        //$('#btnMostrarMapa').click(getDatos);
        //document.getElementById("entrar").addEventListener('click', BuscarUsuario, false);
        document.getElementById("entrar").addEventListener('click', entrar, false);
        document.getElementById("register").addEventListener('click', registrar, false);
      
    };

    function onPause() {
        // TODO: esta aplicación se ha suspendido. Guarde el estado de la aplicación aquí.
        alert("on  pause");
    };

    function onResume() {
        // TODO: esta aplicación se ha reactivado. Restaure el estado de la aplicación aquí.
        alert("on  resume");
    };

    function getDatos() {
        navigator.geolocation.getCurrentPosition(onSuccess, onError, {
            maximunAge: 300000,
            timeout: 10000,
            enableHighAccuracy: true
        });
    }

    function onSuccess(position) {
        var cusLat = position.coords.latitude;
        var cusLon = position.coords.longitude;

        document.getElementById("txtLat").value = cusLat;
        document.getElementById("txtLon").value = cusLon;

        try {
            var coords = new google.maps.LatLng(cusLat, cusLon);

            var opciones = {
                center: coords, zoom: 15
            };

            var mapa = new google.maps.Map(document.getElementById("map"), opciones);
            var marcador = new google.maps.Marker({
                position: coords,
                map: mapa,
                title: "Mi ubicación",
                animation: google.maps.Animation.DROP
            });
        }
        catch (err) {
            console.log(err.message);
        }
    }

    function onError(err) {
        console.log("codigo de err:" + err.code + "  msj=" + err.message);
    }


   


    function BuscarUsuario() {
        var usuario = document.getElementById("email").value;
        var pass = document.getElementById("pass").value;
        if (usuario == "") {
            alert("Ingrese un usuario!");
            return false;
        }
        if (pass == "") {
            alert("Ingrese un Password!");
            return false;
        }

        var url1 = "http://192.168.0.11:9098/getdata.aspx?usuario=" + usuario + "&pass=" + pass
        if (usuario == "") {
            docume.getElementById("divResultado").innerHTML = "Ingrese usuario!";
        }
        else {
            $.ajax({
                type: "GET",
                url: url1,
                crossDomain: false,
                cache: false,
                success: function (result) {
                    var validacion = result[0].fullname;
                    if (validacion == 'True') {
                        alert("Bienvenido");
                        window.location.href = 'menu.html';

                    }
                    else
                    {
                        alert("Usuario o Clave no Validos");
                        return;
                    }

                    //
                    //alert("Bienvenido");

                },
                error: function (result) {
                    alert("Error");
                }

            });
        }
    }

    function registrar() {
        window.location.href = 'register.html';
    }

    function onBackKeyDown() {
        Alert("Esta Seguro que desea Salir?");
    }




    function entrar() {
        //window.location.href = 'pdf.html    '; 
        window.open('Downloads/example.pdf', '_system', 'location=no');
    }


})();