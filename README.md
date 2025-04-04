# 🎬 Brazil Core

Aplicativo desenvolvido com **React Native + Expo** para acompanhar seus atletas brasileiros favoritos. O projeto conta com navegação por abas, busca, detalhes e um sistema de favoritos.

## 📁 Estrutura de Pastas

```
app/
├── (tabs)/                 # Telas principais de navegação
│   ├── _layout.tsx        # Layout da navegação por abas
│   ├── buscar.tsx         # Tela de busca
│   ├── favoritos.tsx      # Tela de favoritos
│   ├── index.tsx          # Tela inicial (Home)
│   └── perfil.tsx         # Tela de perfil do usuário
│
├── movies/
│   ├── [id].tsx           # Página de detalhes
│   └── _layout.tsx        # Layout para páginas
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
│   ├── MovieCard.tsx      # Componente de cartão
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

## Estado Atual
- **Testes com API de filme**
- **Criação das páginas**

## 🛠️ Tecnologias Utilizadas

- **React Native** com **Expo**
- **TypeScript**
- **React Navigation**
- **Axios**
- **Tailwind CSS (via nativewind)**
- **API de Filmes como teste** (ex: TMDb, OMDb)

## 🚀 Como Rodar o Projeto

1. **Clone o repositório**
   ```bash
   git clone https://github.com/pacheco365/study-app_expo.git
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
- [x] Listagem de atletas com destaque
- [x] Busca de atletas por nome
- [x] Página de detalhes com informações do atleta
- [x] Favoritar e desfavoritar atletas

## 📦 Scripts Úteis

```bash
npm run start       # Inicia o projeto com Expo
npm run android     # Executa no Android
npm run ios         # Executa no iOS
npm run web         # Executa no navegador
```

## 🧪 Testes

> Ainda não implementado.

## 💡 Próximos Passos

- [ ] Autenticação de usuário
- [ ] Armazenamento local com AsyncStorage
- [ ] Avaliação e comentários
- [ ] Utilização de uma API de esportes
- [ ] Tela de login e cadastro
- [ ] Página de notícias
- [ ] Sistema de notificação

---

📍 Projeto desenvolvido por **Gabriel Pacheco**.  
