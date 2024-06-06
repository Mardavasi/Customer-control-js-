function clickCreate(){
   
    let customer = {
        "firstname": "John",
        "lastname": "Doe",
        "email": "sdsedfd",
        "address": "123 Main St"
    };
        
        
    create(customer);
    return false;

}

async function create(customer) {
 
  let url = URL_SERVER + "customer/";
  let config = {
    "method": "POST",
    "body": JSON.stringify(customer),
    "headers": {
      "Content-Type": "application/json"
    }
  };
  await fetch(url, config);
  window.location.href = "customers.html";
}



