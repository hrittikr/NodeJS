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

// promise1
// .then(response => {
//     console.log("user fetched successfully", response)
// })
// .catch(error => {
//     console.error("Error fetching user:", error.message);
// });





// promise2


const promise2 = new Promise((resolve, reject) => {
    let success = true; // Simulating a successful operation
    if (success) {
        resolve({
            id: 101,
            bio: 'Software Developer',
            location: 'New York'
        });
    } else {
        reject(new Error("Profile not found"));
    }
});

promise2
.then(response => {
    console.log("Profile fetched successfully", response);
})
.catch(error => {
    console.error("Error fetching profile:", error.message);
});
