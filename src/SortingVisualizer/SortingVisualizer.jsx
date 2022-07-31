import React, { Component } from 'react'
import './SortingVisualizer.css';
import {getMergeSortAnimations} from './MergeSort.js';
import {getBubbleSortAnimations} from './BubbleSort.js';
import {getInsertionSortAnimations} from './InserstionSort.js';
import {getHeapSortAnimations} from './HeapSort.js';
import {getSelectionSortAnimations} from './SelectionSort.js';

let index = 0;
const PRIMARY_COLOR = 'turquoise';
const SECONDARY_COLOR = 'red';
let color = '';
export default class SortingVisualizer extends React.Component {
    constructor(props) {
            super(props);
            this.state = {array: []};
    }


    componentDidMount() {
        this.resetArray();
    }

    

    resetArray() {
        const array = [];
        for (let i = 0;  i < (window.screen.width-200)/5; i++){
            array.push(randomIntFromInterval(5, window.screen.height*0.75));
        }
        this.setState({array});
    }



    mergeSort() {
        const animations = getMergeSortAnimations(this.state.array);
        animate(animations, 'mergeSort');
    }

    
    bubbleSort() {
        const animations = getBubbleSortAnimations(this.state.array);
        animate(animations, 'bubbleSort');
    }

    insertionSort() {
        const animations = getInsertionSortAnimations(this.state.array);
        animate(animations, 'insertionSort');
    }

    heapSort() {
        const animations = getHeapSortAnimations(this.state.array);
        animate(animations, 'heapSort');
    }

    
    selectionSort() {
        const animations = getSelectionSortAnimations(this.state.array);
        animate(animations, 'selectionSort');
    }

    render() {
        const {array} = this.state;
        return (
            <div className="array-container">
                {array.map((value, idx) => (
                    <div key={idx} className="array-bar" style={{height: `${value}px`}}>
                        
                    </div>
                ))}
                <button className="button" onClick={() => this.resetArray()}>Generate Array</button>
                <button className="button" onClick={() => this.mergeSort()}>Merge Sort</button>
                <button className="button" onClick={() => this.bubbleSort()}>Bubble Sort</button>
                <button className="button" onClick={() => this.insertionSort()}>Insertion Sort</button>
                <button className="button" onClick={() => this.heapSort()}>Heap Sort</button>
                <button className="button" onClick={() => this.selectionSort()}>Selection Sort</button>
            </div>
        );
    }
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function animate(animations, sort){
    if (sort == 'mergeSort') {
        console.log(animations)
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
            setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
            }, i * 3);
            } else {
            setTimeout(() => {
                const [barOneIdx, newHeight] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${newHeight}px`;
            }, i * 3);
            }
        }
    }else if (sort == 'bubbleSort' || sort == 'insertionSort' || sort == 'heapSort' || sort == 'selectionSort') {
        console.log(animations)
        color = SECONDARY_COLOR;
        let isColorChange = true;
        let i = 0;
        for (let index = 0; index < animations.length; index++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            if(i == 0 || i == 1){
                isColorChange = true;
            }else{
                isColorChange = false;
            }
            if (isColorChange) {
            const [barOneIdx, barTwoIdx] = animations[index];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
            setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
            }, index * 2);
            } else {
            setTimeout(() => {
                
                const [barOneIdx, newHeight] = animations[index];
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${newHeight}px`;
            }, index * 2);
            }
            i ++;
            if(i ==4){
                i=0;
            }
    }
    }
}