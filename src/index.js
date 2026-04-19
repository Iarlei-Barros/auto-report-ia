const fs = require("fs");
const fetchData = require("./services/fetchData");
const processData = require("./services/processData");
const generateReport = require("./services/generateReport");
const log = require("./utils/logger");

async function main(){
    try{
        log("Iniciando automação...");

        const data = await fetchData();
        log("Dados coletados");

        const processed = processData(data);
        log("Dados processados");

        const report = generateReport(processed);

        fs.writeFileSync("output/report.txt", report);
        log("Relatório gerado com sucesso!");
    } 
    
    catch(error){
        log("Erro: ", + error.message);
    }
}

main();