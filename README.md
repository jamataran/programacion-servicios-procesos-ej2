# Programación de servicios y procesos: Plataforma para ofertar empleo (Ejercicio final)

Solución ejercicio 2 de Programación de Servicios y Procesos. Se plantea el 
enunciado.

En este ejercicio tendremos dos partes, por un lado la parte de implementación y,por otro,
la elaboración de un documento explicativo.

### Plataforma para ofertar empleo

Se quiere implementar una plataforma en Angular para ofertar empleo. La solución constará de las siguientes pantallas:

### Home

Pantalla principal. Es la primera que se abre al entrar.
En esta pantalla se listaran las ofertas de empleo disponibles (sólo el título). Utilizar para ello una estructura tabular con ayuda de Bootstrap.
Al lado de cada oferta habrá un enlace Ver que permitirá ver toda la información de la oferta.
Las ofertas las puede consultar cualquiera. No es necesario estar registrado.
En esta pantalla también habrá un enlace a la pantalla de login.

### Oferta

En esta pantalla se mostrarán los detalles de una oferta. A esta pantalla se accede desde la pantalla home.
Por cada oferta se mostrará su título, la descripción, la empresa que la oferta y la ciudad en la que se desarrollará el trabajo, el salario en euros y una dirección de email para enviar el CV.
En esta misma pantalla habrá un enlace para regresar a la pantalla home y así poder seguir consultando ofertas.
El detalle de la oferta lo puede consultar cualquiera. No es necesario estar registrado.

### Login

Desde esta pantalla solo se pueden loguear los administradores que ya disponen de unas credenciales. No existe la opción de registro.
Cuando un administrador intenta ingresar con su usuario y contraseña será redirigido a la pantalla ofertas para poder administrar las mismas.
Si al intentar loguearse introduce las credenciales mal se quedará en la pantalla login y se le mostrará un mensaje indicando que las credenciales son incorrectas.

### Ofertas

Esta pantalla es desde donde el administrador gestiona las ofertas. En esta pantalla podrá ver el listado de ofertas disponibles. Junto a cada oferta habrá un botón o enlace que permitirá eliminar la oferta. Cuando se pinche en el, la oferta será eliminada de forma permanente.
Además, en esta misma pantalla habrá un enlace para abrir la pantalla nuevaoferta desde la que el administrador podrá registrar una nueva oferta.

### Nueva oferta

Esta pantalla tendrá un formulario desde el que se podrá registrar una nueva oferta. Los campos del formulario deben ser:
* Título: Título descriptivo de la oferta que no supere los 100 caracteres (ej: Se busca programador Angular Junior)
* Descripción: Breve descripción del puesto de trabajo que se oferta. No superará los 300 caracteres.
* Empresa: Nombre de la empresa que oferta el puesto de trabajo. No superará los 50 caracteres.
* Salario: Salario bruto anual en euros
* Ciudad: No superará los 50 caracteres
* Email: Dirección de correo al que se debe enviar el CV. No superará los 50 caracteres.

Los requisitos son:
* Utiliza Bootstrap para maquetarlo.
* Todos los campos deben ser obligatorios y deben cumplir con las validaciones indicadas de longitud.
* Todos los datos que gestiona la aplicación se obtienen de un API. Tanto la información de las ofertas, como los datos de autenticación para el administrador. Las altas y bajas de ofertas también deben ser gestionadas a través de peticiones al mismo API.

Para realizar esta tarea se os proporciona un API ya implementado con JHipster que se detalla a continuación. Ya devuelve algunos datos iniciales de prueba.

