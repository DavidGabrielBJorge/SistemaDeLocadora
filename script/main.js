function validar(){
    var tituloFilme = document.getElementById("tituloFilme").value;
    var diretorFilme = document.getElementById("diretorFilme").value;
    var produtoraFilme = document.getElementById("produtoraFilme").value;
    var anoFilme = document.getElementById("anoFilme").value;

    if(tituloFilme == ""){
        document.getElementById('warning').innerHTML = 'Deve preencher o titulo do filme';
        return false;
    }
    else if(diretorFilme == ""){
        document.getElementById('warning').innerHTML = 'Deve preencher o diretor do filme';
        //alert("Deve preencher o diretor do filme")
        return false;
    }
    else if(produtoraFilme == ""){
        document.getElementById('warning').innerHTML = 'Deve preencher o produtor do filme';
        //alert("Deve preencher o produtor do filme")
        return false;
    }
    else if(anoFilme == ""){
        document.getElementById('warning').innerHTML = 'Deve preencher o ano do filme';
        //alert("Deve preencher o ano do filme")
        return false;
    }
    else{
        document.getElementById('warning').setAttribute("class", "hidden");
    }

    return true;
}

function mostrarInformacoes(){
    var filmesLista;
    if(localStorage.getItem("filmesLista")==null){
        filmesLista = []
    }
    else{
        filmesLista = JSON.parse(localStorage.getItem("filmesLista"))
    }

    var espacamento = "";

    filmesLista.forEach(function(element, index){
        espacamento += "<tr>";
        espacamento += "<td>" + element.tituloFilme + "</td>";
        espacamento += "<td>" + element.diretorFilme + "</td>";
        espacamento += "<td>" + element.produtoraFilme + "</td>";
        espacamento += "<td>" + element.anoFilme + "</td>";
        espacamento += 
        '<td><button onclick="deletar('
        +index+
        ')" class="btn btn-danger">Delete</button><button onclick="atualizar('
        +index+
        ')" class="btn btn-warning m-2">Atualizar</button></td>'
        espacamento += "</tr>";
    });
    document.querySelector("#crud tbody").innerHTML=espacamento;
}
//Ao carregar a página vai mostrar a tabela
document.onload = mostrarInformacoes();

function adicionar(){
    if(validar() == true){
        var tituloFilme = document.getElementById("tituloFilme").value;
        var diretorFilme = document.getElementById("diretorFilme").value;
        var produtoraFilme = document.getElementById("produtoraFilme").value;
        var anoFilme = document.getElementById("anoFilme").value;

        var filmesLista;
        if(localStorage.getItem("filmesLista")==null){
            filmesLista = []
        }
        else{
            filmesLista = JSON.parse(localStorage.getItem("filmesLista"))
        }     
        filmesLista.push({
            tituloFilme : tituloFilme,
            diretorFilme : diretorFilme,
            produtoraFilme : produtoraFilme,
            anoFilme : anoFilme
        })

        localStorage.setItem("filmesLista", JSON.stringify(filmesLista));

        mostrarInformacoes();

        document.getElementById("tituloFilme").value = "";
        document.getElementById("diretorFilme").value = "";
        document.getElementById("produtoraFilme").value = "";
        document.getElementById("anoFilme").value = "";
    }
}