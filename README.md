# weekend-challenge-3-to-do
To-Do-List Application

Here are the specific components for the challenge:

Using AngularJS, create a front end experience that allows a user to create a task.
When the task is created, it should be stored inside of a database (MongoDB)
Whenever a task is created the front end should refresh to show all tasks that need to be completed.
Each task should have an option to 'Complete' or 'Delete'.
When a task is complete, its visual representation should change on the front end (for example, the background of the task container could change from gray to green, as well as the complete option 'checked off'. Each of these are accomplished in CSS, but will need to hook into logic to know whether or not the task is complete. ng-class will come in handy!)
Whether or not a task is complete should also be stored in the database.
Deleting a task should remove it both from the Front End as well as the Database.
Include a README.md with your project (template).
We would recommend you spend some time thinking about how to approach this problem. Think through all the logic that will be needed prior to writing any code. Think through your Schema for Mongoose and how you will structure your data. Take your time, relax, remember that impostor syndrome is real, and that you are capable of knocking this out of the park!

Use CSS styling to move the aesthetic of the page beyond the vanilla HTML look:

Background color of the page
font family and size
text color &or background color of tasks to show whether or not they have been completed

CHECKLIST: Refer to Koala Holla group project
[x] Write README
[x] Setup project folders and files
[x] spin up server
[x] .gitignore
[x] install express
[x] bring Angular file into project
    [x] source AngularJS into index.html
[x] bring jQuery file into project
    [x] source in jQuery
[x] Styles folder
    [x] source in style sheet
[ ] Mongo
    [x] Install Mongoose
    [ ] Create new database via server.js
    [ ] Connect to Mongo via server.js
[ ] HTML (using AngularJS)
    [ ] Form: input fields to capture to-dos
    [ ] Setup NG app and controller
    [ ] Table to capture inputs: task, submit, complete, delete
        [ ] When task complete, its visual representation should change (ng-class)
    [ ] Buttons: submit, complete, delete
[ ] Client
    [ ] Logic for GET (add to table)
    [ ] Logic for POST (get info from form)
[ ] Server
    [ ] Logic for GET
    [ ] Logic for POST 
    [ ] Logic for submit
    [ ] Logic for complete
    [ ] Logic for delete


