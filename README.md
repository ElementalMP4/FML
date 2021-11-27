# FML - Fren Markup Language

A very basic way of automatically generating responses based on pre-determined structures and keywords.
FML is a good companion for NLP chatbots, allowing more dynamic responses to be generated.

Currently, FML is only compatible with Node.JS

Example FML file (example.json):
```json
{
    "name": "FML Example",
    "version": "1.0.0",
    "intents": [{
        "intent": "something",
        "structures": [
            "A word: [word]",
            "A number: [number]"
        ],
        "fillers": [
            { "placeholder": "word", "value": "Happiness" },
            { "placeholder": "word", "value": "Avocadoes" },
            { "placeholder": "number", "value": "69" },
            { "placeholder": "number", "value": "420" }
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
const FML = require("./FML");                       //Require the module
FML.dataset("./example.json");                      //Set the dataset to be used (can be changed on-the-fly)
var response = FML.generateResponse("something"));  //Get a randomly generated response for the intent 'something'
console.log(response);                              //Show the response
```