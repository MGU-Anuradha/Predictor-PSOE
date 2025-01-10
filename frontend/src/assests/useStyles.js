import { makeStyles } from '@mui/styles';  

const useStyles = makeStyles((theme) => ({
  textFeild: {
    width: '100%',
    height: "38px",
    borderRadius: "5px",
    borderColor: theme.palette.primary.main,  
    borderStyle: "solid",
    borderWidth: "1px",
    padding: "10px 15px",
    fontSize: "13px",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    cursor: 'pointer',
    color: "#707070"
  },
  button:{
    height: '40px',
    textTransform: 'none',
  },
  psoeGrid: {
    width: '100%',
    height: '38px',
    borderRadius: '5px',
    borderColor: 'transparent',
    borderStyle: 'solid',
    borderWidth: '1px',
    padding: '10px 15px',
    fontSize: '13px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    cursor: 'pointer',
    backgroundColor: '#EE8185', 
    color: 'black',
  }  
}));

export default useStyles;
