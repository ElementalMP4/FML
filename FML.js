var datasetLocation;

function setDataset(location) {
    datasetLocation = location;
}

function getRandomElement(elements) {
    return elements[Math.floor(Math.random() * elements.length)];
}

function generateResponse(intent) {
    const responses = require(datasetLocation).intents;
    const responseMap = responses.find(response => response.intent == intent);
    if (responseMap == undefined)
        return undefined;
    const structure = getRandomElement(responseMap.structures);
    const tokens = structure.split(" ");
    let responseTokens = [];
    tokens.forEach(token => {
        if (token.startsWith("[") && token.endsWith("]")) {
            const placeholder = token.replace(/[\[\]']+/g, '');
            const fillers = responseMap.fillers.filter(filler => filler.placeholder == placeholder);
            responseTokens.push(getRandomElement(fillers).value);
        } else responseTokens.push(token);
    });
    return responseTokens.join(" ");
}

module.exports = {
    generateResponse: generateResponse,
    dataset: setDataset
}