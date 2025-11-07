"use client";

import Script from "next/script";

export default function SchemaOrg() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "@id": "https://www.colegioaprovaminas.com.br#organization",
        name: "Colégio AprovaMinas",
        url: "https://www.colegioaprovaminas.com.br",
        logo: "https://www.colegioaprovaminas.com.br/logo.png",
        description:
          "O Colégio AprovaMinas oferece cursos técnicos e profissionalizantes online com foco em empregabilidade e inovação no mercado.",
        sameAs: [
          "https://www.instagram.com/colegioaprovaminas",
          "https://www.facebook.com/colegioaprovaminas",
          "https://www.linkedin.com/school/colegioaprovaminas",
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: "R. Luiz Rodrigues dos Santos, 44 - Todos Os Santos",
          addressLocality: "Cel. Fabriciano",
          addressRegion: "MG",
          postalCode: "35170-037",
          addressCountry: "BR",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+55-31-97314-4070",
          contactType: "customer service",
          areaServed: "BR",
          availableLanguage: ["Portuguese"],
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://www.colegioaprovaminas.com.br#website",
        url: "https://www.colegioaprovaminas.com.br",
        name: "Colégio AprovaMinas",
        publisher: { "@id": "https://www.colegioaprovaminas.com.br#organization" },
        potentialAction: {
          "@type": "SearchAction",
          target: "https://www.colegioaprovaminas.com.br/?s={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://www.colegioaprovaminas.com.br#webpage",
        url: "https://www.colegioaprovaminas.com.br",
        name: "Colégio AprovaMinas - Cursos Técnicos e Profissionalizantes Online",
        isPartOf: { "@id": "https://www.colegioaprovaminas.com.br#website" },
        about: { "@id": "https://www.colegioaprovaminas.com.br#organization" },
        description:
          "Educação técnica de excelência online. Descubra nossos cursos com foco em empregabilidade e inovação.",
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.colegioaprovaminas.com.br#localbusiness",
        name: "Colégio AprovaMinas",
        image: "https://www.colegioaprovaminas.com.br/logo.png",
        address: {
          "@type": "PostalAddress",
          streetAddress: "R. Luiz Rodrigues dos Santos, 44 - Todos Os Santos",
          addressLocality: "Cel. Fabriciano",
          addressRegion: "MG",
          postalCode: "35170-037",
          addressCountry: "BR",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: -19.5187,
          longitude: -42.6269,
        },
        telephone: "+55-31-97314-4070",
        url: "https://www.colegioaprovaminas.com.br",
      },
      {
        "@type": "Course",
        name: "Técnico em Agente Comunitário de Saúde - Por Competência",
        description:
          "Capacitar o profissional para ser o elo vital entre a comunidade e os serviços de saúde, fortalecendo o SUS.",
        provider: { "@id": "https://www.colegioaprovaminas.com.br#organization" },
      },
      {
        "@type": "Course",
        name: "Técnico em Logística",
        description:
          "Formação para atuar em gestão da cadeia de suprimentos, transporte, estoque e processos logísticos.",
        provider: { "@id": "https://www.colegioaprovaminas.com.br#organization" },
      },
    ],
  };

  return (
    <Script
      id="schema-org"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}