console.log("Script linkado!")

function verificarInputs() {

    let nomeCompleto = document.getElementById("nomecompleto").value;
    let telefoneFixo = document.getElementById("telefonefixo").value;
    let telefoneCelular = document.getElementById("telefonecelular").value;
    let urlImagem = document.getElementById("url").value;
    let dataNascimento = document.getElementById("datanascimento").value;
    let email = document.getElementById("email").value;
    let cep = document.getElementById("cep").value;
    let cidade = document.getElementById("cidade").value;
    let instagram = document.getElementById("instagram").value;
    let github = document.getElementById("github").value;

    console.log(nomeCompleto);
    console.log(telefoneFixo);
    console.log(telefoneCelular);
    console.log(urlImagem);
    console.log(dataNascimento);
    console.log(email);
    console.log(cep);
    console.log(cidade);
    console.log(instagram);
    console.log(github);

    if(nomeCompleto == "" || telefoneFixo == "" || telefoneCelular =="" || urlImagem == "" || dataNascimento == "" || email == "" || cep == "" || cidade == "" || instagram == "" || github == ""){

        console.log("Os dados estão vazios", "erro");
        envieMsg("Preencha todos os campos");

        return true;
    }else {
        console.log("Os dados não estão em branco");
        envieMsg("Cadastrado", "sucesso");
        return false;
    }

}

function envieMsg(msg, tipo) {
   
    let msgDiv = document.getElementById("msg");
    msgDiv.innerHTML = "";

    let msgParaTela = `
        <p class='${tipo}'>${msg}</p>
    `
    msgDiv.innerHTML += msgParaTela;

    setTimeout(function () {
        msgDiv.innerHTML = "";
    }, 3000);
}

class Agenda {
    constructor(nomeCompleto, telefoneFixo, telefoneCelular, urlImagem, dataNascimento, email, cep, cidade, instagram, github){
        this.nomeCompleto = nomeCompleto;
        this.telefoneFixo = telefoneFixo;
        this.telefoneCelular = telefoneCelular;
        this.urlImagem = urlImagem;
        this.dataNascimento = dataNascimento;
        this.email = email;
        this.cep = cep;
        this.cidade = cidade;
        this.instagram= instagram;
        this.github = github;
    }
    calculateAge() {
        let today = new Date();
        let birthdate = new Date(this.dataNascimento);
        let age = today.getFullYear() - birthdate.getFullYear();
        let month = today.getMonth() - birthdate.getMonth();

        if (month < 0 || (month === 0 && today.getDate() < birthdate.getDate())) {
            age--;
        }
        console.log("Passou pelo calculateAge() da class User");
        return age;
        
    }
    getZodiacSign() {
        let birthdate = new Date(this.dataNascimento);
        let day = birthdate.getDate();
        let month = birthdate.getMonth() + 1;
        console.log("Passou pelo getSigno() da class User");

        if ((month == 1 && day <= 20) || (month == 12 && day >= 22)) {
            return "Capricórnio ♑";
        } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
            return "Aquário ♒";
        } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
            return "Peixes ♓";
        } else if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
            return "Áries ♈";
        } else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
            return "Touro ♉";
        } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
            return "Gêmeos ♊";
        } else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
            return "Câncer ♋";
        } else if ((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
            return "Leão ♌";
        } else if ((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
            return "Virgem ♍";
        } else if ((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
            return "Libra ♎";
        } else if ((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
            return "Escorpião ♏";
        } else if ((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
            return "Sagitário ♐";
        }
    }
    isPossibleClient() {
        const age = this.age;
        console.log("Passou pelo isPossibleClient? da class User");
        if (age >= 18 && age <= 26) {
            return "Sim ✅";
        }
        return "Não ❌";
    }

    
}
const agendaTeste = new Agenda("Marcelo", "11111111", "11111111", "link", "data", "email", "1111111", "cidade", "instagram", "github")

console.log(agendaTeste);


function cadastrarAgenda(){

    let nomeCompleto = document.getElementById("nomecompleto").value;
    let telefoneFixo = document.getElementById("telefonefixo").value;
    let telefoneCelular = document.getElementById("telefonecelular").value;
    let urlImagem = document.getElementById("url").value;
    let dataNascimento = document.getElementById("datanascimento").value;
    let email = document.getElementById("email").value;
    let cep = document.getElementById("cep").value;
    let cidade = document.getElementById("cidade").value;
    let instagram = document.getElementById("instagram").value;
    let github = document.getElementById("github").value;

    const agenda = new Agenda(nomeCompleto, telefoneFixo, telefoneCelular, urlImagem, dataNascimento, email, cep, cidade, instagram, github);

    console.log(agenda);

    bibliotecaAgenda.add(agenda);


}

class listaAgenda {
    constructor(){
        this.listaAgendaArray = [];
    }

    add(parametro) {
        if(verificarInputs()) {
            envieMsg("Preencha todos os campos", "erro");
        }else {
            this.listaAgendaArray.push(parametro);
            limparInputs()
            envieMsg("Cadastrado com sucesso", "sucesso");
            console.log(this.listaAgendaArray);
        }
    }
}

const bibliotecaAgenda = new listaAgenda();

console.log(bibliotecaAgenda);

function limparInputs(){
    console.log("Usei a função limparInputs()")

    document.getElementById("nomecompleto").value = "";
    document.getElementById("telefonefixo").value = "";
    document.getElementById("telefonecelular").value = "";
    document.getElementById("url").value = "";
    document.getElementById("datanascimento").value = "";
    document.getElementById("email").value = "";
    document.getElementById("cep").value = "";
    document.getElementById("cidade").value = "";
    document.getElementById("instagram").value = "";
    document.getElementById("github").value = "";
}

function renderizarConteudo(){
    
    const listaHTML = document.getElementById("container-lista");
    listaHTML.innerHTML = "";

    let array = bibliotecaAgenda.listaAgendaArray;

    console.log(array);

    array.forEach(agenda => {

        const agendaDiv = `
        <div class="agendaDetalhe">
        <h1>Detalhes</h1>
        <img src="${agenda.urlImagem}" alt="${agenda.nomeCompleto}">
        <h1>${agenda.nomeCompleto}</h1>
        <p></p>
        <p>Celular:${agenda.telefoneCelular}</p>
        <p>Telefone:${agenda.telefoneFixo}</p>
        <p>Data de nascimento:${agenda.dataNascimento}</p>
        <p>Idade:${}</p>
        <p>Signo:${}</P>
        <p>Email:${agenda.email}</p>
        <p>CEP:${agenda.cep}</p>
        <p>Cidade:${agenda.cidade}</p>
        <p>Instagram:${agenda.instagram}</p>
        <p>Github:${agenda.github}</p>


        `
    })
}