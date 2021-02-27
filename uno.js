
function mostrar()
{
	let tipo;
	let precio;
	let cantidad;
	let tipoInflamables;
	let Marca;
	let promedioAlcohol;
	let promedioIac;
	let promedioQuat;
	let contAlcohol = 0; 
	let contIac = 0; 
	let contQuat = 0; 
	let acumAlcohol = 0; 
	let acumIac = 0; 
	let acumQuat = 0;
	let contIgnifugo = 0; 
	let contCombustible = 0; 
	let contExplosivo = 0; 
	let precioMinimo;
	let maxTipoInflamable;
	let maxTipo;
	let maxMarca;
	let precioMaximo;
	let flag = 1;
	let flagProducto = 1;

	for(let i=0; i<5; i++)
	{
		tipo = prompt("Ingrese el tipo del producto a seleccionar, Alcohol / IAC / QUAT");
		while(tipo != "alcohol" && tipo != "iac" && tipo != "quat")    
		{
			tipo = prompt("Error.Estas ingresando mal el tipo de producto seleccionado, reingreselo");
		}

		precio = parseInt(prompt("Ingrese el precio del producto entre 100 y 300: "));
		while(precio < 100 || precio > 300 || isNaN(precio))
		{
			precio = parseInt(prompt("Error.No esta ingresando un precio acorde a lo pedido,reingreselo"));
		}

		cantidad = parseInt(prompt("Ingrese la cantidad de unidades que no supere las 1000"));
		while(cantidad <=0 || cantidad > 1000 || isNaN(cantidad))
		{
			cantidad = parseInt(prompt("Error.Esta cantidad de unidades que desea llevar no es valida,reingreselo"));
		}

		tipoInflamables = prompt("Ingrese el tipo de inflamables: ignifugo / combustible / explosivo");
		while(tipoInflamables != "ignifugo" && tipoInflamables != "combustible" && tipoInflamables != "explosivo")
		{
			tipoInflamables = prompt("Error. Ingrese un tipo de inflamable: ignifugo/combustible/explosivo");
		}

		marca = prompt("Ingrese la marca del producto: ");

		if(tipoInflamables == `ignifugo`){
			contIgnifugo += cantidad;
		}
		else if (tipoInflamables == `combustible`){
			contCombustible += cantidad
		}
		else 
		{
			contExplosivo += canatdad
		}


		if(contIgnifugo > contCombustible && contIgnifugo > contExplosivo){
			maxTipoInflamable = contIgnifugo;
		}
		else if(contCombustible > contIgnifugo && contCombustible > contExplosivo){
			maxTipoInflamable = contCombustible;
		}
		else
		{
			maxTipoInflamable = contExplosivo;
		}
			}
		}
		