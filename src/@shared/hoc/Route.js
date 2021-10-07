import React, { useState, useEffect } from 'react';

const Route = ({ path, WrappedComponent }) => {
  const currentLocation = window.location.pathname;

  return (
    <>
      {path === currentLocation ? <WrappedComponent></WrappedComponent> : null}
    </>
  );
};

export default Route;
