var app = angular.module('myApp', ['ngMaterial','md.data.table']);
app.controller('myCtrl', function ($scope, $http) {
    $scope.selected=[];
    $scope.listName = function listName() {
        $http
            .get("http://192.168.1.4:8080/names")
            .then(function(response) {
                $scope.films = response.data;
            });
    },


        $scope.deleteName = function deleteName(id) {
            console.log("deleting " + id);
            $http
                .delete("http://192.168.1.4:8080/names/" +id)
                .then(function (result) {
                    alert("Name deleted");
                    console.log("Name deleted", result.status, arguments);
                }, function () {
                    console.log("Reject", arguments);
                }, function () {
                    console.log("complete", arguments);
                });
        },



        $scope.addName = function addName(personsName,personsSurname){

            $http
                .post("http://192.168.1.4:8080/movies", {
                    personsName: personsName,
                    personsSurname: personsSurname
                })
                .then(function(data, status, headers) {
                    alert("Name added");

                });


        },


        $scope.updateName = function updateName(id,personsName,personsSurname) {
            console.log("updating " + id +" "+ personsName+" "+ personsSurname);
            $http
                .post("http://192.168.1.4:8080/names",{
                    id: id,
                    personsName: personsName,
                    personsSurname: personsSurname
                })
                .then(function (result) {
                    console.log("Name updated", result.status, arguments);
                    alert("Name updated");
                }, function () {
                    console.log("Reject", arguments);
                }, function () {
                    console.log("complete", arguments);
                });

        },


        $scope.likePerson = function likePerson(id) {
            console.log("like " + id);
            $http
                .post("http://192.168.1.4:8080/names/"+id+"/like")
                .then(function(data, status, headers) {
                    alert("Person liked");

                });
        },


        $scope.dislikePerson = function dislikePerson(id) {
            console.log("unlike " + id);
            $http
                .post("http://192.168.1.4:8080/names/"+id+"/dislike")
                .then(function (result) {
                    alert("Person unliked");
                    console.log("Person unliked", result.status, arguments);
                }, function () {
                    console.log("Reject", arguments);
                }, function () {
                    console.log("complete", arguments);
                });
        },


        $scope.toggleCustom= function toggleCustom() {
            $scope.custom = true;
            $scope.toggleCustom = function () {
                $scope.custom = $scope.custom === false ? true : false;
            };

        }




});
