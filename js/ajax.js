document.getElementById("create-form").addEventListener("submit",function(e){
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
            }
        } else {
            alert("¡Hubo un error!")
        }
    })
}