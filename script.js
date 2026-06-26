ffunction analyzeExpense() {

    const category =
        document.getElementById("category").value;

    const amount =
        Number(document.getElementById("amount").value);

    let insight = "";

    if (!category || amount <= 0) {
        alert("Please enter valid data.");
        return;
    }

    if (
        category.toLowerCase() === "food" &&
        amount > 3000
    ) {
        insight =
        "Food spending is higher than average. Consider a monthly food budget.";
    }

    else if (
        category.toLowerCase() === "shopping" &&
        amount > 5000
    ) {
        insight =
        "Shopping expenses appear high. Review discretionary purchases.";
    }

    else if (
        category.toLowerCase() === "transport" &&
        amount > 2000
    ) {
        insight =
        "Transport costs are above average. Explore cost-saving travel options.";
    }

    else {
        insight =
        "Your spending appears balanced in this category.";
    }

    localStorage.setItem(
        "aiResponse",
        insight
    );

    window.location.href =
        "result.html";
}