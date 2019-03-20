var app = {
    init: function () {
        console.log('Document title: ', document.title);
        document.title = 'une nouvelle valeur';
        console.log('Document title: ', document.title);
        console.log('Document tagname: ', document.getElementsByTagName('h1')[0].innerText);
        console.log('Document classname: ', document.getElementsByClassName('text-red')[1].innerText);
        console.log('Document id: ', document.getElementById('title'));

    }
};
app.init();

var paragraphe = document.getElementById('id');

    paragraphe.addEventListener('mouseover', function (e) {
        if(e.x<window.innerWidth/2){
            paragraphe.classList.remove("text-red");
        }else{
            paragraphe.classList.add("text-red");
        }
    });
    var titre = document.getElementById('title-1');
    titre.addEventListener('click', function (e) {
        var p = document.createElement("p");
        p.classList.add("text-red");
        p.innerHTML="du texte";
        document.body.appendChild(p);
    });
    var titre2 = document.getElementById('title-2');
    titre2.addEventListener('click', function (e) {
        var suppr = document.getElementsByTagName('p')[1];
        suppr.parentNode.removeChild(suppr);
    });

    