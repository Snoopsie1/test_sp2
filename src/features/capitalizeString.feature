Feature: Capitalize String
  As a developer
  I want to have a feature that capitalizes a string
  So that I can capitalize a string

  Scenario: Capitalize 'aBc'
    Given the string is aBc
    When I capitalize the string
    Then the string should be ABC