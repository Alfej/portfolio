let count=0;
function darkmode(){
    console.log("hitted");
    count += 1;
    console.log(count);
    if(count%2!=0){
        document.body.style ='background-color:white;color:black';
        document.documentElement.style.setProperty('color', 'black');
        document.getElementById('navbar').style='background-color:white;border-color:black';
        document.querySelector(".btn").style='border-color:black';
        document.querySelector("#btn").style='border-color:black';
    }
    else{
        document.body.style ='background-color:black;color:white';
        document.documentElement.style.setProperty('color', 'white');
        document.getElementById('navbar').style='background-color:black;border-color:white';
        document.querySelector(".btn").style='border-color:white';
        document.querySelector("#btn").style='border-color:white';
    }
   
} 
