import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ProdutorProps } from "../telas/Home/componentes/Produtores";
import { carregaProdutores } from "../servicos/carregaDados";

export default function useProdutores() {
    const [titulo, setTitulo] : [string, Dispatch<SetStateAction<string>>] = useState<string>('');
    const [lista, setLista] : [ProdutorProps[], Dispatch<SetStateAction<ProdutorProps[]>>] = useState<ProdutorProps[]>([]);
    useEffect(() => {
        const retorno = carregaProdutores();
        retorno.lista.sort(
          (produtor1, produtor2) => produtor1.distancia - produtor2.distancia,
        );
        setTitulo(retorno.titulo);
        setLista(retorno.lista);
      }, []);
      
    return {
      titulo: titulo,
      lista: lista
    };
}