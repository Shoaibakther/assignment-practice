function animalCount(miles) {
    const animalDensityfirst10miles = 10;
    const animalDensitysecondmiles = 50;
    const animalDensityThirdmiles = 100;
    if (miles <= 10) {
        const count = miles * animalDensityfirst10miles;
        return count;
        
    }
    else if (miles <= 20) {
        const firstDenstanimal = 10 * animalDensityfirst10miles;
        const restMiles = miles - 10;
        const secondDensityAnimals = restMiles * animalDensitysecondmiles;
        const totalAnimals = firstDenstanimal + secondDensityAnimals;
        return totalAnimals;
    }
    else {
        const firstDenstanimal = 10 * animalDensityfirst10miles;
        const secondDensityAnimals = 10 * animalDensitysecondmiles;
        const restMiles = miles - 20;
        const restDenseanimals = restMiles * animalDensityThirdmiles;
        const totalAnimals = firstDenstanimal + secondDensityAnimals + restDenseanimals;    
        return totalAnimals;  
    }
}
const animals = animalCount(35);
console.log(animals);