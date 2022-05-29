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
  if (page == '/') {
    fs.readFile('index.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  }
  // else if (page == '/otherpage') {
  //   fs.readFile('otherpage.html', function(err, data) {
  //     res.writeHead(200, {'Content-Type': 'text/html'});
  //     res.write(data);
  //     res.end();
  //   });
  // }
  // else if (page == '/otherotherpage') {
  //   fs.readFile('otherotherpage.html', function(err, data) {
  //     res.writeHead(200, {'Content-Type': 'text/html'});
  //     res.write(data);
  //     res.end();
  //   });
  // }
  else if (page == '/api') {
    if ('ingredientNums' in params) {
      if (params['ingredientNums'] > 0) {
        let ingredientObj = generateIngredients(params['ingredientNums'])
        res.writeHead(200, { 'Content-Type': 'application/json' });
        
        res.end(JSON.stringify(ingredientObj));
      } //student = leon
      else {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        
        res.end(JSON.stringify(objToJson));
      } //student != leon
    } //student if
  } //else if
  else if (page == '/css/style.css') {
    fs.readFile('css/style.css', function (err, data) {
      // can this fix our css error?? /julien
      // res.writeHead(200, { 'Content-Type': 'text/css' });
      res.write(data);
      res.end();
    });
  } else if (page == '/js/main.js') {
    fs.readFile('js/main.js', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/javascript' });
      res.write(data);
      res.end();
    });
  } else {
    figlet('404!!', function (err, data) {
      if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
      }
      res.write(data);
      res.end();
    });
  }
});

server.listen(8000);

function generateIngredients(ingredientNum) {
  // Unary Plus (+)
  ingredientNum = +ingredientNum // makes var a number
  const newIngredientObj = {}
  if(ingredientNum > 0){
    const objToJson = {
      veggies: ['Mushrooms', 'Spinach', 'Onions', 'Olives', 'Banana Peppers', 'Mushrooms', 'Green Peppers', 'Asparagus'],
      meat: ['Pepperoni', 'Mystery Meat', 'Chicken', 'Ham', 'Beef', 'Salami', 'Bacon', 'Turkey Bacon'],
      wildcardIngredient: ['Pineapples', 'Anchovies', 'Olives', 'Cheddar Cheese', 'Feta Cheese', 'Asiago Cheese', 'Hot Sauce', 'Mustard'],
    };
    
    let ingredientArrVeg = []
    let ingredientArrMeat = []
    let ingredientArrWildcard = []
    for(i=0;i<ingredientNum;i++){

      let oneToThree = Math.floor(Math.random()*3) // generates random number 0,1,2
      
      let ingredientVeg = objToJson.veggies[oneToThree]
      let ingredientMeat = objToJson.meat[oneToThree]
      let ingredientWildcard = objToJson.wildcardIngredient[oneToThree]
      ingredientArrVeg.push(ingredientVeg)
      ingredientArrMeat.push(ingredientMeat)
      ingredientArrWildcard.push(ingredientWildcard)

    }
    newIngredientObj.veggies = ingredientArrVeg
    newIngredientObj.meat = ingredientArrMeat
    newIngredientObj.wildcardIngredient = ingredientArrWildcard
    //let newObjToJson = 
    return newIngredientObj
  }
  else{
    const objToJson = {
      veggies: null,
      meat: null,
      wildcardIngredient: null,
    };
    return objToJson
  }
}

