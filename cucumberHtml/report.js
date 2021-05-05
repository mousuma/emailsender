$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/EmailSender.feature");
formatter.feature({
  "name": "Tests EmailSender",
  "description": "    This is a test for sending email\n\n    The assessment is for you to test the compose function in Gmail, to send an email with the body\n    \"Automation QA test for Incubyte\" and subject \"Incubyte\"",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Test compose function in Gmail",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "email \u003caddress\u003e is valid",
  "keyword": "Given "
});
formatter.step({
  "name": "user should be able to send email to \u003caddress\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "address"
      ]
    },
    {
      "cells": [
        "\"talktomousuma95@gmail.com\""
      ]
    }
  ]
});
formatter.scenario({
  "name": "Test compose function in Gmail",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "email \"talktomousuma95@gmail.com\" is valid",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.email_is_valid(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to send email to \"talktomousuma95@gmail.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.user_should_be_able_to_send_email_to(String)"
});
formatter.result({
  "error_message": "java.lang.RuntimeException: javax.mail.AuthenticationFailedException: 535-5.7.8 Username and Password not accepted. Learn more at\n535 5.7.8  https://support.google.com/mail/?p\u003dBadCredentials l4sm128023qkd.105 - gsmtp\n\n\tat steps.SendEmail.sendEmail(SendEmail.java:45)\n\tat cucumber.StepDefinitions.user_should_be_able_to_send_email_to(StepDefinitions.java:17)\n\tat ✽.user should be able to send email to \"talktomousuma95@gmail.com\"(src/test/java/features/EmailSender.feature:8)\nCaused by: javax.mail.AuthenticationFailedException: 535-5.7.8 Username and Password not accepted. Learn more at\n535 5.7.8  https://support.google.com/mail/?p\u003dBadCredentials l4sm128023qkd.105 - gsmtp\n\n\tat com.sun.mail.smtp.SMTPTransport$Authenticator.authenticate(SMTPTransport.java:965)\n\tat com.sun.mail.smtp.SMTPTransport.authenticate(SMTPTransport.java:876)\n\tat com.sun.mail.smtp.SMTPTransport.protocolConnect(SMTPTransport.java:780)\n\tat javax.mail.Service.connect(Service.java:388)\n\tat javax.mail.Service.connect(Service.java:246)\n\tat javax.mail.Service.connect(Service.java:195)\n\tat javax.mail.Transport.send0(Transport.java:254)\n\tat javax.mail.Transport.send(Transport.java:124)\n\tat steps.SendEmail.sendEmail(SendEmail.java:40)\n\tat cucumber.StepDefinitions.user_should_be_able_to_send_email_to(StepDefinitions.java:17)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:55)\n\tat cucumber.runner.TestStep.run(TestStep.java:42)\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:98)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:107)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:220)\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:53)\n",
  "status": "failed"
});
});