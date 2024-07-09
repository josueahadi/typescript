// interfaces
interface IsPerson {
    name: string;
    age: number;
    speak(a: string): void; 
    spend(a: number): number;
}

const me: IsPerson = {
    name: 'Joshua',
    age: 39,
    speak(text: string): void  {
        console.log(text);
    },
    spend(amount: number): number {
        console.log('I spent ', amount)
        return amount; 
    }
}

const greetPerson = (person: IsPerson) => {
    console.log(`Hello ${person.name}`);
}

greetPerson(me);

console.log(me) //?