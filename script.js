const calcularDesconto = () => {
    const valorProduto = parseFloat(document.getElementById("valorProduto").value);
    const nomeProduto = document.getElementById("nomeProduto").value.trim();

    document.getElementById("resultado").innerHTML = "";

    document.getElementById("erroNome").innerHTML = "";
    document.getElementById("erroValor").innerHTML = "";

    let erro = false;

    if (!nomeProduto) {
        document.getElementById("erroNome").innerHTML = "*Por favor, preencha o nome do produto.";
        erro = true;
    }
    if (!valorProduto) {
        document.getElementById("erroValor").innerHTML = "*Por favor, preencha o valor do produto.";
        erro = true;
    }
    if (erro) return;

    if (isNaN(valorProduto) || valorProduto <= 0) {
        document.getElementById("resultado").innerHTML = "<h3>Por favor, insira um valor válido para o produto.</h3>";
        return;
    }

    let precoAvista = valorProduto - (valorProduto * 0.1);
    let precoParcelado = valorProduto / 2 + (valorProduto * 0.05);

    document.getElementById("resultado").innerHTML = `
    <h3>${nomeProduto}<br></h3>
    Preço à vista: <span>R$ ${precoAvista.toFixed(2)}</span><br>
    Preço cartão: <span>R$ ${valorProduto.toFixed(2)}</span><br>
    Preço parcelado: <span>2x de R$ ${precoParcelado.toFixed(2)}</span>
    `;

}