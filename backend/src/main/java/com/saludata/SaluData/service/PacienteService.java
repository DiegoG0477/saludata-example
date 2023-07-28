package com.saludata.SaluData.service;


import com.saludata.SaluData.entity.Consulta;
import com.saludata.SaluData.entity.Paciente;
import com.saludata.SaluData.repository.PacienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PacienteService {
    @Autowired
    PacienteRepository pacienteRepository;

    public List<Paciente> getPacientes(){
        return pacienteRepository.findAll();
    }

    public Optional<Paciente> getPaciente(String id){
        return pacienteRepository.findById(id);
    }

    public void saveOrUpdate(Paciente paciente){
        pacienteRepository.save(paciente);
    }

    public void savePaciente(Paciente paciente){
        Optional<Paciente> pacienteExistente = pacienteRepository.findById(paciente.getIdPaciente());
        if (pacienteExistente.isPresent()) {
            System.out.println("no se agregó, porque ya existe");
        } else {
            pacienteRepository.save(paciente);
        }

    }

    public void saveAll(List<Paciente> pacientes){
        pacienteRepository.saveAll(pacientes);
    }

    public void delete(String id){
        pacienteRepository.deleteById(id);
    }
}
