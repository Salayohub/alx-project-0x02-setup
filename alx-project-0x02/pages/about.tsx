import React from 'react';
import Button from '@/components/common/Button';

function AboutPage() {
    return (
        <div>
            <h1 className="text-4xl text-emerald-400">About Us</h1>
            <Button small={true} medium={false} large={false} roundedsmall={true} roundedmedium={false} roundedlarge={false} />
        </div>
    )
}

export default AboutPage;
