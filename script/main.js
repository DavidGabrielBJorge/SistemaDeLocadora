function validar(){
    var tituloFilme = document.getElementById("tituloFilme").value;
    var diretorFilme = document.getElementById("diretorFilme").value;
    var produtoraFilme = document.getElementById("produtoraFilme").value;
    var anoFilme = document.getElementById("anoFilme").value;

    let data = new Date();
    let anoAtual = parseInt(data.getFullYear());

    if(tituloFilme == ""){
        document.getElementById('aviso').innerHTML = 'Deve preencher o titulo do filme';
        return false;
    }
    else if(diretorFilme == ""){
        document.getElementById('aviso').innerHTML = 'Deve preencher o diretor do filme';
        //alert("Deve preencher o diretor do filme")
        return false;
    }
    else if(produtoraFilme == ""){
        document.getElementById('aviso').innerHTML = 'Deve preencher o produtor do filme';
        //alert("Deve preencher o produtor do filme")
        return false;
    }
    else if(anoFilme == ""){
        document.getElementById('aviso').innerHTML = 'Deve preencher o ano do filme';
        //alert("Deve preencher o ano do filme")
        return false;
    }
    //O primeiro filme lançado foi em 1888 e não deve colocar filmes que são depois do ano atual
    else if(anoFilme < 1888 || anoFilme > anoAtual){
        document.getElementById('aviso').innerHTML = 'Deve preencher um ano válido';
        //alert("Deve preencher o ano do filme")
        return false;
    }
    else{
        document.getElementById('aviso').setAttribute("class", "hidden");
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

    var elementoHTML = "";

    filmesLista.forEach(function(element, index){
        elementoHTML += '<tr>';
        elementoHTML += '<td class="corpoTabela">' + element.tituloFilme + '</td>';
        elementoHTML += '<td class="corpoTabela">' + element.diretorFilme + '</td>';
        elementoHTML += '<td class="corpoTabela">' + element.produtoraFilme + '</td>';
        elementoHTML += '<td class="corpoTabela">' + element.anoFilme + '</td>';
        elementoHTML += '<td class="corpoTabela"><button onclick="deletar('+index+')" class="btn btn-danger"><i class="bi bi-trash3"></i> Deletar</button> <button onclick="atualizar('+index+')" class="btn btn-warning m-2"><i class="bi bi-pencil"></i> Atualizar</button></td>'
        elementoHTML += '</tr>';
    });
    document.querySelector("#crud tbody").innerHTML=elementoHTML;
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
            filmesLista = [];
        }
        else{
            filmesLista = JSON.parse(localStorage.getItem("filmesLista"));
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

function deletar(index){
    var filmesLista;
    if(localStorage.getItem("filmesLista")==null){
        filmesLista = []
    }
    else{
        filmesLista = JSON.parse(localStorage.getItem("filmesLista"))
    }    
    filmesLista.splice(index,1);
    localStorage.setItem("filmesLista",JSON.stringify(filmesLista));
    mostrarInformacoes();
}

function atualizar(index){
    //Dessa forma o botão de adicionar some e o de atualizar vai aparecer
    document.getElementById("submit").style.display="none";
    document.getElementById("update").style.display="block";

    var filmesLista;
    if(localStorage.getItem("filmesLista")==null){
        filmesLista = [];
    }else{
        filmesLista = JSON.parse(localStorage.getItem("filmesLista"));
    }  
    
    document.getElementById("tituloFilme").value = filmesLista[index].tituloFilme;
    document.getElementById("diretorFilme").value = filmesLista[index].diretorFilme;
    document.getElementById("produtoraFilme").value = filmesLista[index].produtoraFilme;
    document.getElementById("anoFilme").value = filmesLista[index].anoFilme;

    document.querySelector("#update").onclick = function(){
        if (validar() == true){
            filmesLista[index].tituloFilme = document.getElementById("tituloFilme").value;
            filmesLista[index].diretorFilme = document.getElementById("diretorFilme").value;
            filmesLista[index].produtoraFilme = document.getElementById("produtoraFilme").value;
            filmesLista[index].anoFilme = document.getElementById("anoFilme").value;

            localStorage.setItem("filmesLista", JSON.stringify(filmesLista));

            mostrarInformacoes();

            document.getElementById("tituloFilme").value = "";
            document.getElementById("diretorFilme").value = "";
            document.getElementById("produtoraFilme").value = "";
            document.getElementById("anoFilme").value = "";

            //Dessa forma o botão de adicionar aparece e o de atualizar vai desaparecer
            document.getElementById("submit").style.display="block";
            document.getElementById("update").style.display="none";

        }
    }
}