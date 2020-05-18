$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/feature/Login.feature");
formatter.feature({
  "name": "Application Login",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Homepage default login",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "User is on netbanking landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinations.MyStepDefinations.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User Login to application using username and password",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinations.MyStepDefinations.user_login_to_application_using_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.MyStepDefinations.home_page_is_populated()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "cards are displayed",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinations.MyStepDefinations.cards_are_displayed()"
});
formatter.result({
  "status": "skipped"
});
});