
export async function getOpenAiResponse(input: string) {

    const res = await fetch('http://localhost:3001/response.json');
    const {items, summary} = await res.json()
    console.log(input)
    await new Promise((resolve)=>setTimeout((resolve), 1000))
    
    return [items, summary]
}