import { icons } from '@/constants/icons';
import React from 'react';
import { View, Text, Image, TextInput } from 'react-native';

// a interface Props é usada para definir os tipos das props que o componente irá receber
// nesse caso, o componente SearchBar irá receber uma prop chamada placeholder que é do tipo string que desse forma 
// você consegue definir o texto que será exibido diretamente pelo input	
interface Props {
    placeholder: string;
    // a função onPress vem ao lado do sinal de interrogação para indicar que ela é opcional
    // o void é o tipo de retorno da função, nesse caso, a função não retorna nada, só indica que algo foi pressionado
    onPress?: () => void;
    value: string;
    onChangeText: (text: string) => void;
}

// o componente SearchBar é um componente funcional que recebe as props placeholder e onPress
// ({ placeholder, onPress }: Props) significa que o componente irá receber as props placeholder e onPress do tipo Props
// o componente retorna um View que contém um TextInput e um Image
const SearchBar = ({ placeholder, onPress, value, onChangeText }: Props) => {
    return (
        <View className='flex-row items-center bg-green_lighter-300 rounded-full px-5 py-4'>
            <Image source={icons.search} className='size-5' resizeMode='contain' tintColor='#ffffff'/>
            <TextInput
                onPress={onPress}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                placeholderTextColor='#ffffff'
                className='flex-1 ml-2 text-white'
            />
        </View>
    );
};

export default SearchBar;