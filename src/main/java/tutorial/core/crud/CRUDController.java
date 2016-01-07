package tutorial.core.crud;

import com.fasterxml.jackson.annotation.JsonView;
import com.hrtools.crudfs.view.Views;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by luke on 06.01.16.
 */
public abstract class CRUDController<T> {

        protected abstract CRUDService<T> getService();

        @JsonView({Views.Overview.class})
        @RequestMapping(
                method = {RequestMethod.GET}
        )
        @ResponseBody
        public List<T> list() {
            return this.getService().list();
        }

        @JsonView({Views.Details.class})
        @RequestMapping(
                method = {RequestMethod.GET},
                value = {"/{id}"}
        )
        @ResponseBody
        public T get(@PathVariable("id") Long id) {
            return this.getService().get(id);
        }

        @JsonView({Views.Details.class})
        @RequestMapping(
                method = {RequestMethod.POST},
                value = {"/save"}
        )
        @ResponseBody
        public T save(@RequestBody T model) {
            String message = this.getSaveMessage();
            if(message != null) {

            }

            return this.getService().save(model);
        }

        @RequestMapping(
                method = {RequestMethod.DELETE},
                value = {"/{id}"}
        )
        @ResponseBody
        public void remove(@PathVariable("id") Long id) {
            this.getService().remove(id);
        }

        @JsonView({Views.Details.class})
        @RequestMapping(
                method = {RequestMethod.GET},
                value = {"/create"}
        )
        @ResponseBody
        public T create() {
            return this.getService().create();
        }

        protected String getSaveMessage() {
            return "Dane zostały zapisane";
        }

}
