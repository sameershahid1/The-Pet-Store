
const Data=[
{
 id:0,
 name:"Persian Cat",
 url:"https://www.agentpet.com/storage/pets/w0FMMINmNXYe1dsTucDzqV6xXqxzweG71wtjmRgL.png",
 price:"$20",
 type:"Animal"

}
,
{
 id:1,
 name:"Persian Cat",
 url:"./Assets/Buy-Sell-Products/A1.jpeg",
 price:"$20",
 type:"Animal"
}
,
{
 id:2,
 name:"Persian Cat",
 url:"./Assets/Buy-Sell-Products/A2.jpeg",
 price:"$20",
 type:"Animal"
},
{
 id:2,
 name:"Persian Cat",
 url:"./Assets/Buy-Sell-Products/A3.jpeg",
 price:"$20",
 type:"Animal"
}
,
{
 id:2,
 name:"Persian Cat",
 url:"./Assets/Buy-Sell-Products/A4.jpeg",
 price:"$20",
 type:"Animal"
}
,
{
 id:2,
 name:"Persian Cat",
 url:"./Assets/Buy-Sell-Products/A5.jpeg",
 price:"$20",
 type:"Animal"
}
,
{
 id:2,
 name:"Persian Cat",
 url:"./Assets/Buy-Sell-Products/A6.jpeg",
 price:"$20",
 type:"Animal"
}
,
{
 id:2,
 name:"Persian Cat",
 url:"./Assets/Buy-Sell-Products/A7.jpeg",
 price:"$20",
 type:"Animal"
}
,
{
 id:2,
 name:"Persian Cat",
 url:"./Assets/Buy-Sell-Products/A8.jpeg",
 price:"$20",
 type:"Animal"
}

];

const ProductCreator=(Data)=>
{
    const Product=`
    <div class='me-4 ms-4 me-lg-5 ms-lg-5 me-xl-5 ms-xl-5 me-md-5 me-md-5 me-sm-4 me-sm-4 card text-center'>
     <img class='card-img-bottom ms-1 p-2 img-size' src=${Data.url} alt=${Data.type}>
     <div class='p-0 pb-2 card-body'>
       <h5 class="card-title">${Data.name}</h5>
       <p class="card-text">${Data.price}</p>
       <button class="btn btn-primary ps-4 pe-4">Buy</button>
     </div>
    </div>
    `;
    return Product;
}


const List=Data.map(Da=>ProductCreator(Da));
const Buy_Sell=document.getElementById("Products");
let Products="";
List.map(x=>{Products+=x;})

Buy_Sell.innerHTML=Products;

