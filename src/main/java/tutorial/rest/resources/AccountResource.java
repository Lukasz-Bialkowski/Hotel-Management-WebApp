package tutorial.rest.resources;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.hateoas.ResourceSupport;
import tutorial.core.models.entities.Account;
import tutorial.core.models.entities.Address;

/**
 * Created by Chris on 6/28/14.
 */
public class AccountResource extends ResourceSupport {

    private String login;

    private String email;

    private String name;

    private String surname;

    private String password;

    private Address address;

    private Long rid;



    /**=============================*/

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }

    public Long getRid() {
        return rid;
    }

    public void setRid(Long rid) {
        this.rid = rid;
    }

    @JsonIgnore
    public String getPassword() {
        return password;
    }

    @JsonProperty
    public void setPassword(String password) {
        this.password = password;
    }

    public Account toAccount() {
        Account account = new Account();
        account.setLogin(login);

        account.setEmail(email);
        account.setAddress(address);
        account.setId(rid);
        account.setSurname(surname);
        account.setName(name);
        return account;
    }
}
