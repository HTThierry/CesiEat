// Use the 'mydatabase' database
db = db.getSiblingDB('mydatabase');
db.createUser({
    user: 'admin',
    pwd: 'password',
    roles: [
        {
            role: 'readWrite',
            db: 'mydatabase'
        }
    ]
});

db.createCollection("mycollection");
db.mycollection.insert({ name: "John Doe", age: 30 });