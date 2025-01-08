package com.FabricaDeHistorias.demo.Controllers;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.FabricaDeHistorias.demo.Models.Acervo;
import com.FabricaDeHistorias.demo.Models.AdicionarLivroRequest;

import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.PersistenceUnit;

@CrossOrigin(origins = "http://127.0.0.1:5500/")
@Controller
public class AcervoController {
    @PersistenceUnit
    EntityManagerFactory factory;

    @PostMapping("/acervo/adicionar")
    public @ResponseBody String adicionarLivro(@RequestBody AdicionarLivroRequest adicionarLivroRequest) {
        EntityManager manager = factory.createEntityManager();
        Acervo acervo = manager.find(Acervo.class, adicionarLivroRequest.getIdUsuario());

        acervo.adicionarLivro(adicionarLivroRequest.getIdLivro());

        manager.getTransaction().begin();
        manager.persist(acervo);
        manager.getTransaction().commit();

        return "Livro adicionado ao acervo";
    }

    @PostMapping("/acervo/remover")
    public @ResponseBody String removerLivro(@RequestBody AdicionarLivroRequest adicionarLivroRequest) {
        EntityManager manager = factory.createEntityManager();
        Acervo acervo = manager.find(Acervo.class, adicionarLivroRequest.getIdUsuario());

        acervo.removerLivro(adicionarLivroRequest.getIdLivro());

        manager.getTransaction().begin();
        manager.persist(acervo);
        manager.getTransaction().commit();

        return "Livro removido do acervo";
    }

    @GetMapping("acervo/usuarios/{idUsuario}")
    public @ResponseBody List<Long> buscarAcervo(@PathVariable long idUsuario) {
        EntityManager manager = factory.createEntityManager();
        //List<Obra> livros = new LinkedList<>();

        try {
            List<Long> acervo = manager.createNativeQuery(
                "SELECT livros FROM acervo_livros WHERE acervo_id_acervo = :idUsuario")
                .setParameter("idUsuario", idUsuario)
                .getResultList();
    
            /*for(Long id: acervo){
                Obra obra = manager.find(Obra.class, id);
                livros.add(obra);
            }*/
        
            return acervo;
        } finally {
            manager.close();
        }
        
    } 
}
