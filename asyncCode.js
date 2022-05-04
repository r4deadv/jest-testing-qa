const cats = {
    1: {
        id: 1,
        name: 'Sir Isaac Mewton',
        age: 4
    },
    2: {
        id: 2,
        name: 'Catpurrnicus',
        age: 10
    },
    3: {
        id: 3,
        name: 'Cleocatra',
        age: 2
    },
    4: {
        id: 4,
        name: 'Genghis Cat',
        age: 8
    },
}

function getKittenById(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        cats[id]
            ? resolve(cats[id])
            : reject(`Kitten with ID ${id} not found.`);
        }, 2000);
    });
}

module.exports = getKittenById