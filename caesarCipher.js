function caesarCipher(string, key)
{
    const alphabet = ' .,?!abcdefghijklmnopqrstuvwxyz0123456789';
    let cypherText = String();
    key = key % alphabet.length;
    for(let i = 0; i < string.length; i++)
    {
        let letter = string.charAt(i);
        let indexOfLetter = alphabet.indexOf(letter);
        cypherText += alphabet.charAt((indexOfLetter + key) % alphabet.length).toUpperCase();
    }
    return cypherText;
}

export default caesarCipher;