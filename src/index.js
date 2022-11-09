

// // fetch("http://localhost:3000/ramens")
// //     .then((res) => res.json())
// //     .then((data) => getEachRamenBowl(data));
// //data is an array of objects which are ramen bowls
// //create a forEach on the data to grab each ramen bowl

// // function getEachRamenBowl(data) {
// //     data.forEach((ramen) => {
// //         const ramenName = ramen.name;
// //         const restaurantName = ramen.restaurant;
// //         const image = ramen.image;
// //         const rating = ramen.rating;
// //         const comment = ramen.comment;

// //         const imageDiv = document.querySelector("#ramen-menu")
// //         const imageTag = document.createElement("img");
// //         imageTag.src = image;
// //         imageDiv.append(imageTag);

// //         const ramenDetailH2 = document.querySelector("#ramen-detail > h2")
// //         const imageDetail = document.querySelector("#ramen-detail > img")
// //         const restaurantDetail = document.querySelector("#ramen-detail > h3")
// //         const ratingDetail = document.querySelector("#rating-display")
// //         const commentDetail = document.querySelector("#comment-display")

// //         imageTag.addEventListener("click", () => {
// //             ramenDetailH2.textContent = ramenName;
// //             imageDetail.src = image;
// //             restaurantDetail.src = restaurantName;
// //             ratingDetail.textContent = rating;
// //             commentDetail.textContent = comment;

// //             //addEventListener for create new and add it to the comment section
// //             //create var for comment section
// //             //create a p for the comment section and append it the the comment section
// //             //submit form eprevent()
// //             //e.target the value of each text area
// //             //when

// //         const commentSection = document.querySelector("#comment-display")
// //         const commentP = document.querySelector("#comment-display")

// //         const submitForm = document.querySelector("#new-ramen")

// //         const newNameInput = document.querySelector("#new-ramen > label:nth-child(2)")
// //         const newRestaurantInput = document.querySelector("#new-ramen > label:nth-child(4)")
// //         const newImageInput = document.querySelector("#new-image")
// //             const newRatingInput = document.querySelector("#new-image")
// //             const newForm =

// //   commentForm.addEventListener("submit", (event) => {
// //       event.preventDefault();

// //             event.target.value = newNameInput
// //             event.target.value = newRestaurantInput
// //             event.target.value = newImageInput
// //       event.target.value = newRatingInput
// //             event.target.value = new
// //             })
// //         })
// //     })
// // }

// const form = document.querySelector("#new-ramen");
// const menu = document.querySelector("#ramen-menu");

// fetch("http://localhost:3000/ramens")
//     .then((res) => res.json())
//     .then((data) => renderRamen(data))

// const renderRamen = function(ramens) {
//     ramens.forEach((ramen) => {

//         const img = document.createElement("img");
//         const detailImg = document.querySelector(".detail-image");
//         const detailName = document.querySelector(".name");
//         const detailRestaurant = document.querySelector(".restaurant");
//         const detailRating = document.querySelector("#rating-display");
//         const detailComment = document.querySelector("#comment-display");


//         img.src = ramen.image;

//         menu.append(img);

//         img.addEventListener("click", () => {
//             detailImg.src = ramen.image;
//             detailName.textContent = ramen.name;
//             detailRestaurant.textContent = ramen.restaurant;
//             detailRating.textContent = ramen.rating;
//             detailComment.textContent = ramen.comment;

//         })
//     })
// }

// constAddRamen = () => {
//     form.addEventListener("submit", (event) => {
//         event.preventDefault();
//         //use name attributes to target on the inputs
//         const ramen = {
//             name:       form["name"].value,
//             restaurant: form["restaurant"].value,
//             image:      form["image"].value,
//             rating:     form["rating"].value,
//             comment:    form["new-comment"].value
//         }

//     })
// }

// addRamen();
// ///////////////////All Deliverables from dj ritchey////

// These deliverables are not required to pass the code challenge, but if you have
// the extra time, or even after the code challenge, they are a great way to
// stretch your skills.

// > Note: If you are going to attempt these advanced deliverables, please be sure
// > to have a working commit with all the Core Deliverables first!

