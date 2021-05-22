export const getBestSetWithinBudget = (budget, leagues) => {
    let remainingBudget = budget;
    leagues.sort( (first, second) => {
        return first.price - second.price;
      });
    let leaguesInBudget = [];
    for(const league of leagues)
    {
        console.log(remainingBudget);
        console.log(`${league.name} costs ${league.price}`);

        if(remainingBudget > league.price)
        {
            leaguesInBudget.push(league);
            remainingBudget-=league.price;
        }
        else if(remainingBudget === league.price)
        {
            leaguesInBudget.push(league);
            break;
        }
        else
        {
            break;
        }
    }
    return leaguesInBudget;
  
}