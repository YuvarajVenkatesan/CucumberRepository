package First;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(monochrome=true,tags="@sanity",plugin= {"pretty","html:C:\\Users\\training_c2a.04.29\\Desktop\\Eclipse\\Cucumbertest1\\src\\test\\java\\myresults"})
public class Runner {

}
