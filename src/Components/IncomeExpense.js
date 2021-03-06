import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import transContext from './Context';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(0),
      minWidth: theme.spacing(16),
      minHeight: theme.spacing(10),
    },
  },
  heading: {
    margin:"5px 40px",
},
IncomeAmount: {
  color:"green"
},
ExpenseAmount:{
  color:"red"
}
}));

export const IncomeExpense=()=> {
  let {transaction}=useContext(transContext)
  const classes = useStyles();
  const amounts=transaction.map((trans)=>trans.amount)
  const income=amounts.filter(amount=>amount>0).reduce((acc,item)=>(acc+=item),0).toFixed(2);
  const expense=amounts.filter(amount=>amount<0).reduce((acc,item)=>(acc-=item),0).toFixed(2);


  return (
    <div className={classes.root}>
      <Paper variant="outlined" >
          <h2 className={  classes.heading }>Income</h2> 
          <h3 className={classes.IncomeAmount +' '+ classes.heading}>${income}</h3>
        </Paper>
      <Paper variant="outlined" square >
            <h2 className={classes.heading}>Expense</h2> 
            <h3 className={classes.ExpenseAmount +' '+ classes.heading}>${expense}</h3>
      </Paper>
    </div>
  );
}
