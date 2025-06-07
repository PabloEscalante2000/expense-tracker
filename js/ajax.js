document.getElementById("create-form").addEventListener("submit",function(e){
    e.preventDefault()
    ajax(this)
    this.reset()
})

document.getElementById("update-form").addEventListener("submit",function(e){
    e.preventDefault()
    ajax(this)
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
            } else if(res.type === "update"){
                closePopUpdate()
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

    // añadiéndole a esa nueva lista la funcion de borrado con attachDeleteEvents y la funcion de actualizar openPopUpdate()
    fetch(action,config)
    .then(res => res.text())
    .then(html => lista.innerHTML=html)
    .then(() => attachDeleteEvents()) 
    .then(() => attachUpdateEvents())
    .then(() => rewriteTotalAmount())
    .catch(err => console.log(err))
}

function rewriteTotalAmount(){
    const div = document.getElementById("total-amount")
    const action = "./content/total-amount.php"
    const config = {
        method:"POST",
        headers:new Headers(),
        mode:"cors",
        cache:"no-cache"
    }

    fetch(action,config)
    .then(res => res.text())
    .then(html => div.innerHTML=html)
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

function getDataForUpdate(id){

    if(id){
        const data = new FormData()
        data.append("id",id)

        const action = "./logic/read-logic.php"
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
                const formUpdate = document.getElementById("update-form")
                formUpdate.id.value = res.id
                formUpdate.title.value = res.title
                formUpdate.category.value = res.category
                formUpdate.amount.value = res.amount
                openPopUpdate()
            } else {
                alert(res.text)
            }
        })


    } else {
        alert("ID is not valid!")
    }

}

function attachUpdateEvents() {
    const botones = document.querySelectorAll(".update-expense")
    if(botones){
        botones.forEach(boton => {
            if(boton){
                boton.addEventListener("click",function(e){
                    getDataForUpdate(this.dataset.id)
                })
            }
        })
    }
}

attachDeleteEvents()
attachUpdateEvents()