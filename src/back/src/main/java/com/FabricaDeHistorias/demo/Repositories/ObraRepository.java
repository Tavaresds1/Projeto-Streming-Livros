package com.FabricaDeHistorias.demo.Repositories;

import com.FabricaDeHistorias.demo.Models.Obra;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ObraRepository extends JpaRepository<Obra, Integer> {
}

