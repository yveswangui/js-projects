const button= document.getElementById("eat").onclick=function(){
    const selection= document.getElementById("foodGroup").value;
    alert("you are eating the " + selection);
   while(""){
       console.log("make a selection");
   
   
       let foodName=document.getElementById("foodGroup").value;
       let image=document.getElementsByTagName("img");
       for (let i; i<=image.length;i++){
           var text= image[i].getAttribute("alt");
           if(text===foodName){
               image[i].parentNode.removeChild(image[i]);
           }}
   }
   }

