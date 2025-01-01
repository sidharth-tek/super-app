import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import AppTheme from '../AppTheme';
import AppAppBar from '../../AppAppBar';
import Footer from '../../Footer';
import SingleUseThumbNail from '../../../single-use/SingleUseThumbNail';
import SingleUseApp from '../../../single-use/SingleUseApp';

export default function MainPage({ user, onLogOut }) {
    const [appToRender, setAppToRender] = React.useState(null)

    const handleOnAppClick = (app) => {
        setAppToRender(app)
    }
    return (
        <AppTheme disableCustomTheme>
            <CssBaseline enableColorScheme />

            <AppAppBar onLogout={onLogOut} />
            <div className='main-body' >
                {
                    !appToRender && (
                        <>
                            <h2>Welcome, {user.email}</h2>
                            <div className='services' >
                                <SingleUseThumbNail onThumbnailClick={handleOnAppClick} />
                            </div>
                        </>
                    )
                }
                {
                    appToRender === 'single-use' && (
                        <SingleUseApp />
                    )
                }
            </div>
            <div>
                <Divider />
                <Footer />
            </div>
        </AppTheme>
    );
}
