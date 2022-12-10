const Data=[
{
 id:1,
 name:"Persian Cat",
 url:"https://www.agentpet.com/storage/pets/w0FMMINmNXYe1dsTucDzqV6xXqxzweG71wtjmRgL.png",
 price:"$20",
 type:"Animal"
}
];

const Creater=(ID)=>{
  return{
      id:ID,
      name:"Persian Cat",
      url:`./Assets/Buy-Sell-Products/A${ID-1}.jpeg`,
      price:`PKR ${Math.floor(Math.random()*3500)}`,
      type:"Animal"
  };
}

for(let i=2;i<=9;i++)
{
  Data.push(Creater(i));
}


const ProductCreator=(Data)=>
{
    const Product=`
    <div onclick="Shifter('Product${Data.id}')" style="cursor:pointer;" id="Product${Data.id}" class='me-0 ms-0 me-lg-5 ms-lg-5 me-xl-5 ms-xl-5 me-md-5 me-md-5 me-sm-4 me-sm-4 card text-center'>
     <img id='${Data.id}' class='card-img-bottom ms-1 p-2 img-size' src=${Data.url} alt=${Data.type}>
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

