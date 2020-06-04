export interface Food {
    name: string;
    img: string;
    section: string;
    price: number;
}

export interface FoodSection {
    section: Array<Food>;
}

export const formatPrice = (price: number) => (
    price.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
);

export const foodsItems: Array<Food> = [
    {
        name: "Cheese Pizza",
        img: "/img/pizza.png",
        section: "Pizza",
        price: 1,
    },
    {
        name: "Pepperoni Pizza",
        img: "/img/pizza2.jpeg",
        section: "Pizza",
        price: 1.5,
    },
    {
        name: "Chicken Pizza",
        img: "/img/chicken-pizza.jpeg",
        section: "Pizza",
        price: 2,
    },
    {
        img: "/img/healthy-pizza.jpeg",
        name: "Veggie Pizza",
        section: "Pizza",
        price: 2,
    },
    {
        img: "/img/burger.jpeg",
        name: "Burger",
        section: "Sandwich",
        price: 3,
    },
    {
        name: "Gyro",
        img: "/img/gyro.jpeg",
        section: "Sandwich",
        price: 4.5
    },
    {
        img: "/img/sandwich.jpeg",
        name: "Shrimp PoBoy",
        section: "Sandwich",
        price: 6,
    },
    {
        img: "/img/fries.jpeg",
        name: "Fries",
        section: "Sides",
        price: 1,
    },
    // {
    // price: 1,
    // name: "Soda",
    // section: "Drinks",
    // choices: ["Coke", "Sprite", "Root Beer"],
    // },
];

export const foods: FoodSection = foodsItems.reduce((res: any, food) => {
    if (!res[food.section]) {
        res[food.section] = [];
    }
    res[food.section].push(food);
    return res;
}, {});
