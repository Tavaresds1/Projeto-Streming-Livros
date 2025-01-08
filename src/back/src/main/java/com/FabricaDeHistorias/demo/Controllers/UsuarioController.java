package com.FabricaDeHistorias.demo.Controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.stereotype.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.FabricaDeHistorias.demo.Models.Acervo;
import com.FabricaDeHistorias.demo.Models.LoginRequest;
import com.FabricaDeHistorias.demo.Models.Usuario;

import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.NoResultException;
import jakarta.persistence.PersistenceUnit;
import jakarta.persistence.Query;

@CrossOrigin(origins = "http://127.0.0.1:5500/")
@Controller
public class UsuarioController {
    @PersistenceUnit
    EntityManagerFactory factory;

    @PostMapping("/usuarios")
    public @ResponseBody long cadastrarUsuario(@RequestBody Usuario usuario) {
        EntityManager manager = factory.createEntityManager();
        Usuario novoUsuario = new Usuario(usuario.getNome(), usuario.getEmail(), usuario.getSenha(), usuario.getTipoUsuario());

        manager.getTransaction().begin();
        manager.persist(novoUsuario);
        manager.getTransaction().commit();
        
        Acervo acervo = new Acervo(novoUsuario.getId());
        novoUsuario.setAcervo(acervo);

        manager.getTransaction().begin();
        manager.persist(novoUsuario);
        manager.getTransaction().commit();

        return novoUsuario.getId();
    }

    @GetMapping("/usuarios/{id}")
    public @ResponseBody Usuario buscarUsuario(@PathVariable long id) {
        EntityManager manager = factory.createEntityManager();
        Usuario usuario = manager.find(Usuario.class, id);
        return usuario;
    }
    
    @PostMapping("/usuarios/login")
    public @ResponseBody Usuario logar(@RequestBody LoginRequest loginRequest) {
        EntityManager manager = factory.createEntityManager();

        try {
            String queryString = "SELECT u FROM Usuario u WHERE u.email = :email AND u.senha = :senha AND u.tipoUsuario = :tipoUsuario";
            Query query = manager.createQuery(queryString);
            query.setParameter("email", loginRequest.getEmail());
            query.setParameter("senha", loginRequest.getSenha());
            query.setParameter("tipoUsuario", loginRequest.getTipoUsuario());

            Usuario usuario = (Usuario) query.getSingleResult();
            return usuario;

        } catch (NoResultException e) {
            return null;
        }
    }
}
