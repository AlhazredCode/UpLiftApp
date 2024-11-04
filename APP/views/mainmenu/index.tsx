import { StyleSheet, View, Text } from "react-native";
import PagerView from "react-native-pager-view";
import Recipes from "./Recipes";
import Menu from "./Menu";
import ProductList from "./ProductList";
const MainMenuPage = () => {
  return (
    <View style={styles.container}>
      <PagerView style={styles.pagerView} initialPage={1}>
        <View style={styles.page} key="1">
          <Recipes />
        </View>
        <View style={styles.page} key="2">
          <Menu />
        </View>
        <View style={styles.page} key="3">
          <ProductList />
        </View>
      </PagerView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pagerView: {
    flex: 1,
  },
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default MainMenuPage;
