fetchBuddy = () => {
  fetch("https://randomuser.me/api/")
    .then((res) => res.json())
    .then((data) => showBuddies(data));
};

showBuddies = (data) => {
  const section = document.getElementById("section");
  const buddy = data.results;
  for (const details of buddy) {
    const { name, gender, phone, location, email, dob } = details;
    const { date } = dob;
    const { city, country } = location;
    const { title, first, last } = name;
    const { thumbnail } = details.picture;
    const buddyCard = document.getElementById("card");
    buddyCard.innerHTML = `
          <img src="${thumbnail}" class="card-img-top " alt="..." />
          <div class="card-body">
            <h5 class="card-title">${title} ${first} ${last}  </h5>
            <div class="d-flex justify-content-between">
              <h6 class="card-text">
                Mobile: ${phone}
              </h6>
              <h6 class="card-text ">
              Gender: ${gender}
              </h6>
            </div>
            <h6 class="card-text">
             Email: ${email}
            </h6>
            <h6 class="card-text">
             From: ${city}, ${country}
            </h6>
            <h6 class="card-text">
            Date of birth: ${date}
            </h6>
          </div>
  `;
    section.appendChild(buddyCard);
  }
};

document.getElementById("refresh").addEventListener("click", function () {
  window.location.reload();
});

fetchBuddy();
