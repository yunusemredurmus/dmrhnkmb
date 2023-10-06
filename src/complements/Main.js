import React from "react";
import "../css/main.css";

export const Main = () => {
  return (
    <div className="MainDıs">
      <div className="MainIc">
        <div className="MainSol">
          <img src="kombi.png" alt="logoMain" />
        </div>
        <div className="MainSag">
          <div id="SagBaslik">
            <h1> Tesisat Problemlerinize Son ! </h1>
            <hr id="cizgi1" />
          </div>
          <div>
            {" "}
            <h1 id="text">
              <div id="textbaslikHeader">
                <h3 id="basliksg">Doğalgaz Kombi Teknik Servisi </h3>
              </div>
              10 yılı aşkın bir süredir doğalgaz kombi sistemleri konusunda
              uzmanlaşmış bir teknik servisiz. Müşterilerimize güvenilir, hızlı
              ve profesyonel hizmet sunma konusundaki kararlılığımızla
              tanınıyoruz.{" "}
              <div id="textbaslikHeader">
                <h3 id="basliksg">Tecrübe ve Uzmanlık</h3>
              </div>{" "}
              Deneyim ve uzmanlık, işimizin temelini oluşturuyor. Kombi
              tesisatları, ısıtma sistemleri ve sıcak su çözümleri konusundaki
              bilgi birikimimiz sayesinde, her tür teknik sorunla başa çıkmak
              için hazırız. Müşterilerimize en iyi sonuçları sağlamak için
              sürekli olarak eğitim alıyor ve teknolojiye ayak uyduruyoruz.{" "}
              <div id="textbaslikHeader">
                <h3 id="basliksg">Müşteri Memnuniyeti</h3>
              </div>{" "}
              Müşterilerimizin memnuniyeti, işimizin merkezinde yer alır. Her
              projeye ve her hizmete özenle yaklaşırız, çünkü müşterilerimize
              güven vermek ve onların beklentilerini aşmak bizim için önemlidir.
              Size en iyi hizmeti sunabilmek için sürekli olarak çalışıyoruz.
            </h1>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};
