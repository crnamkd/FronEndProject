class User 
{
    constructor(username, password) 
    {
        this.username = username;
        this.password = password;
    }

    
}

class Admin extends User
{
    constructor(username, password) 
    {
        super(username, password);




    }





}

class NonAdmins extends User 
{
    constructor(username,password)
    {
        super(username,password)




    }
}

let users = [
    {
      "username": "tomas",
      "password": "tomas" 
    },
    {
      "username": "stef",
      "password": "stef"
    },
    {
      "username": "dare",
      "password": "dare"
    }
];

let AllUsers = [];

function makeUsers()
{
    users.map((user, i) => {
        AllUsers.push(
            (i % 2 == 0) ?
            new Admin(username,password) :
            new NonAdmins(username,password)
        )
    })
}

makeUsers();