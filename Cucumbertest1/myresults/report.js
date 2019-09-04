$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:First/login.feature");
formatter.feature({
  "name": "This is login function",
  "description": "To successfully login",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "name": "Login",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "I want to login",
  "keyword": "Given "
});
formatter.match({
  "location": "login.i_want_to_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the username in the user field",
  "keyword": "When "
});
formatter.match({
  "location": "login.i_enter_the_username_in_the_user_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "password in the password field",
  "keyword": "And "
});
formatter.match({
  "location": "login.password_in_the_password_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "login.i_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Homepage is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "login.homepage_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "login.status_is_displayed()"
});
formatter.result({
  "status": "passed"
});
});