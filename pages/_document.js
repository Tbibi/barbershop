import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta
          name="keywords"
          content="barber shop, coiffure, coupe de cheveux, rasage, soins capillaires, style masculin, tendance, entretien de la barbe, salon de coiffure, grooming, service professionnel, bien-être, confiance en soi."
        />
        <meta
          name="description"
          content="Chez SKOU BARBER, nous offrons des coupes de cheveux tendance et des soins de rasage de qualité pour révéler votre style unique. Profitez d'une expérience personnalisée dans un environnement accueillant, avec une équipe dédiée à votre bien-être."
        />
        <link rel="icon" href="/logoskou.webp" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Sacramento&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
