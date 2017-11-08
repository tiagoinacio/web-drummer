import App from './components/app';
import { h, render } from 'preact';
import './style/index.css';

function loadWebAssembly(filename, imports = {}) {
    return fetch(filename)
        .then((response) => response.arrayBuffer())
        .then((buffer) => WebAssembly.compile(buffer))
        .then((module) => {
            imports.env = imports.env || {}

            Object.assign(imports.env, {
                memoryBase: 0,
                tableBase: 0,
                memory: new WebAssembly.Memory({
                    initial: 256
                }),
                table: new WebAssembly.Table({
                    initial: 0,
                    element: 'anyfunc',
                }),
                DYNAMICTOP_PTR: 0,
                STACKTOP: 0,
                STACK_MAX: 0,
                enlargeMemory: () => {},
                getTotalMemory: () => {}
            });

            return WebAssembly.instantiate(module, imports);
        });
}

loadWebAssembly('utils.wasm').then(instance => console.log(instance.exports._generateRandom()));

// in development, set up HMR:
if (module.hot || process.env.NODE_ENV === 'development') {
	require('preact/devtools');   // turn this on if you want to enable React DevTools!
	module.hot.accept('./components/app', () => requestAnimationFrame(init) );
}

render(<App />, document.body);
