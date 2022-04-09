function ValidateEmail(inputText)
{
var mailformat = "[a-zA-Z0-9]+@[a-zA-Z]+.com";
if(inputText.value.match(mailformat))
{
alert("Valid email address!");
document.getElementById('abc').focus();
return true;
}
else
{
alert("You have entered an invalid email address!");
document.getElementById('abc').focus();
return false;
}
}