import React, { ReactNode } from 'react';
import {
    startRecording,
    stopRecording,
    ownerId,
    timestamp,
    isLocalUserRecordingOwner,
    status,
    setRecordingErrors,
    resetRecordingData,
    isRecordingModeActive,
    isError
} from '@dolbyio/comms-uikit-uikit';

import { useRecording, RecordingStatus } from '@dolbyio/comms-uikit-react';
const { startRecording, stopRecording, status: recordingStatus, isLocalUserRecordingOwner } = useRecording();

// Refer to example above
const isRecordingActive = isLocalUserRecordingOwner || recordingStatus === RecordingStatus.Active;

const RecordingButton = () => {
    const toggleRecord = () => {
        if (isRecordingActive) {
            stopRecording();
        } else {
            startRecording();
        }
    };

    return <button onClick={toggleRecord}>{isRecordingActive ? 'Stop Recording' : 'Start Recording'}</button>;
};
