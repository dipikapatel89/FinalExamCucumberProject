$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/BackgroundColor.feature");
formatter.feature({
  "line": 3,
  "name": "Background color change functionality validation",
  "description": "",
  "id": "background-color-change-functionality-validation",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@BackgroundColorValidation"
    },
    {
      "line": 1,
      "name": "@Regression"
    },
    {
      "line": 2,
      "name": "@BackgroundColor"
    }
  ]
});
formatter.before({
  "duration": 2544782100,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "User should be change the background color",
  "description": "",
  "id": "background-color-change-functionality-validation;user-should-be-change-the-background-color",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@Scenario1"
    },
    {
      "line": 5,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User is on set background page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User click on the skyblue button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "The background color will change to sky blue",
  "keyword": "Then "
});
formatter.match({
  "location": "BackgroundColorStepDefination.user_is_on_set_background_page()"
});
formatter.result({
  "duration": 753285400,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundColorStepDefination.user_click_on_the_skyblue__button()"
});
formatter.result({
  "duration": 72399600,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundColorStepDefination.the_background_color_will_change_to_sky_blue()"
});
formatter.result({
  "duration": 31268400,
  "status": "passed"
});
formatter.after({
  "duration": 890402100,
  "status": "passed"
});
formatter.before({
  "duration": 1323196100,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "User should change the background color",
  "description": "",
  "id": "background-color-change-functionality-validation;user-should-change-the-background-color",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@Scenario2"
    },
    {
      "line": 11,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User is on set background page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "User click on the white button",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "The background color will change to white",
  "keyword": "Then "
});
formatter.match({
  "location": "BackgroundColorStepDefination.user_is_on_set_background_page()"
});
formatter.result({
  "duration": 465520000,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundColorStepDefination.user_click_on_the_white_button()"
});
formatter.result({
  "duration": 63881200,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundColorStepDefination.the_background_color_will_change_to_white()"
});
formatter.result({
  "duration": 34848600,
  "status": "passed"
});
formatter.after({
  "duration": 864749900,
  "status": "passed"
});
});