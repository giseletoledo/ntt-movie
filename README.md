# 🎬 NTTFlix — Movie App

Aplicação Angular para busca e visualização de filmes utilizando a API pública [OMDB](https://www.omdbapi.com/).

<p align="center">
  <img width="70%" src="https://github.com/giseletoledo/ntt-movie/blob/main/nttflix_agularapp.png" alt="Tela da página listando filmes">
</p>

---

## Funcionalidades

- **Busca de filmes** por título em tempo real
- **Detalhes do filme** — poster, ano, gênero e sinopse
- **Favoritos** — marque filmes e filtre sua lista
- **Poster padrão** quando a imagem não está disponível

---

## Tecnologias

| Tecnologia | Versão |
|---|---|
| Angular | 21 (criado na v17) |
| TypeScript | — |
| Bootstrap | 5 |
| OMDB API | — |
| Git / GitHub | — |

---

## 🚀 Como rodar o projeto

```bash
# Clone o repositório
git clone https://github.com/giseletoledo/ntt-movie.git

# Instale as dependências
npm install

# Configure sua API Key no arquivo movie.service.ts
private apiKey = 'SUA_API_KEY';

# Rode o projeto
npm start
```

Acesse em: `http://localhost:4200`

> Para obter uma API Key gratuita: [omdbapi.com/apikey.aspx](https://www.omdbapi.com/apikey.aspx)

---

## 📁 Estrutura Principal

```
src/app/
├── content/          # Listagem e busca de filmes
├── movie-detail/     # Detalhes do filme
├── card/             # Componente de card do filme
├── movie.service.ts  # Consumo da API OMDB
└── favorites.service.ts  # Gerenciamento de favoritos
```

---

## 📄 Licença

Projeto desenvolvido para fins educacionais.