const data = [
    {
        name: 'Mauricio',
        age: 23
    },
    {
        name: 'Alvaro',
        age: 21
    },
    {
        name: 'Andres',
        age: 32
    },
    {
        name: 'Alicia',
        age: 48
    },
    {
        name: 'Beth',
        age: 33
    },
    {
        name: 'Laura',
        age: 28
    },
];

const info = document.querySelector('#info')


let details = data.map(element => {
    return (
        '<div>' + element.name + ' ' + 'is ' + element.age + ' years old' + '</div>'
    )
})

info.innerHTML = details.join('\n')