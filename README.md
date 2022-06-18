# Too Hungry to Decide
A random topping generator for all pizza lovers alike! If you love pizza, this app is surely something that you'll....wanna sink your teeth in to. Vegetarian Friendly! 🥬


**Link to project:** https://pizza-generator-api.herokuapp.com/
**Please note that as of right now, this application is only desktop friendly, but we are working to make this application mobile responsive!**


<div align="center">
<img src="https://github.com/paryswest/_pizza-generator/blob/e36e853cd3a0f587332faf84a4c5062acc067955/Pizzarandomizer.gif" height:"500px" width="100%" >
</div>  

## How It's Made:

**Tech used:** HTML, CSS, Figma, JavaScript, Node.js (Express.js coming soon!)

A full stack application using a Node server to retrieve the information that is then displayed on the UI which was styled with basic HTML and CSS. The challenge was to create a server bare-bones (no frameworks or anything of that nature), so this is how the project was created. We implemented the base modules in order for this application to run server-side (http, fs, url, querystring) and even figlet (for the default 404 page). The server was created using the .createServer method and inside, since there were so many toppings to iterate through, a switch statement was used to cover the various amount of toppings (created in Figma) that were to be shown on the actual pizza. A function containing the names of the specified toppings were put in to arrays and following that, depending on the amount of toppings that are entered on the UI, that number of toppings will appear. This operation was handled with a combination of "if-else" and "while" statements. Improvements can definitely be made in this area, which the plans is to do later on. 

## Optimizations

- We plan to refactor the back end using Express.js for readability and efficiency.
- Style and design may be changed just for better visual appeal.
- Could possibly be revised in to a React project since this project is more involved. 
- Make it responsive as it is only compatible with browsers at the moment, not mobile devices and smaller screens. 

## Lessons Learned:

Quite a few things were learned in this project. For one, we learned that Github version control was super important for handling forks from each contributor and we learned shortcuts insofar as how to use Git version control more effectively overall. Secondly, we learned the reason WHY express is a neccessity, as this was quite the challenge to complete with just bare-bones node.js. Finally, we learned about the importance of communicating with each other effectively, especially when changes were being made. We all listened to each other's inputs and reasonings, and we provided feedback whenever a member of the group needed it. 

## Contributors:
<li>
  Parys West: 
  <a href="https://mobile.twitter.com/intellectjunkie">
    <img src="https://img.shields.io/static/v1?label=|&message=TWITTER&color=23555f&style=plastic&logo=twitter&logo-color=white"/>
  </a>
  <a href="https://www.linkedin.com/in/paryswest/">
    <img src="https://img.shields.io/static/v1?label=|&message=LINKEDIN&color=23555f&style=plastic&logo=linkedin&logo-color=white"/>
  </a>
  <a href="https://www.therealparyswest.com">
    <img src="https://img.shields.io/static/v1?label=|&message=PORTFOLIO&color=23555f&style=plastic&logo=react&logo-color=white"/>
  </a>
</li>
<li>
  Julien Mellon:
   <a href="https://twitter.com/julienmellon">
    <img src="https://img.shields.io/static/v1?label=|&message=TWITTER&color=23555f&style=plastic&logo=twitter&logo-color=white"/>
  </a>
  <a href="https://www.linkedin.com/in/julienmellon">
    <img src="https://img.shields.io/static/v1?label=|&message=LINKEDIN&color=23555f&style=plastic&logo=linkedin&logo-color=white"/>
  </a>
  <a href="https://julienmellon.netlify.app/">
    <img src="https://img.shields.io/static/v1?label=|&message=PORTFOLIO&color=23555f&style=plastic&logo=react&logo-color=white"/>
  </a>
</li>
<li>
  Gabriel Rodriguez:
  <a href="https://twitter.com/GabrielDevelops">
    <img src="https://img.shields.io/static/v1?label=|&message=TWITTER&color=23555f&style=plastic&logo=twitter&logo-color=white"/>
  </a>
  <a href="https://www.linkedin.com/in/gabrieldevelops">
    <img src="https://img.shields.io/static/v1?label=|&message=LINKEDIN&color=23555f&style=plastic&logo=linkedin&logo-color=white"/>
  </a>
  <a href="https://gabriel-dev.netlify.app/">
    <img src="https://img.shields.io/static/v1?label=|&message=PORTFOLIO&color=23555f&style=plastic&logo=react&logo-color=white"/>
  </a>
</li>
<li>
  Nimesh Jagota:
<!--   <a href="">
    <img src="https://img.shields.io/static/v1?label=|&message=TWITTER&color=23555f&style=plastic&logo=twitter&logo-color=white"/>
  </a> -->
  <a href="https://www.linkedin.com/in/njagota/">
    <img src="https://img.shields.io/static/v1?label=|&message=LINKEDIN&color=23555f&style=plastic&logo=linkedin&logo-color=white"/>
  </a>
<!--   <a href="">
    <img src="https://img.shields.io/static/v1?label=|&message=PORTFOLIO&color=23555f&style=plastic&logo=react&logo-color=white"/>
  </a> -->
</li>
<li>
  Keith Gregory:
  <a href="https://twitter.com/DevKeithGregory">
    <img src="https://img.shields.io/static/v1?label=|&message=TWITTER&color=23555f&style=plastic&logo=twitter&logo-color=white"/>
  </a>
  <a href="https://www.linkedin.com/in/realkeithgregory">
    <img src="https://img.shields.io/static/v1?label=|&message=LINKEDIN&color=23555f&style=plastic&logo=linkedin&logo-color=white"/>
  </a>
  <a href="https://keithgregory.netlify.app/">
    <img src="https://img.shields.io/static/v1?label=|&message=PORTFOLIO&color=23555f&style=plastic&logo=react&logo-color=white"/>
  </a>
</li>
