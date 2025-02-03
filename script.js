var list = [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4];
console.log(list);

function play(clicked_id) {
    console.log(clicked_id);
    let x = parseInt(clicked_id);
    console.log(x);
    let value = list[x];
    list[x] = 0;
    for (let i = 0; i < value; i++) {
        x--;
        if (x < 0) {
            x = 11;
        }
        console.log(x);
        list[x] += 1;
        console.log(list);
    }
    affichage();
    return list;
}

function affichage() {
    let cases = document.getElementsByClassName("case");
    for (let i = 0; i < cases.length; i++) {

        console.log(cases[i])
        cases[i].textContent = list[parseInt(cases[i].id)];
    }
}

function nouvellePartie(){
    location.reload()
}

function quitter(){
    location.href="/"
}

function abandonner(){
    alert("Le joueur 2 à gagner la part")
}

function score(){

}

window.onload = affichage;

