import React from 'react'

export default function CheckBox() {
    return (
        <div className="flex items-start">
            <div className="flex items-center h-5">
                <input id="remember" type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-orange-300"
                />
            </div>
            <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-700 dark:text-gray-300">Remember me</label>
        </div>
    )
}