document.getElementsByClassName('container')[0].style.display="block";
const correct1 = document.getElementById('repCorrect1');
const correct2 = document.getElementById('repCorrect2');
const correct3 = document.getElementById('repCorrect3');
const correct4 = document.getElementById('repCorrect4');
const correct5 = document.getElementById('repCorrect5');
const btnResultat = document.getElementById('btnResultat');
const h = document.getElementById('text');

function questionSuivante(num){
    document.getElementsByClassName('container')[num-1].style.display="none";
    document.getElementsByClassName('container')[num].style.display="block";
}

function resultatQuizz(){
    var score=0;
    if (correct1.checked){
        score++;
    }
    if (correct2.checked){
        score++;
    }
    if (correct3.checked){
        score++;
    }
    if (correct4.checked){
        score++;
    }
    if (correct5.checked){
        score++;
    }
    alert(score);
}
// console.log(resultatQuizz);
// btnResultat.addEventListener('click',function(){
//     resultatQuizz();
// })