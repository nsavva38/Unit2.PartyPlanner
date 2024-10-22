// dont forget about STATE Pets R US



// The base URL is https://fsa-crud-2aa9294fe819.herokuapp.com/api/2409-ftb-et-web-ftb/events
// The next segment is our cohort name, e.g. /2409-ftb-et-web-ftb
// The last segment is based on the resource you are trying to access, e.g. /events

//dont forget .json() to make it legible

const state = {
  parties: []

}



const renderAllParties = async () => {


const response = await fetch(`https://fsa-crud-2aa9294fe819.herokuapp.com/api/2409-ftb-et-web-ftb/events`)
const events = await response.json();

console.log(events);
const partyList = document.querySelector(`ol`);


const partyEvents = events.data.map((event) => {
  return event
})

console.log(``);

partyEvents.forEach((party) => {
  console.log(party.name);
  console.log(party.date);

  dateAndTimeArray = party.date.split(`T`);
  const date = dateAndTimeArray[0];
  const time = dateAndTimeArray[1];

  const partyLI = document.createElement(`li`);
  partyLI.innerHTML =  `
  <h3>${party.name}</h3>
    <p>Description: ${party.description}</p>
    <p>Date: ${date}</p>
    <p>Time: ${time}</p>
    <p>Location: ${party.location}</p>
  `;
  
  
  partyList.append(partyLI);
  
})


}

renderAllParties();



















































// grab the form



// form stuff where it says to add names and such for a new party is optional
const form = document.querySelector(`form`);

form.addEventListener(`submit`, (event) => {
  event.preventDefault();

  const inputName = document.querySelector(`#name`);
  if (inputName.value === ``) {
    return;
  }
  const inputLocation = document.querySelector(`#location`);
  if (inputLocation.value === ``) {
    return;
  }
  const inputDescription = document.querySelector(`#description`);
  if (inputDescription.value === ``) {
    return;
  }
  
  
  state.parties.push({name: inputName.value, location: inputLocation.value, description: inputDescription.value});
  inputName.value = ``;
  inputLocation.value = ``;
  inputDescription.value = ``;
  console.log(state.parties);
});




//list of parties from API/events







