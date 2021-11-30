# FML - Fren Markup Language

A very basic way of automatically generating responses based on pre-determined structures and keywords.
FML is a good companion for NLP chatbots, allowing more dynamic responses to be generated.

Currently, FML is only compatible with Node.JS and requires no external libraries.

Example FML file (example.json):
```json
{
    "name": "FML Inspirational Quote Demo",
    "version": "1.0.0",
    "intents": [{
        "intent": "inspo",
        "structures": [
            "Never give up on [goal]",
            "Search for the [thing]",
            "To achieve [goal] you will need [thing]"
        ],
        "fillers": [
            { "placeholder": "goal", "value": "yourself" },
            { "placeholder": "goal", "value": "happiness" },
            { "placeholder": "thing", "value": "money" },
            { "placeholder": "thing", "value": "good will" }
        ]
    }]
}
``` 
- All intents are stored in an array called `intents`
- An intent is called by name, at which point a random structure is selected and parsed, and placeholders eg: `[word]` are replaced with relevant random fillers.
- An intent MUST contain at least one structure and a name. However, fillers are optional. 
- A structure can contain 0 or more fillers

Example JS file:
```js
const FML = require("./FML");                                 //Import Dependency
const responseGenerator = new FML("./inspiration.json");      //Instantiate FML with dataset "inspiration.json"
const response = responseGenerator.generateResponse("inspo"); //Generate a response based on the intent "inspo"
console.log(response);                                        //Output response
```

Try the `test.js` file provided to see FML in action!