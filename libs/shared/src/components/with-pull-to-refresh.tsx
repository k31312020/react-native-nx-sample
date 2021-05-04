import React, {Component} from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native';
import { RefreshControl } from 'react-native';


const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

const WithPullToRefresh = (WrappedComponent) => {

    return ({...otherProps}) => {
      console.log('other: ', otherProps)
        const [refreshing, setRefreshing] = React.useState(false);
        const onRefresh = React.useCallback(() => {
            setRefreshing(true);
            wait(2000).then(() => setRefreshing(false));
          }, []);
        return (
        <SafeAreaView>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
        <WrappedComponent {...otherProps}/>
        </ScrollView>
      </SafeAreaView>);
    }    
}

export default WithPullToRefresh;