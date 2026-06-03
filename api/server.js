const express = require('express');

const app = express();

const countriesList = [
  { name: "India", code: "IN", population: 1428627663 },
  { name: "China", code: "CN", population: 1425671352 },
  { name: "USA", code: "US", population: 341963426 },
  { name: "Indonesia", code: "ID", population: 279798049 },
  { name: "Pakistan", code: "PK", population: 245209815 },
  { name: "Nigeria", code: "NG", population: 229152217 },
  { name: "Brazil", code: "BR", population: 217240060 },
  { name: "Bangladesh", code: "BD", population: 174701211 },
  { name: "Russia", code: "RU", population: 144444359 },
  { name: "Mexico", code: "MX", population: 130861007 },
  { name: "Japan", code: "JP", population: 122631432 },
  { name: "Egypt", code: "EG", population: 114535772 },
  { name: "Philippines", code: "PH", population: 113965821 },
  { name: "Vietnam", code: "VN", population: 100352502 },
  { name: "Germany", code: "DE", population: 83835657 },
  { name: "Turkey", code: "TR", population: 86191978 },
  { name: "Iran", code: "IR", population: 89342762 },
  { name: "Thailand", code: "TH", population: 71922677 },
  { name: "UK", code: "GB", population: 67961217 },
  { name: "France", code: "FR", population: 65612794 },
  { name: "Italy", code: "IT", population: 58870762 },
  { name: "South Africa", code: "ZA", population: 60414495 },
  { name: "Tanzania", code: "TZ", population: 65497748 },
  { name: "Kenya", code: "KE", population: 56000000 },
  { name: "South Korea", code: "KR", population: 51709098 },
  { name: "Colombia", code: "CO", population: 52085168 },
  { name: "Spain", code: "ES", population: 47558630 },
  { name: "Argentina", code: "AR", population: 46234830 },
  { name: "Algeria", code: "DZ", population: 45606480 },
  { name: "Canada", code: "CA", population: 38929302 },
  { name: "Iraq", code: "IQ", population: 42200000 },
  { name: "Afghanistan", code: "AF", population: 41128771 },
  { name: "Poland", code: "PL", population: 39857145 },
  { name: "Morocco", code: "MA", population: 37800000 },
  { name: "Saudi Arabia", code: "SA", population: 36408820 },
  { name: "Peru", code: "PE", population: 34500000 },
  { name: "Malaysia", code: "MY", population: 34000000 },
  { name: "Angola", code: "AO", population: 34500000 },
  { name: "Mozambique", code: "MZ", population: 33000000 },
  { name: "Ghana", code: "GH", population: 32800000 },
  { name: "Yemen", code: "YE", population: 31000000 },
  { name: "Nepal", code: "NP", population: 30000000 },
  { name: "Australia", code: "AU", population: 26400000 },
  { name: "Syria", code: "SY", population: 22000000 },
  { name: "Sri Lanka", code: "LK", population: 21800000 },
  { name: "Chad", code: "TD", population: 18000000 },
  { name: "Somalia", code: "SO", population: 17000000 },
  { name: "Senegal", code: "SN", population: 17000000 },
  { name: "Tunisia", code: "TN", population: 12000000 },
  { name: "Bolivia", code: "BO", population: 12000000 }
];

// إضافة نمو عشوائي بسيط
let populations = {};
countriesList.forEach(c => {
  populations[c.code] = c.population;
});

// تحديث عشوائي كل ثانية (للمحاكاة)
setInterval(() => {
  countriesList.forEach(c => {
    let change = (Math.random() - 0.45) * 100;
    populations[c.code] = Math.max(1000, populations[c.code] + change);
  });
}, 1000);

app.get('/api/populations', (req, res) => {
  const result = countriesList.map(c => ({
    name: c.name,
    code: c.code,
    population: Math.floor(populations[c.code])
  }));
  res.json(result);
});

module.exports = app;