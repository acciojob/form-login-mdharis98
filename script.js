
function getFormvalue() {
            // Access the form element
            const form = document.forms["form1"];

            // Get the values of fname and lname
            const fname = form["fname"].value;
            const lname = form["lname"].value;

            // Display the result in an alert
            alert(fname + " " + lname);
        }
