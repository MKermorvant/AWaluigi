var list = [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4];
var scoremario = 0;
var scorewaluigi = 0;
var tours = Math.floor(Math.random() * 2) + 1

console.log(tours);

function play(clicked_id) {
    let x = parseInt(clicked_id);
    if ((tours === 1 && x > 5) || (tours === 2 && x < 6)) {
      alert("Ce n'est pas ton tour !");
        return;
    }

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


    while (list[x] === 2 || list[x] === 3) {
        if (tours === 1 && x > 5) {
            scoremario += list[x];
            list[x] = 0;
        } else if (tours === 2 && x < 6) {
            scorewaluigi += list[x];
            list[x] = 0;
        }
        x--;
    }


    if (tours === 1) {
        tours = 2;
    } else {
        tours = 1;
    }

    affichage();
    checkGameOver();
}

function affichage() {
    let cases = document.getElementsByClassName("case");
    for (let i = 0; i < cases.length; i++) {
        cases[i].textContent = list[parseInt(cases[i].id)];
    }
    document.getElementById("score1").textContent = "Mario : " + scoremario;
    document.getElementById("score2").textContent = "Waluigi : " + scorewaluigi;
}
function abandonne(){
    if ((tours === 1 && x > 5) || (tours === 2 && x < 6)) {
        alert("Ce n'est pas ton tour !");
          return;
      }
}


function nouvellePartie() {
    location.reload();
}

function quitter() {
    location.href = "/home/ciel12/Documents/AWaluigi-main/index.html";
}



function checkGameOver() {
    let mario = list.slice(0, 6).reduce((a, b) => a + b, 0);
    let waluigi = list.slice(6, 12).reduce((a, b) => a + b, 0);

    if (mario === 0 || waluigi === 0) {
        alert("C'est FINI, laché les claviers");
        if (scoremario > scorewaluigi) {
            alert("Mario à gagné !");
        } else if (scorewaluigi > scoremario) {
            alert("Waluigi à gagné !");
        } else {
            alert("Match nul!");
        }
    }
}

window.onload = affichage;