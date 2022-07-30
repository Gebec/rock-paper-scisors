import { EOption } from '../Enums/option.enum';

export const getRandomOption = (): EOption => {
  const enumValues = Object.values(EOption);
  const randomIndex = Math.floor(Math.random() * enumValues.length);
  const randomOptionValue = enumValues[randomIndex];
  return randomOptionValue;
};
