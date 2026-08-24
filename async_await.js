 function fetchUserData () {
        return new Promise((resolve, reject) => {

    let success = true; // Simulating a successful operation
    if (success) {
       
        resolve({
            id:2930309,
            username:'John Doe',

        })
    }else{
            reject(new Error("Data not found"))


        }
    
});

    }

    async function getUser(){
        try {
            const user = await fetchUserData();
            console.log("user fetched successfully", user);
        } catch (error) {
            console.log("Error fetching user:", `${error.message}`);
        }
    }
    getUser();