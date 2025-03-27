import { icons } from '@/constants/icons';
import { images } from '@/constants/images';
import { Tabs } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';


// Essa TabIcon é um componente que criei para ser usado no TabBar, ele recebe 3 props, focused, icon e title.
// O focused é um booleano que indica se a aba está selecionada ou não, o icon é a imagem que será exibida e o title é o texto que será exibido abaixo da imagem.
// Se a aba estiver selecionada, a imagem e o texto serão exibidos com uma cor diferente.
// Se a aba não estiver selecionada, a imagem e o texto serão exibidos com a cor padrão.

// Isso é feito para que não seja necessário criar um componente diferente para cada aba, apenas passando as props corretas.
const TabIcon = ({focused, icon, title}: any) => {
    if (focused) {
    return (
        <ImageBackground
            source={images.highlight}
            className='flex flex-row w-full  flex-1 min-w-[112px] min-h-16 mt-4 justify-center items-center rounded-full overflow-hidden'
    >
            <Image source={icon} tintColor="#f7cf07" className='size-5'/>
            <Text className='text-primary text-base font-semibold ml-2'>{title}</Text>
        </ImageBackground> 
    )
    }
    return (
        <View className='size-full justify-center items-center mt-4 rounded-full'>
            <Image source={icon} tintColor="#1f4a15"/>
        </View>
    )
}

// O Layout é o componente que contém as abas da aplicação, ele é responsável por renderizar as abas e definir as opções de cada aba.
// O componente Tabs é um componente do Expo Router que é responsável por renderizar as abas da aplicação, ele recebe um objeto com as opções de cada aba.
const Layout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarItemStyle: {
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                },
                tabBarStyle: {
                    backgroundColor: '#f7cf07',
                    borderRadius: 50,
                    marginHorizontal: 20,
                    marginBottom: 36,
                    height: 52,
                    position: 'absolute',
                    overflow: 'hidden',
                    borderWidth: 1,
                    borderColor: '#f7cf07',
                }
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'home',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon    
                            focused={focused}
                            icon={icons.home}
                            title="Home"
                        />
                    )
                }}
            />
            <Tabs.Screen
                name="buscar"
                options={{
                    title: 'Buscar',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon    
                            focused={focused}
                            icon={icons.search}
                            title="Buscar"
                        />
                    )
                }}
            />
            <Tabs.Screen
                name="favoritos"
                options={{
                    title: 'Favoritos',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon    
                            focused={focused}
                            icon={icons.star}
                            title="Favoritos"
                        />
                    )
                }}
            /><Tabs.Screen
            name="perfil"
            options={{
                title: 'Perfil',
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <TabIcon    
                        focused={focused}
                        icon={icons.person}
                        title="Perfil"
                    />
                )
            }}
        />
        </Tabs>
    );
};

export default Layout;