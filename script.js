const calcularDesconto = () => {
    const valorProduto = parseFloat(document.getElementById("valorProduto").value);
    const nomeProduto = document.getElementById("nomeProduto").value.trim();

    const resultadoContainer = document.getElementById("resultado");
    const erroNome = document.getElementById("erroNome");
    const erroValor = document.getElementById("erroValor");

    const resultadoAvista = document.getElementById("precoAvista");
    const resultadoParcelado = document.getElementById("precoParcelado");
    const resultadoCartao = document.getElementById("precoCartao");

    const opcaoAvista = document.getElementById("avista");
    const opcaoParcelado = document.getElementById("parcelado");
    const opcaoCartao = document.getElementById("cartao");

    // Limpar mensagens anteriores
    resultadoContainer.innerHTML = "";
    erroNome.innerHTML = "";
    erroValor.innerHTML = "";

    // Validação de entrada
    let erro = false;

    if (!nomeProduto) {
        erroNome.innerHTML = "*Por favor, preencha o nome do produto.";
        erro = true;
    }
    if (!valorProduto || isNaN(valorProduto) || valorProduto <= 0) {
        erroValor.innerHTML = "*Por favor, insira um valor válido para o produto.";
        erro = true;
    }
    if (erro) return;

    // Cálculo dos preços
    const precoAvista = valorProduto * 0.9; // 10% de desconto
    const precoParcelado = valorProduto * 1.05 / 2; // 5% de acréscimo dividido em 2 parcelas
    const precoCartao = valorProduto; // Sem desconto ou acréscimo

    // Verificar se uma opção de pagamento foi selecionada
    if (!opcaoAvista.checked && !opcaoParcelado.checked && !opcaoCartao.checked) {
        resultadoContainer.innerHTML = "<p>*Selecione uma opção de pagamento.*</p>";
        return;
    }

    // Exibir resultados
    resultadoContainer.innerHTML = `<h3>${nomeProduto}</h3>`;
    resultadoAvista.innerHTML = `À vista: <span>R$ ${precoAvista.toFixed(2)}</span>`;
    resultadoParcelado.innerHTML = `Parcelado: <span>2x de R$ ${precoParcelado.toFixed(2)}</span>`;
    resultadoCartao.innerHTML = `Cartão: <span>R$ ${precoCartao.toFixed(2)}</span>`;

    // Atualizar classes de estilo
    atualizarClasseAtivo(opcaoAvista, resultadoAvista);
    atualizarClasseAtivo(opcaoParcelado, resultadoParcelado);
    atualizarClasseAtivo(opcaoCartao, resultadoCartao);
};

// Função auxiliar para atualizar classes de estilo
const atualizarClasseAtivo = (opcao, elementoResultado) => {
    if (opcao.checked) {
        elementoResultado.classList.add("ativo");
    } else {
        elementoResultado.classList.remove("ativo");
    }
};