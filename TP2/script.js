

var myTab = [
    {name:'Mon Premier',position:0},
    {name:'Mon Deuxieme',position:0},
    {name:'Mon Troisieme',position:0},
    {name:'Mon Quatrieme',position:0}
];

container = document.getElementById('container');
part_left = document.getElementById('part_left');
part_right = document.getElementById('part_right');
btn1 = document.getElementById('btn1');
btn2 = document.getElementById('btn2');
//console.log(myTab);
function build(){
    myTab.forEach(element => {
        const pNew = document.createElement('p');
        pNew.className="para";
        pNew.innerText = element.name;
        pNew.addEventListener('click',function(){
            pNew.classList.toggle('select');
            //console.log(pNew);
        });  
        part_left.appendChild(pNew);
    });
    //btn2.disabled=true;
}

function deplacer(left,right){
    const tabP = left.querySelectorAll('p');
    //console.log(tabP);
    tabP.forEach(p => {
        if(p.classList.contains('select')){
            myTab.forEach(t => {
                if(p.innerText == t.name){
                    var pNew = document.createElement('p');
                    pNew.innerText = t.name;
                    right.appendChild(pNew);
                    left.removeChild(p);
                    pNew.className="para";
                    pNew.addEventListener('click',function(){
                        pNew.classList.toggle('select');
                    });  
                    //console.log("deplacer");
                    t.position=!t.position;
                }
            });
        }
    });
}


btn1.addEventListener('click',function(){
    deplacer(part_left,part_right);
});
btn2.addEventListener('click',function(){
    deplacer(part_right,part_left);
});
build();
    
