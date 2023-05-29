const addExtraProperties = async (offer) => {
    const skills = offer.skillsList.map(item => item.skill);
    
    try {
        const { Configuration, OpenAIApi } = require("openai");
        const openai = new OpenAIApi(new Configuration({ apiKey: process.env.OPENAI_API_KEY }) ); 
        const completion = await openai.createChatCompletion({
            model:"gpt-3.5-turbo",
            messages: [
                {role:'user', 
                content: process.env.OPENAI_PROMPT_CLASSIFY + offer.title }
            ]
        });  
      
        const generatedStack = parseInt(completion.data.choices[0].message.content);
        offer.stack = generatedStack;
        offer.skills = skills;
        return offer;   
    } catch(error) {
        console.log(" Error from completion (normally just a limit use, so it will be fixed automatically in next api call): " + error);
    }
}

module.exports.addExtraProperties = addExtraProperties;