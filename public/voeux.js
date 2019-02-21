$(function () {
    let $list = $('ul');
    let $image = $('img');

    //Je crée l'événement de click
    $('#carte').on('click', function () {
        $list.append('<li>Bonne année</li>');
        //Je supprime l'assignation du click
        $('#carte').off('click');
        //Je redéfinis un événement sur click
        $('#carte').on('click', function () {
            $list.append('<li>Bonne santé</li>');
            $('#carte').off('click');
            $('#carte').on('click', function () {
                $list.append('<li>Meilleurs voeux</li>');
                $('#carte').off('click');
                $('#carte').on('click', function () {
                    //Je cache ma liste et affiche mon image, qui était auparavant cachée
                    $list.css('display', 'none');
                    $image.css('visibility', 'visible');
                    $('#carte').off('click');
                });
            });
        });
    });
});