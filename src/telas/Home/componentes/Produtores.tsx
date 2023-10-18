import React from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import Topo from "./Topo";
import Produtor from "./Produtor";
import useProdutores from "../../../hooks/useProdutores";

export interface ProdutorProps {
  nome: string;
  imagem: any;
  distancia: any;
  estrelas: any;
}

export default function Produtores() {
  const {titulo, lista} = useProdutores();

  const TopoLista = () => {
    return <>
      <Topo />
      <Text style={estilos.titulo}>{ titulo }</Text>
    </>
  }

  return (
    <FlatList
      data={ lista }
      renderItem={({ item }: { item: ProdutorProps }) => <Produtor {...item}/>}
      keyExtractor={({nome}) => nome}
      ListHeaderComponent={ TopoLista }
    />
  );
}

const estilos = StyleSheet.create({
    titulo: {
      fontSize: 20,
      lineHeight: 32,
      marginHorizontal: 16,
      marginTop: 16,
      fontWeight: 'bold',
      color: '#464646',
    },
    lista: {
      color: 'black',
    }
})