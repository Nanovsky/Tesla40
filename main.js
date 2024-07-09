import './style.css'

const updateHash = () => {
    let sHash = document.location.hash.slice(1);

    // Handle default
    if (!sHash) {
        sHash = "37";
        document.location.hash = sHash;
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
}

updateHash();
addEventListener("hashchange", updateHash);