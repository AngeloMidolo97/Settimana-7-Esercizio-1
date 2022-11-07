var btn = document.getElementById("inserisci");
var listaUtenti = [];

function Nomi(_nome, _cognome, _data) {
    this.nome = _nome;
    this.cognome = _cognome;
    this.data = _data;
    this.eta = calcolaEta();
}

btn.addEventListener("click", () => {
    let newNome = document.getElementById("nome").value;
    let newCognome = document.getElementById("cognome").value;
    let newData = document.getElementById("data").value;

    let newUtente = new Nomi(newNome, newCognome, newData);
    listaUtenti.push(newUtente);
    console.log(listaUtenti);

    stampaNomi();
});

function stampaNomi() {
    let utenti = document.getElementById("utenti");
    utenti.innerHTML = "";

    listaUtenti.forEach((elemento) => {
        utenti.innerHTML += `<tr><td class="text-light">${elemento.nome} ${elemento.cognome}</td><td class="text-light">${elemento.eta}</td></tr>`;
    });
}

function calcolaEta() {
    let dataNascita = new Date(document.getElementById("data").value);

    let dataOggi = new Date();
    let annoAttuale = dataOggi.getFullYear();
    let annoNascita = dataNascita.getFullYear();

    let meseAttuale = dataOggi.getMonth();
    let meseNascita = dataNascita.getMonth();

    let giornoAttuale = dataOggi.getDate();
    let giornoNascita = dataNascita.getDate();

    var anni = annoAttuale - annoNascita;

    if (meseNascita > meseAttuale) {
        return anni - 1;
    } else if ((meseNascita = meseAttuale && giornoNascita < giornoAttuale)) {
        return anni - 1;
    } else {
        return anni;
    }
}
