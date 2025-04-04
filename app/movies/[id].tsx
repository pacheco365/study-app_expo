import { images } from '@/constants/images';
import React from 'react';
import { View, Text, Image } from 'react-native';

const MovieDetails = () => {
    return (
        <View className='flex-1 bg-secondary'>
            {/* background image */}
            <Image 
            source={images.bg} className="flex-1 absolute w-full z-0" resizeMode='cover'
            />
        </View>
    );
};

export default MovieDetails;