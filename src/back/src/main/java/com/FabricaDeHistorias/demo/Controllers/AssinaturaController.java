package com.FabricaDeHistorias.demo.Controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.FabricaDeHistorias.demo.Models.Assinatura;
import com.FabricaDeHistorias.demo.Models.Usuario;

import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.PersistenceUnit;

@CrossOrigin(origins = "http://127.0.0.1:5500/")
@Controller
public class AssinaturaController {
    @PersistenceUnit
    EntityManagerFactory factory;

    @PostMapping("/assinatura/cadastrar")
    public @ResponseBody String cadastrarAssinatura(@RequestBody Assinatura assinatura) {
        EntityManager manager = factory.createEntityManager();

        Assinatura novAssinatura = new Assinatura(assinatura.getTipoAssinatura(), assinatura.getIdUsuario());

        manager.getTransaction().begin();
        manager.persist(novAssinatura);
        manager.getTransaction().commit();

        Usuario usuario = manager.find(Usuario.class, assinatura.getIdUsuario());
        usuario.setCodAssinatura(novAssinatura.getIdAssinatura());

        manager.getTransaction().begin();
        manager.persist(usuario);
        manager.getTransaction().commit();

        return "Assinatura adquirida com sucesso";
    }
}
