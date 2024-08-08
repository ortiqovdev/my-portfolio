// // loader section
// window.addEventListener('DOMContentLoaded', () => {
//     const loader = document.querySelector('.ring')

//     setTimeout(() => {
//         loader.style.opacity = '0'
//         setTimeout(() => {
//             loader.style.display = 'none'
//         }, 100)
//     }, 2000)
// })
window.addEventListener('DOMContentLoaded', () => {
    const loader = document.querySelector('.ring')
    const body = document.querySelector('body')

    body.style.overflow = 'hidden'

    setTimeout(() => {
        loader.style.opacity = '0'
        setTimeout(() => {
            loader.style.display = 'none'
            body.style.overflow = 'auto'
        }, 100)
    }, 2000)
})
