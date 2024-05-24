import React, { useState, useEffect } from 'react';
import { ImageBackground, StyleSheet, Text, View, Dimensions, Pressable } from 'react-native';

let moves = 0;

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
    const [win, setwin] = useState(false);
    const [tie, settie] = useState(false);
    const [game, setgame] = useState(false);
    const [xandy, setxandy] = useState('Lets Start');
    const [turn, setturn] = useState(1);
    const [gamewinner, setgamewinner] = useState('');

    useEffect(() => {
        if (game) {
            checkWinner();
        }
    }, [one, two, three, four, five, six, seven, eight, nine]);

    const Xwin = () => {
        setxandy('');
        setwin(true);
        setgame(false);
        setgamewinner('X');
    };

    const Owin = () => {
        setwin(true);
        setxandy('');
        setgame(false);
        setgamewinner('O');
    };

    const checkWinner = () => {
        if (
            (one === two && one === three && one === 'X') ||
            (four === five && four === six && four === 'X') ||
            (seven === eight && seven === nine && seven === 'X') ||
            (one === four && one === seven && one === 'X') ||
            (two === five && two === eight && two === 'X') ||
            (three === six && three === nine && three === 'X') ||
            (one === five && one === nine && one === 'X') ||
            (three === five && three === seven && three === 'X')
        ) {
            Xwin();
        } else if (
            (one === two && one === three && one === 'O') ||
            (four === five && four === six && four === 'O') ||
            (seven === eight && seven === nine && seven === 'O') ||
            (one === four && one === seven && one === 'O') ||
            (two === five && two === eight && two === 'O') ||
            (three === six && three === nine && three === 'O') ||
            (one === five && one === nine && one === 'O') ||
            (three === five && three === seven && three === 'O')
        ) {
            Owin();
        } else if (moves === 9) {
            setxandy('');
            settie(true);
        } else {
            setxandy(turn === 1 ? 'X players turn' : 'O players turn');
        }
    };

    const makeMove = (currentValue: string, setValue: React.Dispatch<React.SetStateAction<string>>) => {
        if (game && !win && !tie && currentValue === '') {
            if (turn === 1) {
                setValue('X');
                setturn(2);
                setxandy('O players turn');
            } else {
                setValue('O');
                setturn(1);
                setxandy('X players turn');
            }
            moves++;
        }
    };

    const Game = () => {
        setgame(!game);
        if (!game) {
            setxandy('X players turn');
        } else {
            setturn(1);
            setxandy('Lets Start');
            setone('');
            settwo('');
            setthree('');
            setfour('');
            setfive('');
            setsix('');
            setseven('');
            seteight('');
            setnine('');
            settie(false);
            setwin(false);
            setgamewinner('');
            moves = 0;
        }
    };

    return (
        <View style={styles.container}>
            <ImageBackground source={backgroundImage} style={styles.background} />
            <View style={styles.textCon1}>
                <Text style={styles.title1}>Tic-Tac-Toe Game</Text>
            </View>
            <View style={styles.gridContainer}>
                <Pressable style={styles.gridCell} onPress={() => makeMove(one, setone)}>
                    <Text style={styles.one}>{one}</Text>
                </Pressable>
                <Pressable style={styles.gridCell} onPress={() => makeMove(two, settwo)}>
                    <Text style={styles.one}>{two}</Text>
                </Pressable>
                <Pressable style={styles.gridCell} onPress={() => makeMove(three, setthree)}>
                    <Text style={styles.one}>{three}</Text>
                </Pressable>
                <Pressable style={styles.gridCell} onPress={() => makeMove(four, setfour)}>
                    <Text style={styles.one}>{four}</Text>
                </Pressable>
                <Pressable style={styles.gridCell} onPress={() => makeMove(five, setfive)}>
                    <Text style={styles.one}>{five}</Text>
                </Pressable>
                <Pressable style={styles.gridCell} onPress={() => makeMove(six, setsix)}>
                    <Text style={styles.one}>{six}</Text>
                </Pressable>
                <Pressable style={styles.gridCell} onPress={() => makeMove(seven, setseven)}>
                    <Text style={styles.one}>{seven}</Text>
                </Pressable>
                <Pressable style={styles.gridCell} onPress={() => makeMove(eight, seteight)}>
                    <Text style={styles.one}>{eight}</Text>
                </Pressable>
                <Pressable style={styles.gridCell} onPress={() => makeMove(nine, setnine)}>
                    <Text style={styles.one}>{nine}</Text>
                </Pressable>
            </View>
            <View>
                <Pressable onPress={Game}>
                    <View style={styles.startbtn}>
                        <Text style={styles.start}>{game ? 'Restart the Game' : 'Start the Game'}</Text>
                    </View>
                </Pressable>
                <View style={styles.turn}>
                    <Text style={styles.turn1}>{xandy}</Text>
                    <Text style={styles.turn1}>
                        {tie ? 'Game is Tied' : ''}
                        {gamewinner} {win ? '🏆' : ''}
                    </Text>
                </View>
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
