import React from "react";
import './loading.css'

export const loading = (): JSX.Element => {
  return (
    <>
      <div className="spinner-box">
        <div className="circle-border">
          <div className="circle-core">
            {/* Anything? */}
          </div>
        </div>
      </div>

      <div className="spinner-box">
        <div className="blue-orbit leo">{/* Anything? */}</div>

        <div className="green-orbit leo">{/* Anything? */}</div>

        <div className="red-orbit leo">{/* Anything? */}</div>

        <div className="white-orbit w1 leo">{/* Anything? */}</div>
        <div className="white-orbit w2 leo">{/* Anything? */}</div>
        <div className="white-orbit w3 leo">{/* Anything? */}</div>
      </div>

      <div className="spinner-box">
        <div className="leo-border-1">
          <div className="leo-core-1">{/* Anything? */}</div>
        </div>
        <div className="leo-border-2">
          <div className="leo-core-2">{/* Anything? */}</div>
        </div>
      </div>

      <div className="spinner-box">
        <div className="configure-border-1">
          <div className="configure-core">{/* Anything? */}</div>
        </div>
        <div className="configure-border-2">
          <div className="configure-core">{/* Anything? */}</div>
        </div>
      </div>

      <div className="spinner-box">
        <div className="pulse-container">
          <div className="pulse-bubble pulse-bubble-1">{/* Anything? */}</div>
          <div className="pulse-bubble pulse-bubble-2">{/* Anything? */}</div>
          <div className="pulse-bubble pulse-bubble-3">{/* Anything? */}</div>
        </div>
      </div>

      <div className="spinner-box">
        <div className="solar-system">
          <div className="earth-orbit orbit">
            <div className="planet earth">{/* Anything? */}</div>
            <div className="venus-orbit orbit">
              <div className="planet venus">{/* Anything? */}</div>
              <div className="mercury-orbit orbit">
                <div className="planet mercury">{/* Anything? */}</div>
                <div className="sun">{/* Anything? */}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="spinner-box">
        <div className="three-quarter-spinner">{/* Anything? */}</div>
      </div>

      <div className="loading">
        <svg height="114px" width="114px" xmlns="http://www.w3.org/2000/svg">
          <g fill="#1684D5" fillRule="nonzero">
            <path d="M89.563 72.011c-2.319 0-7.352-.438-26.297 4.189s-24.969 7.93-26.881 8.932c-2.636 1.384-2.378 2.368-2.378 2.368 9.321 6.832 21.285 9.153 32.547 6.316C77.817 90.978 87.17 83.286 92 72.888c-.02-.03-.258-.887-2.437-.877zM93.88 48.648c-1.572-1.12-4.371-3.963-32.672 2.12-28.3 6.083-38.998 14.138-39.656 14.634A3.965 3.965 0 0 0 20 67.76 38.59 38.59 0 0 0 30.982 86a2.133 2.133 0 0 1 .904-1.486 39.347 39.347 0 0 1 6.935-3.716 68.138 68.138 0 0 1 8.163-2.744s2.377-5.548 2.662-6.252c.25-.568.531-1.12.845-1.654a4.275 4.275 0 0 1 1.965-1.17c.854-.317 11.355-3.12 17.682-4.28 6.326-1.159 14.646-2.556 19.312-2.724 4.47-.149 5.108 1.12 5.157 1.228a38.555 38.555 0 0 0-.688-14.554h-.039z" />
            <path d="M30.35 56.616a152.469 152.469 0 0 1 14.451-5.19s2.688-5.287 3.495-6.71c.807-1.424 4.135-2.63 20.673-5.516 18.507-3.232 21.598-.396 22.031.227a38.724 38.724 0 0 0-9.844-12.02c-.827-.543-6.891-3.726-29.07 1.78-20.673 5.15-27.672 10.378-29.818 12.602A38.397 38.397 0 0 0 19.591 64c.423-1.937 4.36-4.626 10.76-7.384z" />
            <path d="M30.843 33.394a120.343 120.343 0 0 1 12.143-4.461l2.657-3.948c1.377-2.033 3.591-2.902 11.533-4.007 6.376-.878 9.515-.494 10.824-.207C50.584 15.274 31.725 22.913 23 39c.05-.109 1.722-2.734 7.843-5.606z" />
            <g>
              <path
                className="spinner"
                d="M57.88 106.506c-24.417.002-45.146-17.978-48.71-42.249a44.568 44.568 0 0 1-.386-3.289 5.13 5.13 0 0 0 3.366-5.597 5.111 5.111 0 0 0-4.845-4.367 5.107 5.107 0 0 0-5.173 3.968 5.134 5.134 0 0 0 2.914 5.847C7.103 87.997 29.647 108.995 56.772 109c.692 0 1.374 0 2.057-.05C78.49 107.74 95.695 95.24 103 76.856c-7.846 18.01-25.555 29.647-45.12 29.65zM56.12 7.494c24.417-.002 45.146 17.978 48.71 42.249.169 1.083.297 2.176.386 3.289a5.13 5.13 0 0 0-3.366 5.597 5.111 5.111 0 0 0 4.845 4.367 5.107 5.107 0 0 0 5.173-3.968 5.134 5.134 0 0 0-2.914-5.847C106.897 26.003 84.353 5.005 57.228 5c-.692 0-1.374 0-2.057.05C35.51 6.26 18.305 18.76 11 37.144c7.846-18.01 25.555-29.647 45.12-29.65z"
              />
            </g>
          </g>
        </svg>

        <p>
          Loading<span className="d">.</span>
          <span className="d d-2">.</span>
          <span className="d d-3">.</span>
        </p>
      </div>
    </>
  );
};

export default loading;