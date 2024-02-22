"use client"
import React from 'react';
import Image from "next/image";

const AboutCard = ({ title, content, img }) => {
    return (
      <div className='bg-white p-8 rounded-3xl shadow-xl shadow-stone-100 my-8 mx-2'>
        <div className='flex justify-between'>
          <div className='flex gap-4'>
                {img && (
                  <Image
                      src={img} 
                      alt=""
                      width={50}
                      height={50}
                      className="hidden md:block md:relative md:bottom-4 md:left-31 md:z-0 rounded-full"
                  />
                )}
            <div>
              <h1 className='text-justify font-semibold font-serif'>{title}</h1>
            </div>
          </div>
        </div>
  
        <div className='py-8'>
          <h3 className='text-lg text-justify'>{content}</h3>
        </div>
      </div>
    );
  };

const AboutUsCard = () => {
    return (
      <AboutCard
        title='Takımımız'
        content='Biz, lisans mezuniyet projemiz için bir araya gelmiş iki kişilik bir takımız. 
        Birlikte, herkesin kendini geliştirmesine yardımcı olmayı hedefleyen bir öğrenme yönetim sistemi oluşturacağız. 
        Projemiz kapsamında, kişisel bilgilerinizi ve kart bilgilerinizi girmemenizi şiddetle tavsiye ediyoruz.'
        img = '/whous.png'
      />
    );
  };
  
  const MissionCard = () => {
    return (
      <AboutCard
        title='Misyonumuz'
        content='Misyonumuz, herkesin kendini geliştirebileceği, kolay erişilebilir ve kullanıcı dostu bir öğrenme platformu oluşturmak. Bu platform, kullanıcıların her yerden ve her cihazdan erişebileceği bir öğrenme ortamı sağlamayı hedefliyor. Ayrıca, eğitmenlere ek gelir kapısı açmayı ve onların bilgi ve deneyimlerini paylaşmalarını teşvik etmeyi amaçlıyoruz. Güvenlik ve gizlilik, tasarımımızın en önemli unsurlarından biridir.'
        img = '/mission.png'
      />
    );
  };
  
  const TrainerCard = () => {
    return (
      <AboutCard
        title='Eğitmen Olabilirsiniz!'
        content='Bilgi ve deneyimlerinizi paylaşmak için harika bir fırsat! Platformumuz, eğitmen olmak isteyen herkese açık. Kendi kursunuzu oluşturabilir, öğrencilere bilgi ve becerilerinizi aktarabilirsiniz. Eğitmenlerimiz, öğrencilere değerli bilgiler sunarken aynı zamanda ek gelir elde ederler. Eğitim materyallerinizi oluştururken size yardımcı olacak araçlar ve kaynaklar sağlıyoruz. Siz de bugün eğitmen olarak topluluğumuza katılabilirsiniz!'
        img = '/teacher.png'
      />
    );
  };
  
  const StudentCard = () => {
    return (
      <AboutCard
        title='Öğrenci Olabilirsiniz!'
        content='Öğrenme yolculuğunuza bizimle başlayın! Platformumuz, çeşitli konularda kurslar sunarak herkesin kendini geliştirmesine yardımcı olmayı hedefliyor. Kurslarımız, her yerden ve her cihazdan erişilebilir, böylece öğrenme sürecinizi kendi tempoda ve rahatınızda yönetebilirsiniz. Ayrıca, eğitmenlerimizden doğrudan destek alabilir ve öğrenme deneyiminizi zenginleştirebilirsiniz. Öğrenci olarak platformumuza katıldığınızda, kendinizi geliştirmek ve yeni beceriler edinmek için birçok fırsat bulacaksınız. Bugün öğrenci olun ve öğrenme yolculuğunuza başlayın!'
        img = '/student.png'
      />
    );
  };






export { AboutUsCard, MissionCard, TrainerCard, StudentCard };
