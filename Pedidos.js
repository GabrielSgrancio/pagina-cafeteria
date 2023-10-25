const SelMaquina = document.getElementById("selMaquina");

const SelCapsulas = document.getElementById("selCapsula");

const QtdMaq = document.getElementById("QtdMaq");

const QtdCap = document.getElementById("QtdCap");

const ValorQtd = document.getElementById("TxtValUnit");

const BtnAddMaq = document.getElementById("addMaq");

const BtnAddCap = document.getElementById("addCap");

const ListItem = document.getElementById("lisPedArea");

const ValorTotal = document.getElementById("TxtTotal");


const todosOsInputs = [SelMaquina, SelCapsulas, QtdMaq, QtdCap, ValorQtd];

//lógica da seção pedidos


function calcularValores(e) {
  if (e.currentTarget === SelMaquina || e.currentTarget === QtdMaq) {
    SelCapsulas.value = "-----";
    ValorQtd.value = SelMaquina.value * QtdMaq.value;
  } else if (e.currentTarget === SelCapsulas || e.currentTarget === QtdCap) {
    SelMaquina.value = "-----";
    ValorQtd.value = SelCapsulas.value * QtdCap.value;
  }
}

function adicionarItem(e) {
  e.preventDefault();
  if (e.currentTarget === BtnAddMaq && SelMaquina.value !== "-----") {
    ListItem.value += `Cafeteira: ${SelMaquina.selectedOptions[0].innerText} (${QtdMaq.value}) R$ ${ValorQtd.value},00 \n`;
    ValorTotal.value = Number(ValorTotal.value) + Number(ValorQtd.value);
  } else if (e.currentTarget === BtnAddCap && SelCapsulas.value !== "-----") {
    ListItem.value += `Cápsula: ${SelCapsulas.selectedOptions[0].innerText} (${QtdCap.value}) R$ ${ValorQtd.value},00 \n`;
    ValorTotal.value = Number(ValorTotal.value) + Number(ValorQtd.value);
  } else {
    alert("Nenhum Produto selecionado!");
  }
}

todosOsInputs.forEach((input) =>
  input.addEventListener("change", calcularValores)
);

[BtnAddCap, BtnAddMaq].forEach((btn) =>
  btn.addEventListener("click", adicionarItem)
);
