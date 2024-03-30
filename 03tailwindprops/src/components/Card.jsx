import React from 'react';

function Card(props,btnText) {
    // Logging the username received through props
    console.log(props.username);
  return (
    <div className="relative h-[400px] w-[300px] rounded-md ">
      {/* Image */}
      <img
        src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
        alt="AirMax Pro"
        className="z-0 h-full w-full rounded-md object-cover"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      {/* Content */}
      <div className="absolute bottom-4 left-4 text-left">
        {/* Username */}
        <h1 className="text-lg font-semibold text-white">{props.username}</h1>
        {/* Description */}
        <p className="mt-2 text-sm text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          debitis?
        </p>
        {/* Button */}
        <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
          {props.btnText} →
        </button>
      </div>
    </div>
  );
}

export default Card;
