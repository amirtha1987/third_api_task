const place = document.getElementsByClassName("place")[0];

function placeholder() {
  const url = "https://jsonplaceholder.typicode.com/posts";

  fetch(url)
    .then((response) => {
      return response.json();
    })

    .then((data) => {
      data.forEach((element) => {
        const card = document.createElement("div");
        card.setAttribute("class", "card");
        card.setAttribute("style", "width:18rem");
        card.innerHTML += `
            <div class="card-body>
            <h5 class="card-title">${element.userId}</h5>
            <p class="card-text">${element.id}</p>
            <p class=""card-text">${element.title}</p>
            <p class=""card-text">${element.body}</p>
            </div>`;
        place.append(card);
      });
    })
    .catch((error) => console.log(error));
}

placeholder();
