function play() {
  var l = Snap('#logo');

  setTimeout(function () {
    var logoTitle = 'Vinogradov Grigory';
    var logoRandom = '';
    var logoTitleContainer = l.text(0, '90%', '');
    var possible = "-+*/|}{[]~\\\":;?/.><=+-_)(*&^%$#@!)}";
    logoTitleContainer.attr({
      fontSize: 110,
      fontFamily: 'Montserrat',
      fontWeight: '400'
    });

    function generateRandomTitle(i, logoRandom) {
      setTimeout(function () {
        logoTitleContainer.attr({ text: logoRandom });
      }, i * 70);
    }

    for (var i = 0; i < logoTitle.length + 1; i++) {
      logoRandom = logoTitle.substr(0, i);
      for (var j = i; j < logoTitle.length; j++) {
        logoRandom += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      generateRandomTitle(i, logoRandom);
      logoRandom = '';
    }

  }, 500);

}
window.onload = play();
