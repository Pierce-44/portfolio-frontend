interface Props {
  currentColors: {
    color1: string;
    color2: string;
    color3: string;
  };
}

export default function BottomBannerServer({ currentColors }: Props) {
  return (
    <div className="w-full fixed bottom-0 left-0 -z-10">
      <svg
        id="visual"
        viewBox="0 0 960 540"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        className="w-full h-auto"
      >
        <path
          d="M0 498L48 470L96 494L144 463L192 484L240 485L288 488L336 458L384 458L432 468L480 479L528 478L576 456L624 500L672 484L720 494L768 486L816 467L864 461L912 456L960 459L960 541L912 541L864 541L816 541L768 541L720 541L672 541L624 541L576 541L528 541L480 541L432 541L384 541L336 541L288 541L240 541L192 541L144 541L96 541L48 541L0 541Z"
          fill={currentColors.color1}
          className="transition-all duration-1000"
        />
        <path
          d="M0 494L48 509L96 483L144 499L192 510L240 497L288 480L336 483L384 502L432 483L480 506L528 483L576 513L624 505L672 510L720 506L768 494L816 478L864 489L912 514L960 494L960 541L912 541L864 541L816 541L768 541L720 541L672 541L624 541L576 541L528 541L480 541L432 541L384 541L336 541L288 541L240 541L192 541L144 541L96 541L48 541L0 541Z"
          fill={currentColors.color2}
          className="transition-all duration-1000"
        />
        <path
          d="M0 501L48 522L96 524L144 505L192 500L240 525L288 509L336 516L384 510L432 513L480 499L528 525L576 525L624 519L672 518L720 500L768 512L816 519L864 508L912 514L960 513L960 541L912 541L864 541L816 541L768 541L720 541L672 541L624 541L576 541L528 541L480 541L432 541L384 541L336 541L288 541L240 541L192 541L144 541L96 541L48 541L0 541Z"
          fill={currentColors.color3}
          className="transition-all duration-1000"
        />
      </svg>
    </div>
  );
}
