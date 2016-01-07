package tutorial.core.crud;

import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.annotation.Validated;

import java.util.List;

/**
 * Created by luke on 06.01.16.
 */
@Transactional
@Validated
public interface CRUDService<T> {

    List<T> list();

    T get(Long var1);

    T save(T var1);

    void remove(Long var1);

    T create();
}
