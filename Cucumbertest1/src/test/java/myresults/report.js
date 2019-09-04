$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:First/login.feature");
formatter.feature({
  "name": "This is login function",
  "description": "To successfully login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "I want to login",
  "keyword": "Given "
});
formatter.step({
  "name": "I enter the credentials",
  "keyword": "When ",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "arun",
        "df1v2v34"
      ]
    },
    {
      "cells": [
        "yuvi",
        "uv"
      ]
    },
    {
      "cells": [
        "nishit",
        "shit"
      ]
    }
  ]
});
formatter.step({
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "name": "Homepage is displayed",
  "keyword": "Then "
});
formatter.step({
  "name": "status is displayed",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "user",
        "pass",
        "status"
      ]
    },
    {
      "cells": [
        "uv",
        "pass123",
        "pass"
      ]
    },
    {
      "cells": [
        "ram",
        "pass123",
        "fail"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sanity"
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
  "name": "I enter the credentials",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "arun",
        "df1v2v34"
      ]
    },
    {
      "cells": [
        "yuvi",
        "uv"
      ]
    },
    {
      "cells": [
        "nishit",
        "shit"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "login.i_enter_the_credentials(DataTable)"
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
formatter.scenario({
  "name": "Login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sanity"
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
  "name": "I enter the credentials",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "arun",
        "df1v2v34"
      ]
    },
    {
      "cells": [
        "yuvi",
        "uv"
      ]
    },
    {
      "cells": [
        "nishit",
        "shit"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "login.i_enter_the_credentials(DataTable)"
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