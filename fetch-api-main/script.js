const url = 'https://randomuser.me/api/?results=30';
const main = document.querySelector('main');

async function getUser() {
  let res = await fetch(url);
  let { results } = await res.json();
  results.map((result) => {
    let card = `<div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src=${result.picture.large} class="img-fluid rounded-circle" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${result.name.first} ${result.name.last}</h5>
        <p class="card-text">${result.email}</p>
        <p class="card-text"><small class="text-muted">${result.location.city} ${result.location.country}</small></p>
      </div>
    </div>
  </div>
</div>`;
    main.innerHTML += card;
    //   main = main.innerHTML;
  });
  console.log(results);
}

getUser();

// fetch(url)
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   })
