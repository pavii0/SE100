const StockDailyPerformance = [3.1, 2.4, 1.1, 2.8, 4.5, 2.7]

//explicit return
const sortPerformanceInAscOrder = (dailyPerformanceArray) => {
    return dailyPerformanceArray.sort()
}
    
//implicit return
const sortPerformanceInAscOrder = (dailyPerformanceArray) => dailyPerformanceArray.sort()

// Do not modify this code:
console.log(sortPerformanceInAscOrder(StockDailyPerformance));