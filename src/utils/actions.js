export function flip(data) {
    const reversedData = []
    data.forEach((card) => {
        reversedData.push(card.toReversed())
    })
    return reversedData
}

export function removeCardWithTotalNumberOf(totalNum, data) {
    let cards = []
    data.forEach((card) => {
        if (card[0] + card[1] !== totalNum) cards.push(card)
    })
    return cards
}

export function removeCardWithDuplicateNumbers(data) {
    const totalCounts = {};
    data.forEach(innerArray => {
        const total = innerArray.reduce((sum, val) => sum + val, 0);
        totalCounts[total] = (totalCounts[total] || 0) + 1;
    });

    const uniqueTotals = data.filter(innerArray => {
        const total = innerArray.reduce((sum, val) => sum + val, 0);
        return Boolean(totalCounts[total] === 1);
    });

    return uniqueTotals
}

export function sortCardsAsc(data) {
    const ascOrder = data.slice().sort((a, b) => {
        const totalA = a.reduce((acc, current) => acc + current, 0)
        const totalB = b.reduce((acc, current) => acc + current, 0)

        if (totalA === totalB) return a[0] - b[0]

        return totalA - totalB
    })

    return ascOrder
}

export function sortCardDesc(data) {
    const descOrder = data.slice().sort((a, b) => {
        const totalA = a.reduce((acc, current) => acc + current, 0)
        const totalB = b.reduce((acc, current) => acc + current, 0)

        if (totalA === totalB) return b[0] - a[0]

        return totalB - totalA
    })

    return descOrder
}

export function parseInput(rawData) {
    const splitString = rawData.split(";")
    let finalResult = []
    splitString.forEach((item) => {
        const split = item.split(",")
        const toInt = split.map((innerItem) => parseInt(innerItem, 10))
        finalResult.push(toInt)
    })
    return finalResult
}