Feature: Tests EmailSender
    This is a test for sending email

    The assessment is for you to test the compose function in Gmail, to send an email with the body
    "Automation QA test for Incubyte" and subject "Incubyte"
    Scenario Outline: Test compose function in Gmail
    Given email <address> is valid
    Then user should be able to send email to <address>

    Examples:
        | address |
        | "abcEmail@gmail.com" |
        | "testEmail@gmail.com" |