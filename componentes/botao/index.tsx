import React from 'react';
import { RectButton  } from 'react-native-gesture-handler';
import { View, Text } from 'react-native';

type Props = {
    texto: string;
}

export const Botao = ({ texto }: Props ) => {
    return (
        <View>
            <RectButton>
                <Text>
                    {texto}
                </Text>
            </RectButton>
        </View>
    )
}


