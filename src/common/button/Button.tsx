import React from 'react';
import './styles.css';

interface ButtonProps {
    placeholderText : string;
    isLoaderEnabled ?: boolean;
    disabled ?: boolean;
    loaderVisibility ?: boolean;
    onClick ?: {(event: any): any | null};
    style: {}
}

export default function (props:  ButtonProps) {
    const {disabled, placeholderText, loaderVisibility, onClick, style} = props;
    return  <button disabled={disabled} onClick={onClick} style={style}>{placeholderText}</button>;
}