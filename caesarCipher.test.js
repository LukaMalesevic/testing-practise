import caesarCipher from "./caesarCipher";

test('convert plaintext "ja volim nevaljale decake sa 3 oka!"\n to cyphertext VMH70XUYHZQ7MXVMXQHPQOMWQH4MHAH0WML with a key 53', () => {
    expect(caesarCipher("ja volim nevaljale decake sa 3 oka!", 53)).toBe("VMH70XUYHZQ7MXVMXQHPQOMWQH4MHAH0WML");
});