const $climate = document.getElementById("climate");
const $consuption = document.getElementById("consumption");
const $resorces = document.getElementById("resources");
const $people = document.getElementById("people");

$climate.onclick = () => {
    document.body.style.backgroundImage = "url('https://i1.faceprep.in/prograd-junior/climate-change-bg.png')";
    document.body.style.backgroundSize = "100% 100%";
    $climate.style.backgroundColor = "#2f80ed";
    $consumption.style.backgroundColor = "transparent";
    $resorces.style.backgroundColor = "transparent";
    $people.style.backgroundColor = "transparent";
}

$consumption.onclick = () => {
    document.body.style.backgroundImage = "url('https://i1.faceprep.in/prograd-junior/food-wastage-bg.png')";
    document.body.style.backgroundSize = "100% 100%";
    $climate.style.backgroundColor = "transparent";
    $consumption.style.backgroundColor = "#27ae60";
    $resorces.style.backgroundColor = "transparent";
    $people.style.backgroundColor = "transparent";
}

$resources.onclick = () => {
    document.body.style.backgroundImage = "url('')";
    document.body.style.backgroundSize = "100% 100%";
    $climate.style.backgroundColor = "transparent";
    $consumption.style.backgroundColor = "transparent";
    $resorces.style.backgroundColor = "transparent";
    $people.style.backgroundColor = "transparent";
}