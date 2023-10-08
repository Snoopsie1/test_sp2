Feature: Bowling Game
  As a bowling-enthusiast
  I want to have a program that can simulate bowling
  So that I can bowl programmatically

  Scenario: Gutter game
    Given that I throw the bowling-ball 20 times
    When I hit 0 pins
    Then the score should be 0

  Scenario: Hitting 1 pin 20 times
    Given that I throw the bowling-ball 20 times
    When I hit 1 pin 20 times
    Then the score should be 20

  Scenario: Hitting 1 spare
    Given that I throw the bowling-ball 20 times
    When I hit 5 pin 2 times
    Then the score should be 16
