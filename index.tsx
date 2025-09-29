// pages/index.tsx
import React from "react";

export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
      }}
    >
      <h1>Sistema ERP 🚀</h1>
      <p>Deploy no Vercel funcionando com Next.js + Prisma.</p>
    </main>
  );
}
/pages
   └── index.tsx
/prisma
   └── schema.prisma
/package.json
/tsconfig.json
