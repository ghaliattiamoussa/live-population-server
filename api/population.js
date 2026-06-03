export default function handler(req, res) {
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
    { name: "Canada", code: "CA", population: 38929302 }
  ];

  // إضافة تغيير عشوائي طفيف لجعل البيانات تبدو حية
  const updatedList = countriesList.map(c => ({
    ...c,
    population: Math.floor(c.population + (Math.random() - 0.5) * 500)
  }));

  // السماح بالوصول من أي مكان (CORS)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  
  // إرسال البيانات
  res.status(200).json(updatedList);
}