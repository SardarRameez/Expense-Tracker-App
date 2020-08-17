import React from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { Header } from './Components/Header';
import { Balance } from './Components/Balance';
import { IncomeExpense } from './Components/IncomeExpense'
import { IncomeExpenseGraph } from './Components/IncomeExpenseGraph'
import { History } from './Components/History';
import { AddTransaction } from './Components/AddTransaction';
import { ContextProvider } from './Components/Context';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    minHeight: '100vh',
    minWidth: 100,
  },
  pad:{
    padding:'20px 30px'
  }
}));

function App() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Grid container justify="center">
            <Grid item>
              <Paper className={classes.paper}>
                <div className={classes.pad}>
                  <ContextProvider>
                      <Header></Header>
                      <Balance></Balance>
                      <IncomeExpense></IncomeExpense>
                      <IncomeExpenseGraph></IncomeExpenseGraph>
                      <History></History>
                      <AddTransaction></AddTransaction>
                   </ContextProvider>
                </div>
              </Paper>
            </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
