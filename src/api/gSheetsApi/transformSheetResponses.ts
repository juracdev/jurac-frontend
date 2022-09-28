import { GSheetResponse } from './gSheetsApi';

export type TransformRule = {
  strPattern: string;
  transformer: () => string;
};

const rules: TransformRule[] = [
  {
    strPattern: 'стендах',
    transformer: () =>
      'Удовлетворенность информацией, размещенной на информационных стендах',
  },
  {
    strPattern: 'сайт',
    transformer: () =>
      'Удовлетворенность информацией, размещенной на сайте организации',
  },
  {
    strPattern: 'качеством условий',
    transformer: () =>
      'Удовлетворенность качеством условий оказания услуг организацией',
  },
];

export const transformSheetResponses = (
  responses: GSheetResponse[]
): GSheetResponse[] => {
  return responses.map((resp) => {
    delete resp['Timestamp'];
    delete resp['Отметка времени'];

    (Object.keys(resp) as Array<string>).forEach((key) => {
      rules.forEach((rule) => {
        if (key.includes(rule.strPattern)) {
          const val = resp[key];
          delete resp[key];
          const newKey = rule.transformer();
          resp[newKey] = val;
        }
      });
    });

    return resp;
  });
};
