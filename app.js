let form = document.getElementById('form-1');


// formInp = {
//     username: document.getElementById(form.username)
// }

form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    db.collection("creds").add({
        username: form.username.value,
        pw: form.pw.value,
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
    
})

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }