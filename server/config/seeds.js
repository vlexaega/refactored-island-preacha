const db = require('./connection');
const { User, Product, Category } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
    await cleanDB('Category', 'categories');
    await cleanDB('Product', 'products');
    await cleanDB('User', 'users');

    const categories = await Category.insertMany([
        { name: 'Wedding Packages'},
    ]);

    console.log('categories seeded');

    const products = await Product.insertMany([
        {
            name: 'Resort Wedding',
            description:
                'Beautiful resort wedding',
            image: 'resort-wedding.jpg', 
            category: categories[0]._id,
            price: 2500,
            quantity: 1
        },
        {
            name: 'Beach Wedding',
            description: 
                'Beach wedding',
            image: 'beach-wedding.jpg',
            category: categories[0]._id,
            price: 3000,
            quantity: 1
        },
        {
            name: 'Legal Wedding',
            description: 
                'Legal wedding',
            image: 'legal.jpg',
            category: categories[0]._id,
            price: 1000,
            quantity: 1
        }
    ]);

    console.log('products seeded');

    await User.create({
        firstName: 'Jolly',
        lastName: 'Roger',
        email: 'jolly@email.com',
        password: 'password',
        orders: [
            {
                products: [products[0]._id, products[1]._id]
            }
        ]
    });

    console.log('users seeded');

    process.exit();
})