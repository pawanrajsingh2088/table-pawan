let num=document.getElementById("fix");
let btn=document.getElementById("btn");
let tableheading=document.getElementById("tableheading");
let tablepart=document.getElementById("tablepart");

btn.addEventListener("click",()=>{
    tablepart.style.display="block";
    let numval = num.value;
    if(numval>0)
    {
        tableheading.innerText="Table of "+numval;

        for(let i=1;i<=10;i++)
        {
            document.getElementById("table"+i).innerText=numval+"x"+i+" = "+numval*i;
        }
    }
    else{
        location.reload();
    }
});