/*const express = require('express');
const fs = require('fs');
const { ChartJSNodeCanvas } = require('chartjs-node-canvas');

const app = express();
const port = 5000;
const width = 1000;
const height = 1000;

const chartCallback = (ChartJS) => {
  console.log('chart built');
};

const chartJSNodeCanvas = new ChartJSNodeCanvas({ width, height, chartCallback });

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname });
});

app.get('/chart', async (req, res) => {
  const type = req.query.type;
  const color1=req.query.color1;
  const color2=req.query.color2;
  var data1 = JSON.parse(req.query.data1);
  var data2 = JSON.parse(req.query.data2);
 // var maindata = JSON.parse(req.query.maindata);
  console.log(data1);
  console.log(data2);
  if (type !== 'bar' && type !== 'line') {
    res.status(400).send('Invalid type parameter. Valid values are "bar" or "line".');
    return;
  }
  console.log(color1+","+color2);
  const configuration = {
    type: type,
    data: {
      labels: [2018, 2019, 2020, 2021],
      datasets: [{
        label: '2 Wheeler Sales (Million)',
        data: data1,
        backgroundColor: [color1],
        borderColor: ['rgb(51, 204, 204)'],
        borderWidth: 1,
        xAxisID: 'xAxis1'
      },
      {
        label: 'SUV Sales (Million)',
        data: data2,
        fill: false,
        backgroundColor: [color2],
        borderColor: ['rgb(51, 204, 204)'],
        borderWidth: 1,
        xAxisID: 'xAxis1'
      }]
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
});*/
/*const express = require('express');
const fs = require('fs');
const { ChartJSNodeCanvas } = require('chartjs-node-canvas');

const app = express();
const port = 5000;
const width = 1000;
const height = 1000;

const chartCallback = (ChartJS) => {
  console.log('chart built');
};

const chartJSNodeCanvas = new ChartJSNodeCanvas({ width, height, chartCallback });

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname });
});

app.get('/chart', async (req, res, next) => {
  try {
    const type = req.query.type;
    const color1 = req.query.color1;
    const color2 = req.query.color2;
    const data1 = JSON.parse(req.query.data1);
    const data2 = JSON.parse(req.query.data2);

    if (type !== 'bar' && type !== 'line') {
      throw new Error('Invalid type parameter. Valid values are "bar" or "line".');
    }

    const configuration = {
      type: type,
      data: {
        labels: [2018, 2019, 2020, 2021],
        datasets: [{
          label: '2 Wheeler Sales (Million)',
          data: data1,
          backgroundColor: [color1],
          borderColor: ['rgb(51, 204, 204)'],
          borderWidth: 1,
          xAxisID: 'xAxis1'
        },
        {
          label: 'SUV Sales (Million)',
          data: data2,
          fill: false,
          backgroundColor: [color2],
          borderColor: ['rgb(51, 204, 204)'],
          borderWidth: 1,
          xAxisID: 'xAxis1'
        }]
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
  } catch (error) {
    next(error);
  }
});

// Error middleware
app.use((error, req, res, next) => {
  console.error(error.stack);
  res.status(400).send(error.message);
});

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});
*/
/*const express = require('express');
const fs = require('fs');
const { ChartJSNodeCanvas } = require('chartjs-node-canvas');

const app = express();
const port = 5000;
const width = 1000;
const height = 1000;

const chartCallback = (ChartJS) => {
  console.log('chart built');
};

const chartJSNodeCanvas = new ChartJSNodeCanvas({ width, height, chartCallback });

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname });
});

app.get('/chart', async (req, res) => {
  const type = req.query.type;
  const labels = req.query.labels ? JSON.parse(req.query.labels) : [];
  const datasets = req.query.datasets ? JSON.parse(req.query.datasets) : [];

  if (type !== 'bar' && type !== 'line') {
    res.status(400).send('Invalid type parameter. Valid values are "bar" or "line".');
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

*/
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

