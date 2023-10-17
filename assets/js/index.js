const tableContent = document.getElementById("tableContent");
const btnAddProduct = document.getElementById("addProduct");
const modal = document.getElementById("modal");

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
    products.map((product) => {
      const preco = formatDataToString(product.preco);
      const total = product.preco * product.quantidade;
      const totalFormatado = formatDataToString(total);
      const data = creatTabelBodyRow(product.nome, preco, product.quantidade, totalFormatado);
      return data;
    });
  }
  
  renderDataTable();
  
  function openModal () {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
  }

  btnAddProduct.addEventListener("click", openModal);