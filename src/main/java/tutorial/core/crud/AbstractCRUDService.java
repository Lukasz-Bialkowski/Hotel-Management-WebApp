package tutorial.core.crud;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/**
 * Created by luke on 06.01.16.
 */
public abstract class AbstractCRUDService<T> implements CRUDService<T> {

    public List<T> list() {
        return this.getRepository().findAll();
    }

    public T get(Long id) {
        return this.getRepository().findOne(id);
    }

    public T save(T entity) {
        return this.getRepository().save(entity);
    }

    public void remove(Long id) {
        this.getRepository().delete(id);
    }

    protected abstract JpaRepository<T, Long> getRepository();
}


