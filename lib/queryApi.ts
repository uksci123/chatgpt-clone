import openai from "./chatgpt";

const query = async (prompt:string , chatId:string , model:string) => {
    const res = await openai.completions.create({
        model,
        prompt,
        max_tokens:50,
    })
    .then((res)=>res.choices[0].text)
    .catch(
        (err)=>
         `ChatGpt was unable to find for that ! (Error: ${err.message})`
    )

    return res ; 

}

export default query ; 
