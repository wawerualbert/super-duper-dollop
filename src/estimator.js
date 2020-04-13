const covid19ImpactEstimator = (data) => {
        const inputData = {
            region: {
                name: "Africa",
                avgAge: 19.7,
                avgDailyIncomeInUSD: 5,
                avgDailyIncomePopulation: 0.71
            },
            periodType: "days",
            timeToElapse: 58,
            reportedCases: 674,
            population: 66622705,
            totalHospitalBeds: 1380614
         }
    };
     return {
         data: inputData,
         impact: {
            currentlyInfected: impact.currentlyInfected = reportedCases * 1,
            infectionsByRequestedTime: impact.currentlyInfected * 512,
    
         },
         severeImpact: {
            currentlyInfected: severeImpact.currentlyInfected = reportedCases * 50,
            infectionsByRequestedTime: severeImpact.currentlyInfected * 512,
    
         }
     };














export default covid19ImpactEstimator;
