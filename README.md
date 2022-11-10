## Target Vision Banking Task

### Required task:

Implement a solution with a following scenario:

1. Customer wants to see their monthly balance and cumulative balance

2. There is an API that is developed by another team. The API provides bank transactions which include amount transferred and date

3. Things to consider :
    a. In this task there is no need to develop the API developed by another team
    b. How to design your application so that it is testable?
    c. If the application must be deployed to a server in remote location, how would you do it?


#### Solutions

**Question 1** : How to design your application so that it is testable?
**Answer** : Separation of concerns and writing encapsulated chunks of code with no reference to outside components is the key to write testable and maintainable applications.

**Question 2** : If the application must be deployed to a server in remote location, how would you do it?
**Answer** : I would use a CI/CD tool to containerize my application then deploy it on the server using SSH pipelines

---

#### How to run this application

1. Clone the repository to your local machine using `git clone `
2. Navigate to the root directory then run `npm install`
3. Execute `npm run server` which starts a fake API bundled within the application
4. Execute `npm run dev` which will start the application on development server
5. You can test the application using `npm run test`

---

#### How to use the eBanking application

1. Log in using these credentials
    - email : demo@demo.com
    - password : demoP@ssW0rd123
2. You can check your cumulative balance to the top right
3. You can check all your previous transaction in the screen and you can also filter them by providing a filtering criteria
4. Log out of your account
