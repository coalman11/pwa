const express = require('express');
path = require('path');

const app = express();

app.use(express.static('./dist/pwa-angular'));
app.get('/*', (req,res) => {
    res.sendFile(path.json(__dirname,'dist/pwa-angualar/index.html'));
})

app.listen(8080, () => {
    console.log("Server started");
})
