console.log('js');

let myApp = angular.module('myApp', []);

myApp.controller('TaskController', function ($http){
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
})

