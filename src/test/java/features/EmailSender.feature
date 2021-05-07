Feature: Tests EmailSender
    This is a test for sending email

    Scenario Outline: Test compose function in Gmail
    Given email <address> is valid
    Then user should be able to send email to <address>

    Examples:
        | address |
        | "abcEmail@gmail.com" |
        | "testEmail@gmail.com" |