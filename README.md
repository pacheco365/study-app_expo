# 🎬 MovieApp

Aplicativo desenvolvido com **React Native + Expo** para explorar e salvar filmes favoritos. O projeto conta com navegação por abas, busca, detalhes de filmes e um sistema de favoritos.

## 📁 Estrutura de Pastas

```
app/
├── (tabs)/                 # Telas principais de navegação
│   ├── _layout.tsx        # Layout da navegação por abas
│   ├── buscar.tsx         # Tela de busca de filmes
│   ├── favoritos.tsx      # Tela de filmes favoritos
│   ├── index.tsx          # Tela inicial (Home)
│   └── perfil.tsx         # Tela de perfil do usuário
│
├── movies/
│   ├── [id].tsx           # Página de detalhes de um filme
│   └── _layout.tsx        # Layout para páginas de filme
│
├── assets/
│   ├── fonts/             # Fontes utilizadas
│   └── icons/             # Ícones do projeto
│   └── images/            # Imagens (logo, fundo, etc.)
│       ├── bg.png
│       ├── highlight.png
│       ├── logo.png
│       └── rankingGradient.png
│
├── components/
│   ├── MovieCard.tsx      # Componente de cartão de filme
│   └── SearchBar.tsx      # Componente de busca
│
├── constants/             # Constantes reutilizáveis
│
├── interfaces/            # Tipagens e contratos
│   └── interfaces.d.ts
│
├── services/              # Camada de serviços e APIs
│   ├── api.ts             # Configuração da API
│   └── useFetch.ts        # Hook personalizado para requisições
│
├── types/                 # Tipagens auxiliares
│
├── globals.css            # Estilos globais
```

## 🛠️ Tecnologias Utilizadas

- **React Native** com **Expo**
- **TypeScript**
- **React Navigation**
- **Axios**
- **Tailwind CSS (via nativewind)**
- **API de Filmes** (ex: TMDb, OMDb)

## 🚀 Como Rodar o Projeto

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seuusuario/movieapp.git
   cd movieapp
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente**
   Crie um arquivo `.env` com as chaves da API:
   ```
   API_URL=https://suaapi.com
   API_KEY=sua_chave
   ```

4. **Inicie o projeto**
   ```bash
   npx expo start
   ```

## 📱 Funcionalidades

- [x] Navegação por abas (Home, Buscar, Favoritos, Perfil)
- [x] Listagem de filmes com destaque
- [x] Busca de filmes por nome
- [x] Página de detalhes com informações do filme
- [x] Favoritar e desfavoritar filmes

## 📦 Scripts Úteis

```bash
npm run start       # Inicia o projeto com Expo
npm run android     # Executa no Android
npm run ios         # Executa no iOS
npm run web         # Executa no navegador
```

## 🧪 Testes

> Ainda não implementado. Sinta-se à vontade para contribuir adicionando testes com **Jest** ou **React Native Testing Library**!

## 💡 Próximos Passos

- [ ] Autenticação de usuário
- [ ] Armazenamento local com AsyncStorage
- [ ] Avaliação e comentários em filmes
- [ ] Tela de login e cadastro

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

📍 Projeto desenvolvido por **[Seu Nome]**.  
Contribuições são bem-vindas!
