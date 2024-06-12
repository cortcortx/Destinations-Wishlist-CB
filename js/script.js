
document.getElementById("user_input_form").addEventListener("submit", (e)=> {
     e.preventDefault();

    const destionation = document.getElementById("destination_input").value;
    const location = document.getElementById("location_input").value;
    let photoUrl = document.getElementById("photo_url_input").value;
    const description = document.getElementById("description_input").value;

   if(photoUrl === ""){
    photoUrl =
      "https://gwinnettmagazine.com/wp-content/uploads/2021/04/vacation-696x410.jpg";
   }

    document.getElementById("user_input_form").reset();
})