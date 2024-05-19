import React, { useState } from 'react'
import { ImageBackground, StyleSheet, Text, View, Dimensions, Pressable } from 'react-native';
let moves = 0;
export default function Interface() {
    const backgroundImage = require('./tic_tak_toe_bg.png');

    const [one, setone] = useState(' ');
    const [two, settwo] = useState(' ');
    const [three, setthree] = useState(' ');
    const [four, setfour] = useState(' ');
    const [five, setfive] = useState(' ');
    const [six, setsix] = useState(' ');
    const [seven, setseven] = useState(' ');
    const [eight, seteight] = useState(' ');
    const [nine, setnine] = useState(' ');
    const [win, setwin] = useState(false);
    const [tie, settie] = useState(false);
    const [game, setgame] = useState(false);
    const [xandy, setxandy] = useState('Lets Start');
    const [turn, setturn] = useState(1);



    const winner = () => {
        if ((one === two && one === three && (one === 'X' || one === 'O')) ||
            (four === five && four === six && (four === 'X' || four === 'O')) ||
            (seven === eight && seven === nine && (seven === 'X' || seven === 'O'))) {
            setwin(true);
        }
        // Columns
        else if ((one === four && one === seven && (one === 'X' || one === 'O')) ||
            (two === five && two === eight && (two === 'X' || two === 'O')) ||
            (three === six && three === nine && (three === 'X' || three === 'O'))) {
            setwin(true);
        }
        // Diagonals
        else if ((one === five && one === nine && (one === 'X' || one === 'O')) ||
            (three === five && three === seven && (three === 'X' || three === 'O'))) {
            setwin(true);
        }
        else if (moves == 9) {
            settie(true)
        }
        else {
            settie(false)
        }
    }
    const x = () => {
        setxandy('0 players turn')
        setturn(2)
        moves = moves + 1
        winner()
    }
    const y = () => {
        setxandy('X players turn')
        setturn(1)
        moves = moves + 1
        winner()
    }
    const One = () => {
        if (game) {
            if (turn == 1) {
                setone('X')
                x()

            }
            else if (turn == 2) {
                setone('O')
                y()
            }

        }
    }
    const Two = () => {
        if (game) {
            if (turn == 1) {
                settwo('X')
                x()
            }
            else if (turn == 2) {
                settwo('O')
                y()
            }

        }
    }
    const Three = () => {
        if (game) {
            if (turn == 1) {
                setthree('X')
                x()
            }
            else if (turn == 2) {
                setthree('O')
                y()
            }

        }
    }
    const Four = () => {
        if (game) {
            if (turn == 1) {
                setfour('X')
                x()
            }
            else if (turn == 2) {
                setfour('O')
                y()
            }

        }
    }
    const Five = () => {
        if (game) {
            if (turn == 1) {
                setfive('X')
                x()
            }
            else if (turn == 2) {
                setfive('O')
                y()
            }

        }
    }
    const Six = () => {
        if (game) {
            if (turn == 1) {
                setsix('X')
                x()
            }
            else if (turn == 2) {
                setsix('O')
                y()
            }

        }
    }
    const Seven = () => {
        if (game) {
            if (turn == 1) {
                setseven('X')
                x()
            }
            else if (turn == 2) {
                setseven('O')
                y()
            }

        }
    }
    const Eight = () => {
        if (game) {
            if (turn == 1) {
                seteight('X')
                x()
            }
            else if (turn == 2) {
                seteight('O')
                y()
            }

        }
    }
    const Nine = () => {
        if (game) {
            if (turn == 1) {
                setnine('X')
                x()
            }
            else if (turn == 2) {
                setnine('O')
                y()
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
            settie(false)
            setwin(false)
        }
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={backgroundImage} style={styles.background} />
            <View style={styles.textCon1}>
                <Text style={styles.title1}>Tic-Tac-Toe Game</Text>
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
                        <Text style={[styles.turn1]}>{xandy} </Text>
                        <Text style={[styles.turn1]}>
                            {tie ? 'Game is Tied' : ''}
                            {win ? 'X won the game' : ''}
                        </Text>
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
        left: 50,
        height: 80,
        width: 300,
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
