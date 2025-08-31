import { ProgressBarSize } from '@/types/componentTypes'
import React from 'react'

interface ProgressBarProps {
    progress: number,
    size: ProgressBarSize
}

const ProgressBar = ({ progress, size }: ProgressBarProps) => {
    return (
        <div className={`progress-bar-bg progress-bar-${size}`}>
            <div
                className="progress-bar-indicator"
                style={{ width: `${progress}%` }}
            ></div>
        </div>
    )
}

export default ProgressBar