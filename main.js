console.log(customers.results.length);
for (i = 0; i < customers.results.length; i++) {

    const content = `
        <div class="content">
            <img src=${customers.results[i].picture.large} alt="pic1">
            <p class="fullName">${customers.results[i].name.first} ${customers.results[i].name.last}</p>
            <p class="email">${customers.results[i].email}</p>
            <p class="address">${customers.results[i].location.street}</p>
            <p class="address">${customers.results[i].location.city}, ${customers.results[i].location.state} ${customers.results[i].location.postcode} </p>
            <p class="address">${customers.results[i].phone}</p>
            <p class="ssn">${customers.results[i].id.value}</p>
        </div>
    `;
    document.querySelector('.grid').innerHTML += content;
}

