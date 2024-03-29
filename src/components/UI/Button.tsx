import React from 'react';

const Button: React.FC<{
    children?: any; color:string; bgColor?: string; label?: string; onClick?:()=>{}; disabled?: boolean  }> = (props) => {
    const colorScheme = props.color;
    return (
        <React.Fragment>
            <button 
                style={{
                    backgroundColor: `${props.bgColor}`,
                    padding:12,
                    border:`1px solid ${colorScheme}`,
                    borderRadius:10,
                    color:`${colorScheme}`,
                    margin: 5,
                }}
                onClick={props.onClick}
            >
                {props.label}
                </button>
        </React.Fragment>
  );
};

export default Button;