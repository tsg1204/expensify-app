const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('should add two numbers', () => {
    const result = add(3, 4);

    expect(result).toBe(7);
});

test('should say Hello Tatiana', () => {
    const result = generateGreeting('Tatiana');
    expect(result).toBe('Hello Tatiana!');
});

test('should say Hello no name', () => {
    const result = generateGreeting();
    expect(result).toBe('Hello Anonymous!');
})