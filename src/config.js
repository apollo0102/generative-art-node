const layersOrder = [
    // { name: 'background', number: 1 },
    // { name: 'ball', number: 2 },
    // { name: 'eye color', number: 12 },
    // { name: 'iris', number: 3 },
    // { name: 'shine', number: 1 },
    // { name: 'shine', number: 1 },
    // { name: 'bottom lid', number: 3 },
    // { name: 'top lid', number: 3 },
    { name: 'Background', number: 7 },
    { name: 'Base', number: 1 },
    { name: 'Body', number: 11 },
    { name: 'Clothes', number: 24 },
    { name: 'Eyes', number: 20 },
    { name: 'Fly', number: 2 },
    { name: 'Head', number: 22 },
    { name: 'Masks', number: 5 },
    { name: 'Mouth', number: 9 },
];
  
const format = {
    width: 3000,
    height: 3000
};

const rarity = [
    { key: "", val: "original" },
    { key: "_r", val: "rare" },
    { key: "_sr", val: "super rare" },
];

const defaultEdition = 5;

module.exports = { layersOrder, format, rarity, defaultEdition };