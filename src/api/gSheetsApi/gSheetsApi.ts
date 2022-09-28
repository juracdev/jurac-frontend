import { transformSheetResponses } from './transformSheetResponses';

const GSheetReader = require('g-sheets-api');

const options = {
  apiKey: process.env.G_SHEETS_API_KEY,
  sheetId: '1ZcZNrcsjNvPLDW4MretTpLPOAwq79dg4HIN-PJgR9lg',
  sheetNumber: 1,
  sheetName: 'Ответы на форму',
};

export type GSheetResponse = {
  [key: string]: string;
};

const getSheetResponses = (): Promise<GSheetResponse[]> =>
  new Promise((resolve, reject) => {
    GSheetReader(options, (results: any) => {
      const tr = transformSheetResponses(results);
      resolve(tr);
    }).catch((err: any) => {
      reject(err);
    });
  });

const getAll = async () => {
  try {
    return await getSheetResponses();
  } catch (error) {
    setTimeout(() => {
      return getAll();
    }, 1000);
  }
};

export const gSheetsApi = {
  getAll,
};
