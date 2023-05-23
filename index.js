// Code your solution here
function findMatching(driverNames, string){
    const nameMatches = driverNames.filter(name => name.toLowerCase() === string.toLowerCase())
    return nameMatches;
}

function fuzzyMatch(driverNames, string){
    const firstLetterMatches = driverNames.filter(letter => letter[0] === string[0])
    return firstLetterMatches;
}

function matchName(driverNames, string){
    const matchingNames = driverNames.filter(driver => driver.name === string)
    return matchingNames; 
}