document.addEventListener("keydown", function (event) {
    if (event.ctrlKey && event.key === "Enter") {
        const button = document.querySelector(".problems_submit_button__6QoNQ");
        if (button) {
            button.click();
        }
    }
    if (event.ctrlKey && event.key === ";") {
        const button = document.querySelector(".problems_compile_button__Lfluz");
        if (button) {
            button.click();
        }
    }
});
