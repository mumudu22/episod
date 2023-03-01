// Définir l'heure à laquelle le script doit s'exécuter
var heure = new Date();
heure.setHours(17);
heure.setMinutes(9); // minuit une le lundi matin

// Attendre jusqu'à ce que l'heure spécifiée soit atteinte
setTimeout(function() {
  // Recharger la page
  location.reload();

  // Attendre que la page se recharge complètement
  window.addEventListener("load", function() {
    // Trouver la ligne "Pilate lundi 18h15 Thibaut" et vérifier si le bouton "Réserver" est présent
    var ligne = document.evaluate("//td[contains(., 'Pilate')]/following-sibling::td[contains(@class, 'reserve')]/a[contains(@class, 'reserveBtn')]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    if (ligne) {
      // Cliquer sur le bouton "Réserver"
      ligne.click();

      // Attendre que le modal "Réservation" s'ouvre
    } else {
      // Attendre et vérifier à nouveau dans 5 minutes
      setTimeout(arguments.callee, 3000);
    }
  });
}, heure.getTime() - new Date().getTime());