function getAdmins (map) {
    let admins = [];

    for([key, value] of map) {
        if(value === 'Admin') {
            admins.push(key);
        }
    }

    return admins;

}

const usuarios = new Map ();

usuarios.set('Luiz', 'Admin');
usuarios.set('Amanda', 'Admin');
usuarios.set('Lais', 'User');
usuarios.set('Ricardo', 'Admin');

console.log(getAdmins(usuarios));

