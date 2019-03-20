var nom = "laurent"
function sayHello() {
    var nom = 'Niko';
    console.log('Nom : ',nom);
}
sayHello();
console.log('Nom : ', nom);


(function (window) {
    var data = [ "francis"]
    var billy = {};
    billy.verifier = function (...noms) {
        return data + noms
    };
    window.billy = billy;
})(window);
