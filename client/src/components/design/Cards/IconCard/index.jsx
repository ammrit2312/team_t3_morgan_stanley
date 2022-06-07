import React from "react";

const IconCard = ({title, Icon, detail}) => {
    return (
        <div>
            {Icon}
            {title}
            {detail}
        </div>
    );
}
 
export default IconCard;