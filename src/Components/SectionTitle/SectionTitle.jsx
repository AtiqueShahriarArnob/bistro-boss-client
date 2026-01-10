import React from 'react';

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="text-center mb-12 mt-12">
            <p className="text-yellow-600 italic mb-2">
                {subHeading}
            </p>

            <h3 className="text-4xl font-semibold border-y-4 inline-block py-3 px-8">
                {heading}
            </h3>
        </div>

    );
};

export default SectionTitle;