# SingleTasker_toDoList_App
To-Do List Application

-Create a front end experience that allows a user to create a task. 
-When the task is created, it should be stored inside of a database. 
-Whenever a task is created the front end should refresh to show all tasks that need to be completed.
-Each task should have an option to 'Complete' or 'Delete'.
-When a task is complete, its visual representation should change on the front end 
-Whether or not a task is complete should also be stored in the database.
-Deleting a task should remove it both from the Front End as well as the Database.


# Built With:
-Visual Studio Code
-AngularJS
-MongoDB
-Node 
-Express
-Bootstrap

# Installing:
1. Download this project.
2. In terminal:
    1. npm install
    2. npm start
    
# Completed Features:
-Input fields to name task, notes, submit and due dates
-Submit button that addes tasks to table
-Table that captures task inputs and stores them in a database
-Complete button that populated with each submitted task
    -When pressed, this button updates the task in the database (from false to true), puts a line through the task data on the DOM, and deactivates itself. 
-Delete button that populates with each submitted task
    -When pressed, this button removes the task from the database and the table on the DOM.

# Screen Shot: 

# Next Steps:
-When the user clicks on any table data box, that box should become an editable text field
-Tasks should submit to the table upon pressing 'enter' on the keyboard
-Completed tasks should float to the bottom of the page, while remaining tasks stay at the top
-Organize tasks by due date
    
CHECKLIST: Refer to Koala Holla group project
[x] Write README
[x] Setup project folders and files
[x] spin up server
[x] .gitignore
[x] install express
[x] bring Angular file into project
    [x] source AngularJS into index.html
[x] Styles folder
    [x] source in style sheet
[x] Source in Client.js
[x] Bring in Bootstrap css and js into vendors folder
    [x] Source Bootstrap into index.html
[x] Mongo
    [x] Install Mongoose
    [x] Setup Mongoose
    [x] Create database Schema
    [x] Create new database via server.js
    [x] Connect to Mongo via server.js
    [x] Ensure ROBO3T is logging database
[ ] HTML (using AngularJS)
    [x] Form: input fields to capture to-dos
    [x] Setup NG app and controller
    [x] Table to capture inputs: task, submit, complete, delete
        [x] When task complete, its visual representation should change (ng-class)
    [x] Format table
    [x] Buttons: submit, complete, delete
[x] Client
    [x] Angular
    [x] Logic for GET (add to table)
    [x] Logic for POST (get info from form)
[x] Server
    [x] Logic for GET
    [x] Logic for POST 
    [x] Logic for submit
    [x] Logic for complete
    [x] Logic for delete


