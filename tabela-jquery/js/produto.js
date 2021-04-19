function insereItem() {
    var corpoTabela = $(".itens").find("tbody");
    var produto = $("#nome-produto").val();
    var quantidade = $("#quantidade").val();

    var linha = novaLinha(produto, quantidade);
    linha.find(".botao-remover").click(removeLinha);

    corpoTabela.append(linha);
	limpaItem();
}

function limpaItem() {
    $("#nome-produto").val("");
    $("#quantidade").val("");

}

function novaLinha(produto, quantidade) {
    var linha = $("<tr>");
    var colunaProduto = $("<td>").text(produto);
    var colunaQuantidade = $("<td>").text(quantidade);
    var colunaRemover = $("<td>");

    var link = $("<a>").addClass("botao-remover").attr("href", "#");
    var icone = $("<i>").addClass("small").addClass("material-icons").text("delete");

    link.append(icone);

    colunaRemover.append(link);

    linha.append(colunaProduto);
    linha.append(colunaQuantidade);
    linha.append(colunaRemover);

    return linha;
}

function removeLinha() {
    event.preventDefault();
    $(this).parent().parent().remove();
}
