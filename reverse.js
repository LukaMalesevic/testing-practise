function reverse(string)
{
    let reversedString = String();
    for(let i = 0; i < string.length; i++)
    {
        reversedString += string.charAt(string.length - i - 1);
    }
    return reversedString;
}

export default reverse;