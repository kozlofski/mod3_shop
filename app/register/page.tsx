"use client";

import Input from '@/_components/basicComponents/Input'
import Logo from '@/_components/basicComponents/Logo'
import React from 'react'

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from 'zod'
import Button from '@/_components/basicComponents/Button';

const signupFormSchema = z.object({
    email: z.string().trim().email({ message: "Invalid email address" }),
    mobile: z.string().trim().regex(new RegExp(/^(\+\d{1,3}[- ]?)?\d{9}$/), { message: "Invalid mobile number - only digits please" }),
    password: z.string().trim().min(8, { message: "Password must contain min. 8 characters" })
        .regex(new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/g), { message: "password weak; must contain number, uppercase letter and a symbol" }),
    confirm: z.string().trim().min(1, { message: "Confirm password" }),
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

    return (
        <div className='register-container'>
            <Logo></Logo>
            <form onSubmit={handleSubmit((data) => console.log(data))}>
                <Input
                    id='email'
                    type='text'
                    size='xl'
                    {...register('email')}
                    data={{
                        placeholder: "Your Email",
                        label: 'Email',
                        error: errors.email?.message ?? "",
                        helper: "helper?"
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
                        helper: "helper?"
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
                        helper: "helper?"
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
                        helper: "helper?"
                    }}
                />
                <Button type="submit" width="8rem">Zarejestruj</Button>
            </form>
        </div>
    )
}

export default Page