# Housetable project

A home valuation system full stack project using Express, React, Sequelize.

## Getting Started

This guide assumes you are using linux and have Node.js installed on your machine.

### Clone the repository

```bash
git clone https://github.com/abrahammurciano/housetable.git
cd housetable
```

### Install dependencies

```bash
npm install
(cd client && npm install)
(cd server && npm install)
```

### Launch the app

To build then start the app in release mode, run this.

```bash
npm run build
npm start
```

To run it in development mode, where every time you make a change to the code it will automatically reflect in the app, run this.

```bash
npm run dev
```

### Run the tests

```bash
npm test
```

## Take the tour

When you first launch the app at `/`, you will see a page like this. This is what it looks like at the beginning, when there are no houses in the database.

![Empty home page](https://i.imgur.com/Ahnh7Q4.png)

Let's start by adding a house. Click the `+` in the bottom corner to get started. You will be taken to `/house/new` where you can fill in the details of the house you want to add.

![Add house page](https://i.imgur.com/KY796j5.png)

When you click `Add`, you will be taken to `/house/:id` where you can see and edit the details of the house you just added.

![House page](https://i.imgur.com/LjWMrom.png)

We can update a value, let's say the loan amount, and click `Update` to save the changes. You'll see that the risk level changes.

![Updated house](https://i.imgur.com/IxEcqCF.png)

Clicking `Back` will take us to the home page, where we can add a few more houses. Now we can see that all the houses we've added are listed there, and clicking any of them will take us back to the detail page where we can modify it.

![Full home page](https://i.imgur.com/jxbRb3F.png)