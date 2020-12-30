import "./Input.scss";
import TextField from '@material-ui/core/TextField';

function Input() {
  return (
    <div>
      <h1>Input Fields</h1>
      <div className="fields">
        <TextField  
          label="Input field 1" 
          className="field" 
        />
      </div>
      <div className="fields">
        <TextField
            id="filled-required"
            label="Input field 2"
            // defaultValue="Hello World"
            variant="filled"
            className="field"
          />
      </div>
      <div className="fields">
        <TextField
          id="outlined-required"
          label="Input field 3"
          variant="outlined"
          className="field"
          />
      </div>
    </div>
  )
}

export default Input;
