function analyzeArray(arrayOfNumbers)
{
    let sum = 0;
    let min = Math.min(...arrayOfNumbers);
    let max = Math.max(...arrayOfNumbers);
    for(let i = 0; i < arrayOfNumbers.length; i++)
    {
        sum += arrayOfNumbers[i];
    }
    let average = sum / arrayOfNumbers.length;

    const object = {
        average: average,
        min: min,
        max: max,
        length: arrayOfNumbers.length
    }
    return object;
}

export default analyzeArray;