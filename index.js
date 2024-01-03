const express = require("express");
const pdf = require("html-pdf");
const app = express();

const pdfOptions = {
    "format": "A4",        // allowed units: A3, A4, A5, Legal, Letter, Tabloid
    "orientation": "portrait",
    "script": "./pdf_a4_portrait.js", // pkg ile win uygulaması için aynı dizinde olmalı => node_modules\html-pdf\lib\scripts\pdf_a4_portrait.js
    "phantomPath": "./phantomjs.exe", // pkg ile win uygulaması için aynı dizinde olmalı => node_modules\phantomjs-prebuilt\lib\phantom\bin\phantomjs_.exe
    "localUrlAccess": true,
    "border": {
        "top": "5mm",       // üst kenar boşluğu
        "right": "5mm",     // sağ kenar boşluğu
        // "bottom": "5mm",    // alt kenar boşluğu
        "left": "5mm"       // sol kenar boşluğu
    },
    "height": "370mm",      // PDF sayfa yüksekliği || Standart A4 ölçülerinde taşma oluyor o yüzden...
    "width": "230mm"        // PDF sayfa genişliği  || ...hem yükseklik hem de genişlik değerlerini yükseltilmesinde fayda var.
};

app.get("/pdf", (req, res)=>{
  const html1 = fs.readFileSync('./1.html', 'utf8');
    try {
        pdf.create(html1, options).toBuffer(function (err, buffer) {
            console.log(Buffer.isBuffer(buffer))
            if (err) {
                console.error(err);
                response.send(err)
            } else {
                response.setHeader('Content-Type', 'application/pdf');
                response.setHeader('Content-Disposition', 'inline; filename=file.pdf');
                response.send(buffer);
            }
        });
    } catch (error) {
        console.log(error)
    }
})

app.listen(1923, () => {
    console.log("1923 portu dinleniyor!")
    process.stdin.resume();
    process.stdin.setEncoding('utf8');
    console.log('Konsolu kapatmak istiyor musunuz? (e/h)');
    process.stdin.on('data', (data) => {
        data = data.trim().toLowerCase();
        if (data === 'e' || data === 'Evet') {
            process.exit(0);
        } else {
            console.log('Konsol açık kalacak');
        }
    });
})

// windows uygulamasına dönüştürdüğüm zaman aynı dizindeki yanlış tanımlama yüzünden
// ./pdf_a4_portrait.js ve phantomjs.exe buamadığı zaman hata verip kapanıyor neden hata aldığımı yakalamak için
// kapanmasını engellemek için aşağıdaki kodlar yerleştirildi.
process.on('uncaughtException', (err) => {
    console.error(`Hata oluştu: ${err}`); 
});
throw new Error('Bu bir örnek hatadır.');
