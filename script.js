/* إعدادات عامة */
body{
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(120deg,#2980b9,#6dd5fa);
    margin:0;
    padding:0;
    display:flex;
    justify-content:center;
    align-items:center;
    min-height:100vh;
}
.container{
    width:600px;
    background:white;
    border-radius:20px;
    box-shadow:0 15px 40px rgba(0,0,0,0.3);
    text-align:center;
    overflow:hidden;
    padding-bottom:30px;
}
/* Header */
.header{
    background: linear-gradient(90deg,#f7971e,#ffd200);
    color:white;
    padding:40px 20px;
}
.header h1{margin:0;font-size:30px;}
.header p{margin:10px 0 0 0;font-size:16px;}
/* Main Content */
.content{padding:30px 20px;}
.select-group{margin-bottom:20px;}
select{
    width:80%;
    padding:12px;
    font-size:16px;
    border-radius:10px;
    border:1px solid #ccc;
    transition:0.3s;
}
select:hover{border-color:#f7971e;}
button{
    width:85%;
    padding:15px;
    background:#ff416c;
    color:white;
    border:none;
    border-radius:12px;
    font-size:16px;
    cursor:pointer;
    transition:0.4s;
}
button:hover{
    background:#ff4b1f;
    transform:translateY(-3px);
}
/* Info Sections */
.info-section{
    padding:20px;
    background: linear-gradient(120deg,#e0eafc,#cfdef3);
    margin:15px 20px;
    border-radius:15px;
    box-shadow:0 10px 20px rgba(0,0,0,0.1);
    text-align:right;
}
.info-section h2{color:#ff416c;}
.info-section ul, .info-section ol{
    text-align:right;
    padding-left:20px;
}
/* Planet Cards Placeholder */
#planet-info{
    margin-top:30px;
}
.planet-card{
    background:white;
    border-radius:15px;
    padding:20px;
    width:250px;
    margin:15px auto;
    box-shadow:0 10px 25px rgba(0,0,0,0.2);
    transition:0.3s;
}
.planet-card:hover{
    transform:translateY(-5px);
    box-shadow:0 15px 35px rgba(0,0,0,0.3);
}
.planet-card h2{color:#ff416c;font-size:22px;margin:10px 0;}
.planet-card p{font-size:14px;margin:5px 0;}
.planet-card .emoji{font-size:50px;margin-bottom:10px;}
/* Placeholder divs لتكبير طول الملف */
.placeholder .dummy{
    height:40px;
    margin:5px;
    background:linear-gradient(90deg,#f7971e,#ffd200);
    border-radius:10px;
}
