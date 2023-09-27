import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";
import estrela from "../assets/estrela.png";
import estrelaCinza from "../assets/estrelaCinza.png";

interface EstrelaProps {
    onPress: any, 
    desabilitada: boolean, 
    preenchida: boolean,
    grande: boolean,
}  

export default function Estrela({ 
    onPress, 
    desabilitada = true, 
    preenchida,
    grande = false,
}: EstrelaProps) {
    const estilos = estilosFuncao(grande);
    const getImagem = () => {
        if (preenchida){
            return estrela;
        }
        return estrelaCinza;
    }

    return <TouchableOpacity
        onPress={onPress}
        disabled={desabilitada}
        >
        <Image style={estilos.estrela} source={getImagem()} />
    </TouchableOpacity>
}

const estilosFuncao = (grande: Boolean) => StyleSheet.create({
    estrela: {
        width: grande? 36 : 12,
        height: grande ? 36 : 12,
        marginRight: 2,
    }
})