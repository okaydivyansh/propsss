// numSides=6 na likhte toh bhi 100% correct hota but then no default value 
export default function Die({numSides=6}) {
    const roll=Math.floor(Math.random() * numSides) +1;
    return <p>{numSides}- sidedDie roll: {roll}</p>
}