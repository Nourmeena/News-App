fetch('news.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(i => {
            //card 
            let card = document.createElement("div");
            card.classList.add("card", i.category, "hide");

            //div of image
            let imgContainer = document.createElement("div");
            imgContainer.classList.add("image-container");

            let image = document.createElement("img");
            image.setAttribute("src", i.image);
            imgContainer.appendChild(image);
            card.appendChild(imgContainer);


            //container for news id, title, overview and date
            let container = document.createElement("div");
            container.classList.add("container");

            let ids = document.createElement("h6");
            ids.classList.add("newsID");
            ids.innerText = i.id;
            container.append(ids);

            let titles = document.createElement("h3");
            titles.classList.add("newsTitle");
            titles.innerText = i.title;
            container.append(titles);

            let overviews = document.createElement("h5");
            overviews.classList.add("newsOverview");
            overviews.innerText = i.overview;
            container.append(overviews);


            const newsD = new Date(i.date);
            const currentDate = new Date();
            const diff = currentDate.getTime() - newsD.getTime();
            const toDays = Math.floor(diff / (1000 * 60 * 60 * 24));
            let timeShow;
            if (toDays === 0) {
                timeShow = 'Today';
            }
            else {
                timeShow = `${toDays} days ago`;

            }
            let dates = document.createElement("p");
            dates.classList.add("newsDate");
            dates.innerText = timeShow;
            container.appendChild(dates);

            card.appendChild(container);
            document.getElementById("news").appendChild(card);

        })
    })
    .catch(error => console.error('Error:', error));

function filterNews(value) {
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
        if (value.toUpperCase() == button.innerText.toUpperCase()) {
            button.classList.add("active");
        }
        else {
            button.classList.remove("active");
        }
    });

    let elements = document.querySelectorAll(".card");
    elements.forEach((element) => {
        if (value == "All") {
            element.classList.remove("hide");
        }
        else {
            if (element.classList.contains(value)) {
                element.classList.remove("hide");
            }
            else {
                element.classList.add("hide");
            }
        }
    });

}

window.onload = () => {
    filterNews("All");
};

