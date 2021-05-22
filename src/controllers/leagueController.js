import Model from '../models/model';
import {isLatLongWithinRadius} from '../services/locationServices';
import {getBestSetWithinBudget} from '../services/budgetingAlgorithm';

const leaguesModel = new Model('leagues');
export const getLeagues = async (req, res) => {
    try{
        const data = await leaguesModel.select('name,price,lat,long');
        res.status(200).json({ leagues: data.rows });
    } catch (err)
    {
        res.status(200).json({ leagues: err.stack });
    }
} 

export const addLeague = async (req, res) => {
    console.log(req.body);
    const { leagueName, price, lat, long } = req.body;
    const columns = 'name, price, lat, long';
    const values = `'${leagueName}','${price}', '${lat}', '${long}'`;
    console.log(leagueName);
    console.log(values);
    try {
      const data = await leaguesModel.insertWithReturn(columns, values);
      res.status(200).json({ leagues: data.rows });
    } catch (err) {
      res.status(200).json({ leagues: err.stack });
    }
  };

  export const findLeague = async (req, res) => {
    const { budget, lat, long, radius } = req.body;
    try {
      const data = await leaguesModel.select("*");
      const fullLeagueSet = data.rows;
      let withinRadiusSet = [];
      for (const thisLeague of fullLeagueSet) 
        {   
            let result = isLatLongWithinRadius({"lat":lat,"long":long}, radius,{"lat":thisLeague.lat,"long":thisLeague.long});
           if(result)
           {
               withinRadiusSet.push(thisLeague);
           }
        };
        const budgetedLeagueSet = getBestSetWithinBudget(budget,withinRadiusSet);
        
      res.status(200).json({leagues:budgetedLeagueSet});
    } catch (err) {
      res.status(200).json({ leagues: err.stack });
    }
  };