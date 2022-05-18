function play() {
  var l = Snap('#logo');

  setTimeout(function () {
    var logoTitle = 'Художник, Blockchain developer';
    var logoRandom = '';
    var logoTitleContainer = l.text(12, '75%', '');
    var possible = "-+*/|}{[]~\\\":;?/.><=+-_)(*&^%$#@!)}";
    logoTitleContainer.attr({
      fontSize: 14,
      fontFamily: 'Montserrat',
      fontWeight: '300'
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
