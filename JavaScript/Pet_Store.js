const Data=[];
const Buy_Sell=document.getElementById("Products");

const Creater=(ID)=>{
  return{
      id:ID,
      name:"",
      url:`./Assets/Animal-Products/P${ID}.jpeg`,
      price:`PKR ${Math.floor(Math.random()*100)}`,
      type:"Pet_Store"
  };
}

for(let i=1;i<=20;i++)
{
  Data.push(Creater(i));
}

Data[0].name="Cat Bed";
Data[1].name="Cat Bed";
Data[2].name="Cat Bed";
Data[3].name="Toy";
Data[4].name="Doramon Cat Bed";
Data[5].name="House";
Data[6].name="Beds";
Data[7].name="Toy";
Data[8].name="Cat pot";
Data[9].name="Cat Pot";
Data[10].name="Cat Pot";
Data[11].name="Cat bag";
Data[12].name="Cat Pot";
Data[13].name="Cat Vaccine";
Data[14].name="Cat Vaccine";
Data[15].name="Cat Vaccine";
Data[16].name="Cat Vaccine";
Data[17].name="Panadole";
Data[18].name="Drontal";
Data[19].name="Napi";


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
let Products="";
List.map(x=>{Products+=x;})

Buy_Sell.innerHTML=Products;