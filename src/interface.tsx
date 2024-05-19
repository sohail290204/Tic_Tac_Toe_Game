import React, { useState } from 'react'
import { ImageBackground, StyleSheet, Text, View, Dimensions, Pressable } from 'react-native';

export default function Interface() {
    const backgroundImage = require('./tic_tak_toe_bg.png');

    const [one, setone] = useState('');
    const [two, settwo] = useState('');
    const [three, setthree] = useState('');
    const [four, setfour] = useState('');
    const [five, setfive] = useState('');
    const [six, setsix] = useState('');
    const [seven, setseven] = useState('');
    const [eight, seteight] = useState('');
    const [nine, setnine] = useState('');
    const [restart, setrestart] = useState('Start');
    const [game, setgame] = useState(false);
    const [xandy, setxandy] = useState('Lets Start');
    const [turn, setturn] = useState(1);

    const One = () => {
        if (game) {
            if (turn == 1) {
                setone('X')
                setxandy('0 players turn')
                setturn(2)
            }
            else if (turn == 2) {
                setone('0')
                setxandy('X players turn')
                setturn(1)
            }

        }
    }
    const Two = () => {
        if (game) {
            if (turn == 1) {
                settwo('X')
                setxandy('0 players turn')
                setturn(2)
            }
            else if (turn == 2) {
                settwo('0')
                setxandy('X players turn')
                setturn(1)
            }

        }
    }
    const Three = () => {
        if (game) {
            if (turn == 1) {
                setthree('X')
                setxandy('0 players turn')
                setturn(2)
            }
            else if (turn == 2) {
                setthree('0')
                setxandy('X players turn')
                setturn(1)
            }

        }
    }
    const Four = () => {
        if (game) {
            if (turn == 1) {
                setfour('X')
                setxandy('0 players turn')
                setturn(2)
            }
            else if (turn == 2) {
                setfour('0')
                setxandy('X players turn')
                setturn(1)
            }

        }
    }
    const Five = () => {
        if (game) {
            if (turn == 1) {
                setfive('X')
                setxandy('0 players turn')
                setturn(2)
            }
            else if (turn == 2) {
                setfive('0')
                setxandy('X players turn')
                setturn(1)
            }

        }
    }
    const Six = () => {
        if (game) {
            if (turn == 1) {
                setsix('X')
                setxandy('0 players turn')
                setturn(2)
            }
            else if (turn == 2) {
                setsix('0')
                setxandy('X players turn')
                setturn(1)
            }

        }
    }
    const Seven = () => {
        if (game) {
            if (turn == 1) {
                setseven('X')
                setxandy('0 players turn')
                setturn(2)
            }
            else if (turn == 2) {
                setseven('0')
                setxandy('X players turn')
                setturn(1)
            }

        }
    }
    const Eight = () => {
        if (game) {
            if (turn == 1) {
                seteight('X')
                setxandy('0 players turn')
                setturn(2)
            }
            else if (turn == 2) {
                seteight('0')
                setxandy('X players turn')
                setturn(1)
            }

        }
    }
    const Nine = () => {
        if (game) {
            if (turn == 1) {
                setnine('X')
                setxandy('0 players turn')
                setturn(2)
            }
            else if (turn == 2) {
                setnine('0')
                setxandy('X players turn')
                setturn(1)
            }

        }
    }

    const Game = () => {
        setgame(!game)
        // console.log(game)
        if (!game) {
            setxandy('X players turn')
        }
        else {
            setturn(1)
            setxandy('Lets Start')
            setone('')
            settwo('')
            setthree('')
            setfour('')
            setfive('')
            setsix('')
            setseven('')
            seteight('')
            setnine('')
        }
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={backgroundImage} style={styles.background} />
            <View style={styles.textCon1}>
                <Text style={styles.title1}>Tic-Tak-Toe Game</Text>
            </View>
            <View style={styles.gridContainer}>
                <Pressable style={styles.gridCell} onPress={One}><Text style={styles.one}>{one}</Text></Pressable>
                <Pressable style={styles.gridCell} onPress={Two}><Text style={styles.one}>{two}</Text></Pressable>
                <Pressable style={styles.gridCell} onPress={Three}><Text style={styles.one}>{three}</Text></Pressable>
                <Pressable style={styles.gridCell} onPress={Four}><Text style={styles.one}>{four}</Text></Pressable>
                <Pressable style={styles.gridCell} onPress={Five}><Text style={styles.one}>{five}</Text></Pressable>
                <Pressable style={styles.gridCell} onPress={Six}><Text style={styles.one}>{six}</Text></Pressable>
                <Pressable style={styles.gridCell} onPress={Seven}><Text style={styles.one}>{seven}</Text></Pressable>
                <Pressable style={styles.gridCell} onPress={Eight}><Text style={styles.one}>{eight}</Text></Pressable>
                <Pressable style={styles.gridCell} onPress={Nine}><Text style={styles.one}>{nine}</Text></Pressable>
            </View>
            <View>
                <Pressable onPress={Game}>
                    <View style={styles.startbtn}>
                        <Text style={styles.start}>{game ? 'Restart the Game' : 'Start the Game'}</Text>
                    </View>
                    <View style={styles.turn} >
                        <Text style={[styles.turn1]}>{xandy}</Text>
                    </View>
                </Pressable>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    one: {
        fontSize: 45,
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        verticalAlign: 'middle',
        paddingTop: 10,
        color: '#000000',
        fontWeight: 'bold'
    },
    turn: {
        position: 'relative',
        top: 430,
        left: 90,
        height: 40,
        width: 200,
        backgroundColor: '#0068a7',
        borderRadius: 10,
    },
    turn1: {
        textAlign: 'center',
        fontSize: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    start: {
        fontSize: 30,
        height: 50,
        width: 280,
        backgroundColor: '#815aa7',
        textAlign: 'center',
        borderRadius: 10,

    },
    startbtn: {
        position: 'relative',
        top: 380,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title1: {
        fontSize: 50,
        color: '#beb5b1',
        fontWeight: 'bold',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',

    },
    textCon1: {
        height: 120,
        top: 30,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        textAlign: 'center'

    },

    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',

        marginTop: 122, // Adjust as needed

    },
    gridCell: {
        width: 82,
        height: 82,
        marginTop: 9,
        marginBottom: 9,
        marginRight: 8,
        marginLeft: 10,
        backgroundColor: '#beb5b1',
        borderRadius: 20
    },
});
