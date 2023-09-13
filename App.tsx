import QRCode from 'react-native-qrcode-svg';
import React, {useState, useEffect} from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
  View,
} from 'react-native';
import Qrview from './qrview';

export default function App() {
  const [qrdata, setQRData] = useState('');
  const [textinput, settextinput] = useState('');
  const [generated, setgenerated] = useState(false); //will to used to show the generated qr code
  const [haserror, seterror] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{color: 'black', fontSize: 24}}>Mini QR code generator</Text>
      <TextInput
        placeholder="Enter value to put in QR code"
        value={textinput}
        onChangeText={settextinput}
      />
      <Button
        title="Submit"
        onPress={() => {
          if (textinput) {
            seterror(false);
            settextinput('');
            setQRData(textinput);
            setgenerated(true);
            console.log(textinput);
          } else {
            seterror(true);
            settextinput('');
          }
        }}
      />
      {generated && <Qrview data={qrdata} />}
      {!generated && haserror && (
        <View>
          <Text style={{color: 'red', fontSize: 16}}>
            Error please enter an input before submitting!
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#dedbf0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
