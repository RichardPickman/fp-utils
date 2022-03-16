function reduce(callback, items, initialState) {
    let result = initialState || items[0]

    for (let i = 0; i < items.length; i++) {
        result = callback(result, items[i], i, items)
    }

    console.log(result)
    return result
}

reduce((acc, item, index) => {
    for (let i = 0; i < item.length; i++) {
        acc.push(item[i] * 10)
    }
    return acc
}, [[1,2,3,4,5], [124,124,124,124,12,4,436,56,87,6798,678,9], [894,6849,5,468,4,564,168,46,84]], [])