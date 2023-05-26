import React,{useState} from 'react'
import { 
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList
 } from 'react-native'
import {useRouter} from 'expo-router'
import {icons, SIZES} from '../../../constants'
import styles from './welcome.style'

const Welcome = ({searchTerm, setSearchTerm, handleClick}) => {
  const router = useRouter()
  const [ activeJobType, setActiveJobType] = useState("Full-time")

  const jobTypes = ["Full-time",'Part-time','Contractor']

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Blaze</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder='What are you looking for?'
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image 
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList 
          data={jobTypes}
          // However this much is not enough to show the data 
          // We use the renderItem prop to define how each item is going to looklike
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}`)
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          // keyExtractor is similar to keys for maps in react
          contentContainerStyle={{columnGap: SIZES.small}}
          horizontal
        />
        {/* WE use a flatlist when we have more data to render */}
      </View>
    </View>
  )
}

export default Welcome