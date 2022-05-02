let statesArray = ["Andhra Pradesh",
"Arunachal Pradesh",
"Assam",
"Bihar",
"Chhattisgarh",
"Goa",
"Gujarat",
"Haryana",
"Himachal Pradesh",
"Jammu and Kashmir",
"Jharkhand",
"Karnataka",
"Kerala",
"Madhya Pradesh",
"Maharashtra",
"Manipur",
"Meghalaya",
"Mizoram",
"Nagaland",
"Odisha",
"Punjab",
"Rajasthan",
"Sikkim",
"Tamil Nadu",
"Telangana",
"Tripura",
"Uttar Pradesh",
"Uttarakhand",
"West Bengal"]

function loadstates(){
    for(let i=0; i<statesArray.length; i++){
        let eachState = statesArray[i];
        let element = document.createElement('option') // <option></option>
        let text = document.createTextNode(eachState) // delhi
        element.appendChild(text) //<option>delhi</option>
        element.value = Math.random(); //<option value=1>delhi</option>
        element.style.textAlign = 'center';
        
     document.getElementById('states').appendChild(element)
     console.log(statesArray.length)
    }
}

function openform(){
    document.getElementById('hiddenform').style.display = 'block'
}
function cancelform(){
    document.getElementById('person_name').value = "";
    document.getElementById('mobileNumber').value = "";
    document.getElementById('pincode').value = "";
    document.getElementById('locality').value = "";
    document.getElementById('address').value = "";
    document.getElementById('city').value = "";
    document.getElementById('states').value = "-- Select State --";
    document.getElementById('landmark').value = "";
    document.getElementById('alternateNumber').value = "";
    document.getElementById('home').value = "";
    document.getElementById('work').value = "";

    document.getElementById('hiddenform').style.display = 'none' 
}