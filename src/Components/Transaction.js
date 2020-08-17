import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import transContext from './Context';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export const Transaction=()=> {
  const {addTransaction}=useContext(transContext);
  const classes = useStyles();
  const [incExp, setIncExp] = React.useState("Enter Add Income or Expense to Start Transaction");
  const [description, setDescription]=useState("");
  const [amount, setAmount]=useState("");
  const [check, setCheck]=useState(true);
  
  function formInput(){
    document.getElementById("descInput").value="";
    document.getElementById("amountInput").value="";
  }



  return (
    <div className={classes.root}>

      <Button variant="outlined" color="primary" onClick={()=>{setIncExp("Add Income"); setCheck(false)}}>
        Add Income
      </Button>
      <Button variant="outlined" color="secondary"  onClick={()=>{setIncExp("Add Expense"); setCheck(false)}}>
        Add Expense
      </Button>
          <h3>Description</h3>
          <input id="descInput" onChange={(e)=>{setDescription(e.target.value)}} variant="outlined" placeholder="Enter Description" style={{height:"35px" , width:"100%"}}></input>
          <h3>Amount</h3>
          <input id="amountInput" onChange={(e)=>{setAmount(e.target.value)}} disabled={check} type="number" variant="outlined" placeholder={incExp} style={{height:"35px" , width:"100%"}}></input>
          <Button onClick={()=>{(incExp==="Add Income")?addTransaction({description,amount:+amount}):addTransaction({description,amount:-amount}); formInput()}} variant="contained" color="primary" style={{width:"100%" , marginTop:"15px"}}>
            Submit
          </Button>

    </div>
  );
}
