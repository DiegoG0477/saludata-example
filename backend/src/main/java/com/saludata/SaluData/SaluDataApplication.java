package com.saludata.SaluData;
import com.saludata.SaluData.controller.ConsultaController;
import com.saludata.SaluData.controller.PacienteController;
import com.saludata.SaluData.entity.Consulta;
import com.saludata.SaluData.entity.ConsultaId;
import com.saludata.SaluData.entity.Paciente;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import java.util.*;

@SpringBootApplication
public class SaluDataApplication {
	@Autowired
	private static PacienteController pacienteController;
	@Autowired
	private static ConsultaController consultaController;
	@Autowired
//	private static ConsultaController consultaController;
	private static Scanner teclado = new Scanner(System.in);
	private static List<Paciente> pacientesDb;
	private static List<Consulta> consultasDb;
//	private static List<Consulta> listaConsulta;


	public static void main(String[] args) {
//		SpringApplication.run(SaluDataApplication.class, args);
//		ApplicationContext context =
		SpringApplication.run(SaluDataApplication.class, args);
//		pacienteController = context.getBean(PacienteController.class);
//		consultaController=context.getBean(ConsultaController.class);
//		pacientesDb = pacienteController.getPacients();
//		consultasDb = consultaController.getAllConsultas();
//		mostrarMenu();
//	}
//
//	private static void mostrarMenu() {
//		boolean ciclo = true;
//		int x = 0;
//
//		while (ciclo) {
//			System.out.println("Opciones");
//			System.out.println("1.- Registrar paciente");
//			System.out.println("2.- Registrar Consulta");
//			System.out.println("3.- Mostrar paciente");
//			System.out.println("4.- Eliminar paciente");
//			System.out.println("5.- Consulta historial de consulta");
//			System.out.println("6.- Buscar paciente");
//			System.out.println("7.- Mostrar informacion de los pacientes y su consulta");
//			System.out.println("8.- Mostrar Pacientes");
//			System.out.println("9.- Modificar Consulta");
//			int op = teclado.nextInt();
//			switch (op) {
//				case 1 -> registrarPaciente();
//				case 8 -> mostrarPacientes();
//				case 10 -> {
//					System.out.println("Adios");
//					ciclo = false;
//				}
//				case 7 -> verPacienteConsultas();
//				case 5 -> verConsultas();
//				case 2-> agregarConsulta();
//				case 9 -> actualizarConsulta();
//			}
//		}
//	}
//
//	private static void mostrarPacientes() {
//		for (Paciente paciente: pacientesDb) {
//			System.out.println(paciente);
//		}
//	}
//
//	private static void registrarPaciente() {
//		teclado.nextLine();
//		System.out.println("Ingrese el nombre completo");
//		String nombreCompleto = teclado.nextLine();
//		System.out.println("Ingrese año de nacimiento del paciente");
//		int anio = teclado.nextInt();
//		teclado.nextLine(); // Limpia el búfer de entrada
//		System.out.println("Ingrese mes de nacimiento del paciente (en numero)");
//		int mes = teclado.nextInt() - 1;
//		teclado.nextLine(); // Limpia el búfer de entrada
//		System.out.println("Ingrese dia de nacimiento del paciente");
//		int dia = teclado.nextInt();
//		teclado.nextLine(); // Limpia el búfer de entrada
//		Date fechaNacimiento = new Date(anio - 1900, mes, dia);
////		System.out.println("Ingrese el tipo de sangre");
////		String tipoSangre = teclado.nextLine();
//		System.out.println("Ingrese el numero de telefono");
//		long numTelefono = teclado.nextLong();
//		teclado.nextLine(); // Limpia el búfer de entrada
//		System.out.println("Ingrese el genero");
//		String genero = teclado.nextLine();
//		System.out.println("Ingrese los antecedentes hereditarios:");
//		String heredoFamiliares = teclado.nextLine();
//
////        String[] nombreC = nombreCompleto.split(" ");
////        String nombre = obtenerNombre(nombreC);
////        String apellidoPat = obtenerApellidoPat(nombreC);
////        String apellidoMat = obtenerApellidoMat(nombreC);
////        String id = generarId(nombre, apellidoPat, apellidoMat, dia, mes, anio);
////
////		System.out.println(id);
////		Paciente paciente = new Paciente(nombre, apellidoMat, apellidoPat, fechaNacimiento, numTelefono, genero, heredoFamiliares);
////		pacienteController.saveUpdate(paciente);
//	}
//	private static void agregarConsulta(){
//		teclado.nextLine();
//		System.out.println("ingrese id del paciente:");
//		String nombreCompleto=teclado.nextLine();
//		System.out.println("Ingrese año de nacimiento del paciente");
//		int anio = teclado.nextInt();
//		teclado.nextLine(); // Limpia el búfer de entrada
//		System.out.println("Ingrese mes de nacimiento del paciente (en numero)");
//		int mes = teclado.nextInt() - 1;
//		teclado.nextLine(); // Limpia el búfer de entrada
//		System.out.println("Ingrese dia de nacimiento del paciente");
//		int dia = teclado.nextInt();
//		teclado.nextLine(); // Limpia el búfer de entrada
//		String[] nombreC = nombreCompleto.split(" ");
//		String nombre = obtenerNombre(nombreC);
//		String apellidoPat = obtenerApellidoPat(nombreC);
//		String apellidoMat = obtenerApellidoMat(nombreC);
//		String id = generarId(nombre, apellidoPat, apellidoMat, dia, mes, anio);
//		System.out.println(id);
//		for (Paciente tmp:pacientesDb) {
//			if(id.equals(tmp.getIdPaciente())){
//				System.out.println("Ingrese año de hoy");
//				int anioHoy = teclado.nextInt();
//				teclado.nextLine(); // Limpia el búfer de entrada
//				System.out.println("Ingrese el mes hoy (en numero)");
//				int mesHoy = teclado.nextInt() - 1;
//				teclado.nextLine(); // Limpia el búfer de entrada
//				System.out.println("Ingrese el dia de hoy");
//				int diaHoy = teclado.nextInt();
//				teclado.nextLine(); // Limpia el búfer de entrada
//				Date fecha = new Date(anioHoy - 1900, mesHoy, diaHoy);
//				System.out.println("ingrese los sintomas de iniciacion:");
//				String sintomas=teclado.nextLine();
//				System.out.println("ingrese los motivos de la consulta:");
//				String motivo=teclado.nextLine();
//				System.out.println("ingrese los laboratorios previos:");
//				String laboratorios=teclado.nextLine();
//				System.out.println("ingrese los estudios previos:");
//				String estudiosPrevios=teclado.nextLine();
//				System.out.println("ingrese la terapia empleada recientemente:");
//				String terapia=teclado.nextLine();
//				Consulta consult=new Consulta(tmp.getIdPaciente(),fecha,sintomas,motivo,laboratorios,estudiosPrevios,terapia);
//
//				consultaController.save(consult);
//			}
//		}
//	}
//
//	private static void obtenerConsulta(){
//		System.out.println("ingrese idpaciente");
//		String id = teclado.next();
//
//		System.out.println("Ingrese año de consulta del paciente");
//		int anio = teclado.nextInt();
//		teclado.nextLine(); // Limpia el búfer de entrada
//		System.out.println("Ingrese mes de consulta del paciente (en numero)");
//		int mes = teclado.nextInt() - 1;
//		teclado.nextLine(); // Limpia el búfer de entrada
//		System.out.println("Ingrese dia de consulta del paciente");
//		int dia = teclado.nextInt();
//
//		Optional<Consulta> consulta = consultaController.getByConsultaId(new ConsultaId(id, new Date(anio - 1900, mes, dia)));
//		System.out.println(consulta);
//	}
//
//	private static void verPacienteConsultas(){
//		System.out.println("ingrese id de paciente");
//		String id = teclado.next();
//
//		List<Consulta> consultas = consultaController.getConsultasPaciente(id);
//
//		for (Consulta tmp:consultas) {
//			System.out.println(tmp);
//		}
//	}
//
//
//	private static void verConsultas(){
//		for (Consulta tmp:consultasDb) {
//			System.out.println(tmp);
//		}
//	}
//	private static void actualizarConsulta(){
//		teclado.nextLine();
//		System.out.println("ingrese nombre completo del paciente:");
//		String nombreCompleto=teclado.nextLine();
//		System.out.println("Ingrese año de nacimiento del paciente");
//		int anio = teclado.nextInt();
//		teclado.nextLine(); // Limpia el búfer de entrada
//		System.out.println("Ingrese mes de nacimiento del paciente (en numero)");
//		int mes = teclado.nextInt() - 1;
//		teclado.nextLine(); // Limpia el búfer de entrada
//		System.out.println("Ingrese dia de nacimiento del paciente");
//		int dia = teclado.nextInt();
//		teclado.nextLine(); // Limpia el búfer de entrada
//		String[] nombreC = nombreCompleto.split(" ");
//		String nombre = obtenerNombre(nombreC);
//		String apellidoPat = obtenerApellidoPat(nombreC);
//		String apellidoMat = obtenerApellidoMat(nombreC);
//		String id = generarId(nombre, apellidoPat, apellidoMat, dia, mes, anio);
//		System.out.println(id);
//		for (Paciente tmp:pacientesDb) {
//			if(id.equals(tmp.getIdPaciente())){
//				System.out.println("Ingrese año de hoy");
//				int anioHoy = teclado.nextInt();
//				teclado.nextLine(); // Limpia el búfer de entrada
//				System.out.println("Ingrese el mes hoy (en numero)");
//				int mesHoy = teclado.nextInt() - 1;
//				teclado.nextLine(); // Limpia el búfer de entrada
//				System.out.println("Ingrese el dia de hoy");
//				int diaHoy = teclado.nextInt();
//				teclado.nextLine(); // Limpia el búfer de entrada
//				Date fecha = new Date(anioHoy - 1900, mesHoy, diaHoy);
//				System.out.println("ingrese los sintomas de iniciacion:");
//				String sintomas=teclado.nextLine();
//				System.out.println("ingrese los motivos de la consulta:");
//				String motivo=teclado.nextLine();
//				System.out.println("ingrese los laboratorios previos:");
//				String laboratorios=teclado.nextLine();
//				System.out.println("ingrese los estudios previos:");
//				String estudiosPrevios=teclado.nextLine();
//				System.out.println("ingrese la terapia empleada recientemente:");
//				String terapia=teclado.nextLine();
//				Consulta consult=new Consulta(tmp.getIdPaciente(),fecha,sintomas,motivo,laboratorios,estudiosPrevios,terapia);
//				System.out.println("se modifico correctamente");
//				consultaController.update(consult);
//			}
//		}
	}
}