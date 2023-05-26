import React from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'

import styles from './tabs.style'
import { SIZES } from '../../../constants' 

const Tabs = ({tabs, activeTab, setActiveTab}) => {
  const TabButton = ({name, activeTab, onHandleSearchtype}) => (
    <TouchableOpacity
      style={styles.btn(name, activeTab)}
      onPress={onHandleSearchtype}
    >
      <Text style={styles.btnText(name, activeTab)}>{name}</Text>
    </TouchableOpacity>
  )
  return (
    <View style={styles.container}>
      <FlatList
        data={tabs}
        renderItem={({item}) => (
          <TabButton 
            name={item}
            activeTab={activeTab}
            onHandleSearchtype={() => setActiveTab(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item}
        contentContainerStyle={{columnGap: SIZES.small / 2}}
      />
    </View>
  )
}

export default Tabs