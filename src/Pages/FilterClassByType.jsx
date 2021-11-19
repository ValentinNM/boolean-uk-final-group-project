import { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Button, stepConnectorClasses } from "@mui/material";

export default function FilterClassByType(props) {
  const { classes, setClasses } = props;

  const [filter, setFilter] = useState([]);
  
  const handleChange = (event, oneClass) => {
      
    // need to get the value of classType from the event
    // and store that in a new array which will be used to
    // filter the classes, and get a new array of classes filtered by type
      if(event.target.checked !== false) {
          console.log("checked: ", event.target.checked);
          setFilter([...filter,
            oneClass]);    
        } else {  
            setFilter([ ...filter]);
        }
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        // props.filterClassByType(filter);
        
        setClasses([...filter]);
    };
    
    // const handleChange = (event, oneClass) => {
    //     event.preventDefault();
        
    //     // get a new list of classes based on the type
    //     const newClasses = classes.filter((c) => {
    //           return c.type === filter.type;
    //         });
    
    //         console.log("newClasses: ", newClasses);
    //         setClasses([...newClasses]);
    //     };

        console.log("filter: ", filter);
        
        return (
            <form
            className="padding filter-class-by-type add-trainer"
            onSubmit={handleSubmit}
            >
      <div className="two-column-grid-expand__right">
        <h3> 🔎 by class type</h3>
        <Button
        color="secondary"
        type="submit"
        // onClick={handleTypeLookUp}
        >
          Apply 
        </Button>
      </div>
      <FormGroup>
        <ul className="filters-list">
          {classes.map((oneClass, index) => {
            const { id, classType } = oneClass;
            return (
              <li>
                <FormControlLabel
                  key={index}
                  control={<Checkbox id="verify"/>}
                  label={classType}
                // onClick={handleChange}
                onClick={(e)=>handleChange(e, oneClass)}
                />
              </li>
            );
          })}
        </ul>
      </FormGroup>
    </form>
  );
}
