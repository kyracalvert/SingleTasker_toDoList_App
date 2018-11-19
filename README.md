# SingleTasker_toDoList_App
## MEAN Stack To-Do List Application

I set out to...
1. Create a Front End experience that allows a user to submit a task. 
2. When the task is created, it should be stored inside of a database. 
3. When a new task is added, the front end should refresh to show all tasks that need to be completed.
4. Each task should have an option to 'Complete' or 'Delete'.
5. When a task is complete, its visual representation should change on the Front End
6. Whether or not a task is complete should be stored in the database.
7. Deleting a task should remove it, both from the Front End as well as the Database.


# Built With:
1. Visual Studio Code
2. AngularJS
3. MongoDB
4. Node.js 
5. Express
6. Bootstrap

# Installing:
1. Fork & Clone this repository.
2. In terminal:
    1. npm install
    2. npm start
    
# Completed Features:
- [x] Input fields to add tasks, notes, submission and due dates
- [x] Submit button that adds tasks to table
- [x] Table that captures task inputs and stores them in a database
- [x] Complete button that populates when each task is submitted
    1. When pressed, this button updates the task in the database (from false to true), puts a line through the task data on        the DOM, and deactivates itself. 
- [x] Delete button that populates with each submitted task
    1. When pressed, this button removes the task from the database, as well as from the table on the DOM.

# Screen Shot: 
<img width="1438" alt="screen shot 2018-08-13 at 11 45 37 am" src="https://user-images.githubusercontent.com/34479779/44045802-4fa14740-9eef-11e8-85fa-d8952e6f6fdf.png">

# Next Steps:
1. When the user clicks on any table data box, that box should become an editable text field
2. Tasks should submit to the table upon pressing 'enter' on the keyboard
3. Completed tasks should float to the bottom of the page, while remaining tasks stay at the top
4. Organize tasks by due date

# Author:
Kyra Crawford Calvert
    
# Base Mode CHECKLIST: 
- [x] Write README
- [x] Setup project folders and files
- [x] spin up server
- [x] .gitignore
- [x] install express
- [x] bring Angular file into project
    - [x] source AngularJS into index.html
- [x] Styles folder
    - [x] source in style sheet
- [x] Source in Client.js
- [x] Bring in Bootstrap css and js into vendors folder
    - [x] Source Bootstrap into index.html
- [x] Mongo
    - [x] Install Mongoose
    - [x] Setup Mongoose
    - [x] Create database Schema
    - [x] Create new database via server.js
    - [x] Connect to Mongo via server.js
    - [x] Ensure ROBO3T is logging database
- [x] HTML (using AngularJS)
    - [x] Form: input fields to capture to-dos
    - [x] Setup NG app and controller
    - [x] Table to capture inputs: task, submit, complete, delete
    - [x] When task complete, its visual representation should change (ng-class)
    - [x] Format table
    - [x] Buttons: submit, complete, delete
- [x] Client
    - [x] Angular
    - [x] Logic for GET (add to table)
    - [x] Logic for POST (get info from form)
- [x] Server
    - [x] Logic for GET
    - [x] Logic for POST 
    - [x] Logic for submit
    - [x] Logic for complete
    - [x] Logic for delete


