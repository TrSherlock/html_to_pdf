Dizindeki wkhtmltopdf.exe uygulaması bekletmeden pdf dosyasına dönüştürür.
Uygulamanın sonraki sürümlerinde `Yazıcı bağlantısı bekleniyor...` uyarısı veriyor uyarı iptal edilmezse ortalama 5 saniye bekletiyor acil ve toplu işlemlerde işinizi görmez.
Paylaştığım sürümde ise sayfa yapısının türünü ayarlayamamak varsa da ben bilmiyorum.

```js
require('child_process').exec(__dirname + '\\wkhtmltopdf f1.html foo.pdf', function(err, stdout, stderr){ process.stdout.write( stderr );});
```
