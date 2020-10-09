import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import './styles.css';

interface ButtonProps {
    placeholderText : string;
    isLoaderEnabled ?: boolean;
    disabled ?: boolean;
    loaderVisibility ?: boolean;
    onClick ?: {(event: any): any | null};
}

 const submitBtnPlaceholder = (placeholderText: string, loaderVisibility: boolean | undefined) => {
    if(loaderVisibility) {
        return <ClipLoader size={13} color={"#123abc"} loading={true} />
    }
    return placeholderText;
}

export default function (props:  ButtonProps) {
    const {disabled, placeholderText, loaderVisibility, onClick} = props;
    return  <button className="btn"  disabled={disabled} onClick={onClick}>{submitBtnPlaceholder(placeholderText, loaderVisibility)}</button>;
}