"use client";

import Input from '@/_components/basicComponents/Input'
import Logo from '@/_components/basicComponents/Logo'
import React, { useState } from 'react'

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from 'zod'
import Button from '@/_components/basicComponents/Button';
import { LoginData } from '@/types/dataTypes';
import { emailOrMobileRegex } from '@/types/regex';

const signupFormSchema = z.object({
    emailOrMobile: z.string().trim().min(1, { message: "Provide an email or mobile number" }).regex(emailOrMobileRegex, { message: "Invalid email or mobile number" }),
    password: z.string().trim().min(1, { message: "Provide a password" }),
})

const Page = () => {
    const router = useRouter()
    const { register, handleSubmit, formState: { errors, touchedFields } } = useForm({
        resolver: zodResolver(signupFormSchema),
        mode: "onBlur",
    })
    type signInVisible = "email" | "password"
    const [signInInputVisible, setSignInInputVisible] = useState<signInVisible>("email")

    const onSubmit = async (data: LoginData) => {
        const result = await signIn('credentials', {
            password: data.password,
            emailOrMobile: data.emailOrMobile,
            redirect: false,
        })
        if (result?.error === null) {
            router.push('/')
        } else {
            console.log("Some errors")
            setSignInInputVisible("email")
        }
        console.log("On submit result:", result)
    }

    const handleSetInput = () => {
        // trigger()
        if (("emailOrMobile" in touchedFields) && !errors.emailOrMobile) setSignInInputVisible("password")
        else setSignInInputVisible("email")
    }

    return (
        <div className='login-container'>
            <Logo></Logo>
            <div className='login-subcontainer framedComponent'>

                <form onSubmit={handleSubmit(onSubmit)}>
                    {signInInputVisible === "email" &&
                        <>
                            <Input
                                id='emailOrMobile'
                                type='text'
                                size='xl'
                                {...register('emailOrMobile')}
                                data={{
                                    placeholder: "Your Email or Mobile",
                                    label: 'Email or mobile phone number',
                                    error: errors.emailOrMobile?.message ?? "",
                                    helper: "helper?"
                                }}
                            />
                            <Button
                                onClick={handleSetInput}
                                variant='full'
                                size='xl'>Continue</Button>
                            {/* <button onClick={handleSetInput} >Continue</button>) */}
                        </>
                    }
                    {signInInputVisible === "password" && (<>
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
                        <Button type="submit" variant='full' size='xl'>Zaloguj</Button>
                    </>)}
                </form>
            </div>
        </div>
    )
}

export default Page