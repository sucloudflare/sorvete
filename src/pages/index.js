import { useRouter } from "next/router";

export default function SorveteriaLazer() {
  const router = useRouter();

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", overflowX: "hidden" }}>
      <style global jsx>{`
        body {
          margin: 0;
          padding: 0;
        }

        /* Responsividade */
        @media (max-width: 350px) {
          .header {
            flex-direction: column;
            text-align: center;
            height: auto;
            padding: 20px 5%;
          }

          .header h1 {
            font-size: 10px;
            margin-top: 3rem;
          }

          .header p {
            font-size: 1rem;
          }

          .header .btn {
            width: 100%;
            margin: 5px 0;
          }

          .header img {
            max-width: 80%;
            margin: 20px auto;
          }

          #sobre,
          #contato {
            flex-direction: column;
            text-align: center;
          }

          #sobre div,
          #contato div {
            width: 100%;
          }

          #sobre img,
          #contato img {
            max-width: 80%;
            margin: 20px auto;
          }

          footer {
            font-size: 0.9rem;
          }
        }

        /* Estilo global */
        .container {
          width: 100%;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          height: 100vh;
          background-color: #ffb6c1;
          padding: 5%;
        }

        .text-container {
          margin-top: 87px;
          width: 49%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
        }

        .text-container h1 {
          font-size: 3.5rem;
          font-weight: bold;
          color: #222;
        }

        .text-container p {
          font-size: 1.2rem;
          color: white;
          margin-top: 55px;
        }

        /* Estilo dos Botões com o design específico */
        .btn {
          width: 99px;
          height: 50px;
          border: none;
          border-radius: 30px;
          color: white;
          font-weight: bold;
          transition: transform 0.3s;
          position: relative;
        }

        .btn-info {
          background-color: #ff85a2;
        }

        .btn-info:hover {
          background-color: #ff4c85;
          transform: translateY(-5px);
        }

        .btn-contato {
          background-color: #ff85a2;
        }

        .btn-contato:hover {
          background-color: #ff577f;
          transform: translateY(-5px);
        }

        .btn-login {
          background-color: #ffa4b3;
        }

        .btn-login:hover {
          background-color: #ff6f85;
          transform: translateY(-5px);
        }

        .image-container {
          width: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .image-container img {
          max-width: 100%;
          height: auto;
        }

        section {
          width: 100%;
          padding: 50px 5%;
          text-align: center;
        }

        #sobre {
          background-color: #fcd4e5;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        #sobre img {
          width: 50%;
          max-width: 400px;
          margin-right: 20px;
        }

        #contato {
          background-color: #fcd4e5;
        }

        footer {
          width: 100%;
          background-color: #222;
          color: #fff;
          text-align: center;
          padding: 20px 0;
        }
      `}</style>

      <div className="header">
        {/* Lado Esquerdo - Texto e Botões */}
        <div className="text-container">
          {/* Fundo de tinta derramada */}
          <div
            style={{
              position: "relative",
              display: "inline-block",
              width: "fit-content",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-17px",
                left: "-17px",
                width: "110%",
                height: "143%",
                background:
                  "radial-gradient(circle at 50% 50%, #ff85a2, #ff6f91)",
                borderRadius: "60% 40% 50% 70%",
                transform: "rotate(-10deg)",
                zIndex: 0,
              }}
            ></div>
            <h1
              style={{
                position: "relative",
                zIndex: 1,
                marginBottom: "0px",
              }}
            >
              Sorveteria Lazer
            </h1>
          </div>
          <p>
            Venha conhecer os sabores mais deliciosos e refrescantes da nossa
            sorveteria. Um lugar especial para compartilhar momentos doces e
            únicos!
          </p>

          {/* Botões com o design fornecido */}
          <div className="mt-4 d-flex" style={{ gap: "15px" }}>
            <button
              className="btn-menu"
              onClick={() => scrollToSection("sobre")}
            >
              <i className="fas fa-info-circle"></i>
              Sobre
            </button>
            <button
              className="btn-menu"
              onClick={() => scrollToSection("contato")}
            >
              <i className="fas fa-envelope"></i>
              Contato
            </button>
            <button
              className="btn-menu btn-login"
              onClick={() => router.push("/menu")}
            >
              <i className="fas fa-sign-in-alt"></i>
              Logar
            </button>
          </div>
        </div>

        {/* Lado Direito - Imagem */}
        <div className="image-container">
          <img src="/top.png" alt="Sorvete" />
        </div>
      </div>

      {/* Seção Sobre */}
      <section id="sobre">
        <div>
          <h2>Sobre Nós</h2>
          <p>
            A Sorveteria Lazer nasceu para trazer alegria e frescor ao seu dia.
            Trabalhamos com dedicação para oferecer os melhores sabores e
            proporcionar momentos únicos para você e sua família.
          </p>
        </div>
        <img src="/top1.png" alt="Sorveteria Lazer" />
      </section>

      {/* Seção Contato */}
      <section id="contato">
        <h2>Fale conosco</h2>
        <p>
          <i class="fa-solid fa-location-dot"></i> Rua dos Sorvetes, 123 -
          Saborópolis
          <br />
          <i class="fa-solid fa-mobile-screen-button"></i> (99) 99999-9999
          <br />
          <i class="fa-solid fa-envelope"></i> contato@sorveterialazer.com.br
        </p>
      </section>

      {/* Rodapé */}
      <footer>
        <p>© 2024 Sorveteria Lazer. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
