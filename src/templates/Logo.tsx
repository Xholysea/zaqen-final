import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? '240' : '180';
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`inline-flex items-center text-gray-900 ${fontStyle}`}>
      <img
        src="/logov3.png" // <-- Put your logo file path here
        width={size}
        height={size}
        className="mr-1"
        alt="Logo"
      />

      {AppConfig.site_name}
    </span>
  );
};

export { Logo };
