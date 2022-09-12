export default function listGifts(letter) {
    const arrayWords = letter.trim().split(" ");
   
     const objectList = arrayWords.reduce((prevValue, currentValue) => {
       if (currentValue && currentValue[0] !== "_") {
         return {
           ...prevValue,
           [currentValue]: prevValue[currentValue]
             ? prevValue[currentValue] + 1
             : 1,
         };
       }
       return prevValue;
     }, {});
   
     return objectList;
   }