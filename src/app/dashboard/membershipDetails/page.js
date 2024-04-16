
import { Stack } from '@mui/material';

import Footerview from 'src/sections/footer/Footerview';
import AccountView from 'src/sections/MembershipDetails/user-profile-view';



// ----------------------------------------------------------------------

export const metadata = {
    title: 'SWA: Membership Details',
};

export default function Page() {
    return (
        <Stack justifyContent='space-between' sx={{ height: '100%' }}>
            <AccountView />
            <Footerview />
        </Stack>
    );
}
