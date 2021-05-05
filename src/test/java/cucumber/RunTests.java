package cucumber;

import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;
import cucumber.api.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features = {"src/test/java/features"},
        monochrome = true,
        plugin = {"pretty", "json:build/cucumber.json", "html:cucumberHtml"})
public class RunTests {

}
