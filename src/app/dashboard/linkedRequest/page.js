
import { Stack } from '@mui/material';

import Footerview from 'src/sections/footer/Footerview';
import LinkedRequest from 'src/sections/Linked-request/LinkedRequest';



// ----------------------------------------------------------------------

export const metadata = {
    title: 'SWA: Linked Request',
};

export default function Page() {
    return (
        <Stack justifyContent='space-between' sx={{ height: '100%' }}>
            <LinkedRequest />
            <Footerview />
        </Stack>
    );
}
