$(function () {

    // Situaciones
    let situaciones = [];
    // Mensajes ayuda
    let mensajes = [];
    // Objetos del inventario
    let objetos = [];

    // Situacion actual
    let situacion = "";
    // Mensaje ayuda
    let mensaje = "";

    init();

    function init() {
        help();
        clickSituacion();
    }

    function help() {
        $("#help").click(() => {
            clickHelp();
        });
    }

    function clickHelp() {
        switch (situacion) {
            case "":
                mensaje = "Acabas de comenzar tu aventura en el fantástico mundo de los vikingos. Te aconsejamos que pienses bien tus decisiones y disfrutes al máximo del juego.";
                break;
            case ".verfamilia":
                mensaje = "¡Vaya! Parece que no te queda otra opción que ir a visitar al Conde.";
                break;
            case ".verconde1":
                mensaje = "No nos queda otra opción que pedirle disculpas al conde, ya que es una persona muy poderosa y no queremos tener problemas con él.";
                break;
            case ".verconde2":
                mensaje = "Parece que el Conde no está de muy buen humor y no parece buena opción enfadarlo. Aún así tu eres Ragnar ¿vas a dejar que alguien te diga que no puede visitar a tu familia?";
                break;
            case ".pedirdisculpas":
                mensaje = "En un principio puedes entregarle monedas de oro o la corona de plata al Conde pero puedes buscar detenidamente a ver si encuentras otro objeto.";
                break;
            case ".deberfamilia":
                mensaje = "La situación actual no pinta nada bien, estás rodeado... ¿Deberías pedirle perdón por tus palabras o demostrar que no tienes miedo a nadie ni a nada?";
                break;
            case ".darmonedas":
                mensaje = "Pese a darle una parte del tesoro al Conde éste manda arrestarte. ¿Qué te depararán los Dioses a partir de ahora?";
                break;
            case ".darcorona":
                mensaje = "Pese a darle la corona de plata al Conde éste manda arrestarte. ¿Qué te depararán los Dioses a partir de ahora?";
                break;
            case ".mirard":
                mensaje = "Has encontrado la cruz de tu amigo el monje. Ahora debes darle uno de los tres objetos.";
                break;
            case ".darcruz":
                mensaje = "Sin duda no ha sido buena idea pedirle disculpas tras ofenderlo. ¿Qué te depararán los Dioses a partir de ahora?";
                break;
            case ".pagarleloquedebes":
                mensaje = "Pese a pagarle al Conde nuestra deuda, ha mandado a sus hombres a que te arresten... ¿Qué te depararán los Dioses a partir de ahora?";
                break;
            case ".intentarasesinarle":
                mensaje = "Sin duda has tomado una mala decisión... ¿Qué te depararán los Dioses a partir de ahora?";
                break;
            case ".actualizatexto":
                mensaje = "Tu marido se encuentra encarcelado y no hay tiempo que perder. ¿Deberías pararte a buscar algún objeto mejor que una espada corta? No sabemos qué desafíos nos espera...";
                break;
            case ".cogerespada":
                mensaje = "Estás preparada para salir en busca de tu marido pero ya hemos visto que el Conde no es un señor muy simpático y está cabreado, debemos tener cuidado si queremos hablar con él..";
                break;
            case ".cogerhacha":
                mensaje = "Ya hemos visto que el Conde no es un señor muy simpático y está cabreado, debemos tener cuidado si queremos hablar con él.";
                break;
            case ".premovilizartropas":
                mensaje = "¿Vas a intentar hablar con el Conde después de todo lo que ha hecho a tu familia?";
                break;
            case ".hablarcondepuzzle":
                mensaje = "¿Influye en algo el tamaño del segundo engranaje?";
                break;
            case ".combatemuerte":
                mensaje = "¡Disfruta como más te guste la victoria!";
                break;
            default:
                mensaje = "Situación por defecto";
                break;
        }
        
        $("#text-popup").empty();
        $("#text-popup").append("<h2>AYUDA</h2>" + mensaje);
        $("#popup").fadeIn("slow");
        $(".popup-overlay").fadeIn("slow");
        $(".popup-overlay").height($(window).height());
        
        $("#close").click( () => {
            $("#popup").fadeOut("slow");
            $(".popup-overlay").fadeOut("slow");
        });
    }

    function clickSituacion() {
        /* TODAS LAS SITUACIONES */
        situaciones.push(".verfamilia");
        situaciones.push(".verconde1");
        situaciones.push(".pedirdisculpas");
        situaciones.push(".deberfamilia");
        situaciones.push(".darmonedas");
        situaciones.push(".darcorona");
        situaciones.push(".mirard");
        situaciones.push(".darcruz");
        situaciones.push(".darmonedas");
        situaciones.push(".darcorona");
        situaciones.push(".pagarleloquedebes");
        situaciones.push(".intentarasesinarle");
        situaciones.push(".verconde2");
        situaciones.push(".actualizatexto");    // Cambio de personaje
        situaciones.push(".cogerespada");
        situaciones.push(".cogerhacha");
        situaciones.push(".premovilizartropas");
        situaciones.push(".hablarcondepuzzle");
        situaciones.push(".fallaacertijo");
        situaciones.push(".hablarconde");
        situaciones.push(".combatemuerte");
        situaciones.push(".rendicionconde");
        situaciones.push(".negociasacuerdo");
        situaciones.push(".mamajuana");
        situaciones.push(".fiestabarco");
        situaciones.push(".estrecharmano");

        /* Agregamos evento click */
        $.each(situaciones, function (i) {
            if ($(situaciones[i]).length) {
                $(situaciones[i]).click((event) => {
                    event.stopImmediatePropagation();   // Evistamos propagacion de eventos cuando hay varias etiquetas con la misma clase
                    situacion = situaciones[i];
                    checkLink();
                    clickSituacion();
                });
            }
        });
    }
    
    function checkLink() {
        if(situacion === ".estrecharmano" || situacion === ".fiestabarco" || situacion === ".mamajuana" || situacion === ".hablarconde" || situacion === ".fallaacertijo") {
            $("#help").prop("disabled", true);
        } else if(situacion === ".actualizatexto") {
            $("#name-prota").empty();
            $("#name-prota").append("LAGERTHA");
            $("#img-prota").attr("src", "./media/img/lagertha.jpg");
        } else {
            cargaObjetos();
        }
    }

    function cargaObjetos() {
        objetos = [];

        // Añadimos los objetos del inventario
        if ($("#q_monedas").length) {
            objetos.push("monedas de oro");
        }
        if ($("#q_corona").length && situacion !== ".darcorona") {
            objetos.push("corona");
        }
        if ($("#q_espada").length && situacion !== ".actualizatexto") {
            objetos.push("espada");
        }
        if ($("#q_hacha").length) {
            objetos.push("hacha");
        }
        if ($("#q_escudo").length) {
            objetos.push("escudo");
        }
        if ($("#q_espadacorta").length) {
            objetos.push("espada corta");
        }
        if ($("#q_cruzplata").length && situacion !== ".darcruz") {
            objetos.push("cruz de plata");
        }

        mensajes.push({situacion: situacion, y: objetos});
    }
});