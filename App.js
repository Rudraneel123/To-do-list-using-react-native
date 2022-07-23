import React,{useState} from 'react';
import { View ,StyleSheet,Text, KeyboardAvoidingView, TextInput, TouchableOpacity, Keyboard, ScrollView} from 'react-native'; 
import Task from './components/Task';

 
export default function App(){

  const [task,setTask]=useState();

  const [taskItems,setTaskItems]=useState([]);

  const handleAddTask =() => {
    // console.log(task);
    Keyboard.dismiss();
    setTaskItems([...taskItems,task])
    setTask(null);
  }

  const completeTask =(index)=> {
   let itemsCopy =[...taskItems];
   itemsCopy.splice(index,1);
   setTaskItems(itemsCopy);
  }

  return (

    <View style={styles.container}>
      

     <ScrollView style={styles.wrapper}>

    <Text style={styles.sectionList}>Today's tasks</Text>

    <View style={styles.items}>
    {/* TASKS WILL HAPPEN */}
    {
      taskItems.map((item,index)=> {
       return (
         <TouchableOpacity onPress={() => completeTask(index)}>  
       <Task text={item} />
       </TouchableOpacity>
       )
      })
    }
    
    </View>

    </ScrollView>

    {/* write a task */}
    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ?  "padding" : "height"}
    style={styles.writeWrapper}>

      <TextInput style={styles.input} 
         value={task}
         placeholder={'write a task'} 
         onChangeText={text => setTask(text)}
          />
         
      <TouchableOpacity onPress={() =>handleAddTask()}> 
     <View style={styles.add_wrapper}>
       <Text style={styles.add_text}> + </Text>
     </View>
     
      </TouchableOpacity>

    </KeyboardAvoidingView>
  
    </View>

  )
  
  }


  const styles=StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#C0E6BA',
      opacity: 1.5,
      
    },
    wrapper: {
      paddingTop: 70,
      paddingHorizontal:20,
    },
    sectionList: {
      fontSize: 24,
      color: '#013237',
      fontWeight: 'bold'
      
    },
    items:{
      marginTop: 30,
    },
    writeWrapper:{
      position: 'absolute',
      bottom: 60,
      width: '100%',
      flexDirection:'row',
      justifyContent:'space-around',
      alignItems:'center',
    },
    input:{
      paddingVertical: 15,
      width: 300,
      height: 70,
      paddingHorizontal: 15,
      backgroundColor: '#eaf9e7',
      borderColor: 'green',
      borderWidth: 2,
      marginBottom: 20,
      borderRadius: 20,
    },
    add_wrapper:{
      width: 60,
      height: 60,
      backgroundColor: '#4CA771',
      justifyContent:'center',
      borderRadius: 60,
      alignItems: 'center'
    },
    add_text:{
      backgroundColor: '#4CA771'
    },

  });
 
  
