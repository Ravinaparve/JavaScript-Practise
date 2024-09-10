// how to modify nested array in react

let person = {
    name: 'Niki de Saint Phalle',
    artwork: {
        title: 'Blue Nana',
        city: 'Hamburg',
        image: 'https://i.imgur.com/Sd1AgUOm.jpg',
    }
}

let person1 = {
    ...person,
    artwork: {
        ...person.artwork,
        title: "New Red Title"
    }
}
console.log(person1);
// {
//     name: 'Niki de Saint Phalle',
//         artwork: {
//         title: 'New Red Title',
//         city: 'Hamburg',
//         image: 'https://i.imgur.com/Sd1AgUOm.jpg'
//     }
// }