function adicionar(){
    var tituloFilme = document. getElementById("tituloFilme").value;
    var diretorFilme = document. getElementById("diretorFilme").value;
    var produtoraFilme = document. getElementById("produtoraFilme").value;
    var anoFilme = document. getElementById("anoFilme").value;

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

}