import React from "react";

interface Props {}

const HeroBanner = (props: Props) => {
    return (
        <div>
            <p style={{ fontFamily: 'Barlow', fontSize: '64px' }}>
                Minimis Studio designs and develops <br />
                experiences that makes <br />
                personal finance <span style={{ fontWeight: 'bolder', textDecoration: 'underline'}}>simple.</span>
            </p>

            <button style={{ marginTop: '15px', fontFamily: 'Barlow', fontSize: '14px', padding: '15px 40px', backgroundColor: 'black', border: 'none', color: 'white'}}>
                sign up
            </button>
        </div>
    );
};

export default HeroBanner;
