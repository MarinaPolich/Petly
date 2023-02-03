export const cutString = (text, length) => {
   
   const formatedText = text.slice(0, length)
 return text.length > length ? formatedText+"..." : formatedText;
}