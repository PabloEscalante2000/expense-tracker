document.getElementById("button-pop").addEventListener("click",()=>{
    openPop()
})

document.getElementById("bakcground-pop").addEventListener("click",()=>{
    closePop()
})

document.getElementById("close-pop").addEventListener("click",()=>{
    closePop()
})

document.getElementById("bakcground-pop-update").addEventListener("click",()=>{
    closePopUpdate()
})

document.getElementById("close-pop-update").addEventListener("click",()=>{
    closePopUpdate()
})

function openPop(){
    document.getElementById("pop-add").classList.remove("translate-y-full")

    document.getElementById("bakcground-pop").classList.remove("hidden")
    document.getElementById("bakcground-pop").classList.add("fixed")
}

function closePop(){
    document.getElementById("pop-add").classList.add("translate-y-full")

    document.getElementById("bakcground-pop").classList.remove("fixed")
    document.getElementById("bakcground-pop").classList.add("hidden")
}

function openPopUpdate(){
    document.getElementById("pop-update").classList.remove("translate-y-full")

    document.getElementById("bakcground-pop-update").classList.remove("hidden")
    document.getElementById("bakcground-pop-update").classList.add("fixed")
}

function closePopUpdate(){
    document.getElementById("pop-update").classList.add("translate-y-full")

    document.getElementById("bakcground-pop-update").classList.remove("fixed")
    document.getElementById("bakcground-pop-update").classList.add("hidden")
}