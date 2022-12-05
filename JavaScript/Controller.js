
const MoveHome=()=>
{
  window.location.href="./Home.html";
}

const MoveStore=()=>
{
    window.location.href="./Pet-Store.html";
}

const MoveBuy=()=>
{
    window.location.href="./Buy-Sell.html";
}

const MoverMedicine=()=>{
    window.location.href="./Veterianary.html";
}

const MoveAboutus=()=>
{
    window.location.href="./About-us.html";
}

const Shifter=(ID)=>
{
    const Product=document.getElementById(ID);

    const Item={
        id:Product.children[0].id,
        type:Product.children[0].alt
    }
    localStorage.setItem("Product-ID",Item.id);
    localStorage.setItem("Product-TYPE",Item.type);
    window.location.href="./Product-Details.html";
}




