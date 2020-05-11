//intercetto il click sul pulsante;
$('.fa-microphone').click(function() {

    //leggo il testo inserito dall'utente;
    var testo_inserito = $('#larghezza').val();

    //copio l'elemento inserito;
    var nuovo_testo = $('.tamplate p').clone();

    //inserisco il testo letto dall'imput ;
    nuovo_testo.text(testo_inserito);

    //appendo il nuovo testo;
    $('.inviato').append(nuovo_testo);
})
