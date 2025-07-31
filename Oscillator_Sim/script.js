const canvas = document.getElementById("mainCanvas");
const ctx = canvas.getContext("2d");
const graphCanvas = document.getElementById("graphCanvas");
const graphCtx = graphCanvas.getContext("2d");
const speedRange = document.getElementById("speedRange");
const speedValue = document.getElementById("speedValue");

let selectedModel = "oscillator";
let m = 1, k = 1, x = 50, v = 0, t = 0;
let F0 = 50, omega = 1, k1 = 0.5, mu = 0.2;
let f1 = 1, f2 = 1.05, amplitude = 50;
let x0 = 50, v0 = 0;
let dt = 0.05;

let data = [];

function getParamsFromUI() {
  m = parseFloat(document.getElementById("mass").value);
  k = parseFloat(document.getElementById("springConst").value);
  x0 = parseFloat(document.getElementById("initialX").value);
  v0 = parseFloat(document.getElementById("initialV").value);
  F0 = parseFloat(document.getElementById("forceAmp").value);
  omega = parseFloat(document.getElementById("omega").value);
  k1 = parseFloat(document.getElementById("frictionCoeff").value);
  mu = parseFloat(document.getElementById("mu").value);
  muNonlinear = parseFloat(document.getElementById("muNonlinear").value);
  f1 = parseFloat(document.getElementById("f1").value);
  f2 = parseFloat(document.getElementById("f2").value);
  amplitude = parseFloat(document.getElementById("beatAmplitude").value);
}

function toggleControlPanels() {
  ["forcedControls", "frictionControls", "resistanceControls", "nonlinearControls", "beatControls"]
    .forEach(id => document.getElementById(id).style.display = "none");

  if (selectedModel === "forced") document.getElementById("forcedControls").style.display = "block";
  if (selectedModel === "friction") document.getElementById("frictionControls").style.display = "block";
  if (selectedModel === "resistance") document.getElementById("resistanceControls").style.display = "block";
  if (selectedModel === "nonlinear") document.getElementById("nonlinearControls").style.display = "block";
  if (selectedModel === "beat") document.getElementById("beatControls").style.display = "block";
}

speedRange.addEventListener("input", () => {
  dt = parseFloat(speedRange.value);
  speedValue.textContent = dt.toFixed(2);
});

document.getElementById("modelSelect").addEventListener("change", e => {
  selectedModel = e.target.value;
  toggleControlPanels();
  reset();
});

function reset() {
  getParamsFromUI();
  x = x0;
  v = v0;
  t = 0;
  data = [];
}

function resetSimulation() {
  reset();
}

function drawAxis() {
  const axisY = canvas.height / 2 + 10; // трохи нижче кульки
  ctx.beginPath();
  ctx.moveTo(0, axisY);
  ctx.lineTo(canvas.width, axisY);
  ctx.strokeStyle = "#000"; // чорна лінія
  ctx.lineWidth = 2;
  ctx.stroke();
}

function drawBall(posX) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawAxis(); // малюємо "стіл" перед кулькою

  ctx.beginPath();
  ctx.arc(300 + posX, canvas.height / 2, 10, 0, Math.PI * 2);
  ctx.fillStyle = "blue";
  ctx.fill();
}

function drawGraph() {
  graphCtx.clearRect(0, 0, graphCanvas.width, graphCanvas.height);

  const len = data.length;
  const maxAmp = Math.max(...data.map(Math.abs), 1);
  const scaleY = (graphCanvas.height / 2 - 10) / maxAmp;
  const scaleX = graphCanvas.width / len;


  const gridColor = "#eee";
  graphCtx.strokeStyle = gridColor;
  graphCtx.lineWidth = 1;

  const numYLines = 8;
  for (let i = 0; i <= numYLines; i++) {
    let y = (graphCanvas.height / numYLines) * i;
    graphCtx.beginPath();
    graphCtx.moveTo(0, y);
    graphCtx.lineTo(graphCanvas.width, y);
    graphCtx.stroke();
  }

  const numXLines = 10;
  for (let i = 0; i <= numXLines; i++) {
    let x = (graphCanvas.width / numXLines) * i;
    graphCtx.beginPath();
    graphCtx.moveTo(x, 0);
    graphCtx.lineTo(x, graphCanvas.height);
    graphCtx.stroke();
  }


  graphCtx.beginPath();
  graphCtx.moveTo(0, graphCanvas.height / 2 - data[0] * scaleY);
  for (let i = 1; i < len; i++) {
    const xCoord = i * scaleX;
    const yCoord = graphCanvas.height / 2 - data[i] * scaleY;
    graphCtx.lineTo(xCoord, yCoord);
  }
  graphCtx.strokeStyle = "red";
  graphCtx.lineWidth = 2;
  graphCtx.stroke();

  graphCtx.beginPath();
  graphCtx.moveTo(0, graphCanvas.height / 2);
  graphCtx.lineTo(graphCanvas.width, graphCanvas.height / 2);
  graphCtx.strokeStyle = "#aaa";
  graphCtx.lineWidth = 1;
  graphCtx.stroke();
}




function animate() {
  getParamsFromUI();
  let a = 0;

  switch (selectedModel) {
    case "oscillator":
      a = -k * x / m;
      break;
    case "forced":
      a = (-k * x + F0 * Math.cos(omega * t)) / m;
      break;
    case "friction":
      let sign = v > 0 ? 1 : -1;
      a = (-k * x - k1 * sign) / m;
      break;
    case "resistance":
      a = (-k * x - mu * v) / m;
      break;
    case "nonlinear":
      a = (-k * x - mu * v * Math.abs(v)) / m;
      break;
    case "beat":
      x = amplitude * Math.sin(f1 * t) + amplitude * Math.sin(f2 * t);
      a = 0;
      break;
  }

  if (selectedModel !== "beat") {
    v += a * dt;
    x += v * dt;
  }

  drawBall(x);
  data.push(x);
  if (data.length > graphCanvas.width) data.shift();
  drawGraph();
  t += dt;
  requestAnimationFrame(animate);
}

function saveGraph() {
  const link = document.createElement('a');
  link.download = `graph_${new Date().toISOString().slice(0,19).replace(/[:T]/g, '-')}.png`;
  link.href = graphCanvas.toDataURL('image/png');
  link.click();
}


toggleControlPanels();
reset();
animate();
