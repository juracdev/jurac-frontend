import {
  Chart,
  ChartConfiguration,
  PieController,
  ArcElement,
  LinearScale,
  Legend,
  Tooltip,
  Title,
  TooltipItem,
} from 'chart.js';
import './votes.css';

Chart.register(PieController, ArcElement, LinearScale, Legend, Tooltip, Title);

type ChartParams = {
  title: string;
  labels: string[];
  dataElements: number[];
};

const CHART_BG_COLORS = [
  'rgba(54, 162, 235, 0.2)',
  'rgba(255, 99, 132, 0.2)',
  'rgba(255, 206, 86, 0.2)',
  'rgba(75, 192, 192, 0.2)',
  'rgba(153, 102, 255, 0.2)',
  'rgba(255, 159, 64, 0.2)',
];

const CHART_BORDER_COLORS = [
  'rgba(54, 162, 235, 1)',
  'rgba(255, 99, 132, 1)',
  'rgba(255, 206, 86, 1)',
  'rgba(75, 192, 192, 1)',
  'rgba(153, 102, 255, 1)',
  'rgba(255, 159, 64, 1)',
];

const createChartConfig = (params: ChartParams): ChartConfiguration => {
  const data = {
    labels: params.labels,
    datasets: [
      {
        label: '# of Votes',
        data: params.dataElements,
        backgroundColor: CHART_BG_COLORS.slice(0, params.labels.length),
        borderColor: CHART_BORDER_COLORS.slice(0, params.labels.length),
        borderWidth: 1,
      },
    ],
  };

  return {
    type: 'pie',
    data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          text: params.title,
        },
        tooltip: {
          callbacks: {
            label: function (tooltipItem: TooltipItem<'line'>) {
              const { label, dataIndex, dataset } = tooltipItem;
              const data = dataset.data as number[];
              const totalValue = data.reduce((acc, curr) => acc + curr);
              const currentValue = data[dataIndex];
              const percentage = Math.round((100 * currentValue) / totalValue);

              return `${label}: ${currentValue} (${percentage}%)`;
            },
          },
        },
      },
    },
  };
};

const display = (canvasId: string, params: ChartParams) => {
  const ctx = (
    document.getElementById(canvasId) as HTMLCanvasElement
  ).getContext('2d');
  const config = createChartConfig(params);
  const myChart = new Chart(ctx, config);
};

export const votesChart = {
  display,
};
