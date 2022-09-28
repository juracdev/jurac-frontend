import { gSheetsApi } from '../../api/gSheetsApi/gSheetsApi';
import { votesChart } from '../../features/votes/votesChart';

type CreateChartMarkupParams = {
  rootEl: HTMLElement;
  label: string;
  canvasId: string;
};

const createChartMarkup = (params: CreateChartMarkupParams) => {
  const { rootEl, label, canvasId } = params;

  const canvas = document.createElement('canvas');
  canvas.classList.add('votes__canvas');
  canvas.id = canvasId;

  const canvasWrapper = document.createElement('div');
  canvasWrapper.classList.add('votes__canvas-wrapper');
  canvasWrapper.appendChild(canvas);

  const votes = document.createElement('div');
  votes.classList.add('votes');

  const header = document.createElement('h2');
  header.classList.add('votes__header');
  header.innerText = label;
  votes.appendChild(header);
  votes.appendChild(canvasWrapper);

  rootEl.appendChild(votes);
};

const runVotes = (rootEl: HTMLElement) => {
  gSheetsApi.getAll().then((responses) => {
    if (responses.length === 0) return;

    const questions = Object.keys(responses[0]);

    questions.forEach((quest, questIdx) => {
      const answers: {
        [key: string]: number;
      } = {};
      responses.forEach((resp) => {
        const ans = (resp as any)[quest];
        answers[ans] = ans in answers ? answers[ans] + 1 : 1;
      });

      const canvasId = `quest-${questIdx}`;
      createChartMarkup({ rootEl, label: quest, canvasId });
      votesChart.display(canvasId, {
        title: 'Votes',
        labels: Object.keys(answers),
        dataElements: Object.values(answers),
      });
    });
  });
};

export default runVotes;
