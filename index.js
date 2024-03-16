
const express = require('express');
const fs = require('fs');
const { ChartJSNodeCanvas } = require('chartjs-node-canvas');

const app = express();
const port = 5000;
const width = 500;
const height = 500;

const chartCallback = (ChartJS) => {
  console.log('chart built');
};

const chartJSNodeCanvas = new ChartJSNodeCanvas({ width, height, chartCallback });

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname });
});

app.get('/chart', async (req, res) => {
  const type = req.query.type;
  const labelsString = req.query.labels || '[]';
  const datasetsString = req.query.datasets || '[]';

  let labels;
  let datasets;

  try {
    labels = JSON.parse(labelsString);
  } catch (error) {
    res.status(400).send('Invalid labels parameter. Please provide a valid JSON array.');
    return;
  }

  try {
    datasets = JSON.parse(datasetsString);
  } catch (error) {
    res.status(400).send('Invalid datasets parameter. Please provide a valid JSON array.');
    return;
  }

  if (type !== 'bar' && type !== 'line' && type !== 'pie' && type !== 'doughnut' && type !== 'polarArea') {
    res.status(400).send('Invalid type parameter. Valid values are "bar", "line", "pie", "doughnut", or "polarArea".');
    return;
  }

  const configuration = {
    type: type,
    data: {
      labels: labels,
      datasets: datasets
    },
    options: {
      scales: {
        y: {
          suggestedMin: 0
        }
      }
    }
  };

  const dataUrl = await chartJSNodeCanvas.renderToDataURL(configuration);
  const base64Image = dataUrl.replace(/^data:image\/png;base64,/, '');
  const imageBuffer = Buffer.from(base64Image, 'base64');

  res.writeHead(200, {
    'Content-Type': 'image/png',
    'Content-Length': imageBuffer.length
  });

  res.end(imageBuffer);
});

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});

