var myTab = [
    "Mon Premier","Mon Deuxieme","Mon Troisieme","Mon Quatrieme"
];
var myTab2 = [];
container = document.getElementById('container');
part_left = document.getElementById('part_left');
btn1 = document.getElementById('btn1');
btn2 = document.getElementById('btn2');

function build(){
    myTab.forEach(element => {
        const pNew = document.createElement('p');
        pNew.setAttribute("class","para");
        pNew.innerText = element;
        pNew.addEventListener('click',function(){
            pNew.classList.toggle('select');
            //console.log(pNew);
        });  
        part_left.appendChild(pNew);
    });
    btn2.disabled=true;
    btn1.addEventListener('click',function(){
        alert('cliqué');
     })
}
// function testActive(tab){
//     if (tab.length==0){
//         btn1.
//     }
// }
function transfert(a){
    tab2 = [];
    var ind = tab2.indexOf(a);
    if(ind!=-1){
        tab2=a;
    }
}
build();
    
