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

    return (
        <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

            <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <TextField label="Outlined" onChange={handleOnUrlEntry} />
                <Button variant="contained" onClick={handleOnCreateClick} >Create</Button>
            </Box>
            {
                !!singleUseUrl && (
                    <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Typography variant='body2' >{singleUseUrl}</Typography>
                        <IconButton><ContentCopyIcon /> </IconButton>
                    </Box>
                )
            }
        </Box>
    );
};

export default SingleUseApp;
