//Nieprawidlowy JSON

const invalidJson = '{ "name": "Mango", "age": 3, "isHappy": true, }';

try {
    const obj = JSON.parse(invalidJson);
    console.log(obj);
} catch (error) {
    console.error("Wystapil blad podczas parsowania JSON:");
    console.error("Rodzaj bledu:", error.name);
    console.error("Wiadomosc:", error.message);
};