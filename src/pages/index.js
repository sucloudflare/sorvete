import { useRouter } from "next/router";

export default function SorveteriaLazer() {
  const router = useRouter();

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", overflowX: "hidden" }}>
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
        <p>© {currentYear} Sorveteria Lazer. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
