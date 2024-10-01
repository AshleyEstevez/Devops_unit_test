const helloWorld = require('./index');

test('debe retornar "Hola Mundo"', () => {
    expect(helloWorld()).toBe("Hola Mundo");
});
