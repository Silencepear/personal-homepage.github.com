(function (window, angular, _) {
	'use strict';

	// Your starting point. Enjoy the ride!
	var app = angular.module('app', []);
	app.controller('AppCtrl', ['$scope', '$window','$location', function ($scope, $window, $location) {
		// $scope.remove = function (item) {
		// 	_.remove($scope.todos, function (n) {
		// 		return n === item;
		// 	})
		// }
		// var localTodos =
		var storage = $window.localStorage;
		$scope.todos = storage['myTodos'] ? JSON.parse(storage['myTodos']) : [
			{
				id: 0,
				text: 'Taste Javascript',
				isCompleted: true
			},
			{
				id: 1,
				text: 'dota',
				isCompleted: false
			}
		];


		var localSave = function () {
			storage['myTodos'] = JSON.stringify($scope.todos);
		}
		// localSave();
		// console.log(JSON.parse(storage['myTodos']));

		$scope.clearCompleted = function () {
			var result = [];
			for (var i = 0; i < $scope.todos.length; i++) {
				// if ($scope.todos[i].isCompleted === true) {
				// 	$scope.todos.splice(i, 1);
				// }
				if ($scope.todos[i].isCompleted === false) {
					result.push($scope.todos[i]);
				}
			}
			$scope.todos = result;
			localSave();

		}

		$scope.currentId = -1;
		$scope.editing = function (id) {
			console.log("开始编辑" + id);
			$scope.currentId = id;
		};
		$scope.save = function () {
			$scope.currentId = -1;
			localSave();

		};

		$scope.remove = function (id) {
			for (var index = 0; index < $scope.todos.length; index++) {
				if ($scope.todos[index].id === id) {

					$scope.todos.splice(index, 1);
				}
			}
			localSave();
		}


		$scope.addTodoItem = function (e) {

			if (e.code === 'Enter' && $scope.text !== '' && $scope.text !== undefined) {
				console.log("dota");
				console.log($scope.text);
				var item = {};
				item.text = $scope.text;
				item.id = getId();
				item.isCompleted = false;
				console.log(item);
				$scope.todos.push(item);
				$scope.text = '';

				//id 最好是升序的, 并且唯一, 最好是不受增减影响
				//次点的要求, 这个id是唯一
			}
			localSave();
		}

		// var num = 2;
		function getId() {

			var id = new Date().getTime();

			// var id = Math.random()
			// for(var item of $scope.todos){
			// 	if (id === item.id){
			// 		getId()
			// 	}
			// }
			return id;
		}

		$scope.getUnfinishNum = function () {
			var i = 0;
			for (var item of $scope.todos) {
				if (item.isCompleted === false) {
					i++;
				}
			}
			return i;
		}
		// $scope.leftItemsNum = getUnfinishNum();

		var now = $scope.getUnfinishNum() === 0;
		$scope.toggleAll = function () {
			console.log("toggle执行");
			for (var item of $scope.todos) {
				item.isCompleted = now;
			}
			now = !now;
		}


		//过滤器实现显示已完成
		$scope.selector = {};

		$scope.selectCompleted = function () {
			$scope.selector = {isCompleted: true}
		}

		// console.log($window.location.hash);
		// $scope.hash = $window.location.hash;
		$scope.$location = $location;
		// console.log($location);

		$scope.$watch('$location.$$hash', function (newVal, oldVal) {
			console.log(newVal)
			console.log(oldVal)
			switch (newVal) {
				case '/active':
					$scope.selector = {isCompleted: false};
					break;
				case '/completed':
					$scope.selector = {isCompleted: true};
					break;
				default:
					$scope.selector = {};
			}
		})
	}])


})(window, angular, _);
