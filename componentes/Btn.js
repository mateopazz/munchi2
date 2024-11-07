import { Text, TouchableOpacity, StyleSheet } from "react-native"

export default function Btn({ presionado, texto = "Boton por defecto" }) {
    return (
        <>
            <TouchableOpacity style={styles.boton}>
                <Text onPress={presionado} style={{color: 'white', textAlign: 'center'}}>
                    {texto}
                </Text>
            </TouchableOpacity>
        </>
    )
}


const styles = StyleSheet.create({
    boton: {
        padding: 10,
        backgroundColor: '#5d9d61',
        width: 150,
        borderRadius: 50,
        margin: 40,
    },
}
)