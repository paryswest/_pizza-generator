//Node backend server

//Modules
const http = require('http'); // Responds to http requests/server
const fs = require('fs'); // Access the disks
const url = require('url'); // Look at url to see what was being requested
const querystring = require('querystring'); // Look at query parameters as part of the request
const figlet = require('figlet'); // Returns ascii art for 404 (not required/not important)

// Looks at what's being asked from the client and if it understand what you're asking for, it provides a response (serves (the servers are listening for different URLs))
const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  switch(page) {
    case '/':
      readWrite(res, 'index.html', { 'Content-Type': 'text/html' })
      break
    case '/api':
      if (params['meatCount'] < 0 || params['veggiesCount'] < 0) {
        console.log('nice')
        return res.end()
      }
      else { // 'ingredientNums' exists and is more that zero
        console.log('damn')
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(generateIngredients(params['meatCount'], params['veggiesCount'])));
      }
      break
    case '/css/style.css':
      readWrite(res, 'css/style.css', { 'Content-Type': 'text/css' })
      break
    case '/images/pizzaoven.jpg':
      readWrite(res, 'images/pizzaoven.jpg', { 'Content-Type': 'image/jpg' })
      break
    case '/images/pizzabackground.jpg':
      readWrite(res, 'images/pizzabackground.jpg', { 'Content-Type': 'image/jpg' })
      break
    case '/images/ingredients/pizza-base.png':
      readWrite(res, 'images/ingredients/pizza-base.png', { 'Content-Type': 'image/png' })
      break
    // Meat Images
    case '/images/ingredients/pepperoni.png':
      readWrite(res, 'images/ingredients/pepperoni.png', { 'Content-Type': 'image/png' })
      break
    case '/images/ingredients/sausage.png':
      readWrite(res, 'images/ingredients/sausage.png', { 'Content-Type': 'image/png' })
      break
    case '/images/ingredients/bacon.png':
      readWrite(res, 'images/ingredients/bacon.png', { 'Content-Type': 'image/png' })
      break
    case '/images/ingredients/meatball.png':
      readWrite(res, 'images/ingredients/meatball.png', { 'Content-Type': 'image/png' })
      break
    case '/images/ingredients/ham.png':
      readWrite(res, 'images/ingredients/ham.png', { 'Content-Type': 'image/png' })
      break
    case '/images/ingredients/chicken.png':
      readWrite(res, 'images/ingredients/chicken.png', { 'Content-Type': 'image/png' })
      break
    case '/images/ingredients/beef.png':
      readWrite(res, 'images/ingredients/beef.png', { 'Content-Type': 'image/png' })
      break
    case '/images/ingredients/pork.png':
      readWrite(res, 'images/ingredients/pork.png', { 'Content-Type': 'image/png' })
      break
    // Veggie Images
    case '/images/ingredients/mushrooms.png':
      readWrite(res, 'images/ingredients/mushrooms.png', { 'Content-Type': 'image/png' })
      break
    case '/images/ingredients/onions.png':
      readWrite(res, 'images/ingredients/onions.png', { 'Content-Type': 'image/png' })
      break
    case '/images/ingredients/pineapple.png':
      readWrite(res, 'images/ingredients/pineapple.png', { 'Content-Type': 'image/png' })
      break
    case '/images/ingredients/black-olives.png':
      readWrite(res, 'images/ingredients/black-olives.png', { 'Content-Type': 'image/png' })
      break
    case '/images/ingredients/bell-peppers.png':
      readWrite(res, 'images/ingredients/bell-peppers.png', { 'Content-Type': 'image/png' })
      break
    case '/images/ingredients/banana-peppers.png':
      readWrite(res, 'images/ingredients/banana-peppers.png', { 'Content-Type': 'image/png' })
      break
    case '/images/ingredients/jalapeno.png':
      readWrite(res, 'images/ingredients/jalapeno.png', { 'Content-Type': 'image/png' })
      break
    case '/images/ingredients/tomato.png':
      readWrite(res, 'images/ingredients/tomato.png', { 'Content-Type': 'image/png' })
      break
    case '/js/main.js':
      readWrite(res, 'js/main.js', { 'Content-Type': 'text/javascript' })
      break
    default:
      figlet('404!!', (err, data) => {
        if (err) {
          console.log('Something went wrong...')
          console.dir(err)
          return
        }
        res.write(data)
        res.end()
      })
  }
})

server.listen(8000);

function readWrite(res, file, contentType) {
  fs.readFile(file, (err, data) => {
    res.writeHead(200, contentType)
    res.write(data)
    res.end()
  })
}

function generateIngredients(meatCount, veggiesCount) {
  // Available meats and veggies
  const PIZZA_MEAT = ['pepperoni', 'sausage', 'bacon', 'meatball', 'ham', 'chicken', 'beef', 'pork']
  const PIZZA_VEGGIES = ['mushrooms', 'onions', 'pineapple', 'black olives', 'bell peppers', 'banana peppers', 'jalapeno', 'tomato']

  // Converts to Number
  meatCount = +meatCount 
  veggiesCount = +veggiesCount 

  // Cleans up input
  if (meatCount < 0)
    meatCount = 0
  else if (meatCount > PIZZA_MEAT.length)
    meatCount = PIZZA_MEAT.length

  if (veggiesCount < 0)
    veggiesCount = 0
  else if (veggiesCount > PIZZA_VEGGIES.length)
    veggiesCount = PIZZA_VEGGIES.length

  // User Pizza Ingredients
  const meatIngredients = []
  const veggiesIngredients = []

  // Meat Loop
  // Perform loop until user's ingredient array is desired length
  while (meatIngredients.length < meatCount) {
    let rand = Math.floor(Math.random() * PIZZA_MEAT.length)

    if (meatIngredients.includes(PIZZA_MEAT[rand]))
      continue
    else
    meatIngredients.push(PIZZA_MEAT[rand])
  }

  // Vegetable Loop
  while (veggiesIngredients.length < veggiesCount) {
    let rand = Math.floor(Math.random() * PIZZA_VEGGIES.length)

    if (veggiesIngredients.includes(PIZZA_VEGGIES[rand]))
      continue
    else
    veggiesIngredients.push(PIZZA_VEGGIES[rand])
  }

  const pizzaIngredients = {
    meat: meatIngredients,
    veggies: veggiesIngredients
  }

  return pizzaIngredients
}