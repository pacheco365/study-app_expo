import MovieCard from '@/components/MovieCard';
import SearchBar from '@/components/searchbar';
import { icons } from '@/constants/icons';
import { images } from '@/constants/images';
import { fetchMovies } from '@/services/api';
import useFetch from '@/services/useFetch';
import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, ActivityIndicator } from 'react-native';

const Buscar = () => {
    //definindo a variavel query e estamos declarando que o estado atual/primario dela é " ".
     const [searchQuery, setSearchQuery ] = useState('');

    // Aqui estamos utilizando a useFetch que está usando fetchMovies e passando a query como parâmetro
    const {
       data: movies, 
       loading: moviesLoading, 
       error: moviesError,
       //Refetch eh usado para carregar os filmes, por isso o nome loadMovies
       refetch: loadMovies,
       reset
    }= useFetch(() => fetchMovies({
      query: searchQuery
    }), false)

    //Como o nome ja diz, estamos utilizando um efeito, efeito esse que se chama timeoutid que faz um timeout.
    // Se a query existir carrega os filmes passando aquela query, casi não tenha ele reseta, e la embaixo definimos o timeout de 500ms
    useEffect(() => {
        const timeoutId =  setTimeout(async () => {
            if (searchQuery.trim()) {
                await loadMovies();
            } else {
                reset()
            }
        }, 500);

        //logo retornamos o timeout de 500ms como configuramos e passamos a query para busca
        return () => clearTimeout(timeoutId);
    }, [searchQuery]);
      
    return (
        <View className='flex-1 bg-secondary'>
            <Image source={images.bg} className='flex-1 absolute w-full z-0' resizeMode='cover'/>
            
            <FlatList
                data={movies}
                renderItem={({item}) =><MovieCard{...item}/>} // Aqui o {...item} equivale a <MovieCard id={1} title="Movie Title" year={2023} />
                keyExtractor={(item) => item.id.toString()}
                className='px-5'
                numColumns={3}
                columnWrapperStyle={{
                    justifyContent: 'center',
                    gap: 16,
                    marginVertical: 16
                }}
                contentContainerStyle={{paddingBottom: 100}}
                ListHeaderComponent={
                    <>
                        <View className='w=full flex-row justify-center mt-20 items-center'>
                            <Image source={icons.logo} className='w-12 h-10'/>
                        </View>

                        <View className='my-5'>
                            <SearchBar 
                            placeholder='Search movies...'
                            value={searchQuery}
                            onChangeText={(text: string)=> setSearchQuery(text)}
                        />
                        </View>

                        {moviesLoading && (
                            <ActivityIndicator size='large' color='#ffffff' className='my-3'/>
                        )}

                        {moviesError && (
                            <Text>Error: {moviesError.message}</Text>
                        )}

                        {!moviesLoading && !moviesError && searchQuery.trim()
                         && movies?.length > 0 && (
                            <Text className='text-xl text-white font-bold'>
                                Search results for <Text className='text-primary'>{searchQuery}</Text>
                            </Text>
                        )}
                    </>
                }
                ListEmptyComponent={
                    !moviesLoading && !moviesError ? (
                        <View className='mt-10 px-5'>
                            <Text className='text-center text-white'>{searchQuery.trim() ? 'Nenhum filme foi encontrado' : 'Procure por um filme'}
                            </Text>
                        </View>
                    ) : null
                }
            />
        </View>
    );
}

export default Buscar;