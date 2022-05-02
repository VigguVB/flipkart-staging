function ordersDisplay(){
    document.getElementsByClassName('rightpanel-orders')[0].style.display = "block";
    document.getElementsByClassName("rightpanel-profileinfo")[0].style.display= "none"
}
function profileDisplay(){
    document.getElementsByClassName('rightpanel-orders')[0].style.display = "none";
    document.getElementsByClassName("rightpanel-profileinfo")[0].style.display= "block"
}


function savePersonalInfo(){
    let first = document.getElementById('first').value;
    let last= document.getElementById('last').value;
    let profileDetails = {
        firstname: first,
        lastname: last,
    }
    localStorage.setItem('firstname', profileDetails.firstname)
    localStorage.setItem('lastname', profileDetails.lastname)
    if(first !=="" || last!==""){
        let a = localStorage.getItem('firstname')
        let b = localStorage.getItem('lastname')
        document.getElementById('displayFirst').innerHTML = a;
        document.getElementById('displayLast').innerText = b;
  
        document.getElementsByClassName("profileinfo-edit")[0].style.display ='none';
        document.getElementsByClassName("profileinfo-readonly")[0].style.display = "block";
        console.log('submity')
        document.getElementById("save").addEventListener('click', (event)=>{
            event.preventDefault();
        })
    }
}
function closePersonal(){
    document.getElementsByClassName("profileinfo-edit")[0].style.display ='none';
    document.getElementsByClassName("profileinfo-readonly")[0].style.display = "block"

}
function editPersonal(){
    document.getElementsByClassName("profileinfo-edit")[0].style.display ='block';
    document.getElementsByClassName("profileinfo-readonly")[0].style.display = "none"
}
 
function submitHandler(){
    document.getElementById('form').addEventListener('submit', (event)=>{
        event.preventDefault();
    })
    

}
