
let myName: string = 'Josh Dunbar';
let capsName: string = myName.toUpperCase();
console.log('Name: ' + capsName); 

console.log('Career: Classic car restoration mechanic.');
console.log("Description: I enjoy building and creating, anything using tools peaks my interest. I'm finding the logic and diagnostic approach to programming works with the way my mind thinks.");

console.log("My Interests:");
console.log('-Vintage vehicles');
console.log('-Carpentry');
console.log('-Bike riding');
console.log('-Camping');

console.log("My previous experience:");

function displayPosition(companyName: string, jobTitle: string, description: string): void{
    console.log(companyName, jobTitle, description);
} 
displayPosition('Patient First: ', 'Service Repairman - ', 'Install, maintain, and repair equipment used in the differing centers throughout Maryland.');
displayPosition('Al-Hemp: ', 'Property Manager - ', 'Keep up tennant relations, handle rental payments, ensure necessary repairs to the property are made.');
displayPosition('Sweet Frog: ', 'Kitchen staff - ', 'prep all fresh fruits and blend yogurt dessert mixtures' );

console.log('My Skills:');

function displaySkill(skill: string, isCool: boolean): void{
    if(isCool == true){
        console.log('BAM: ' + skill);
    } else {
        console.log(skill);
    }
}

displaySkill('Welding', true);
displaySkill('Built Tiny House', true);
displaySkill('tells good jokes', false);
displaySkill('best uncle', false);
displaySkill('Build 1930s hot rods', true);