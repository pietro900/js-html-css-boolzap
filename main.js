//scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite;

//inserisco il click sul imput;
$('#ricerca').focus(function() {
    //che mi nasconde la lista utenti
    $('.utente').hide();
});

//intercetto il focus sull'imput
$('#ricerca').keyup(function() {
    //leggo cio che ha scritto l'utente nell'imput;
     var testodiricerca = $('#ricerca').val().trim().toLowerCase();

    //recupero il testo per ogni h1;
    $('h1').each(function() {
        var nomecontatto = $(this).text().toLowerCase();

        // confronto cio che a scritto l'utente con i contatti;
        //se è uguale visualizzo;
        if (nomecontatto.includes(testodiricerca)) {
               $(this).parents('.utente').show()
           } else {
               $(this).parents('.utente').hide()
           }
    });
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
        $('.messaggi').append(nuovo_testo);

        //ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.;

        var clock = setInterval(rispostamessaggio, 1000);

        function rispostamessaggio() {
            var nuovo_testo = $('.tamplate2 .container_messaggi').clone();
            $('.messaggi').append(nuovo_testo);
            clearInterval(clock);
            }
        };
};
