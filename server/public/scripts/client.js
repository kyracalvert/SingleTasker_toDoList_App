console.log('js');

let myApp = angular.module('myApp', []);

myApp.controller('TaskController', function ($http) {
    console.log('TaskController is ready');
    const vm = this;

    //Define data structure
    vm.tasks = [];
    vm.taskToAdd = {
        task: vm.taskIn,
        date: vm.dateIn,
        due_date: vm.dueIn,
        notes: vm.notesIn
    }

    getTasksFromServer();

    function getTasksFromServer() {
        console.log('in getTasksFromServer');
        $http({
            method: 'GET',
            url: '/task'
        }).then(function (response) {
            console.log('back from server with:', response.data);
            vm.tasks = response.data;
        }).catch(function (error) {
            console.log('error retrieiving from server', error);  
        });
        // end getTasksFromServer
    }
})

