import { EOption } from '../option.enum';

export const getRandomOption = (): EOption => {
  const enumValues = Object.keys(EOption)
    .map((n) => Number.parseInt(n))
    .filter((n) => !Number.isNaN(n)) as unknown as EOption[];
  const randomIndex = Math.floor(Math.random() * enumValues.length);
  const randomOptionValue = enumValues[randomIndex];
  return randomOptionValue;
};
