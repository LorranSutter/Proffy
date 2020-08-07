import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'
import AsyncStorage from '@react-native-community/async-storage';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import api from '../../services/api';

import styles from './styles';

function TeacherList() {

    const [isFiltersVisible, setIsFiltersVisible] = useState(false);

    const [favorites, setFavorites] = useState<number[]>([]);

    const [teachers, setTeachers] = useState([]);
    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    function loadFavorites() {
        AsyncStorage.getItem('favorites')
            .then(res => {
                if (res) {
                    const favoritedTeachers = JSON.parse(res);
                    const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher) => teacher.id)
                    setFavorites(favoritedTeachersIds);
                }
            });
    }

    useFocusEffect(() => {
        loadFavorites();
    });

    function handleToggleFiltersVisible() {
        setIsFiltersVisible(!isFiltersVisible);
    }

    function handleFiltersSubmit() {

        loadFavorites();

        api.get('classes', {
            params: {
                subject,
                week_day,
                time
            }
        }).then(res => {
            setTeachers(res.data);
            setIsFiltersVisible(false);
        });
    }

    return (
        <View style={styles.container}>
            <PageHeader
                title='Available Proffys'
                headerRight={(
                    <BorderlessButton onPress={handleToggleFiltersVisible}>
                        <Feather name='filter' size={24} color='#FFF' />
                    </BorderlessButton>
                )}
            >
                {isFiltersVisible && (
                    <View style={styles.searchForm}>
                        <Text style={styles.label}>Subject</Text>
                        <TextInput
                            style={styles.input}
                            value={subject}
                            onChangeText={text => setSubject(text)}
                            placeholder="Which is the subject?"
                            placeholderTextColor='#C1BCCC'
                        />

                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Week day</Text>
                                <TextInput
                                    style={styles.input}
                                    value={week_day}
                                    onChangeText={text => setWeekDay(text)}
                                    placeholder="Which day?"
                                    placeholderTextColor='#C1BCCC'
                                />
                            </View>

                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Time</Text>
                                <TextInput
                                    style={styles.input}
                                    value={time}
                                    onChangeText={text => setTime(text)}
                                    placeholder="What time?"
                                    placeholderTextColor='#C1BCCC'
                                />
                            </View>
                        </View>

                        <RectButton style={styles.submitButton} onPress={handleFiltersSubmit}>
                            <Text style={styles.submitButtonText}>Filter</Text>
                        </RectButton>

                    </View>
                )}
            </PageHeader>

            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16
                }}
            >
                {teachers.map((teacher: Teacher) => {
                    return (
                        <TeacherItem
                            key={teacher.id}
                            teacher={teacher}
                            favorited={favorites.includes(teacher.id)}
                        />
                    )
                })}
            </ScrollView>
        </View>
    );
}

export default TeacherList;