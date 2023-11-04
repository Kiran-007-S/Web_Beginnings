//  Form Validation

var Users_Email = ["john@gmail.com", "rahul@yahoo.com", "kiran@007gmail.com"];
var Users_Password = ["john1234", "rahul22pp", "kirancapz"];

function validate(){
    let email = document.getElementById("InputEmail").value;
    let password = document.getElementById("InputPassword").value;
  
    if (!isValidEmail(email)) {
      alert("Enter a valid email address");
    } else if (!isValidPassword(password)) {
      alert("Enter a valid password of at least 8 characters");
    } else {
      let emailIndex = Users_Email.indexOf(email);
      let passwordIndex = Users_Password.indexOf(password);
  
      if (emailIndex !== -1 && emailIndex === passwordIndex) {
        alert("You are successfully logged in");
        window.location.href = "home.html";
      } else {
        alert("Invalid username or password");
      }
    }
  }

function isValidEmail(email) {
    // Use a regular expression to validate the email format
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return emailRegex.test(email);
  }
  
function isValidPassword(password) {
    return password.length >= 8;
  }
  

// Home page
// reading details from home page
function read_details(){
    let user_data = {}
    user_data["Name"] = document.getElementById("hm_Name").value;
    user_data["Age"] = document.getElementById("hm_Age").value;
    user_data["Place"] = document.getElementById("hm_Place").value;
    user_data["Email"] = document.getElementById("hm_Email").value;
    user_data["Year"] = document.getElementById("hm_Year").value;
    return user_data;
}


function submit_details(){
    let user_data = read_details();
    if(user_data.Name === "" || user_data.Age === "" || user_data.Place === "" || user_data.Email === "" || user_data.Year === ""){
          alert("Enter all input fields properly");
    }
    else{
    
    let table = document.getElementById("user_details_table");
    
    let tbody = document.createElement("tbody");
    table.appendChild(tbody);

    let table_item = document.createElement("tr");
    table_item.innerHTML = 
        `<td>${user_data.Name}</td>
         <td>${user_data.Age}</td>
         <td>${user_data.Place}</td>
         <td>${user_data.Email}</td>
         <td>${user_data.Year}</td>
         <td>
            <button type="button" class="btn btn-success" onclick=Edit_row(event)>Edit</button>
         </td>
         <td>
            <button type="button" class="btn btn-danger" onclick=delete_row(event)>Delete</button>        
         </td>`;
    
    tbody.appendChild(table_item);
    return reset_details();
    }
}
  
function delete_row(event){
     if(confirm("Are you sure you want to delete")){
     event.target.parentElement.parentElement.remove();
     }
}

function Edit_row(event) {
        selectedRow = event.target.parentElement.parentElement;
        document.getElementById("hm_Name").value = selectedRow.cells[0].innerHTML;
        document.getElementById("hm_Age").value = selectedRow.cells[1].innerHTML;
        document.getElementById("hm_Place").value = selectedRow.cells[2].innerHTML;
        document.getElementById("hm_Email").value = selectedRow.cells[3].innerHTML;
        document.getElementById("hm_Year").value = selectedRow.cells[4].innerHTML;
    }

function reset_details(){
    document.getElementById("hm_Name").value = "";
    document.getElementById("hm_Age").value = "";
    document.getElementById("hm_Place").value = "";
    document.getElementById("hm_Email").value = "";
    document.getElementById("hm_Year").value = "";
}