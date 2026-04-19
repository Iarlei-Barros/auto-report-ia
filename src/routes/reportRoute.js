const express = require("express");
const router = express.Router();

const fetchData = require("../services/fetchData");
const processData = require("../services/processData");
const generateReport = require("../services/generateReport");

router.get("/report", async (req, res) => {
    try {
        const data = await fetchData();
        const processed = processData(data);
        const report = generateReport(processed);

        res.status(200).json({
            success: true,
            message: "Relatório gerado com sucesso",
            data: processed,
            report: report
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            error: "Erro ao gerar relatório",
            details: error.message
        });
    }
});

module.exports = router;