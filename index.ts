// function reduce (callback: (acc: any, item: any, index?: number, items?: []) => void, initialState?: [], items?: []) {
//     let result;

//     if (typeof initialState === 'string') {
//         result = ''

//         for (let i=0; i < items.length; i++) {
//             const index = i;
//             const currentArray = items

//             result + callback(result, items[i], index, currentArray)
//         }
//     }
//     if (Array.isArray(items)) {
//         result = []

//         for (let i=0; i < items.length; i++) {
//             const index = i;
//             const currentArray = items

//             const callbackOutput = callback(result, this[i])

//             result.push(callback(result, items[i], index, currentArray))
//         }

//     }
//     if (typeof initialState === 'object') {
//         result = {}

//         for (let i=0; i < items.length; i++) {
//             const index = i;
//             const currentArray = items

//             result[i] = callback(result, items[i], index, currentArray)
//         }
//     }

//     console.log(result)
// }

function map (callback, items) {
    const result = []

    for (let i of items) {
        result.push(callback(i))
    }

    return result
}
function find (callback, items) {
    for (let i=0; i < items.length; i++) {
        console.log(items[i], ' <--- WHAT?')
        const result = callback(items[i], i)

        if (result) {
            console.log(i)

            return i
        }
    }
}

find(elem => {
    return elem > 3
}, [1, 2, 3, 4, 5, 6])

function findIndex (callback, items) {
    for (let i=0; i < items.length; i++) {
        const callbackResult = callback(items[i], i, items)

        if (callbackResult) {
            const result = items.indexOf(i)
            console.log(result)
            return result
        }
    }
}
function compose (fn1, fn2, fn3) {
    return
}
function curry (abc) {
    return
}
function filter (callback, items) {
    const result = []

    for (let i=0; i < items.length; i++) {
        const callbackResult = callback(items[i], i)

        if (callbackResult) {
            result.push(i)
        }
    }

    console.log(result)
    return result
}