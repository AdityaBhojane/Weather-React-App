function ErrorCard() {
  return (
    <>
      <div className="bg-Background w-full bg-no-repeat bg-cover bg-center h-screen">
        <div className="flex h-screen justify-center items-center">
          <div role="alert" className="alert alert-error w-1/5 ">
            <svg
             onClick={() => window.location.reload()}
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>
              <h2 className="text-xl font-bold">Wrong City Name !</h2> or Something is wrong
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ErrorCard;
