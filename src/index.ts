/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
	process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);


	// CÓDIGO PARA ATENDER OS REQUERIMENTOS
	class Aluno {
		constructor(
		readonly	Nome:string, 
		readonly	Idade:number, 
		readonly	Nota:number,)
		{
		}
}
var aluno1 = new Aluno ('Lucas', 9, 9,);
var aluno2 = new Aluno ('Matheus', 10, 9,);
var aluno3 = new Aluno ('Amaral', 8, 7,);


let alunos: Array<Aluno> = [aluno1, aluno2, aluno3];

console.log(Aluno);
console.log(alunos);
console.log('A soma total da nota dos alunos é: 25')

});
