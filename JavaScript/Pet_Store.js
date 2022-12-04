
const Data=[
{
  id:1,
  name:"Cat Bed",
  url:"./Assets/Animal-Products/P1.jpeg",
  price:"$6",
  type:"Pet Store"
},
{
  id:2,
  name:"Cat Bed",
  url:"./Assets/Animal-Products/P2.jpeg",
  price:"$5",
  type:"Pet Store"
},
{
  id:3,
  name:"Cat Bed",
  url:"./Assets/Animal-Products/P3.jpeg",
  price:"$7",
  type:"Pet Store"
},
{
  id:4,
  name:"Toy",
  url:"./Assets/Animal-Products/P4.jpeg",
  price:"$20",
  type:"Pet Store"
},
{
  id:5,
  name:"Doramon Cat Bed",
  url:"./Assets/Animal-Products/P5.jpeg",
  price:"$20",
  type:"Pet Store"
},
{
  id:6,
  name:"House",
  url:"./Assets/Animal-Products/P6.jpeg",
  price:"$20",
  type:"Pet Store"
},
{
  id:7,
  name:"Beds",
  url:"./Assets/Animal-Products/P7.jpeg",
  price:"$30",
  type:"Pet Store"
},
{
  id:8,
  name:"Toy",
  url:"./Assets/Animal-Products/P8.jpeg",
  price:"$20",
  type:"Pet Store"
},
{
  id:9,
  name:"Cat pot",
  url:"./Assets/Animal-Products/P9.jpeg",
  price:"$20",
  type:"Pet Store"
},
{
  id:10,
  name:"Cat Pot",
  url:"./Assets/Animal-Products/P10.jpeg",
  price:"$20",
  type:"Pet Store"
},
{
  id:11,
  name:"Cat Pot",
  url:"./Assets/Animal-Products/P11.jpeg",
  price:"$20",
  type:"Pet Store"
},
{
  id:12,
  name:"Cat bag",
  url:"./Assets/Animal-Products/P12.jpeg",
  price:"$20",
  type:"Pet Store"
},
{
  id:13,
  name:"Cat Pot",
  url:"./Assets/Animal-Products/P13.jpeg",
  price:"$20",
  type:"Pet Store"
},
{
  id:14,
  name:"Cat Vaccine",
  url:"./Assets/Animal-Products/P14.jpeg",
  price:"$20",
  type:"Pet Store"
},
{
  id:15,
  name:"Cat Vaccine",
  url:"./Assets/Animal-Products/P15.jpeg",
  price:"$20",
  type:"Pet Store"
},
{
  id:16,
  name:"Cat Vaccine",
  url:"./Assets/Animal-Products/P16.jpeg",
  price:"$20",
  type:"Pet Store"
},
{
  id:17,
  name:"Cat Vaccine",
  url:"./Assets/Animal-Products/P17.jpeg",
  price:"$20",
  type:"Pet Store"
},
{
  id:18,
  name:"Panadole",
  url:"./Assets/Animal-Products/P18.jpeg",
  price:"$20",
  type:"Pet Store"
},
{
  id:19,
  name:"Drontal",
  url:"./Assets/Animal-Products/P19.jpeg",
  price:"$20",
  type:"Pet Store"
},
{
  id:20,
  name:"Napi",
  url:"./Assets/Animal-Products/P20.jpeg",
  price:"$20",
  type:"Pet Store"
},
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