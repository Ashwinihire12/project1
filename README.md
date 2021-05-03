Backend Execution
Step 1: You need to install json server .
npm install -g json-server
step 2:start new command prompt and start json server
json-server --watch db.json
step 3:start the server
http://localhost:3000/

Frontend Execution
Step 1: Open the source code folder in vs code.
Step 2:install npm 
npm install @angular/cli
step 3:Build application by following command
ng serve
step 4:start server
http://localhost:4200


Execution flow:
1)	Inventory list is given on home page. If you want to add a inventory item simply click on
Add Item button.
2)	Add Item like name,description and price.
3)	In the last column of operation you can perform edit and delete operation.
4)	According to operations you are performing will get reflected into the Inventory list.as well as you can check it on db file.

