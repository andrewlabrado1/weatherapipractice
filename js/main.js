//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `http://api.weatherapi.com/v1/current.json?key=3e99d0d2b375453f9c6175540232503&q=${choice}&aqi=no`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        let code = 
        console.log(data)
        document.getElementById('country').innerText = data.location.country
        document.getElementById('city').innerText = data.location.name
        document.getElementById('state').innerText = data.location.region
        document.getElementById('current').innerText = data.current.feelslike_f
        document.querySelector('img').src = data.current.condition.icon

        //images test
        // if(data.current.condition.text = "Partly cloudy"){
        //   document.querySelector('img').src = "img/partly-cloudy.png"
        // }

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}