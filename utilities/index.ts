export function sampleUtilityFunction(a: string, b: number, c: boolean) {
  console.log(a, b, c);
  return "abc";
}

export function getSum(list: number[]) {
  return list.reduce((a, b) => a + b, 0);
}

export function getRandomlyGeneratedNumbers(): number[] {
  return [1, 2, 3];
}

type BooleanFlags = {
  showPage: boolean
  showHeader: boolean
}

type MixedFlags = {
  status: string
  counter: number
}

type OptionsFlags<Type> =  {
  [Property in keyof Type]: boolean
}

type Flags = OptionsFlags<MixedFlags>;

