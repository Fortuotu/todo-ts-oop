import express from 'express';
import routes from './routes/todos'

const app = express();

app.use('/todos', routes);

app.listen(443, () => {
    console.log("Sever up");
});
