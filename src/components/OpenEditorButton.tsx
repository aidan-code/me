'use client'

import React from 'react'
import { useText } from '@/context/TextContext'

const OpenEditorButton: React.FC = () => {
    const { showEditor } = useText()

    return (
        <button
            onClick={showEditor}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
            Open Editor
        </button>
    )
}

export default OpenEditorButton