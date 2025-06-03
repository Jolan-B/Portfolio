function accueil() {
    window.location.href = 'index.html'
}

// PAGE ACCUEIL

function afficheCV() {

    const cv = document.getElementById("cv");
    const cvPdf = document.getElementById("cvPdf");
    const retourCV = document.getElementById("retourCV");
    const spanRetourCV = document.getElementById("spanRetourCV");

    cv.style.height = "100%"
    cv.style.width = "100%"

    cvPdf.style.height = "90%"
    cvPdf.style.width = "100%"
    cvPdf.style.opacity = "1"

    retourCV.style.height = "6%"
    retourCV.style.width = "10%"
    retourCV.style.border = "1px solid var(--color1)"

    spanRetourCV.style.fontSize = "16px"
    spanRetourCV.style.transitionDelay = "1s"
}

function cacheCV(e) {

    const cv = document.getElementById("cv");
    const spanRetourCV = document.getElementById("spanRetourCV");

    cv.style.height = "0%"
    cv.style.width = "0%"

    e.style.height = "0%"
    e.style.width = "0%"
    e.style.border = "none"

    spanRetourCV.style.fontSize = "0"
    spanRetourCV.style.transitionDelay = "0s"

}

function deplace(e) {
    if (e.style.marginTop == "32vh") {

        const spanProjet = document.getElementById("spanProjet");

        spanProjet.style.transform = "rotate(360deg)"
        spanProjet.style.backgroundColor = "var(--color2)"
        spanProjet.style.color = "var(--black)"
    }
}

function changePage(e) {

    const spanProjet = document.getElementById("spanProjet");

    if (e.style.marginTop != "32vh") {
        {
            e.style.transition = "0.5s"
            e.style.marginTop = "32vh"
            e.style.transform = "none"

            spanProjet.style.transition = "transform 0.5s"
            spanProjet.style.transform = "rotate(180deg)"
            spanProjet.style.backgroundColor = "var(--color1)"
            spanProjet.style.color = "var(--white)"
        }
    }
    else if (spanProjet.style.backgroundColor == "var(--color2)") {
        spanProjet.style.backgroundColor = "var(--white)"
        window.location.href = "projets.html"
    }
}

// PAGE ACCUEIL