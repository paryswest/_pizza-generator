document.querySelector('#clickMe').addEventListener('click', makeReq)

async function makeReq(){

  const ingredientAmount = document.querySelector("#ingredientNums").value;
  const res = await fetch(`/api?ingredientNums=${ingredientAmount}`)
  const data = await res.json()

  console.log(data);
  document.querySelector("#ingredientOne").textContent = data.veggies
  document.querySelector("#ingredientTwo").textContent = data.meat
}