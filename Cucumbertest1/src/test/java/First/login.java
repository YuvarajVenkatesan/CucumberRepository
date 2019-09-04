package First;

import java.util.List;
import java.util.Map;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class login {
	@Given("I want to login")
	public void i_want_to_login() {
	    // Write code here that turns the phrase above into concrete actions
	  //  throw new cucumber.api.PendingException();
	}
	@When("I enter the credentials")
	public void i_enter_the_credentials(io.cucumber.datatable.DataTable dataTable) {
		List<Map<String,String>>list=dataTable.asMaps();
		for(int i=0;i<list.size();i++) {
		System.out.println("\t"+list.get(i).get("username"));
		System.out.println("\t "+list.get(i).get("password"));
		}
	    // Write code here that turns the phrase above into concrete actions
	    // For automatic transformation, change DataTable to one of
	    // E, List<E>, List<List<E>>, List<Map<K,V>>, Map<K,V> or
	    // Map<K, List<V>>. E,K,V must be a String, Integer, Float,
	    // Double, Byte, Short, Long, BigInteger or BigDecimal.
	    //
	    // For other transformations you can register a DataTableType.
	    //throw new cucumber.api.PendingException();
	}

	@And("I click on login button")
	public void i_click_on_login_button() {
	    // Write code here that turns the phrase above into concrete actions
	  //  throw new cucumber.api.PendingException();
	}

	@Then("Homepage is displayed")
	public void homepage_is_displayed() {
	    // Write code here that turns the phrase above into concrete actions
	   // throw new cucumber.api.PendingException();
	}

	@And("status is displayed")
	public void status_is_displayed() {
		System.out.println("status");
	    // Write code here that turns the phrase above into concrete actions
	   // throw new cucumber.api.PendingException();
	}


	}