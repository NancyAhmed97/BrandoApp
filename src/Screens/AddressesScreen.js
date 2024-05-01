import { View, Text, Dimensions, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CommonHeader from '../Common/CommonHeader'
import ProfileHeader from '../Common/ProfileHeader'
import axios from 'axios';

const AddressesScreen = ({ route }) => {
  const { addState } = route.params
  //   const [country, setCountry] = useState('');
  //   const [region, setRegion] = useState('');
  //   const selectCountry = (val) => {
  //     setCountry(val)
  //   }

  //   const selectRegion = (val) => {
  // setRegion(val) 
  //  }
  useEffect(() => {
    const x = async () => {
      const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/countries/Egypt/regions/CA/cities';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '5d2d3ecc48msh9f99f31505a6d00p1e231bjsn43cc0aa39fb1',
          'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(JSON.parse(result).data);
      } catch (error) {
        console.error(error);
      }
    }
    x()
  }, [])

  return (
    <View
      style={{
        paddingTop: Dimensions.get('screen').height / 20,
        paddingBottom: Dimensions.get('screen').height / 50,

        paddingHorizontal: Dimensions.get('screen').height / 38,
        flex: 1,

      }}
    >
      <CommonHeader
        headerState={addState}
      />

      <ScrollView
        style={{
          marginTop: 22
        }}
      >
        <Text
          style={{
            marginBottom: 14,
            fontWeight: 'bold',
            fontSize: 17

          }}
        >
          Personal Info
        </Text>
        <View
          style={{
            marginBottom: 12
          }}
        >

          <ProfileHeader
            icon={''}
            label={'Enter Full Name'}
            height={Dimensions.get('screen').height / 30}
            iconHeight={24}
            iconWidth={24}
            positionTop={''}
            positionLeft={''}
            changeValue={(text) => { }}
            value={''}
            secureTextEntry={false}
            keyboardType={''}


          />

        </View>


        <View
          style={{
            marginBottom: 12
          }}
        >

          <ProfileHeader
            icon={''}
            label={'Enter Your Phone'}
            height={Dimensions.get('screen').height / 30}
            iconHeight={24}
            iconWidth={24}
            positionTop={''}
            positionLeft={''}
            changeValue={(text) => { }}
            value={''}
            secureTextEntry={false}
            keyboardType={''}


          />

        </View>


        <Text
          style={{
            marginVertical: 14,
            fontWeight: 'bold',
            fontSize: 17

          }}
        >
          Location Info
        </Text>
        <View>

          <ProfileHeader
            icon={''}
            label={'City'}
            height={Dimensions.get('screen').height / 30}
            iconHeight={24}
            iconWidth={24}
            positionTop={''}
            positionLeft={''}
            changeValue={(text) => { }}
            value={''}
            secureTextEntry={false}
            keyboardType={''}


          />

        </View>


        <View>

          <ProfileHeader
            icon={''}
            label={'GovernMent'}
            height={Dimensions.get('screen').height / 30}
            iconHeight={24}
            iconWidth={24}
            positionTop={''}
            positionLeft={''}
            changeValue={(text) => { }}
            value={''}
            secureTextEntry={false}
            keyboardType={''}
            margintop={22}


          />

        </View>


        <View>

          <ProfileHeader
            icon={''}
            label={'State'}
            height={Dimensions.get('screen').height / 30}
            iconHeight={24}
            iconWidth={24}
            positionTop={''}
            positionLeft={''}
            changeValue={(text) => { }}
            value={''}
            secureTextEntry={false}
            keyboardType={''}
            margintop={22}


          />

        </View>


        <View>

          <ProfileHeader
            icon={''}
            label={'address'}
            height={Dimensions.get('screen').height / 30}
            iconHeight={24}
            iconWidth={24}
            positionTop={''}
            positionLeft={''}
            changeValue={(text) => { }}
            value={''}
            secureTextEntry={false}
            keyboardType={''}
            margintop={22}


          />

        </View>
        {/* <CountryDropdown
        value={country}
        onChange={(val) => setCountry(val)} />
      <RegionDropdown
        country={country}
        value={region}
        onChange={(val) => setRegion(val)} /> */}

      </ScrollView>
    </View>
  )
}

export default AddressesScreen