#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
#change
Feature: This is login function
To successfully login
@sanity
  Scenario Outline: Login
    Given I want to login
    When I enter the credentials
    | username | password |
    | arun     | df1v2v34 |
    | yuvi     | uv       |
    | nishit   | shit     |
    And I click on login button
    Then Homepage is displayed
    And status is displayed
#@sun
  #Scenario Outline: Wrong Login 
  #  Given I want to login
  #  When user enter the wrong username in the user field
  #  And enters password in wrong password field
   # And I click on login button
   # Then Homepage is not displayed
   # And fail status is displayed

Examples:
	| user | pass    | status |
	| uv   | pass123 | pass   |
	| ram  | pass123 | fail   |