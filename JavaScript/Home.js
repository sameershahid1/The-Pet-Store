async function Fetcher()
{
    const Data=await fetch("https://api.thecatapi.com/v1/images/search?limit=10");
    const PicInfo=await Data.json();
    console.log(PicInfo);
    const Pic1=document.getElementById("im1");
    Pic1.src= PicInfo[0].url;
    console.log(Pic1.style.width);
    const Pic2=document.getElementById("im2");
    Pic2.src= PicInfo[1].url;    
    const Pic3=document.getElementById("im3");
    Pic3.src= PicInfo[2].url;;    

}


Fetcher();