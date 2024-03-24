import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

// Import your screen components
import ManageYourTask from './screens/ManageYourTask';
import OrganizeYourTasks from './screens/OrganizeYourTasks';
import CreateDailyRoutine from './screens/CreateDailyRoutine';

const screens = [ManageYourTask, CreateDailyRoutine, OrganizeYourTasks];
const numScreens = screens.length;

const App = ({ navigation }) => {
    const [page, setPage] = useState(0);

    const nextPage = () => {
        if (page < numScreens - 1) {
            setPage(page + 1);
        }
        else {
            navigation.navigate('BottomNavigator')
        }
    };

    const prevPage = () => {
        if (page > 0) {
            setPage(page - 1);
        }
    };

    const renderItem = ({ item }) => {
        const ScreenComponent = item;
        return <ScreenComponent />;
    };

    return (
        <View style={styles.mainContainer}>
            <FlatList
                data={[screens[page]]}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            // horizontal
            // pagingEnabled
            // showsHorizontalScrollIndicator={false}
            />
            <View style={styles.btnBox}>
                <TouchableOpacity onPress={prevPage}>
                    <Text style={styles.commonText}>{page > 0 ? 'Previous' : ''}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={nextPage} style={styles.nextBtn}>
                    <Text style={styles.nextTxt}>{page < numScreens - 1 ? 'Next' : 'Get Started'}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default App;


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#121212'
    },
    nextBtn: {
        paddingVertical: 12,
        paddingHorizontal: 24,
        backgroundColor: '#8875FF',
        borderRadius: 5,
    },
    nextTxt: {
        color: '#fff',
        fontSize: 16,
    },
    commonText: {
        color: 'gray',
        fontSize: 20,
    },
    btnBox: {
        display: 'flex',
        alignItems: 'center',
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    }
});