import { AlertType, AlertVariant } from '@/types/componentTypes';
import React from 'react'
import { QuestionMarkCircled, XSign } from '../icons/icons';
import Button from '../button/Button';

// header, text, etc. should be in an alert object

interface AlertProps {
    // children: React.ReactNode,
    alertHeader: string,
    alertText: string,
    type: AlertType;
    variant: AlertVariant;
    className?: string,
    // onClick?: () => void
}

const Alert = ({ className, type, alertHeader, alertText, variant }: AlertProps) => {
    console.log("Variant", variant)
    return (
        <div className={`alert alert-${type} `}>
            <QuestionMarkCircled />
            <div className="flex flex-col grow">
                <h3 className="text-[20px] font-medium">{alertHeader}</h3>
                <p className="text-[16px] font-normal leading-[26px] mb-[32px]">{alertText}</p>
                <div className={`${variant === 'l' ? "alert-buttonsL" : "alert-buttonsSM"}`}>
                    <Button className={`btn btn-alert btn-${type} btn-alert${variant === "l" ? "Stroke" : "Naked"}`}>accept</Button>
                    <Button className={`btn btn-alert btn-${type} btn-alert${variant === "l" ? "Full" : "Naked"}`}>accept</Button>
                </div>
            </div>
            <div>
                <XSign />
            </div>
        </div>
    )
}

export default Alert