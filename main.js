//scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite;

//inserisco il click sul imput;
$('#lname').focus(function() {
    //che mi nasconde la lista utenti
    $('.utente').hide();
});

//intercetto il click sull'icona;
$('.fa-search').click(function() {
    //leggo cio che ha scritto l'utente;
     var testodiricerca = $('#lname').val();

    //per ogni parola inserita la confronto con i contatti;
    $('h1').each(function() {
        //recupero il testo in h1;

        var nomecontatto = $(this).text(testodiricerca);
        //se è uguale visualizzo;
        if (nomecontatto == testodiricerca) {

            $(this).show();
            console.log(ok);
        }

        //altrimenti nascondo;
        else {
            $(this).hide();
            console.log(66);
        }

    });
});




//imposto un click sull'imput per far visualizzare il pulsate invio e far sparire il pulsante del microfono;
$('#larghezza').click(function() {
    $('.fa-paper-plane').show();
    $('.fa-microphone').hide();
});

// $('#larghezza').blur(function() {
//     $('.fa-paper-plane').hide();
//     $('.fa-microphone').show();
// });

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
