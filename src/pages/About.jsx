import EmreMetinPortre from "../assets/himself.jpg";
export default function About() {
  return (
    <div className="w-full container flex">
      <div className="relative w-full info rounded-lg shadow-lg p-8 bg-sky-100">
        <h1 className="text-sky-600 font-bold text-6xl pb-12">
          Uzm. Dr. Emre Metin
        </h1>
        <img
          className="w-96 h-96 !aspect-square object-right rounded-full float-right"
          src={EmreMetinPortre}
          alt="emre metin"
        />
        <div className="space-y-4">
          <p>
            Ben neredeyse tamamı hekim olan bir ailenin mensubuyum. Bu mesleği
            mühendislik, mimarlık,tıp gibi bir sürü seçenek arasındaki
            alternatiflerden biri olarak seçmedim. Diş hekimliği benim için net
            bir tercihti.
          </p>
          <p>
            Babamın da mesleği olan diş hekimliği hayatıma akademisyen
            dostlarımız ile yaptığımız araştırmalar sonucu alanında dünyadaki en
            detaylı eğitimi verdiğini öğrendiğim Nobel ödülleri olan 250 küsur
            yıllık Semmelweis Tıp Üniversitesi'nin çok kademeli teorik
            sınavlarına hazırlanarak başladım. Lise döneminde biyoloji ve
            anatomiye olan hobi seviyesindeki ilgim sebebiyle Amerika ve bazı
            Avrupa ülkelerinde lise sonrası, üniversite öncesi iki yıl süren
            premedikal kolej eğitimi için uluslararası akademisyen heyeti
            tarafından direk muafiyet alarak kabul edildiğim fakültemde başarılı
            5 sene geçirerek "dr.med.dent" unvanıyla mezun oldum. Buradaki
            tezimin konusu, suni ve doğal kemik greftlerinin mukayesesi ile
            ilgiliydi.
          </p>
          <p>
            Dünyanın her yerinde diploma denkliği olan bu üniversitede sınavsız
            bir şekilde doktora eğitimine devam etme hakkı elde ettiğim halde
            hayatımın kalanında nerede yaşamak istediğim ile ilgili bir yol
            ayrımına geldiğimi fark ederek bir seçim yaptım ve aileme,
            sevdiklerime yakın olabilmek için ülkeme döndüm. Eğitimimin tamamı
            İngilizce olduğu için hem günlük kullanımda hem de mesleki
            terminolojiye hakimiyet açısından yabancı kaynaklara erişim imkanım
            oldukça artmıştı.
          </p>
          <p>
            Türkiye'ye döndükten sonra akademik hayatıma devam etmek istediğim
            için Yüksek Öğretim Kurumu'nun düzenlediği Diş Hekimliği Uzmanlık
            Sınavı'na (DUS) katılarak Türkiye 16.'sı oldum. Birkaç fakülteyi
            bizzat gidip gezdikten sonra Selçuk Ortodonti'nin akademik kadrosu
            beni cezbetti ve ilk tercihim olarak orayı belirledim. Uzmanlık
            tezimin konusu, ortodontide kullanılan farklı kuvvetlerin kök
            rezorpsiyonuna (erimesine) etkilerini mukayese etmek ile ilgili
            klinik deneyler, mikro tomografi incelemeleri ve 3 boyutlu modelleme
            analizi gibi üç temel aşaması olan önemli bir çalışmaydı. Zorlu bir
            süreç olsa da sonuçları itibariyle ortodontide ugulanan kuvvetler
            ile diş köklerinin zarar görmemesini gözetmek açısından mesleğime
            katkısı oldu diye düşünüyorum.
          </p>
          <p>
            Tezimi ve uzmanlık bitirme sınavını tamamlayarak uzman doktor
            unvanını kazandıktan sonra, kendisi de diş hekimi olan eşimle
            birlikte doğup büyüdüğüm memleketim Üsküdar'a dönüş yaptık. Şu an
            Üsküdar'daki kliniğimizde ben ortodonti alanında ve eşim genel diş
            hekimliği alanında hizmet veriyoruz. Akademik olarak her sene
            güncellenen yenilikleri hem yurt içi, hem yurt dışından takip ederek
            şeffaf plaklar, mini vidalar ve kapaklı braketler gibi tedavileri
            sentezleyerek uyguluyorum. Ortodonti öyle enteresan bir branş ki,
            vakaya özel farklı farklı biyomekanik bilmeceleri zihnen çözerken,
            bir yandan da estetik sanatları ve tıbbi yaklaşımı el üstünde tutmak
            gerekir. Sonuçta fonksiyon, güzellik ve sağlık birbirini
            tamamladığında duyulan mesleki tatmin insanı daha çok çalışmaya
            iter. Bu sebeple zorlu vakalardan kaçmıyor, detaylardan keyif
            alıyor, en önemlisi de mesleğimi adeta hobi olarak görüyor ve çok
            seviyorum.
          </p>
        </div>
        <div className=" clear-both"></div>
      </div>
    </div>
  );
}
