var estoque = document.getElementById("calculaEstoque");

function calcularEstoque() {
    // Leitura dos dados de entrada
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
    var mAntib3 = document.getElementById("antib3").value;
    var mMonensina = document.getElementById("monensina").value;
    var mBact = document.getElementById("bact").value;
    var mNeutra = document.getElementById("neutra").value;
    var mHipoNa = document.getElementById("hipoNa").value;
    var mHipoCa = document.getElementById("hipoCa").value;
    var mZalta = document.getElementById("zalta").value;
    var mTallofin = document.getElementById("tallofin").value;
    var mQuaternario = document.getElementById("quaternario").value;
    var mAEAgua = document.getElementById("AEAgua").value;
    
    // Bases de Cálculo (densidades ou volume de recipientes)
    var bBagCal = 1000
    var bPolCat = 25
    var bPolAni = 25
    var bSoda = 1.5  // verificar
    var bAcidoCon = 1.8  // verificar
    var bAcidoDil = 1.1  // verificar
    var bAE = 0.9
    var bDP = 1.0
    var bNutri = 1.15  // verificar
    var bDioxido = 1.3  // verificar
    var bZalta = 20
    var bMonensina = 1.0  // verificar
    var bBact = 200
    var bNeutra = 55
    var bHipoNa = 1.2  // verificar
    var bHipoCa = 14
    var bTallofin = 50
    var bQuaternario = 200
    var bAEAgua = 0.9

    // Cálculo dos Estoques
    var ePolCat = mPolCat * bPolCat
    var ePolAni = mPolAni * bPolAni
    var eNutri = mNutri * bNutri
    var eDioxido = mDioxido * bDioxido
    var eMonensina = mMonensina * bMonensina
    var eBact = mBact * bBact
    var eNeutra = mNeutra * bNeutra
    var eHipoNa = mHipoNa * bHipoNa
    var eHipoCa = mHipoCa * bHipoCa
    var eZalta = mZalta * bZalta
    var eTallofin = mTallofin * bTallofin
    var eQuaternario = mQuaternario * bQuaternario
    var eAEAgua = mAEAgua * bAEAgua

    var resultado = document.getElementById("estoqueCalculado")
    resultado.innerHTML = `Polímero Catiônico: ${mPolCat} sacos = ${ePolCat}kg`
    resultado.innerHTML += "<br>"
    resultado.innerHTML += `Polímero Aniônico: ${mPolAni} sacos = ${ePolAni}kg`
    resultado.innerHTML += "<br>"
    resultado.innerHTML += `Nutriente: ${mNutri} L = ${eNutri}kg`
    resultado.innerHTML += "<br>"
    resultado.innerHTML += `Dióxido de Cloro 25%: ${mDioxido} L = ${eDioxido}kg`
    resultado.innerHTML += "<br>"
    resultado.innerHTML += `Monensina Emulsão: ${mMonensina} L = ${eMonensina}kg`
    resultado.innerHTML += "<br>"
    resultado.innerHTML += `Bactericida: ${mBact} L = ${eBact}kg`
    resultado.innerHTML += "<br>"
    resultado.innerHTML += `Neutralizante: ${mNeutra} galões = ${eNeutra}kg`
    resultado.innerHTML += "<br>"
    resultado.innerHTML += `Hipoclorito de Sódio 12,5%: ${mHipoNa} L = ${eHipoNa}kg`
    resultado.innerHTML += "<br>"
    resultado.innerHTML += `Hipoclorito de Cálcio: ${mHipoCa} baldes = ${eHipoCa}kg`
    resultado.innerHTML += "<br>"
    resultado.innerHTML += `Zalta: ${mZalta} galões = ${eZalta}kg`
    resultado.innerHTML += "<br>"
    resultado.innerHTML += `Tallofin: ${mTallofin} galões = ${eTallofin}kg`
    resultado.innerHTML += "<br>"
    resultado.innerHTML += `Quatermol: ${mQuaternario} bombonas = ${eQuaternario}kg`
    resultado.innerHTML += "<br>"
    resultado.innerHTML += `Antiespumante para Água: ${mAEAgua} L = ${eAEAgua}kg`
}

estoque.onclick = calcularEstoque;