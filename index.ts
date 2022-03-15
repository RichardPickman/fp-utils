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

    for (let i=0; i < items.length; i++) {
        result.push(callback(items[i], i, items))
    }

    return result
}


function find (callback, items) {
    for (let i=0; i < items.length; i++) {
        const result = callback(items[i], i, items)

        if (result) return items[i]
    }
}

function findIndex (callback, items) {
    for (let i=0; i < items.length; i++) {
        const callbackResult = callback(items[i], i, items)

        if (callbackResult) return i
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
        const callbackResult = callback(items[i], i, items)

        if (callbackResult) result.push(items[i])
    }

    return result
}
