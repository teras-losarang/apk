import React, { useState } from 'react'
import { Button, FlatList, Image, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { DefaultStyle } from '../constants/DefaultStyle'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Colors } from '../constants/Colors';

const ChatScreen = ({ navigation }: any) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const sendMessage = () => {
    if (message.trim() === '') {
      return;
    }
    setMessages(prevMessages => [...prevMessages, { id: Math.random().toString(), text: message }]);
    setMessage('');
  };

  return (
    <View style={DefaultStyle.defaultContainer}>
      <StatusBar translucent={true} backgroundColor={'transparent'} barStyle={'dark-content'} />
      <View style={[DefaultStyle.defaultHeader, { justifyContent: 'space-between', alignItems: 'center', width: '100%', backgroundColor: Colors.WHITE, paddingTop: 70, paddingBottom: 15, marginTop: 0, marginBottom: 0 }]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back-ios" size={16} color={Colors.BLACK} />
        </TouchableOpacity>
        <Text style={{ color: Colors.BLACK, fontWeight: '600', fontSize: 20 }}>Chat Kurir</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="call" size={20} color={Colors.GREEN_PRIMARY} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <View style={styles.messageContainer}>
            <Text style={styles.messageText}>{item.text}</Text>
            <Text style={styles.messageTime}>08:00</Text>
          </View>
        )}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.messages}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={text => setMessage(text)}
          placeholderTextColor={Colors.GREY}
          placeholder="Silahkan kirim pesan..."
        />
        <TouchableOpacity onPress={sendMessage}>
          <MaterialIcons name="send" size={20} color={Colors.BLUE_PRIMARY} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  messages: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    marginHorizontal: 20
  },
  messageContainer: {
    backgroundColor: Colors.GREY_THIRD,
    borderRadius: 8,
    padding: 10,
    maxWidth: '80%',
    alignSelf: 'flex-start',
    marginVertical: 5,
    gap: 10
  },
  messageText: {
    fontSize: 14,
    color: Colors.BLACK
  },
  messageTime: {
    fontSize: 10,
    color: Colors.BLACK,
    textAlign: 'right'
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  input: {
    flex: 1,
    marginRight: 10,
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    color: Colors.BLACK
  },
});

export default ChatScreen