Türkiye'de hemen her gün onlarca site sansüre uğruyor. Bu sansür furyasından ise en çok "muhalif haber siteleri" nasibini alıyor. 

SansurSavan, Türkiye'deki sansürlü haber sitelerine erişebilmenizi sağlayan Chrome/Firefox tarayıcı eklentisidir. Eklenti sayesinde, sansüre uğramış haber sitelerini gezebilir, bilgiye ve habere erişiminizin engellenmesini aşabilirsiniz.

## Nasıl Çalışır?

Sansüre uğrayan haber siteleri, kimi zaman adreslerini (alan adı, domain) değiştirmekte, kimi zaman ise sansür altında aynı adresten yayınlarına devam etmektedir. Adresini değiştiren sitelere yeni adres üzerinden erişebilirken, adresini değiştirmeyen sitelere ise VPN/Proxy kullanmadan erişim sağlanamamaktadır.

Bu noktada SansurSavan'ın 2 temel görevi vardır.

1- Adresini değiştirmiş siteleri, yeni adreslerine yönlendirir. Örneğin siz tarayıcıya sendika.org adresini yazdığınızda, bu sitenin en son adresi olan sendika14.org adresine yönlendirilirsiniz. Sendika14.org adresinin engellenmesi durumunda ise yeni açılacak adrese yönlendirilirsiniz.

2- Adresini değiştirmemiş siteleri, vekil sunucu* üzerinden yayınlar. Örneğin tarayıcınıza dokuz8haber.com adresini yazdığınızda, bu adresi SansurSavan'ın vekil sunucusu üzerinden geçirerek size ulaştırır.

`*` [Vekil sunucu](https://tr.wikipedia.org/wiki/Vekil_sunucu): http://proxy.sansursavan.org adresinde bulunan proxy sunucumuz, bir özgür yazılım olan [Php Proxy App](https://github.com/kolektif/php-proxy-app) ile çalışmaktadır. Nginx ile yayın yapılmaktadır ve sunucu üzerinde herhangi bir erişim bilgisi tutulmamaktadır. Ancak, güvenliğiniz için bir vekil sunucu kullanırken, parola gibi hassas bilgilerinizi hiç bir koşulda girmeyiniz ve vekil sunucuları sadece gezinme amaçlı kullanınız. 

## Bize çalışmalarımızda yardım edebilirsiniz

Birinci önceliğimiz, sansüre uğramış haber sitelerinin listesinin oluşturulması ve güncelliğini korumasıdır. [Sansürlü siteler listemizi](https://github.com/kolektif/sansur-listesi/blob/master/liste.json) güncellememize yardımcı olabilirsiniz. 

SansurSavan'ın tüm çalışmaları özgür lisanslarla paylaşılmıştır. 
