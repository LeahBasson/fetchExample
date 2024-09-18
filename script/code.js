// function fetchData() {
//     let container = document.querySelector('[data-container]')
//    fetch("https://leahbasson.github.io/onlineStore/data")
//    .then((response) => {
//     return response.json()
//    })
//    .then((data) => {
//     data.result.forEach( (product) => {
//         container.innerHTML += `
//         <div class = 'card'>
//         <img src = '${product.img_url}'>
//         <h2>${product.productName}</h2>
//         <h3>R${product.Amount}</h3>
//         <h4>${product.Material}</h4>
//         </div>
//         `
//     })
//    })
//    .catch((error) => {
//     console.log(error);
//    })
// }

// fetchData();


// Senior Developer Code
// async function fetchData(){
//     let container = document.querySelector('[data-container]')
//     let response = await fetch("https://leahbasson.github.io/onlineStore/data");
// Destructuring
//     let {result} = await response.json()
//     result.forEach (product => {
//         container.innerHTML += `
//         <div class = 'card'>
//         <img src = '${product.img_url}'>
//         <h2>${product.productName}</h2>
//         <h3>R${product.Amount}</h3>
//         <h4>${product.Material}</h4>
//         </div>`
//     })
// }
// fetchData()
                         
async function fetchData(){
    let container = document.querySelector('[data]')
    let response = await fetch("https://leahbasson.github.io/onlineStore/data");
    //Destructuring
    let {result} = await response.json()
    result.forEach (product => {
        container.innerHTML += `
            <tr>
                <td>${product.productName}</td>
                <td>${product.category}</td>
                <td><img src = '${product.img_url}'></td>
                <td>${product.Material}</td>
                <td>R${product.Amount}</td>
            </tr>
        
       
        `
    })
}
fetchData()

let search = document.querySelector('[search]').value;
let data = document.querySelector('[data]');
search.addEventListener('keypress', () =>{
    
       
})