import { StyleSheet } from 'react-native'
import React, { useState } from 'react'
import StudentsList from './commonComponents/StudentsList'
import { Text, Layout } from '@ui-kitten/components'


const AttendanceScreen = ({ subject , date }) => {
  
  return (

    <Layout style={styles.container}>
      <Text category="h3" style={{paddingHorizontal:10}}>Attendance</Text>
      <Text category="p1" style={{padding:10}}>Subject : {subject}</Text>

      
       <StudentsList subject={subject} date={date}/>    
       
    </Layout>
  )
}

export default AttendanceScreen;

const styles = StyleSheet.create({
  container: {
    marginTop:60,
    marginBottom:20,
    display:"flex",
    justifyContent: "space-between",
    height:"95%"
  },
});
