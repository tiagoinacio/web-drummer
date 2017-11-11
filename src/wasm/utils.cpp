#include <iostream>
#include <emscripten/emscripten.h>

extern "C" {
    EMSCRIPTEN_KEEPALIVE
    void print() {
        std::cout << "WebAssembly successfully loaded!\n";

    }

    EMSCRIPTEN_KEEPALIVE
    int generateRandom() {
        print();
        return 1;
    }
}
