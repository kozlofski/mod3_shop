"use client";

import Input from '@/_components/basicComponents/Input'
import Logo from '@/_components/basicComponents/Logo'
import React, { useState } from 'react'

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from 'zod'
import Button from '@/_components/basicComponents/Button';
import { RegisterData } from '@/types/dataTypes';
import Dropdown from '@/_components/basicComponents/Dropdown';

import { countries } from '@/lib/countries';
import DropdownInput from '@/_components/basicComponents/DropdownInput';
import { SuccessCircle } from '@/_components/icons/icons';

const signupFormSchema = z.object({
    email: z.string().trim().email({ message: "Invalid email address" }),
    mobile: z.string().trim().regex(new RegExp(/^(\+\d{1,3}[- ]?)?\d{9}$/), { message: "Invalid mobile number - only digits please" }),
    password: z.string().trim().min(8, { message: "Password must contain min. 8 characters" })
        .regex(new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/g), { message: "Password at least 8 characters and includes at least 1 upper case letter. 1 lower case letter and 1 number" }),
    confirm: z.string().trim().min(1, { message: "Confirm password" }),
    country: z.string().trim().min(1, { message: "Select a country" })
}).superRefine((val, ctx) => {
    if (val.password !== val.confirm) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'Passwords aren\'t identical',
            path: ['confirm'],
        })
    }
})

const Page = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(signupFormSchema) })
    const [registerSuccessful, setRegisterSuccessful] = useState(false)

    const onSubmit = async (data: RegisterData) => {
        // console.log("Submitting data: ", data)
        const response = await fetch("/api/register", {
            method: 'POST',
            body: JSON.stringify({
                email: data.email,
                password: data.password,
                mobile: data.mobile,
                country: data.country
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (response) setRegisterSuccessful(true)
    }

    return (
        <>
            {registerSuccessful ?
                <div className='register-successful'>
                    <SuccessCircle></SuccessCircle>
                    <h2>Thank you!</h2>
                    <h3>You have successfully registered</h3>
                    <p>Please check your e-mail for further information. Let’s exploring our products and enjoy many gifts.</p>
                    <p>Having problem? Contact us</p>
                </div>
                :
                <div className='register-container'>
                    <Logo></Logo>
                    <div className='register-subcontainer framedComponent'>
                        <h2 className='create-account-header'>Create Account</h2>
                        <form className='register-form' onSubmit={handleSubmit(onSubmit)}>
                            <Input
                                id='email'
                                type='text'
                                size='xl'
                                {...register('email')}
                                data={{
                                    placeholder: "Your Email",
                                    label: 'Email',
                                    error: errors.email?.message ?? "",
                                    helper: " "
                                }}
                            />
                            <Input
                                id='mobile'
                                type='text'
                                size='xl'
                                {...register('mobile')}
                                data={{
                                    placeholder: "Mobile Number",
                                    label: 'Mobile Number',
                                    error: errors.mobile?.message ?? "",
                                    helper: " "
                                }}
                            />
                            <Input
                                id='password'
                                type='password'
                                size='xl'
                                {...register('password')}
                                data={{
                                    placeholder: "Password",
                                    label: 'Password',
                                    error: errors.password?.message ?? "",
                                    helper: "Password at least 8 characters and includes at least 1 upper case letter. 1 lower case letter and 1 number"
                                }}
                            />
                            <Input
                                id='confirm'
                                type='password'
                                size='xl'
                                {...register('confirm')}
                                data={{
                                    placeholder: "Confirm Password",
                                    label: 'Confirm Password',
                                    error: errors.confirm?.message ?? "",
                                    helper: " "
                                }}
                            />

                            <DropdownInput
                                id='country'
                                {...register('country')}
                                options={countries}
                                label='Country or region'
                                name={''}
                                size={'xl'} />

                            <Button type='submit' size='xl' variant='full'>Create Account</Button>
                        </form>
                    </div>
                </div>
            }
        </>
    )
}

export default Page