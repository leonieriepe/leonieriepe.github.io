function create(name, className) {
    let elem = document.createElement(name)
    elem.className = className
    return elem
}

function addFooter() {
    let footer = document.getElementById('footer')
    footer.className = "d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top"

    footer.innerHTML = `
        <p class="col-md-4 mb-0 text-muted">&copy; 2022-2023 Leonie Riepe Fotografie</p>
        
        <ul class="nav col-md-4 justify-content-end">
            <li class="nav-item"><a href="./impressum.html" class="nav-link px-2 text-muted">Impressum & Datenschutz</a></li>
        </ul>
    `
}

function addNavbar(active) {
    let navbar = document.createElement('nav')
    navbar.className = 'navbar navbar-expand-sm'

    navbar.innerHTML = `
    <div class="container">
        <a class="navbar-brand" href="index.html">Leonie Riepe</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-sm-0">
                <li class="nav-item dropdown ms-sm-3 me-sm-3">
                    <a id="nvPortfolio" class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                        Portfolio
                    </a>
                    <ul class="dropdown-menu">
                        <li><a id="nvGallery" class="dropdown-item" href="gallery.html">Gallerie</a></li>
                        <li><a id="nvPunk" class="dropdown-item" href="bachelor.html">Punk - A (Fake) History</a></li>
                    </ul>
                </li>
                <li class="nav-item ms-sm-3 me-sm-3">
                    <a class="nav-link" id="nvAbout" href="./about.html">Über mich</a>
                </li>
                <li class="nav-item ms-sm-3 me-sm-3">
                    <a class="nav-link" id="nvContact" href="./contact.html">Kontakt</a>
                </li>
                <li class="nav-item ms-sm-3 me-sm-3">
                    <a class="nav-link" href="https://www.instagram.com/leonieriepe_fotografie/" target="_blank"
                       rel="noopener noreferrer">
                        <i class="bi bi-instagram" style="font-size: 1rem;"></i>
                    </a>
                </li>
            </ul>
        </div>
</nav>
    `

    document.body.insertBefore(navbar, document.body.firstChild)

    if (!Array.isArray(active)) { active = [active] }
    active.forEach((id) => {
        document.getElementById(id).classList.add('active')
    })


}