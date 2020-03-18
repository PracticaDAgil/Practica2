// ---------------------------------------------------------------------------
// Edit this file to define your game. It should have at least four
// sets of content: undum.game.situations, undum.game.start,
// undum.game.qualities, and undum.game.init.
// ---------------------------------------------------------------------------

/* A unique id for your game. This is never displayed. I use a UUID,
 * but you can use anything that is guaranteed unique (a URL you own,
 * or a variation on your email address, for example). */
undum.game.id = "be1c95b9-cbc7-48c6-8e6a-89837aa9113e";

/* A string indicating what version of the game this is. Versions are
 * used to control saved-games. If you change the content of a game,
 * the saved games are unlikely to work. Changing this version number
 * prevents Undum from trying to load the saved-game and crashing. */
undum.game.version = "1.0";

/* A variable that changes the fade out speed of the option text on
 * a mobile. */
undum.game.mobileHide = 2000

/* A variable that changes the options fade out speed. */
undum.game.fadeSpeed = 1500

/* A variable that changes the slide up speed after clicking on an
 * option. */
undum.game.slideUpSpeed = 500

/* The situations that the game can be in. Each has a unique ID. */
undum.game.situations = {
    start: new undum.SimpleSituation(
        "",
        {
                enter: function(character, system, from) {
                    system.doLink('introduccion');
                }   
            }
        ),
    introduccion: new undum.SimpleSituation (
            "<h1>La tribu de Kattegat</h1><p>Acabas de llegar a <a href='https://vikings.fandom.com/es/wiki/Kattegat' class='raw' target='_new'>Kattegat.</a>\
            Tras un saqueo el cual ha sido muy exitoso, por fin estás de vuelta en casa.\
            Y traes contigo un tesoro de cien monedas de oro, una corona de plata y una espada.\
            <img height=350 width=500 src='./media/img/kattegat1.png'> <br>\
            <p>Al entrar en la tribu, recuerdas que Kattegat está gobernado por el\
            <a href='https://vikings.fandom.com/es/wiki/Conde_Haraldson' class='raw' target='_new'>Conde Haraldson,</a>\
            con el cual tuviste tus rencillas en el pasado, y no os tenéis mucho aprecio.\
            Estás deseoso de conseguir quitarle el trono a Haraldson, aunque no va a ser nada fácil.<\p>\
            <p>Al entrar a la tribu puedes ir a <a href='verfamilia'>visitar a tu familia,</a> la cual llevas varias \
            semanas sin ver, o <a href='verconde1'>ir a ver al Conde Haraldson,</a> el cual ya ha sido advertido de tu \
            presencia en el condado pues sus soldados te han visto entrar.</p>",
        ),
		
        verconde1: new undum.SimpleSituation (
            "<h1>El salón del conde Haraldson</h1>\
            <p>Al entrar al salón, Haraldson se encuentra sentado en el trono de Conde, acompañado por su mujer.\
            El Conde te mira con desprecio, como ya era habitual, y te echa la bronca por la tardanza, desfiante.\
            <img height=667 width=500 src='./media/img/conde1.jpg'></p>\
            <p>Aún así, decides <a href='pedirdisculpas'>no entrar en su juego y pedirle disculpas\
             por ello</a> ya que no es un buen momento ni lugar para provocar una trifulca.\
            </p>",
            {
                enter: function(character, system, from) {
                    system.setCharacterText("<p>Este es tu inventario</p>");
                }
            }
        ),
        verconde2: new undum.SimpleSituation (
            "<h1>El salón del conde Haraldson</h1>\
            <p>Al entrar al salón, Haraldson se encuentra sentado en el trono de Conde, acompañado por su mujer.\
            Te observa fijamente, la tensión es insoportable, y malhumorado, te acaba diciendo:<br>  &nbsp&nbsp&nbsp<i>-Vuelves de un saqueo, y en vez de cumplir con tu obligación, la cual\
            es venir a pagar el correspondiente tributo al condado, te vas a tu casa. Los barcos que te presté para el viaje no fueron precisamente porque me caigas bien, \
            ¿o es que pensabas esconder lo que has saqueado?</i>\
            <img height=667 width=500 src='./media/img/conde1.jpg'></p>\
            <p>Tras esa desafiante pregunta decides <a href='pedirdisculpas'>no entrar en su juego y pedirle disculpas\
             por tu actitud</a> o responderle que <a href='deberfamilia'>tu deber es visitar a tu familia primero y no a un viejo conde tarado.</a>\
            </p>",
            {
                enter: function(character, system, from) {
                    system.setCharacterText("<p>Este es tu inventario</p>");
                }
            }
        ),
        pedirdisculpas: new undum.SimpleSituation(
            "<h1>El agradecimiento del conde</h1><p>El Conde te agradece las disculpas pero como es costumbre, te exige el pago de una parte del tesoro como impuestos del condado. Como te has disculpado\
             solo te pide un tercio del tesoro. Y tú decides entregarle <a href='./darmonedas'>cuarenta monedas de oro</a> o <a href='./darcorona'> darle la corona de plata</a></p>",
             {
                 actions:{ 
                    'darmonedas': function( character, system, action) {
                            system.setCharacterText( "<p>Te has quedado con sesenta monedas.</p>" );
                            system.setQuality("monedas", 60);
                            system.doLink('pagasyteencierran');
                    },
                    'darcorona': function( character, system, action) {
                        system.setCharacterText( "<p>Te has quedado sin corona.</p>" );
                        system.setQuality("corona", false);
                        system.doLink('pagasyteencierran');
                    }
                }
            }
        ),
        deberfamilia: new undum.SimpleSituation(
            "<h1>El desafio al Conde</h1><p>El Conde se enfada ante tu actitud egoísta y te exige la corona y la mitad de las monedas como pago de impuestos para el condado.<br>\
            <img align='middle' height=375 width=500 src='./media/img/conde2.jpg'>\
            <br>Te encuentras rodeado de soldados de Haraldson, esto hace que <a href='./pagarleloquedebes'>te contengas y aceptes pagarle lo que exige e ir a visitar\
             por fin a tu mujer e hijos,</a>\
             o decidas <a href='./intentarasesinarle'>coger la espada que habías saqueado e intentar asesinar al Conde Haraldson.</a></p>",
            {
                actions:{ 
                   'pagarleloquedebes': function( character, system, action) {
                           system.setCharacterText( "<p>Te has quedado con cincuenta monedas y sin corona</p>");
                           system.setQuality("monedas", 50);
                           system.setQuality("corona", false);
						   system.doLink('pagasyteencierran');
                        },
                       'intentarasesinarle': function( character, system, action) {
                           system.setCharacterText( "<p>Todas tus pertenencias han sido requisadas.</p>" );
                           system.setQuality("corona", false);
                           system.setQuality("monedas", 0);
                           system.setQuality("espada", false);
						   system.doLink('encarcelado');
                       }
               }
           }
        ),
		verfamilia: new undum.SimpleSituation (
            "<h1>LA CASA DE TU FAMILIA</h1>\
            <p>Te estás dirigiendo a tu casa, y ves en la entrada dos hombres del Conde Haraldson custodiando la puerta.\
            Cuando te acercas, uno de ellos te advierte que no puedes entrar, pues el Conde exige verte inmediatamente.\
            <img width=500 height=535 src='./media/img/ragnar2.jpg'>\
            Tú, Ragnar Lothbrok, un vikingo legendario, del cual las leyendas dicen que desciendes del mismísimo Odín, te contienes\
             y decides calmarte e <a href='verconde2'>ir a visitar al Conde,</a>\
			pues no quieres crear problemas, al menos, no tan pronto.\
            </p>",
            {
                enter: function(character, system, from) {
                    system.setCharacterText("<p>Este es tu inventario</p>");
                }
            }
        ),
		
		 pagasyteencierran: new undum.SimpleSituation (
            "<h1>EL ARRESTO DE RAGNAR</h1>\
            <p>El Conde ordena a sus hombres que alzen sus armas. Todo este tiempo sin ti en la tribu ha sido\
            demasiado tranquilo, tu ausencia era reconfortante para el condado, y el Conde no está dispuesto a que esa situación cambie.\
            Haraldson te detiene provisonalmente, cree que estás conspirando contra él y no se fía de ti.</p>\
            <br/><p><a href='./actualizatexto'>Aún así, esto no acaba aquí...</a></p>\
            ",
            {
                actions: {
                    'actualizatexto': function(character, system, from){
                        system.setCharacterText("<p>¡Ahora eres Lagertha! Lagertha es la mujer de Ragnar, y es una de las vikingas más famosas del mundo nórdico. \
                            Es conocida por ser una grandiosa guerrera y escudera, y por haber participado y vencido en innumerables batallas.</p>");
                        system.setQuality("espada", false);
                        system.setQuality("monedas", 0);
                        system.setQuality("corona", false);
                        system.doLink('cambioprotagonista');
                    }
                }
            }
        ),
		
		encarcelado: new undum.SimpleSituation (
            "<h1>EL ARRESTO DE RAGNAR</h1>\
            <p>Ante tal estúpida idea, los soldados alzan sus armas y te bloquean el paso, eres detenido, te quitan todo el tesoro y te llevan preso.\
            <img src='./media/img/final_malo.jpg'>\
            <p>¿A quién se le ocurriría hacer tal cosa? Esto no es ciencia ficción.</p>\
            <p><a href='./actualizatexto'>Aún así, esto no acaba aquí...</a></p>",
            {
                actions: {
                    'actualizatexto': function(character, system, from){
                        system.setQuality("espada", false);
                        system.setQuality("monedas", 0);
                        system.setCharacterText("<p>¡Ahora eres Lagertha! Lagertha es la mujer de Ragnar, y es una de las vikingas más famosas del mundo nórdico. \
                            Es conocida por ser una grandiosa guerrera y escudera, y por haber participado y vencido en innumerables batallas.</p>");
                        system.doLink('cambioprotagonista');
                    }
                }
            }
        ),

        cambioprotagonista: new undum.SimpleSituation (
            "<h1>LAGERTHA</h1>\
            <p>Un espía que se encontraba en el lugar en el que fue detenido Ragnar se acerca a tu casa. El espía se acerca y te comenta lo sucedido.\
            Tras enterarte, nerviosa y enfadada, pero decidida, piensas en cómo actuar. Pero antes de nada, poco vas a poder a hacer sin un arma. \
            <br/>Puedes coger <a href='./cogerespada'>la espada corta</a>  que te ofrece el espía o coger tu  <a href='./cogerhachayescudo'>hacha y escudo</a>\
            <p/>",
            {
                actions: {
                    'cogerespada': function(character, system, from){
                        system.setQuality("espada", false);
                        system.setQuality("monedas", false);
                        system.setQuality("hacha", false);
                        system.setQuality("escudo", false);
                        system.setQuality("espadacorta", true);
                        system.setCharacterText("<p>Has cogido una espada.</p>");
                        system.doLink('postcambio');
                    },
                    'cogerhachayescudo': function(character, system, from){
                        system.setQuality("corona", false);
                        system.setQuality("monedas", false);
                        system.setQuality("espada", false);
                        system.qualities.setQuality("hacha", true);
                        system.qualities.setQuality("escudo", true);
                        system.setCharacterText("<p>Has cogido tu hacha y escudo.</p>");
                        system.doLink('postcambio');
                    }
                }
            }
        ), 

        postcambio: new undum.SimpleSituation (
            "<p>Puedes <a href='movilizartropas'>movilizar a tus tropas para liberar a Ragnar</a>, o <a href='hablarconde'>ir a hablar con el Conde\
            para conseguir salir de esta situación</p>"
        ),

        hablarconde: new undum.SimpleSituation (
            "<h1>EL SALON DEL CONDE</h1>\
            <p>Entras al salón del conde para hablar con él. Haraldson se encuentra en su trono mirándote friamente, pues sabía que\
            no te ibas a tomar bien detención de Ragnar. Desesperada, exiges que libere a Ragnar, amenazándole con atacarle con tus tropas.\
            <br/>Tras la amenaza sus soldados levantan sus armas, dirigiéndose a ti. El Conde, tras un incómodo momento, ordena que te detengan a ti también.<br/>\
            Eres detenida, y tus tropas se quedan sin líder, lo que hace que no se atrevan a atacar. Has sido derrotada por tamaña estupidez.</p>\
            <h1>FIN</h1>\
            ",
            {
                enter: function(character, system, from) {
                    system.setCharacterText("<p>Este es tu inventario</p>");
                }
            }
        ),


        movilizartropas: new undum.SimpleSituation (
            "<h1>TROPAS</h1>\
            Ordenas a tus dos soldados de mayor confianza que llamen a todos los seguidores de Ragnar. Estos, suponen prácticamente la mitad de la tribu\
            y sin duda, lucharían a muerte por liberarle.\
            Puedes <a href='ataquetropas'>comandar a tus tropas para provocar un enfrentamiento brutal</a> o\
            como no quieres derramar la sangre de tu pueblo, <a href='mediarconde'>presionas al Conde para que se rinda, libere a Ragnar\
             y se exilie del condado.</a><p/>\
            ",
            {
                enter: function(character, system, from) {
                    system.setCharacterText("<p>Este es tu inventario</p>");
                }
            }
        ),

        ataquetropas: new undum.SimpleSituation (
            "<h1>ENFRENTAMIENTO BRUTLA </h1>\
			Como el Conde no libera a Lagertha, las tropas vikingas se enfrentamiento duramente con las tropas del Conde, para saberla.\
			Pues <a href='ganar'> las tropas del Conde son débiles (porque solo tienen posturero) y  buen material para el enfrentamiento no. \
			Por lo que las tropas vikingas ganan. ¡¡BRAVOOO!!. </a> o \
			Los vikingos tienen un despiste y caen a un lago de cocodrilos y pierden todo el material de combate.\
			<h1>FIN</h1>\
			" 
        ),

        mediarconde: new undum.SimpleSituation (
		
			"<h1>POSIBLE RENDIMIENTO DEL CONDE</h1>\
			En realidad, los vikingos no somos tan malos, por lo que damos un voto de confianza al Conde para que se rinda y nos devuelva Lagertha, sin problemas ningún tipo de problemas, porque todo el mundo comete errores...\
			Por lo que <a href='¿Qué decide el Conde hacer?'> </a> \

        )

};

