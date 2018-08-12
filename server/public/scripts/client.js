console.log('js');

let myApp = angular.module('myApp', []);

myApp.controller('TaskController', function ($http) {
    console.log('TaskController is ready');
    const vm = this;

    //Define data structure
    vm.tasks = [];


    getTasksFromServer();


    function getTasksFromServer() {
        console.log('in getTasksFromServer');
        $http({
            method: 'GET',
            url: '/task'
        }).then(function (response) {
            console.log('back from server with:', response.data);
            vm.tasks = response.data;
            vm.dateIn = "";
            vm.dueIn = "";
            vm.taskIn = "";
            vm.notesIn = "";
        }).catch(function (error) {
            console.log('error retrieiving from server', error);
        });
    }// end getTasksFromServer

    vm.addTask = function () {
        vm.taskToAdd = {
            date: vm.dateIn,
            due_date: vm.dueIn,
            task: vm.taskIn,
            notes: vm.notesIn,
            complete: vm.completeIn
        }
        console.log(vm.taskToAdd);
        $http({
            method: 'POST',
            url: '/task',
            data: vm.taskToAdd
        }).then(function (response) {
            getTasksFromServer();
        }).catch(function (error) {
            alert('unable to post task')
        })
    }

    vm.completeTask = function (taskId) {
        console.log('in taskId', taskId);
        $http({
            method: 'PUT',
            url: '/task/complete/' + taskId
        }).then(function (response) {
            getTasksFromServer();
            console.log(response);
        }).catch(function (error) {
            alert('Unable to complete task.')
            console.log(error);
        })
    }

    vm.deleteTask = function (taskId) {
        console.log('delete task with id: ', taskId);
        $http({
            method: 'DELETE',
            url: '/task/deleteTask/' + taskId
        }).then(function (response) {
            getTasksFromServer();
        }).catch(function (error) {
            alert('Unable to delete')
            console.log(error);
        })

    }
})


