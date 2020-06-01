interface Food {
    name: string;
    img: string;
}

export const foods: Array<Food> = [
    {
        name: "Cheese Pizza",
        img: "/img/pizza.png",
        // section: "Pizza",
        // price: 1,
    },
    {
        name: "Pepperoni Pizza",
        img: "/img/pizza2.jpeg",
        // section: "Pizza",
        // price: 1.5,
    },
    {
        name: "Chicken Pizza",
        img: "/img/chicken-pizza.jpeg",
        // section: "Pizza",
        // price: 2,
    },
    {
        img: "/img/healthy-pizza.jpeg",
        name: "Veggie Pizza",
        // section: "Pizza",
        // price: 2,
    },
    {
        img: "/img/burger.jpeg",
        name: "Burger",
        // section: "Sandwich",
        // price: 3,
    },
    {
        name: "Gyro",
        img: "/img/gyro.jpeg",
        // section: "Sandwich",
        // price: 4.5
    },
    {
        img: "/img/sandwich.jpeg",
        name: "Shrimp PoBoy",
        // section: "Sandwich",
        // price: 6,
    },
    {
        img: "/img/fries.jpeg",
        name: "Fries",
        // section: "Sides",
        // price: 1,
    },
    // {
        // price: 1,
        // name: "Soda",
        // section: "Drinks",
        // choices: ["Coke", "Sprite", "Root Beer"],
    // },
];
