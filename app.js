var kraj 
var pop
var punkty = 0
var serca = 3
var lb = 0
const gra = document.getElementById("gras")

json = []

async function getData(){
    const data = await fetch("https://restcountries.com/v2/all")
    json = await data.json()
   

    

   document.getElementById("body").style.visibility = "visible"
       
    

}

getData()

function losuj(){
    var max = json.length-1
    return Math.floor(Math.random() * max);
    
}


function losuj_kraje(){

    document.getElementById("buttonik").hidden = "hidden"
    document.getElementById("hint").style.visibility = "visible"

   

var kraj = json[losuj()]
var kraj2 = json[losuj()]
var kraj3 = json[losuj()]
var kraj4 = json[losuj()]

if(kraj.capital == undefined || kraj2.capital == undefined || kraj3.capital == undefined || kraj4.capital == undefined || kraj == kraj2 || kraj == kraj3 || kraj == kraj4 || kraj2 == kraj3 || kraj2 == kraj4 || kraj3 == kraj4 ){

kraj = json[losuj()]
kraj2 = json[losuj()]
kraj3 = json[losuj()]
kraj4 = json[losuj()]

}
 
var losowanko = losuj_but()

if(losowanko == 0){
    
    pop = kraj

}
else if(losowanko == 1){
    pop = kraj2
}
else if(losowanko == 2){
    pop = kraj3
}
else if( losowanko == 3){
    pop = kraj4
}

console.log(pop)

   
    

    gra.innerHTML = ""    

    const div1 = document.createElement("div")
    
    const h1 = document.createElement("h1")

    const flaga1 = document.createElement("img")

    flaga1.src = pop.flag
  
    flaga1.classList.add("flagi")
  
    h1.innerHTML = pop.name

    div1.appendChild(h1)
    div1.appendChild(flaga1)

    div1.classList.add("slide-in-top")
   
   
    const odp = document.createElement("div")
    odp.classList.add("odp")

    const input = document.createElement("input")
    
    

    

    const button = document.createElement("button")
    button.innerHTML = kraj.capital

    const button2 = document.createElement("button")
    button2.innerHTML = kraj2.capital

    const button3 = document.createElement("button")
    button3.innerHTML = kraj3.capital

    const button4 = document.createElement("button")
    button4.innerHTML = kraj4.capital
    
        
   button.addEventListener("click", function(){
    check(pop.capital, kraj.capital)
   } )
   button2.addEventListener("click", function(){
    check(pop.capital, kraj2.capital)
   } )
   button3.addEventListener("click", function(){
    check(pop.capital, kraj3.capital)
   } )
   button4.addEventListener("click", function(){
    check(pop.capital, kraj4.capital)
   } )

 
    
    odp.appendChild(button)
    odp.appendChild(button2)
    odp.appendChild(button3)
    odp.appendChild(button4)



  

    gra.appendChild(div1)
    gra.appendChild(odp)
 
    


    div1.classList.add("kraj1")

   
   
}



function losuj_but(){


    
    var max = 3
    return Math.floor(Math.random() * max);

}

function check(pop, kraj){


    


    if(pop == kraj){
        gra.innerHTML = ""
        console.log("git")
        punkty++
        document.getElementById("pkt").innerHTML = "liczba pkt = " + punkty
        
        
        setTimeout(losuj_kraje(), 1500)
       
    }

    
   
    
    else{
        gra.innerHTML = ""
        console.log("gitn't")
        document.getElementsByClassName("serce")[lb].hidden = "hidden"
        lb++
        setTimeout(losuj_kraje(), 1500)
    }
   
    if(lb == 3){
        gra.innerHTML = ""
        document.getElementById("buttonik").hidden = "hidden"
        const but = document.createElement("button")
        but.innerHTML = "naciśnij, aby zagrać ponownie"  
        but.addEventListener("click", function(){
            document.location.reload()})
            but.classList.add("bounce-in-top")
            but.style.width = "120px"
            but.style.height = "80px"
            but.style.backgroundColor = "rgb(34, 34, 34)"
            but.style.color = "aliceblue"
            const menus = document.getElementById("menus")
            menus.innerHTML = " "
        
        gra.appendChild(but)
    
}
}
    
       

function hint(){
    alert("Zaczyna się na: " + pop.capital[0])
}




