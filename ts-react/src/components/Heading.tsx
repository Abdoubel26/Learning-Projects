import type { ReactElement } from "react";

type HeadingProps = {title: string}

function Heading(headingProps: HeadingProps): ReactElement {
    return ( 
    <>
    <h1>{`${headingProps.title}`}</h1>
    </> );
}

export default Heading;