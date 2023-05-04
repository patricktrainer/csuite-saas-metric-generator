let lowerBound = 0;
let upperBound = 100;

function getRandomMetric(min, max) {
    return (Math.random() * (max - min) + min).toFixed(2);
}

function updateRandomMetric() {
    document.getElementById("randomMetric").textContent = getRandomMetric(lowerBound, upperBound);
}

document.getElementById("tooHigh").addEventListener("click", () => {
    upperBound = parseFloat(document.getElementById("randomMetric").textContent);
    updateRandomMetric();
});

document.getElementById("tooLow").addEventListener("click", () => {
    lowerBound = parseFloat(document.getElementById("randomMetric").textContent);
    updateRandomMetric();
});

document.getElementById("right").addEventListener("click", () => {
    alert("You're a great engineer!");
});

updateRandomMetric();
