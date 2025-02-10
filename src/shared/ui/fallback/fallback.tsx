"use client";
import Image from "next/image"; 
import ErrorImage from "@/shared/assets/images/errorImage.svg";
// import { useEffect } from 'react';
// import { useRouter } from 'next/router'; 
import { RejectedDataType } from "@/shared/types/errorTypes";

interface FallbackProps {
    error: RejectedDataType; 
}

export const Fallback = ({ error }: FallbackProps) => {
    // const router = useRouter();

    // useEffect(() => {
    //     if (router.isReady) {}
    // }, [router]);

    // const handleGoHome = () => {
    //     if (router.isReady) { 
    //         router.push('/');
    //     }
    // };

    return (
        <div role='alert' className='fallback'>
            <Image src={ErrorImage} alt="Error occurred" className='fallback__img' />
            <h1 className='fallback__img'>Something went wrong</h1>
            <span className='fallback__describe'>
                {error?.messageError} {error?.status}
            </span>
            {/* <button onClick={handleGoHome} className='fallback__link'>
                Go to home page
            </button> */}
        </div>
    );
}
