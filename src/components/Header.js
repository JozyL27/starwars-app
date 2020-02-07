import React from 'react';


export default function Header() {
    return (
        <>
        <h1>
            Star Wars App!
        </h1>
        <p aria-live="polite" className="about">
            Enter a name or title below to search the Star Wars galaxy! <br /> To retrieve a list
            of people, species, films, etc leave the text area blank!
        </p>
        </>
    )
}
