package cucumber;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import steps.SendEmail;

public class StepDefinitions {

    SendEmail sendEmail = new SendEmail();
    @Given("^email \"(.*)\" is valid$")
    public void email_is_valid(String address) throws Throwable{
        System.out.println("");
    }

    @Then("^user should be able to send email to \"(.*)\"$")
    public void user_should_be_able_to_send_email_to(String address) throws Throwable {
        sendEmail.sendEmail("Incubyte","Automation QA test for Incubyte",address);
    }
}
