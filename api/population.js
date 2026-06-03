// جميع دول العالم مع أعداد سكانية دقيقة 2025
const countriesData = [
  // آسيا (4.8 مليار)
  { name: "India", code: "IN", population: 1450000000, growthRate: 0.009 },
  { name: "China", code: "CN", population: 1419000000, growthRate: -0.002 },
  { name: "Indonesia", code: "ID", population: 279800000, growthRate: 0.007 },
  { name: "Pakistan", code: "PK", population: 245200000, growthRate: 0.019 },
  { name: "Bangladesh", code: "BD", population: 174700000, growthRate: 0.009 },
  { name: "Japan", code: "JP", population: 122600000, growthRate: -0.005 },
  { name: "Philippines", code: "PH", population: 113900000, growthRate: 0.014 },
  { name: "Vietnam", code: "VN", population: 100300000, growthRate: 0.007 },
  { name: "Thailand", code: "TH", population: 71920000, growthRate: 0.001 },
  { name: "Myanmar", code: "MM", population: 54410000, growthRate: 0.006 },
  { name: "South Korea", code: "KR", population: 51700000, growthRate: -0.001 },
  { name: "Iraq", code: "IQ", population: 45000000, growthRate: 0.019 },
  { name: "Afghanistan", code: "AF", population: 41128000, growthRate: 0.023 },
  { name: "Nepal", code: "NP", population: 30000000, growthRate: 0.006 },
  { name: "Yemen", code: "YE", population: 31000000, growthRate: 0.020 },
  { name: "North Korea", code: "KP", population: 26160000, growthRate: 0.004 },
  { name: "Taiwan", code: "TW", population: 23890000, growthRate: 0.001 },
  { name: "Sri Lanka", code: "LK", population: 21800000, growthRate: 0.002 },
  { name: "Syria", code: "SY", population: 22000000, growthRate: 0.005 },
  { name: "Kazakhstan", code: "KZ", population: 19600000, growthRate: 0.011 },
  { name: "Cambodia", code: "KH", population: 16710000, growthRate: 0.011 },
  { name: "Jordan", code: "JO", population: 11200000, growthRate: 0.014 },
  { name: "Azerbaijan", code: "AZ", population: 10300000, growthRate: 0.009 },
  { name: "Tajikistan", code: "TJ", population: 10000000, growthRate: 0.021 },
  { name: "Israel", code: "IL", population: 9200000, growthRate: 0.015 },
  { name: "Laos", code: "LA", population: 7600000, growthRate: 0.013 },
  { name: "Kyrgyzstan", code: "KG", population: 6700000, growthRate: 0.017 },
  { name: "Turkmenistan", code: "TM", population: 6500000, growthRate: 0.014 },
  { name: "Singapore", code: "SG", population: 5600000, growthRate: 0.007 },
  { name: "Mongolia", code: "MN", population: 3400000, growthRate: 0.015 },
  { name: "Lebanon", code: "LB", population: 5500000, growthRate: -0.025 },
  { name: "Palestine", code: "PS", population: 5300000, growthRate: 0.022 },
  { name: "Oman", code: "OM", population: 5000000, growthRate: 0.018 },
  { name: "Kuwait", code: "KW", population: 4800000, growthRate: 0.012 },
  { name: "Georgia", code: "GE", population: 3700000, growthRate: -0.005 },
  { name: "Armenia", code: "AM", population: 2900000, growthRate: -0.002 },
  { name: "Qatar", code: "QA", population: 2900000, growthRate: 0.013 },
  { name: "Bahrain", code: "BH", population: 1500000, growthRate: 0.020 },
  { name: "Timor-Leste", code: "TL", population: 1400000, growthRate: 0.016 },
  { name: "Cyprus", code: "CY", population: 1300000, growthRate: 0.007 },
  { name: "Bhutan", code: "BT", population: 780000, growthRate: 0.006 },
  { name: "Maldives", code: "MV", population: 560000, growthRate: 0.008 },
  { name: "Brunei", code: "BN", population: 450000, growthRate: 0.010 },
  
  // أفريقيا (1.4 مليار)
  { name: "Nigeria", code: "NG", population: 229200000, growthRate: 0.023 },
  { name: "Ethiopia", code: "ET", population: 129000000, growthRate: 0.025 },
  { name: "Egypt", code: "EG", population: 114500000, growthRate: 0.014 },
  { name: "DR Congo", code: "CD", population: 108000000, growthRate: 0.030 },
  { name: "Tanzania", code: "TZ", population: 65490000, growthRate: 0.029 },
  { name: "South Africa", code: "ZA", population: 60410000, growthRate: 0.010 },
  { name: "Kenya", code: "KE", population: 56000000, growthRate: 0.022 },
  { name: "Uganda", code: "UG", population: 50000000, growthRate: 0.032 },
  { name: "Sudan", code: "SD", population: 48000000, growthRate: 0.024 },
  { name: "Algeria", code: "DZ", population: 45600000, growthRate: 0.014 },
  { name: "Morocco", code: "MA", population: 37800000, growthRate: 0.010 },
  { name: "Angola", code: "AO", population: 34500000, growthRate: 0.028 },
  { name: "Mozambique", code: "MZ", population: 33000000, growthRate: 0.026 },
  { name: "Ghana", code: "GH", population: 32800000, growthRate: 0.019 },
  { name: "Madagascar", code: "MG", population: 30000000, growthRate: 0.027 },
  { name: "Cameroon", code: "CM", population: 27500000, growthRate: 0.025 },
  { name: "Ivory Coast", code: "CI", population: 27000000, growthRate: 0.024 },
  { name: "Niger", code: "NE", population: 26000000, growthRate: 0.033 },
  { name: "Burkina Faso", code: "BF", population: 23000000, growthRate: 0.028 },
  { name: "Mali", code: "ML", population: 22000000, growthRate: 0.030 },
  { name: "Malawi", code: "MW", population: 21000000, growthRate: 0.026 },
  { name: "Zambia", code: "ZM", population: 20000000, growthRate: 0.029 },
  { name: "Chad", code: "TD", population: 18000000, growthRate: 0.025 },
  { name: "Somalia", code: "SO", population: 17000000, growthRate: 0.027 },
  { name: "Senegal", code: "SN", population: 17000000, growthRate: 0.024 },
  { name: "Zimbabwe", code: "ZW", population: 16000000, growthRate: 0.021 },
  { name: "Guinea", code: "GN", population: 14000000, growthRate: 0.023 },
  { name: "Rwanda", code: "RW", population: 14000000, growthRate: 0.022 },
  { name: "Benin", code: "BJ", population: 13000000, growthRate: 0.027 },
  { name: "Burundi", code: "BI", population: 12000000, growthRate: 0.025 },
  { name: "Tunisia", code: "TN", population: 12000000, growthRate: 0.008 },
  { name: "South Sudan", code: "SS", population: 12000000, growthRate: 0.024 },
  { name: "Togo", code: "TG", population: 9000000, growthRate: 0.024 },
  { name: "Libya", code: "LY", population: 7000000, growthRate: 0.011 },
  { name: "Sierra Leone", code: "SL", population: 8000000, growthRate: 0.022 },
  { name: "Congo", code: "CG", population: 6000000, growthRate: 0.020 },
  { name: "Liberia", code: "LR", population: 5000000, growthRate: 0.025 },
  { name: "Mauritania", code: "MR", population: 5000000, growthRate: 0.022 },
  { name: "Eritrea", code: "ER", population: 4000000, growthRate: 0.020 },
  { name: "Namibia", code: "NA", population: 3000000, growthRate: 0.018 },
  { name: "Gambia", code: "GM", population: 2700000, growthRate: 0.025 },
  { name: "Botswana", code: "BW", population: 2600000, growthRate: 0.016 },
  { name: "Gabon", code: "GA", population: 2400000, growthRate: 0.019 },
  { name: "Lesotho", code: "LS", population: 2300000, growthRate: 0.008 },
  { name: "Guinea-Bissau", code: "GW", population: 2100000, growthRate: 0.024 },
  { name: "Equatorial Guinea", code: "GQ", population: 1500000, growthRate: 0.031 },
  { name: "Mauritius", code: "MU", population: 1300000, growthRate: 0.001 },
  { name: "Eswatini", code: "SZ", population: 1200000, growthRate: 0.012 },
  { name: "Djibouti", code: "DJ", population: 1100000, growthRate: 0.015 },
  { name: "Comoros", code: "KM", population: 900000, growthRate: 0.020 },
  { name: "Cape Verde", code: "CV", population: 600000, growthRate: 0.012 },
  { name: "Sao Tome", code: "ST", population: 230000, growthRate: 0.020 },
  { name: "Seychelles", code: "SC", population: 100000, growthRate: 0.007 },
  
  // أوروبا (750 مليون)
  { name: "Russia", code: "RU", population: 144400000, growthRate: -0.002 },
  { name: "Germany", code: "DE", population: 83800000, growthRate: -0.001 },
  { name: "UK", code: "GB", population: 67960000, growthRate: 0.005 },
  { name: "France", code: "FR", population: 65610000, growthRate: 0.002 },
  { name: "Italy", code: "IT", population: 58870000, growthRate: -0.001 },
  { name: "Spain", code: "ES", population: 47550000, growthRate: 0.001 },
  { name: "Poland", code: "PL", population: 39857000, growthRate: -0.003 },
  { name: "Ukraine", code: "UA", population: 37000000, growthRate: -0.010 },
  { name: "Romania", code: "RO", population: 19800000, growthRate: -0.006 },
  { name: "Netherlands", code: "NL", population: 17700000, growthRate: 0.003 },
  { name: "Belgium", code: "BE", population: 11600000, growthRate: 0.003 },
  { name: "Czechia", code: "CZ", population: 10700000, growthRate: 0.001 },
  { name: "Greece", code: "GR", population: 10400000, growthRate: -0.005 },
  { name: "Portugal", code: "PT", population: 10300000, growthRate: -0.002 },
  { name: "Sweden", code: "SE", population: 10500000, growthRate: 0.006 },
  { name: "Hungary", code: "HU", population: 9700000, growthRate: -0.003 },
  { name: "Belarus", code: "BY", population: 9300000, growthRate: -0.004 },
  { name: "Austria", code: "AT", population: 9100000, growthRate: 0.003 },
  { name: "Switzerland", code: "CH", population: 8800000, growthRate: 0.004 },
  { name: "Bulgaria", code: "BG", population: 6700000, growthRate: -0.007 },
  { name: "Denmark", code: "DK", population: 5900000, growthRate: 0.004 },
  { name: "Finland", code: "FI", population: 5500000, growthRate: 0.002 },
  { name: "Slovakia", code: "SK", population: 5400000, growthRate: -0.002 },
  { name: "Norway", code: "NO", population: 5500000, growthRate: 0.007 },
  { name: "Ireland", code: "IE", population: 5100000, growthRate: 0.009 },
  { name: "Croatia", code: "HR", population: 4000000, growthRate: -0.005 },
  { name: "Moldova", code: "MD", population: 3400000, growthRate: -0.008 },
  { name: "Bosnia", code: "BA", population: 3200000, growthRate: -0.007 },
  { name: "Albania", code: "AL", population: 2800000, growthRate: -0.003 },
  { name: "Lithuania", code: "LT", population: 2800000, growthRate: -0.008 },
  { name: "Slovenia", code: "SI", population: 2100000, growthRate: 0.001 },
  { name: "Latvia", code: "LV", population: 1900000, growthRate: -0.009 },
  { name: "Estonia", code: "EE", population: 1400000, growthRate: -0.005 },
  { name: "Cyprus", code: "CY", population: 1300000, growthRate: 0.007 },
  { name: "Luxembourg", code: "LU", population: 660000, growthRate: 0.014 },
  { name: "Malta", code: "MT", population: 540000, growthRate: 0.008 },
  { name: "Iceland", code: "IS", population: 380000, growthRate: 0.011 },
  
  // الأمريكتين (1 مليار)
  { name: "USA", code: "US", population: 341900000, growthRate: 0.005 },
  { name: "Brazil", code: "BR", population: 217200000, growthRate: 0.004 },
  { name: "Mexico", code: "MX", population: 130800000, growthRate: 0.006 },
  { name: "Colombia", code: "CO", population: 52080000, growthRate: 0.004 },
  { name: "Argentina", code: "AR", population: 46230000, growthRate: 0.006 },
  { name: "Canada", code: "CA", population: 38920000, growthRate: 0.009 },
  { name: "Peru", code: "PE", population: 34500000, growthRate: 0.005 },
  { name: "Venezuela", code: "VE", population: 28200000, growthRate: -0.012 },
  { name: "Chile", code: "CL", population: 19600000, growthRate: 0.003 },
  { name: "Ecuador", code: "EC", population: 18000000, growthRate: 0.010 },
  { name: "Guatemala", code: "GT", population: 18000000, growthRate: 0.014 },
  { name: "Bolivia", code: "BO", population: 12000000, growthRate: 0.012 },
  { name: "Haiti", code: "HT", population: 11500000, growthRate: 0.012 },
  { name: "Dominican Rep", code: "DO", population: 11200000, growthRate: 0.009 },
  { name: "Cuba", code: "CU", population: 11200000, growthRate: -0.003 },
  { name: "Honduras", code: "HN", population: 10000000, growthRate: 0.014 },
  { name: "Paraguay", code: "PY", population: 7000000, growthRate: 0.012 },
  { name: "Nicaragua", code: "NI", population: 7000000, growthRate: 0.012 },
  { name: "El Salvador", code: "SV", population: 6500000, growthRate: 0.005 },
  { name: "Costa Rica", code: "CR", population: 5200000, growthRate: 0.007 },
  { name: "Panama", code: "PA", population: 4400000, growthRate: 0.009 },
  { name: "Uruguay", code: "UY", population: 3400000, growthRate: 0.001 },
  { name: "Jamaica", code: "JM", population: 2800000, growthRate: -0.001 },
  { name: "Trinidad", code: "TT", population: 1500000, growthRate: 0.004 },
  { name: "Guyana", code: "GY", population: 810000, growthRate: 0.005 },
  { name: "Suriname", code: "SR", population: 620000, growthRate: 0.009 },
  { name: "Belize", code: "BZ", population: 410000, growthRate: 0.012 },
  { name: "Bahamas", code: "BS", population: 400000, growthRate: 0.006 },
  { name: "Barbados", code: "BB", population: 280000, growthRate: 0.002 },
  
  // أوقيانوسيا (45 مليون)
  { name: "Australia", code: "AU", population: 26400000, growthRate: 0.010 },
  { name: "Papua New Guinea", code: "PG", population: 10000000, growthRate: 0.020 },
  { name: "New Zealand", code: "NZ", population: 5200000, growthRate: 0.008 },
  { name: "Fiji", code: "FJ", population: 930000, growthRate: 0.006 },
  { name: "Solomon Islands", code: "SB", population: 720000, growthRate: 0.024 },
  { name: "Vanuatu", code: "VU", population: 330000, growthRate: 0.023 },
  { name: "Samoa", code: "WS", population: 220000, growthRate: 0.017 },
  { name: "Kiribati", code: "KI", population: 130000, growthRate: 0.016 },
  { name: "Micronesia", code: "FM", population: 115000, growthRate: 0.011 },
  { name: "Tonga", code: "TO", population: 106000, growthRate: 0.008 },
  { name: "Marshall Islands", code: "MH", population: 42000, growthRate: 0.010 },
  { name: "Palau", code: "PW", population: 18000, growthRate: 0.007 },
  { name: "Nauru", code: "NR", population: 12000, growthRate: 0.009 },
  { name: "Tuvalu", code: "TV", population: 11000, growthRate: 0.008 }
];

// تهيئة الأعداد الحية
let livePopulations = {};
countriesData.forEach(c => { livePopulations[c.code] = c.population; });
let lastUpdate = Date.now();

function updatePopulations() {
  const now = Date.now();
  const secondsPassed = Math.min((now - lastUpdate) / 1000, 5);
  lastUpdate = now;
  
  countriesData.forEach(c => {
    let current = livePopulations[c.code];
    let yearlyChange = current * c.growthRate;
    let perSecondChange = yearlyChange / 31536000;
    let delta = perSecondChange * secondsPassed;
    let randomFactor = 1 + (Math.random() - 0.5) * 0.002;
    delta = delta * randomFactor;
    let newPop = current + delta;
    if (newPop < 1000) newPop = 1000;
    livePopulations[c.code] = Math.floor(newPop);
  });
}

setInterval(() => { updatePopulations(); }, 1000);

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  
  const result = countriesData.map(c => ({
    name: c.name, code: c.code, population: livePopulations[c.code]
  }));
  
  res.status(200).json(result);
}