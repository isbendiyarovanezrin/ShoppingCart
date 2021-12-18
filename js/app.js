let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let data = JSON.parse(this.responseText)
        console.log(data)
    }
};
xhttp.open("GET", "data/products.json", true);
xhttp.send();