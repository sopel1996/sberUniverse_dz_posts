import * as func from './func.js'

fetch('https://jsonplaceholder.typicode.com/posts').then(response =>{
if (response.ok) {
    return response.json();
} else {
    return Promise.reject(response);
}
})
.then(data =>{
    let userIds = func.getUserIds(data);
    userIds.forEach(el=>{
        const result = data.filter(user =>user.userId === +el)
        func.generatePostSection(result)
    })
})
.catch(function (error){
    console.warn(error);
})