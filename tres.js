function mostrar()
{
	let nombre;
	let edad;
	let sexo;
	let estadocivil;
	let temperatura;
	let Const = 600;


	do {
		nombre = prompt("Ingrese nombre: ");
		edad = parseInt(prompt("Ingrese edad: "));
		estadocivil = prompt("Ingrese estado civil: casado/soltero/viudo: ");
		sexo = prompt("Ingrese sexo: ");
		while (sexo != `f` && sexo != `m`) {
			sexo = prompt("Error. Ingrese sexo: ");
		}
		while (estadocivil != "casado" && estadocivil != "soltero" && estadocivil != "viudo") {
			estadocivil = prompt("Error. Ingrese estado civil casado/soltero/viudo: ");
		}
		temperatura = parseFloat(prompt("Ingrese temperatura corporal: "));


}
