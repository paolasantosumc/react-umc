# Hello World com React

Projeto criado conforme a apresentação: primeiro projeto React com Vite, alteração do título principal no `src/App.jsx` e publicação no Vercel.

## Requisitos

- Node.js (versão LTS)
- npm

## Como executar

1. Extraia o arquivo ZIP.
2. Abra a pasta `hello-world-react` no VS Code.
3. Abra o terminal nessa pasta e execute:

```bash
npm install
npm run dev
```

4. Acesse o endereço exibido no terminal (normalmente `http://localhost:5173`).

## Personalizar o nome

No arquivo `src/App.jsx`, altere somente o texto do elemento `h1`:

```jsx
<h1>Hello World, Paola Santos!</h1>
```

Substitua `Paola Santos` pelo nome que deve aparecer no trabalho.

## Gerar a versão de produção

```bash
npm run build
```

O Vite criará a pasta `dist`.

## Publicar no Vercel

1. Crie uma conta ou entre em https://vercel.com/.
2. Envie este projeto para um repositório GitHub.
3. No Vercel, escolha **Add New → Project** e importe o repositório.
4. Confira as configurações:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Clique em **Deploy**.
6. Ao finalizar, o Vercel fornecerá o link público do projeto.

Também é possível publicar usando a CLI do Vercel, depois de instalar e autenticar a ferramenta:

```bash
npm install -g vercel
vercel
```