// As a user, I can:

// - See the details for the first ramen as soon as the page loads (without
//   clicking on an image)

// - Update the rating and comment for a ramen by submitting a form. Changes should
//   be reflected on the frontend. No need to persist. You can add this HTML to the
//   `index.html` file to create the edit form:

// ```html
// <form id="edit-ramen">
//   <h4>Update the Featured Ramen</h4>
//   <label for="rating">Rating: </label>
//   <input type="number" name="rating" id="new-rating" />
//   <label for="new-comment">Comment: </label>
//   <textarea name="new-comment" id="new-comment"></textarea>
//   <input type="submit" value="Update" />
// </form>
// ```

// - Delete a ramen (you can add a "delete" button if you'd like, or use an
//   existing element to handle the delete action). The ramen should be removed
//   from the `ramen-menu` div, and should not be displayed in the `ramen-detail`
//   div. No need to persist.

const form = document.querySelector('#new-ramen');
const menu = document.querySelector('#ramen-menu');
const detailImg = document.querySelector('.detail-image');
const detailName = document.querySelector('.name');
const detailRestaurant = document.querySelector('.restaurant');
const detailRating = document.querySelector('#rating-display');
const detailComment = document.querySelector('#comment-display');

const editForm = document.querySelector('#edit-ramen');
const editRating = document.querySelector("#new-rating")
const editComment = document.querySelector("new-comment")

const deleteBtn = document.querySelector('#delete');

let allRamen = [];
let currentRamen;

fetch('http://localhost:3000/ramens')
  .then(resp => resp.json())
  .then(data => renderRamen(data))

const renderRamen = (ramens) => {
  allRamen = ramens;

  if (ramens.length < 1) {
    menu.innerHTML = ''

    currentRamen = undefined;
    detailImg.src = '';
    detailName.textContent = '';
    detailRestaurant.textContent = '';
    detailRating.textContent = '';
    detailComment.textContent = '';
    return;
  }

  currentRamen = ramens[0];
  detailImg.src = ramens[0].image;
  detailName.textContent = ramens[0].name ;
  detailRestaurant.textContent = ramens[0].restaurant;
  detailRating.textContent = ramens[0].rating;
  detailComment.textContent = ramens[0].comment;

  ramens.forEach((ramen) => {
    const img = document.createElement('img');
    img.src = ramen.image;

    menu.append(img);

    img.addEventListener('click', () => {
      currentRamen = ramen;
      detailImg.src = ramen.image;
      detailName.textContent = ramen.name ;
      detailRestaurant.textContent = ramen.restaurant;
      detailRating.textContent = ramen.rating;
      detailComment.textContent = ramen.comment;
    })

  })
}


const addRamen = () => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const ramen = {
      name:       form["name"].value,
      restaurant: form["restaurant"].value,
      image:      form["image"].value,
      rating:     form["rating"].value,
      comment:    form["new-comment"].value
    }

    const img = document.createElement('img');

    const detailImg = document.querySelector('.detail-image');
    const detailName = document.querySelector('.name');
    const detailRestaurant = document.querySelector('.restaurant');
    const detailRating = document.querySelector('#rating-display');
    const detailComment = document.querySelector('#comment-display');

    img.src = ramen.image;

    menu.append(img);

    img.addEventListener('click', () => {
      detailImg.src = ramen.image;
      detailName.textContent = ramen.name ;
      detailRestaurant.textContent = ramen.restaurant;
      detailRating.textContent = ramen.rating;
      detailComment.textContent = ramen.comment;
    })


  })
}

const updateRamen = () => {
  editForm.addEventListener('submit', (e) => {
    e.preventDefault();
    detailRating.textContent = e.target[0].value;
    detailComment.textContent = e.target[1].value;
  })
}

const deleteRamen = () => {
  deleteBtn.addEventListener('click', () => {
    const id = currentRamen.id;
    const filteredArr = allRamen.filter((ramen) => (
      ramen.id !== id
    ));

  menu.innerHTML = '';
  renderRamen(filteredArr);
  })
}

addRamen();
updateRamen();
deleteRamen();
// advanced
