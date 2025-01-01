import React from 'react';
import { Avatar, Typography } from '@mui/material';
import { green } from '@mui/material/colors';
import HttpIcon from '@mui/icons-material/Http';

const SingleUseThumbNail = ({ onThumbnailClick = () => { } }) => {

    const handleOnThumbnailClick = () => {
        onThumbnailClick('single-use')
    }

    return (
        <div className='thumb-nail' onClick={handleOnThumbnailClick} >
            <Avatar sx={{ bgcolor: green[500] }}>
                <HttpIcon />
            </Avatar>
            <Typography component="label" variant='caption' > Single use URLs </Typography>
        </div>
    );
};

export default SingleUseThumbNail;
