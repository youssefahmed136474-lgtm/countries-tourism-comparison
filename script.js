<!DOCTYPE html>
<html lang="ar">
<head>
<meta charset="UTF-8">
<title>مقارنة بين دولتين</title>
<style>
  body{
    font-family: Arial, sans-serif;
    text-align: center;
    background: linear-gradient(to right,#4facfe,#00f2fe);
    margin:0;
    padding:50px 20px;
  }

  h1{
    color:white;
    font-size:36px;
    margin-bottom:40px;
  }

  label{
    display:block;
    color:white;
    font-size:18px;
    margin-bottom:8px;
  }

  select{
    padding:10px;
    font-size:16px;
    border-radius:8px;
    border:none;
    min-width:180px;
    margin-bottom:20px;
  }

  button{
    padding:12px 25px;
    font-size:18px;
    background:#ff6b6b;
    color:white;
    border:none;
    border-radius:8px;
    cursor:pointer;
    transition:0.3s;
  }

  button:hover{
    background:#ff3b3b;
  }

  #result{
    margin-top:40px;
    display:flex;
    justify-content:center;
    gap:30px;
    flex-wrap:wrap;
  }

  .country-card{
    background:white;
    border-radius:15px;
    box-shadow:0 10px 25px rgba(0,0,0,0.2);
    padding:20px;
    min-width:280px;
    transition:0.3s;
  }

  .country-card:hover{
    transform: scale(1.05);
  }

  .country-card .flag{
    font-size:60px;
    text-align:center;
    margin-bottom:15px;
  }

  .country-card h2{
    color:#0077cc;
    font-size:26px;
    margin:10px 0;
  }

  .country-card p{
    font-size:16px;
    margin:6px 0;
  }
</style>
</head>
<body>

<h1>مقارنة بين دولتين</h1>

<!-- الدولة الأولى -->
<label>الدولة الأولى:</label>
<select id="country1">
  <option value="">-- اختر دولة --</option>
</select>

<!-- الدولة الثانية -->
<label>الدولة الثانية:</label>
<select id="country2">
  <option value="">-- اختر دولة --</option>
</select>

<br>

<!-- زرار القارن -->
<button onclick="compareCountries()">قارن</button>

<div id="result">
  <!-- هنا ستظهر نتائج المقارنة -->
</div>

<script>
  // بيانات الدول
  const countries = {
    egypt: { name: "مصر", flag:"🇪🇬", capital: "القاهرة", population: "110 مليون", currency: "الجنيه المصري" },
    france: { name: "فرنسا", flag:"🇫🇷", capital: "باريس", population: "67 مليون", currency: "اليورو" },
    japan: { name: "اليابان", flag:"🇯🇵", capital: "طوكيو", population: "125 مليون", currency: "الين الياباني" },
    saudi: { name: "السعودية", flag:"🇸🇦", capital: "الرياض", population: "36 مليون", currency: "الريال السعودي" },
    germany: { name: "ألمانيا", flag:"🇩🇪", capital: "برلين", population: "83 مليون", currency: "اليورو" }
  };

  // تعبئة القوائم تلقائيًا
  const select1 = document.getElementById("country1");
  const select2 = document.getElementById("country2");

  for(let key in countries){
    let option1 = document.createElement("option");
    option1.value = key;
    option1.text = countries[key].name;
    select1.add(option1);

    let option2 = document.createElement("option");
    option2.value = key;
    option2.text = countries[key].name;
    select2.add(option2);
  }

  // دالة المقارنة
  function compareCountries(){
    const c1 = select1.value;
    const c2 = select2.value;

    if(c1 === "" || c2 === ""){
      alert("اختر دولتين أولاً");
      return;
    }

    if(c1 === c2){
      alert("اختر دولتين مختلفتين");
      return;
    }

    const country1 = countries[c1];
    const country2 = countries[c2];

    // عرض النتائج في كروت
    document.getElementById("result").innerHTML = `
      <div class="country-card">
        <div class="flag">${country1.flag}</div>
        <h2>${country1.name}</h2>
        <p>العاصمة: ${country1.capital}</p>
        <p>عدد السكان: ${country1.population}</p>
        <p>العملة: ${country1.currency}</p>
      </div>
      <div class="country-card">
        <div class="flag">${country2.flag}</div>
        <h2>${country2.name}</h2>
        <p>العاصمة: ${country2.capital}</p>
        <p>عدد السكان: ${country2.population}</p>
        <p>العملة: ${country2.currency}</p>
      </div>
    `;
  }
</script>

</body>
</html>
