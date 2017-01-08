Türkiye'de hemen her gün onlarca site sansüre uğruyor. Bu sansür furyasından ise en çok "muhalif haber siteleri" nasibini alıyor. 

SansurSavan, Türkiye'deki sansürlü haber sitelerine erişebilmenizi sağlayan Chrome/Firefox tarayıcı eklentisidir. Eklenti sayesinde, sansüre uğramış haber sitelerini gezebilir, bilgiye ve habere erişiminizin engellenmesini aşabilirsiniz.

[**Chrome/Chromium tarayıcınıza yüklemek için tıklayın**](https://chrome.google.com/webstore/detail/sans%C3%BCrsavan/iadmdopibichlaibpedpolfemeapmhdn)

## Nasıl Çalışır?

![SansürSavan nasıl çalışır?](https://github.com/kolektif/sansursavan/raw/gh-pages/sansursavan.png)

Sansüre uğrayan haber siteleri, kimi zaman adreslerini (alan adı, domain) değiştirmekte, kimi zaman ise sansür altında aynı adresten yayınlarına devam etmektedir. Adresini değiştiren sitelere yeni adres üzerinden erişebilirken, adresini değiştirmeyen sitelere ise VPN/Proxy kullanmadan erişim sağlanamamaktadır.

Sansürsavan bir tarayıcı eklentisidir. Şimdilik sadece Chrome/Chromium tarayıcılarında kullanılabilir. Her yeni web sayfasına girdiğinizde adresi sansürlü adres listesiyle karşılaştırır.

Bu noktada SansurSavan'ın 2 temel görevi vardır.

1- Adresini değiştirmiş siteleri, yeni adreslerine yönlendirir. Örneğin siz tarayıcıya sendika.org adresini yazdığınızda, bu sitenin en son adresi olan sendika14.org adresine yönlendirilirsiniz. Sendika14.org adresinin engellenmesi durumunda ise yeni açılacak adrese yönlendirilirsiniz.

2- Adresini değiştirmemiş siteleri, vekil sunucu* üzerinden yayınlar. Örneğin tarayıcınıza dokuz8haber.com adresini yazdığınızda, bu adresi SansurSavan'ın vekil sunucusu üzerinden geçirerek size ulaştırır.

`*` [Vekil sunucu](https://tr.wikipedia.org/wiki/Vekil_sunucu): http://proxy.sansursavan.org adresinde bulunan proxy sunucumuz, bir özgür yazılım olan [Php Proxy App](https://github.com/kolektif/php-proxy-app) ile çalışmaktadır. **Proxy sunucumuz üzerinde herhangi bir erişim bilgisi (ip adresi, tarayıcı bilgisi vd.) _TUTULMAMAKTADIR_. Ancak proxy sunucumuzun bulunduğu Almanya'daki veri merkezinin erişim bilgisi kaydedip kaydetmediği hakkında bilgimiz yoktur.**

Güvenliğiniz için bir vekil sunucu kullanırken, parola gibi hassas bilgilerinizi hiç bir koşulda girmeyiniz ve vekil sunucuları _sadece gezinme amaçlı kullanınız_.

## Tunnelbear, Zenmate gibi VPN eklentilerinden farkı ne?

VPN eklentileri kâr amacıyla kurulan şirketlerin ürünleridir. Bu ürünlerin geliştirilmesindeki başlıca amaç, internet kullanıcılarının sansürleri aşması değil, kâr etmektir. Tüm internet trafiğinizi böyle bir şirket üzerinden geçirmek, sizi bir **ürün** haline getirir. Bununla birlikte bu eklentilerin sizin hangi bilgilerinizi kayıt altına aldığı bilinmemektedir. Biz bu eklentiyi, herhangi bir ticari kaygı gözetmeden ve gizliliğinize önem vererek geliştirdik.

## Tor varken ne gerek var?

Tor (https://torproject.org) hem gizlilik hem de sansürleri aşmak için harika. Ancak Tor Browser kurmak bazı internet kullanıcıları için zor veya zahmet verici olabiliyor. Bu sebeple daha basit şekilde **bazı** sansürlü sitelere girebilmek için bu eklentiyi geliştirdik. Eğer aktif olarak Tor kullanıyorsanız bu eklentiyi kullanmanıza gerek yoktur.

## Bize çalışmalarımızda yardım edebilirsiniz

Birinci önceliğimiz, sansüre uğramış haber sitelerinin listesinin oluşturulması ve güncelliğini korumasıdır. [Sansürlü siteler listemizi](https://github.com/kolektif/sansur-listesi/blob/master/liste.json) güncellememize yardımcı olabilirsiniz. 

SansurSavan'ın tüm çalışmaları özgür lisanslarla paylaşılmıştır. Tüm çalışmalarımıza (bu sitedeki metinlerin hazırlanması dahil) katkıda bulunabilirsiniz.
