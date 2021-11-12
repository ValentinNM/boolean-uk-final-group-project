import { useState } from "react";
import Button from "@mui/material/Button";

export default function ViewMember(props) { 

return( 
    <section className="all-member-details-container two-column-grid-forms">
        <ul>
            {props.map((memeber, index)=> {

                const { } = memeber;
                
                return (
                    <li>
                        <div className="member-main-details">
                            <h3>Username: {} </h3>
                            <h3>Membership: {} </h3>
                            <h3>Status: {} </h3>
                        </div>
                        <div className="profile">
                            <h3> First Name: {} </h3>
                            <h3> Last Name: {} </h3>
                        </div>
                        <div className="address">
                            <h3> Property No: {} </h3>
                            <h3> Street: {} </h3>
                            <h3> City: {} </h3>
                            <h3> Postcode: {} </h3>
                            <h3> Country: {} </h3>
                        </div>
                        <div>
                            <Button variant="container"> Edit </Button>
                            <Button variant="container"> DELETE </Button>

                        </div>
                    </li>
                )
            })}
        </ul>
    </section>
    )
}