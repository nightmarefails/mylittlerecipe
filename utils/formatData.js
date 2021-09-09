//Data from scraper is not the same format as DB. This will convert the data to the appropriate format
function formatRecipeData(data) {
    let formatedData = {
        name: data.name,
        user_id: data.user_id,
        description: data.description,
        ingredients: data.ingredients.join(),
        instructions: data.instructions.join(),
        time: data.time.total,
        servings: data.servings,
        image: data.image
    }

    return formatedData
}

//Website will use data how the scraper originally builds it. Array for ingredients and instructions
function revertRecipeData(data) {
    data.ingredients.split(',');
    data.instructions.split(',');
}

module.exports = {
    formatRecipeData,
    revertRecipeData
}