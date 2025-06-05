document.getElementById("button-pop").addEventListener("click",()=>{
    openPop()
})

document.getElementById("bakcground-pop").addEventListener("click",()=>{
    closePop()
})

document.getElementById("close-pop").addEventListener("click",()=>{
    closePop()
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