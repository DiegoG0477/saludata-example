package com.saludata.SaluData.entity;
import jakarta.persistence.*;
import lombok.Data;

import java.util.Calendar;
import java.util.Date;

@Data
@Entity
@Table(name = "paciente")
public class Paciente {
    @Id
//    @GeneratedValue(strategy = GenerationType.UUID)
//    @Column(name = "id", unique = true, nullable = false)
    private String idPaciente;

    private String nombre;
    private String apellidoMat;
    private String apellidoPat;
    private Date fechaNacimiento;


    @Column(nullable = false)
    private Long telefono;

    private String genero;
    private String heredosFamiliares;


    public Paciente() {
    }

    public Paciente(String nombre, String apellidoMat, String apellidoPat, Date fechaNacimiento, Long telefono, String genero, String heredosFamiliares) {
        this.nombre = nombre;
        this.apellidoMat = apellidoMat;
        this.apellidoPat = apellidoPat;
        this.fechaNacimiento = fechaNacimiento;
        this.telefono = telefono;
        this.genero = genero;
        this.heredosFamiliares = heredosFamiliares;
    }

    public Paciente(String idPaciente, String nombre, String apellidoMat, String apellidoPat, Date fechaNacimiento, Long telefono, String genero, String heredosFamiliares) {
        this.idPaciente = idPaciente;
        this.nombre = nombre;
        this.apellidoMat = apellidoMat;
        this.apellidoPat = apellidoPat;
        this.fechaNacimiento = fechaNacimiento;
        this.telefono = telefono;
        this.genero = genero;
        this.heredosFamiliares = heredosFamiliares;
    }

    public Paciente(String nombre, String apellidoMat, String apellidoPat) {
        this.nombre = nombre;
        this.apellidoMat = apellidoMat;
        this.apellidoPat = apellidoPat;
    }

    public Paciente(String idPaciente) {
        this.idPaciente = idPaciente;
    }

    private static String obtenerApellidoMat(String[] apellidoMC) {
        return apellidoMC[apellidoMC.length-1];
    }

    private static String obtenerApellidoPat(String[] apellidoC) {
        return apellidoC[apellidoC.length-2];
    }

    private static String obtenerNombre(String[] nombreC) {
        String nombre = null;
        int cantPalabras = nombreC.length;

        if (cantPalabras == 3){
            nombre = nombreC[0];
        } else if (cantPalabras == 4){
            nombre = nombreC[0] + " " + nombreC[1];
        }

        return nombre;
    }

    public void generarId(String nombre, String apellidoMat, String apellidoPat, Date fechaNacimiento) {
//        mes = mes + 1;
        Date fecha = new Date();

        // Creamos un objeto Calendar y lo configuramos con la fecha
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(fecha);

        // Obtener día, mes y año
        int dia = calendar.get(Calendar.DAY_OF_MONTH);
        int mes = calendar.get(Calendar.MONTH) + 1; // Los meses en Calendar van de 0 a 11, por eso sumamos 1
        int anio = calendar.get(Calendar.YEAR);

        // Imprimir los resultados
        System.out.println("Día: " + dia);
        System.out.println("Mes: " + mes);
        System.out.println("Año: " + anio);
        String diaId, mesId, anioId;
        if (dia < 10){
            diaId = "0" + dia;
        } else {
            diaId = String.valueOf(dia);
        }

        if (mes < 10){
            mesId = "0" + mes;
        } else {
            mesId = String.valueOf(mes);
        }

        anioId = String.valueOf(anio).substring(2,4);

        this.idPaciente = apellidoPat.substring(0, 2).toUpperCase() + apellidoMat.charAt(0) + nombre.charAt(0) + anioId + mesId + diaId;
    }
}
