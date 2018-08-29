var mainApp = angular.module("miapp",[]);

mainApp.controller("jugadoresController", function($scope) {
	$scope.jugador = {
		nombre : "",
		apellido : "",
		dni : "",
		
		nombreCompleto : function(){
			var jug = $scope.jugador;
			return jug.nombre + " " + jug.apellido;
		},
		
		datosCompleto : function() {
			var player = $scope.jugador;
			return player.nombre + " " + player.apellido + " " + player.dni;
		}
	}
})