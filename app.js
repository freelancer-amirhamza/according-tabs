const allTabs = document.querySelectorAll(".tab")
const allText = document.querySelectorAll(".text")


allTabs.forEach(( tab, index)=>{
    tab.addEventListener("click", function (){
        allTabs.forEach((tb, idx) => {
            tb.classList.remove("active")
        })
        this.classList.toggle("active")
        // if(this.classList.contains("active")){
        //     this.classList.remove("active")
        // } else{
        //     this.classList.add("active")
        // }
        
    })

  
})

