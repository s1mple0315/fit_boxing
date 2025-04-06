const Arrow = ({fill}) => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.1587 13.4086H0.336426V11.5914H21.1587L12.2001 1.78496L13.374 0.5L24.3364 12.5L13.374 24.5L12.2001 23.215L21.1587 13.4086Z"
        fill={fill}
      />
    </svg>
  );
};

export default Arrow;
