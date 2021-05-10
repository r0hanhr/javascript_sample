let nameInput = document.createElement("input");
let emailInput = document.createElement("input");
let btn = document.createElement("button");
btn.innerText = "submit";
let form = document.createElement("form");

form.appendChild(nameInput);
form.appendChild(emailInput);
form.appendChild(btn);

document.body.appendChild(form);

form.addEventListener("submit", value => {
  value.preventDefault();
  let name = nameInput.value;
  let email = emailInput.value;

  let table = document.createElement("table");
  let tr = document.createElement("tr");
  let tdName = document.createElement("td");
  let tdEmail = document.createElement("td");
  let tdDelete = document.createElement("button");

  tdName.innerText = name;
  tdEmail.innerText = email;
  tdDelete.innerText = "DELETE";

  tr.appendChild(tdName);
  tr.appendChild(tdEmail);
  tr.appendChild(tdDelete);

  let result = table.appendChild(tr);
  document.body.appendChild(result);

  tdDelete.addEventListener("click", () => {
    tdName.innerText = "";
    tdEmail.innerText = "";
  });
});
