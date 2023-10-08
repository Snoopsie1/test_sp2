Feature: Lowercase String
  As a developer
  I want to have a feature that lowercases a string
  So that I can lowercase a string

  Scenario: Lowercase 'aBc'
    Given the string is aBc
    When I lowercase the string
    Then the string should be abc