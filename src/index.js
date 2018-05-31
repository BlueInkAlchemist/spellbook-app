// index.js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './styles.css';
// import Clock from './components/clock.js';
import Button from './components/app.js';
import SpellForm from './components/spellform.js';
import spellData from '../lib/spells.json';

// Declare document elements
const left = document.getElementById('left')
const right = document.getElementById('right')

// Create Objects
/* for render testing - will omit in future version
function tick(){
    ReactDOM.render(
        <Clock date={new Date()} />,
        right
    );
}

setInterval(tick, 1000);
*/

// LEFT PAGE: Form for parsing spell.json
ReactDOM.render(<SpellForm />, left)

// RIGHT PAGE: Live updating results
ReactDOM.render(<Button />, right)
