"use strict";

var vertexShaderSource = `#version 300 es
in vec4 position;

void main() {
    gl_Position = position;
}
`;

var fragmentShaderSource = `#version 300 es

precision highp float;

out bec4 outColor;

void main() {
    outColor = vec4(1, 0, 0.5, 1);
}
`;

const createShader = (gl, type, source) => {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);

    if(success){
        return shader;
    }

    console.log(gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return undefined;
};

const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

const createProgram = (gl, vertexShader, fragmentShader) => {
    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    const success = gl.getProgramParameter(program, gl.LINK_STATUS);
    if(success){
        return program;
    }

    console.log(gl.getProgramInfoLog(program));
    gl.deleteProgram(program);
    return undefined;
};


const main = () => {
    var canvas = document.querySelector("#c");

    var gl = canvas.getContext("webgl2");
    if (!gl){
        console.error("WebGL2 is not supported by this browser!");
        return;
    }


}

const program = createProgram(gl, vertexShader, fragmentShader);
const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
