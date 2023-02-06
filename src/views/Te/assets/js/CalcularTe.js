import { Global } from "../../../../Global";

function CalcularPeso(bocaMaior, bocaMenor, altura, espessura, reducao, aco) {
    function reducaoConcentrica() {
        return {
            pesoLiquido: parseFloat((area * pesoAco * espessura) / 1000000),
            pesoBruto: NaN,
        };
    }

    function reducaoExcentrica() {
        return {
            pesoLiquido: NaN,
            pesoBruto: NaN,
        };
    }
    //=======================================================================================================================
    let geratriz = parseFloat((((bocaMaior - bocaMenor) / 2) ** 2 + (altura ** 2)) ** 0.5);
    let area = parseFloat((geratriz * 3.14) * ((bocaMaior / 2) + (bocaMenor / 2)));

    let pesoAco = aco === 'inox' ? Global.pesoAcoInox : Global.pesoAcoCarbono;
    let peso = reducao === 'concentrica' ? reducaoConcentrica() : reducaoExcentrica();
    let pesoLiquido = peso.pesoLiquido;
    let pesoBruto = peso.pesoBruto;

    document.querySelector("#pesoLiquido").value = isNaN(pesoLiquido) ? null : pesoLiquido.toFixed(2).replace(".", ",") + " kg";
    document.querySelector("#pesoBruto").value = isNaN(pesoBruto) ? null : pesoBruto.toFixed(2).replace(".", ",") + " kg";
}

function CalcularDimensoes(bocaMaior, bocaMenor, altura) {
    // document.querySelector("#largura").value = isNaN(largura) ? null : largura.toFixed(2).replace(".", ",") + " mm";
    // document.querySelector("#comprimento").value = isNaN(comprimento) ? null : comprimento.toFixed(2).replace(".", ",") + " mm";
    // document.querySelector("#area").value = isNaN(area) ? null : area.toFixed(2).replace(".", ",") + " m²";
}

function CalcularTe() {
    let bocaMaior = parseFloat(document.querySelector('#bocaMaior').value);
    let bocaMenor = parseFloat(document.querySelector('#bocaMenor').value);
    let altura = parseFloat(document.querySelector('#altura').value);
    let espessura = parseFloat(document.querySelector('#espessura').value);

    let aco = document.querySelector('input[name="aco"]:checked').value;
    let reducao = document.querySelector('input[name="reducao"]:checked').value;
    CalcularPeso(bocaMaior, bocaMenor, altura, espessura, reducao, aco);
    CalcularDimensoes(bocaMaior, bocaMenor, altura);
}

export default CalcularTe;