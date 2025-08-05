import { View, StyleSheet, Text, Pressable, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#792c2cff',
    paddingBottom: 20,
    color: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
   scrollContainer: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  tab: {
    marginRight: 20,
  },
  tabText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
        <ScrollView horizontal contentContainerStyle={styles.scrollContainer} showsHorizontalScrollIndicator={false}>
            <Pressable>
                <Link style={styles.tab} to='/repos'>
                    <Text style={styles.tabText}>Repositories</Text>
                </Link>
            </Pressable>
            <Link style={styles.tab} to="/signin">
                <Text style={styles.tabText}>Login to view repos</Text>
            </Link>
        </ScrollView>
    </View>
  );
};

export default AppBar;