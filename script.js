function generateResponse() {
    const input = document.getElementById("userInput").value;

    let response;

    if (input.toLowerCase().includes("photosynthesis")) {
        response = "Photosynthesis is the process by which plants convert sunlight into energy.";
    } else if (input.toLowerCase().includes("newton")) {
        response = "Newton's laws describe the relationship between motion and forces.";
    } else {
        response = "Study Assistant: I would provide an explanation for this topic.";
    }

    localStorage.setItem("aiResponse", response);
    window.location.href = "result.html";
}