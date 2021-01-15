function test() {
    
    var pesquisa = document.getElementById("pesquisa");

    var id = document.getElementById("pokeId");
    var nome = document.getElementById("pokeName");
    var tipo = document.getElementById("pokeTipo");
    var peso = document.getElementById("pokePeso");
    var altura = document.getElementById("pokeAltura");

    $.get(`https://pokeapi.co/api/v2/pokemon/${pesquisa.value.toLowerCase()}`)
    .then((response) => {
        console.log(response);

        id.value = response.id
        nome.value = response.name;
        peso.value = response.weight;
        altura.value = response.height;
        tipo.value = response.types[0].type.name;
    })
    .catch(function(error){
        console.log('404')
    })

};

function criaTabela() {

    var id = document.getElementById("pokeId");
    var nome = document.getElementById("pokeName");
    var tipo = document.getElementById("pokeTipo");
    var peso = document.getElementById("pokePeso");
    var altura = document.getElementById("pokeAltura");

    var aumenta = `
    <tr>
        <td>${id.value}</td>
        <td>${nome.value}</td>
        <td>${tipo.value}</td>
        <td>${peso.value}</td>
        <td>${altura.value}</td>
        <td>
            <button type="button" class="btn btn-secondary" onclick="editRow(this)">!</button>
        </td>
        <td>
            <button type="button" class="btn btn-danger" onclick="deletaRow(this)">x</button>
        </td>
    </tr>
    `;
    $(".table").append(aumenta);

    alert("Tabela Criada.");
};

function deletaRow(ctl) {
    
    alert("aaaa");
    $(ctl).parents("tr").remove();
};

function editRow(ctl) {

    var id = document.getElementById("pokeIdEdit");
    var nome = document.getElementById("pokeNameEdit");
    var tipo = document.getElementById("pokeTipoEdit");
    var peso = document.getElementById("pokePesoEdit");
    var altura = document.getElementById("pokeAlturaEdit");

    _row = $(ctl).parents("tr");
    var cols = _row.children("td");
    console.log(cols);
    console.log($(cols[1]).text());

    id.value = $(cols[0]).text();
    nome.value = $(cols[1]).text();
    peso.value = $(cols[3]).text();
    altura.value = $(cols[4]).text();
    tipo.value = $(cols[2]).text();

};

function atualizarTabela() {

    var id = document.getElementById("pokeIdEdit");
    var nome = document.getElementById("pokeNameEdit");
    var tipo = document.getElementById("pokeTipoEdit");
    var peso = document.getElementById("pokePesoEdit");
    var altura = document.getElementById("pokeAlturaEdit");

    var cols = _row.children("td"); 

    cols[0].innerHTML = id.value;
    cols[1].innerHTML = nome.value;
    cols[2].innerHTML = tipo.value;
    cols[3].innerHTML = peso.value;
    cols[4].innerHTML = altura.value;

    _row = null;
    document.getElementById("editFormUpdate").reset();


};