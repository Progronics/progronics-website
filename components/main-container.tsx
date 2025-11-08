import { ReactNode } from "react";


export default function MainContainer ({children, id, className} : {children : ReactNode, id : string, className : string | undefined}){

    return (
         <section id={id} className={className}>
            {children}
         </section>
    )
}