import './style';
import utils from './wasm/utils.wasm';
import App from './components/app';

utils().then(instance => {
    console.log(instance._generateRandom());
});

export default App;
