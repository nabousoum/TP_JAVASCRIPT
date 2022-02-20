document.getElementsByClassName('container')[0].style.display="block";
var correct1 = document.getElementById('repCorrect1');
var correct2 = document.getElementById('repCorrect2');
var correct3 = document.getElementById('repCorrect3');
var correct4 = document.getElementById('repCorrect4');
var correct5 = document.getElementById('repCorrect5');
var btnResultat = document.getElementById('btnResultat');
var span = document.getElementById('span');

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
    span.innerText = score+'/5';
}
btnResultat.addEventListener('click',function(){
    resultatQuizz();
})

console.log(resultatQuizz());
// btnResultat.addEventListener('click',function(){
//     resultatQuizz();
// })