import React from "react";
import "../css/midcontent.css";

export const MidContent = () => {
  return (
    <div className="main">
      <div className="mainIc">
        <div className="mainIc1">
          <div className="altIcerık">
            {" "}
            <img src="./tecrubeon.jpg" alt="kombi" />
          </div>
          <div className="altIcerıktxt">
            <h1 id="bastxt"> 7/24 HİZMET </h1>
          </div>
          <div className="txt">
            <p>
              {" "}
              Kombi sektöründe yılların birikimiyle her geçen sürede daha yeni
              hizmetleri sunmaya devam ediyoruz. bakım onarım servisi çağın
              yeniliklerine uygun çalışmalar ile beklenenin üstünde 7/24 hizmet
              vererek müşterilerimizin maksimum memnuniyetini kazanmayı ilke
              edindik.
            </p>
          </div>
        </div>
        <div className="mainIc2">
          <div className="altIcerık">
            {" "}
            <img src="./kombi.png" alt="kombi" />
            <div className="altIcerıktxt">
              {" "}
              <h1 id="bastxt"> Demirhan Kombi </h1>{" "}
            </div>
            <div className="txt">
              <p>
                {" "}
                Ödünsüz kalite politikası, mükemmel iş ahlakı ve müşteri
                memnuniyeti vazgeçilmez prensiplerimizin başında geliyor.
                Saygınlığı sağlayan ve koruyan değerler, bizim için çok büyük
                önem arzediyor
              </p>
            </div>
          </div>{" "}
        </div>
        <div className="mainIc3">
          {" "}
          <div className="altIcerık">
            {" "}
            <img src="./kalitestandart.jpg" alt="kombi" />
            <div className="altIcerıktxt">
              {" "}
              <h1 id="bastxt"> 2.El Kombi Alım-Satım </h1>{" "}
            </div>
            <div className="txt">
              <p>
                {" "}
                Bosch Kombi, Baymak Kombi, Demirdöküm Kombi, Vaillant Kombi,
                Buderus Kombi, ECA Kombi, Ferroli Kombi, Protherm Kombi
                Markalarinin bakimlari yapilmis garantili ürünleri mevcuttur.
              </p>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};
