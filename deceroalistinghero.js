(function() {
    const style = document.createElement('style');
    style.innerHTML = `
        :root {
            --color-primario: #121275;  /* azul oscuro */
            --color-secundario: #041723;  /* Azul dark*/
            --color-terciario: #FFFFFF;   /* Blanco */
            --color-gris: #888A8E;       /* Gris claro */
            --transparent-bg: rgba(0,0,0,0.10);
            --site-title-font: "Averta-Semibold";
            --site-paragraph-font: "AvertaStd-Light";
            --site-titlesec-font: "AvertaDemo-ExtraBoldItalic";
            --border-btn: 50px;
            --border-cont: 20px;
        }
        body {
            margin: 0;
        }
        .my-widget-content {
            margin: 0;
            display: flex;
            flex-direction: row;
            background-image: url('https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/2159589961/settings_images/66ee1e-7420-5882-8fbb-87b21c73a2b_wallpapersuperventas.png');
            background-size: cover;
            background-position: 50% 0;
            background-repeat: no-repeat;
            width: 100%;
        }
        .my-widget-content-text {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-evenly;
            color: var(--color-terciario);
            font-family: var(--site-title-font);
            padding-left: 3rem;
        }
        .my-widget-content-text img{
            width: 27%;
        }
        .my-widget-content-text .my-widget-content-text-inner h2{
            font-size: 42px;
            margin: 0%;
            text-transform: uppercase;
        }
        .my-widget-content-text .my-widget-content-text-inner h1{
            font-size: 104px;
            margin: 0%;
            text-transform: uppercase;
            font-family: var(--site-titlesec-font);
        }
        .my-widget-content-text .my-widget-content-text-inner h3{
            font-size: 36px;
            margin: 0%;
        }
        .my-widget-content-text .my-widget-content-text-inner p{
            max-width: 80%;
        }
        .otg-button-111 {
            height: 60px;
            background-color: var(--color-secundario);
            min-width: 250px;
            color: var(--color-terciario);
            padding: 0 30px;
            border: 0.5px solid var(--color-secundario);
            border-radius: var(--border-btn);
            font-family: var(--site-title-font);
            text-transform: uppercase;
            transition: background-color 1.0s ease;
        }

        .otg-button-111:hover {
            background-color: var(--color-terciario);
            min-width: 250px;
            color: var(--color-secundario);
            border: 1px solid var(--color-secundario);
            border-radius: var(--border-btn);
            cursor: pointer;
        }
        .my-widget-content-pic {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-end;
        }
        .my-widget-content-pic img{
            width: 100%;
        }

        /* AvertaStd-Light */
        @font-face {
        font-family: "AvertaStd-Light";
        src: url('https://oscarterangroup.github.io/widgets/imgs/Averta-light.woff.ttf') format('truetype');
        font-weight: 400;
        font-style: normal;
        font-display: swap;
        }
        /* Averta-Semibold */
        @font-face {
        font-family: "Averta-Semibold";
        src: url('https://oscarterangroup.github.io/widgets/imgs/Averta-Semibold.ttf') format('truetype');
        font-weight: 400;
        font-style: normal;
        font-display: swap;
        }

        /* Averta-Semibold */
        @font-face {
        font-family: "AvertaDemo-ExtraBoldItalic";
        src: url('https://oscarterangroup.github.io/widgets/imgs/AvertaDemo-ExtraBoldItalic.otf') format('truetype');
        font-weight: 400;
        font-style: normal;
        font-display: swap;
        }
    `;
    document.head.appendChild(style);

    const containers = document.querySelectorAll('.my-widget');
    containers.forEach(container => {
        container.innerHTML = `
        <div class="my-widget-content">
            <div class="my-widget-content-text">
                <img src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/2159589961/settings_images/bc6842-d7fb-d037-1056-dd5875b0738_14cbb886-ef44-4290-8762-5105d35a764e.png" alt="de cero a listing agent logo">
                <div class="my-widget-content-text-inner">
                    <h2>Curso Online:</h2>
                    <h1>De cero a top <br> Listing Agent</h1>
                    <h3>El Curso que Transformará <br> Tu Carrera Inmobiliaria</h3>
                    <p>INCLUYE UN EBOOK CON COMANDOS DE INTELIGENCIA ARTIFICIAL DISEÑADOS PARA IMPULSAR TUS VENTAS HOY</p>
                </div>
                <button class="otg-button-111">QUIERO ESTE CURSO</button>
            </div>
            <div class="my-widget-content-pic">
                <img src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/2159589961/settings_images/a4d8df3-841-c11-36ae-88be1bcf178c_c54fa26a-a505-4acb-af52-e6295643ef61.png" alt="Oscar Teran picture">
            </div>
        </div>
        `;
    });
})();

