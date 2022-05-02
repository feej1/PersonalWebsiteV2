import './BlackJackProj.css'
import {ProjectPost} from '../../Components/ProjectPost/ProjectPost'




function BlackJackProj(){


    const introParagraph = `A genetic algorithm is a type of artificial intelligence 
    
    programming that uses ideas from evolution to solve complex problems.

    It works by creating a population of (initially random) candidate solutions, 
    
    then repeatedly selecting pairs of candidates and combining their solutions 
    
    using a process similar to genetic crossover. Sometimes candidate solutions 
    
    even go through mutation, just to introduce new variation into the population.
    
    After a large number of generations, the best solution found up to that point 
    
    is often the optimal, best solution possible. Genetic algorithms are particularly
    
    well-suited for combinatorial problems, where there are huge numbers of potential
    
    solutions to a problem. The evolutionary process they go through is, in essence, a
    
    search through a huge solution space. A solution space so large that you simply 
    
    could never use a brute force approach. This project is a demonstration of using 
    
    a genetic algorithm to find an optimal strategy for playing the casino game Blackjack.
    
    I got the idea for this project while listening to a graduate presentation in my artifical intelligence class
    
    about the use of genetic algorithms and their performance in stag and hare games. The graduate student displayed
    
    a colored grid that looked similar to Blackjack basic strategy charts which sparked the idea of coding an evolutionary
    
    Blackjack algorithm.`


    const logicPara1 = `The program allows a number of agents specified by the user to play Blackjack against

    a dealer. Each agent has randomly generated rules that dictate how it plays. The rules are represented by

    two dimensional arrays, the index's of the rows and columns all map to the players hand totals and the value of the 
    
    dealers face up card. There are two-arrays, one for when an agent is given doubles and another for when it 

    is not. Each array's element contains a letter that represents an action. H for hit, SP for Split 
    
    (only present in doubles array), D for double down, and S for stay. Every agent gets their 2D logic arrays initally
    
    generated with random letters. `


    const logicPara2 = `After each round every agents performance is assessed and orderd in reference to the other agents

    based on how much the agent lost or won. The top third of the agents will copy every other column of

    their array and donate it to a correpsonding agent from the bottom third. During every copy there's 

    a 5% chance that instead of copying the better agents logic it will randomly be given a new action. 
    `

    const prefromanace = `In the end, this program generated strategies that performed very close to the 
    
    strategies that you would find online. The graph below shows how well the top performers did after 1200

    hands. At the start the best agents would lose 500 units. Though,

    after just 175 generations the agents would be able to keep their losses to about 150 units. 

    This is a huge improvement from where it started, although, it is about 12% worse then when playing using basic strategy.
    
    It's possible that with 

    better inheritance logic, or different combinations of the number of agents, hands, and generations

    that a better performance would have been achieved. 
    `

    

    var map = new Map()

    map.set("Github: https://github.com/feej1/blackJack-EvolutionaryAlgorithm", "paragraph")
    map.set("Description","header")
    map.set(introParagraph, "paragraph")
    map.set("Logic", "header")
    map.set(logicPara1, "paragraph")
    map.set("https://i.imgur.com/7XaDBgU.png", "img")
    map.set(logicPara2, "paragraph")
    map.set("Preformance", "header")
    map.set(prefromanace, "paragraph")
    map.set("https://i.imgur.com/TIiIFyo.png", "img")

    return(
        <ProjectPost projName="BlackJack EA" imgUrl="https://cdn.hswstatic.com/gif/how-to-play-blackjack-lead.jpg" map={map} />
        )
}

export default BlackJackProj