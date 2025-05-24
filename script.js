function afficheCV() {
    cv.style.transition = "1s"
    cv.style.display = "block"
}

function cacheCV() {
    cv.style.display = "none"
}

function deplace() {

    if (document.getElementById("spanProjet").style.backgroundColor == "var(--color2)") {
        spanProjet.style.backgroundColor = "var(--white)"
        spanProjet.style.color = "var(--black)"
        window.location.href = "projets.html"
    }
    else {
        projet.style.transition = "0.5s"
        spanProjet.style.transition = "transform 0.5s"
        spanProjet.style.transform = "rotate(180deg)"
        projet.style.marginTop = "180%"
        spanProjet.style.backgroundColor = "var(--color1)"
        spanProjet.style.color = "var(--white)"
    }
}

function retourne() {
    if (document.getElementById("projet").style.marginTop == "180%") {
        spanProjet.style.transform = "rotate(360deg)"
        spanProjet.style.backgroundColor = "var(--color2)"
    }
}