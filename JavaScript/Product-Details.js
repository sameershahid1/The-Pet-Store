
//When the Content is loaded, it will show the Selective product Information
const ShowingDataOnThePage=()=>
{

//Data of the animals
const Data1=[
    {
     id:1,
     name:"Persian Cat",
     url:"https://www.agentpet.com/storage/pets/w0FMMINmNXYe1dsTucDzqV6xXqxzweG71wtjmRgL.png",
     price:"PKR 20",
     type:"Animal"
    }
    ];
    
    const Creater1=(ID)=>{    
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
      Data1.push(Creater1(i));
    }
    
    //Data of the Medicine
    const Data2=[];
    const Creater2=(ID)=>{
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
        Data2.push(Creater2(i));
    }
    
    Data2[0].name="Hepa-Merz";
    Data2[1].name="Azomax";
    Data2[2].name="Flagl";
    Data2[4].name="Mycitractic";
    Data2[5].name="Tobrex";
    Data2[6].name="Dektrain";
    Data2[7].name="Antisenptic Wipe";
    Data2[8].name="Suger Sirp";
    Data2[9].name="Hydrozole";
    Data2[10].name="Hydrozole";
    Data2[11].name="Flagl";
    Data2[12].name="20-meter Injection";
    Data2[13].name="10-meter Injection";
    Data2[14].name="Set of Injection";
    Data2[15].name="Veloself";
    Data2[16].name="Carief DS";
    Data2[17].name="Angumental";
    Data2[18].name="Pyodine";
    
    
    //Data of the Pet Store
    const Data3=[];
    const Buy_Sell=document.getElementById("Products");
    
    const Creater3=(ID)=>{
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
      Data3.push(Creater3(i));
    }
    
    Data3[0].name="Cat Bed";
    Data3[1].name="Cat Bed";
    Data3[2].name="Cat Bed";
    Data3[3].name="Toy";
    Data3[4].name="Doramon Cat Bed";
    Data3[5].name="House";
    Data3[6].name="Beds";
    Data3[7].name="Toy";
    Data3[8].name="Cat pot";
    Data3[9].name="Cat Pot";
    Data3[10].name="Cat Pot";
    Data3[11].name="Cat bag";
    Data3[12].name="Cat Pot";
    Data3[13].name="Cat Vaccine";
    Data3[14].name="Cat Vaccine";
    Data3[15].name="Cat Vaccine";
    Data3[16].name="Cat Vaccine";
    Data3[17].name="Panadole";
    Data3[18].name="Drontal";
    Data3[19].name="Napi";
    
    const MixBreed={
        Animal:Data1,
        Medicine:Data2,
        Pet_Store:Data3
    };

    const id=localStorage.getItem("Product-ID");
    const type=localStorage.getItem("Product-TYPE");
    console.log(MixBreed[type][id-1]);
    
    document.querySelector(".Title").textContent=MixBreed[type][id-1].name;
    document.querySelector(".img-size").src=MixBreed[type][id-1].url;
    document.querySelector(".price").textContent=MixBreed[type][id-1].price;
}



window.addEventListener('DOMContentLoaded',ShowingDataOnThePage);


