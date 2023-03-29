import { useState } from "react";
import { Text, StyleSheet, View, TextInput, Button, Alert } from "react-native";

export default function Income({ navigation }) {
  const [incomPerHour, setIncomePerHour] = useState("");
  const [workHourPerDay, setworkHourPerDay] = useState("");
  const [taxRate, setaxRate] = useState("");
  const [savingsRate, setSavingRate] = useState("");

  const passData = () => {
    const annualWorkHourSummary = parseFloat(workHourPerDay) * 5 * 50;
    const annuallIncome =
      parseFloat(incomPerHour) * parseFloat(workHourPerDay) * 5 * 50;
    const taxtPayable = (parseFloat(taxRate) / 100) * parseFloat(annuallIncome);
    const annualSaving =
      (parseFloat(savingsRate) / 100) * parseFloat(annuallIncome);
    const spendableIncome =
      parseFloat(annuallIncome) -
      parseFloat(annualSaving) -
      parseFloat(taxtPayable);

    Alert.alert("Sending Nudes From Your Gallery", "You have no other option", [
      {
        text: "Yes",
        onPress: () => {
          navigation.navigate("Display", {
            annualWorkHourSummary,
            annuallIncome,
            taxtPayable,
            annualSaving,
            spendableIncome,
          });
          setIncomePerHour("");
          setworkHourPerDay("");
          setaxRate("");
          setSavingRate("");
        },
      },
      {
        text: "Should Be Yes",
        onPress: () => {
          setIncomePerHour("");
          setworkHourPerDay("");
          setaxRate("");
          setSavingRate("");
        },
      },
    ]);
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.txtTitle}>Input Values Accordingly</Text>
      </View>
      <View>
        <View style={styles.txtBoxContainer}>
          <Text>PHP Per Hour</Text>
          <View>
            <TextInput
              placeholder=""
              style={styles.txtBox}
              onChangeText={setIncomePerHour}
              value={incomPerHour}
            />
          </View>
        </View>
        <View style={styles.txtBoxContainer}>
          <Text>Work Hourse Per Day</Text>
          <View>
            <TextInput
              placeholder=""
              style={styles.txtBox}
              onChangeText={setworkHourPerDay}
              value={workHourPerDay}
            />
          </View>
        </View>
        <View style={styles.txtBoxContainer}>
          <Text>Tax Rate (%)</Text>
          <View>
            <TextInput
              placeholder=""
              style={styles.txtBox}
              onChangeText={setaxRate}
              value={taxRate}
            />
          </View>
        </View>
        <View>
          <Text>Saving Rate (%)</Text>
          <View style={styles.txtBoxContainer}>
            <TextInput
              placeholder=""
              style={styles.txtBox}
              onChangeText={setSavingRate}
              value={savingsRate}
            />
          </View>
        </View>
      </View>
      <View style={styles.btn}>
        <Button
          title="Send Nudes"
          onPress={() => {
            passData();
          }}
        />
      </View>
      <View style={styles.btn}>
        <Button
          title="Donate"
          onPress={() => {
            passData();
          }}
        />
      </View>
      <View style={styles.btn}>
        <Button
          title="Die"
          onPress={() => {
            passData();
          }}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80,
    alignItems: "center",
  },
  txtTitle: {
    fontSize: 30,
    fontWeight: "bold",
  },
  txtBoxContainer: {
    marginTop: 30,
    width: 370,
  },
  txtBox: {
    borderBottomWidth: 4,
  },
  btn: {
    width: 350,
    marginTop: 10,
  },
});