const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')
const fs = require('fs');

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const filePath = "data/products.json";

app.post("/api/product", (request, response) => {
    let rawdata = fs.readFileSync(filePath);
    let products = JSON.parse(rawdata);
    products.push(request.body)

    fs.writeFile(filePath, JSON.stringify(products, null, 2), (err) => {
        if (err) {
            console.log("Error", err)
            return response.sendStatus(505);
        }
        console.log('Data written to file');
        return response.sendStatus(200);
    });
});

app.delete("/api/product/:id", (request, response) => {
    console.log(`File deleted: ${request.params.id}`)

    let rawdata = fs.readFileSync(filePath);
    let products = JSON.parse(rawdata);

    products = products.filter((f) => f.id !== request.params.id);

    fs.writeFile(filePath, JSON.stringify(products, null, 2), (err) => {
        if (err) {
            console.log("Error", err)
            return response.status(200).sendStatus(505);
        }
        console.log('Data written to file');
        return response.set({
            'Content-Type': 'application/json',
        }).json({id: request.params.id});
    });
});

app.get("/api/product", (request, response) => {
    console.log(`File get`)
    fs.readFile(filePath, function (err, data) {
        if (err) {
            console.log("Error", err)
            return response.status(505).json({result: false, message: 'Error when read file', data: null});
        }

        const jsonData = JSON.parse(data)
        return response
            .set({
                'Content-Type': 'application/json',
            })
            .status(200)
            .json({result: true, data: jsonData, message: null});
    });
});

app.put("/api/product/:id", (request, response) => {
    let rawdata = fs.readFileSync(filePath);
    let products = JSON.parse(rawdata);

    const productToUpdate = products.find((_) => _.id === request.params.id);

    if (!productToUpdate) {
        return response.sendStatus(204);
    }

    productToUpdate.name = request.body.name;
    productToUpdate.price = request.body.price;
    productToUpdate.imageUrl = request.body.imageUrl;
    productToUpdate.quantity = request.body.quantity;

    fs.writeFile(filePath, JSON.stringify(products, null, 2), (err) => {
        if (err) {
            console.log("Error", err)
            return response.sendStatus(505);
        }
        console.log('Data written to file');
        return response.sendStatus(200);
    });
});

app.listen(8080, () => {
    console.log(`Server running on port 8080`)
    fs.exists(filePath, function (exists) {
        if (!exists) {
            fs.writeFile(filePath, JSON.stringify([], null, 2), {flag: 'wx'}, function (err, data) {
            })
        }
    });
});