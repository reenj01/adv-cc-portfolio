let button
let dessertName = ""

function setup() {
  createCanvas(windowWidth, windowHeight);
  button = createButton('click me!');
  button.position(0, 100);
  button.mousePressed(makeAJoke);
}

function draw() {
  background(255);
  textSize(30)
  text(dessertName, 20, 200)
}

async function makeAJoke(){
  try{
    console.log("hello")
    let response = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert", 
    //1. we make an API request and store the response
    {headers: {"Accept":"application/json"}}
    //2. we specify we need the response as JSON (optional)
    )

    let content = await response.json()
    //3. we get the actual body we need from the response 
  
    dessertName = content.strMeal
    //4. we get the joke
  }
  
  catch(error){
    console.log(error)
    dessertName = "Sorry, system down, no jokes today"
  } 
}


async function makeHipsterJoke(){
  try{
    console.log('entered hipster joke function')
    let response = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert",
      {headers: {"Accept":"application/json"}}
    )
    console.log(response)

    let content = await response.json()
    console.log(content.results[0].joke)

    dessertName = content.results[0].joke

  }
  catch(error){
    console.log(error)
    dessertName = "Sorry, system down, no jokes today"

  }
}