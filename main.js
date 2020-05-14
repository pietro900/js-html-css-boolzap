
$(document).on('click','.cancella_messaggio', function() {
    $(this).closest('.container_messaggi').remove();
});

//intercetto il click sull'icona del dropdowen;
$(document).on('click','.fa-angle-down', function(){
    //recupero il tag ul con classe dropdown che è suo fratello
    var sottomenu = $(this).next('.dropdown');
    console.log(sottomenu);
    //valuto se l'elemento su cui ho cliccato ha gia il dropdawn aperto;
    if(sottomenu.is(':visible')){
        //se si allora ho cliccato lastessa voce per chiuderlo;
        sottomenu.hide();
    } else {
        //se no allora ho cliccato una nuova voce per aprirlo;
        //chiudo gli altri eventuali aperti in precedenza;
        $('.dropdown').hide();
        //visuallizzo il menu dropdown
        sottomenu.show();
    }
});

//quando esco con il mouse chiudo un dopdowen aperto
$(document).on('mouseleave','.dropdown', function() {
    $(this).hide();
});


//intercetto il click sull' untente selezionato;
$('.utente').click(function(){

    //individuo l'indice dell'utente selezionato;
    var  index_contatti = $(this).index('.utente');
    //trovo in nome dell'utente selezionato
    var nome_utente = $(this).find('h3').text()
    console.log(index_contatti);
    console.log(nome_utente);
    //uso l'indice per associarlo ad un chat di messaggi;
    var index_messaggi = $('.messaggi').eq(index_contatti);
    //scrivo il nome dell'utente;
    $('h4').text(nome_utente)
    console.log(index_messaggi);

    //rimuovo a tutte le chat la classe active, cosi da nasconderle a tutte
    $('.messaggi').removeClass('active')
    $('.utente').removeClass('utente_hover')
    //rimetto la classe active alla chat corrispondente all'indice;
    $(index_messaggi).addClass('active')
    $(this).addClass('utente_hover')
});

//intercetto il focus sull'imput
$('#ricerca').keyup(function() {
    //leggo cio che ha scritto l'utente nell'imput;
     var testodiricerca = $('#ricerca').val().trim().toLowerCase();

    if ( testodiricerca != '') {
        //recupero il testo per ogni h1;
        $('h3').each(function() {
            var nomecontatto = $(this).text().toLowerCase();

            // confronto cio che a scritto l'utente con i contatti;
            //se è uguale visualizzo;
            if (nomecontatto.includes(testodiricerca)) {
                   $(this).parents('.utente').show();
               } else {
                   $(this).parents('.utente').hide();
               }
           })
       } else {
           $('.utente').show();
        }
});

//imposto un click sull'imput per far visualizzare il pulsate invio e far sparire il pulsante del microfono;
$('#larghezza').click(function() {
        $('.fa-paper-plane').show();
        $('.fa-microphone').hide();
});


//intercetto il click sul pulsante invio;
$('.fa-paper-plane').click(function() {
    messaggio()
    //ristabilizco la condizione originaria dell'imput;
    $('#larghezza').val('')
});


$(document).keypress(function(event) {
    if (event.which == 13) {
        messaggio();
        //ristabilizco la condizione originaria dell'imput;
        $('#larghezza').val('')
    }
});

function messaggio() {
    //mi chiedo se nel imput è stato scritto qualcosa;
    if ($('#larghezza').val()) {
        //leggo il testo inserito dall'utente;
        var testo_inserito = $('#larghezza').val();

        //copio l'elemento inserito;
        var nuovo_testo = $('.tamplate .container_messaggi').clone();

        //inserisco il testo letto dall'imput nalla p figlia ;
        nuovo_testo.find('p').text(testo_inserito);

        //appendo il nuovo testo;
        $('.active').append(nuovo_testo);

        //ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.;

        var clock = setTimeout(rispostamessaggio, 1000);

        function rispostamessaggio() {
            var nuovo_testo = $('.tamplate2 .container_messaggi').clone();
            $('.active').append(nuovo_testo);
            }
        };
};
