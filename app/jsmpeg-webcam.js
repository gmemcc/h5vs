import 'babel-polyfill';
require( 'jsmpeg' );
import 'ws'
let player = new jsmpeg( new WebSocket( 'ws://127.0.0.1:8801/' ), {
    canvas: document.getElementById( 'canvas' )
} );