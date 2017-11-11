import App from './components/app';
import { h, render } from 'preact';
import './style/index.css';
import Utils from './wasm/utils.js';

Utils(
    {
        wasmBinaryFile: 'wasm/utils.wasm'
    }
).then(instance => {
    console.log(instance.asm);
    console.log(instance.asm._generateRandom())
    instance.asm._print();
});

// in development, set up HMR:
if (module.hot || process.env.NODE_ENV === 'development') {
	require('preact/devtools');   // turn this on if you want to enable React DevTools!
	module.hot.accept('./components/app', () => requestAnimationFrame(init) );
}

render(<App />, document.body);
