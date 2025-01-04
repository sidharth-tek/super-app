import React, { useRef, useState } from 'react';
import { Box, Button, IconButton, TextField, Typography } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { create } from '../../utils/single-use-apis';

const SingleUseApp = ({ }) => {
    const [singleUseUrl, setSingleUseUrl] = useState('')

    const ref = useRef({
        url: ''
    })

    const handleOnCreateClick = async () => {
        const createResponse = await create(ref.current.url)
        if (createResponse.singleUseUrl) {
            setSingleUseUrl(createResponse.singleUseUrl)
        } else {
            setSingleUseUrl('')
        }
    }

    const handleOnUrlEntry = (evt) => {
        ref.current.url = evt.target.value
    }

    const handleOnCopy = () => {
        navigator.clipboard.writeText(singleUseUrl)
    }

    return (
        <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', rowGap: '32px' }}>

            <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '70%', columnGap: '16px' }}>
                <TextField label="Enter URL" size='small' fullWidth onChange={handleOnUrlEntry} />
                <Button variant="contained" onClick={handleOnCreateClick} >Create</Button>
            </Box>
            {
                !!singleUseUrl && (
                    <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '70%', columnGap: '16px' }}>
                        <TextField label="Single use URL" size='small' fullWidth value={singleUseUrl} disabled />
                        <Button variant="contained" startIcon={<ContentCopyIcon />} onClick={handleOnCopy} >Copy</Button>
                    </Box>
                )
            }
        </Box >
    );
};

export default SingleUseApp;
