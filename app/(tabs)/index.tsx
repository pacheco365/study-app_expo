import { Text, View, Image, ScrollView, ActivityIndicator, FlatList } from "react-native";
import { Link } from "expo-router";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";
import SearchBar from "@/components/searchbar";
import { useRouter } from "expo-router";
import { fetchMovies } from "@/services/api";
import useFetch from "@/services/useFetch";
import MovieCard from "@/components/MovieCard";

export default function Index() {
  const router = useRouter();

  // Aqui estamos utilizando a useFetch que está usando fetchMovies e passando a query como parâmetro
  const {
     data: movies, 
     loading: moviesLoading, 
     error: moviesError }= useFetch(() => fetchMovies({
    query: ''}))

  return (
    <View className="flex-1 bg-secondary">
      <Image source={images.bg} className="absolute w-full z-0"/>

      <ScrollView className="flex-1 px-5"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{minHeight: '100%', paddingBottom: 10}}>
        <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto"/>
        {/* Aqui se moviesLoading for verdadeiro, um ActivityIndicator será exibido, que é o ngcinho de carregamento */}
        {/* Mais embaixo,  depois de ter passado pelo loading e não der erro, ele mostrará a tela padrão da home com os filmes a mostra trazidos pela API */}
        {moviesLoading ? (
          <ActivityIndicator
        size="large"
        color="#ffffff"
        className="mt-10 self-center"
          />
        ): moviesError ? (
          <Text>Error: {moviesError?.message}</Text>
        ): (
          <View className="flex-1 mt-5">
        <SearchBar
          onPress={() => router.push("/buscar")}
          placeholder="Busque por um filme"
        />

        <>
          <Text className="text-lg text-white font-bold mt-5 mb-3">Latest Movies</Text>
          <FlatList
            data={movies}
            renderItem={({item}) => (
          <MovieCard
            {...item}
          />
            )}
            keyExtractor={(item) => item.id.toString()}
            numColumns={3}
            columnWrapperStyle={{
              justifyContent: 'flex-start',
              gap: 20,
              paddingRight: 5,
              marginBottom: 10
            }}
            className="mt-2 pb-32"
            scrollEnabled={false}
          />
        </>
          </View>
        )}
      </ScrollView>
    </View>
  );
}