const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();

// Configuration de la base de données
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "tier-list",
});
// Connexion à la base de données
connection.connect((err) => {
    if (err) {
        console.error("Erreur de connexion à la base de données :", err);
        return;
    }
    console.log("Connecté à la base de données MySQL");
});

app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.get("/categories", (req, res) => {
    connection.query("SELECT c.id, c.titre, i.url FROM categories c JOIN images i ON .id = i.category_id",
        (err, categories) => {
            const resultats = [];

            for (let categorie of categories) {
                if (resultats.filter(c => c.id === categorie.id)) {

                }

            })
    res.json(categories);
}
);


    // const categories = [
    //     {
    //         titre: "Catégorie 1",
    //         images: [
    //             "https://www.google.com/imgres?q=street%20food&imgurl=https%3A%2F%2Fwww.closertotheworld.com%2Fimg%2Fcms%2FBLOG%2FTop%252010%2520des%2520Meilleures%2520Street%2520Foods%2520du%2520Monde.jpg&imgrefurl=https%3A%2F%2Fwww.closertotheworld.com%2Fblog%2Ftop-10-des-meilleures-street-foods-du-monde-n208&docid=6FJcte4aInJ5jM&tbnid=MzKgyGdVB4LyLM&vet=12ahUKEwi5kfKQsL6MAxW2WkEAHdjlNBIQM3oECBsQAA..i&w=750&h=550&hcb=2&ved=2ahUKEwi5kfKQsL6MAxW2WkEAHdjlNBIQM3oECBsQAA",
    //         ]
    //     },
    //     {
    //         titre: "Catégorie 2",
    //         images: [
    //             "https://www.google.com/imgres?q=street%20food&imgurl=https%3A%2F%2Fmedia.istockphoto.com%2Fid%2F1287411694%2Ffr%2Fphoto%2Fchef-cuisinant-la-nourriture-au-restaurant-de-c%25C3%25B4t%25C3%25A9-de-rue-dans-la-route-de-yaowarat-bangkok.jpg%3Fs%3D612x612%26w%3D0%26k%3D20%26c%3D0xI3947y3S4uas5Eb4CetdJSMspVdutuDi9s_GaF7oE%3D&imgrefurl=https%3A%2F%2Fwww.istockphoto.com%2Ffr%2Fphotos%2Fstreet-food&docid=oRgRe7RTx_bCxM&tbnid=k0b5WMQpDNKj5M&vet=12ahUKEwi5kfKQsL6MAxW2WkEAHdjlNBIQM3oECHAQAA..i&w=612&h=407&hcb=2&ved=2ahUKEwi5kfKQsL6MAxW2WkEAHdjlNBIQM3oECHAQAA",
    //             "https://www.google.com/imgres?q=street%20food&imgurl=https%3A%2F%2Fapi.quotatrip.com%2Fstorage%2Farticles%2F27%2FThailande-street-food.jpg&imgrefurl=https%3A%2F%2Fwww.quotatrip.com%2Finspiration%2Fnos-11-meilleures-destinations-street-food&docid=9laLn65bzXof6M&tbnid=XhFkSwqdmvyrOM&vet=12ahUKEwi5kfKQsL6MAxW2WkEAHdjlNBIQM3oECH8QAA..i&w=1200&h=800&hcb=2&ved=2ahUKEwi5kfKQsL6MAxW2WkEAHdjlNBIQM3oECH8QAA"
    //         ]
    //     }
    // ]
    // res.json(categories);
});
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
