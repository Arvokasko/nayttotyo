let lastClickedButton = null;

let lastClickedWindow = null;

function clearWindow() {
    //Haetaan ikkunan vasen puoli
    const windowLeft = document.getElementById("windowLeft");
    
    //Haetaan ikkunan oikea puoli
    const windowRight = document.getElementById("windowRight");
    
    //Asetetaan ikkunan vasen puoli valkoiseksi
    windowLeft.style.backgroundColor = "rgba(255, 255, 255, 0.082)";

    //Asetetaan ikkunan oikea puoli valkoiseksi
    windowRight.style.backgroundColor = "rgba(255, 255, 255, 0.082)";
}

function windowSelect(element) {
    //Poistetaan "selected" class viimeisimmästä ikkunasta jos sellainen on
    if (lastClickedWindow) {
        lastClickedWindow.classList.remove('selected');
    }
    
    //Lisätään "selected" class ikkunaan jota klikataan
    element.classList.add('selected');
    
    //Päivitetään viimeiseksi klikattu ikkuna elementtiin
    lastClickedWindow = element;
}

function colorSelect(button) {
    //Otetaan viimeisin painettu nappi "button" muuttujasta
    lastClickedButton = button;

    //Haetaan värinapin väri joka määrittää ikkunan värin
    let colorBtn = lastClickedButton.style.backgroundColor;

    //Asetetaan viimeiseen ikkunaan klikattu väri
    lastClickedWindow.style.backgroundColor = colorBtn;
}
