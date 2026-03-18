// بيانات الدول
const countries = {
  egypt: { name:"مصر", flag:"🇪🇬", capital:"القاهرة", population:"110 مليون", currency:"الجنيه المصري" },
  france: { name:"فرنسا", flag:"🇫🇷", capital:"باريس", population:"67 مليون", currency:"اليورو" },
  japan: { name:"اليابان", flag:"🇯🇵", capital:"طوكيو", population:"125 مليون", currency:"الين الياباني" },
  saudi: { name:"السعودية", flag:"🇸🇦", capital:"الرياض", population:"36 مليون", currency:"الريال السعودي" },
  germany: { name:"ألمانيا", flag:"🇩🇪", capital:"برلين", population:"83 مليون", currency:"اليورو" }
};

// ملأ القوائم تلقائياً
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

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `
    <div class="country-card" style="animation-delay:0.1s;">
      <div class="flag">${country1.flag}</div>
      <h2>${country1.name}</h2>
      <p>العاصمة: ${country1.capital}</p>
      <p>عدد السكان: ${country1.population}</p>
      <p>العملة: ${country1.currency}</p>
    </div>
    <div class="country-card" style="animation-delay:0.2s;">
      <div class="flag">${country2.flag}</div>
      <h2>${country2.name}</h2>
      <p>العاصمة: ${country2.capital}</p>
      <p>عدد السكان: ${country2.population}</p>
      <p>العملة: ${country2.currency}</p>
    </div>
  `;
}
