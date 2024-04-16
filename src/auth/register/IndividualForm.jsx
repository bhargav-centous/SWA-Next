import React from 'react'
import * as Yup from 'yup';
import Proptypes from 'prop-types'
import { useSnackbar } from 'notistack';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import LoadingButton from '@mui/lab/LoadingButton';

import { countries } from 'src/assets/data';

import FormProvider, { RHFTextField, RHFAutocomplete } from 'src/components/hook-form';

export default function IndividualForm({ setRegisterStep }) {
    const { enqueueSnackbar } = useSnackbar();
    const UpdateUserSchema = Yup.object().shape({
        firstName: Yup.string().required('First Name is required').trim(),
        lastName: Yup.string().required('Last Name is required').trim(),
        email: Yup.string().required('Email is required'.trim()).email('Email must be a valid email address'),
        contactNumber: Yup.string().required('Phone number is required').trim(),
        addressLine1: Yup.string().required('Address is required').trim(),
        stateName: Yup.string().required('State is required').trim(),
        cityName: Yup.string().required('City is required').trim(),
        zipCode: Yup.string().required('Zip code is required').trim(),
        countryName: Yup.string().required('Country is required').trim(),
    })

    const defaultValues = {
        firstName: 'Bhargav',
        lastName: 'Tank',
        email: 'test@gmail.com',
        contactNumber: '1233211230',
        addressLine1: 'Temp Address',
        stateName: 'Gujrat',
        cityName: 'Surat',
        zipCode: '395004',
    }

    const methods = useForm({
        resolver: yupResolver(UpdateUserSchema),
        defaultValues,
    });

    const {
        handleSubmit,
        formState: { isSubmitting },
    } = methods;

    const onSubmit = handleSubmit(async (data) => {
        try {
            await new Promise((resolve) => setTimeout(resolve, 500));
            // const tempData = { ...data, countryCodeID: countries.find((ele) => ele.label === data.countryName)?.code }
            // await postRequest(endpoints.register.IndividualExternalUser, tempData);
            enqueueSnackbar('Update success!')
            setRegisterStep(1)
        } catch (error) {
            console.error(error);
        }
    });
    return (
        <FormProvider methods={methods} onSubmit={onSubmit}>
            <Box>
                <Divider sx={{ mb: 2 }} />
            </Box>
            <Grid item xs={12} md={8}>
                <Typography sx={{ pb: 2, px: 3, fontWeight: 500, color: '#1D2630', fontSize: 14 }}>Personal Information</Typography>
                <Box
                    rowGap={3}
                    columnGap={2}
                    sx={{ px: 3 }}
                    display="grid"
                    gridTemplateColumns={{
                        xs: 'repeat(1, 1fr)',
                        sm: 'repeat(2, 1fr)',
                    }}
                >
                    <RHFTextField name="firstName" label="First Name" />
                    <RHFTextField name="lastName" label="Last Name" />
                    <RHFTextField name="email" label="Email Address" />
                    <RHFTextField name="contactNumber" label="Contact" />
                </Box>
            </Grid>
            <Box pt={2}>
                <Divider sx={{ mb: 2 }} />
            </Box>
            <Grid item xs={12} md={8}>
                <Typography sx={{ pb: 2, px: 3, fontWeight: 500, color: '#1D2630', fontSize: 14 }}>Address Information</Typography>
                <Box sx={{ mb: 3, px: 3 }}>
                    <RHFTextField name="addressLine1" label="Address line 1" />
                </Box>
                <Box
                    rowGap={3}
                    columnGap={2}
                    sx={{ px: 3, }}
                    display="grid"
                    gridTemplateColumns={{
                        xs: 'repeat(1, 1fr)',
                        sm: 'repeat(2, 1fr)',
                    }}
                >
                    <RHFTextField name="cityName" label="City" />
                    <RHFTextField name="stateName" label="State/Region" />
                    <RHFTextField name="zipCode" label="Zip/Code" />
                    <RHFAutocomplete
                        name="countryName"
                        type="country"
                        label="Country"
                        placeholder="Choose a country"
                        options={countries.map((option) => option.label)}
                        getOptionLabel={(option) => option}
                    />
                </Box>
            </Grid>
            <Stack spacing={3} alignItems="flex-end" sx={{ mt: 2, mb: 1, px: 3 }}>
                <LoadingButton sx={{ bgcolor: 'background.green', color: 'common.white' }} type="submit" variant="contained" loading={isSubmitting}>
                    Continue
                </LoadingButton>
            </Stack>
            {/* </Card> */}
            {/* </Container> */}
        </FormProvider>
    )
}

IndividualForm.propTypes = {
    setRegisterStep: Proptypes.func
}
