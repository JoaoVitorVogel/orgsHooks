import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { carregaProdutores } from "../../../servicos/carregaDados";
import Topo from "./Topo";
import Produtor from "./Produtor";

export interface ProdutorProps {
  nome: string;
  imagem: any;
  distancia: any;
  estrelas: any;
}

export default function Produtores() {
  const [titulo, setTitulo] = useState<string>('');
  const [lista, setLista] = useState<ProdutorProps[]>([]);

  useEffect(() => {
    const retorno = carregaProdutores();
    setTitulo(retorno.titulo);
    setLista(retorno.lista);
  }, []);

  const TopoLista = () => {
    return <>
      <Topo />
      <Text style={estilos.titulo}>{ titulo }</Text>
    </>
  }

  return (
    <FlatList
      data={lista}
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