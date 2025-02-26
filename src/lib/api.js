const api_key = import.meta.env.VITE_PERPLEXITY_API_KEY;

const messageHistory = [{
    "role": "system",
    "content": "You are a highly capable assistant specializing in scoping out home repair and renovation jobs. Your goal is to gather all necessary details and ensure you have a complete understanding of the work required before searching for local contractors who can provide accurate quotes."
}];

export const callPerplexity = async (chat) => {
    try {
        messageHistory.push({
            "role": "user",
            "content": chat
        })
        // console.log(api_key)
        const requestBody = {
            "model": "sonar",
            "messages": messageHistory,
            // "max_tokens": 123,
            "temperature": 0.2,
            "top_p": 0.9,
            "search_domain_filter": null,
            "return_images": false,
            "return_related_questions": false,
            // "search_recency_filter": "<string>",
            "top_k": 0,
            "stream": false,
            "presence_penalty": 0,
            "frequency_penalty": 1,
            "response_format": null
        };

        const options = {
            method: 'POST',
            headers: { Authorization: `Bearer ${api_key}`, 'Content-Type': 'application/json' },
            body: JSON.stringify(requestBody)
        };

        const response = await fetch('https://api.perplexity.ai/chat/completions', options);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        const aiResponse = data.choices[0].message.content;
        messageHistory.push({
            "role": "assistant",
            "content": aiResponse
        })
        console.log(messageHistory)
        return aiResponse;
    } catch (err) {
        console.error("Error calling Perplexity API:", err);
        return null;
    }
};
