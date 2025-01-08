package com.FabricaDeHistorias.demo.Controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.FabricaDeHistorias.demo.Models.Feedback;

import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.PersistenceUnit;

@CrossOrigin(origins = "http://127.0.0.1:5500/")
@Controller
public class FeedbackController {
    @PersistenceUnit
    EntityManagerFactory factory;

    @PostMapping("/feedback/adicionar")
    public @ResponseBody String cadastrarAssinatura(@RequestBody Feedback feedback) {
        EntityManager manager = factory.createEntityManager();

        Feedback novoFeedback = new Feedback(feedback.getIdObra(), feedback.getIdLeitor(), feedback.getComentario(), feedback.getAvaliacao());

        manager.getTransaction().begin();
        manager.persist(novoFeedback);
        manager.getTransaction().commit();

        return "Feedback adicionado com sucesso";
    }
}
