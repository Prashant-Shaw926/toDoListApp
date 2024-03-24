import { View, Text, StyleSheet, Image, Pressable, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Modal from "react-native-modal";
import { useState, useEffect } from 'react';
import { Checkbox } from 'react-native-paper';
import { useFocusEffect } from '@react-navigation/native';
const logoImg = require('/Users/Prashant/projects/RNFirstProject/RNNewProject/assets/icons/sort.png')
const profileImg = require('/Users/Prashant/projects/RNFirstProject/RNNewProject/assets/img/pp.png')
const midSectionImg = require('/Users/Prashant/projects/RNFirstProject/RNNewProject/assets/img/checklist.png')

const Tab = createBottomTabNavigator();

export default function MainScreen({ navigation, props }) {

    const [checked, setChecked] = useState(false);
    const [visible, setVisible] = useState(false);
    const [visibleEdit, setVisibleEdit] = useState(false);
    const [errors, setErrors] = useState({});
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    const addTodo = () => {
        let errors = {}
        if (newTodo.trim() !== '') {
            setTodos([...todos, { id: Date.now().toString(), text: newTodo, checked: false }]);
            setNewTodo('');
        }
        if (newTodo.length === 0) {
            const validation = () => {
                if (!newTodo) errors.newTodo = "Title is required!"
                setErrors(errors);
                return Object.keys(errors).length === 0;
            }
            validation();

        }
        else {
            setVisible(false);
            errors.newTodo = '';
            setErrors(errors);
        }
    };

    const handleCheckboxPress = (todoId) => {
        const updatedTodos = todos.map((todo) =>
            todo.id === todoId ? { ...todo, checked: !todo.checked } : todo
        );
        setTodos(updatedTodos);
    };


    const deleteTodoF = (todoId) => {
        const updatedTodos = todos.filter((todo) => todo.id !== todoId);
        setTodos(updatedTodos);
    };



    // useFocusEffect(
    //     React.useCallback(() => {

    //         setTimeout(() => {
    //             setVisible(true);
    //         }, 100);


    //         return () => {

    //         };
    //     }, [])
    // );




    return (
        <View style={styles.mainContainer}>
            <View style={styles.navBar}>
                <View><Image style={styles.logoI} source={logoImg} /></View>
                <View><Text style={styles.title}>Home</Text></View>
                <View><Pressable onPress={() => navigation.navigate('Profile')}><Image style={styles.profile} source={profileImg} /></Pressable></View>
            </View>
            <View style={styles.midSection}>
                <View style={styles.midSectionTodo}>
                    {todos.length > 0 ? (
                        todos.map((todo) => (
                            <View key={todo.id} style={styles.todoItem}>
                                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                    <Checkbox
                                        style={styles.todoCheckbox}
                                        status={todo.checked ? 'checked' : 'unchecked'}
                                        onPress={() => handleCheckboxPress(todo.id)}
                                    />
                                    <Text style={styles.todoText}>{todo.text}</Text>
                                </View>

                                <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
                                    <TouchableOpacity
                                        style={styles.editTodo}
                                        onPress={() => setVisibleEdit(true)}
                                    >
                                        <Text style={styles.midSectionTxt2}>Edit</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={styles.deleteTodo}
                                        onPress={() => deleteTodoF(todo.id)}
                                    >
                                        <Text style={styles.midSectionTxt2}>Delete</Text>
                                    </TouchableOpacity>
                                </View>


                            </View>
                        ))
                    ) : (
                        <View style={styles.midSectionDefault}>
                            <Image style={styles.midSectionImgS} source={midSectionImg} />
                            <View style={styles.midSectionTxtBox}>
                                <Text style={styles.midSectionTxt1}>What do you want to do today?</Text>
                                <Text style={styles.midSectionTxt2}>Tap + to add your tasks</Text>
                                <TouchableOpacity style={styles.addBtn} onPress={() => setVisible(true)}><Text style={styles.addBtnTxt}>+</Text></TouchableOpacity>
                            </View>
                        </View>
                    )}
                </View>
            </View>
            <Modal style={styles.bottomSheetBox} isVisible={visible} onBackButtonPress={() => { setVisible(false) }}>
                <View style={styles.bottomSheet}>
                    <View>
                        <Text style={styles.addTask}>Add Task</Text>
                        <TextInput onChangeText={setNewTodo} placeholder='Title of the task' style={styles.addTaskInput} />
                        {
                            errors.newTodo ? <Text style={styles.errorTxt}>{errors.newTodo}</Text> : null
                        }
                        <TextInput placeholder='Description (Optional)' style={styles.addTaskDesInput} />
                        <Pressable style={styles.nextBtn} onPress={addTodo}><Text style={styles.nextTxt}>Add</Text></Pressable>
                    </View>
                </View>
            </Modal>
            <Modal style={styles.bottomEditSheetBox} isVisible={visibleEdit} onBackButtonPress={() => { setVisibleEdit(false) }}>
                <View style={styles.bottomEditSheet}>
                    <View style={styles.btnHeaderBox}>
                        <TouchableOpacity onPress={() => setVisibleEdit(false)} style={styles.btnClose}><Text style={styles.btnTxt}>Close</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.btnRepeat}><Text style={styles.btnTxt}>Repeat</Text></TouchableOpacity>
                    </View>
                    <View>
                        <View></View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 10,
        backgroundColor: '#121212'
    },
    navBar: {
        display: 'flex',
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    logoI: {
        width: 50,
        height: 50,
    },
    title: {
        color: '#fff',
        fontSize: 24,
    },
    midSectionDefault: {
        display: 'flex',
        marginVertical: 30,
        alignItems: 'center',
    },
    midSectionTxtBox: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
    },
    midSectionTxt1: {
        color: '#fff',
        fontSize: 20,
    },
    midSectionTxt2: {
        color: '#fff',
        fontSize: 16,
    },
    bottomSheetBox: {
        width: '100%',
        marginLeft: 0,
        marginBottom: 0,
    },
    bottomSheet: {
        flex: 1,
        position: 'absolute',
        bottom: 0,
        height: '70%',
        width: '100%',
        padding: '5%',
        borderRadius: 5,
        backgroundColor: '#fff'
    },
    errorTxt: {
        color: 'red',
        fontSize: 16,
        fontWeight: 'bold'
    },
    addTask: {
        fontSize: 16,
        fontWeight: '500'
    },
    addTaskInput: {
        paddingHorizontal: 10,
        borderWidth: 1,
        marginVertical: 10,
        borderRadius: 5,
    },
    addTaskDesInput: {
        paddingHorizontal: 10,
        borderWidth: 1,
        borderRadius: 5,
        height: 100,
    },
    nextBtn: {
        marginVertical: 10,
        paddingVertical: 12,
        alignItems: 'center',
        backgroundColor: '#8875FF',
        borderRadius: 5,
    },
    nextTxt: {
        color: '#fff',
        fontSize: 16,
    },
    midSectionTodo: {
        display: 'flex',
        gap: 10,
        marginVertical: 40,
    },
    todoItem: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 5,
    },
    todoText: {
        color: '#fff',
        fontSize: 18,
    },
    deleteTodo: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
        height: 30,
        width: 70,
        borderRadius: 5,
    },
    editTodo: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2ecc71',
        height: 30,
        width: 70,
        borderRadius: 5,
    },
    addBtn: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    addBtnTxt: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 28,
    },
    bottomEditSheetBox: {
        width: '100%',
        marginLeft: 0,
        marginBottom: 0,
    },
    bottomEditSheet: {
        flex: 1,
        position: 'absolute',
        bottom: 0,
        height: '100%',
        width: '100%',
        padding: '5%',
        borderRadius: 5,
        backgroundColor: '#fff'
    },
    btnHeaderBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    btnClose: {
        // backgroundColor: '#121212',
        height: 25,
        // width: 30,
    },
    btnRepeat: {
        // backgroundColor: '#121212',
        height: 25,
        // width: 30,
    },
    btnTxt: {
        color: '#000',
    },
});