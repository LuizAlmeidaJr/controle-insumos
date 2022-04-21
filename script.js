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
    var mDioxido = document.getElementById("dioxido").value;
    var mAntib1 = document.getElementById("antib1").value;
    var mAntib2 = document.getElementById("antib2").value;
    //var mAntib3 = document.getElementById("antib3").value;
    var mMonensina = document.getElementById("monensina").value;
    var mBact = document.getElementById("bact").value;
    var mNeutra = document.getElementById("neutra").value;
    var mHipoNa = document.getElementById("hipoNa").value;
    var mHipoCa = document.getElementById("hipoCa").value;
    var mZalta = document.getElementById("zalta").value;
    var mTallofin = document.getElementById("tallofin").value;
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
    var bDioxido = 1.3;  // verificar
    var bZalta = 20;
    var bMonensina = 1.1;  // verificar
    var bBact = 200;
    var bNeutra = 55;
    var bHipoNa = 1.2;  // densidade do hipoclorito de sódio 12,5%
    var bHipoCa = 14;
    var bTallofin = 50;
    var bQuaternario = 200;
    var bAEAgua = 0.9;

    function calculaMassa(raio, comprimento, altura, densidade) { // Calcula a massa de um fluido dentro de um tanque cilíndrico horizontal
        // Usar raio do tanque em (m), comprimento do tanque em (m), altura de fluido dentro do tanque em (cm) e densidade do fluido em (kg/L) para obter a massa em (kg)
        var massa = ((altura / 100 - raio) * Math.sqrt(Math.pow(raio, 2) - Math.pow((altura / 100 - raio), 2))  + Math.pow(raio, 2) * (Math.asin((altura / 100 - raio) / raio) + Math.PI / 2)) * comprimento * 1000 * densidade;
        return massa.toFixed(0);
    }

    // Cálculo dos Estoques (variáveis começam com "e")
    var ePolCat = mPolCat * bPolCat;
    var ePolAni = mPolAni * bPolAni;
    var eSoda = calculaMassa(1.48, 5, mSoda, bSoda);
    var eAcidoCon = calculaMassa(1.48, 5, mAcidoCon, bAcidoCon);
    var eAcidoDil = (mAcidoDil1 / 100 + mAcidoDil2 / 100 + mAcidoDil3 / 100 + mAcidoDil4 / 100 + mAcidoDil5 / 100 + mAcidoDil6 / 100) * 10000 * bAcidoDil;
    var eAE = parseInt(calculaMassa(0.5, 2, mAETanque, bAE)) + (mAEContainer + mAEDorna) * bAE;
    var eDP = parseInt(calculaMassa(0.5, 2, mDPTanque, bDP)) + mDPContainer * bDP;
    var eNutri = mNutri * bNutri;
    var eDioxido = mDioxido * bDioxido;
    var eMonensina = mMonensina * bMonensina;
    var eBact = mBact * bBact;
    var eNeutra = mNeutra * bNeutra;
    var eHipoNa = mHipoNa * bHipoNa;
    var eHipoCa = mHipoCa * bHipoCa;
    var eZalta = mZalta * bZalta;
    var eTallofin = mTallofin * bTallofin;
    var eQuaternario = mQuaternario * bQuaternario;
    var eAEAgua = mAEAgua * bAEAgua;

    var today = new Date();
    var resultado = document.getElementById("estoqueCalculado");
    resultado.innerHTML = `Estoque ${today.getDate()}/${today.getMonth()}/${today.getFullYear()}:`;
    resultado.innerHTML += "<br><br>";
    resultado.innerHTML += `Polímero Catiônico: ${mPolCat} sacos = ${ePolCat}kg`;
    resultado.innerHTML += "<br>";
    resultado.innerHTML += `Polímero Aniônico: ${mPolAni} sacos = ${ePolAni}kg`;
    resultado.innerHTML += "<br>";
    resultado.innerHTML += `Soda Cáustica 50%: ${mSoda} cm = ${eSoda}kg`;
    resultado.innerHTML += "<br>";
    resultado.innerHTML += `Ácido Sulfúrico Concentrado: ${mAcidoCon} cm = ${eAcidoCon}kg`;
    resultado.innerHTML += "<br>";
    resultado.innerHTML += `Ácido Sulfúrico Diluído: ${eAcidoDil}kg`;
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
    resultado.innerHTML += `Antiespumante para Água: ${mAEAgua} L = ${eAEAgua.toFixed(0)}kg`;
}

estoque.onclick = calcularEstoque;