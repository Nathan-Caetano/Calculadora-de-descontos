const calcularDesconto = () => {
    const valorProduto = parseFloat(document.getElementById("valorProduto").value);

    let precoAvista = valorProduto - (valorProduto * 0.1);
    let precoParcelado = valorProduto / 2 + (valorProduto * 0.05);

    document.getElementById("resultado").innerHTML = `
    <h3>${document.getElementById("nomeProduto").value}<br></h3>
    Preço à vista: <span>R$ ${precoAvista.toFixed(2)}</span><br>
    Preço cartão: <span>R$ ${valorProduto.toFixed(2)}</span><br>
    Preço parcelado: <span>2x de R$ ${precoParcelado.toFixed(2)}</span>
    `;

}