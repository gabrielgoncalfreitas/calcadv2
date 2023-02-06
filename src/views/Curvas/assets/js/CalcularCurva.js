import { Global } from "../../../../Global";

function CalcularPesoRaioCurto(diametro, pesoAco, espessura) {
    let peso = parseFloat(((((diametro * Global.pi) / 2) * (diametro * Global.pi)) / 1000000) * pesoAco * espessura);
    let pesoLiquido = parseFloat(peso);
    let pesoBruto = parseFloat(peso * 1.05);

    pesoLiquido = isNaN(pesoLiquido) ? 0 : pesoLiquido.toFixed(2).replace(".", ",") + " kg";
    pesoBruto = isNaN(pesoBruto) ? 0 : pesoBruto.toFixed(2).replace(".", ",") + " kg";

    document.querySelector("#floatingPesoLiquido").value = pesoLiquido;
    document.querySelector("#floatingPesoBruto").value = pesoBruto;
}

function CalcularPesoRaioLongo(diametro, pesoAco, espessura) {
    let peso = parseFloat((((((diametro * 1.5) * Global.pi) / 2) * (diametro * Global.pi)) / 1000000) * pesoAco * espessura);
    let pesoLiquido = parseFloat(peso);
    let pesoBruto = parseFloat(peso * 1.05);

    pesoLiquido = isNaN(pesoLiquido) ? 0 : pesoLiquido.toFixed(2).replace(".", ",") + " kg";
    pesoBruto = isNaN(pesoBruto) ? 0 : pesoBruto.toFixed(2).replace(".", ",") + " kg";

    document.querySelector("#floatingPesoLiquido").value = pesoLiquido;
    document.querySelector("#floatingPesoBruto").value = pesoBruto;
}

function CalcularDimensoes(diametro) {
    let largura = parseFloat((diametro * Global.pi) / 2);
    let comprimento = parseFloat(diametro * Global.pi);
    let area = parseFloat((largura * comprimento) / 1000000);

    largura = isNaN(largura) ? 0 : largura.toFixed(2).replace(".", ",") + " mm";
    comprimento = isNaN(comprimento) ? 0 : comprimento.toFixed(2).replace(".", ",") + " mm";
    area = isNaN(area) ? 0 : area.toFixed(2).replace(".", ",") + " m²";

    document.querySelector("#floatingLargura").value = largura;
    document.querySelector("#floatingComprimento").value = comprimento;
    document.querySelector("#floatingArea").value = area;
}

function CalcularCurva() {
    let diametro = parseFloat(document.querySelector('#floatingDn').value);
    let espessura = parseFloat(document.querySelector('#floatingEspessura').value);

    // let curva = document.querySelector('input[name="curva"]:checked').value;

    let pesoAco;
    let aco = document.querySelector('input[name="aco"]:checked').value;
    if (aco === 'inox') {
        pesoAco = Global.pesoAcoInox;
    } else {
        pesoAco = Global.pesoAcoCarbono;
    }

    let raio = document.querySelector('input[name="raio"]:checked').value;
    if (raio === 'curto') {
        CalcularPesoRaioCurto(diametro, pesoAco, espessura);
    } else {
        CalcularPesoRaioLongo(diametro, pesoAco, espessura);
    }

    CalcularDimensoes(diametro);
}

export default CalcularCurva;