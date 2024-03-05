import { Global } from "@emotion/react"

const Fonts = () => (
    <Global
    styles={`
    @font-face {
        font-family: "Inter", sans-serif;
        src:
            local("Inter"),
                url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap')
    }
    `}/>
)

