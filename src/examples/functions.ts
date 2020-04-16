const explictReturn = (): string => {
  return 'hello world';
};

const typedArguments = (myArg: string) => {
  return myArg;
};

const hello = typedArguments('fdsafds');

type MyFunction = (someArg: string) => string;
const someFunction: MyFunction = (a) => {
  return `hello ${a}`;
};

const noReturn = (): void => {
  console.log('helo');
};
