const users = [{id: "01", Name:"Eisha"}];

function addUser(user){
    users.push(user);
}

function updateUser(id, user){
    const userIndex = users .findIndex
    ((user) => user.id == id);
    users[userIndex] = user;
}

module.exports = {
    users,
    addUser,
    updateUser,
};