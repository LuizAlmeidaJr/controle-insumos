var estoque = document.getElementById("calculaEstoque");

function calcularEstoque() {
    // Leitura dos dados de entrada (variáveis começam com "m")
    var mCalSilo = document.getElementById("calSilo").value;
    var mCalBag = document.getElementById("calBag").value;
    var mPolCat = document.getElementById("polCat").value;
    var mPolAni = document.getElementById("polAni").value;
    var mSoda = document.getElementById("soda").value;
    var mAcidoCon = document.getElementById("acidoCon").value;
    var mAcidoDil1 = document.getElementById("acidoDil1").value;
    var mAcidoDil2 = document.getElementById("acidoDil2").value;
    var mAcidoDil3 = document.getElementById("acidoDil3").value;
    var mAcidoDil4 = document.getElementById("acidoDil4").value;
    var mAcidoDil5 = document.getElementById("acidoDil5").value;
    var mAcidoDil6 = document.getElementById("acidoDil6").value;
    var mAETanque = document.getElementById("AETanque").value;
    var mAEContainer = document.getElementById("AEContainer").value;
    var mAEDorna = document.getElementById("AEDorna").value;
    var mDPTanque = document.getElementById("DPTanque").value;
    var mDPContainer = document.getElementById("DPContainer").value;
    var mNutri = document.getElementById("nutri").value;
    var mUreia = document.getElementById("ureia").value;
    var mDioxido = document.getElementById("dioxido").value;
    var mAntib1 = document.getElementById("antib1").value;
    var mAntib2 = document.getElementById("antib2").value;
    var mAntib3 = document.getElementById("antib3").value;
    var mMonensina = document.getElementById("monensina").value;
    var mBact = document.getElementById("bact").value;
    var mNeutra = document.getElementById("neutra").value;
    var mHipoNa = document.getElementById("hipoNa").value;
    var mHipoCa = document.getElementById("hipoCa").value;
    var mZalta = document.getElementById("zalta").value;
    var mTallofin = document.getElementById("tallofin").value;
    var mTallofinGl = document.getElementById("tallofinGl").value;
    var mQuaternario = document.getElementById("quaternario").value;
    var mAEAgua = document.getElementById("AEAgua").value;
    
    // Bases de Cálculo - densidades ou volume de recipientes (variáveis começam com "b")
    var bBagCal = 1000;
    var bPolCat = 25;
    var bPolAni = 25;
    var bSoda = 1.53;  // densidade da soda cáustica 50%
    var bAcidoCon = 1.82;  // densidade do ácido sulfúrico 98%
    var bAcidoDil = 1.1;  // verificar
    var bAE = 0.9;  // densidade do antiespumante
    var bDP = 1.0;  // densidade do dispersante
    var bNutri = 1.15;  // densidade do nutriente
    var bUreia = 25;  // massa do saco
    var bDioxido = 1.2;  // densidade do dióxido de cloro
    var bZalta = 90;  // altura do galão de 200L
    var bMonensina = 1;  // densidade da monensina emulsão
    var bBact = 1;
    var bNeutra = 55;
    var bHipoNa = 1.25;  // densidade do hipoclorito de sódio 12,5%
    var bHipoCa = 14;
    var bTallofin = 50;  // altura do galão de 50L
    var bQuaternario = 200;
    var bAEAgua = 1.0;

    function calculaMassaCal(alturaVazio) {  // Utiliza uma relação de valores para determinar a massa de cal contida num silo
        // Usar a alturaVazio em (cm) para obter a massa de cal em (kg)
        // var massaCal = (-2E-12) * Math.pow(alturaVazio, 6) + 4E-9 * Math.pow(alturaVazio, 5) - 3E-6 * Math.pow(alturaVazio, 4) + 8E-4 * Math.pow(alturaVazio, 3) + 8.12E-2 * Math.pow(alturaVazio, 2) - 90.562 * alturaVazio + 55228;
        var medidaSilo = [];
        for(i = 485; i < 800; i += 5) {
            medidaSilo.push(i);
        }

        var calSilo = [9918, 9327, 8928, 8540, 8163, 7797, 7443, 7099, 6767, 6444, 6132, 5831, 5539, 5257, 4985, 4722, 4469, 4225, 3990, 3763, 3546, 3337, 3136, 2944, 2759, 2582, 2413, 2252, 2097, 1950, 1810, 1677, 1550, 1430, 1316, 1208, 1106, 1010, 920, 835, 756, 681, 612, 547, 487, 431, 380, 332, 289, 249, 213, 181, 151, 125, 102, 81, 63, 48, 34, 23, 14, 6, 0];

        if(alturaVazio == 0) {
            massaCal = 0;
        } else {
            if(alturaVazio <= 480) {
                massaCal = 55203 - 92.418 * alturaVazio;  // Para a parte cilíndrica do silo, a relação é linear
            } else {  // Para medidas acima de 480cm, entra na parte cônica (onde a relação deixa de ser linear e é necessário utilizar um relação de valores conhecidos)
                for(i = 0; i < medidaSilo.length; i++) {
                    if(alturaVazio == medidaSilo[i]) {
                        massaCal = calSilo[i];
                    }
                }
            }
        }
        return massaCal;
    }

    function calculaMassa(raio, comprimento, altura, densidade) { // Calcula a massa de um fluido dentro de um tanque cilíndrico horizontal
        // Usar raio do tanque em (m), comprimento do tanque em (m), altura de fluido dentro do tanque em (cm) e densidade do fluido em (kg/L) para obter a massa em (kg)
        var massa = ((altura / 100 - raio) * Math.sqrt(Math.pow(raio, 2) - Math.pow((altura / 100 - raio), 2))  + Math.pow(raio, 2) * (Math.asin((altura / 100 - raio) / raio) + Math.PI / 2)) * comprimento * 1000 * densidade;
        return massa;
    }

    // Validação das medidas máximas para tanques e silo:
    if(mCalSilo > 795) {
        alert("Medida inválida para o tanque de cal! [MAX 795cm]");
        mCalSilo = NaN;
    }

    if(mSoda > 296) {
        alert("Medida inválida para o tanque de soda! [MAX 296cm]");
        mSoda = NaN
    }

    if(mAcidoCon > 296) {
        alert("Medida inválida para o tanque de ácido concentrado! [MAX 296cm]");
        mAcidoCon = NaN;
    }

    if(mAcidoDil1 > 100 || mAcidoDil2 > 100 || mAcidoDil3 > 100 || mAcidoDil4 > 100 || mAcidoDil5 > 100 || mAcidoDil6 > 100) {
        alert("Medida inválida para o tanque de ácido diluído! [MAX 100%]");
        mAcidoDil1 = NaN;
    }

    if(mAETanque > 100) {
        alert("Medida inválida para o tanque de antiespumante! [MAX 100cm]");
        mAETanque = NaN;
    }

    if(mDPTanque > 100) {
        alert("Medida inválida para o tanque de dispersante! [MAX 100cm]");
        mDPTanque = NaN;
    }

    // Cálculo dos Estoques (variáveis começam com "e")
    var eCal = calculaMassaCal(mCalSilo) + mCalBag * bBagCal;
    var ePolCat = mPolCat * bPolCat;
    var ePolAni = mPolAni * bPolAni;
    var eSoda = calculaMassa(1.48, 5, mSoda, bSoda);
    var eAcidoCon = calculaMassa(1.48, 5, mAcidoCon, bAcidoCon);
    var eAcidoDil = (mAcidoDil1 / 100 + mAcidoDil2 / 100 + mAcidoDil3 / 100 + mAcidoDil4 / 100 + mAcidoDil5 / 100 + mAcidoDil6 / 100) * 10000 * bAcidoDil;
    var eAE = parseInt(calculaMassa(0.5, 2, mAETanque, bAE)) + (parseInt(mAEContainer) + parseInt(mAEDorna)) * bAE;
    var eDP = parseInt(calculaMassa(0.5, 2, mDPTanque, bDP)) + mDPContainer * bDP;
    var eNutri = mNutri * bNutri;
    var eUreia = mUreia * bUreia;
    var eDioxido = mDioxido * bDioxido;
    var eMonensina = mMonensina * bMonensina;
    var eBact = mBact * bBact;
    var eNeutra = mNeutra * bNeutra;
    var eHipoNa = mHipoNa * bHipoNa;
    var eHipoCa = mHipoCa * bHipoCa;
    var eZalta = mZalta / bZalta * 200;
    var eTallofin = mTallofin / bTallofin * 50 + mTallofinGl * bTallofin;
    var eQuaternario = mQuaternario * bQuaternario;
    var eAEAgua = mAEAgua * bAEAgua;

    var today = new Date();
    /*var resultado = document.getElementById("estoqueCalculado");
    resultado.innerHTML = `<h5>Estoque ${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}</h5>`;
    resultado.innerHTML += "<br>";
    resultado.innerHTML += `Cal Clarisina: ${mCalSilo} cm, ${mCalBag} bags = ${eCal.toFixed(0)} kg`;
    resultado.innerHTML += "<br>";
    resultado.innerHTML += `Polímero Catiônico: ${mPolCat} sacos = ${ePolCat}kg`;
    resultado.innerHTML += "<br>";
    resultado.innerHTML += `Polímero Aniônico: ${mPolAni} sacos = ${ePolAni}kg`;
    resultado.innerHTML += "<br>";
    resultado.innerHTML += `Soda Cáustica 50%: ${mSoda} cm = ${eSoda.toFixed(0)}kg`;
    resultado.innerHTML += "<br>";
    resultado.innerHTML += `Ácido Sulfúrico Concentrado: ${mAcidoCon} cm = ${eAcidoCon.toFixed(0)}kg`;
    resultado.innerHTML += "<br>";
    resultado.innerHTML += `Ácido Sulfúrico Diluído: ${eAcidoDil.toFixed(0)}kg`;
    resultado.innerHTML += "<br>";
    resultado.innerHTML += `Antiespumante: ${mAETanque} cm, ${mAEContainer} L, ${mAEDorna} L = ${eAE.toFixed(0)}kg`;
    resultado.innerHTML += "<br>";
    resultado.innerHTML += `Dispersante: ${mDPTanque} cm, ${mDPContainer} L = ${eDP.toFixed(0)}kg`;
    resultado.innerHTML += "<br>";
    resultado.innerHTML += `Nutriente: ${mNutri} L = ${eNutri.toFixed(0)}kg`;
    resultado.innerHTML += "<br>";
    resultado.innerHTML += `Dióxido de Cloro 25%: ${mDioxido} L = ${eDioxido.toFixed(0)}kg`;
    resultado.innerHTML += "<br>";
    resultado.innerHTML += `Antibiótico: Protemosto PRO ${mAntib1.replace(".", ",")} kg, OX-Gram QR80 ${mAntib2.replace(".", ",")}kg`;
    resultado.innerHTML += "<br>";
    resultado.innerHTML += `Monensina Emulsão: ${mMonensina} L = ${eMonensina.toFixed(0)}kg`;
    resultado.innerHTML += "<br>";
    resultado.innerHTML += `Bactericida: ${mBact} L = ${eBact}kg`;
    resultado.innerHTML += "<br>";
    resultado.innerHTML += `Neutralizante: ${mNeutra} galões = ${eNeutra}kg`;
    resultado.innerHTML += "<br>";
    resultado.innerHTML += `Hipoclorito de Sódio 12,5%: ${mHipoNa} L = ${eHipoNa.toFixed(0)}kg`;
    resultado.innerHTML += "<br>";
    resultado.innerHTML += `Hipoclorito de Cálcio: ${mHipoCa} baldes = ${eHipoCa}kg`;
    resultado.innerHTML += "<br>";
    resultado.innerHTML += `Zalta: ${mZalta} galões = ${eZalta}kg`;
    resultado.innerHTML += "<br>";
    resultado.innerHTML += `Tallofin: ${mTallofin} galões = ${eTallofin}kg`;
    resultado.innerHTML += "<br>";
    resultado.innerHTML += `Quatermol: ${mQuaternario} bombonas = ${eQuaternario}kg`;
    resultado.innerHTML += "<br>";
    resultado.innerHTML += `Antiespumante para Água: ${mAEAgua} L = ${eAEAgua.toFixed(0)}kg`;*/

    var resultado = document.getElementById("estoqueCalculado");
    resultado.style.display = "block";
    resultado.innerHTML = `<h5>Estoque ${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}</h5>`;
    resultado.innerHTML += "<table><thead><tr><th>Insumo</th><th>Medidas</th><th>Estoque</th></tr></thead></table>"
    resultado.innerHTML += `<table><tbody><tr><td>Cal Clarisina</td><td>${mCalSilo} cm, ${mCalBag} bags</td><td>${eCal.toFixed(0)} kg</td></tr></tbody></table>`;
    resultado.innerHTML += `<table><tbody><tr><td>Polímero Catiônico</td><td>${mPolCat} sacos</td><td>${ePolCat} kg</td></tr></tbody></table>`;
    resultado.innerHTML += `<table><tbody><tr><td>Polímero Aniônico</td><td>${mPolAni} sacos</td><td>${ePolAni} kg</td></tr></tbody></table>`;
    resultado.innerHTML += `<table><tbody><tr><td>Soda Cáustica 50%</td><td>${mSoda} cm</td><td>${eSoda.toFixed(0)} kg</td></tr></tbody></table>`;
    resultado.innerHTML += `<table><tbody><tr><td>Ácido Sulfúrico Concentrado</td><td>${mAcidoCon} cm</td><td>${eAcidoCon.toFixed(0)} kg</td></tr></tbody></table>`;
    resultado.innerHTML += `<table><tbody><tr><td>Ácido Sulfúrico Diluído</td><td>TQ01=${mAcidoDil1}%, TQ02=${mAcidoDil2}%, TQ03=${mAcidoDil3}%, TQ04=${mAcidoDil4}%, TQ05=${mAcidoDil5}%, TQ06=${mAcidoDil6}%</td><td>${eAcidoDil.toFixed(0)} kg</td></tr></tbody></table>`;
    resultado.innerHTML += `<table><tbody><tr><td>Antiespumante</td><td>${mAETanque} cm, ${mAEContainer} L, ${mAEDorna} L</td><td>${eAE.toFixed(0)} kg</td></tr></tbody></table>`;
    resultado.innerHTML += `<table><tbody><tr><td>Dispersante</td><td>${mDPTanque} cm, ${mDPContainer} L</td><td>${eDP.toFixed(0)} kg</td></tr></tbody></table>`;
    resultado.innerHTML += `<table><tbody><tr><td>Nutriente</td><td>${mNutri} L</td><td>${eNutri.toFixed(0)} kg</td></tr></tbody></table>`;
    resultado.innerHTML += `<table><tbody><tr><td>Ureia</td><td>${mUreia} sacos</td><td>${eUreia.toFixed(0)} kg</td></tr></tbody></table>`;
    resultado.innerHTML += `<table><tbody><tr><td>Dióxido de Cloro 25%</td><td>${mDioxido} kg</td><td>${eDioxido.toFixed(0)} kg</td></tr></tbody></table>`;
    resultado.innerHTML += `<table><tbody><tr><td>Antibiótico Protemosto HOP</td><td>${mAntib1} kg</td><td>${mAntib1} kg</td></tr></tbody></table>`;
    resultado.innerHTML += `<table><tbody><tr><td>Antibiótico OX-Gram</td><td>${mAntib2} kg</td><td>${mAntib2} kg</td></tr></tbody></table>`;
    resultado.innerHTML += `<table><tbody><tr><td>Antibiótico Protemosto LAM</td><td>${mAntib3} kg</td><td>${mAntib3} kg</td></tr></tbody></table>`;
    resultado.innerHTML += `<table><tbody><tr><td>Monensina Emulsão</td><td>${mMonensina} L</td><td>${eMonensina.toFixed(0)} kg</td></tr></tbody></table>`;
    resultado.innerHTML += `<table><tbody><tr><td>Bactericida</td><td>${mBact} L</td><td>${eBact} kg</td></tr></tbody></table>`;
    resultado.innerHTML += `<table><tbody><tr><td>Neutralizante</td><td>${mNeutra} galões</td><td>${eNeutra} kg</td></tr></tbody></table>`;
    resultado.innerHTML += `<table><tbody><tr><td>Hipoclorito de Sódio 12,5%</td><td>${mHipoNa} L</td><td>${eHipoNa.toFixed(0)} kg</td></tr></tbody></table>`;
    resultado.innerHTML += `<table><tbody><tr><td>Hipoclorito de Cálcio</td><td>${mHipoCa} baldes</td><td>${eHipoCa} kg</td></tr></tbody></table>`;
    resultado.innerHTML += `<table><tbody><tr><td>Zalta</td><td>${mZalta} cm</td><td>${eZalta.toFixed(0)} kg</td></tr></tbody></table>`;
    resultado.innerHTML += `<table><tbody><tr><td>Tallofin</td><td>${mTallofin} cm, ${mTallofinGl} galões fechados</td><td>${eTallofin.toFixed(0)} kg</td></tr></tbody></table>`;
    resultado.innerHTML += `<table><tbody><tr><td>Quatermol</td><td>${mQuaternario} L</td><td>${mQuaternario} kg</td></tr></tbody></table>`;
    resultado.innerHTML += `<table><tbody><tr><td>Antiespumante para Água</td><td>${mAEAgua} L</td><td>${eAEAgua.toFixed(0)} kg</td></tr></tbody></table>`;
}

estoque.onclick = calcularEstoque;