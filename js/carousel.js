function addBtNext(carouselId) {
    let carousel = document.getElementById(carouselId)

    let btNext = document.createElement('button')
    btNext.className = 'carousel-control-next'
    btNext.setAttribute('type', 'button')
    btNext.setAttribute('data-bs-target', '#' + carousel.id)
    btNext.setAttribute('data-bs-slide', 'next')
    let iconNext = document.createElement('span')
    iconNext.className = 'carousel-control-next-icon'
    btNext.appendChild(iconNext)
    carousel.appendChild(btNext)
}

function fillCarousel(imagePath, images, carouselId, interval) {
    let carousel = document.getElementById(carouselId)

    carousel.className = "carousel slide"
    carousel.setAttribute('data-bs-ride', 'carousel')
    carousel.setAttribute('data-bs-interval', interval.toString())

    let indicators = document.createElement('div')
    indicators.className = 'carousel-indicators'
    carousel.appendChild(indicators)

    let inner = document.createElement('div')
    inner.className = 'carousel-inner'
    carousel.appendChild(inner)

    images.forEach((src, i) => {
        let button = document.createElement('button')
        button.setAttribute('type', 'button')
        button.setAttribute('data-bs-target', '#' + carouselId)
        button.setAttribute('data-bs-slide-to', i)
        if (i === 0) button.classList.add('active')
        indicators.appendChild(button)

        let item = document.createElement('div')
        item.className = 'carousel-item'
        if (i === 0) item.classList.add('active')
        inner.appendChild(item)

        let img = document.createElement('img')
        img.src = imagePath + '/' + images[i]
        img.className = 'd-block w-100'
        item.appendChild(img)
    })

    function bt(dir) {
        let bt = document.createElement('button')
        bt.className = 'carousel-control-' + dir
        bt.setAttribute('type', 'button')
        bt.setAttribute('data-bs-target', '#' + carouselId)
        bt.setAttribute('data-bs-slide', dir)
        let icon = document.createElement('span')
        icon.className = 'carousel-control-' + dir + '-icon'
        bt.appendChild(icon)
        carousel.appendChild(bt)
    }

    bt('next')
    bt('prev')
}