const scraper = require('recipe-scraper');
const fs = require('fs');

async function main() {
    let recipeData = await scraper('https://www.allrecipes.com/recipe/246787/italian-sausage-stuffed-shells/');

    fs.writeFile(`./db/${recipeData.name}.json`, JSON.stringify(recipeData), (err) =>
    err
      ? console.error(err)
      : console.log(
          `Review for ${recipeData.name} has been written to JSON file`
        )
    );
}

main();