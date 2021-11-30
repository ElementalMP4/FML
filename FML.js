module.exports = class FML {
    constructor(location) {
        this.datasetLocation = location;
    }

    getRandomElement(elements) {
        return elements[Math.floor(Math.random() * elements.length)];
    }

    generateResponse(intent) {
        const responses = require(this.datasetLocation).intents;
        const responseMap = responses.find(response => response.intent == intent);
        if (responseMap == undefined)
            return undefined;
        const structure = this.getRandomElement(responseMap.structures);
        const tokens = structure.split(" ");
        let responseTokens = [];
        tokens.forEach(token => {
            if (token.startsWith("[") && token.endsWith("]")) {
                const placeholder = token.replace(/[\[\]']+/g, '');
                const fillers = responseMap.fillers.filter(filler => filler.placeholder == placeholder);
                responseTokens.push(this.getRandomElement(fillers).value);
            } else responseTokens.push(token);
        });
        return responseTokens.join(" ");
    }
}