// ---------------------------------------------------------------------------
/* The Id of the starting situation. */
undum.game.start = "start";

// ---------------------------------------------------------------------------
/* Here we define all the qualities that our characters could
 * possess. We don't have to be exhaustive, but if we miss one out then
 * that quality will never show up in the character bar in the UI. */
undum.game.qualities = {
    corona: new undum.OnOffQuality(
        "Corona de plata", {priority:"0001", group:'stats'}
    ),
    espada: new undum.OnOffQuality(
        "Espada", {priority:"0001", group:'stats'}
    ),
    monedas: new undum.IntegerQuality(
        "Monedas de oro", {priority:"0001", group:'stats'}
    ),
    hacha: new undum.OnOffQuality(
        "Hacha", {priority:"0001", group:'stats'}
    ),
    escudo: new undum.OnOffQuality(
        "Escudo", {priority:"0001", group:'stats'}
    ),
    espadacorta: new undum.OnOffQuality(
        "Espada corta", {priority:"0001", group:'stats'}
    ),
};

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {
    stats: new undum.QualityGroup(null, {priority:"0001"}),
    progress: new undum.QualityGroup('Progress', {priority:"0002"})
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function(character, system) {
    character.qualities.monedas = 100;
    character.qualities.corona = 1;
    character.qualities.espada = 1;
    character.qualities.escudo = 0;
    character.qualities.hacha = 0;
    character.qualities.espadacorta = 0;
    system.setCharacterText("<p>Comienzas con un tesoro en tu poder.</p>");
};
