// V1
document.querySelector(".button").addEventListener("click", calculateResult);

function calculateResult() {
    // Get selected values from the dropdowns
    const threat = parseFloat(document.getElementById("Threat").value);
    const association = parseFloat(document.getElementById("Association").value);
    const capability = parseFloat(document.getElementById("Capability").value);
    const activityLevel = parseFloat(document.getElementById("ActivityLevel").value);
    const activeSince = parseFloat(document.getElementById("ActiveSince").value);
    const apt = parseFloat(document.getElementById("APT").value);
    const zeroDay = parseFloat(document.getElementById("ZeroDay").value);
    const attackType = parseFloat(document.getElementById("AttackType").value);
    const intent = parseFloat(document.getElementById("Intent").value);

    const recentNews = parseFloat(document.getElementById("RecentNews").value);
    const targetSector = parseFloat(document.getElementById("TargetSector").value);
    const targetCountry = parseFloat(document.getElementById("TargetCountry").value);
    const targetGeography = parseFloat(document.getElementById("TargetGeography").value);
    const technologyStack = parseFloat(document.getElementById("TechnologyStack").value);
    const newsTimeFrame = parseFloat(document.getElementById("NewsTimeFrame").value);
    const intelSource = parseFloat(document.getElementById("IntelSource").value);
    const intelAccuracy = parseFloat(document.getElementById("IntelAccuracy").value);
    const multipleIntels = parseFloat(document.getElementById("MultipleIntels").value);

    // Calculate threat score and likelihood score
    const threatScore = threat + association + capability + activityLevel + activeSince + apt + zeroDay + attackType + intent;
    const likelihoodScore = recentNews + targetSector + targetCountry + targetGeography + technologyStack + newsTimeFrame + intelSource + intelAccuracy + multipleIntels;

    // Calculate the multiplication of threat score and likelihood score
    const result = threatScore * likelihoodScore;

    // Determine the threat level based on the result value
    let threatLevel;
    if (result <= 2) {
        threatLevel = "LOW";
        document.getElementById("threatLevelvalue").style.backgroundColor = "green";
        document.getElementById("threatLevelvalue").style.color = "white";
    } else if (result > 2 && result < 5) {
        threatLevel = "MEDIUM";
        document.getElementById("threatLevelvalue").style.backgroundColor = "yellow";
        document.getElementById("threatLevelvalue").style.color = "black";
    } else if (result >= 5 && result < 15) {
        threatLevel = "HIGH";
        document.getElementById("threatLevelvalue").style.backgroundColor = "orange";
        document.getElementById("threatLevelvalue").style.color = "white";
    } else if (result >= 15) {
        threatLevel = "CRITICAL";
        document.getElementById("threatLevelvalue").style.backgroundColor = "red";
        document.getElementById("threatLevelvalue").style.color = "white";
    } else {
        threatLevel = "UNKNOWN"; // or any default value for an invalid result
        document.getElementById("threatLevelvalue").style.backgroundColor = "initial"; // Reset background color to default
        document.getElementById("threatLevelvalue").style.color = "initial"; // Reset text color to default
    }

    // Display the threat level in the element with id "threatLevelvalue"
    document.getElementById("threatLevelvalue").textContent = threatLevel;

    // Display the results in the result containers
    document.getElementById("threatScoreResult").textContent = threatScore;
    document.getElementById("threatScoreResult").style.backgroundColor = "#dc9e9a";

    document.getElementById("likelihoodScoreResult").textContent = likelihoodScore;
    document.getElementById("likelihoodScoreResult").style.backgroundColor = "#dc9e9a";


    // Display the numeric result in the element with id "resultValue"
    document.getElementById("resultValue").textContent = result.toFixed(2);
}
