let body = document.querySelector('body')

let introBtn = document.getElementById('intro')
introBtn.addEventListener('click', e => {
    e.preventDefault()
    console.log(e)
    document.getElementById('introTab').classList.remove('hide')
    document.querySelector('main').classList.add('hide') // paslepia homepage turinį
    document.querySelector('nav').classList.add('hide')
})

let workBtn = document.getElementById('work')
workBtn.addEventListener('click', e => {
    e.preventDefault()
    console.log(e)
    document.getElementById('workTab').classList.remove('hide')
    document.querySelector('main').classList.add('hide') // paslepia homepage turinį
    document.querySelector('nav').classList.add('hide')
})

let aboutBtn = document.getElementById('about')
aboutBtn.addEventListener('click', e => {
    e.preventDefault()
    console.log(e)
    document.getElementById('aboutTab').classList.remove('hide')
    document.querySelector('main').classList.add('hide')
    document.querySelector('nav').classList.add('hide')
})

let contactBtn = document.getElementById('contact')
contactBtn.addEventListener('click', e => {
    e.preventDefault()
    console.log(e)
    document.getElementById('contactTab').classList.remove('hide')
    document.querySelector('main').classList.add('hide')
    document.querySelector('nav').classList.add('hide')
})

let closeBtns = document.querySelectorAll('.close') // stebi visus close paspaudimus
closeBtns.forEach(item => {
    item.addEventListener('click', e => {
        e.preventDefault()
        document.querySelector('main').classList.remove('hide') // išslaptina homepage turinį
        document.querySelector('nav').classList.remove('hide')
        document.querySelectorAll('.tab').forEach(tab => { // prideda tabams hide klases
            tab.classList.add('hide')
        })
    })
})