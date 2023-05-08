const input = document.getElementById("input");
input.style.color ="green";
console.log("hello")
input.addEventListener("change", (event) => {
    console.log(event.target.value)
    const searchedField = event.target.value
    const query=searchedField.replace(/\s+/g,"+")
search(query);   
});

const search = (q) =>{
    const googleUrl = `https://www.google.com/search?q=${q}`;
    window.open(googleUrl, '_blank');
    clearInput();
}

const clearInput = () =>{
    input.value =""
}