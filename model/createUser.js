const createUser = (req, res) => {
    const userDetails = {
        fname: req.body.firstName,
        lname: req.body.lastName,
        username: req.body.username,
        password: req.body.password,
    }
res.send("details received");
console.log(userDetails);
    const data = fs.readFileSync('data.json','utf-8');
    let newData = JSON.parse(data);
    console.log(newData)
    newData.push(userDetails)  
    fs.writeFileSync('data.json',JSON.stringify(newData) ); 
}