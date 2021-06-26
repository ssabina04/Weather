const API = 'http://api.openweathermap.org/data/2.5/weather?q='
const KEY = '7ff88fa2daf9a8155ed942e75ab836f2'
const secondStr = '&appid=' 

const input = document.getElementById('searchCity')
const btn = document.getElementById('btn')
const output = document.getElementById('output')
const searchBar = document.createElement('div')
const pText = document.createElement('section')
pText.classList.add = ('pText')


// const map = document.createElement('div')
// map.id = 'map'


const search = async () => {
    let text = input.value
    let url = API + text + secondStr + KEY
    let request = await fetch(url)
    let response = await request.json()

    output.innerHTML = ''
    pText.innerHTML = ''
    input.value = ''
    
    
    console.log(response)
    renderCity(response)
    getMap(response)
}


const renderCity = (data) =>{
        let name = document.createElement('p')
        let temp = document.createElement('p')
         name.innerHTML = data.name
        temp.innerHTML = (data.main.temp - 273.15).toFixed(2) + ' °C'
        pText.append(name, temp)

        data.weather.forEach(user => {
            let descrip = document.createElement('p')
            descrip.innerHTML = user.description
            pText.append(descrip)
    })
        


    }
document.body.append(pText)
const getMap = (data) => {
    let divMap = document.createElement('div')
    divMap.id = 'map'
    divMap.style.cssText = 'width:400px; height: 400px; border-radius: 50%; border: lightblue 5px dashed;'
    output.append(divMap)

    DG.then(function () {
        map = DG.map('map', {
            center: [data.coord.lat, data.coord.lon],
            zoom: 13
        });
        // DG.marker([data.coord.lat, data.coord.lon]).addTo(map).bindPopup('Вы кликнули по мне!');
    });
   
}




btn.addEventListener('click', () => {
    search()
})
document.body.append(output)
