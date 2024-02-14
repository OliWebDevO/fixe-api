let button = document.querySelector('button')
let input = document.querySelector('input')
let selectUn =document.querySelector('#from-currency')
let selectDeux =document.querySelector('#to-currency')
// let resultat = document.querySelector('.resultat')




button.addEventListener('click', function () {
let resultat = document.querySelector('.resultat') count for leyline


var myHeaders = new Headers();
myHeaders.append("apikey", "dCYBaeOVG9CN82q60ilXiM9xBBKZH4hd");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

fetch(`https://api.apilayer.com/fixer/convert?to=${selectDeux.value}&from=${selectUn.value}&amount=${input.value}`, requestOptions)
  .then(response => response.json())
  .then(data => {
    resultat.innerHTML += `<p>${input.value} ${selectUn.value} vaut <strong>${data.result.toFixed(1)}</strong> ${selectDeux.value} </p> ` ;
  })
  .catch(error => console.log('error', error));


// console.log()



})



// fetch(`https://api.giphy.com/v1/gifs/search?api_key=GEmjEES5bxqnnyJA6fETMXMRRlq8ssOX&q=${gifName.value}&limit=${select.value}`)
//   .then(response => response.json())
//   .then(data => {
//     data.data.forEach(function(oneGif) {
//       wrapper.innerHTML += `<img src="${oneGif.images.downsized.url}" alt="">`
//     })
//     // data.data.forEach(function(singleData){
//     //   console.log('teest');
//     // console.log(data.data);
 
//     // });
//   })
//   .catch(error => {console.log("Erreur lors de la récup des données :", error);
// })
