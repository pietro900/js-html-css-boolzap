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

            var clock = setInterval(rispostamessaggio, 1000);

            function rispostamessaggio() {
                var nuovo_testo = $('.tamplate2 .container_messaggi').clone();
                $('.messaggi').append(nuovo_testo);
                clearInterval(clock);

            }
        };
};

//ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.;
