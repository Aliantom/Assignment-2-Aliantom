var = clicks = 0; //global scope
function CancelClick()
{
  rdoUser.classList.remove('hide');
  userLabel.classlist.remove('hide');
  rdoAdmin.classList.remove('hide');
  adminLabel.classList.remove('hide');
  clicks=0;
  document.getElementById("submit").disabled = false;
  }
var $ = function (id) {
  return document.getElementById(id);
}
var joinList = function () {
  var emailAddress1 = $("email_address1").value;
  var emailAddress2 = $("email_address2").value;
  var password = $("password").value;
  var isValid = true;
  //if the first email address is blank
  if (emailAddress1 == "") {
    $("email_address1_error").firstChild.nodeValue =
    "This field is required.";
    isValid = false;
  }
  else {
    $("email_address1_error").firstChild.nodeValue = "";
  }
  function onClick(){
clicks += 1; //clicks = clicks +1;
document.getElementById("clicks").innerHTML = clicks;
if (clicks > 5)
{
  document.getElementById("submit").disable = true;
}
if (document.getElementById('rdoAdmin').checked == tre)
{
  rdoUser.classList.add('hide');
  userLabel.classList.add('hide');
  alert("here");
}
else{
  rdoAdmin.classList.add('hide')
adminLabel.classList.add('hide');
}

  }
  //if the second email address entered does not match the first
  if (emailAddress1 !== emailAddress2)
  {
    $("email_address2_error").firstChild.nodeValue =
    "The two email addresses do not match.";
    isValid = false;
  }
  else {
    $("email_address2_error").firstChild.nodeValue = "";
  }
if ((password).length < 8)
  {
    $("password_error").firstChild.nodeValue =
    "Password is too short";
    isValid = false;
  }
  else {
    $("password_error").firstChild.nodeValue = "";
  }

  //if everything is good
  if (isValid)
  {
    alert("Thanks for joining our list!")
  }
}


window.onload = function() {
  $("join_list").onclick = joinList;
  
}