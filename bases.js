console.log('Hello World');
var maVariable = 10;
console.log('Ma variable : ', maVariable);
maVariable = 'External JacaScript file';
console.log('Ma variable : ', maVariable);
maVariable = undefined;
console.log('Ma variable : ', maVariable);
maVariable = null;
console.log('Ma variable : ', maVariable);
maVariable = { nom: "Module JavaScript" };
console.log('Ma variable : ', maVariable.nom);

var x = undefined;
var y = null;
console.log('Égalité faible : ', x == y);
console.log('Égalité forte : ', x === y);

var addition = 20 + 5;
console.log(addition);
addition = 20 + 'Formation';
console.log(addition);
addition = 20 + 5 + 'Formation';
console.log(addition);
addition = 20 + 'Formation' + 5;
console.log(addition);
addition = 'Formation' + 20 + 5;
console.log(addition);


function throwError() {
    throw new Error('Francis');
}
try {
    throwError();
} catch (e) {
    console.log(e);
}
(function AutoInvoquée() {
    console.log('Auto-invoquée');
})(window);

function autre() {
    console.log('Auto-invoquée');
}


var logger = function (a) {
    console.log('1er argument :', a);
};
function firstCallBack(callback) {
    if (callback && typeof callback === 'function') {
        callback('mom premier callback');
    }
}
firstCallBack(logger);


var hello = function (name) {
    console.log('Hello ' + name);
};
//console.log(hello("billy"));


// Pour déclencher un traitement, dans un temps donné, nous pouvons utiliser la méthode setTimeout
// qui prend en argumant un callback et un temps en milliseconde ainsi que le paramètre que l'on
// souhaite translettre au callback
setTimeout(function () {
    // la fonction sera exécutée dans 5000 millisecondes
}, 5000)
function asyncSayHello(name, callback) {
    if (callback && typeof callback === 'function') {
        // setTimeout(callback, 5000, name);

        setTimeout(function () {
            callback(name)
        }, 5000);
    }
}
asyncSayHello("billy", hello);


var formationJS = {
    nom: 'Module JavaScript',
    langage: 'JavaScript',
    dateDebut: '01/09/2017',
    dateFin: '05/09/2017',
    stagiaires: [{
        nom: 'Nom Exemple',
        prenom: 'Prenom Exemple'
    }
    ],
    description: function () {
        return this.nom + " " + this.dateDebut + " " + this.dateFin;
    }

}

formationJS.formateur = { nom: "Hodicq", prenom: "Nicolas" };

console.log(formationJS.formateur.nom);
console.log(formationJS.description());
delete (formationJS.stagiaires);
console.log("les stagiaires ont disparus ? " + formationJS.stagiaires == undefined);

function Formation() {
    this.nom = 'Module JavaScript';
    this.langage = 'javaScript';
    this.dateDebut = '01/09/2017',
        this.dateFin = '05/09/2017'
}
function Formation(nom, langage, dateDebut, dateFin) {
    this.nom = nom;
    this.langage = langage;
    this.dateDebut = dateDebut,
        this.dateFin = dateFin
}

var formation = new Formation("francis", "c", 15, 16);

console.log(formation.nom);
console.log(formation.langage);
console.log(formation.dateDebut);
console.log(formation.dateFin);



function Personnes(nom, prenom, age) {
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
}
function Stagiaires(nom, prenom, age, connaissances) {
    Personnes.call(this, nom, prenom, age);
    this.connaissances = connaissances;
}
Stagiaires.prototype = new Personnes();
Stagiaires.prototype.constructor = Stagiaires;
var stagiaire =  new Stagiaires("nom","prenom","age","connaissances");

console.log(stagiaire instanceof Stagiaires);
console.log(stagiaire instanceof Personnes);
