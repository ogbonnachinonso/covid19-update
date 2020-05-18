// Fetch API
const url = "https://covidnigeria.herokuapp.com/api";
fetch(url)
  .then(response => response.json())
  .then((response) => {
    
    
    //Declare Required variables
    const nigeria = response.data;
    const states =  response.data.states;
    const section = document.querySelector('.states');
   
    
    const filter = document.querySelector('#filter');

  //add event listener for filter
  filter.addEventListener('keyup', filterStates);
  // filter states
  function filterStates(e) {
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.states-collection').forEach(function(eachState){
      const item = eachState.firstChild.textContent;
      if (item.toLowerCase().indexOf(text) != -1){
        eachState.style.display = 'block';
      }else{
        eachState.style.display = 'none';
      }
    });
  }


      states.forEach((eachState) => {
        //create element
        console.log(response);
        const div = document.createElement('div');
        const card = document.createElement('div');
        const cardHeader = document.createElement('div');
        const cardBody = document.createElement('div');
        const cardColumn = document.createElement('div');
        const cardTitle = document.createElement('h6');
        const cardText = document.createElement('p');

        const cardColumn1 = document.createElement('div');
        const cardTitle1 = document.createElement('h6');
        const cardText1 = document.createElement('p');

         const cardColumn2 = document.createElement('div');
        const cardTitle2 = document.createElement('h6');
        const cardText2 = document.createElement('p');

        const cardColumn3 = document.createElement('div');
        const cardTitle3 = document.createElement('h6');
        const cardText3 = document.createElement('p');


        //add classes
        div.className = 'col-sm-6 states-collection';
        card.className ='card-mb-3 text-white bg-success';
        cardHeader.className ='card-header text-center bg-dark';
        cardBody.className ='card-body row text-center mt-3';
        cardTitle.className ='card-title';
        cardText.className ='card-text btn btn-outline-warning';
        cardColumn.className = ' col-sm-3 mt-3';
        
        cardColumn1.className = 'col-sm-3 mt-3';
        cardTitle1.className = 'card-title';
        cardText1.className = 'card-text btn btn-outline-secondary';

        cardColumn2.className = 'col-sm-3 mt-3';
        cardTitle2.className = 'card-title';
        cardText2.className = 'card-text btn btn-outline-dark';

        cardColumn3.className = 'col-sm-3 mt-3';
        cardTitle3.className = 'card-title';
        cardText3.className = 'card-text btn btn-outline-danger'


        //add data
        cardTitle.textContent ='confirmed';
        cardTitle1.textContent ='active'
        cardTitle2.textContent ='discharged';
        cardTitle3.textContent ='death';
        cardHeader.appendChild(document.createTextNode(eachState.state));
        cardText.appendChild(document.createTextNode(eachState.confirmedCases));
        cardText1.appendChild(document.createTextNode(eachState.casesOnAdmission));
        cardText2.appendChild(document.createTextNode(eachState.discharged));
        cardText3.appendChild(document.createTextNode(eachState.death));

        //append elements
        cardColumn.appendChild(cardTitle);
        cardColumn.appendChild(cardText);
         
        cardColumn1.appendChild(cardTitle1);
        cardColumn1.appendChild(cardText1);

        cardColumn2.appendChild(cardTitle2);
        cardColumn2.appendChild(cardText2);

        cardColumn3.appendChild(cardTitle3);
        cardColumn3.appendChild(cardText3);




        cardBody.appendChild(cardColumn);
        cardBody.appendChild(cardColumn1);
        cardBody.appendChild(cardColumn2);
        cardBody.appendChild(cardColumn3);


        card.appendChild(cardHeader);
        card.appendChild(cardBody);

        div.appendChild(card);

        section.appendChild(div);
      
   });
    // get  our ui elements

    const el_nigeria = document.querySelector('.nigeria');
    const el_nigeriaConfirmedCases = document.querySelector('.nigeria__confirmed_cases');
    const el_activeCases = document.querySelector('.nigeria__active_cases');
    const el_discharged = document.querySelector('.nigeria__discharge_cases');
    const el_death = document.querySelector('.nigeria__death_cases');



    //append data from api

   el_nigeria.textContent = "Nigeria";
   el_nigeriaConfirmedCases.textContent = nigeria.totalConfirmedCases;
   el_activeCases.textContent = nigeria.totalActiveCases;
   el_discharged.textContent = nigeria.discharged;
   el_death.textContent = nigeria.death;

  })
    .catch((err) => console.log(err));







