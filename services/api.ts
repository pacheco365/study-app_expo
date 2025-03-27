// Aqui é onde vamos fazer as chamadas para a API do TMDB
// O TMDB é um serviço de banco de dados de filmes e séries de TV, ele é muito utilizado para buscar informações sobre filmes e séries de TV.
// Aqui estamos definindo a URL base da API do TMDB e a chave de API que é necessária para fazer as chamadas para a API.
// Em API_KEY está sendo utilizado o process.env que nada mais é do que uma forma de colocar a chave de API de forma segura no código. 
// A chave de API está sendo pega de uma variável de ambiente que está sendo definida no arquivo .env.
export const TMDB_CONFIG = {
    BASE_URL: 'https://api.themoviedb.org/3', // A parte fixa da URL da API do TMDB
    API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,

    // Aqui estamos definindo o cabeçalho da requisição que será feita para a API do TMDB.
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`
    }


}

// Essa função é responsável por fazer a requisição para a API do TMDB e retornar os dados
// Ela recebe um objeto com a query que é o termo de busca que será utilizado para buscar os filmes.

export const fetchMovies = async ({query}: {query: string}) => {

    // Aqui estamos definindo a URL da requisição que será feita para a API do TMDB.
    // Se a query for definida, a URL será a URL de busca de filmes, se não, a URL será a URL de filmes populares.
    const endpoint = query
        ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}}`
        : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;

    // Aqui estamos fazendo a requisição para a API do TMDB.
    // A função fetch é uma função nativa do JavaScript que é utilizada para fazer requisições para um servidor.
    const response = await fetch(endpoint, {
        method: 'GET',
        headers: TMDB_CONFIG.headers,
    });

    // Se a requisição não for bem sucedida, um erro será lançado.
    if(!response.ok){
        // @ts-ignore
        throw new Error('Erro ao achar filmes', reponse.statusText);
    }

    // Se a requisição for bem sucedida, os dados serão retornados.
    // A função json() é uma função nativa do JavaScript que é utilizada para converter os dados da requisição em um objeto JavaScript.
    const data = await response.json();

    return data.results;
}
