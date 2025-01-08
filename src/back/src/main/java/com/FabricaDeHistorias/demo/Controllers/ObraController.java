package com.FabricaDeHistorias.demo.Controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import com.FabricaDeHistorias.demo.Models.Obra;

import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.PersistenceUnit;

@CrossOrigin(origins = "http://127.0.0.1:5500/")
@Controller
public class ObraController {
    @PersistenceUnit
    EntityManagerFactory factory;

    @PostMapping("/obras/cadastrar")
    public @ResponseBody Obra cadastrarObra(@RequestBody Obra obra) {

        EntityManager manager = factory.createEntityManager();
        Obra novaObra = new Obra(obra.getTitulo(), obra.getDescricao(), obra.getData(), obra.getNumeroPaginas(), obra.getIdAutor(), obra.getLivro());
            
        manager.getTransaction().begin();
        manager.persist(novaObra);
        manager.getTransaction().commit();
        
        return novaObra;
    }
}
