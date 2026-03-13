document.getElementById("btn").addEventListener("click", () => {
    const msgElement = document.getElementById("msg");
    msgElement.innerText = "Deployment Successful! CI/CD is working! ✅";
    msgElement.style.color = "green";
    msgElement.style.fontWeight = "bold";
});