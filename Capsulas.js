const tipoCapsula = document.getElementById("tipDes");

const qtdprcCapsula = document.getElementById("qtdprcDes");

const imgCapsula = document.getElementById("imgDes");

const capsulasTipo = [
  {
    modelo: "Intenso",
    img: "./imagens/CapDolceGusto_10_Intenso.jpg",
    stringQTDPREC:
      "QTD: 10 <br /><br /> Preço: R$ <span class='preco'>19,00<span>",
  },
  {
    modelo: "Espresso",
    img: "./imagens/CapDolceGusto_10_Espresso.jpg",
    stringQTDPREC:
      "QTD: 10 <br /><br /> Preço: R$ <span class='preco'>18,00<span>",
  },
  {
    modelo: "Forza / Vibrante",
    img: "./imagens/CapTresCoracoes_30_ForzaVibrante.jpg",
    stringQTDPREC:
      "QTD: 30 <br /><br /> Preço: R$ <span class='preco'>44,00<span>",
  },
  {
    modelo: "Três Cor. Intenso",
    img: "./imagens/CapTresCoracoesNespreso_10_Intenso.jpg",
    stringQTDPREC:
      "QTD: 10 <br /><br /> Preço: R$ <span class='preco'>20,00<span>",
  },
  {
    modelo: "Lor Forza",
    img: "./imagens/CapLorNespreso_10_Forza.jpg",
    stringQTDPREC:
      "QTD: 10 <br /><br /> Preço: R$ <span class='preco'>21,00<span>",
  },
];


function setImage(event) {
  const capsulaClicada = event.currentTarget.innerText;

  const capsula = capsulasTipo.filter(
    (capsula) => capsula.modelo === capsulaClicada
  );

  tipoCapsula.innerText = capsula[0].modelo;
  imgCapsula.src = capsula[0].img;
  qtdprcCapsula.innerHTML = capsula[0].stringQTDPREC;
}
