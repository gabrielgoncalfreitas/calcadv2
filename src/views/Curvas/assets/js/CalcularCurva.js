import { Global } from "../../../../Global";

function CalcularPeso(diametro, espessura, curva, raio, aco) {
    function raioCurto() {
        return parseFloat(((((diametro * Global.pi) / 2) * (diametro * Global.pi)) / 1000000) * pesoAco * espessura);
    }

    function raioLongo() {
        return parseFloat((((((diametro * 1.5) * Global.pi) / 2) * (diametro * Global.pi)) / 1000000) * pesoAco * espessura);
    }
    //=======================================================================================================================
    let pesoAco = aco === 'inox' ? Global.pesoAcoInox : Global.pesoAcoCarbono;
    let peso = raio === 'curto' ? raioCurto() : raioLongo();

    switch (curva) {
        case '90':
            peso = peso;
            break;
        case '45':
            peso = parseFloat(peso / 2);
            break;
        case '30':
            peso = parseFloat(peso / 3);
            break;
        default:
            break;
    }

    let pesoLiquido = parseFloat(peso);
    let pesoBruto = parseFloat(peso * 1.05);

    document.querySelector("#pesoLiquido").value = isNaN(pesoLiquido) ? null : pesoLiquido.toFixed(2).replace(".", ",") + " kg";
    document.querySelector("#pesoBruto").value = isNaN(pesoBruto) ? null : pesoBruto.toFixed(2).replace(".", ",") + " kg";
}

function CalcularDimensoes(diametro) {
    let largura = parseFloat((diametro * Global.pi) / 2);
    let comprimento = parseFloat(diametro * Global.pi);
    let area = parseFloat((largura * comprimento) / 1000000);

    document.querySelector("#largura").value = isNaN(largura) ? null : largura.toFixed(2).replace(".", ",") + " mm";
    document.querySelector("#comprimento").value = isNaN(comprimento) ? null : comprimento.toFixed(2).replace(".", ",") + " mm";
    document.querySelector("#area").value = isNaN(area) ? null : area.toFixed(2).replace(".", ",") + " m²";
}

function CalcularCurva() {
    let diametro = parseFloat(document.querySelector('#dn').value);
    let espessura = parseFloat(document.querySelector('#espessura').value);

    let curva = document.querySelector('input[name="curva"]:checked').value;
    let aco = document.querySelector('input[name="aco"]:checked').value;
    let raio = document.querySelector('input[name="raio"]:checked').value;
    CalcularPeso(diametro, espessura, curva, raio, aco);
    CalcularDimensoes(diametro);
}

export default CalcularCurva;