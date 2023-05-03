const slider = document.querySelector('.slider-container')
const slides = Array.from(slider.children)
const btnLeft = document.querySelector('.btn-left')
const btnRight = document.querySelector('.btn-right')

//set the slides next to one another

const setSlidesPosition = (slide, index) => {
  slide.style.left = `${index * 105}%`
}
slides.forEach(setSlidesPosition)

// move carousel

let counter = 2

btnLeft.addEventListener('click', function () {
  counter--
  carousel()
})

btnRight.addEventListener('click', function () {
  counter++
  carousel()
})

function carousel() {
  if (counter === slides.length) {
    counter = 0
  }

  if (counter < 0) {
    counter = slides.length - 1
  }

  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 105}%)`
    slide.style.transition = 'all 0.4s'
  })
}
