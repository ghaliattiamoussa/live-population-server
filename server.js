const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const path = require('path');

const app = express();
const httpServer = createServer(app);

// CORS للتطبيق بعد النشر
const io = new Server(httpServer, {
  cors: {
    origin: process.env.CLIENT_URL || "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

app.use(cors());
app.use(express.json());

// قائمة الدول (نفسها كما كانت)
const countriesList = [
  { name: "India", code: "IN", basePop: 1428627663, growth: 0.0081 },
  { name: "China", code: "CN", basePop: 1425671352, growth: -0.0002 },
  { name: "USA", code: "US", basePop: 341963426, growth: 0.0057 },
  { name: "Indonesia", code: "ID", basePop: 279798049, growth: 0.0070 },
  { name: "Pakistan", code: "PK", basePop: 245209815, growth: 0.0190 },
  { name: "Nigeria", code: "NG", basePop: 229152217, growth: 0.0230 },
  { name: "Brazil", code: "BR", basePop: 217240060, growth: 0.0045 },
  { name: "Bangladesh", code: "BD", basePop: 174701211, growth: 0.0098 },
  { name: "Russia", code: "RU", basePop: 144444359, growth: -0.0025 },
  { name: "Mexico", code: "MX", basePop: 130861007, growth: 0.0065 },
  { name: "Japan", code: "JP", basePop: 122631432, growth: -0.0053 },
  { name: "Egypt", code: "EG", basePop: 114535772, growth: 0.0145 },
  { name: "Philippines", code: "PH", basePop: 113965821, growth: 0.0140 },
  { name: "Vietnam", code: "VN", basePop: 100352502, growth: 0.0071 },
  { name: "Germany", code: "DE", basePop: 83835657, growth: -0.0009 },
  { name: "Turkey", code: "TR", basePop: 86191978, growth: 0.0057 },
  { name: "Iran", code: "IR", basePop: 89342762, growth: 0.0063 },
  { name: "Thailand", code: "TH", basePop: 71922677, growth: 0.0011 },
  { name: "UK", code: "GB", basePop: 67961217, growth: 0.0053 },
  { name: "France", code: "FR", basePop: 65612794, growth: 0.0022 },
  { name: "Italy", code: "IT", basePop: 58870762, growth: -0.0015 },
  { name: "South Africa", code: "ZA", basePop: 60414495, growth: 0.0100 },
  { name: "Tanzania", code: "TZ", basePop: 65497748, growth: 0.0290 },
  { name: "Kenya", code: "KE", basePop: 56000000, growth: 0.0220 },
  { name: "South Korea", code: "KR", basePop: 51709098, growth: -0.0006 },
  { name: "Colombia", code: "CO", basePop: 52085168, growth: 0.0040 },
  { name: "Spain", code: "ES", basePop: 47558630, growth: 0.0005 },
  { name: "Argentina", code: "AR", basePop: 46234830, growth: 0.0060 },
  { name: "Algeria", code: "DZ", basePop: 45606480, growth: 0.0140 },
  { name: "Canada", code: "CA", basePop: 38929302, growth: 0.0090 },
  { name: "Iraq", code: "IQ", basePop: 42200000, growth: 0.0190 },
  { name: "Afghanistan", code: "AF", basePop: 41128771, growth: 0.0230 },
  { name: "Poland", code: "PL", basePop: 39857145, growth: -0.0030 },
  { name: "Morocco", code: "MA", basePop: 37800000, growth: 0.0100 },
  { name: "Saudi Arabia", code: "SA", basePop: 36408820, growth: 0.0150 },
  { name: "Peru", code: "PE", basePop: 34500000, growth: 0.0050 },
  { name: "Malaysia", code: "MY", basePop: 34000000, growth: 0.0110 },
  { name: "Angola", code: "AO", basePop: 34500000, growth: 0.0280 },
  { name: "Mozambique", code: "MZ", basePop: 33000000, growth: 0.0260 },
  { name: "Ghana", code: "GH", basePop: 32800000, growth: 0.0190 },
  { name: "Yemen", code: "YE", basePop: 31000000, growth: 0.0200 },
  { name: "Nepal", code: "NP", basePop: 30000000, growth: 0.0060 },
  { name: "Australia", code: "AU", basePop: 26400000, growth: 0.0100 },
  { name: "Syria", code: "SY", basePop: 22000000, growth: 0.0050 },
  { name: "Sri Lanka", code: "LK", basePop: 21800000, growth: 0.0020 },
  { name: "Chad", code: "TD", basePop: 18000000, growth: 0.0250 },
  { name: "Somalia", code: "SO", basePop: 17000000, growth: 0.0270 },
  { name: "Senegal", code: "SN", basePop: 17000000, growth: 0.0240 },
  { name: "Tunisia", code: "TN", basePop: 12000000, growth: 0.0080 },
  { name: "Bolivia", code: "BO", basePop: 12000000, growth: 0.0120 }
];

let currentPopulations = {};
countriesList.forEach(c => {
  let offset = c.basePop * (Math.random() - 0.5) * 0.001;
  currentPopulations[c.name] = c.basePop + offset;
});

function updatePopulations() {
  const secondsPerYear = 31536000;
  countriesList.forEach(c => {
    let pop = currentPopulations[c.name];
    let delta = pop * (c.growth / secondsPerYear);
    let randomFactor = 1 + (Math.random() - 0.5) * 0.00001;
    delta = delta * randomFactor;
    let newPop = pop + delta;
    if (newPop < 0) newPop = 0;
    currentPopulations[c.name] = newPop;
  });
}

setInterval(() => {
  updatePopulations();
  const dataToSend = countriesList.map(c => ({
    name: c.name,
    code: c.code,
    population: Math.floor(currentPopulations[c.name])
  }));
  io.emit('populationUpdate', dataToSend);
}, 1000);

io.on('connection', (socket) => {
  console.log('Client connected');
  const initialData = countriesList.map(c => ({
    name: c.name,
    code: c.code,
    population: Math.floor(currentPopulations[c.name])
  }));
  socket.emit('populationUpdate', initialData);
  socket.on('disconnect', () => console.log('Client disconnected'));
});

// للخدمة على Render
app.get('/', (req, res) => {
  res.send('Live Population Server is Running!');
});

const PORT = process.env.PORT || 5000;
httpServer.listen(PORT, () => console.log(`Server running on port ${PORT}`));