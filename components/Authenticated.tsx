import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet ,Text, View, Button,} from 'react-native';
import { Camera } from 'expo-camera';
import { Video } from 'expo-av';

const Authenticated: React.FC = () => {
  const [hasAudioPermission, setHasAudioPermission] = useState<boolean>();
  const [hasCameraPermission, setHasCameraPermission] =useState<boolean>();
  // const [camera, setCamera] = useState(null);
  // const [record, setRecord] = useState(null);
  // const [type, setType] = useState(Camera.Constants.Type.back);
  useEffect(()=>{
(async()=>{
  const cameraPersmission = await Camera.requestCameraPermissionsAsync();
  const microphonePermission  = await Camera.requestMicrophonePermissionsAsync();

  setHasCameraPermission(cameraPersmission.status === "granted")
  setHasAudioPermission(cameraPersmission.status === "granted")

})();
  },[])
if(hasCameraPermission === undefined || hasAudioPermission === undefined){
  return <Text>Requesting Permissions</Text>
}
else if(!hasCameraPermission){
  return <Text>Permission to cam not grantyed</Text>
}
  return (
   <Camera>
    <Text>ei</Text>
   </Camera>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});

export default Authenticated;
