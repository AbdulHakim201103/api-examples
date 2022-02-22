const loadBuddys = () =>{
    fetch ('https://randomuser.me/api/?results=10')
    .then (res => res.json())
    .then (data => displayBuddy(data))
}
loadBuddys();
const displayBuddy = data =>{
    const buddys = data.results;
    const buddysDiv = document.getElementById('buddy')
    for (const buddy of buddys) {
        const p =document.createElement('p');
        p.innerText = `
         Name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last}
         Email: ${buddy.email}
         Gender: ${buddy.gender}
         User Name: ${buddy.login.username}  
         PassWord: ${buddy.login.password}  ` ;
        buddysDiv.appendChild(p);
       
        // console.log(buddy);
    }   
}