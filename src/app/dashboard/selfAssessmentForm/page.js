
import Stack from '@mui/material/Stack';

import Footerview from 'src/sections/footer/Footerview';
import SelfAssessmentForm from 'src/sections/Self-Assessment-Form/SelfAssessmentForm';



// ----------------------------------------------------------------------

export const metadata = {
    title: 'SWA: Self Assessment Form',
};

export default function Page() {
    return (
        <Stack justifyContent='space-between' sx={{ height: '100%' }}>
            <SelfAssessmentForm />
            <Footerview />
        </Stack>
    );
}
