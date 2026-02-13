import { useState } from 'react';
import Box from './Box';
import styles from './Grid.module.css';

const Grid = () => {
    const [boxes, setBoxes] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);

    const handleBoxClick = (index) => {
        // Check if the clicked box is locked
        if (boxes[index] >= 15) return;

        // Create a new array to maintain immutability
        const newBoxes = [...boxes];

        // Increment the clicked box
        newBoxes[index] += 1;
        const newValue = newBoxes[index];

        // Rule A: If divisible by 3, decrement right neighbor
        const col = index % 3;
        const rightIndex = index + 1;

        if (newValue % 3 === 0 && col !== 2 && newBoxes[rightIndex] < 15) {
            newBoxes[rightIndex] -= 1;
        }

        // Rule B: If divisible by 5, increment box below by 2
        const row = Math.floor(index / 3);
        const belowIndex = index + 3;

        if (newValue % 5 === 0 && row !== 2 && newBoxes[belowIndex] < 15) {
            newBoxes[belowIndex] += 2;
        }

        setBoxes(newBoxes);
    };

    return (
        <div className={styles.gridContainer}>
            {boxes.map((value, index) => (
                <Box
                    key={index}
                    value={value}
                    onClick={() => handleBoxClick(index)}
                    isLocked={value >= 15}
                />
            ))}
        </div>
    );
};

export default Grid;
