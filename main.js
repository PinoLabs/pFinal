var pacientes = [
  {nombre: "Juan", rut:"19.593.307-3",edad:"17",dx:"Muerte Cerebral",estado:"muerto"},
  {nombre: "Pedro",rut:"19.593.307-3",edad:"17",dx:"Muerte Cerebral",estado:"muerto"},
  {nombre: "Raul",rut:"19.593.307-3",edad:"17",dx:"Muerte Cerebral",estado:"muerto"},
  {nombre: "Simon",rut:"19.593.307-3",edad:"17",dx:"Muerte Cerebral",estado:"muerto"},
  {nombre: "Franco",rut:"19.593.307-3",edad:"17",dx:"Muerte Cerebral",estado:"muerto"},
  {nombre: "German",rut:"19.593.307-3",edad:"17",dx:"Muerte Cerebral",estado:"muerto"},
  {nombre: "Lautaro",rut:"19.593.307-3",edad:"17",dx:"Muerte Cerebral",estado:"muerto"},
  {nombre: "Emi",rut:"19.593.307-3",edad:"17",dx:"Muerte Cerebral",estado:"muerto"},
  {nombre: "Maxi",rut:"19.593.307-3",edad:"17",dx:"Muerte Cerebral",estado:"vivo"},
  {nombre: "Lucas",rut:"19.593.307-3",edad:"17",dx:"Muerte Cerebral",estado:"vivo"}
  ];

  window.onload = cargarEventos;
  function cargarEventos(){
      document.getElementById("mostrar-tabla").addEventListener("click", mostrarTabla, false);
      document.getElementById("tabla-muertos").addEventListener("click", mostarMuertos, false);
      document.getElementById("ingreso-pacientes").addEventListener("click", mostarIngreso, false);
      document.getElementById("ingresar-pacientes").addEventListener("click", cargarPacientes, false);
  }  
  function mostrarTabla(){
    document.getElementById("form-ingreso").style.display="none";
    document.getElementById("tabla").style.display="block";
    var cuerpoTabla = document.getElementById("tabla-pacientes");
    var tablaLlena = "";
    for (var i =0; i< pacientes.length; i++){
          tablaLlena += "<tr>";
          tablaLlena += "<td>"+pacientes[i].nombre+"</td>"
          tablaLlena += "<td>"+pacientes[i].rut+"</td>"
          tablaLlena += "<td>"+pacientes[i].edad+"</td>"
          tablaLlena += "<td>"+pacientes[i].dx+"</td>"
          tablaLlena += "<td>"+pacientes[i].estado+"</td>"
          tablaLlena += "</tr>" 
    }
    cuerpoTabla.innerHTML = tablaLlena;
  }
  
  function mostarMuertos(){
    document.getElementById("form-ingreso").style.display="none";
    var cuerpoTabla = document.getElementById("tabla-pacientes");
    var tablaLlena = "";
    for (var i =0; i< pacientes.length; i++){
      if (pacientes[i].estado=="muerto"){
        tablaLlena += "<tr>";
        tablaLlena += "<td>"+pacientes[i].nombre+"</td>"
        tablaLlena += "<td>"+pacientes[i].rut+"</td>"
        tablaLlena += "<td>"+pacientes[i].edad+"</td>"
        tablaLlena += "<td>"+pacientes[i].dx+"</td>"
        tablaLlena += "<td>"+pacientes[i].estado+"</td>"
        tablaLlena += "</tr>"
      }
        
    }
    cuerpoTabla.innerHTML = tablaLlena;
  }

  function mostarIngreso(){
    document.getElementById("tabla").style.display="none";
    document.getElementById("form-ingreso").style.display="block";
    
    
  }

  function cargarPacientes(){
      
  }