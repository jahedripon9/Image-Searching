import React from 'react';

const ImageCard1 = ({ image }) => {

    const tags = image.tags.split(',');
    return (
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-10 mx-auto">
                <div class="flex flex-auto -m-4">
                    <div class="p-4 md:w-4/3 w-full">
                        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                            <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={image.webformatURL} alt="blog" /> 
                            <div class="p-6">
                                <h2 class="tracking-widest text-1xl title-font font-bold text-blue-400 mb-1">Photo by {image.user}</h2> <hr />
                                <div class="flex items-center flex-wrap my-3">
                                    <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                        <strong>Views: </strong>
                                        {image.views}
                                    </span>
                                    <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                        <strong>Downloads: </strong>
                                        {image.downloads}
                                    </span>
                                    <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                                        <strong>Likes: </strong>
                                        {image.likes}
                                    </span>
                                </div>
                                <div class="flex items-center flex-wrap ">
                                    <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1  ">
                                        {tags.map((tag, index) => (
                                            <span key={index} className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semi text-gray-700 mr-2">
                                                #{tag}
                                            </span>
                                        ))}
                                    </span>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImageCard1;