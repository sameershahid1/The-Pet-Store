const Data=[];
const Creater=(ID)=>{
    return {
        id:ID,
        name:"Bruffn",
        url:`./Assets/MedicinePics/M${ID}.jpeg`,
        price:`PKR ${Math.floor(Math.random()*50)}`,
        type:"Medicine"
    };
}

for(let i=1;i<=19;i++)
{
    Data.push(Creater(i));
}

Data[0].name="Hepa-Merz";
Data[1].name="Azomax";
Data[2].name="Flagl";
Data[4].name="Mycitractic";
Data[5].name="Tobrex";
Data[6].name="Dektrain";
Data[7].name="Antisenptic Wipe";
Data[8].name="Suger Sirp";
Data[9].name="Hydrozole";
Data[10].name="Hydrozole";
Data[11].name="Flagl";
Data[12].name="20-meter Injection";
Data[13].name="10-meter Injection";
Data[14].name="Set of Injection";
Data[15].name="Veloself";
Data[16].name="Carief DS";
Data[17].name="Angumental";
Data[18].name="Pyodine";


const ProductCreator=(Data)=>
{
  const Product=`
  <div onclick="Shifter('Product${Data.id}')" style="cursor:pointer;" id="Product${Data.id}" class='me-0 ms-0 me-lg-5 ms-lg-5 me-xl-5 ms-xl-5 me-md-5 me-md-5 me-sm-4 me-sm-4 card text-center'>
   <img id='${Data.id}' class='card-img-bottom ms-1 p-2 img-size' src=${Data.url} alt=${Data.type}>
   <div class='p-0 pb-2 card-body'>
     <h5 class="card-title">${Data.name}</h5>
     <p class="card-text">${Data.price}</p>
     <button class="btn btn-primary ps-4 pe-4">Show Details</button>
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