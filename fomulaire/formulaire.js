var currentTab = 0; // Current tab is set to be the first tab (0)

var progress=80;
var lastval=0;

//get the password and the comfirm password from the form .
var password = document.getElementById("inputPassword")
var confirmPassword = document.getElementById("inputConfirmPassword");


showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("tab");

  x[n].style.display = "block";
  
  // ... and fix the Previous/Next buttons:
  if(lastval<n) 
  {
    progress+=160;
    lastval=n;
  }
  document.getElementById("progress").style.width = progress+"px";

  if (n == 0) document.getElementById("prevBtn").style.display = "none";
  else        document.getElementById("prevBtn").style.display = "inline";
  
  if (n == (x.length - 1)) document.getElementById("nextBtn").innerHTML = "Submit";
  else                     document.getElementById("nextBtn").innerHTML = "Next";
  
  // ... and run a function that displays the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form... :
  if (currentTab >= x.length) {
    //...the form gets submitted:
    
    document.getElementById("regForm").submit();
    
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, validpattren = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  if (currentTab==0) 
  {
    var item=document.getElementById("Region");
    var selecteditem=item.options[item.selectedIndex].value;
    if( selecteditem=="" )
    {
      return false;
    }
  }
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {

      // If a field doesn't match with the pattren...
    if (! y[i].validity.valid ) {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false:
      validpattren = false;
      
      break;
    }
  }
  
  // If the valid status is true, mark the step as finished and valid:
  if (validpattren) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }

  
  return validpattren; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class to the current step:
  x[n].className += " active";
  

}

//to check the password and confirm password are the same 

function validatePassword(){
  if(password.value != confirmPassword.value) {
    confirmPassword.setCustomValidity("Passwords Don't Match");
  } else {
    confirmPassword.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirmPassword.onkeyup = validatePassword;