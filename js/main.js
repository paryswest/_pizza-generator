document.querySelector('#clickMe').addEventListener('click', makeReq)

async function makeReq(){

  const ingredientAmount = document.querySelector("#ingredientNums").value;
  const res = await fetch(`/api?ingredientNums=${ingredientAmount}`)
  const data = await res.json()

  console.log(data);
  document.querySelector("#ingredientOne").textContent = data.veggies
  document.querySelector("#ingredientTwo").textContent = data.meat
  document.querySelector("#ingredientThree").textContent = data.wildcardIngredient.join(',  ')
  
  //lists the first of each ingredient in the "random pizza", which feels more digestible, One pizza with three toppings...
  if (data.veggies[0] == data.veggies[1]){
    data.veggies[0] = `Extra ${data.veggies[1]}`
  }
  if(data.meat[0] == data.meat[1]){
    data.meat[0] = `Extra ${data.meat[1]}`
  }
  if(data.wildcardIngredient[0] == data.wildcardIngredient[1]){
    data.wildcardIngredient[0] = `Extra ${data.wildcardIngredient[1]}`
  }else{null}

  document.querySelector("#pizzaOneMeat").textContent = data.veggies[0]
  document.querySelector("#pizzaOneVeggie").textContent = data.meat[0]
  document.querySelector("#pizzaOneExtra").textContent = data.wildcardIngredient[0]
  
}