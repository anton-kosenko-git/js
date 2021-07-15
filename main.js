let characters = document.getElementById('characters')

window.onload = () => {

   const character = document.createElement('li');
   // character.innerHTML =
   //    "<span>responseObj.name</span>",
   //    "<span></span>",
   //    "<i></i>",
   //    "<span></span>",
   //    "<span></span>",
   //    "<span></span>",
   //    "<span></span>";
   characters.appendChild(character);

   const request = new XMLHttpRequest();

   request.open('GET', 'https://rickandmortyapi.com/api/character', true);
   request.responseType = 'json';
   request.send();

   request.onload = function () {
      character = request.response;
   }

   function populateHeader(jsonObj) {
      const character1 = document.createElement('li');
      character1.textContent = jsonObj['Name'];
      header.appendChild(character1);
   }

   function showCharacter(jsonObj) {
      const character = jsonObj['characters'];

      for (let i = 0; i < characters.length; i++) {
         //const character = document.createElement('li');


      }
   }

};
