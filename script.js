function accueil() {
    window.location.href = 'index.html'
}

function projet() {
    window.location.href = 'projets.html'
}

function page(e) {
    window.location.href = e
}

function otherPage(e) {
    window.open(e)
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
    retourCV.style.border = "1px solid var(--white)"

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
        spanProjet.style.backgroundColor = "var(--brown)"
        spanProjet.style.color = "var(--white)"
    }
}

function changePageProjet(e) {

    const spanProjet = document.getElementById("spanProjet");

    if (e.style.marginTop != "32vh") {
        {
            e.style.transition = "0.5s"
            e.style.marginTop = "32vh"
            e.style.transform = "none"

            spanProjet.style.transition = "transform 0.5s"
            spanProjet.style.transform = "rotate(180deg)"
            spanProjet.style.backgroundColor = "var(--white)"
            spanProjet.style.color = "var(--black)"
        }
    }
    else if (spanProjet.style.backgroundColor == "var(--brown)") {
        // spanProjet.style.backgroundColor = "var(--white)"
        window.location.href = "projets.html"
    }
}

// PAGE ACCUEIL

// PAGE SAVOIR FAIRE 

const minWidth = 900;

function changeZoom() {

    const blocks = document.getElementsByClassName("block");
    const width = window.innerWidth;

    console.log(width)

    for (const e of blocks) {
        let elemWidth = e.style.width;
        if (elemWidth == "100%") {
            if (width < minWidth) {
                e.getElementsByClassName("detail")[0].style.display = "block"
                e.getElementsByClassName("detail")[0].style.flexDirection = "column"
                e.getElementsByClassName("illustrationSavoirFaire")[0].style.width = "92%"
                e.getElementsByClassName("illustrationSavoirFaire")[0].style.objectFit = "cover"
            }
            else if (width > minWidth) {
                e.getElementsByClassName("detail")[0].style.display = "flex"
                e.getElementsByClassName("detail")[0].style.flexDirection = "row"
                e.getElementsByClassName("illustrationSavoirFaire")[0].style.width = "50%"
                e.getElementsByClassName("illustrationSavoirFaire")[0].style.objectFit = "contain"
            }
        }

    }
}

window.onresize = changeZoom;

function zoom(e) {

    var width = window.innerWidth;

    if (e.style.width == "100%") {
        e.style.width = "250px"
        e.style.height = "250px"
        e.style.overflowY = "hidden"
        e.getElementsByClassName("illustrationSavoirFaire")[0].style.height = "170px"
        e.getElementsByClassName("txtSavoirFaire")[0].style.fontSize = "0";
        e.style.cursor = "pointer";

        e.getElementsByClassName("illustrationSavoirFaire")[0].style.objectFit = "cover"
        e.getElementsByClassName("illustrationSavoirFaire")[0].style.width = "92%"
        e.getElementsByClassName("detail")[0].style.display = "block"
        e.getElementsByClassName("detail")[0].style.flexDirection = "column"
    }
    else {
        e.style.width = "100%"
        e.style.height = "480px"
        e.style.opacity = "1"
        e.getElementsByClassName("txtSavoirFaire")[0].style.fontSize = "medium";
        e.style.overflowY = "auto"
        e.style.cursor = "auto";

        if (width > minWidth) {
            e.getElementsByClassName("detail")[0].style.display = "flex"
            e.getElementsByClassName("detail")[0].style.flexDirection = "row"
            e.getElementsByClassName("illustrationSavoirFaire")[0].style.width = "50%"
            e.getElementsByClassName("illustrationSavoirFaire")[0].style.objectFit = "contain"

        }

        e.getElementsByClassName("illustrationSavoirFaire")[0].style.height = "auto"

    }
}

function opaque(e) {

    if (e.style.width != "100%") {
        e.style.opacity = "0.8"
    }
    else {
        e.style.opacity = "1"
    }

}

function clair(e) {
    e.style.opacity = "1"
}

// PAGE SAVOIR FAIRE 