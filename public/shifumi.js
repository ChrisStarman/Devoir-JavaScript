$(function () {
    $("#jouer").on("click", function (e) {

        //Empêche la page de se recharger immédiatement
        e.preventDefault();
        //Récupère la valeur du bouton radio
        var choix = $("input[name='shifumi']:checked").val();
        let shifumi = ["shi", "fu", "mi"];
        let nombreAleatoire = Math.floor(Math.random() * 3);

        //Exécute le reste du script si un bouton radio est coché
        if ($("input").is(':checked')) {
            function boutonCoche() {
                return ($('input[type=radio]:checked').size() > 0);
            }

            if (nombreAleatoire == 0) {
                $("#resultat").before("<img src='../public/shi.png' />")
            };

            if (nombreAleatoire == 1) {
                $("#resultat").before("<img src='../public/fu.png' />")
            };

            if (nombreAleatoire == 2) {
                $("#resultat").before("<img src='../public/mi.png' />")
            };

            //Résultats pour shi
            if (choix == shifumi[0] && (nombreAleatoire == 2)) {
                $("#resultat").text("Gagné")
            };

            if (choix == shifumi[0] && (nombreAleatoire == 0)) {
                $("#resultat").text("Egalité")
            };

            if (choix == shifumi[0] && (nombreAleatoire == 1)) {
                $("#resultat").text("Perdu")
            };

            //Résultats pour fu
            if (choix == shifumi[1] && (nombreAleatoire == 0)) {
                $("#resultat").text("Gagné")
            };

            if (choix == shifumi[1] && (nombreAleatoire == 1)) {
                $("#resultat").text("Egalité")
            };

            if (choix == shifumi[1] && (nombreAleatoire == 2)) {
                $("#resultat").text("Perdu")
            };

            //Résultats pour mi
            if (choix == shifumi[2] && (nombreAleatoire == 0)) {
                $("#resultat").text("Perdu")
            };

            if (choix == shifumi[2] && (nombreAleatoire == 1)) {
                $("#resultat").text("Gagné")
            };

            if (choix == shifumi[2] && (nombreAleatoire == 2)) {
                $("#resultat").text("Egalité")
            };

            $("#jouer").off("click").text("Rejouer");
        };
    });
});