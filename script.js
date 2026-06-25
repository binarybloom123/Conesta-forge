function generateResponse() {

    const userInput =
        document.getElementById("userInput").value;

    const response =
        "AI Response: " + userInput;

    localStorage.setItem(
        "aiResponse",
        response
    );

    window.location.href =
        "result.html";
}