const textGenerer = document.getElementById('textGenerer');
const label2 = document.getElementById('label2');
const label3 = document.getElementById('label3');
const label4 = document.getElementById('label4');
const label5 = document.getElementById('label5');
const btnGenerer = document.getElementById('btnGenerer');
const btnCopy = document.getElementById('btnCopy');
const entete = document.getElementById('entete');
const text = document.getElementById('text');
const nbrC = parseInt(document.getElementById('label1').value);
const numberCarac = "0123456789".split('');
const lowerCarac = "abcdefghijklmnopqrstuvwxyz".split('');
const upperCarac = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
const regexCarac = "`~!@#$%^&*()-_=+[{]}\\|;:'\",<.>/?".split('');



btnGenerer.disabled=true;
function verifButton(){
    if (label2.checked || label3.checked || label4.checked || label5.checked){
        btnGenerer.disabled=false;
    }
    else{
        btnGenerer.disabled=true;
    }
}
// function nbrCarac(){
//     if( nbrC<5 || nbrC>20){
//         btnGenerer.disabled=true;
//     }
//     else{
//         btnGenerer.disabled=false;
//     }
// }
label2.addEventListener('change',verifButton);
label3.addEventListener('change',verifButton);
label4.addEventListener('change',verifButton);
label5.addEventListener('change',verifButton);
//label1.addEventListener('change',nbrCarac());

function genererPassword(){
    const tab = [].concat(label2.checked ? upperCarac : [],label3.checked ? lowerCarac : [],label4.checked ? numberCarac : [],label5.checked ? regexCarac : []);
    if (tab.length===0){
        textGenerer.value='';
    }
    var longueurPassword = parseInt(document.getElementById('label1').value);
    var motDePasse='';
    for (var i = 0; i < longueurPassword; i++) {
        motDePasse = motDePasse + tab[Math.floor(Math.random() * tab.length)];
    }
    textGenerer.value=motDePasse;
    entete.addEventListener('mouseover',function(){
        btnCopy.style.visibility='visible';
    })
    btnCopy.addEventListener('click',function(){
        //navigator.clipboard.writeText(motDePasse);
        textGenerer.select();
         document.execCommand('copy');
        btnCopy.innerHTML='copié!!';
    })
}

  btnGenerer.addEventListener('click',function(){
    genererPassword();
    //console.log(longueurPassword);
  })

//


