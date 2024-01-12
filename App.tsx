import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ActivityIndicator, FlatList } from 'react-native';
import  { useState } from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


export default function App() {

  const [count, setCount] = useState<number>(0)

  
  const [ imageURL, setImageURL ] = useState<string>('https://thptphanvantri.edu.vn/hinh-anh-dang-yeu-cua-be/imager_792.jpg')

  const [inputURL, setInputURL] = useState<string>('')

  const [loading, setLoading] = useState<boolean>(false)

  const loadImage = () => {
    setLoading(true)
    setImageURL(inputURL)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
    
  }

  const items = [
    {
      name: "Nguyễn Văn A",
      studentID: "1234",
      className: "65CS1",
      address: "Hà Nội"
    },
    {
      name: "Nguyễn Văn B",
      studentID: "4567",
      className: "65CS3",
      address: "Nam Định"
    },
    {
      name: "Nguyễn Thị C",
      studentID: "7890",
      className: "65CS1",
      address: "Phú Thọ"
    },
    {
      name: "Phạm Văn Test",
      studentID: "6666",
      className: "65CS2",
      address: "Hà Nam"
    },
    {
      name: "Lê Kiểm Tra",
      studentID: "9999",
      className: "65CS2",
      address: "Hà Nam"
    },
    {
      name: "Nguyễn Văn A",
      studentID: "1234",
      className: "65CS1",
      address: "Hà Nội"
    },
    {
      name: "Nguyễn Văn B",
      studentID: "4567",
      className: "65CS3",
      address: "Nam Định"
    },
    {
      name: "Nguyễn Thị C",
      studentID: "7890",
      className: "65CS1",
      address: "Phú Thọ"
    },
    {
      name: "Phạm Văn Test",
      studentID: "6666",
      className: "65CS2",
      address: "Hà Nam"
    },
    {
      name: "Lê Kiểm Tra",
      studentID: "9999",
      className: "65CS2",
      address: "Hà Nam"
    },
    {
      name: "Nguyễn Văn A",
      studentID: "1234",
      className: "65CS1",
      address: "Hà Nội"
    },
    {
      name: "Nguyễn Văn B",
      studentID: "4567",
      className: "65CS3",
      address: "Nam Định"
    },
    {
      name: "Nguyễn Thị C",
      studentID: "7890",
      className: "65CS1",
      address: "Phú Thọ"
    },
    {
      name: "Phạm Văn Test",
      studentID: "6666",
      className: "65CS2",
      address: "Hà Nam"
    },
    {
      name: "Lê Kiểm Tra",
      studentID: "9999",
      className: "65CS2",
      address: "Hà Nam"
    },
  ]

  const onSelectStudent = (item) => {
    alert(item.name)
  }

  const renderStudentItem = ({item}) => {
    return (
    <TouchableOpacity onPress={() => { onSelectStudent(item) }}>
    <View style={{marginBottom: 10, borderBottomColor: "#eee", borderBottomWidth: 1, paddingVertical: 10}}>
      <Text style={{fontSize: 15, color: "#000"}}>{item.studentID}</Text>
      <Text>{item.name}</Text>
      <Text>{item.className}</Text>
      <Text>{item.address}</Text>
    </View>
    </TouchableOpacity>)
  }

  return ( 
      <FlatList
        style={styles.container}
        data={items}
        renderItem={renderStudentItem}
        keyExtractor={(data) => data.studentID}
      />)
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      
      paddingHorizontal: 25
    },
    mainImage: {
      width: 90,
      height: 80
    },
    mainText: {
      fontSize: 22,
      fontWeight: "900",
      marginVertical: 20,
      color: "#5f1ad0"
    },
    subText: {
      fontSize: 15,
      marginBottom: 15,
      textAlign: "center",
      fontWeight: "700"
    },
    button: {
      width: "100%",
      padding: 15,
      borderColor: "#eee",
      borderRadius: 5,
      borderWidth: 2,
      alignItems: "center",
      marginTop: 10
    },
    loginBtn: {
      backgroundColor: "#560cce"
    },
    loginLabel: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "600"
    },
    signUpLabel: {
      color: "#560cce",
      fontSize: 16,
      fontWeight: "600"
    }
})
