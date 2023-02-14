import { StyleSheet, View, Text } from "react-native";
import { SelectList } from 'react-native-dropdown-select-list'
import { Ionicons } from '@expo/vector-icons'
import DateTimePicker from '@react-native-community/datetimepicker'
import { useState } from "react";

const SubmitScreen = () => {
    const [date, setDate] = useState(new Date(1672599840000));
    const [show, setShow] = useState(false);
    const [surgery, setSurgery] = useState('')

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
    };

    const selectData = [
        {key: 'Surgery1', value: 'Surgery1'},
        {key: 'Surgery2', value: 'Surgery2'},
        {key: 'Surgery3', value: 'Surgery3'},
        {key: 'Surgery4', value: 'Surgery4'},
        {key: 'Surgery5', value: 'Surgery5'}

    ]


    return (
        <View style={styles.container}>
            <View style={styles.dropdownContainer}>
                <SelectList 
                    arrowicon={<Ionicons name="caret-down" size={20} ></Ionicons>}
                    setSelected={(val) => setSurgery(val)}
                    data={selectData}
                    save="value"
                    inputStyles={{ fontSize: 20}}
                    dropdownTextStyles={{ fontSize: 20}}
                    placeholder={'Select Surgery  '}
                    search={false}
                    searchPlaceholder={'Select Surgery'}
                    boxStyles={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
                />
            </View>
            <View style={styles.dropdownContainer}>
                <DateTimePicker
                    style={styles.datePicker}
                    testID="dateTimePicker"
                    value={date}
                    is24Hour={true}
                    onChange={onChange}
                />
            </View>
        </View>
    )
}
export default SubmitScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    },
    dropdownContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    datePicker: {
        flex: 1
    }
})
