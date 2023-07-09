import { MoonIcon } from './icons/MoonIcon'
import { useState, useEffect } from 'react'
import { SunIcon } from './icons/SunIcon'


const initialThemeDark = localStorage.getItem('theme') === 'dark'
export const Header = () => {

    const [themeDark, setThemeDark] = useState(initialThemeDark)


    useEffect(() => {



        if(themeDark) {
            document.documentElement.classList.add("dark")
            localStorage.setItem('theme', 'dark')

        }else{
            document.documentElement.classList.remove("dark")
            localStorage.setItem('theme', 'light')

        }

    }, [themeDark])



    return (
        <header className="container mx-auto px-4 pt-8">
            <div className="flex justify-between">
                <h1 className="uppercase text-white text-3xl font-semibold tracking-[0.3em]">Todo</h1>
                <button onClick={() => setThemeDark(!themeDark)}>
                    {themeDark ? <SunIcon /> : <MoonIcon />}
                </button></div>


        </header>)
}
