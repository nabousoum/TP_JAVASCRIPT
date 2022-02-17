

const btnAjout = document.getElementById('btnAjout');
const divTab = document.getElementById('divTab');
const container = document.getElementById('container');
//

function creerTab(){
    //divTab.innerHTML='<h1>salut</h1>';
    const divText = document.createElement('div');
    divText.className = 'enteteText';

    const divEntete = document.createElement('div');
    divEntete.className = 'entete';
    const divTextarea = document.createElement('textarea');
    divTextarea.className = 'champText';
    divTextarea.rows='30';
    divTextarea.cols='43';
    divTextarea.disabled=true;

    const divImages = document.createElement('div');
    divImages.className = 'imgs';

    const button1 = document.createElement('button');
    button1.addEventListener('click',function(){
        divTextarea.disabled=!divTextarea.disabled;
    });
    const img1 = document.createElement('img');
    img1.src="edit.jpeg";

    const button2 = document.createElement('button'); 
    button2.addEventListener('click',function(){
        var parent = this.parentElement.parentElement.parentElement;
        parent.parentElement.removeChild(divText);
    });
    const img2 = document.createElement('img');
    img2.src="delete.jpeg";

    button1.appendChild(img1);
    button2.appendChild(img2);
    divImages.appendChild(button1);
    divImages.appendChild(button2);
    divEntete.appendChild(divImages);
    divText.appendChild(divEntete);
    divText.appendChild(divTextarea);
    divTab.appendChild(divText);
    container.appendChild(divTab);
}



//
btnAjout.addEventListener('click',function(){
   // myTab.push(1);
    //console.log(creerTab());
    creerTab();
});

