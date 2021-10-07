const clientWidth = document.documentElement.clientWidth
const toggleWrapper = document.querySelector('.toggleWrapper')
const toggleCircle = document.querySelector('.toggleCircle')
const discount = document.querySelector('.discount')
const rangeSlider = document.querySelector('.rangeSlider')
const rangeList = document.getElementById('rangeList')
const pageViews = document.querySelector('.pageviews')


// Create / position div with price tag based on client's screen size.
const createPriceDiv = () => {

    var newDiv = document.createElement('div');

    newDiv.classList.add('price')

    newDiv.innerHTML = `<p class="priceP"> <span class="priceText"> €16.00 </span> <span
    class="priceTextPosition"> <span class="monthText"> / month </span> </span></p>`

    if(clientWidth > 900) {
        pageViews.appendChild(newDiv)
    } else if(clientWidth < 900) {
        rangeSlider.after(newDiv)
    }
}

createPriceDiv()



// monthly/anually toggle
toggleWrapper.addEventListener('click', e => {
    e.preventDefault()
    toggleCircle.classList.toggle('anually')
})


rangeSlider.addEventListener('input', e => {

    console.log(rangeSlider.value)
})
























