function generateReport(data){
    let report = "RELATÓRIO AUTOMATIZADO\n\n";

    const avgSize = data.reduce((acc, item) => acc + item.length, 0) / data.length;

    report += "Resumo:\n";
    data.forEach((item, i) => {
        report += `${i + 1}. ${item.title}\n`;
    });

    report += "\n Insights automáticos:\n";

    if(avgSize > 100){
        report += "- Os conteúdos são relativamente longos\n";
    }

    else{
        report += "= Os conteúdos são curtos\n";
    }

    report += `- Média de tamanho: ${avgSize.toFixed(2)} caracteres\n`;

    return report;
}

module.exports = generateReport;