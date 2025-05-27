function afficheCV() {
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

function cacheCV() {
    cv.style.height = "0%"
    cv.style.width = "0%"

    retourCV.style.height = "0%"
    retourCV.style.width = "0%"
    retourCV.style.border = "none"

    spanRetourCV.style.fontSize = "0"
    spanRetourCV.style.transitionDelay = "0s"

}

function deplace() {

    if (document.getElementById("spanProjet").style.backgroundColor == "var(--color2)") {
        spanProjet.style.backgroundColor = "var(--white)"
        spanProjet.style.color = "var(--black)"
        window.location.href = "projets.html"
    }
    else if (document.getElementById("projet").style.marginTop != "180px") {
        projet.style.transition = "0.5s"
        projet.style.marginTop = "32vh"
        projet.style.transform = "none"

        spanProjet.style.transition = "transform 0.5s"
        spanProjet.style.transform = "rotate(180deg)"
        spanProjet.style.backgroundColor = "var(--color1)"
        spanProjet.style.color = "var(--white)"
    }
}

function retourne() {
    if (document.getElementById("projet").style.marginTop == "32vh") {
        spanProjet.style.transform = "rotate(360deg)"
        spanProjet.style.backgroundColor = "var(--color2)"
    }
}

// function entrer(lieu, event) {
//     const scene = document.getElementById("grandeScene"); //la c'est l'image que tu as de base en fond
//     const bg = document.getElementById("cv");

//     const x = event.clientX;  //c'est pour faire le zoom sur l'endroit ou tu clique
//     const y = event.clientY;

//     const xPercent = (x / window.innerWidth) * 100;
//     const yPercent = (y / window.innerHeight) * 100;

//     scene.style.transformOrigin = { xPercent }; { yPercent };

//     scene.classList.add("zoom");
//     scene.classList.remove("no-zoom");

//     scene.classList.remove("zoom");
//     scene.classList.add("no-zoom");
// }