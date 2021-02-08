var removecartitem= document.getElementsByClassName('button del')
console.log(removecartitem)
for (i=0;i<removecartitem.length;i++){
var button=removecartitem[i];
button.addEventListener('click',function(event){
    var buttonclicked=event.target
    buttonclicked.parentElement.parentElement.remove()
})
}

function increase(id,prix,ctn,check){
    let inp=document.getElementById(id)
    let val=parseInt(inp.value)
    val++;
    inp.value=val;
    let price=document.getElementById(prix)
    price.innerHTML =ctn*val+' dt';
    let checkitem=document.getElementById(check)
    if(checkitem.checked ){
        tot.innerHTML=parseFloat(tot.innerHTML)+ctn+'dt';
    }
    
}
 
function decrease(id,prix,ctn,check){
    let inp=document.getElementById(id)
    let val=parseInt(inp.value)
    
    if(val>0){
        val--;}
        else val=0
    
    inp.value=val;
    let price=document.getElementById(prix)
    price.innerHTML =ctn*val +' dt';
    let checkitem=document.getElementById(check)
    if(checkitem.checked){
        tot.innerHTML=parseFloat(tot.innerHTML)-ctn+'dt';
    }
    
 
}
const tot=document.getElementById('total');

function total(chec,prix,inp){
    let checkitems=document.getElementById(chec);
    if(checkitems.checked){
    let price=document.getElementById(prix)
    let input=document.getElementById(inp)
    if(input.value>0)
    {let sum=parseFloat(tot.innerHTML.replace(' dt',''))+parseFloat(price.innerHTML.replace(' dt',''))
    
    tot.innerHTML=sum +' dt';}
    
  }
  else{

    let price=document.getElementById(prix)
    let input=document.getElementById(inp)
    if(input.value>0)
    {let sum=parseFloat(tot.innerHTML.replace(' dt',''))-parseFloat(price.innerHTML.replace(' dt',''))
    
    tot.innerHTML=sum +' dt'}
  }
}
var count = 1;
function setColor(btn, color) {
    var property = document.getElementById(btn);
    if (count == 0) {
        property.style.color = "#000000"
        count = 1;        
    }
    else {
        property.style.color = "#f50057"
        count = 0;
    }
}



