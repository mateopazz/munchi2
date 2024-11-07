import { Text, StyleSheet } from "react-native"

import Btn from "../componentes/Btn"
import ScreenUnoB from "./ScreenUnoB"
import ScrollV from "../componentes/Scroll"
import HorizontalScrollView from "../componentes/ScrollVIew"


export default function Home({ navigation }) {
    return (
        <>
            
            
            
            <Btn texto="Ver Favoritos" presionado={() => navigation.navigate("Favoritos")}></Btn>
            <Btn texto="Ver Paso a paso" presionado={() => navigation.navigate("PasoAPaso")}></Btn>
            <Btn texto="Ver Receta" presionado={() => navigation.navigate("Receta")}></Btn>
            
        </>
    )
}

