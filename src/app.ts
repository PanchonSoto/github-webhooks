import express from 'express';
import { Envs } from './config';


(()=>{
    main();
})();


function main() {

    const app = express();

    app.get('/api/github', (req, res)=>{
        res.send('github endpoint');
    });

    app.listen(Envs.PORT, ()=>{
        console.log(`App running on port ${Envs.PORT}`);
    });

}
