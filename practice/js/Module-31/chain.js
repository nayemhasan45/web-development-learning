const user = [{ name: 'abdul', id: 2222 }];
// console.log(user[0].id);

const data = {
    count: 5000,
    user: [
        { name: 'nahid', id: 5191 },
        { name: 'nayem', id: 5192 }
    ]
}
const firstId = data.user[1].id;

const userInfo = {
    id: 0001,
    name: 'hola mia',
    address: {
        street: {
            first: '35/A kochukhet lane',
            second: 'third floor',
            third: 'right side',
        },
        postOffice: 'canpur',
        city: 'dhaka',
    }
}

// access third street 
// use '?' if we dont have a value for that item.
// without '?' we will get an error.
const third = userInfo.address?.street?.second;
console.log(third);