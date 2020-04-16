/* undefined or null */
const nothing: null = null;
const notDefined: undefined = null;

const someString: string = 'something';

const someNumber: number = 2.2;

const arrayOfNumbers: number[] = [1, 2, 3, 4];

const strictArray: [number, string] = [1, 'fadsfds'];

/* enums work with autocomplete */
type Sport = 'basketball' | 'soccer' | 'baseball';
const enumExample: Sport = 'soccer';

/* objects are typed with _Interfaces_ */
interface Person {
  firstName: string;
  lastName: string;
  phone?: string;
}

interface AdditionalFeatures {
  address: string;
  birth: string;
}

const func = (): Person & AdditionalFeatures => ({
  firstName: 'fdasf',
  lastName: 'fdsf',
  address: 'fdasf',
  birth: 'fdsaf',
});

const myObject: Person = {
  firstName: 'joe',
  lastName: 'schmo',
  phone: 'dfsaf',
};

/* likewise you can create an array of interfaces */
const people: Person[] = [
  {
    firstName: 'joe',
    lastName: 'schmo',
    phone: '423423',
  },
];

const firstNames = people.map(({ firstName }) => firstName);
