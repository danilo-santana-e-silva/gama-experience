//Adaptado W3Schools Get JSON FROM URL

    var xmlhttp = new XMLHttpRequest();
    var url = "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72";
    var cards = "";
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            cards = JSON.parse(this.responseText);
            cards.forEach(myCard)
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

    function myCard(value) {
        if (typeof counter == 'undefined') {
            counter = 0;
        }
        
        document.getElementById("grid-produtos").innerHTML +=
            "<div class=\"col mb-4\">" +
            "<div id=\"card-" + counter++ + "\" class=\"card h-100 shadow\">" +
            "<img src=\"" + value.photo + "\" class=\"card-img-top\" alt=\"...\"> " +
            "<div class=\"card-body text-center\"> " +
            "           <h3 class=\"card-title\">" + value.property_type + "</h3> " +
            "           <p class=\"card-text\"> " + value.name + " </p> " +
            "           <a href=\"#\" class=\"btn btn-primary\"> R$" + value.price + "</a> " +
            "        </div> " +
            "   </div>"

    }
