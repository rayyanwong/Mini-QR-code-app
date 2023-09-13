import QRCode from 'react-native-qrcode-svg';
import {View, Text} from 'react-native';
import React from 'react';

const Qrview = (props: any) => {
  var QRdata = props.data;
  return (
    <View
      style={{
        alignItems: 'center',
        marginTop: 30,
      }}>
      <QRCode value={props.data} size={100} />
      <Text style={{marginTop: 15}}>This QR contains the data: {QRdata}</Text>
    </View>
  );
};

export default Qrview;
