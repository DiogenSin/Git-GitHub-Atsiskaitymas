let body = document.querySelector('body')

let introBtn = document.getElementById('intro')
introBtn.addEventListener('click', e => {
    e.preventDefault()
    console.log(e)
    document.getElementById('introTab').classList.remove('hide')
})

let workBtn = document.getElementById('work')
workBtn.addEventListener('click', e => {
    e.preventDefault()
    console.log(e)
    document.getElementById('workTab').classList.remove('hide')
})

let aboutBtn = document.getElementById('about')
aboutBtn.addEventListener('click', e => {
    e.preventDefault()
    console.log(e)
    document.getElementById('aboutTab').classList.remove('hide')
})

let contactBtn = document.getElementById('contact')
contactBtn.addEventListener('click', e => {
    e.preventDefault()
    console.log(e)
    document.getElementById('contactTab').classList.remove('hide')
})

let closeBtns = document.querySelectorAll('.close') // stebi visus close paspaudimus
closeBtns.forEach(item => {
    item.addEventListener('click', e => {
        e.preventDefault()
        document.querySelectorAll('.tab').forEach(tab => { // prideda tabams hide klases
            tab.classList.add('hide')
        })
    })
})