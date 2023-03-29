import { Text, View, StyleSheet, Button, Alert } from "react-native";

export default function Display({ route, navigation }) {
  const { annualWorkHourSummary } = route.params;
  const { annuallIncome } = route.params;
  const { taxtPayable } = route.params;
  const { annualSaving } = route.params;
  const { spendableIncome } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.dis}>
        <View style={styles.textALignDis}>
          <Text style={styles.text}>Annual Work Summary</Text>
          <Text style={styles.res}>{annualWorkHourSummary}HRS</Text>
        </View>
        <View style={styles.textALignDis}>
          <Text style={styles.text}>Annual Gross Income</Text>
          <Text style={styles.res}>{annuallIncome}PHP</Text>
        </View>
        <View style={styles.textALignDis}>
          <Text style={styles.text}>Annucal Tax Payable</Text>
          <Text style={styles.res}>{taxtPayable}PHP</Text>
        </View>
        <View style={styles.textALignDis}>
          <Text style={styles.text}>Annual Savings</Text>
          <Text style={styles.res}>{annualSaving}PHP</Text>
        </View>
        <View style={styles.textALignDis}>
          <Text style={styles.text}>Spendable Income</Text>
          <Text style={styles.res}>{spendableIncome}PHP</Text>
        </View>
      </View>
      <Button
        title="Home"
        onPress={() => {
          Alert.alert("Go Back", "Are sure to go back?", [
            {
              text: "Yes",
              onPress: () => {
                navigation.goBack();
              },
            },
            { text: "Should Be Yes!" },
          ]);
        }}
      />

    <Button
        title="Contact"
        onPress={() => {
          Alert.alert("Go Back", "Are sure to go back?", [
            {
              text: "Yes",
              onPress: () => {
                navigation.goBack();
              },
            },
            { text: "Should Be Yes!" },
          ]);
        }}
      />

    <Button
        title="Thiss"
        onPress={() => {
          Alert.alert("Go Back", "Are sure to go back?", [
            {
              text: "Yes",
              onPress: () => {
                navigation.goBack();
              },
            },
            { text: "Edi DOnt" },
          ]);
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    textAlign: "justify",
  },
  text: {
    fontSize: 20,
    textAlign: "justify",
    fontWeight: "bold",
    marginRight: 30,
  },
  res: {
    fontSize: 20,
    fontWeight: "bold",
  },
  dis: {
    display: "flex",
    justifyContent: "space-between",
    width: 400,
  },
  textALignDis: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});