# Sub Ordering System

This is a simple sub ordering web application built with **Node.js**, **Express**, **MongoDB (Atlas)**, and **Bootstrap**.

---

## Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/YourUsername/sub-ordering-system.git
cd sub-ordering-system
```

2. **Install dependencies**

```bash
npm install
```

3. **Run the server**

```bash
node server.js
```

The server will start on **http://localhost:3000**. Make sure your MongoDB Atlas connection string is correctly set in `server.js`.

---

## Usage

1. Open `public/index.html` in your browser.  
2. Navigate to the **Order** page to create a sub.  
3. Use the **Add to Cart** button to save your sub order to the database.  
4. Go to the **Cart** page to see all saved sub orders.  
5. Use the **Remove** button next to a sub to delete it from the database.

---

## Notes

- Frontend files are in the `public/` folder.  
- JS files for toggles and orders are in the `js/` folder.  
- Sub orders are stored in the `subs` collection in MongoDB Atlas.  
- Ensure your MongoDB Atlas cluster is running and accessible.

