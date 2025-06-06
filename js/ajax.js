document.getElementById("create-form").addEventListener("submit",function(e){
    e.preventDefault()
    ajax(this)
    this.reset()
})

function ajax(form){
    const data = new FormData(form)
    const method = form.getAttribute("method")
    const action = form.getAttribute("action")
    const headers = new Headers()

    const config = {
        method,
        headers,
        mode:"cors",
        cache:"no-cache",
        body:data
    }

    fetch(action,config)
    .then(res => res.json())
    .then(res => {
        if(res.solution){
            if(res.type === "create"){
                closePop()
                rewriteList()
            }
        } else {
            alert("¡Hubo un error!")
        }
    })
}

function rewriteList(){
    const lista = document.getElementById("expense-list")

    const action = "./content/expense-list.php"
    const config = {
        method:"POST",
        headers:new Headers(),
        mode:"cors",
        cache:"no-cache"
    }

    // añadiéndole a esa nueva lista la funcion de borrado con attachDeleteEvents
    fetch(action,config)
    .then(res => res.text())
    .then(html => lista.innerHTML=html)
    .then(() => attachDeleteEvents()) 
    .catch(err => console.log(err))
}

function attachDeleteEvents() {
    const botones = document.querySelectorAll(".delete-expense")
    if(botones){
        botones.forEach(boton => {
            if(boton){
                boton.addEventListener("click",function(e){

                    const data = new FormData()
                    data.append("id",this.dataset.id)

                    const action = "./logic/delete-logic.php"
                    const config = {
                        method:"POST",
                        headers:new Headers(),
                        mode:"cors",
                        cache:"no-cache",
                        body:data
                    }

                    fetch(action,config)
                    .then(res => res.json())
                    .then(res => {
                        if(res.solution){
                            rewriteList()
                        } else {
                            alert(res.text)
                        }
                    })
                })
            }
        })
    }
}

attachDeleteEvents()