async function getRandomDessert() {
  const output = document.getElementById('dessert-output');
  output.innerHTML = 'Loading...';

  try {
    // Step 1: Fetch all dessert meals
    const listResponse = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert');
    const listData = await listResponse.json();

    // Step 2: Pick a random meal
    const meals = listData.meals;
    const randomMeal = meals[Math.floor(Math.random() * meals.length)];

    // Step 3: Fetch full meal details
    const detailsResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${randomMeal.idMeal}`);
    const detailsData = await detailsResponse.json();
    const meal = detailsData.meals[0];

    // Step 4: Display meal info
    output.innerHTML = `
      <h2>${meal.strMeal}</h2>
      <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
      <p><strong>Instructions:</strong> ${meal.strInstructions.slice(0, 300)}...</p>
    `;
  } catch (error) {
    output.innerHTML = 'Failed to load dessert.';
    console.error(error);
  }
}

window.onload = function() {
  getRandomDessert();
  setTimeout(() => {
    let btn = document.querySelector('.restart-btn');
    btn.style.display = "block";
  }, 3000);
};