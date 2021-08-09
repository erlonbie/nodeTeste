var tabela = '';
var linha = 10;
var colunas = 10;
var container ='<div class="container">';

for(var i = 1; i <= linha; i++){
    tabela = '<tr>';
    tabela = `<td class="titulo" colspan=2>Produtos de ${i}</td></tr>`;
    for(var j = 1; j <= colunas; j++){
        tabela += '<tr><td>'+i+'x'+j+'</td><td>'+i*j+'</td></tr>';
    }
    container += `<div class="b b${i}"><table border=1>${tabela}</table></div>`
}
document.write(`${container}</div>`);
