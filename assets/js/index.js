const tableContent = document.getElementById("tableContent");
const btnAddProduct = document.getElementById("addProduct");
const modal = document.getElementById("modal");
const productName = document.getElementById("productName");
const productValue = document.getElementById("productValue");
const productQuantidade = document.getElementById("productQuantidade");
const btnSend = document.getElementById("send");
const btnCancel = document.getElementById("cancel");
const form = document.getElementById("form");


const products = [
    {
      nome: "IPhone X 64Gb Grey",
      preco: 999.0,
      quantidade: 3,
    },
    {
      nome: "Samsung S8 Black",
      preco: 756.0,
      quantidade: 10,
    },
  ];
  
  function formatDataToString(value) {
    const valorFormatado = value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  
    return valorFormatado;
  }
  
  function creatTabelBodyRow (nome, preco, quantidade, total){
    const criandoTr = tableContent.innerHTML += `
    <tr class="even:bg-[#f2f2f2] odd:bg-white">
        <td class="p-3">${nome}</td>
        <td class="p-3">${preco}</td>
        <td class="p-3">${quantidade}</td>
        <td class="text-center p-3">${total}</td>
    </tr>
    `;
    return criandoTr;
  }

  function renderDataTable() {
    tableContent.innerHTML = "";
    products.map((product) => {
      const preco = formatDataToString(Number(product.preco));
      const total = product.preco * product.quantidade;
      const totalFormatado = formatDataToString(total);
      const data = creatTabelBodyRow(product.nome, preco, product.quantidade, totalFormatado);
      return data;
    });
  }
  
  function openModal () {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
  }
  
  function closeModal() {
    modal.classList.remove("flex");
    modal.classList.add("hidden");
  }
  
  function addProduct() {
    if (productName.value && productQuantidade.value && productValue.value) {
      products.push(
        {
          nome: productName.value,
          preco: productValue.value,
          quantidade: productQuantidade.value,
        });

    }
  }

  renderDataTable();
  
  btnAddProduct.addEventListener("click", openModal);

btnSend.addEventListener("click", (e) => {
  e.preventDefault()
  addProduct();
  renderDataTable();
  closeModal();
});
 
btnCancel.addEventListener("click", (e) => {
  e.preventDefault();
  closeModal();
});