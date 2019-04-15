// Variable to count number of attempts.
var attempt = 3;

function validate() 
{
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if (username == "as" && password == "as") 
    {
        alert("Login successfully" );
        window.location = "../index1.html"; // Redirecting to other page.
        return false;
    } 
    
    else 
    {
        // Decrementing by one.
        attempt--;
        alert("You have left " + attempt + " attempt;");
        // Disabling fields after 3 attempts.
        if (attempt == 0) 
        {
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }

}
