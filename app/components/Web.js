import React from 'react';
import {StyleSheet,WebView,View} from 'react-native';

import Loading from './Loading';
import {WEB} from '../constants/common';

const Web = ({
  shopId,commodityId
}) => {
  let url = '';
  if(commodityId){
     url = `${WEB}/web-commodity/${shopId}/${commodityId}`;
  }else{
     url = `${WEB}/web-shop/${shopId}`;
  }

  return (
      <View style={styles.container}>
        <WebView
          ref={(ref) => {
            this.webview = ref;
          }}
          style={styles.base}
          source={{ uri: url }}
          javaScriptEnabled
          domStorageEnabled
          startInLoadingState
          scalesPageToFit
          decelerationRate="normal"
          onShouldStartLoadWithRequest={() => {
            const shouldStartLoad = true;
            return shouldStartLoad;
          }}
          onNavigationStateChange={()=>{}}
          renderLoading={()=><Loading visible={true}/>}
        />
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    width:'100%',
    flex: 1,
    backgroundColor: '#FFF',
  },
  base:{
    width:'100%',
    height:'100%'
  }
});


export default Web;
