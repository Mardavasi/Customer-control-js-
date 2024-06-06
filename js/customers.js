function init() {
    renderCustomers();
}

async function getCustomers() {
  let url = URL_SERVER + "customer";
  let response = await fetch(url);
  let json = await response.json();
  return json;
}

async function renderCustomers() {
  let customers = await getCustomers();
  let html = '';
  for (let customer of customers) {
    html += getHtmlRowCustomer(customer);
  }
  let tbody = document.getElementById("tbody-customers");
  tbody.innerHTML =html;
}
async function onClickDelete(id){
 let response = confirm("Are you sure you want to delete this customer?");
 if(!response){
   return;
 }
let url = URL_SERVER + "customer/" + id;
let config = {
  method: "DELETE",
}
await fetch(url, config);
renderCustomers();
  
}
async function onClickSave(){
  let customer = {
    firstName: document.getElementById("input-first-name").value,
    lastName: document.getElementById("input-last-name").value,
    address: document.getElementById("input-address").value,
    email: document.getElementById("input-email").value,
  }
  let url = URL_SERVER + "customer";
  let config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(customer),
  }
  await fetch(url, config);
  renderCustomers();

}

function getHtmlRowCustomer(customer) {
  return `<tr>
                        <td>${customer.id}</td>
                        <td>${customer.firstName} ${customer.lastName}</td>
                        <td>${customer.address}</td>
                        <td>${customer.email}</td>
                        <td>
                             <a href="#" class="btn btn-primary btn-circle btn-sm">
                            <i class="fas fa-edit"></i>
                          </a>
                          <a href="#" onClick="onClickDelete(${customer.id})" class="btn btn-danger btn-circle btn-sm">
                            <i class="fas fa-trash"></i>
                          </a>
                         
                        </td>
                      </tr>`;
}

init();
