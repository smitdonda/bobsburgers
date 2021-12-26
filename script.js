// fetch api and print data in html page 
function getdata(){
    // URL
    url = "https://bobsburgers-api.herokuapp.com/characters"
    fetch(url)
        .then((response)=>response.json())
        .then((data)=>{
        let output ="";
        // debugger;
        data.forEach(function(user){
        // table rows and table data 
            output +=`
            <tr>
                <td scope="col">${user.id}</td>
                <td scope="col">${user.name}</td> 
                <td scope="col">${user.gender}</td>
                <td scope="col">${user.hairColor}</td>
                <td scope="col">${user.occupation}</td>
            </tr>    
            `;
        });
        //print the table data
        document.getElementById('user').innerHTML = output;
        //any error print the error in console
    }).catch((error)=>console.log(error))
}
getdata()
