import { AlertSize, AlertType } from '@/types/componentTypes';
import React from 'react'
import { QuestionMarkCircled, XSign } from '../icons/icons';
import AlertButton from './AlertButton';

// header, text, etc. should be in an alert object

interface AlertProps {
    alertHeader: string,
    alertText: string,
    type: AlertType;
    size: AlertSize;
    className?: string,
    // onClick?: () => void
}

const Alert = ({ className, type, alertHeader, alertText, size }: AlertProps) => {
    return (
        <div className={`alert alert-${type} `}>
            <QuestionMarkCircled />
            <div className="flex flex-col grow">
                <div className={`flex ${size === 's' ? "flex-row justify-start items-baseline gap-[12px]" : "flex-col"} mb-[32px]`}>
                    <h3 className="text-[20px] font-medium">{alertHeader}</h3>
                    <p className="text-[16px] font-normal leading-[26px] ">{alertText}</p>
                </div>
                <div className={`${size === 'l' ? "alert-buttonsL" : "alert-buttonsSM"}`}>
                    <AlertButton color={type} variant={size === 'l' ? "stroke" : "naked"}>Opcja 1</AlertButton>
                    <AlertButton color={type} variant={size === 'l' ? "full" : "naked"}>Opcja 2</AlertButton>
                </div>
            </div>
            <div>
                <XSign />
            </div>
        </div>
    )
}

export default Alert