let recipes = {
    data: [
        {
            recipeName: "Recipe 1",
            category: "Breakfast",
            image: "image/dinner title.jpeg",
        },
        {
            recipeName: "Recipe 2",
            category: "Breakfast",
            image: "image/dinner title.jpeg",
        },
        {
            recipeName: "Recipe 3",
            category: "Breakfast",
            image: "image/dinner title.jpeg",
        },
        {
            recipeName: "Recipe 4",
            category: "Breakfast",
            image: "image/dinner title.jpeg",
        },
        {
            recipeName: "Recipe 5",
            category: "Breakfast",
            image: "image/dinner title.jpeg",
        },
        {
            recipeName: "Recipe 6",
            category: "Dessert",
            image: "image/dinner title.jpeg",
        },
        {
            recipeName: "Recipe 7",
            category: "Dessert",
            image: "image/dinner title.jpeg",
        },
        {
            recipeName: "Recipe 8",
            category: "Dessert",
            image: "image/dinner title.jpeg",
        },
        {
            recipeName: "Recipe 9",
            category: "Dessert",
            image: "image/dinner title.jpeg",
        },
        {
            recipeName: "Recipe 10",
            category: "Dessert",
            image: "image/dinner title.jpeg",
        },
        {
            recipeName: "Recipe 11",
            category: "Dinner",
            image: "image/dinner title.jpeg",
        },
        {
            recipeName: "Recipe 12",
            category: "Dinner",
            image: "image/dinner title.jpeg",
        },
        {
            recipeName: "Recipe 13",
            category: "Dinner",
            image: "image/dinner title.jpeg",
        },
        {
            recipeName: "Recipe 14",
            category: "Dinner",
            image: "image/dinner title.jpeg",
        },
        {
            recipeName: "Recipe 15",
            category: "Dinner",
            image: "image/dinner title.jpeg",
        },
        {
            recipeName: "Recipe 16",
            category: "Lunch",
            price: "29",
            image: "image/dinner title.jpeg",
        },
        {
            recipeName: "Recipe 17",
            category: "Lunch",
            image: "image/dinner title.jpeg",
        },
        {
            recipeName: "Recipe 18",
            category: "Lunch",
            image: "image/dinner title.jpeg",
        },
        {
            recipeName: "Recipe 19",
            category: "Lunch",
            image: "image/dinner title.jpeg",
        },
        {
            recipeName: "Recipe 20",
            category: "Lunch",
            image: "image/dinner title.jpeg",
        },
    ],
};

for (let i of recipes.data) {
    // Create Card
    let card = document.createElement("div");
    // Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    // image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    // Create love icon
    let loveIcon = document.createElement("i");
    loveIcon.setAttribute("data-feather", "heart");
    loveIcon.classList.add("love-icon");
    imgContainer.appendChild(loveIcon);
    // img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    // container
    let container = document.createElement("div");
    container.classList.add("container");
    // recipe
    let name = document.createElement("h5");
    name.classList.add("recipe-name");
    name.innerText = i.recipeName.toUpperCase();
    container.appendChild(name);

    card.appendChild(container);
    document.getElementById("recipes").appendChild(card);
}
feather.replace();

// parameter passed from button (Parameter same as category)
function filterProduct(value) {
    // update the text in the span with the selected value
    document.querySelector("#dropdown .select .selected").innerText = value;

    // select all cards
    let elements = document.querySelectorAll(".card");
    // loop through all cards
    elements.forEach((element) => {
        // display all cards on 'all' button click
        if (value == "Browse by") {
            element.classList.remove("hide");
        } else {
            // Check if element contains category class
            if (element.classList.contains(value)) {
                // display element based on category
                element.classList.remove("hide");
            } else {
                // hide other elements
                element.classList.add("hide");
            }
        }
    });
}

window.onload = () => {
    filterProduct("Browse by");
};

document.getElementById("search-input").addEventListener("input", () => {
    performSearch();
});

function performSearch() {
    // initializations
    let searchInput = document.getElementById("search-input").value.trim().toUpperCase(); // Trim whitespace and convert to uppercase
    let elements = document.querySelectorAll(".recipe-name");
    let cards = document.querySelectorAll(".card");
    let dropdown = document.querySelector(".selected");

    // If search input is empty, revert to "Browse By"
    if (searchInput === "") {
        dropdown.innerText = "Browse By";
        cards.forEach(card => card.classList.remove("hide")); // Show all cards
        return; // Exit the function
    }

    // loop through all elements
    elements.forEach((element, index) => {
        // check if text includes the search value
        if (element.innerText.toUpperCase().includes(searchInput)) {
            // display matching card
            cards[index].classList.remove("hide");
        } else {
            // hide others
            cards[index].classList.add("hide");
        }
    });
}






//dropdown
const dropdowns = document.querySelectorAll('#dropdown');


dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelector('.menu li');
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');

    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;

            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');
            options.forEach(option => {
                option.classList.remove('active');
            });
            option.classList.add('active');
        });
    });
});


//tambahan
$(document).ready(function () {

    $(".Navbar ul li a").click(function (e) {
        e.preventDefault();
        var targetUrl = $(this).attr("href");
        $("body").animate({ opacity: 0, marginTop: "100px" }, 500, function () {
            window.location.href = targetUrl;
        });
    });
    $("body").animate({ opacity: 1, marginTop: "0" }, 500);
});