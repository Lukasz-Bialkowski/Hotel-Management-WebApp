package tutorial.mvc;


import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import tutorial.core.models.entities.Account;
import tutorial.core.services.AccountsService;
import tutorial.rest.mvc.AccountDetailsController;

import static org.hamcrest.Matchers.*;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

public class UserDetailsControllerTest {

    @InjectMocks
    AccountDetailsController controller;

    @Mock
    private AccountsService service;

    private MockMvc mockMvc;

    @Before
    public void setup() {
        MockitoAnnotations.initMocks(this);

        mockMvc = MockMvcBuilders.standaloneSetup(controller).build();

    }

    @Test
    public void getExistingAccount() throws Exception {
        Account foundAccount = new Account();
        foundAccount.setId(1L);
        foundAccount.setPassword("test");
        foundAccount.setLogin("test");

        when(service.get(1L)).thenReturn(foundAccount);

        mockMvc.perform(get("/rest/account/1"))
                .andDo(print())
                .andExpect(jsonPath("$.password", is(notNullValue())))
                .andExpect(jsonPath("$.login", is(foundAccount.getLogin())))
                .andExpect(status().isOk());
    }

}
