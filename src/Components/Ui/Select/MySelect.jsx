import React from "react";

const MySelect = ({options, defaultValue, value, onChange}) => {
    return (
        <div>
            <select value={value} onChange={event => onChange(event.target.value)} className="border-black  border-2">
                <option disabled value="">{defaultValue}</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>{option.name}</option>
                ))}
            </select>
        </div>
    );
};
export default MySelect;
