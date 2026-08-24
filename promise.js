    const promise1 = new Promise((resolve, reject) => {

    let success = true; // Simulating a successful operation
    if (success) {
       
        resolve({
            id:2930309,
            username:'John Doe',

        })
    }else{
            reject(new Error("Data not found"))


        }
    
})

promise1
.then(response => {
    console.log(response)
})
.catch(error => {
    console.error(error)
})
