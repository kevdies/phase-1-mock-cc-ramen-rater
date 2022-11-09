

fetch("http://localhost:3000/ramens")
    .then((res) => res.json())
    .then((data) => getEachRamenBowl(data));
//data is an array of objects which are ramen bowls
//create a forEach on the data to grab each ramen bowl



function getEachRamenBowl(data) {
    data.forEach((ramen) => {
        const ramenName = ramen.name;
        const restaurantName = ramen.restaurant;
        const image = ramen.image;
        const rating = ramen.rating;
        const comment = ramen.comment;

        const imageDiv = document.querySelector("#ramen-menu")
        const imageTag = document.createElement("img");
        imageTag.src = image;
        imageDiv.append(imageTag);

        const ramenDetailH2 = document.querySelector("#ramen-detail > h2")
        const imageDetail = document.querySelector("#ramen-detail > img")
        const restaurantDetail = document.querySelector("#ramen-detail > h3")
        const ratingDetail = document.querySelector("#rating-display")
        const commentDetail = document.querySelector("#comment-display")

        imageTag.addEventListener("click", () => {
            ramenDetailH2.textContent = ramenName;
            imageDetail.src = image;
            restaurantDetail.src = restaurantName;
            ratingDetail.textContent = rating;
            commentDetail.textContent = comment;

            //addEventListener for create new and add it to the comment section
            //create var for comment section
            //create a p for the comment section and append it the the comment section
            //submit form eprevent()
            //e.target the value of each text area
            //when

        const commentSection = document.querySelector("#comment-display")
        const commentP = document.querySelector("#comment-display")

        const submitForm = document.querySelector("#new-ramen")

        const newNameInput = document.querySelector("#new-ramen > label:nth-child(2)")
        const newRestaurantInput = document.querySelector("#new-ramen > label:nth-child(4)")
        const newImageInput = document.querySelector("#new-image")
        const newRatingInput  = document.querySelector("#new-image")

  commentForm.addEventListener("submit", (event) => {
            event.preventDefault();
            event.target.value = newNameInput
            event.target.value = newRestaurantInput
            event.target.value = newImageInput
            event.target.value = newRatingInput
            })
        })
    })
}
