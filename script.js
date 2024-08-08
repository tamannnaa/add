let inp1=document.getElementById("inp1")
let inp2=document.getElementById("inp2")
let btn=document.getElementById("add");

let res=document.getElementById("result");
btn.addEventListener("click",function(){
    let no1=inp1.value;
    let no2=inp2.value;

    let ans=parseInt(no1)+parseInt(no2);

    let p=document.createElement("p");
    p.innerText=ans;
    res.appendChild(p);
})