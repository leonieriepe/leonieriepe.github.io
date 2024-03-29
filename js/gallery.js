galleryImages = [
    [
        "images/gallery/mp4.jpg",
        "images/gallery/c12.jpg",
        "images/gallery/mp6.jpg",
        "images/gallery/mp2.jpg",
        "images/gallery/c5.jpg",
        "images/gallery/b4.jpg",
        "images/gallery/daecher10.jpg",
        "images/gallery/t7.jpg",
        "images/gallery/s3.jpg",
        "images/gallery/vb2.jpg",
        "images/gallery/d6.jpg",
        "images/gallery/m4.jpg",
        "images/gallery/s4.jpg",
        "images/gallery/b1.jpg",
        "images/gallery/vb3.jpg",
        "images/gallery/uud9.jpg",
        "images/gallery/b2.jpg",
        "images/gallery/c2.jpg",
    ],
    [
        "images/gallery/d7.jpg",
        "images/gallery/mp7.jpg",
        "images/gallery/daecher8.jpg",
        "images/gallery/mp5.jpg",
        "images/gallery/c13.jpg",
        "images/gallery/uud11.jpg",
        "images/gallery/m2.jpg",
        "images/gallery/v11.jpg",
        "images/gallery/c9.jpg",
        "images/gallery/d4.jpg",
        "images/gallery/c10.jpg",
        "images/gallery/daecher9.jpg",
        "images/gallery/j5.jpg",
        "images/gallery/daecher6.jpg",
        "images/gallery/mp11.jpg",
        "images/gallery/ts2.jpg",
        "images/gallery/c11.jpg",
        "images/gallery/mp10.jpg",
    ],
    [
        "images/gallery/daecher1.jpg",
        "images/gallery/c8.jpg",
        "images/gallery/ts6.jpg",
        "images/gallery/j6.jpg",
        "images/gallery/mp8.jpg",
        "images/gallery/uud4.jpg",
        "images/gallery/d9.jpg",
        "images/gallery/uud1.jpg",
        "images/gallery/t6.jpg",
        "images/gallery/uud12.jpg",
        "images/gallery/c6.jpg",
        "images/gallery/uud13.jpg",
        "images/gallery/b3.jpg",
        "images/gallery/daecher5.jpg",
        "images/gallery/postcard.jpg",
        "images/gallery/uud14.jpg",
        "images/gallery/t2.jpg",
        "images/gallery/b5.jpg",
        "images/gallery/c1.jpg",
        "images/gallery/ts5.jpg",
    ]
]

contactImages = [
    "images/about/leo.jpg"
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
    for (let i = 0; i < 3; i++) {
        preload(galleryImages[i])
    }

    preload(contactImages)
}
