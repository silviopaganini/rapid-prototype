void main() {
    gl_FragColor = vec4( color * vColor, 1.0 );
    // gl_FragColor = gl_FragColor * texture2D( texture, vUv );
}