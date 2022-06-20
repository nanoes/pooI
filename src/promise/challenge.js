const fetchData = require('../utils/fetchData');

const API = "rickandmortyapi.com/api/character";
fetchData(API)
.then(data => {
    console.log(data.info.count);
    return fetchData(` ${API}${data.results[0].id}`)
    /* Alt + 96 = ` */
}).then(data => {
    console.log(data.name)
    return fetchData(data.origin.url)
}).then(data =>{
    console.log(data.dimension)
})
.catch(err => console.error(err));