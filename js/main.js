document.querySelector('#clickMe').addEventListener('click', makeReq)

async function makeReq(){
  const meatCount = document.querySelector("#meatCount").value
  const veggiesCount = document.querySelector("#veggiesCount").value
  
  const res = await fetch(`/api?meatCount=${meatCount}&veggiesCount=${veggiesCount}`)
  const data = await res.json()
  console.log(data)

  document.querySelector("#ingredientOne").textContent = data.veggies
  document.querySelector("#ingredientTwo").textContent = data.meat
  
  const pizzaImage = document.querySelector('#pizza-image')
  // reset image on each run
  pizzaImage.innerHTML = ''

  const img = document.createElement('img')
  // base image
  img.src = '../images/ingredients/pizza-base.png'
  pizzaImage.append(img)

  // Add meats
  for (let i = 0; i < data.meat.length; i++) {
    // Fixes name to match file names
    let meat = data.meat[i].replace(' ', '-')

    const img = document.createElement('img')
    img.src = `../images/ingredients/${meat}.png`

    pizzaImage.append(img)
  }
  // Add veggies
  for (let i = 0; i < data.veggies.length; i++) {
    // Fixes name to match file names
    let vegetable = data.veggies[i].replace(' ', '-')

    const img = document.createElement('img')
    img.src = `../images/ingredients/${vegetable}.png`

    pizzaImage.append(img)
  }
}