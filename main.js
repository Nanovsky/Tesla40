import './style.css'


const updateHash = () => {
    let sHash = document.location.hash.slice(1);

    // Handle default
    if (!sHash) {
        sHash = "37";
    }

    updatePercent(sHash);
}

const updatePercent = (sPercent) => {
    document.getElementById("fill").style.width = `${sPercent}%`;
    document.getElementById("percent").innerHTML = `${sPercent} %`;

    let sFillColor = "#68f79d";
    if (parseInt(sPercent) <= 20) {
        sFillColor = "#fbad18";
    }
    document.getElementById("fill").style.backgroundColor = sFillColor;
    document.location.hash = sPercent;
}

updateHash();
addEventListener("hashchange", updateHash);

// Handle buttons
document.getElementById("button_minus").addEventListener("click", () => {
    let sHash = document.location.hash.slice(1),
        iHash = parseInt(sHash);

    if (iHash > 0) {
        iHash--;
    }

    updatePercent(iHash);
});

document.getElementById("button_plus").addEventListener("click", () => {
    let sHash = document.location.hash.slice(1),
        iHash = parseInt(sHash);

    if (iHash < 100) {
        iHash++;
    }

    updatePercent(iHash);
});