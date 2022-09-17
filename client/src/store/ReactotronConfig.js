import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default Reactotron.setAsyncStorageHandler(AsyncStorage)
    .configure({
        name: 'Veille Permanente',
    })
    .use(reactotronRedux())
    .useReactNative({
        networking: {
            ignoreUrls: /\/(logs|symbolicate|generate)$/,
        },
    })
    .connect();
