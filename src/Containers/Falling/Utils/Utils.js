import {bonusItems} from "../../../Config/bonusConfig";

export const createItem = () => {
    const item = bonusItems[Math.floor(Math.random() * bonusItems.length)];
    const id = item.id + Math.random();
    let x = Math.floor(Math.random() * 100);
    return {
        item,
        id,
        x,
        y: 1,
    }
};
export const removeItem = (items, index) => {
    const newDots = [...items];
    newDots.splice(index, 1);
    return newDots;
};

export const SPEED_STEP = 3.3;
export const SPAWN_INTERVAL = 2000;

const collisionDetection = (item, basket) => {
    const x1 = item.offsetLeft;
    const y1 = item.offsetTop;
    const h1 = item.getBoundingClientRect().height;
    const w1 = item.getBoundingClientRect().width;
    const b1 = y1 + h1;
    const r1 = x1 + w1;
    const x2 = basket.offsetLeft + 20;
    const y2 = basket.offsetTop;
    const h2 = basket.getBoundingClientRect().height;
    const w2 = basket.getBoundingClientRect().width - 80;
    const b2 = y2 + h2;
    const r2 = x2 + w2;

    return !(b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2);
}

export const InBasket = (item) => {
    if (document.getElementById(item.id) !== null && collisionDetection(document.getElementById(item.id), document.getElementById('basket'))) {
        const itemTop = document.getElementById(item.id).offsetTop;
        if (itemTop > 520 && itemTop < 650) {
            return true;
        }
    }
    return false;
}
