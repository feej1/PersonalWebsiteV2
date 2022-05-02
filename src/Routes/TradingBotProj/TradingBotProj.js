import './TradingBotProj.css'
import { ProjectPost } from '../../Components/ProjectPost/ProjectPost'


function TradingBotProj(){

    const description = `The purpose of this project was to code a stock trading bot and see 

    how well It could do. Unlike many of my other projects, this one stemmed mainly from my personal interest 
    
    instead of learning new technologies. I was really interested in combining my interest in finance and coding.
    
    The trading bot is essentially a python script that runs 24/7 assessing 
    
    buy and sell signals based off of the current market conditions. These conditions are obtained
    
    by using a couple different API's, and the bot trades using the alpaca-trading-api module provided by Alpaca 

    to trade securities and crypto on their platform.
    `

    const strat = `Determining when to buy and sell was hard.
    
    I read about a couple popular indicators and strategies that others had used for 
    
    algorithmic trading. I ended up deriving a process based off a strategy called the golden cross.
    
    The golden cross analyzes two simple moving averages to create entry and exit signs.
    
    One moving average should be a little less then twice the size of the other, popular time frames 
    
    are a 10 and 5 day moving average or a 50 and 20 day moving average. Whenever the smaller average
    
    becomes greater than the larger it indicates a strong upward trend and means you should buy. When the 
    
    small moving average moves below the large it indicates a strong down trend and should be sold or shorted. 
    
    My strategy uses a 5 and 2 day moving average and checks to see not when the moving averages cross, but instead
    
    when the stock price crosses the averages. Whenever the price moves above the 5 day the bot buys, whenever it moves below
    
    the 5 day or the 2 day averages it sells. The graph below shows a couple of the buy and sell signals from February to May. 
    
    For my stock choice I decided to trade a triple weighted bull S&P 500 ETF. I went with the triple weighted fund because
    
    this strategy doesn't create many opportunities to trade at a loss and I wanted to make sure each trade had high profits. `



    const cloud = `Since the code needed to run frequently during market hours I had to host my code

    in the cloud. I decided to use an Azure function with a time trigger that runs every fifteen minutes.

    The function simply checks if the market is open, if so then it will calculate the required statistics using 

    a combination of information gathered from the Alpaca Trading API and the Alpha Vantage API. Then, if there's 

    a buy or sell signal it takes the respective action. Azure functions allowed 

    me to seperate my code from my Alpaca account. I was able to store my Alpaca trading 

    secrets in an Azure Key vault and integrate the function with the key vault so it can access my trading account

    without me ever having to store my credentials in the actual code. 
    ` 

    const futureWork = `In the future I would like to chain multiple different Azure functions together
    
    that might specify current market conditions then have seperate functions act on the
    
    given market conditions by employing different strategies. For example, given a strong bull market
    
    one might want to buy and hold. In a volatile market the bot would employ the strategy I'm currently using and in 
    
    bear markets it would short stocks.`

    var map = new Map()

    map.set("Description", "header")
    map.set(description, "paragraph")
    map.set("Strategy", "header")
    map.set(strat, "paragraph")
    map.set("https://i.imgur.com/3rcy6lN.jpg", "img")
    map.set("Using Azure", "header")
    map.set(cloud, "paragraph")
    map.set("Future Work", "header")
    map.set(futureWork,"paragraph")

    return(
        <ProjectPost projName="Trading Bot" imgUrl="https://www.rothschildandco.com/globalassets/monthly-market-summary---cropped.png" map={map} />
    )

}


export default TradingBotProj