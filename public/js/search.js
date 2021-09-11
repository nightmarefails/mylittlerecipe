const searchHandler = async (event) => {
    event.preventDefault();

    console.log("running");

    // collect values from the login form
    const name = document.querySelector('#recipeName').value.trim();

    if (name) {
        document.location.replace(`/search/${name}`);
       
    } else {
        alert("Please enter a recipe name")
    }
};

document.querySelector('#searchForm').addEventListener('submit', searchHandler)