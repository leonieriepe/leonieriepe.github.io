galleryImages = [
    [
        "images/gallery/t7.jpg",
        "images/gallery/s3.jpg",
        "images/gallery/d6.jpg",
        "images/gallery/m4.jpg",
        "images/gallery/s4.jpg",
    ],
    [
        "images/gallery/d7.jpg",
        "images/gallery/m2.jpg",
        "images/gallery/v11.jpg",
        "images/gallery/d4.jpg",
        "images/gallery/j5.jpg",
    ],
    [
        "images/gallery/j6.jpg",
        "images/gallery/d9.jpg",
        "images/gallery/t6.jpg",
        "images/gallery/postcard.jpg",
        "images/gallery/t2.jpg",
    ]
]

contactImages = [
    "images/about/leo.jpg"
]

landingImages = [
    "images/landing/landing.jpg",
]

function addGalleryImages() {
    const row = document.getElementById('imageRow')
    for (let i = 0; i < 3; i++) {
        const div = document.createElement('div')
        div.className = 'col-12 col-md-4'
        for (let j = 0; j < galleryImages[i].length; ++j) {
            const img = document.createElement('img');
            img.src = galleryImages[i][j]
            img.className = 'img-fluid mb-4'
            div.appendChild(img)
        }
        row.appendChild(div)
    }
}

function preload(imgs) {
    const preloaded = []
    for (let i = 0; i < imgs.length; i++) {
        preloaded[i] = new Image()
        preloaded[i].src = imgs[i]
    }
}

function preloadImages() {
    preload(landingImages)
    preload(contactImages)

    for (let i = 0; i < 3; i++) {
        preload(galleryImages[i])
    }
}
