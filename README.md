# vercel-deploy

Projeto Next.js com relógio regressivo para o fim do semestre e timeline de projetos acadêmicos.

## Rodar localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Personalizar antes de publicar

1. Em `app/page.tsx`, altere `SEMESTER_END` para a data e hora corretas do fim do semestre.
2. Edite a lista `projects` com os semestres, títulos, descrições e competências reais.
3. Adicione as fotos em `public/images/` com os nomes `projeto-1.svg`, `projeto-2.svg` e `projeto-3.svg` (ou altere os caminhos no array) (ou altere os caminhos no array).
4. Para adicionar mais semestres, duplique um objeto dentro de `projects`.

## Publicar

Envie o projeto para um repositório GitHub chamado `vercel-deploy`, depois importe esse repositório em https://vercel.com/new. A Vercel detecta Next.js automaticamente; mantenha as configurações padrão e clique em Deploy.
