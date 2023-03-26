

let container = document.querySelectorAll(".acordeon-section")
let activeBtn = document.querySelectorAll(".fixed-section")

for (let i = 0; i < container.length; i++) {
    container[i].addEventListener("click", function() {
        this.classList.toggle("active"); 
        var panel = this.lastElementChild; 

        if(panel.style.display  != "block"){
            panel.style.display = "block";
        } else { 
           panel.style.display = "none";
        
        
    }
 } )
}


for ( let i = 0; i < activeBtn.length; i++ ){ 
    activeBtn[i].addEventListener( "click", function(){
        this.classList.toggle("active"); 
        button =  this.firstElementChild; 
        rotation = this.lastElementChild;

        if (button.style.fontWeight != "bold"){ 
            button.style.fontWeight = "bold";
            button.style.fontWeight = "hsl(240, 6%, 50%)"
            activeBtn[i].style.border = "none"
            rotation.style.transform = "rotate(180deg)"
            
           
        } else{
            button.style.fontWeight = "normal"; 
            activeBtn[i].style.borderBottom = "1px solid rgba(128, 128, 128, 0.367)"
            rotation.style.transform = "none"
            
            

        }

    })
}; 