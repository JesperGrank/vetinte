document.addEventListener("DOMContentLoaded", function(e){

    let submit = document.getElementById("summa")

    submit.addEventListener("click", function (e){
    let spel_1 = Number(document.getElementById("points_1s").value);
    let spel_2 = Number(document.getElementById("points_2s").value);
    let spel_3 = Number(document.getElementById("points_3s").value);
    let spel_4 = Number(document.getElementById("points_4s").value);
    let spel_5 = Number(document.getElementById("points_5s").value);
    let spel_6 = Number(document.getElementById("points_6s").value);

    let resultat = spel_1 + spel_2 + spel_3 + spel_4 + spel_5 + spel_6;

    let summap1 = document.getElementById("summap1");

    summap1.innerHTML = resultat;
    let bonus = document.getElementById("bonus")
    if (resultat >= 63){
        bonus.innerHTML = 50;
    }
    else {
        bonus.innerHTML = 0;
    }

    })
})