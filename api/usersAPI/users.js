
try {
    fetch('https://dummyjson.com/users')
        .then(res => res.json())
        .then(users =>{
            let male = [];
            let female = [];
            for (const user of users.users) {
                if(user.gender === 'male'){
                    male.push(user);
                }else if(user.gender === 'female'){
                    female.push(user);
                }
            }
            console.log(male);
            console.log(female);

        })
}catch (e) {

}